-- TalentLab: execute uma vez em um projeto Supabase sem estas tabelas.
-- Todas as alteracoes sao atomicas; nao apaga tabelas existentes.
begin;

create type public."TipoEvento" as enum ('PROVENTO', 'DESCONTO');
create type public."TipoAtividade" as enum ('pratica', 'simulacao', 'documento', 'calculo');
create type public."MecanismoAtividade" as enum ('empresas', 'cargos', 'funcionarios', 'ponto', 'aso', 'folha', 'custos', 'contratacao');
create type public."StatusPonto" as enum ('REGULAR', 'ATRASO');
create type public."ResultadoASO" as enum ('APTO', 'INAPTO');
create type public."TipoNotificacao" as enum ('NOVA_ATIVIDADE', 'ATIVIDADE_CONCLUIDA');
create type public."DestinoNotificacao" as enum ('PROFESSOR', 'ALUNO');

create table public."Empresa" (
  "ownerId" text not null default 'professor',
  "id" text not null primary key default gen_random_uuid()::text,
  "razaoSocial" text not null,
  "nomeFantasia" text,
  "cnpj" text not null,
  "cidadeUF" text,
  "createdAt" timestamptz not null default now(),
  "updatedAt" timestamptz not null default now(),
  unique ("ownerId", "cnpj")
);

create table public."Setor" (
  "id" text not null primary key default gen_random_uuid()::text,
  "nome" text not null,
  "empresaId" text not null
);

create table public."Cargo" (
  "ownerId" text not null default 'professor',
  "id" text not null primary key default gen_random_uuid()::text,
  "codigo" text not null,
  "titulo" text not null,
  "salarioBase" double precision not null,
  "jornadaMensal" integer not null,
  "adicionalInsalubridade" boolean not null default false,
  "adicionalPericulosidade" boolean not null default false,
  unique ("ownerId", "codigo")
);

create table public."Funcionario" (
  "ownerId" text not null default 'professor',
  "id" text not null primary key default gen_random_uuid()::text,
  "codigo" text not null,
  "empresaId" text not null,
  "nome" text not null,
  "cpf" text not null,
  "cargoId" text not null,
  "salarioBase" double precision not null,
  "dependentes" integer not null default 0,
  "dataAdmissao" timestamptz not null,
  "createdAt" timestamptz not null default now(),
  "updatedAt" timestamptz not null default now(),
  unique ("ownerId", "codigo"),
  unique ("ownerId", "cpf")
);

create table public."RegistroPonto" (
  "id" text not null primary key default gen_random_uuid()::text,
  "funcionarioId" text not null,
  "data" timestamptz not null,
  "entrada" text not null,
  "saidaAlmoco" text not null,
  "retornoAlmoco" text not null,
  "saida" text not null,
  "horasExtras" text not null default '0h',
  "status" public."StatusPonto" not null default 'REGULAR',
  "createdAt" timestamptz not null default now()
);

create table public."RegistroASO" (
  "id" text not null primary key default gen_random_uuid()::text,
  "funcionarioId" text not null,
  "tipo" text not null,
  "medico" text not null,
  "data" timestamptz not null,
  "resultado" public."ResultadoASO" not null default 'APTO',
  "createdAt" timestamptz not null default now()
);

create table public."EventoFolha" (
  "codigo" text not null primary key,
  "nome" text not null,
  "tipo" public."TipoEvento" not null,
  "percentualFixa" double precision,
  "incideINSS" boolean not null default false,
  "incideIRRF" boolean not null default false,
  "incideFGTS" boolean not null default false,
  "descricaoDidatica" text not null
);

create table public."FolhaPagamento" (
  "id" text not null primary key default gen_random_uuid()::text,
  "funcionarioId" text not null,
  "mesReferencia" text not null,
  "totalProventos" double precision not null,
  "totalDescontos" double precision not null,
  "salarioLiquido" double precision not null,
  "fgtsDoMes" double precision not null,
  "createdAt" timestamptz not null default now(),
  unique ("funcionarioId", "mesReferencia")
);

create table public."ItemFolha" (
  "id" text not null primary key default gen_random_uuid()::text,
  "folhaId" text not null,
  "codigoEvento" text not null,
  "tipo" public."TipoEvento" not null,
  "referencia" text not null,
  "valorCalculado" double precision not null,
  "memoriaCalculo" text not null
);

