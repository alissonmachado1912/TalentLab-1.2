import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TalentLab | SENAI-SP',
  description: 'Plataforma educacional e prática de Gestão de Pessoas, Folha de Pagamento e Custos de Produção.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="h-full bg-slate-50">
      <body className="h-full text-slate-900 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}