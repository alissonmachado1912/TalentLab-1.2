'use client';

import Link from 'next/link';
import { FormEvent, useEffect, useState } from 'react';
import {
  Activity,
  ActivityType,
  activityTypeOptions,
  getMechanism,
  mechanismOptions,
} from '@/lib/activities';
import { ClipboardList, Plus, Send, Trash2, ArrowUpRight, GraduationCap, BookOpenCheck, CheckCircle2 } from 'lucide-react';

type User = {
  name: string;
  role: 'aluno' | 'professor';
  identifier: string;
  alunoId?: string;
  turmaId?: string;
};

interface Turma {
  id: string;
  nome: string;
}

export default function ActivitiesPage() {
  const [user, setUser] = useState<User | null>(null);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);

  async function carregarAtividades(u: User) {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (u.role === 'aluno' && u.alunoId) params.set('alunoId', u.alunoId);
      if (u.role === 'aluno' && u.turmaId) params.set('turmaId', u.turmaId);
      const res = await fetch(`/api/activities?${params.toString()}`);
      const data = await res.json();
      setActivities(data);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    let parsedUser: User | null = null;
    try {
      parsedUser = JSON.parse(localStorage.getItem('talentlab_current_user') || 'null');
    } catch {
      parsedUser = null;
    }
    setUser(parsedUser);
    if (parsedUser) carregarAtividades(parsedUser);
  }, []);

  if (!user) return null;

  return user.role === 'professor' ? (
    <ProfessorActivities
      activities={activities}
      loading={loading}
      showForm={showForm}
      setShowForm={setShowForm}
      user={user}
      onChanged={() => carregarAtividades(user)}
    />
  ) : (
    <StudentActivities activities={activities} loading={loading} user={user} onChanged={() => carregarAtividades(user)} />
  );
}

function ProfessorActivities({
  activities,
  loading,
  showForm,
  setShowForm,
  user,
  onChanged,
}: {
  activities: Activity[];
  loading: boolean;
  showForm: boolean;
  setShowForm: (value: boolean) => void;
  user: User;
  onChanged: () => void;
}) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-red-600">Gestão da turma</p>
          <h1 className="text-2xl font-black text-slate-900 mt-1">Atividades</h1>
          <p className="text-sm text-slate-500 mt-1">Crie enunciados e indique qual ferramenta do TalentLab o aluno deverá utilizar.</p>
        </div>
        <button onClick={() => setShowForm(!showForm)} className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-4 py-2.5 rounded-sm transition-colors">
          <Plus className="h-4 w-4" /> Nova atividade
        </button>
      </div>

      {showForm && <CreateActivityForm user={user} onCreated={() => { setShowForm(false); onChanged(); }} onCancel={() => setShowForm(false)} />}

      <section className="bg-white border border-slate-200 rounded-xl overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-200">
          <h2 className="font-black text-slate-900">Atividades publicadas</h2>
          <p className="text-xs text-slate-500 mt-1">Cada atividade ficará disponível no painel dos alunos após o cadastro.</p>
        </div>
        {loading ? (
          <p className="p-6 text-sm text-slate-500">Carregando...</p>
        ) : activities.length === 0 ? (
          <EmptyTeacher onCreate={() => setShowForm(true)} />
        ) : (
          <div className="divide-y divide-slate-100">
            {activities.map((activity) => (
              <TeacherActivityCard key={activity.id} activity={activity} onDeleted={onChanged} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

function CreateActivityForm({ user, onCreated, onCancel }: { user: User; onCreated: () => void; onCancel: () => void }) {
  const [title, setTitle] = useState('');
  const [statement, setStatement] = useState('');
  const [instructions, setInstructions] = useState('');
  const [type, setType] = useState<ActivityType>('pratica');
  const [mechanism, setMechanism] = useState(mechanismOptions[0].value);
  const [turmas, setTurmas] = useState<Turma[]>([]);
  const [turmaId, setTurmaId] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/turmas')
      .then((res) => res.json())
      .then((data) => {
        setTurmas(data);
        setTurmaId((prev) => prev || data[0]?.id || '');
      });
  }, []);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !statement.trim() || !instructions.trim()) {
      setError('Preencha o título, o enunciado e as instruções.');
      return;
    }
    setError('');
    try {
      const res = await fetch('/api/activities', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type,
          title: title.trim(),
          statement: statement.trim(),
          instructions: instructions.trim(),
          mechanism,
          className: turmas.find((t) => t.id === turmaId)?.nome || '',
          createdBy: user.name || 'Professor',
          turmaId: turmaId || null,
        }),
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.error || 'Erro ao publicar atividade.');
        return;
      }
      onCreated();
    } catch {
      setError('Erro de conexão com o servidor.');
    }
  };

  return (
    <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
      <div className="flex items-start gap-3 mb-6">
        <div className="h-10 w-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center"><BookOpenCheck className="h-5 w-5" /></div>
        <div><h2 className="font-black text-slate-900">Criar nova atividade</h2><p className="text-xs text-slate-500 mt-1">O que você escrever aqui será apresentado previamente ao aluno no card da atividade.</p></div>
      </div>
      <form onSubmit={submit} className="space-y-5">
        <div><label className="field-label">Título da atividade</label><input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Ex.: Admissão de um novo colaborador" className="w-full" /></div>
        <div><label className="field-label">Enunciado</label><textarea value={statement} onChange={(e) => setStatement(e.target.value)} rows={5} placeholder="Descreva o cenário, contexto e o que está sendo solicitado ao aluno." className="w-full resize-y" /></div>
        <div><label className="field-label">Instruções para o aluno</label><textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} rows={4} placeholder="Explique as etapas que o aluno deve seguir e o que precisa entregar ou realizar." className="w-full resize-y" /></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><label className="field-label">Tipo de atividade</label><select value={type} onChange={(e) => setType(e.target.value as ActivityType)} className="w-full">{activityTypeOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select></div>
          <div><label className="field-label">Ferramenta que o aluno deverá usar</label><select value={mechanism} onChange={(e) => setMechanism(e.target.value as typeof mechanism)} className="w-full">{mechanismOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select></div>
          <div>
            <label className="field-label">Turma</label>
            <select value={turmaId} onChange={(e) => setTurmaId(e.target.value)} className="w-full">
              {turmas.map((t) => <option key={t.id} value={t.id}>{t.nome}</option>)}
            </select>
            {turmas.length === 0 && <p className="text-[10px] text-amber-600 mt-1">Nenhuma turma cadastrada.</p>}
          </div>
        </div>
        <div className="rounded-lg bg-slate-50 border border-slate-200 p-4"><p className="text-xs font-bold text-slate-700">Ferramenta selecionada</p><p className="text-sm font-black text-slate-900 mt-1">{getMechanism(mechanism).label}</p><p className="text-xs text-slate-500 mt-1">{getMechanism(mechanism).description}</p></div>
        {error && <p className="text-xs font-semibold text-red-600 bg-red-50 border border-red-100 p-3 rounded-sm">{error}</p>}
        <div className="flex justify-end gap-2"><button type="button" onClick={onCancel} className="px-4 py-2.5 text-sm font-bold text-slate-600 hover:bg-slate-100 rounded-sm">Cancelar</button><button type="submit" className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-bold bg-red-600 hover:bg-red-700 text-white rounded-sm"><Send className="h-4 w-4" /> Publicar atividade</button></div>
      </form>
    </section>
  );
}

