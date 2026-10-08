'use client';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Printer, X } from 'lucide-react';
import { formatMinutes, overtimeMinutes, workedMinutes } from '@/lib/time-report';

export type TimeReportData = {
  funcionario: { id: string; nome: string; cpf?: string; empresa?: { razaoSocial: string; cnpj: string } | null; cargo?: { titulo: string } | null };
  inicio: string; fim: string; totalMinutos: number; totalExtras: number; registrosInvalidos: number;
  dias: { data: string; minutosTrabalhados: number | null; pontos: { id: string; entrada: string; saidaAlmoco: string; retornoAlmoco: string; saida: string; horasExtras: string }[] }[];
};
const date = (value: string) => value.slice(0,10).split('-').reverse().join('/');
export default function TimeReportModal({ report, onClose }: { report: TimeReportData; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden'; closeRef.current?.focus();
    const keydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key !== 'Tab') return;
      const buttons = dialogRef.current?.querySelectorAll<HTMLButtonElement>('button');
      if (!buttons?.length) return;
      if (event.shiftKey && document.activeElement === buttons[0]) { event.preventDefault(); buttons[buttons.length-1].focus(); }
      else if (!event.shiftKey && document.activeElement === buttons[buttons.length-1]) { event.preventDefault(); buttons[0].focus(); }
    };
    document.addEventListener('keydown', keydown);
    return () => { document.body.style.overflow = overflow; document.removeEventListener('keydown', keydown); previous?.focus(); };
  }, [onClose]);
  return createPortal(<div ref={dialogRef} id="time-report-modal" role="dialog" aria-modal="true" aria-labelledby="time-report-title" className="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center p-4">
    <style>{`
      .time-sheet table { width:100%; border-collapse:collapse; }
      .time-sheet th,.time-sheet td { border:1px solid #333; padding:6px; }
      .time-sheet th { background:#f4f4f4; font-weight:700; }
      @media print {
        @page { size:A4 portrait; margin:10mm; }
        body { overflow:visible !important; background:white !important; }
        body > :not(#time-report-modal) { display:none !important; }
        #time-report-modal { position:static !important; display:block !important; padding:0 !important; background:white !important; }
        #time-report-modal .time-shell { max-height:none !important; max-width:none !important; overflow:visible !important; box-shadow:none !important; }
        #time-report-modal .time-toolbar { display:none !important; }
        #time-report-modal .time-scroll { overflow:visible !important; padding:0 !important; }
        .time-sheet { min-width:0 !important; font-size:10px !important; color:black; }
        .time-sheet tr { break-inside:avoid; }
        .time-sheet thead { display:table-header-group; }
      }
    `}</style>
    <div className="time-shell bg-white rounded-xl shadow-xl w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden">
      <div className="time-toolbar bg-slate-900 text-white px-5 py-4 flex items-center justify-between gap-3">
        <h2 id="time-report-title" className="font-bold">Relatório de ponto</h2>
        <div className="flex gap-3"><button type="button" onClick={() => window.print()} className="flex items-center gap-2 border rounded px-3 py-2 text-sm"><Printer size={16} /> Imprimir / Salvar PDF</button><button ref={closeRef} type="button" onClick={onClose} aria-label="Fechar relatório de ponto"><X /></button></div>
      </div>
      <div className="time-scroll overflow-auto p-5"><article className="time-sheet min-w-[650px] text-xs text-black">
        <h1 className="text-center text-xl font-bold mb-1">ESPELHO DE PONTO</h1>
        <p className="text-center text-[10px] mb-3">TalentLab · Relatório de 30 dias</p>
        <div className="border border-black p-3 space-y-1 mb-3">
          <p><strong>Empresa: </strong>{report.funcionario.empresa?.razaoSocial || 'Não informada'} <strong> · CNPJ: </strong>{report.funcionario.empresa?.cnpj || 'Não informado'}</p>
          <p><strong>Funcionário: </strong>{report.funcionario.nome} <strong> · CPF: </strong>{report.funcionario.cpf || 'Não informado'}</p>
          <p><strong>Cargo: </strong>{report.funcionario.cargo?.titulo || 'Não informado'}</p>
          <p><strong>Período: </strong>{date(report.inicio)} a {date(report.fim)} <strong> · Jornada diária: </strong>8 horas, sem contar o intervalo</p>
        </div>
        <table><thead><tr><th>Data</th><th>Entrada</th><th>Início do intervalo</th><th>Fim do intervalo</th><th>Saída</th><th>Horas trabalhadas</th><th>Horas extras</th></tr></thead>
          <tbody>{report.dias.flatMap(day => day.pontos.length ? day.pontos.map(point => {
            const worked = workedMinutes(point); const extra = overtimeMinutes(point.horasExtras);
            return <tr key={point.id}><td>{date(day.data)}</td><td>{point.entrada}</td><td>{point.saidaAlmoco}</td><td>{point.retornoAlmoco}</td><td>{point.saida}</td><td>{worked === null ? 'Revisar horários' : formatMinutes(worked)}</td><td>{extra === null ? 'Revisar registro' : formatMinutes(extra)}</td></tr>;
          }) : [<tr key={day.data}><td>{date(day.data)}</td><td colSpan={6}>Sem registro</td></tr>])}</tbody>
        </table>
        <div className="border border-black p-3 mt-3 flex justify-between gap-4 font-bold"><p>Total trabalhado: {formatMinutes(report.totalMinutos)}</p><p>Total de horas extras: {formatMinutes(report.totalExtras)}</p></div>
        {report.registrosInvalidos > 0 && <p className="mt-2">{report.registrosInvalidos} registro(s) precisam de revisão. Os totais incluem somente valores válidos.</p>}
        <p className="mt-2 text-[10px]">Dias sem registro não são considerados faltas automaticamente. As horas extras seguem os valores salvos nos pontos.</p>
      </article></div>
    </div>
  </div>, document.body);
}
