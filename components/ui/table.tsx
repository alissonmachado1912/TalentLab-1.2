import React from 'react';

export function Table({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
      <table className="w-full text-left text-sm border-collapse">{children}</table>
    </div>
  );
}

export function TableHeader({ children }: { children: React.ReactNode }) {
  return <thead className="bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider">{children}</thead>;
}

export function TableBody({ children }: { children: React.ReactNode }) {
  return <tbody className="divide-y divide-slate-100 text-slate-700 [&>tr]:transition-colors [&>tr:hover]:bg-slate-50">{children}</tbody>;
}