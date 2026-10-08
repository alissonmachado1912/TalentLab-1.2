'use client';
import { useCallback, useState } from 'react';
import { FileText } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { period30, validDate } from '@/lib/time-report';
import TimeReportModal, { type TimeReportData } from '@/components/time-report-modal';

export default function TimeReport({ funcionarios }: { funcionarios: { id: string; nome: string }[] }) {
  const [id, setId] = useState('');
  const [inicio, setInicio] = useState(() => { const now = new Date(); return `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-01`; });
  const [report, setReport] = useState<TimeReportData | null>(null);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const closeReport = useCallback(() => setReport(null), []);
  return <>
    <Card>
      <h2 className="text-sm font-bold text-slate-700 mb-4">Relatório de ponto</h2>
      <p className="text-xs text-slate-500 mb-4">Escolha o funcionário e a data inicial para ver ou imprimir os 30 dias de ponto.</p>
      <form className="flex flex-wrap gap-3 items-end" onSubmit={async e => {
        e.preventDefault(); if (busy) return; setBusy(true); setError('');
        try {
          const response = await fetch('/api/pontos/relatorio?' + new URLSearchParams({ funcionarioId: id || funcionarios[0]?.id || '', inicio }), { cache: 'no-store' });
          const data = await response.json();
          if (!response.ok) { setError(data.error || 'Não foi possível gerar o relatório.'); return; }
          setReport(data);
        } catch { setError('Erro de conexão.'); } finally { setBusy(false); }
      }}>
        <label className="text-xs text-slate-600">Funcionário<select required disabled={busy} value={id || funcionarios[0]?.id || ''} onChange={e => setId(e.target.value)} className="block text-xs p-2.5 rounded-lg border border-slate-300">{funcionarios.map(f => <option key={f.id} value={f.id}>{f.nome}</option>)}</select></label>
        <label className="text-xs text-slate-600">A partir de<input aria-label="Data inicial do relatório de ponto" required disabled={busy} type="date" value={inicio} onChange={e => setInicio(e.target.value)} className="block text-xs p-2.5 rounded-lg border border-slate-300" /></label>
        {validDate(inicio) && <span className="text-xs text-slate-500">Até {period30(inicio).end.split('-').reverse().join('/')}</span>}
        <Button size="sm" disabled={busy || !funcionarios.length}><FileText className="h-4 w-4" />{busy ? 'Gerando...' : 'Gerar relatório'}</Button>
      </form>
      {error && <p role="alert" className="text-sm text-red-600 mt-3">{error}</p>}
    </Card>
    {report && <TimeReportModal report={report} onClose={closeReport} />}
  </>;
}
