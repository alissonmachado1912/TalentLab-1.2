'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Building2, Users, Briefcase, Clock, FileCheck, Calculator, PieChart, LayoutDashboard, ClipboardList, ChevronDown, UserRound, GraduationCap } from 'lucide-react';
import { useEffect, useState } from 'react';

type Role = 'aluno' | 'professor';

type User = { name: string; role: Role };

const baseGroups = [
  {
    title: 'CADASTROS',
    items: [
      { title: 'Empresas', href: '/cadastros/empresas', icon: Building2 },
      { title: 'Cargos', href: '/cadastros/cargos', icon: Briefcase },
      { title: 'Funcionários', href: '/cadastros/funcionarios', icon: Users },
    ],
  },
  {
    title: 'ROTINAS',
    items: [
      { title: 'Ponto Diário', href: '/folha-pagamento/ponto', icon: Clock },
      { title: 'Registro ASO', href: '/folha-pagamento/aso', icon: FileCheck },
    ],
  },
  {
    title: 'PROCESSOS',
    items: [
      { title: 'Simulador de Folha', href: '/folha-pagamento/calcular', icon: Calculator },
      { title: 'Custos de Produção', href: '/custos', icon: PieChart },
      { title: 'Simulador de RH', href: '/simulador-rh', icon: UserRound },
    ],
  },
];

const turmaItem = { title: 'Turmas & Alunos', href: '/cadastros/turmas', icon: GraduationCap };

export default function Sidebar() {
  const pathname = usePathname();
  const [role, setRole] = useState<Role>('aluno');
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({ CADASTROS: true, ROTINAS: true, PROCESSOS: true });

  useEffect(() => {
    try {
      const user = JSON.parse(localStorage.getItem('talentlab_current_user') || 'null') as User | null;
      if (user?.role) setRole(user.role);
    } catch {}
  }, []);

  const toggle = (title: string) => setOpenGroups((current) => ({ ...current, [title]: !current[title] }));

  // Adiciona "Turmas & Alunos" no grupo CADASTROS, só para o professor
  const groups = baseGroups.map((group) => {
    if (group.title === 'CADASTROS' && role === 'professor') {
      return { ...group, items: [...group.items, turmaItem, { title: 'Consultar alunos', href: '/avaliacao', icon: ClipboardList }] };
    }
    return group;
  });

  return (
    <aside className="w-64 border-r border-neutral-200 bg-white flex flex-col justify-between shrink-0">
      <div>
        <div className="flex items-center gap-3 px-6 py-5 border-b border-neutral-100">
          <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-[#e30613] text-white font-black shadow-sm">TL</div>
          <div>
            <h1 className="font-black text-neutral-950 leading-none">TalentLab</h1>
            <span className="text-[10px] text-[#e30613] font-bold tracking-wider uppercase">SENAI-SP • Ambiente Educacional</span>
          </div>
        </div>

        <nav className="p-4 space-y-3">
          <Link
            href="/dashboard"
            className={`flex items-center gap-3 px-3 py-2.5 rounded-sm text-sm font-semibold transition-colors ${pathname === '/dashboard' ? 'text-[#e30613] bg-red-50 border-l-2 border-[#e30613]' : 'text-neutral-700 hover:text-[#e30613] hover:bg-red-50'}`}
          >
            <LayoutDashboard className="h-4 w-4" />
            Visão Geral
          </Link>

          {groups.map((group) => {
            const isOpen = openGroups[group.title];
            return (
              <section key={group.title}>
                <button
                  type="button"
                  onClick={() => toggle(group.title)}
                  className="w-full flex items-center justify-between px-3 py-1.5 text-[10px] font-bold tracking-[0.14em] text-neutral-400 hover:text-neutral-700 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{group.title}</span>
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform ${isOpen ? '' : '-rotate-90'}`} />
                </button>
                <div className={`grid transition-[grid-template-rows] duration-200 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden space-y-1 pt-1">
                    {group.items.map((item) => {
                      const Icon = item.icon;
                      const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`flex items-center gap-3 px-3 py-2.5 rounded-sm text-sm font-semibold transition-colors ${active ? 'text-[#e30613] bg-red-50 border-l-2 border-[#e30613]' : 'text-neutral-700 hover:text-[#e30613] hover:bg-red-50'}`}
                        >
                          <Icon className="h-4 w-4" />
                          {item.title}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </section>
            );
          })}
        </nav>
      </div>

      <div className="p-4 border-t border-neutral-100">
        <div className="flex items-center gap-3 p-2.5 bg-neutral-50 rounded-sm border border-neutral-200">
          <div className="h-8 w-8 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-xs">{role === 'professor' ? 'P' : 'A'}</div>
          <div>
            <p className="text-xs font-bold text-neutral-900">{role === 'professor' ? 'Professor' : 'Aluno'}</p>
            <p className="text-[11px] text-neutral-500">SENAI-SP</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
