'use client';
import { useState } from 'react';
export default function EmployeeDemographicsForm({ funcionario, onClose, onSaved }: {
  funcionario: { id: string; nome: string; sexo?: string | null; dataNascimento?: string | null };
  onClose: () => void;
  onSaved: (value: { sexo: string; dataNascimento: string }) => void;
}) {
  const [sexo, setSexo] = useState(funcionario.sexo || '');
  const [dataNascimento, setData] = useState(funcionario.dataNascimento?.slice(0,10) || '');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  return <form className="bg-white border rounded p-5 space-y-3" onSubmit={async e => {
    e.preventDefault(); setBusy(true); setError('');
    try {
      const res = await fetch('/api/funcionarios/' + encodeURIComponent(funcionario.id), { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ sexo, dataNascimento }) });
      const result = await res.json();
      if (!res.ok) { setError(result.error || 'Não foi possível salvar.'); return; }
      onSaved({ sexo: result.sexo, dataNascimento: result.dataNascimento });
    } catch { setError('Erro de conexão.'); } finally { setBusy(false); }
  }}>
    <h2 className="font-bold">Dados pessoais de {funcionario.nome}</h2>
    <label className="block text-sm">Sexo<select required value={sexo} onChange={e=>setSexo(e.target.value)} className="block"><option value="">Selecione</option><option value="MASCULINO">Masculino</option><option value="FEMININO">Feminino</option></select></label>
    <label className="block text-sm">Nascimento<input required type="date" max={new Date().toISOString().slice(0,10)} value={dataNascimento} onChange={e=>setData(e.target.value)} className="block" /></label>
    {error && <p role="alert" className="text-red-600 text-sm">{error}</p>}
    <button disabled={busy} className="bg-red-600 text-white rounded px-4 py-2">{busy ? 'Salvando...' : 'Salvar'}</button>
    <button type="button" onClick={onClose} className="ml-3">Cancelar</button>
  </form>;
}
