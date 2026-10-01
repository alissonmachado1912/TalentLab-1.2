'use client';
import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle2, ClipboardList } from 'lucide-react';
import { type Activity, getMechanism } from '@/lib/activities';

export default function ActivityWorkPanel() {
  const params = useSearchParams();
  const id = params.get('atividade');
  const pathname = usePathname();
  return id ? <Panel key={id + pathname} id={id} pathname={pathname} /> : null;
}
function Panel({ id, pathname }: { id: string; pathname: string }) {
  const [activity,setActivity] = useState<Activity | null>(null);
  const [error,setError] = useState('');
  const [busy,setBusy] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    fetch('/api/activities', { signal: controller.signal, cache: 'no-store' }).then(async r => {
      if (!r.ok) throw new Error('Não foi possível carregar a atividade.');
      const items: Activity[] = await r.json();
      const found = items.find(a => a.id === id && getMechanism(a.mechanism).href === pathname);
      if (!controller.signal.aborted) setActivity(found || null);
    }).catch(e => { if (!controller.signal.aborted) setError(e.message); });
    return () => controller.abort();
  },[id,pathname]);
  if (!activity && !error) return null;
  return <section className="mb-6 rounded-xl border border-red-200 bg-white p-5 shadow-sm">
    {activity && <>
      <div className="flex flex-wrap items-center justify-between gap-3"><div><p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-red-600"><ClipboardList size={14} />Atividade em andamento</p><h2 className="mt-2 font-bold text-slate-900">{activity.title}</h2></div><Link href="/atividades" className="text-xs font-semibold text-slate-500 underline">Voltar às atividades</Link></div>
      <details className="mt-3 text-sm"><summary className="cursor-pointer font-semibold text-slate-600">Ver enunciado e instruções</summary><p className="mt-3 whitespace-pre-line">{activity.statement}</p><p className="mt-3 whitespace-pre-line text-slate-500">{activity.instructions}</p></details>
      {typeof activity.concluidaPeloAluno === 'boolean' && <div className="mt-4 border-t border-slate-100 pt-4">
        {activity.concluidaPeloAluno ? <p role="status" className="flex items-center gap-2 text-sm font-bold text-emerald-700"><CheckCircle2 size={18} />Atividade concluída. O professor já pode acompanhar sua conclusão.</p> : <div className="flex flex-wrap items-center justify-between gap-3"><p className="max-w-lg text-xs text-slate-500">Salve os cadastros ou o trabalho no simulador. Quando terminar todas as instruções, confirme a conclusão aqui.</p><button disabled={busy} type="button" className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-bold text-white disabled:opacity-50" onClick={async()=>{
          setBusy(true);setError('');
          try { const r = await fetch('/api/activities/'+encodeURIComponent(id)+'/concluir',{method:'POST'});const result = await r.json();if(!r.ok)throw new Error(result.error || 'Não foi possível concluir.');setActivity({...activity,concluidaPeloAluno:true}); }
          catch(e){setError(e instanceof Error ? e.message : 'Erro de conexão.');}finally{setBusy(false);}
        }}>{busy ? 'Concluindo...' : 'Concluir atividade'}</button></div>}
      </div>}
    </>}
    {error && <p role="alert" className="mt-3 text-sm text-red-600">{error}</p>}
  </section>;
}