create table public."Turma" (
  "id" text not null primary key default gen_random_uuid()::text,
  "nome" text not null,
  "createdAt" timestamptz not null default now()
);

create table public."Aluno" (
  "id" text not null primary key default gen_random_uuid()::text,
  "nome" text not null,
  "matricula" text not null unique,
  "senhaHash" text,
  "turmaId" text not null,
  "createdAt" timestamptz not null default now()
);

create table public."AtividadeConclusao" (
  "id" text not null primary key default gen_random_uuid()::text,
  "activityId" text not null,
  "alunoId" text not null,
  "concluidaEm" timestamptz not null default now(),
  unique ("activityId", "alunoId")
);

create table public."Notificacao" (
  "id" text not null primary key default gen_random_uuid()::text,
  "mensagem" text not null,
  "tipo" public."TipoNotificacao" not null,
  "destino" public."DestinoNotificacao" not null,
  "alunoId" text,
  "lida" boolean not null default false,
  "createdAt" timestamptz not null default now()
);

create table public."Activity" (
  "id" text not null primary key default gen_random_uuid()::text,
  "type" public."TipoAtividade" not null,
  "title" text not null,
  "statement" text not null,
  "instructions" text not null,
  "mechanism" public."MecanismoAtividade" not null,
  "className" text not null,
  "createdBy" text not null,
  "turmaId" text,
  "createdAt" timestamptz not null default now()
);

create table public."Professor" (
  "id" text not null primary key default gen_random_uuid()::text,
  "nome" text not null,
  "email" text not null unique,
  "senhaHash" text not null
);

create table public."Sessao" (
  "tokenHash" text not null primary key,
  "userId" text not null,
  "role" text not null,
  "expiresAt" timestamptz not null
);

