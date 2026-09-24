'use client';

import { X } from 'lucide-react';
import type { ReactNode } from 'react';
import { Button } from './ui/button';

interface CodeItem {
  code: string;
  description: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  items: CodeItem[];
  children?: ReactNode;
}

export default function CodeHelpModal({ isOpen, onClose, title = 'Códigos', items, children }: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-xl rounded-xl shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
        <div className="bg-slate-900 text-white px-6 py-3 flex items-center justify-between">
          <h3 className="text-sm font-bold tracking-wide">{title}</h3>
          <div className="flex items-center gap-2">
            <button onClick={onClose} className="text-slate-200 hover:text-white p-1">
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <p className="text-sm text-slate-600">Códigos cadastrados e seus significados.</p>
          {children}

          <div className="border border-slate-200 rounded-md overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-xs text-slate-500 font-bold">
                <tr>
                  <th className="p-3">Código</th>
                  <th className="p-3">Significado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {items.map((it) => (
                  <tr key={it.code}>
                    <td className="p-3 font-mono text-xs font-bold text-red-600">{it.code}</td>
                    <td className="p-3 text-slate-700">{it.description}</td>
                  </tr>
                ))}
                {items.length === 0 && (
                  <tr>
                    <td colSpan={2} className="p-4 text-center text-slate-500">Nenhum código disponível.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="text-right">
            <Button variant="outline" size="sm" onClick={onClose}>Fechar</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
