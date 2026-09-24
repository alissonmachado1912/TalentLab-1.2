'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { Activity, getMechanism } from '@/lib/activities';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, Building2, CheckCircle2, Trophy, ArrowUpRight, ClipboardList, Plus, Clock3, ChevronRight } from 'lucide-react';

type User = {
  name: string;
  role: 'aluno' | 'professor';
  identifier: string;
  alunoId?: string;
  turmaId?: string;
};

function StudentDashboard({ user }: { user: User }) {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams();
    if (user.alunoId) params.set('alunoId', user.alunoId);
    if (user.turmaId) params.set('turmaId', user.turmaId);
    fetch(`/api/activities?${params.toString()}`)
      .then((res) => res.json())
      .then(setActivities)
      .finally(() => setLoading(false));
  }, [user.alunoId, user.turmaId]);

  const concluidas = activities.filter((a) => a.concluidaPeloAluno).length;

  return (
    <div className="space-y-6">
      <div className="bg-neutral-950 text-white p-6 rounded-2xl shadow-xl flex flex-wrap justify-between items-center gap-4">
        <div>
          <Badge variant="red">Ambiente Educacional Ativo</Badge>
          <h1 className="text-2xl font-bold mt-2">Olá, {user.name.split(' ')[0] || 'Aluno'}!</h1>
          <p className="text-xs text-slate-300 mt-1 max-w-xl">Acompanhe as atividades publicadas pelo professor e execute cada desafio no módulo indicado.</p>
        </div>
        <Link href="/atividades"><Button variant="primary" size="lg">Ver minhas atividades <ArrowUpRight className="h-4 w-4" /></Button></Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard label="Atividades Publicadas" value={String(activities.length)} icon={<ClipboardList className="h-5 w-5" />} iconClass="bg-red-50 text-red-600" />
        <StatCard label="Atividades Concluídas" value={String(concluidas)} icon={<CheckCircle2 className="h-5 w-5" />} iconClass="bg-emerald-50 text-emerald-600" />
        <StatCard label="Atividades Pendentes" value={String(activities.length - concluidas)} icon={<Clock3 className="h-5 w-5" />} iconClass="bg-amber-50 text-amber-600" />
        <StatCard label="Sua Pontuação" value="1.250 XP" icon={<Trophy className="h-5 w-5" />} iconClass="bg-amber-50 text-amber-600" />
      </div>

      <section>
        <div className="flex items-end justify-between mb-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-red-600">Sala de aula</p>
            <h2 className="text-xl font-black text-slate-900 mt-1">Atividades recentes</h2>
          </div>
          <Link href="/atividades" className="text-xs font-bold text-red-600 hover:text-red-700">Ver todas</Link>
        </div>

        {loading ? (
          <p className="text-sm text-slate-500">Carregando...</p>
        ) : activities.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-xl p-8 text-center">
            <ClipboardList className="h-8 w-8 mx-auto text-slate-300" />
            <h3 className="font-bold text-slate-800 mt-3">Nenhuma atividade publicada ainda</h3>
            <p className="text-sm text-slate-500 mt-1">Quando o professor registrar uma atividade, ela aparecerá aqui como um card.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {activities.slice(0, 4).map((activity) => <StudentActivityCard key={activity.id} activity={activity} />)}
          </div>
        )}
      </section>
    </div>
  );
}

function StudentActivityCard({ activity }: { activity: Activity }) {
  const mechanism = getMechanism(activity.mechanism);
  return (
    <Link href={`${mechanism.href}?atividade=${activity.id}`} className="block bg-white border border-slate-200 rounded-xl hover:border-red-300 hover:shadow-sm transition-all overflow-hidden">
      <div className="flex items-start gap-4 p-5">
        <div className="h-11 w-11 rounded-full bg-red-50 text-red-600 flex items-center justify-center shrink-0"><ClipboardList className="h-5 w-5" /></div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-bold text-slate-900">{activity.title}</h3>
            <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 px-2 py-1 rounded-full">{mechanism.label}</span>
            {activity.concluidaPeloAluno && (
              <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">Concluída</span>
            )}
          </div>
          <p className="text-xs text-slate-500 mt-1">Publicado por {activity.createdBy} • {new Date(activity.createdAt).toLocaleDateString('pt-BR')}</p>
          <p className="text-sm text-slate-700 mt-3 line-clamp-2">{activity.statement}</p>
        </div>
        <ChevronRight className="h-5 w-5 text-slate-300 mt-1" />
      </div>
    </Link>
  );
}

