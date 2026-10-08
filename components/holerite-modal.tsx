'use client';

import { Printer, X } from 'lucide-react';
import { Button } from './ui/button';

interface HoleriteProps {
  isOpen: boolean;
  onClose: () => void;
  dados: {
    referencia?: string;
    empresa: string;
    cnpj: string;
    funcionario: string;
    cargo: string;
    admissao: string;
    proventos: { codigo: string; descricao: string; referencia: string; valor: number }[];
    descontos: { codigo: string; descricao: string; referencia: string; valor: number }[];
    salarioBase: number;
    baseFGTS: number;
    fgtsDoMes: number;
    totalProventos: number;
    totalDescontos: number;
    salarioLiquido: number;
  };
}

export default function HoleriteModal({ isOpen, onClose, dados }: HoleriteProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-3xl rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Barra de Ferramentas da Modal */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
          <h3 className="text-sm font-bold tracking-wide">Recibo de Pagamento de Salário (Holerite)</h3>
          <div className="flex items-center gap-2">
            <Button size="sm" variant="outline" onClick={() => window.print()}>
              <Printer className="h-3.5 w-3.5" /> Imprimir
            </Button>
            <button onClick={onClose} className="text-slate-400 hover:text-white p-1">
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Corpo do Holerite (Modelo Padrão CLT) */}
        <div className="p-8 overflow-y-auto space-y-6 font-mono text-xs">
          {/* Dados Empregador */}
          <div className="border border-slate-300 p-4 rounded-md bg-slate-50/50 flex justify-between">
            <div>
              <p className="font-bold text-sm text-slate-900">{dados.empresa}</p>
              <p className="text-slate-600">CNPJ: {dados.cnpj}</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-slate-900">Recibo de Salário</p>
              <p className="text-slate-500">Referência: {dados.referencia || new Date().toLocaleDateString('pt-BR', { month: '2-digit', year: 'numeric' })}</p>
            </div>
          </div>

          {/* Dados Trabalhador */}
          <div className="border border-slate-300 p-4 rounded-md grid grid-cols-3 gap-2">
            <div><strong>Código/Nome:</strong> {dados.funcionario}</div>
            <div><strong>Cargo:</strong> {dados.cargo}</div>
            <div><strong>Admissão:</strong> {dados.admissao}</div>
          </div>

          {/* Tabela do Holerite */}
          <div className="border border-slate-300 rounded-md overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-slate-100 border-b border-slate-300 font-bold">
                <tr>
                  <th className="p-2">Cód.</th>
                  <th className="p-2">Descrição</th>
                  <th className="p-2 text-center">Ref.</th>
                  <th className="p-2 text-right">Proventos (R$)</th>
                  <th className="p-2 text-right">Descontos (R$)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {dados.proventos.map((p, i) => (
                  <tr key={i}>
                    <td className="p-2">{p.codigo}</td>
                    <td className="p-2">{p.descricao}</td>
                    <td className="p-2 text-center">{p.referencia}</td>
                    <td className="p-2 text-right font-semibold text-emerald-700">{p.valor.toFixed(2)}</td>
                    <td className="p-2 text-right"></td>
                  </tr>
                ))}
                {dados.descontos.map((d, i) => (
                  <tr key={i}>
                    <td className="p-2">{d.codigo}</td>
                    <td className="p-2">{d.descricao}</td>
                    <td className="p-2 text-center">{d.referencia}</td>
                    <td className="p-2 text-right"></td>
                    <td className="p-2 text-right font-semibold text-rose-700">{d.valor.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="border border-slate-300 p-4 rounded-md space-y-2">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="block text-[10px] text-slate-500">Base de cálculo do FGTS</span>
                <span className="font-bold">{dados.baseFGTS.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
              </div>
              <div>
                <span className="block text-[10px] text-slate-500">FGTS do mês (8%) — Depósito do empregador</span>
                <span className="font-bold">{dados.fgtsDoMes.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
              </div>
            </div>
            <p className="text-[10px] text-slate-500">O FGTS é pago pelo empregador e não é descontado do salário do funcionário.</p>
          </div>

          {/* Totais do Holerite */}
          <div className="border border-slate-300 p-4 rounded-md grid grid-cols-3 gap-4 bg-slate-50">
            <div>
              <span className="block text-[10px] text-slate-500">Total Proventos</span>
              <span className="font-bold text-sm text-emerald-700">R$ {dados.totalProventos.toFixed(2)}</span>
            </div>
            <div>
              <span className="block text-[10px] text-slate-500">Total Descontos</span>
              <span className="font-bold text-sm text-rose-700">R$ {dados.totalDescontos.toFixed(2)}</span>
            </div>
            <div className="bg-white p-2 border border-slate-300 rounded text-right">
              <span className="block text-[10px] text-slate-500 uppercase font-bold">Valor Líquido</span>
              <span className="font-black text-base text-slate-900">R$ {dados.salarioLiquido.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
