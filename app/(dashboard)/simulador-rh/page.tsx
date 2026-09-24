'use client';

import SaveWorkButton from '@/components/save-work-button';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import type { Activity } from '@/lib/activities';
import { ArrowLeft, CheckCircle2, ClipboardList, FileSearch, UserRound, XCircle } from 'lucide-react';

const candidates = [
  {
    id: 'CAND-01', name: 'Ana Beatriz Souza', age: 26, education: 'Tecnóloga em Gestão de RH', experience: '3 anos em Departamento Pessoal', skills: ['Folha de pagamento', 'Excel', 'Atendimento'], profile: 'Perfil organizado, experiência prática e boa familiaridade com rotinas administrativas.',
  },
  {
    id: 'CAND-02', name: 'Bruno Henrique Lima', age: 29, education: 'Administração — Bacharelado', experience: '5 anos em área administrativa', skills: ['Liderança', 'Excel', 'Processos'], profile: 'Perfil analítico, experiência ampla em processos e atuação com equipes.',
  },
  {
    id: 'CAND-03', name: 'Camila Martins Oliveira', age: 24, education: 'Técnica em Administração', experience: '1 ano em Recursos Humanos', skills: ['Recrutamento', 'Comunicação', 'Organização'], profile: 'Perfil comunicativo, com experiência inicial em recrutamento e seleção.',
  },
  {
    id: 'CAND-04', name: 'Diego Rafael Costa', age: 31, education: 'Administração — Bacharelado', experience: '6 anos em Recursos Humanos', skills: ['R&S', 'Treinamento', 'Indicadores'], profile: 'Perfil experiente em RH, com atuação em recrutamento, treinamento e indicadores.',
  },
];

const evaluation = {
  'CAND-01': { title: 'Escolha analisada', text: 'A escolha apresenta aderência às exigências do cenário. A experiência em Departamento Pessoal atende diretamente às rotinas descritas.', tone: 'positive' },
  'CAND-02': { title: 'Escolha analisada', text: 'O candidato possui boa experiência administrativa e capacidade analítica. Verifique, porém, se as exigências do enunciado priorizam experiência específica em RH.', tone: 'neutral' },
  'CAND-03': { title: 'Escolha analisada', text: 'O perfil atende especialmente a cenários que valorizam comunicação e recrutamento, mas possui menos experiência profissional que outros candidatos.', tone: 'neutral' },
  'CAND-04': { title: 'Escolha analisada', text: 'A escolha apresenta forte aderência quando o cenário prioriza experiência em RH, recrutamento, treinamento e indicadores.', tone: 'positive' },
} as const;

