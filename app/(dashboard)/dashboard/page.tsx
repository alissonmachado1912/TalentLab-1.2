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
    <div className="tl-dashboard space-y-7">
      <div className="tl-welcome flex flex-wrap justify-between items-center gap-6">
        <div>
          <p className="text-xs font-semibold text-neutral-500">Painel do aluno</p>
          <h1 className="text-3xl font-black tracking-tight mt-3">Olá, {user.name.split(' ')[0] || 'Aluno'}!</h1>
          <p className="text-xs text-slate-300 mt-1 max-w-xl">Veja o que está pendente e continue suas atividades.</p>
        </div>
        <Link href="/atividades"><Button variant="primary" size="lg">Ver minhas atividades <ArrowUpRight className="h-4 w-4" /></Button></Link>
      </div>

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard label="Atividades Publicadas" value={String(activities.length)} icon={<ClipboardList className="h-5 w-5" />} iconClass="bg-red-50 text-red-600" />
        <StatCard label="Atividades Concluídas" value={String(concluidas)} icon={<CheckCircle2 className="h-5 w-5" />} iconClass="bg-emerald-50 text-emerald-600" />
        <StatCard label="Atividades Pendentes" value={String(activities.length - concluidas)} icon={<Clock3 className="h-5 w-5" />} iconClass="bg-amber-50 text-amber-600" />
        <StatCard label="Sua Pontuação" value="1.250 XP" icon={<Trophy className="h-5 w-5" />} iconClass="bg-amber-50 text-amber-600" />
      </div>

      <QuickAccess professor={false} />
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
    <div className="tl-dashboard space-y-7">
      <div className="tl-welcome flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-red-600">Painel administrativo</p>
          <h1 className="text-3xl font-black text-white mt-2">Olá, {user.name.split(' ')[0] || 'Professor'}.</h1>
          <p className="text-sm text-slate-300 mt-3 max-w-xl leading-6">Acompanhe sua turma e os trabalhos dos alunos.</p>
        </div>
        <Link href="/atividades"><Button variant="primary" size="lg"><Plus className="h-4 w-4" /> Criar atividade</Button></Link>
      </div>

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard label="Atividades Criadas" value={String(activities.length)} icon={<ClipboardList className="h-5 w-5" />} iconClass="bg-red-50 text-red-600" />
        <StatCard label="Mecanismos Utilizados" value={String(mechanismCount)} icon={<CheckCircle2 className="h-5 w-5" />} iconClass="bg-emerald-50 text-emerald-600" />
        <StatCard label="Alunos na Turma" value={String(totalAlunos)} icon={<Users className="h-5 w-5" />} iconClass="bg-blue-50 text-blue-600" />
        <StatCard label="Atividades Pendentes" value={String(pendentes)} icon={<Clock3 className="h-5 w-5" />} iconClass="bg-amber-50 text-amber-600" />
      </div>

      <QuickAccess professor />
      <div className="grid grid-cols-1 gap-5">
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
    <div className="p-5 flex items-start gap-3 hover:bg-slate-50 transition-colors">
      <div className="h-9 w-9 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0"><ClipboardList className="h-4 w-4" /></div>
      <div className="flex-1 min-w-0"><p className="font-bold text-sm text-slate-900 truncate">{activity.title}</p><p className="text-xs text-slate-500 mt-1">{mechanism.label} • {new Date(activity.createdAt).toLocaleDateString('pt-BR')}</p></div>
      <button onClick={remove} className="text-xs font-bold text-slate-400 hover:text-red-600 px-2 py-1">Excluir</button>
    </div>
  );
}

function StatCard({ label, value, icon, iconClass }: { label: string; value: string; icon: React.ReactNode; iconClass: string }) {
  return <div className="tl-stat bg-white border border-slate-200 rounded-2xl p-5"><div className="flex justify-between items-start"><div><span className="text-xs font-semibold text-slate-500">{label}</span><h3 className="text-3xl font-black tracking-tight text-slate-900 mt-3">{value}</h3></div><div className={`p-2.5 rounded-lg ${iconClass}`}>{icon}</div></div></div>;
}

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => { try { setUser(JSON.parse(localStorage.getItem('talentlab_current_user') || 'null')); } catch { setUser(null); } }, []);
  if (!user) return null;
  return user.role === 'professor' ? <ProfessorDashboard user={user} /> : <StudentDashboard user={user} />;
}
function QuickAccess({ professor }: { professor: boolean }) {
  const links = professor ? [
    { href:'/cadastros/turmas', label:'Turmas e alunos', description:'Cadastros da turma', icon:Users },
    { href:'/avaliacao', label:'Consultar trabalhos', description:'Consultar por aluno', icon:CheckCircle2 },
    { href:'/atividades', label:'Planejar atividades', description:'Enunciados e orientações', icon:ClipboardList },
  ] : [
    { href:'/atividades', label:'Minhas atividades', description:'Atividades da sua turma', icon:ClipboardList },
    { href:'/cadastros/empresas', label:'Meus cadastros', description:'Empresas cadastradas', icon:Building2 },
    { href:'/folha-pagamento/calcular', label:'Simulador de folha', description:'Cálculos e holerites', icon:CheckCircle2 },
  ];
  return <section aria-label="Acesso rápido"><div className="mb-3 flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-red-600" /><h2 className="text-[11px] font-bold uppercase tracking-widest text-slate-500">Acesso rápido</h2></div><div className="grid gap-3 md:grid-cols-3">{links.map(item=><Link key={item.href} href={item.href} className="tl-shortcut group flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4"><div className="rounded-xl bg-slate-50 p-3 text-slate-600 transition group-hover:bg-red-50 group-hover:text-red-600"><item.icon size={19} /></div><div className="min-w-0 flex-1"><h3 className="text-sm font-bold text-slate-800">{item.label}</h3><p className="mt-1 text-[11px] text-slate-500">{item.description}</p></div><ArrowUpRight size={16} className="text-slate-300 group-hover:text-red-600" /></Link>)}</div></section>;
}
