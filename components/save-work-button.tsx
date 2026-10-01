'use client';
import { useEffect, useState } from 'react';

export default function SaveWorkButton({ tipo, dados }: { tipo: string; dados: Record<string, unknown> }) {
  const [student, setStudent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');
  useEffect(() => {
    fetch('/api/auth/session').then((r) => r.json()).then((u) => setStudent(u.role === 'aluno')).catch(() => setStudent(false));
  }, []);
  if (!student) return null;
  return <div className="space-y-1">
    <button type="button" disabled={busy} className="bg-red-600 text-white rounded px-4 py-2 text-sm font-bold disabled:opacity-50" onClick={async () => {
      setBusy(true); setMessage('');
      try {
        const response = await fetch('/api/trabalhos', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ tipo, dados, atividadeId: new URLSearchParams(window.location.search).get('atividade') }) });
        const result = await response.json();
        setMessage(response.ok ? 'Trabalho salvo para consulta do professor.' : result.error || 'Erro ao salvar.');
      } catch { setMessage('Erro de conexão. Tente novamente.'); }
      finally { setBusy(false); }
    }}>{busy ? 'Salvando...' : 'Salvar trabalho para o professor'}</button>
    {message && <p role="status" className="text-xs text-slate-600">{message}</p>}
  </div>;
}
