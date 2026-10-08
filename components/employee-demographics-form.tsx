'use client';
import { useEffect, useRef, useState } from 'react';
export type EmployeePersonalData = { id: string; nome: string; codigo?: string; cpf?: string; salarioBase?: number; dependentes?: number; dataAdmissao?: string; empresa?: { razaoSocial: string }; cargo?: { titulo: string }; sexo?: string | null; dataNascimento?: string | null; observacoes?: string; pcd?: boolean | null };
export default function EmployeeDemographicsForm({ funcionario, onClose, onSaved }: {
  funcionario: EmployeePersonalData;
  onClose: () => void;
  onSaved: (value: { sexo: string | null; dataNascimento: string | null; observacoes: string; pcd: boolean | null }) => void;
}) {
  const [observacoes, setObservacoes] = useState(funcionario.observacoes || '');
  const [pcd, setPcd] = useState<boolean | null>(funcionario.pcd ?? null);
  const [sexo, setSexo] = useState(funcionario.sexo || '');
  const [dataNascimento, setData] = useState(funcionario.dataNascimento?.slice(0,10) || '');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const [record, setRecord] = useState(funcionario);
  const [loading, setLoading] = useState(true);
  const formRef = useRef<HTMLFormElement>(null);
  useEffect(() => {
    formRef.current?.scrollIntoView({ block: 'start' });
    const controller = new AbortController();
    fetch('/api/funcionarios/' + encodeURIComponent(funcionario.id), { signal: controller.signal, cache: 'no-store' }).then(async response => {
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Não foi possível consultar o funcionário.');
      if (controller.signal.aborted) return;
      setRecord(result); setSexo(result.sexo || ''); setData(result.dataNascimento?.slice(0,10) || ''); setObservacoes(result.observacoes || ''); setPcd(result.pcd ?? null);
    }).catch(error => { if (!controller.signal.aborted) setError(error.message || 'Erro de conexão.'); })
      .finally(() => { if (!controller.signal.aborted) setLoading(false); });
    return () => controller.abort();
  }, [funcionario.id]);
  return <form ref={formRef} className="bg-white border rounded p-5 space-y-3" onSubmit={async e => {
    e.preventDefault(); setBusy(true); setError('');
    try {
      const res = await fetch('/api/funcionarios/' + encodeURIComponent(funcionario.id), { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...(sexo || dataNascimento ? { sexo, dataNascimento } : {}), ...(observacoes !== (record.observacoes ?? '') ? { observacoes } : {}), ...(pcd !== null && pcd !== record.pcd ? { pcd } : {}) }) });
      const result = await res.json();
      if (!res.ok) { setError(result.error || 'Não foi possível salvar.'); return; }
      onSaved({ sexo: result.sexo ?? null, dataNascimento: result.dataNascimento ?? null, observacoes: result.observacoes ?? '', pcd: result.pcd ?? null });
    } catch { setError('Erro de conexão.'); } finally { setBusy(false); }
  }}>
    <h2 className="font-bold">Dados pessoais de {funcionario.nome}</h2>
    {loading && <p role="status" className="text-sm text-slate-500">Consultando os dados do funcionário...</p>}
    <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
      <div><dt className="text-xs text-slate-500">Código / CPF</dt><dd>{record.codigo || 'Não informado'} / {record.cpf || 'Não informado'}</dd></div>
      <div><dt className="text-xs text-slate-500">Empresa / Cargo</dt><dd>{record.empresa?.razaoSocial || 'Não informado'} / {record.cargo?.titulo || 'Não informado'}</dd></div>
      <div><dt className="text-xs text-slate-500">Salário / Dependentes</dt><dd>{record.salarioBase === undefined ? 'Não informado' : record.salarioBase.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} / {record.dependentes ?? 'Não informado'}</dd></div>
      <div><dt className="text-xs text-slate-500">Admissão</dt><dd>{record.dataAdmissao?.slice(0,10).split('-').reverse().join('/') || 'Não informado'}</dd></div>
    </dl>
    <label className="block text-sm">Sexo<select value={sexo} onChange={e=>setSexo(e.target.value)} className="block"><option value="">Selecione</option><option value="MASCULINO">Masculino</option><option value="FEMININO">Feminino</option></select></label>
    <label className="block text-sm">Nascimento<input type="date" max={new Date().toISOString().slice(0,10)} value={dataNascimento} onChange={e=>setData(e.target.value)} className="block" /></label>
    <label className="block text-sm">Observações<textarea maxLength={10000} value={observacoes} onChange={e => setObservacoes(e.target.value)} className="block w-full text-sm p-2.5 rounded-lg border border-slate-300" /></label>
    <label className="block text-sm">Pessoa com Deficiência (PCD)<select value={pcd === null ? '' : String(pcd)} onChange={e => setPcd(e.target.value === '' ? null : e.target.value === 'true')} className="block text-sm p-2.5 rounded-lg border border-slate-300"><option value="">Não informado</option><option value="false">Não</option><option value="true">Sim</option></select></label>
    {error && <p role="alert" className="text-red-600 text-sm">{error}</p>}
    <button type="submit" disabled={busy || loading} className="bg-red-600 text-white rounded px-4 py-2">{busy ? 'Salvando...' : 'Salvar'}</button>
    <button type="button" onClick={onClose} className="ml-3">Cancelar</button>
  </form>;
}
