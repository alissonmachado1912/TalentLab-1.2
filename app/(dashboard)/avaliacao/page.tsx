'use client';
import EmployeeDemographicsForm, { type EmployeePersonalData } from '@/components/employee-demographics-form';
import { useEffect, useState } from 'react';
import { Building2, BriefcaseBusiness, Users, Clock3, ShieldCheck, Calculator, CheckCircle2, Search, ChevronRight, ChevronDown, GraduationCap, Eye, FolderOpen, RefreshCw } from 'lucide-react';

type Row = Record<string, unknown>;
type Aluno = { id: string; nome: string; matricula: string; turma: { nome: string } };
type Consulta = { aluno: Aluno; empresas: Row[]; cargos: Row[]; funcionarios: Row[]; pontos: Row[]; asos: Row[]; trabalhos: Row[]; conclusoes: Row[] };
const labels: Record<string, string> = {
  razaoSocial: 'Razão social', nomeFantasia: 'Nome fantasia', cnpj: 'CNPJ', cidadeUF: 'Cidade / UF',
  codigo: 'Código', titulo: 'Cargo', salarioBase: 'Salário base', jornadaMensal: 'Jornada mensal',
  adicionalInsalubridade: 'Insalubridade', adicionalPericulosidade: 'Periculosidade', nome: 'Nome', cpf: 'CPF',
  empresa: 'Empresa', cargo: 'Cargo', dependentes: 'Dependentes', dataAdmissao: 'Admissão', funcionario: 'Funcionário',
  data: 'Data', entrada: 'Entrada', saida: 'Saída', saidaAlmoco: 'Saída almoço', retornoAlmoco: 'Retorno almoço',
  horasExtras: 'Horas extras', status: 'Situação', tipo: 'Tipo', medico: 'Médico', resultado: 'Resultado',
  createdAt: 'Salvo em', dados: 'Dados enviados', activity: 'Atividade', title: 'Título', statement: 'Enunciado',
  instructions: 'Instruções', concluidaEm: 'Concluída em', setores: 'Setores',
  itens: 'Eventos', codigoEvento: 'Código', nomeEvento: 'Evento', referencia: 'Referência',
  valorCalculado: 'Valor calculado', memoriaCalculo: 'Memória de cálculo',
  totalProventos: 'Total de proventos', totalDescontos: 'Total de descontos', salarioLiquido: 'Salário líquido',
  baseFGTS: 'Base do FGTS', fgtsDoMes: 'FGTS do mês', custosFixos: 'Custos fixos', maoDeObra: 'Mão de obra',
  materiaPrima: 'Matéria-prima', quantidadeProduzida: 'Quantidade produzida', margemLucro: 'Margem de lucro',
  custoTotal: 'Custo total', custoUnitario: 'Custo unitário', precoVendaSugerido: 'Preço sugerido',
  candidato: 'Candidato', name: 'Nome', age: 'Idade', education: 'Formação', experience: 'Experiência',
  skills: 'Competências', profile: 'Perfil', text: 'Análise',
};
const sections = [
  { key: 'empresas', title: 'Empresas', icon: Building2 },
  { key: 'cargos', title: 'Cargos', icon: BriefcaseBusiness },
  { key: 'funcionarios', title: 'Funcionários', icon: Users },
  { key: 'pontos', title: 'Ponto', icon: Clock3 },
  { key: 'asos', title: 'ASO', icon: ShieldCheck },
  { key: 'trabalhos', title: 'Simuladores', icon: Calculator },
  { key: 'conclusoes', title: 'Concluídas', icon: CheckCircle2 },
] as const;
type Section = typeof sections[number]['key'];
const moneyFields = new Set(['salarioBase','valorCalculado','totalProventos','totalDescontos','salarioLiquido','baseFGTS','fgtsDoMes','custosFixos','maoDeObra','materiaPrima','custoTotal','custoUnitario','precoVendaSugerido']);
const dateFields = new Set(['data','createdAt','updatedAt','concluidaEm','dataNascimento','dataAdmissao']);
function display(value: unknown, field = ''): string {
  if (value === null || value === undefined || value === '') return 'Não informado';
  if (typeof value === 'boolean') return value ? 'Sim' : 'Não';
  if (typeof value === 'number' && moneyFields.has(field)) return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  if (typeof value === 'string' && dateFields.has(field) && !Number.isNaN(Date.parse(value))) return new Date(value).toLocaleDateString('pt-BR', { timeZone: 'UTC' });
  const names: Record<string,string> = { folha: 'Folha de pagamento', custos: 'Custos de produção', contratacao: 'Simulação de RH', APTO: 'Apto', INAPTO: 'Inapto', PROVENTO: 'Provento', DESCONTO: 'Desconto' };
  return names[String(value)] || String(value);
}
function Value({ value, field = '' }: { value: unknown; field?: string }) {
  if (Array.isArray(value)) return value.length ? <div className="space-y-3">{value.map((v,i) => <div key={i} className="rounded-lg border border-slate-200 bg-white p-3"><Value value={v} /></div>)}</div> : <span className="text-slate-400">Nenhum registro</span>;
  if (value && typeof value === 'object') return <dl className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">{Object.entries(value).filter(([k]) => !['id','ownerId','senhaHash'].includes(k) && !k.endsWith('Id')).map(([k,v]) => <div key={k} className={v && typeof v === 'object' ? 'sm:col-span-2 rounded-xl bg-slate-50 p-4' : ''}><dt className="mb-1 text-[11px] font-semibold text-slate-500">{labels[k] || k.replace(/([A-Z])/g, ' $1')}</dt><dd className="break-words text-sm text-slate-800"><Value value={v} field={k} /></dd></div>)}</dl>;
  return <span>{display(value,field)}</span>;
}
function initials(name: string) { return name.trim().split(/\s+/).slice(0,2).map(part=>part[0]).join('').toUpperCase(); }
function rowTitle(row: Row, index: number) {
  const activity = row.activity as Row | undefined;
  const funcionario = row.funcionario as Row | undefined;
  return display(row.razaoSocial || row.titulo || row.nome || activity?.title || funcionario?.nome || row.tipo || 'Registro ' + (index+1));
}

