import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'red' | 'emerald' | 'rose' | 'amber' | 'slate';
}

export function Badge({ children, variant = 'slate' }: BadgeProps) {
  const variants = {
    red: 'bg-red-50 text-red-700 border-red-200',
    emerald: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    rose: 'bg-rose-50 text-rose-700 border-rose-200',
    amber: 'bg-amber-50 text-amber-800 border-amber-200',
    slate: 'bg-neutral-100 text-neutral-700 border-neutral-200',
  };

  return <span className={`inline-flex items-center text-[11px] font-bold px-2 py-0.5 rounded-sm border ${variants[variant]}`}>{children}</span>;
}
