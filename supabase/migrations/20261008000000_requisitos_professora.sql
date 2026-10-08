-- Migration aditiva. Aplicar somente após revisão/autorização no ambiente desejado.
begin;
alter table public."Funcionario" add column "observacoes" text not null default '';
-- Null preserva a ausência de informação nos cadastros anteriores.
alter table public."Funcionario" add column "pcd" boolean;

create table public."LancamentoHoraExtra" (
  "id" text primary key default gen_random_uuid()::text,
  "funcionarioId" text not null references public."Funcionario"("id") on delete restrict,
  "inicio" date not null,
  "fim" date not null,
  "folhaId" text not null references public."FolhaPagamento"("id") on delete restrict,
  "itemFolhaId" text not null references public."ItemFolha"("id") on delete restrict,
  "minutos" integer not null check ("minutos" > 0),
  "createdAt" timestamptz not null default now(),
  unique ("funcionarioId", "inicio", "fim")
);
create table public."LancamentoHoraExtraPonto" (
  "pontoId" text primary key references public."RegistroPonto"("id") on delete restrict,
  "lancamentoId" text not null references public."LancamentoHoraExtra"("id") on delete restrict,
  "minutos" integer not null check ("minutos" > 0)
);
alter table public."LancamentoHoraExtra" enable row level security;
alter table public."LancamentoHoraExtraPonto" enable row level security;
revoke all on public."LancamentoHoraExtra", public."LancamentoHoraExtraPonto" from anon, authenticated;
grant select, insert on public."LancamentoHoraExtra", public."LancamentoHoraExtraPonto" to service_role;

create function public.proteger_ponto_lancado() returns trigger language plpgsql set search_path = public as $$
begin
  if exists (select 1 from public."LancamentoHoraExtraPonto" where "pontoId" = old.id) then
    raise exception 'Ponto já vinculado à folha; preserve a origem do lançamento.' using errcode = 'P0001';
  end if;
  return new;
end;
$$;
revoke all on function public.proteger_ponto_lancado() from public, anon, authenticated;
create trigger "RegistroPonto_proteger_lancado" before update on public."RegistroPonto" for each row execute function public.proteger_ponto_lancado();

-- Um único RPC grava folha, evento e vínculos em transação. Exclusividade por ponto
-- impede duplicidade inclusive com períodos sobrepostos e solicitações concorrentes.
create function public.confirmar_horas_extras(p_owner text, p_funcionario text, p_inicio date, p_salario double precision, p_pontos jsonb)
returns jsonb language plpgsql set search_path = public as $$
declare
  funcionario public."Funcionario";
  ponto public."RegistroPonto";
  origem jsonb;
  total integer := 0;
  valor numeric;
  folha text;
  item text;
  lancamento text;
  fgts boolean;
begin
  select * into funcionario from public."Funcionario" where id = p_funcionario and "ownerId" = p_owner for update;
  if not found or funcionario."salarioBase" is distinct from p_salario then raise exception 'Cadastro alterado; consulte novamente.' using errcode = 'P0001'; end if;
  if jsonb_typeof(p_pontos) <> 'array' or jsonb_array_length(p_pontos) = 0 then raise exception 'Sem horas extras.' using errcode = 'P0001'; end if;
  for origem in select value from jsonb_array_elements(p_pontos) loop
    select * into ponto from public."RegistroPonto" where id = origem->>'id' and "funcionarioId" = p_funcionario for update;
    if not found or ponto.data < p_inicio::timestamp at time zone 'UTC' or ponto.data >= (p_inicio + 30)::timestamp at time zone 'UTC'
       or ponto."horasExtras" is distinct from origem->>'horasExtras' or (origem->>'minutos')::integer <= 0 then
      raise exception 'Pontos alterados; consulte novamente.' using errcode = 'P0001';
    end if;
    total := total + (origem->>'minutos')::integer;
  end loop;
  select "incideFGTS" into fgts from public."EventoFolha" where codigo = '0006' and tipo = 'PROVENTO';
  if not found then raise exception 'Evento 0006 não disponível.' using errcode = 'P0001'; end if;
  valor := round((p_salario / 220 * 1.5 * total / 60)::numeric, 2);
  insert into public."FolhaPagamento" ("funcionarioId", "mesReferencia", "totalProventos", "totalDescontos", "salarioLiquido", "fgtsDoMes")
  values (p_funcionario, p_inicio::text || '/' || (p_inicio + 29)::text, p_salario + valor, 0, p_salario + valor, round(((p_salario + case when fgts then valor else 0 end) * 0.08)::numeric, 2)) returning id into folha;
  insert into public."ItemFolha" ("folhaId", "codigoEvento", tipo, referencia, "valorCalculado", "memoriaCalculo")
  values (folha, '0006', 'PROVENTO', (total::numeric / 60)::text || 'h', valor, (total::numeric / 60)::text || 'h x (R$ ' || round((p_salario / 220)::numeric, 2)::text || ' + 50%)') returning id into item;
  insert into public."LancamentoHoraExtra" ("funcionarioId", inicio, fim, "folhaId", "itemFolhaId", minutos)
  values (p_funcionario, p_inicio, p_inicio + 29, folha, item, total) returning id into lancamento;
  insert into public."LancamentoHoraExtraPonto" ("pontoId", "lancamentoId", minutos)
  select value->>'id', lancamento, (value->>'minutos')::integer from jsonb_array_elements(p_pontos);
  return jsonb_build_object('id', lancamento, 'folhaId', folha, 'itemFolhaId', item, 'minutos', total, 'valor', valor);
end;
$$;
revoke all on function public.confirmar_horas_extras(text,text,date,double precision,jsonb) from public, anon, authenticated;
grant execute on function public.confirmar_horas_extras(text,text,date,double precision,jsonb) to service_role;
notify pgrst, 'reload schema';
commit;
