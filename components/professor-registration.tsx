'use client';
import { useState } from 'react';
import { UserPlus } from 'lucide-react';

export default function ProfessorRegistration() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ nome: '', email: '', senha: '' });
  const [message, setMessage] = useState('');
  const [busy, setBusy] = useState(false);
  return <div>
    <button type="button" onClick={() => setOpen(!open)} className="flex items-center gap-2 text-sm font-semibold text-red-600"><UserPlus className="h-4 w-4" /> Cadastrar professor</button>
    {open && <form className="tl-form-card bg-white p-6 rounded-2xl border border-slate-200 shadow-sm mt-4 space-y-4" onSubmit={async e => {
      e.preventDefault(); if (busy) return; setBusy(true); setMessage('');
      try {
        const response = await fetch('/api/professores', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
        const data = await response.json();
        if (!response.ok) { setMessage(data.error); return; }
        setForm({ nome: '', email: '', senha: '' }); setMessage('Professor cadastrado. Ele já pode entrar com o e-mail e a senha informados.');
      } catch { setMessage('Erro de conexão.'); } finally { setBusy(false); }
    }}>
      <h2 className="text-sm font-bold text-slate-700">Cadastrar professor</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <label className="text-xs font-semibold text-slate-600">Nome<input required maxLength={191} value={form.nome} onChange={e => setForm({ ...form, nome: e.target.value })} className="block w-full mt-1 text-sm p-2.5 rounded-lg border border-slate-300" /></label>
        <label className="text-xs font-semibold text-slate-600">E-mail<input required type="email" maxLength={191} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="block w-full mt-1 text-sm p-2.5 rounded-lg border border-slate-300" /></label>
        <label className="text-xs font-semibold text-slate-600">Senha inicial<input required type="password" autoComplete="new-password" minLength={6} maxLength={128} value={form.senha} onChange={e => setForm({ ...form, senha: e.target.value })} className="block w-full mt-1 text-sm p-2.5 rounded-lg border border-slate-300" /></label>
      </div>
      {message && <p role="status" className="text-sm text-slate-700">{message}</p>}
      <button disabled={busy} className="bg-red-600 text-white font-semibold text-sm px-4 py-2.5 rounded-lg">{busy ? 'Salvando...' : 'Cadastrar professor'}</button>
    </form>}
  </div>;
}