export default function AvaliacaoPage() {
  const [alunos,setAlunos] = useState<Aluno[]>([]);
  const [selected,setSelected] = useState('');
  const [editing, setEditing] = useState<EmployeePersonalData | null>(null);
  const [data,setData] = useState<Consulta | null>(null);
  const [search,setSearch] = useState('');
  const [turma,setTurma] = useState('');
  const [tab,setTab] = useState<Section>('empresas');
  const [error,setError] = useState('');
  const [listError,setListError] = useState('');
  const [loadingList,setLoadingList] = useState(true);
  const [busy,setBusy] = useState(false);
  const [reload,setReload] = useState(0);
  useEffect(() => {
    const controller = new AbortController();
    fetch('/api/alunos', { signal: controller.signal }).then(async r => {
      if (!r.ok) throw new Error(r.status === 403 ? 'Esta consulta está disponível apenas para professores.' : 'Não foi possível carregar os alunos.');
      const result = await r.json(); if (!controller.signal.aborted) setAlunos(result);
    }).catch(e => { if (!controller.signal.aborted) setListError(e.message); }).finally(() => { if (!controller.signal.aborted) setLoadingList(false); });
    return () => controller.abort();
  },[reload]);
  useEffect(() => {
    if (!selected) return;
    const controller = new AbortController();
    fetch('/api/avaliacao?alunoId=' + encodeURIComponent(selected), { signal: controller.signal }).then(async r => {
      if (!r.ok) throw new Error('Não foi possível consultar o trabalho. Tente novamente.');
      const result = await r.json(); if (!controller.signal.aborted) setData(result);
    }).catch(e => { if (!controller.signal.aborted) setError(e.message); }).finally(() => { if (!controller.signal.aborted) setBusy(false); });
    return () => controller.abort();
  },[selected,reload]);
  function choose(id: string) { if (id === selected) return; setSelected(id); setEditing(null); setData(null); setError(''); setBusy(true); setTab('empresas'); }
  function refresh() { setEditing(null); setError(''); setListError(''); setLoadingList(true); if (selected) { setBusy(true); setData(null); } setReload(n=>n+1); }
  const normalize = (s: string) => s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  const filtered = alunos.filter(a => (!turma || a.turma.nome === turma) && normalize(a.nome + ' ' + a.matricula).includes(normalize(search)));
  const turmas = [...new Set(alunos.map(a=>a.turma.nome))].sort();
  const student = alunos.find(a=>a.id === selected);
  const current = sections.find(s=>s.key === tab)!;
  const total = data ? sections.reduce((sum,s)=>sum+data[s.key].length,0) : 0;
  return <div className="mx-auto max-w-7xl space-y-6">
    <header className="flex flex-wrap items-start justify-between gap-4">
      <div><p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-red-600">Área do professor</p><h1 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">Acompanhe cada evolução.</h1><p className="mt-2 text-sm text-slate-500">Explore os cadastros, atividades e simulações de cada aluno.</p></div>
      <button type="button" onClick={refresh} disabled={busy || loadingList} className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-600 transition hover:border-red-300 disabled:opacity-50"><RefreshCw size={14} className={busy || loadingList ? 'animate-spin' : ''} />Atualizar</button>
    </header>
    {editing && <EmployeeDemographicsForm key={editing.id} funcionario={editing} onClose={() => setEditing(null)} onSaved={updated => { setData(prev => prev ? { ...prev, funcionarios: prev.funcionarios.map(f => f.id === editing.id ? { ...f, ...updated } : f) } : prev); setEditing(null); }} />}
    <div className="grid items-start gap-5 xl:grid-cols-[290px_minmax(0,1fr)]">
      <aside className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="space-y-4 border-b border-slate-100 p-5">
          <div className="flex items-center justify-between"><h2 className="font-bold text-slate-900">Seus alunos</h2><span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-500">{alunos.length}</span></div>
          <div className="relative"><Search size={15} className="pointer-events-none absolute left-3 top-3 text-slate-400" /><input aria-label="Buscar aluno por nome ou matrícula" value={search} onChange={e=>setSearch(e.target.value)} placeholder="Nome ou matrícula" className="w-full !rounded-lg !pl-9" /></div>
          <select aria-label="Filtrar por turma" value={turma} onChange={e=>setTurma(e.target.value)} className="w-full !rounded-lg"><option value="">Todas as turmas</option>{turmas.map(t=><option key={t}>{t}</option>)}</select>
        </div>
        <div className="max-h-[560px] overflow-y-auto p-2">
          {loadingList ? <p role="status" className="p-5 text-sm text-slate-500">Carregando alunos...</p> : listError ? <p role="alert" className="p-4 text-sm text-red-600">{listError}</p> : !filtered.length ? <div className="px-4 py-10 text-center"><Users className="mx-auto mb-3 text-slate-300" /><p className="text-sm font-semibold text-slate-600">{alunos.length ? 'Nenhum aluno encontrado' : 'Nenhum aluno cadastrado'}</p><p className="mt-1 text-xs text-slate-400">{alunos.length ? 'Tente outro nome ou turma.' : 'Cadastre alunos em Turmas & Alunos.'}</p></div> : filtered.map(a=><button key={a.id} type="button" aria-pressed={selected === a.id} onClick={()=>choose(a.id)} className={'mb-1 flex w-full items-center gap-3 rounded-xl border p-3 text-left transition ' + (selected === a.id ? 'border-red-200 bg-red-50' : 'border-transparent hover:bg-slate-50')}>
            <span className={'flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-bold ' + (selected === a.id ? 'bg-red-600 text-white' : 'bg-slate-100 text-slate-500')}>{initials(a.nome)}</span>
            <span className="min-w-0 flex-1"><span className="block truncate text-sm font-bold text-slate-800">{a.nome}</span><span className="mt-1 block truncate text-[11px] text-slate-500">{a.turma.nome} · {a.matricula}</span></span><ChevronRight size={15} className={selected === a.id ? 'text-red-600' : 'text-slate-300'} />
          </button>)}
        </div>
        <p className="border-t border-slate-100 px-5 py-3 text-[10px] text-slate-400">{filtered.length} de {alunos.length} alunos na lista</p>
      </aside>
      <main className="min-w-0 space-y-5" aria-busy={busy}>
        {!selected ? <div className="flex min-h-[480px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-8 text-center"><div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-red-50 text-red-600"><GraduationCap size={36} strokeWidth={1.5} /></div><h2 className="text-xl font-bold text-slate-900">Cada aluno, uma trajetória.</h2><p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">Selecione um aluno na lista para conhecer o que ele cadastrou e os trabalhos que já entregou.</p><span className="mt-7 flex items-center gap-2 rounded-full bg-slate-50 px-4 py-2 text-xs text-slate-500"><Eye size={14} />Consulta individual, consulta de registros</span></div> : <>
          <div className="overflow-hidden rounded-2xl bg-slate-950 text-white shadow-sm"><div className="h-1 bg-red-600" /><div className="flex flex-wrap items-center gap-4 p-6"><div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-lg font-bold">{initials(student?.nome || 'Aluno')}</div><div className="min-w-0 flex-1"><p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-red-400">Trabalho do aluno</p><h2 className="break-words text-xl font-bold">{student?.nome}</h2><p className="mt-1 text-xs text-slate-400">{student?.turma.nome} · Matrícula {student?.matricula}</p></div><span className="flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-[10px] text-slate-300"><Eye size={12} />Consulta de registros</span></div></div>
          {error ? <div role="alert" className="rounded-xl border border-red-200 bg-red-50 p-5 text-sm text-red-700">{error}<button onClick={refresh} className="ml-3 font-bold underline">Tentar novamente</button></div> : busy ? <div role="status" className="rounded-2xl border bg-white p-10 text-center text-sm text-slate-500"><RefreshCw className="mx-auto mb-3 animate-spin text-red-500" />Carregando registros do aluno...</div> : data && <>
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">{[{label:'Registros no total',value:total,icon:FolderOpen},{label:'Cadastros',value:data.empresas.length+data.cargos.length+data.funcionarios.length,icon:Building2},{label:'Simulações salvas',value:data.trabalhos.length,icon:Calculator},{label:'Atividades concluídas',value:data.conclusoes.length,icon:CheckCircle2}].map(stat=><div key={stat.label} className="rounded-xl border border-slate-200 bg-white p-4"><div className="mb-3 flex items-center justify-between"><stat.icon size={17} className="text-red-500" /><span className="text-2xl font-black text-slate-900">{stat.value}</span></div><p className="text-[11px] font-medium text-slate-500">{stat.label}</p></div>)}</div>
            <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <nav aria-label="Categorias de registros" className="flex flex-wrap gap-1 border-b border-slate-100 bg-slate-50/50 p-3">{sections.map(s=><button key={s.key} aria-pressed={tab === s.key} onClick={()=>setTab(s.key)} className={'flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold transition ' + (tab === s.key ? 'bg-red-600 text-white shadow-sm' : 'text-slate-500 hover:bg-white hover:text-slate-900')}><s.icon size={14} />{s.title}<span className={'rounded px-1.5 text-[10px] ' + (tab === s.key ? 'bg-white/20' : 'bg-slate-100')}>{data[s.key].length}</span></button>)}</nav>
              <div className="p-4 sm:p-6"><div className="mb-5 flex items-center justify-between"><h3 className="font-bold text-slate-900">{current.title}</h3><span className="text-xs text-slate-400">{data[tab].length} registro(s)</span></div>
                {data[tab].length === 0 ? <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50/50 px-4 py-12 text-center"><current.icon size={28} strokeWidth={1.5} className="mx-auto mb-3 text-slate-300" /><p className="text-sm font-semibold text-slate-600">Ainda não há registros aqui.</p><p className="mt-2 text-xs text-slate-400">{tab === 'trabalhos' ? 'As simulações aparecem quando o aluno salva o trabalho para o professor.' : 'Os registros desta categoria aparecerão quando o aluno utilizar o módulo.'}</p></div> : <div className="space-y-3">{data[tab].map((row,i)=><details key={selected + tab + String(row.id || i)} className="group overflow-hidden rounded-xl border border-slate-200 open:border-red-200"><summary className="flex cursor-pointer list-none items-center gap-3 p-4 transition hover:bg-slate-50 [&::-webkit-details-marker]:hidden"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500"><current.icon size={16} /></span><span className="min-w-0 flex-1"><span className="block break-words text-sm font-semibold text-slate-800">{rowTitle(row,i)}</span><span className="mt-1 block text-[11px] text-slate-400">{row.codigo ? 'Código ' + row.codigo : row.tipo ? display(row.tipo) : 'Registro ' + String(i+1)}{row.createdAt || row.concluidaEm || row.data ? ' · ' + display(row.createdAt || row.concluidaEm || row.data,'data') : ''}</span></span><ChevronDown size={16} className="shrink-0 text-slate-400 transition group-open:rotate-180" /></summary><div className="border-t border-slate-100 p-5"><Value value={row} />{tab === 'funcionarios' && <button type="button" className="mt-4 text-xs text-red-600" onClick={() => setEditing(row as EmployeePersonalData)}>Editar dados pessoais</button>}</div></details>)}</div>}
              </div>
            </section>
          </>}
        </>}
      </main>
    </div>
  </div>;
}