create table public."Trabalho" (
  "id" text not null primary key default gen_random_uuid()::text,
  "alunoId" text not null,
  "tipo" text not null,
  "dados" jsonb not null,
  "createdAt" timestamptz not null default now()
);
alter table public."Empresa" enable row level security;
revoke all on table public."Empresa" from anon, authenticated;
grant select, insert, update, delete on table public."Empresa" to service_role;
alter table public."Setor" add constraint "Setor_empresaId_fkey" foreign key ("empresaId") references public."Empresa" ("id") on delete cascade on update cascade;
create index "Setor_empresaId_idx" on public."Setor" ("empresaId");
alter table public."Setor" enable row level security;
revoke all on table public."Setor" from anon, authenticated;
grant select, insert, update, delete on table public."Setor" to service_role;
alter table public."Cargo" enable row level security;
revoke all on table public."Cargo" from anon, authenticated;
grant select, insert, update, delete on table public."Cargo" to service_role;
alter table public."Funcionario" add constraint "Funcionario_empresaId_fkey" foreign key ("empresaId") references public."Empresa" ("id") on delete restrict on update cascade;
create index "Funcionario_empresaId_idx" on public."Funcionario" ("empresaId");
alter table public."Funcionario" add constraint "Funcionario_cargoId_fkey" foreign key ("cargoId") references public."Cargo" ("id") on delete restrict on update cascade;
create index "Funcionario_cargoId_idx" on public."Funcionario" ("cargoId");
alter table public."Funcionario" enable row level security;
revoke all on table public."Funcionario" from anon, authenticated;
grant select, insert, update, delete on table public."Funcionario" to service_role;
alter table public."RegistroPonto" add constraint "RegistroPonto_funcionarioId_fkey" foreign key ("funcionarioId") references public."Funcionario" ("id") on delete cascade on update cascade;
create index "RegistroPonto_funcionarioId_idx" on public."RegistroPonto" ("funcionarioId");
alter table public."RegistroPonto" enable row level security;
revoke all on table public."RegistroPonto" from anon, authenticated;
grant select, insert, update, delete on table public."RegistroPonto" to service_role;
alter table public."RegistroASO" add constraint "RegistroASO_funcionarioId_fkey" foreign key ("funcionarioId") references public."Funcionario" ("id") on delete cascade on update cascade;
create index "RegistroASO_funcionarioId_idx" on public."RegistroASO" ("funcionarioId");
alter table public."RegistroASO" enable row level security;
revoke all on table public."RegistroASO" from anon, authenticated;
grant select, insert, update, delete on table public."RegistroASO" to service_role;
alter table public."EventoFolha" enable row level security;
revoke all on table public."EventoFolha" from anon, authenticated;
grant select, insert, update, delete on table public."EventoFolha" to service_role;
alter table public."FolhaPagamento" add constraint "FolhaPagamento_funcionarioId_fkey" foreign key ("funcionarioId") references public."Funcionario" ("id") on delete cascade on update cascade;
create index "FolhaPagamento_funcionarioId_idx" on public."FolhaPagamento" ("funcionarioId");
alter table public."FolhaPagamento" enable row level security;
revoke all on table public."FolhaPagamento" from anon, authenticated;
grant select, insert, update, delete on table public."FolhaPagamento" to service_role;
alter table public."ItemFolha" add constraint "ItemFolha_folhaId_fkey" foreign key ("folhaId") references public."FolhaPagamento" ("id") on delete cascade on update cascade;
create index "ItemFolha_folhaId_idx" on public."ItemFolha" ("folhaId");
alter table public."ItemFolha" add constraint "ItemFolha_codigoEvento_fkey" foreign key ("codigoEvento") references public."EventoFolha" ("codigo") on delete restrict on update cascade;
create index "ItemFolha_codigoEvento_idx" on public."ItemFolha" ("codigoEvento");
alter table public."ItemFolha" enable row level security;
revoke all on table public."ItemFolha" from anon, authenticated;
grant select, insert, update, delete on table public."ItemFolha" to service_role;
alter table public."Turma" enable row level security;
revoke all on table public."Turma" from anon, authenticated;
grant select, insert, update, delete on table public."Turma" to service_role;
alter table public."Aluno" add constraint "Aluno_turmaId_fkey" foreign key ("turmaId") references public."Turma" ("id") on delete cascade on update cascade;
create index "Aluno_turmaId_idx" on public."Aluno" ("turmaId");
alter table public."Aluno" enable row level security;
revoke all on table public."Aluno" from anon, authenticated;
grant select, insert, update, delete on table public."Aluno" to service_role;
alter table public."AtividadeConclusao" add constraint "AtividadeConclusao_activityId_fkey" foreign key ("activityId") references public."Activity" ("id") on delete cascade on update cascade;
create index "AtividadeConclusao_activityId_idx" on public."AtividadeConclusao" ("activityId");
alter table public."AtividadeConclusao" add constraint "AtividadeConclusao_alunoId_fkey" foreign key ("alunoId") references public."Aluno" ("id") on delete cascade on update cascade;
create index "AtividadeConclusao_alunoId_idx" on public."AtividadeConclusao" ("alunoId");
alter table public."AtividadeConclusao" enable row level security;
revoke all on table public."AtividadeConclusao" from anon, authenticated;
grant select, insert, update, delete on table public."AtividadeConclusao" to service_role;
alter table public."Notificacao" add constraint "Notificacao_alunoId_fkey" foreign key ("alunoId") references public."Aluno" ("id") on delete cascade on update cascade;
create index "Notificacao_alunoId_idx" on public."Notificacao" ("alunoId");
alter table public."Notificacao" enable row level security;
revoke all on table public."Notificacao" from anon, authenticated;
grant select, insert, update, delete on table public."Notificacao" to service_role;
alter table public."Activity" add constraint "Activity_turmaId_fkey" foreign key ("turmaId") references public."Turma" ("id") on delete set null on update cascade;
create index "Activity_turmaId_idx" on public."Activity" ("turmaId");
alter table public."Activity" enable row level security;
revoke all on table public."Activity" from anon, authenticated;
grant select, insert, update, delete on table public."Activity" to service_role;
alter table public."Professor" enable row level security;
revoke all on table public."Professor" from anon, authenticated;
grant select, insert, update, delete on table public."Professor" to service_role;
alter table public."Sessao" enable row level security;
revoke all on table public."Sessao" from anon, authenticated;
grant select, insert, update, delete on table public."Sessao" to service_role;
create index "Trabalho_alunoId_idx" on public."Trabalho" ("alunoId");
alter table public."Trabalho" enable row level security;
revoke all on table public."Trabalho" from anon, authenticated;
grant select, insert, update, delete on table public."Trabalho" to service_role;