function TeacherActivityCard({ activity, onDeleted }: { activity: Activity; onDeleted: () => void }) {
  const mechanism = getMechanism(activity.mechanism);
  const remove = async () => {
    if (!confirm('Excluir esta atividade?')) return;
    const res = await fetch(`/api/activities/${activity.id}`, { method: 'DELETE' });
    if (res.ok) onDeleted();
  };
  const pendente = activity.turmaId ? activity.totalConcluidos < activity.totalAlunosTurma : false;
  return (
    <article className="p-5 hover:bg-slate-50/60 transition-colors">
      <div className="flex items-start gap-4">
        <div className="h-10 w-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0"><ClipboardList className="h-5 w-5" /></div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-black text-slate-900">{activity.title}</h3>
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-slate-100 text-slate-600 rounded-full">{mechanism.label}</span>
            {activity.turmaNome && (
              <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full ${pendente ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}`}>
                {activity.totalConcluidos}/{activity.totalAlunosTurma} concluíram
              </span>
            )}
          </div>
          <p className="text-xs text-slate-500 mt-1">
            {activity.type === 'simulacao' ? 'Simulação' : activity.type === 'documento' ? 'Documento' : activity.type === 'calculo' ? 'Cálculo' : 'Prática operacional'}
            {activity.turmaNome ? ` • ${activity.turmaNome}` : ''} • Publicada em {new Date(activity.createdAt).toLocaleDateString('pt-BR')}
          </p>
          <p className="text-sm text-slate-700 mt-3 line-clamp-2">{activity.statement}</p>
          <div className="mt-3 p-3 rounded-lg bg-white border border-slate-200"><p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Instruções</p><p className="text-xs text-slate-600 mt-1 line-clamp-2">{activity.instructions}</p></div>
        </div>
        <button onClick={remove} title="Excluir" className="p-2 text-slate-300 hover:text-red-600 hover:bg-red-50 rounded-sm"><Trash2 className="h-4 w-4" /></button>
      </div>
    </article>
  );
}

function StudentActivities({ activities, loading, user, onChanged }: { activities: Activity[]; loading: boolean; user: User; onChanged: () => void }) {
  return (
    <div className="space-y-6">
      <div className="border-b border-slate-200 pb-5">
        <p className="text-[10px] font-bold uppercase tracking-widest text-red-600">Sala de aula</p>
        <h1 className="text-2xl font-black text-slate-900 mt-1">Atividades</h1>
        <p className="text-sm text-slate-500 mt-1">Veja o enunciado e as instruções antes de abrir a ferramenta indicada pelo professor.</p>
      </div>
      {loading ? (
        <p className="text-sm text-slate-500">Carregando...</p>
      ) : activities.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-xl p-10 text-center"><GraduationCap className="h-9 w-9 mx-auto text-slate-300" /><h2 className="font-black text-slate-800 mt-3">Nenhuma atividade publicada</h2><p className="text-sm text-slate-500 mt-1">As atividades do professor aparecerão aqui.</p></div>
      ) : (
        <div className="space-y-3">
          {activities.map((activity) => (
            <StudentActivityCard key={activity.id} activity={activity} user={user} onChanged={onChanged} />
          ))}
        </div>
      )}
    </div>
  );
}

function StudentActivityCard({ activity, user, onChanged }: { activity: Activity; user: User; onChanged: () => void }) {
  const mechanism = getMechanism(activity.mechanism);
  const [marcando, setMarcando] = useState(false);
  const [erro, setErro] = useState('');

  const marcarConcluida = async () => {
    if (!user.alunoId) return;
    setMarcando(true);
    setErro('');
    try {
      const res = await fetch(`/api/activities/${activity.id}/concluir`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ alunoId: user.alunoId }),
      });
      if (!res.ok) {
        const data = await res.json();
        setErro(data.error || 'Erro ao marcar como concluída.');
        return;
      }
      onChanged();
    } finally {
      setMarcando(false);
    }
  };

  return (
    <article className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-red-300 transition-colors">
      <div className="px-5 py-4 bg-slate-50 border-b border-slate-200 flex items-start gap-3">
        <div className="h-10 w-10 rounded-full bg-red-600 text-white flex items-center justify-center shrink-0"><ClipboardList className="h-5 w-5" /></div>
        <div className="min-w-0"><h2 className="font-black text-slate-900">{activity.title}</h2><p className="text-xs text-slate-500 mt-1">{activity.createdBy} • {new Date(activity.createdAt).toLocaleDateString('pt-BR')}</p></div>
        {activity.concluidaPeloAluno && (
          <span className="ml-auto inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-full">
            <CheckCircle2 className="h-3 w-3" /> Concluída
          </span>
        )}
      </div>
      <div className="p-5">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-[10px] font-bold uppercase tracking-wider bg-red-50 text-red-700 px-2.5 py-1 rounded-full">{mechanism.label}</span>
          <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">{activity.type === 'simulacao' ? 'Simulação' : activity.type === 'documento' ? 'Documento' : activity.type === 'calculo' ? 'Cálculo' : 'Prática operacional'}</span>
        </div>
        <div><p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Enunciado</p><p className="text-sm text-slate-800 mt-2 leading-6 whitespace-pre-line">{activity.statement}</p></div>
        <div className="mt-5 rounded-lg border border-slate-200 p-4"><p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Instruções</p><p className="text-sm text-slate-600 mt-2 leading-6 whitespace-pre-line">{activity.instructions}</p></div>
        {erro && <p className="text-xs font-semibold text-red-600 bg-red-50 border border-red-100 p-3 rounded-sm mt-4">{erro}</p>}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-slate-500">Ferramenta: <strong className="text-slate-700">{mechanism.label}</strong></p>
          <div className="flex items-center gap-2">
            {!activity.concluidaPeloAluno && (
              <button
                onClick={marcarConcluida}
                disabled={marcando}
                className="inline-flex items-center gap-2 border border-emerald-600 text-emerald-700 hover:bg-emerald-50 font-bold text-sm px-4 py-2.5 rounded-sm disabled:opacity-50"
              >
                <CheckCircle2 className="h-4 w-4" /> {marcando ? 'Marcando...' : 'Marcar como concluída'}
              </button>
            )}
            <Link href={`${mechanism.href}?atividade=${activity.id}`} className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-4 py-2.5 rounded-sm">
              Iniciar atividade <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

function EmptyTeacher({ onCreate }: { onCreate: () => void }) {
  return (
    <div className="p-10 text-center">
      <ClipboardList className="h-9 w-9 mx-auto text-slate-300" />
      <h3 className="font-black text-slate-800 mt-3">Nenhuma atividade cadastrada</h3>
      <p className="text-sm text-slate-500 mt-1">Crie um enunciado e escolha qual mecanismo o aluno deverá utilizar.</p>
      <button onClick={onCreate} className="mt-4 inline-flex items-center gap-2 bg-red-600 text-white font-bold text-sm px-4 py-2.5 rounded-sm"><Plus className="h-4 w-4" /> Criar primeira atividade</button>
    </div>
  );
}