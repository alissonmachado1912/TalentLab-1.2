'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';

export interface PayrollCode {
  codigo: string;
  nome: string;
  tipo: 'PROVENTO' | 'DESCONTO';
  descricaoDidatica: string;
  percentualFixa: number | null;
  incideFGTS: boolean;
}

export default function PayrollCodeForm({ onCreated }: { onCreated: (evento: PayrollCode) => void }) {
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const inputClass = 'w-full border border-slate-300 rounded p-2 text-sm';

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = new FormData(form);
    setBusy(true);
    setError('');
    setMessage('');
    try {
      const response = await fetch('/api/eventos-folha', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          codigo: fields.get('codigo'), nome: fields.get('nome'), tipo: fields.get('tipo'),
          descricaoDidatica: fields.get('descricao'), percentualFixa: Number(fields.get('percentual')),
          incideFGTS: fields.get('fgts') === 'on',
        }),
      });
      const data = await response.json();
      if (!response.ok) { setError(data.error || 'Erro ao cadastrar código.'); return; }
      onCreated(data);
      form.reset();
      setMessage('Código cadastrado. Ele já pode ser usado na folha.');
    } catch { setError('Erro de conexão. Tente novamente.'); }
    finally { setBusy(false); }
  }

  return <div className="border border-slate-200 rounded p-3 space-y-3">
    <button type="button" onClick={() => setOpen(!open)} className="text-sm font-bold text-red-600" aria-expanded={open}>
      {open ? 'Fechar cadastro' : '+ Adicionar código'}
    </button>
    {open && <form onSubmit={submit} className="space-y-3">
      <label className="block text-sm">Código<input name="codigo" required maxLength={30} pattern="[a-zA-Z0-9_-]+" placeholder="Ex.: BONUS10" className={inputClass} /></label>
      <label className="block text-sm">Nome<input name="nome" required maxLength={191} className={inputClass} /></label>
      <label className="block text-sm">Tipo<select name="tipo" className={inputClass}><option value="PROVENTO">Provento</option><option value="DESCONTO">Desconto</option></select></label>
      <label className="block text-sm">Percentual sobre o salário base<input name="percentual" type="number" min="0.01" max="100" step="0.01" required className={inputClass} /></label>
      <label className="block text-sm">Descrição didática<textarea name="descricao" required maxLength={191} className={inputClass} /></label>
      <label className="flex gap-2 text-sm"><input name="fgts" type="checkbox" />Compõe a base do FGTS (somente proventos)</label>
      <button disabled={busy} className="bg-red-600 text-white rounded px-4 py-2 text-sm font-bold disabled:opacity-50">{busy ? 'Salvando...' : 'Salvar código'}</button>
    </form>}
    {error && <p role="alert" className="text-sm text-red-600">{error}</p>}
    {message && <p role="status" className="text-sm text-green-700">{message}</p>}
  </div>;
}