create function public.talentlab_updated_at() returns trigger language plpgsql set search_path = public as $$
begin
  new."updatedAt" = now();
  return new;
end;
$$;
revoke all on function public.talentlab_updated_at() from public;
create trigger "Empresa_updated_at" before update on public."Empresa" for each row execute function public.talentlab_updated_at();
create trigger "Funcionario_updated_at" before update on public."Funcionario" for each row execute function public.talentlab_updated_at();

insert into public."EventoFolha" ("codigo", "nome", "tipo", "percentualFixa", "incideINSS", "incideIRRF", "incideFGTS", "descricaoDidatica") values ('0001', 'INSS - Contribuição Previdenciária', 'DESCONTO', null, false, true, false, 'Desconto obrigatório retido para a Previdência Social, calculado de forma progressiva conforme as faixas salariais da CLT.');
insert into public."EventoFolha" ("codigo", "nome", "tipo", "percentualFixa", "incideINSS", "incideIRRF", "incideFGTS", "descricaoDidatica") values ('0002', 'IRRF - Imposto de Renda Retido na Fonte', 'DESCONTO', null, false, false, false, 'Imposto retido na fonte com base no salário bruto deduzido do INSS e dependentes.');
insert into public."EventoFolha" ("codigo", "nome", "tipo", "percentualFixa", "incideINSS", "incideIRRF", "incideFGTS", "descricaoDidatica") values ('0003', 'Vale Transporte (Desconto 6%)', 'DESCONTO', 6, false, false, false, 'Desconto legal de até 6% sobre o salário base para custeio do deslocamento residência-trabalho.');
insert into public."EventoFolha" ("codigo", "nome", "tipo", "percentualFixa", "incideINSS", "incideIRRF", "incideFGTS", "descricaoDidatica") values ('0004', 'Vale Refeição/Alimentação (Coparticipação)', 'DESCONTO', 2, false, false, false, 'Desconto de coparticipação do funcionário no benefício de vale-refeição/alimentação, conforme acordo coletivo.');
insert into public."EventoFolha" ("codigo", "nome", "tipo", "percentualFixa", "incideINSS", "incideIRRF", "incideFGTS", "descricaoDidatica") values ('0005', 'Plano de Saúde (Coparticipação)', 'DESCONTO', 4, false, false, false, 'Desconto de coparticipação do funcionário no plano de saúde oferecido pela empresa.');
insert into public."EventoFolha" ("codigo", "nome", "tipo", "percentualFixa", "incideINSS", "incideIRRF", "incideFGTS", "descricaoDidatica") values ('0006', 'Hora Extra 50%', 'PROVENTO', null, true, true, true, 'Adicional de no mínimo 50% sobre o valor da hora normal para trabalhos realizados além da jornada regular.');
insert into public."EventoFolha" ("codigo", "nome", "tipo", "percentualFixa", "incideINSS", "incideIRRF", "incideFGTS", "descricaoDidatica") values ('0007', 'Adicional Noturno (20%)', 'PROVENTO', 20, true, true, true, 'Adicional de no mínimo 20% sobre a hora normal para trabalho realizado entre 22h e 5h.');
insert into public."EventoFolha" ("codigo", "nome", "tipo", "percentualFixa", "incideINSS", "incideIRRF", "incideFGTS", "descricaoDidatica") values ('0008', 'Gratificação de Função (10%)', 'PROVENTO', 10, true, true, true, 'Gratificação paga a funcionários que exercem cargo de confiança ou função de liderança.');
insert into public."EventoFolha" ("codigo", "nome", "tipo", "percentualFixa", "incideINSS", "incideIRRF", "incideFGTS", "descricaoDidatica") values ('0009', 'Adicional de Insalubridade (20% Mínimo)', 'PROVENTO', 20, true, true, true, 'Adicional pago aos trabalhadores expostos a agentes nocivos à saúde acima dos limites de tolerância.');
insert into public."EventoFolha" ("codigo", "nome", "tipo", "percentualFixa", "incideINSS", "incideIRRF", "incideFGTS", "descricaoDidatica") values ('0010', 'Adicional de Periculosidade (30%)', 'PROVENTO', 30, true, true, true, 'Adicional de 30% sobre o salário base para atividades ou operações consideradas perigosas, conforme normas regulamentadoras.');

notify pgrst, 'reload schema';
commit;
