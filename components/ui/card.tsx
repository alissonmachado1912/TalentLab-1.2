import React from 'react';

export function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white rounded-2xl border border-slate-200 shadow-[0_4px_24px_-16px_rgba(15,23,42,0.2)] p-6 ${className}`}>
      {children}
    </div>
  );
}