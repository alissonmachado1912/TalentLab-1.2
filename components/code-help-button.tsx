'use client';

import { useState } from 'react';
import type { ReactNode } from 'react';
import { Info } from 'lucide-react';
import { Button } from './ui/button';
import CodeHelpModal from './code-help-modal';

interface CodeItem {
  code: string;
  description: string;
}

interface Props {
  items: CodeItem[];
  title?: string;
  children?: ReactNode;
}

export default function CodeHelpButton({ items, title, children }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="outline" size="sm" onClick={() => setOpen(true)} className="flex items-center gap-2">
        <Info className="h-3.5 w-3.5 text-red-600" /> Códigos
      </Button>
      <CodeHelpModal isOpen={open} onClose={() => setOpen(false)} title={title} items={items}>{children}</CodeHelpModal>
    </>
  );
}
