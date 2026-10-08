'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ItemFolha } from '@/lib/types';
import { formatMinutes, validDate } from '@/lib/time-report';

type Preview = { inicio: string; fim: string; minutos: number; valor: number; fingerprint: string; bloqueado: boolean; persistenciaDisponivel: boolean; nomeEvento: string; existente: { id: string; folhaId: string } | null; item: Omit<ItemFolha, 'nomeEvento'> | null; pontos: { id: string; data: string; horasExtras: string }[] };
export type ImportedItem = ItemFolha & { lancamentoId: string | null; folhaId: string | null; inicio: string; fim: string; pontoIds: string[] };
export default function OvertimeImport({ funcionarioId, inicioInicial, onImported, onPendingChange }: { funcionarioId: string; inicioInicial?: string; onImported: (item: ImportedItem | null) => void; onPendingChange: (pending: boolean) => void }) {
  const [inicio, setInicio] = useState(() => { if (validDate(inicioInicial)) return inicioInicial; const now = new Date(); return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-01`; });
  const [preview, setPreview] = useState<Preview | null>(null);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const mounted = useRef(true);
  const generation = useRef(0);
  useEffect(() => { mounted.current = true; return () => { mounted.current = false; }; }, []);
  const apply = useCallback((data: Preview) => {
    if (!mounted.current) return;
    setPreview(data);
    onImported(!data.bloqueado && data.item ? { ...data.item, nomeEvento: data.nomeEvento, lancamentoId: data.existente?.id ?? null, folhaId: data.existente?.folhaId ?? null, inicio: data.inicio, fim: data.fim, pontoIds: data.pontos.map(p => p.id) } : null);
  }, [onImported]);
  const carregar = useCallback(async (signal?: AbortSignal) => {
    const requestGeneration = ++generation.current;
    await Promise.resolve();
    if (signal?.aborted || !mounted.current) return;
    setBusy(true); onPendingChange(true); setError(''); setPreview(null); onImported(null);
    try {
      const response = await fetch('/api/folha/horas-extras?' + new URLSearchParams({ funcionarioId, inicio }), { signal, cache: 'no-store' });
      const data = await response.json();
      if (signal?.aborted || !mounted.current || requestGeneration !== generation.current) return;
      if (!response.ok) { setError(data.error || 'Não foi possível consultar as horas extras.'); return; }
      apply(data);
    } catch { if (!signal?.aborted && mounted.current && requestGeneration === generation.current) setError('Erro de conexão.'); }
    finally { if (!signal?.aborted && mounted.current && requestGeneration === generation.current) { setBusy(false); onPendingChange(false); } }
  }, [funcionarioId, inicio, apply, onImported, onPendingChange]);
  useEffect(() => { const controller = new AbortController(); queueMicrotask(() => { void carregar(controller.signal); }); return () => controller.abort(); }, [carregar]);
  return <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-4">
    <h2 className="text-sm font-bold text-slate-700">Horas extras na folha</h2>
    <form className="flex flex-wrap items-end gap-3" onSubmit={e => { e.preventDefault(); void carregar(); }}>
      <label className="text-xs font-semibold text-slate-600">A partir de<input required type="date" disabled={busy} value={inicio} onChange={e => { setInicio(e.target.value); setPreview(null); setError(''); onImported(null); onPendingChange(true); }} className="block mt-1 text-sm p-2.5 rounded-lg border border-slate-300" /></label>
      <button disabled={busy} className="bg-red-600 text-white font-semibold text-sm px-4 py-2.5 rounded-lg">Atualizar horas</button>
    </form>
    {error && <p role="alert" className="text-sm text-red-600">{error}</p>}
    {busy && <p role="status" className="text-xs text-slate-500">Atualizando as horas extras na simulação...</p>}
    {preview && <div className="space-y-3">
      <p className="text-sm text-slate-700">{preview.inicio.split('-').reverse().join('/')} a {preview.fim.split('-').reverse().join('/')} · {formatMinutes(preview.minutos)} · R$ {preview.valor.toFixed(2)}</p>
      <details className="text-xs text-slate-500"><summary className="cursor-pointer">Ver registros e cálculo</summary><p className="mt-2">Salário ÷ 220 × 1,5 × horas extras.</p>{preview.pontos.map(p => <p key={p.id}>{p.data.slice(0, 10).split('-').reverse().join('/')} — {p.horasExtras}</p>)}</details>
      {!preview.bloqueado && preview.minutos > 0 && <p role="status" className="text-sm text-slate-700">Horas extras incluídas automaticamente na simulação e no holerite.</p>}
      {!preview.minutos && <p className="text-xs text-slate-500">Nenhuma hora extra registrada neste período.</p>}
      {preview.existente ? <p role="status" className="text-sm text-slate-700">Lançamento salvo na folha e carregado no simulador.</p> : preview.bloqueado ? <p className="text-sm text-red-600">Há pontos já lançados em outro período. Selecione um período sem sobreposição.</p> : !preview.persistenciaDisponivel ? <p className="text-xs text-slate-500">A gravação do vínculo no banco aguarda a atualização das tabelas. A simulação e o holerite já utilizam as horas registradas.</p> : <>
        <button type="button" disabled={busy || !preview.minutos} className="bg-red-600 text-white font-semibold text-sm px-4 py-2.5 rounded-lg disabled:opacity-50" onClick={async () => {
          setBusy(true); setError('');
          try {
            const response = await fetch('/api/folha/horas-extras', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ funcionarioId, inicio, fingerprint: preview.fingerprint }) });
            const data = await response.json();
            if (!response.ok) { setError(data.error); return; } apply(data);
          } catch { setError('Erro de conexão.'); } finally { setBusy(false); }
        }}>Salvar horas extras na folha</button>
      </>}
    </div>}
  </div>;
}
