'use client';

import { Bell, Search, Sparkles, LogOut, CheckCircle2, ClipboardCheck } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type User = { name: string; identifier: string; role: 'aluno' | 'professor'; alunoId?: string };

interface Notificacao {
  id: string;
  mensagem: string;
  tipo: 'NOVA_ATIVIDADE' | 'ATIVIDADE_CONCLUIDA';
  lida: boolean;
  createdAt: string;
}

export default function Header() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [notificacoes, setNotificacoes] = useState<Notificacao[]>([]);
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    try {
      setUser(JSON.parse(localStorage.getItem('talentlab_current_user') || 'null'));
    } catch {
      setUser(null);
    }
  }, []);

  async function carregarNotificacoes(u: User) {
    const params = new URLSearchParams();
    params.set('destino', u.role === 'professor' ? 'PROFESSOR' : 'ALUNO');
    if (u.role === 'aluno' && u.alunoId) params.set('alunoId', u.alunoId);
    const res = await fetch(`/api/notificacoes?${params.toString()}`);
    const data = await res.json();
    setNotificacoes(data);
  }

  useEffect(() => {
    if (!user) return;
    carregarNotificacoes(user);
    const interval = setInterval(() => carregarNotificacoes(user), 30000);
    return () => clearInterval(interval);
  }, [user]);

  const naoLidas = notificacoes.filter((n) => !n.lida);

  const abrirNotificacoes = async () => {
    setAberto((prev) => !prev);
    if (!aberto && naoLidas.length > 0) {
      await fetch('/api/notificacoes/marcar-lidas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids: naoLidas.map((n) => n.id) }),
      });
      setNotificacoes((prev) => prev.map((n) => ({ ...n, lida: true })));
    }
  };

  const logout = async () => {
    await fetch('/api/auth/session', { method: 'DELETE' });
    localStorage.removeItem('talentlab_current_user');
    router.replace('/login');
  };

  const initials = user?.name?.split(' ').map((part) => part[0]).slice(0, 2).join('').toUpperCase() || 'TL';
  const roleLabel = user?.role === 'professor' ? 'Professor' : 'Aluno';

  return (
    <header className="h-16 border-b border-neutral-200 bg-white px-6 flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center gap-4 w-1/3">
        <div className="relative w-full max-w-md" />
      </div>

      <div className="flex items-center gap-4">
        {user?.role === 'professor' ? (
          <div className="flex items-center gap-2 bg-neutral-50 border border-neutral-200 px-3 py-1.5 rounded-sm">
            <Sparkles className="h-3.5 w-3.5 text-[#e30613]" />
            <span className="text-xs font-bold text-neutral-800">Painel Administrativo</span>
          </div>
        ) : (
          <div className="flex items-center gap-2 bg-neutral-50 border border-neutral-200 px-3 py-1.5 rounded-sm">
            <Sparkles className="h-3.5 w-3.5 text-amber-500" />
            <span className="text-xs font-bold text-neutral-800">1.250 XP</span>
            <span className="text-[10px] bg-[#e30613] text-white font-bold px-1.5 py-0.5 rounded-sm">Nível 3</span>
          </div>
        )}

        <div className="relative">
          <button onClick={abrirNotificacoes} className="relative p-2 rounded-sm text-neutral-500 hover:bg-neutral-100 transition-colors">
            <Bell className="h-4 w-4" />
            {naoLidas.length > 0 && (
              <span className="absolute top-0.5 right-0.5 h-4 w-4 rounded-full bg-[#e30613] text-white text-[9px] font-bold flex items-center justify-center">
                {naoLidas.length > 9 ? '9+' : naoLidas.length}
              </span>
            )}
          </button>

          {aberto && (
            <div className="absolute right-0 mt-2 w-80 bg-white border border-neutral-200 rounded-lg shadow-xl overflow-hidden z-20">
              <div className="px-4 py-3 border-b border-neutral-100 font-bold text-sm text-neutral-800">Notificações</div>
              <div className="max-h-80 overflow-y-auto divide-y divide-neutral-100">
                {notificacoes.length === 0 ? (
                  <p className="p-4 text-xs text-neutral-400 text-center">Nenhuma notificação ainda.</p>
                ) : (
                  notificacoes.map((n) => (
                    <div key={n.id} className="p-3 flex items-start gap-2">
                      {n.tipo === 'NOVA_ATIVIDADE' ? (
                        <ClipboardCheck className="h-4 w-4 text-red-600 shrink-0 mt-0.5" />
                      ) : (
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      )}
                      <div>
                        <p className="text-xs text-neutral-700">{n.mensagem}</p>
                        <p className="text-[10px] text-neutral-400 mt-1">{new Date(n.createdAt).toLocaleString('pt-BR')}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>

        <div className="h-6 w-px bg-neutral-200" />

        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-xs">{initials}</div>
          <div className="hidden sm:block text-left">
            <p className="text-xs font-bold text-neutral-900 leading-none">{user?.name || 'Usuário TalentLab'}</p>
            <p className="text-[10px] text-neutral-500 mt-1">{roleLabel} • SENAI-SP</p>
          </div>
          <button onClick={logout} title="Sair" className="p-2 text-neutral-400 hover:text-[#e30613] hover:bg-red-50 rounded-sm">
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}