'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Building2, Users, Briefcase, Clock, FileCheck, Calculator, PieChart, LayoutDashboard, ClipboardList, ChevronDown, UserRound, GraduationCap, Menu } from 'lucide-react';
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
  const [menuOpen, setMenuOpen] = useState(false);
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
    <div className="tl-navigation">
      <button type="button" aria-controls="main-navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} className="tl-mobile-menu"><span className="flex items-center gap-2 font-black"><span className="rounded-lg bg-red-600 px-2 py-1 text-white">TL</span> TalentLab</span><span className="flex items-center gap-2 text-xs"><Menu size={18} />Menu</span></button>
    <aside id="main-navigation" className={`tl-sidebar ${menuOpen ? "tl-sidebar-open" : ""}`} onClick={(event) => { if ((event.target as HTMLElement).closest('a')) setMenuOpen(false); }}>
      <div>
        <div className="tl-school-label">SENAI-SP <span>Educação profissional</span></div>
        <div className="tl-brand flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e30613] text-white font-black shadow-sm">TL</div>
          <div>
            <h1 className="text-xl font-black text-neutral-900 tracking-tight leading-none">TalentLab</h1>
            <span className="text-[9px] text-red-700 font-semibold tracking-wider uppercase">SENAI-SP · Laboratório de prática</span>
          </div>
        </div>

        <nav aria-label="Navegação principal" className="px-4 pb-5 space-y-5">
          <Link
            href="/dashboard"
            className={`flex items-center gap-3 px-3 py-2.5 tl-nav-item text-[13px] font-semibold transition-colors ${pathname === '/dashboard' ? 'tl-nav-active' : 'tl-nav-idle'}`}
          >
            <LayoutDashboard className="h-4 w-4" />
            Visão Geral
          </Link>

          <Link href="/atividades" aria-current={pathname === '/atividades' ? 'page' : undefined} className={'tl-nav-item flex items-center gap-3 px-3 py-2.5 text-[13px] font-semibold ' + (pathname === '/atividades' ? 'tl-nav-active' : 'tl-nav-idle')}><ClipboardList className="h-4 w-4" />Atividades</Link>
          {groups.map((group) => {
            const isOpen = openGroups[group.title];
            return (
              <section key={group.title}>
                <button
                  type="button"
                  onClick={() => toggle(group.title)}
                  className="w-full flex items-center justify-between px-3 py-1.5 text-[10px] font-bold tracking-[0.14em] text-neutral-500 hover:text-red-700 transition-colors"
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
                          aria-current={active ? 'page' : undefined}
                          className={`flex items-center gap-3 px-3 py-2.5 tl-nav-item text-[13px] font-semibold transition-colors ${active ? 'tl-nav-active' : 'tl-nav-idle'}`}
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

      <div className="mt-auto p-4 border-t border-neutral-200">
        <div className="flex items-center gap-3 p-3 bg-neutral-50 rounded-lg border border-neutral-200">
          <div className="h-8 w-8 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-xs">{role === 'professor' ? 'P' : 'A'}</div>
          <div>
            <p className="text-xs font-bold text-neutral-800">{role === 'professor' ? 'Professor' : 'Aluno'}</p>
            <p className="text-[11px] text-slate-500">SENAI-SP</p>
          </div>
        </div>
      </div>
    </aside>
    </div>
  );
}
