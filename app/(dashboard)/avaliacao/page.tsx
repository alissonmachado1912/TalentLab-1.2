'use client';
import { useEffect, useState } from 'react';

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
function Value({ value }: { value: unknown }) {
  if (value === null || value === undefined) return <span>—</span>;
  if (typeof value === 'boolean') return <span>{value ? 'Sim' : 'Não'}</span>;
  if (Array.isArray(value)) return <div className="space-y-2">{value.map((v, i) => <div key={i} className="border-l-2 pl-3"><Value value={v} /></div>)}</div>;
  if (typeof value === 'object') return <dl className="grid gap-2">{Object.entries(value).filter(([k]) => !['id', 'ownerId', 'senhaHash'].includes(k) && !k.endsWith('Id')).map(([k,v]) => <div key={k}><dt className="text-xs font-semibold text-slate-500">{labels[k] || k}</dt><dd className="text-sm break-words"><Value value={v} /></dd></div>)}</dl>;
  return <span>{String(value)}</span>;
}

export default function AvaliacaoPage() {
  const [alunos, setAlunos] = useState<Aluno[]>([]);
  const [selected, setSelected] = useState('');
  const [data, setData] = useState<Consulta | null>(null);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  useEffect(() => {
    fetch('/api/alunos').then(async r => { if (!r.ok) throw new Error('Consulta disponível apenas para professores.'); setAlunos(await r.json()); }).catch(e => setError(e.message));
  }, []);
  useEffect(() => {
    if (!selected) return;
    const controller = new AbortController();
    fetch(`/api/avaliacao?alunoId=${encodeURIComponent(selected)}`, { signal: controller.signal })
      .then(async r => { if (!r.ok) throw new Error('Não foi possível consultar o aluno.'); const result = await r.json(); if (!controller.signal.aborted) { setData(result); setBusy(false); } })
      .catch(e => { if (!controller.signal.aborted) { setError(e.message); setBusy(false); } });
    return () => controller.abort();
  }, [selected]);
  return <div className="space-y-6">
    <div><h1 className="text-2xl font-bold">Consulta de trabalhos dos alunos</h1><p className="text-sm text-slate-500">Selecione o aluno para consultar seus cadastros e os resultados salvos nos simuladores.</p></div>
    <label className="block font-semibold">Aluno
      <select className="block mt-2 w-full border rounded p-3 bg-white" value={selected} onChange={e => { setSelected(e.target.value); setData(null); setError(''); setBusy(!!e.target.value); }}>
        <option value="">Selecione um aluno</option>
        {alunos.map(a => <option key={a.id} value={a.id}>{a.nome} — {a.matricula} — {a.turma.nome}</option>)}
      </select>
    </label>
    {error && <p role="alert" className="text-red-600">{error}</p>}
    {busy && <p>Carregando trabalho...</p>}
    {!alunos.length && !error && <p>Nenhum aluno cadastrado.</p>}
    {data && <>
      <p className="font-semibold">{data.aluno.nome} · {data.aluno.turma.nome}</p>
      {([['empresas','Empresas'],['cargos','Cargos'],['funcionarios','Funcionários'],['pontos','Ponto diário'],['asos','ASO'],['trabalhos','Simuladores: folha, custos e RH'],['conclusoes','Atividades concluídas']] as const).map(([key,title]) => <section key={key} className="bg-white border rounded-xl p-5 space-y-3">
        <h2 className="font-bold">{title} ({data[key].length})</h2>
        {!data[key].length && <p className="text-sm text-slate-500">Nenhum registro deste aluno.</p>}
        {data[key].map((row,i) => <details key={String(row.id || i)} className="border rounded p-3"><summary className="cursor-pointer font-semibold text-sm">{String(row.razaoSocial || row.titulo || row.nome || row.tipo || `Registro ${i+1}`)}</summary><div className="mt-3"><Value value={row} /></div></details>)}
      </section>)}
    </>}
  </div>;
}