function ProfessorDashboard({ user }: { user: User }) {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [totalAlunos, setTotalAlunos] = useState(0);
  const [loading, setLoading] = useState(true);

  const carregar = async () => {
    setLoading(true);
    try {
      const [resActivities, resAlunos] = await Promise.all([
        fetch('/api/activities'),
        fetch('/api/alunos'),
      ]);
      const [dataActivities, dataAlunos] = await Promise.all([resActivities.json(), resAlunos.json()]);
      setActivities(dataActivities);
      setTotalAlunos(dataAlunos.length);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregar();
  }, []);

  const mechanismCount = useMemo(() => new Set(activities.map((item) => item.mechanism)).size, [activities]);
  const pendentes = activities.filter((a) => a.turmaId && a.totalConcluidos < a.totalAlunosTurma).length;

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-red-600">Painel administrativo</p>
          <h1 className="text-2xl font-black text-slate-900 mt-1">Olá, {user.name.split(' ')[0] || 'Professor'}.</h1>
          <p className="text-sm text-slate-500 mt-1">Gerencie as atividades da turma e acompanhe a operação do laboratório TalentLab.</p>
        </div>
        <Link href="/atividades"><Button variant="primary" size="lg"><Plus className="h-4 w-4" /> Criar atividade</Button></Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard label="Atividades Criadas" value={String(activities.length)} icon={<ClipboardList className="h-5 w-5" />} iconClass="bg-red-50 text-red-600" />
        <StatCard label="Mecanismos Utilizados" value={String(mechanismCount)} icon={<CheckCircle2 className="h-5 w-5" />} iconClass="bg-emerald-50 text-emerald-600" />
        <StatCard label="Alunos na Turma" value={String(totalAlunos)} icon={<Users className="h-5 w-5" />} iconClass="bg-blue-50 text-blue-600" />
        <StatCard label="Atividades Pendentes" value={String(pendentes)} icon={<Clock3 className="h-5 w-5" />} iconClass="bg-amber-50 text-amber-600" />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[1.5fr_1fr] gap-5">
        <section className="bg-white border border-slate-200 rounded-xl overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between">
            <div><h2 className="font-black text-slate-900">Atividades da turma</h2><p className="text-xs text-slate-500 mt-1">Enunciados e instruções publicados para os alunos.</p></div>
            <Link href="/atividades" className="text-xs font-bold text-red-600">Gerenciar</Link>
          </div>
          {loading ? (
            <p className="p-6 text-sm text-slate-500">Carregando...</p>
          ) : activities.length === 0 ? (
            <div className="p-8 text-center"><ClipboardList className="h-8 w-8 mx-auto text-slate-300" /><p className="font-bold text-slate-700 mt-3">Você ainda não criou atividades.</p><p className="text-xs text-slate-500 mt-1">Crie a primeira atividade para que ela apareça no painel dos alunos.</p></div>
          ) : (
            <div className="divide-y divide-slate-100">{activities.map((activity) => <TeacherActivityRow key={activity.id} activity={activity} onDelete={carregar} />)}</div>
          )}
        </section>

        <section className="bg-neutral-950 text-white rounded-xl p-6">
          <p className="text-[10px] uppercase tracking-widest text-red-400 font-bold">Objetivo do professor</p>
          <h2 className="text-xl font-black mt-2">Menos correção manual. Mais prática.</h2>
          <p className="text-sm text-slate-300 mt-3 leading-6">Publique um enunciado, defina as instruções e indique qual mecanismo o aluno deverá utilizar. O aluno recebe a atividade no próprio painel.</p>
          <Link href="/atividades" className="inline-flex items-center gap-2 mt-6 bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-4 py-2.5 rounded-sm transition-colors">Abrir atividades <ArrowUpRight className="h-4 w-4" /></Link>
        </section>
      </div>
    </div>
  );
}

function TeacherActivityRow({ activity, onDelete }: { activity: Activity; onDelete: () => void }) {
  const mechanism = getMechanism(activity.mechanism);
  const remove = async () => {
    if (!confirm('Excluir esta atividade?')) return;
    const res = await fetch(`/api/activities/${activity.id}`, { method: 'DELETE' });
    if (res.ok) onDelete();
  };
  return (
    <div className="p-4 flex items-start gap-3">
      <div className="h-9 w-9 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0"><ClipboardList className="h-4 w-4" /></div>
      <div className="flex-1 min-w-0"><p className="font-bold text-sm text-slate-900 truncate">{activity.title}</p><p className="text-xs text-slate-500 mt-1">{mechanism.label} • {new Date(activity.createdAt).toLocaleDateString('pt-BR')}</p></div>
      <button onClick={remove} className="text-xs font-bold text-slate-400 hover:text-red-600 px-2 py-1">Excluir</button>
    </div>
  );
}

function StatCard({ label, value, icon, iconClass }: { label: string; value: string; icon: React.ReactNode; iconClass: string }) {
  return <div className="bg-white border border-slate-200 rounded-xl p-5"><div className="flex justify-between items-start"><div><span className="text-xs font-semibold text-slate-500">{label}</span><h3 className="text-2xl font-black text-slate-900 mt-1">{value}</h3></div><div className={`p-2.5 rounded-lg ${iconClass}`}>{icon}</div></div></div>;
}

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => { try { setUser(JSON.parse(localStorage.getItem('talentlab_current_user') || 'null')); } catch { setUser(null); } }, []);
  if (!user) return null;
  return user.role === 'professor' ? <ProfessorDashboard user={user} /> : <StudentDashboard user={user} />;
}