'use client';

import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Printer, X } from 'lucide-react';

export interface ASOReport {
  id: string;
  funcionario: { id: string; nome: string; cpf?: string; sexo?: string | null; dataNascimento?: string | null; cargo?: { titulo: string } | null; empresa?: { razaoSocial: string; cnpj: string } | null };
  tipo: string;
  medico: string;
  data: string;
  resultado: 'APTO' | 'INAPTO';
}
export function formatASODate(value: string) {
  const date = value.slice(0, 10).split('-');
  return date.length === 3 ? date.reverse().join('/') : value;
}
const exams = [['ADMISSIONAL','Admissional'],['PERIODICO','Periódico'],['DEMISSIONAL','Demissional'],['MUDANCA DE FUNCAO','Mudança de Função'],['RETORNO AO TRABALHO','Retorno ao Trabalho']];
const risks = [
  { title: 'Físicos', items: ['Ruídos','Calor','Vibrações','Umidade','Radiações não-ionizantes','Radiações ionizantes','Frio','Pressões anormais'] },
  { title: 'Químicos', items: ['Poeiras','Fumos','Névoas','Neblinas','Gases','Vapores','Outros químicos'] },
  { title: 'Biológicos', items: ['Vírus','Bactérias','Protozoários','Fungos','Parasitas'] },
  { title: 'Ergonômicos', items: ['Esforço físico intenso','Levantamento/transporte manual de peso','Postura inadequada','Trabalho em turnos e noturno','Monotonia e repetitividade','Ritmos excessivos','Controle rígido de produtividade'] },
  { title: 'Acidentes', items: ['Arranjo físico inadequado','Eletricidade','Animais peçonhentos','Máquinas e equipamentos sem proteção','Probabilidade de incêndio/explosão','Outras situações causadoras de acidentes','Ferramentas inadequadas','Iluminação inadequada','Outras situações não mencionadas'] },
];
export default function ASOReportModal({ report, onClose }: { report: ASOReport; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    function keydown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose();
      if (event.key === 'Tab') {
        const buttons = document.querySelectorAll<HTMLButtonElement>('#aso-report-modal button');
        if (event.shiftKey && document.activeElement === buttons[0]) { event.preventDefault(); buttons[buttons.length-1]?.focus(); }
        else if (!event.shiftKey && document.activeElement === buttons[buttons.length-1]) { event.preventDefault(); buttons[0]?.focus(); }
      }
    }
    document.addEventListener('keydown', keydown);
    return () => { document.body.style.overflow = overflow; document.removeEventListener('keydown', keydown); previous?.focus(); };
  }, [onClose]);
  return createPortal(<div id="aso-report-modal" role="dialog" aria-modal="true" aria-labelledby="aso-title" className="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center p-4">
    <style>{`
      .aso-sheet table { width:100%; border-collapse:collapse; table-layout:fixed; }
      .aso-sheet th,.aso-sheet td { border:1px solid #333; padding:6px; vertical-align:top; overflow-wrap:anywhere; }
      .aso-sheet th { background:#f4f4f4; font-weight:700; }
      .aso-sheet .aso-blank { height:32px; }
      @media print {
        @page { size:A4 landscape; margin:10mm; }
        body { overflow:visible !important; background:white !important; }
        body > :not(#aso-report-modal) { display:none !important; }
        #aso-report-modal { position:static !important; display:block !important; padding:0 !important; background:white !important; }
        #aso-report-modal .aso-shell { max-height:none !important; max-width:none !important; overflow:visible !important; box-shadow:none !important; }
        #aso-report-modal .aso-toolbar { display:none !important; }
        #aso-report-modal .aso-scroll { overflow:visible !important; padding:0 !important; }
        .aso-sheet { min-width:0 !important; font-size:10px !important; color:black; }
        .aso-sheet tr { break-inside:avoid; }
      }
    `}</style>
    <div className="aso-shell bg-white rounded-xl shadow-xl w-full max-w-6xl max-h-[92vh] flex flex-col overflow-hidden">
      <div className="aso-toolbar bg-slate-900 text-white px-5 py-4 flex items-center justify-between gap-3">
        <h2 id="aso-title" className="font-bold">Relatório de ASO</h2>
        <div className="flex gap-3">
          <button type="button" onClick={() => window.print()} className="flex items-center gap-2 border rounded px-3 py-2 text-sm"><Printer size={16} /> Imprimir / Salvar PDF</button>
          <button ref={closeRef} type="button" onClick={onClose} aria-label="Fechar relatório"><X /></button>
        </div>
      </div>
      <div className="aso-scroll overflow-auto p-5">
        <article className="aso-sheet min-w-[850px] text-xs text-black">
          <h1 className="text-center text-xl font-bold mb-1">ATESTADO DE SAÚDE OCUPACIONAL — ASO</h1>
          <p className="text-center text-[10px] mb-3">TalentLab · Simulação educacional</p>
          <table><tbody>
            <tr><td colSpan={3}><strong>Empresa: </strong>{report.funcionario.empresa?.razaoSocial || '________________________'}</td><td><strong>CNPJ: </strong>{report.funcionario.empresa?.cnpj || '________________'}</td></tr>
            <tr><td colSpan={3}><strong>Funcionário: </strong>{report.funcionario.nome}</td><td><strong>CPF: </strong>{report.funcionario.cpf || '________________'}</td></tr>
            <tr><th>Sexo</th><th>Nascimento</th><th colSpan={2}>Função</th></tr>
            <tr><td>{report.funcionario.sexo === 'MASCULINO' ? 'Masculino' : report.funcionario.sexo === 'FEMININO' ? 'Feminino' : 'Não informado'}</td><td>{report.funcionario.dataNascimento ? formatASODate(report.funcionario.dataNascimento) : 'Não informado'}</td><td colSpan={2}>{report.funcionario.cargo?.titulo || '________________'}</td></tr>
            <tr><th colSpan={4}>Descrição de atividades desenvolvidas</th></tr>
            <tr><td colSpan={4} className="aso-blank"></td></tr>
            <tr><th colSpan={4}>Tipo de Exame Médico</th></tr>
            <tr><td colSpan={4} className="text-center">{exams.map(([key,label]) => <span key={key} className="inline-block mr-4">{label} ({report.tipo === key ? ' X ' : '　'})</span>)}{!exams.some(([key]) => key === report.tipo) && <span>Outro: {report.tipo}</span>}</td></tr>
          </tbody></table>
          <h2 className="text-center text-base font-bold border-x border-black py-1">Riscos</h2>
          <table><thead><tr>{risks.map(group => <th key={group.title}>{group.title}</th>)}</tr></thead>
            <tbody>{Array.from({ length: 9 }, (_,i) => <tr key={i}>{risks.map(group => <td key={group.title}>{group.items[i] ? '(　) ' + group.items[i] : ''}</td>)}</tr>)}</tbody>
          </table>
          <table><tbody>
            <tr><td colSpan={3}><strong>Parecer registrado: </strong>Apto ({report.resultado === 'APTO' ? ' X ' : '　'})　 Inapto ({report.resultado === 'INAPTO' ? ' X ' : '　'})</td><td><strong>Data: </strong>{formatASODate(report.data)}</td></tr>
            <tr><td colSpan={4}><strong>Médico / CRM: </strong>{report.medico}</td></tr>
            <tr><td colSpan={3} className="aso-blank"><strong>Assinatura do médico:</strong></td><td rowSpan={2}>Data da assinatura<br /><br />____ / ____ / ________</td></tr>
            <tr><td colSpan={3} className="aso-blank"><strong>Assinatura do funcionário:</strong></td></tr>
          </tbody></table>
          <p className="mt-2 text-[10px]">Campos não cadastrados e riscos ficam em branco para preenchimento. Registro: {report.id}</p>
        </article>
      </div>
    </div>
  </div>, document.body);
}