export default function SimuladorRHPage() {
  const [activity, setActivity] = useState<Activity | null>(null);
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get('atividade');
    if (!id) return;
    const controller = new AbortController();
    fetch('/api/activities', { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error('Erro ao carregar atividades');
        return response.json() as Promise<Activity[]>;
      })
      .then((items) => setActivity(items.find((item) => item.id === id && item.mechanism === 'contratacao') || null))
      .catch(() => {
        if (!controller.signal.aborted) setActivity(null);
      });
    return () => controller.abort();
  }, []);

  const statement = activity?.statement || 'Uma empresa precisa contratar um novo profissional. Analise os quatro candidatos disponíveis considerando as exigências apresentadas pelo responsável pela vaga e escolha o perfil mais adequado.';
  const instructions = activity?.instructions || 'Leia o enunciado, compare as informações dos quatro candidatos e selecione uma opção. Após a escolha, o sistema apresentará uma avaliação da sua decisão.';
  const result = selected ? evaluation[selected as keyof typeof evaluation] : null;

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {selected && <SaveWorkButton tipo="contratacao" dados={{ atividade: activity?.title || 'Simulador de RH', enunciado: statement, candidato: candidates.find(c => c.id === selected), resultado: result }} />}
      <div className="flex items-center gap-3">
        <Link href={activity ? '/atividades' : '/dashboard'} className="p-2 rounded-sm hover:bg-slate-100 text-slate-500"><ArrowLeft className="h-4 w-4" /></Link>
        <div><p className="text-[10px] font-bold uppercase tracking-widest text-red-600">Simulação de RH</p><h1 className="text-2xl font-black text-slate-900 mt-1">Simulação de contratação</h1></div>
      </div>

      <section className="bg-neutral-950 text-white rounded-2xl p-6 md:p-7">
        <div className="flex items-start gap-4"><div className="h-11 w-11 rounded-xl bg-red-600 flex items-center justify-center shrink-0"><ClipboardList className="h-5 w-5" /></div><div><div className="flex flex-wrap gap-2"><span className="text-[10px] uppercase tracking-wider font-bold bg-red-600 px-2.5 py-1 rounded-full">Enunciado da empresa</span>{activity && <span className="text-[10px] uppercase tracking-wider font-bold bg-white/10 px-2.5 py-1 rounded-full">Atividade publicada</span>}</div><h2 className="text-lg font-black mt-3">O desafio</h2><p className="text-sm text-slate-300 leading-6 mt-2 whitespace-pre-line">{statement}</p><div className="mt-5 pt-5 border-t border-white/10"><p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Instruções</p><p className="text-sm text-slate-200 leading-6 mt-2 whitespace-pre-line">{instructions}</p></div></div></div>
      </section>

      <div className="flex items-center justify-between"><div><h2 className="text-xl font-black text-slate-900">Candidatos</h2><p className="text-sm text-slate-500 mt-1">Analise os perfis antes de tomar sua decisão.</p></div><span className="text-xs font-bold text-slate-500">{selected ? 'Escolha registrada' : 'Nenhum candidato selecionado'}</span></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {candidates.map((candidate) => {
          const isSelected = selected === candidate.id;
          return <button key={candidate.id} type="button" onClick={() => setSelected(candidate.id)} className={`text-left bg-white rounded-xl border-2 p-5 transition-all hover:shadow-sm ${isSelected ? 'border-red-600 ring-2 ring-red-100' : 'border-slate-200 hover:border-slate-300'}`}>
            <div className="flex items-start gap-4"><div className={`h-12 w-12 rounded-full flex items-center justify-center shrink-0 ${isSelected ? 'bg-red-600 text-white' : 'bg-slate-100 text-slate-500'}`}><UserRound className="h-6 w-6" /></div><div className="flex-1"><div className="flex items-center justify-between gap-3"><div><h3 className="font-black text-slate-900">{candidate.name}</h3><p className="text-xs text-slate-500 mt-1">{candidate.id} • {candidate.age} anos</p></div>{isSelected && <CheckCircle2 className="h-5 w-5 text-red-600" />}</div><div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4"><Info label="Formação" value={candidate.education} /><Info label="Experiência" value={candidate.experience} /></div><div className="mt-4"><p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Competências</p><div className="flex flex-wrap gap-1.5 mt-2">{candidate.skills.map((skill) => <span key={skill} className="text-[10px] font-semibold bg-slate-100 text-slate-600 px-2 py-1 rounded-full">{skill}</span>)}</div></div><p className="text-xs text-slate-600 mt-4 leading-5">{candidate.profile}</p></div></div>
          </button>;
        })}
      </div>

      {result && <section className={`rounded-xl border p-5 ${result.tone === 'positive' ? 'bg-emerald-50 border-emerald-200' : 'bg-amber-50 border-amber-200'}`}><div className="flex items-start gap-3"><div className={`h-9 w-9 rounded-full flex items-center justify-center ${result.tone === 'positive' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>{result.tone === 'positive' ? <CheckCircle2 className="h-5 w-5" /> : <FileSearch className="h-5 w-5" />}</div><div><p className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Avaliação da empresa</p><h2 className="font-black text-slate-900 mt-1">{result.title}</h2><p className="text-sm text-slate-700 leading-6 mt-2">{result.text}</p></div></div></section>}

      {!selected && <div className="text-center text-xs text-slate-400 flex items-center justify-center gap-2"><XCircle className="h-4 w-4" /> Selecione um candidato para registrar sua decisão.</div>}
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) { return <div><p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{label}</p><p className="text-xs font-semibold text-slate-700 mt-1">{value}</p></div>; }
