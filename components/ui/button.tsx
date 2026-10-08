import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({ children, variant = 'primary', size = 'md', className = '', ...props }: ButtonProps) {
  const base = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-red-100 disabled:opacity-50 disabled:cursor-not-allowed active:translate-y-px';
  const variants = {
    primary: 'bg-[#e30613] text-white hover:bg-[#c80510] shadow-sm',
    secondary: 'bg-neutral-100 text-neutral-800 hover:bg-neutral-200',
    outline: 'border border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-50',
    danger: 'bg-red-700 text-white hover:bg-red-800 shadow-sm',
  };
  const sizes = { sm: 'text-xs px-2.5 py-1.5 gap-1.5', md: 'text-sm px-4 py-2 gap-2', lg: 'text-base px-5 py-2.5 gap-2.5' };
  return <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>{children}</button>;
}
