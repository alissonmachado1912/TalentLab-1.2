'use client';

import { useEffect, useState } from 'react';
import { GraduationCap, Plus, Trash2, Users } from 'lucide-react';

interface Turma {
  id: string;
  nome: string;
  alunosCount: number;
}

interface Aluno {
  id: string;
  nome: string;
  matricula: string;
  turma: { id: string; nome: string };
}

export default function TurmasPage() {
  const [turmas, setTurmas] = useState<Turma[]>([]);
  const [alunos, setAlunos] = useState<Aluno[]>([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  const [formTurma, setFormTurma] = useState({ nome: '' });
  const [formAluno, setFormAluno] = useState({ nome: '', matricula: '', senha: '', turmaId: '' });
  const turmaSelecionada = turmas.some((turma) => turma.id === formAluno.turmaId)
    ? formAluno.turmaId
    : turmas[0]?.id || '';

  async function carregarDados() {
    setLoading(true);
    try {
      const [resTurmas, resAlunos] = await Promise.all([
        fetch('/api/turmas'),
        fetch('/api/alunos'),
      ]);
      const [dataTurmas, dataAlunos] = await Promise.all([resTurmas.json(), resAlunos.json()]);
      setTurmas(dataTurmas);
      setAlunos(dataAlunos);
      setFormAluno((prev) => ({ ...prev, turmaId: prev.turmaId || dataTurmas[0]?.id || '' }));
    } catch {
      setErro('Não foi possível carregar os dados.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    carregarDados();
  }, []);

  const criarTurma = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTurma.nome) return;
    setErro(null);
    try {
      const res = await fetch('/api/turmas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formTurma),
      });
      if (!res.ok) {
        const data = await res.json();
        setErro(data.error || 'Erro ao criar turma.');
        return;
      }
      const nova: Turma = await res.json();
      setTurmas((prev) => [...prev, nova]);
      setFormTurma({ nome: '' });
      setFormAluno((prev) => ({ ...prev, turmaId: prev.turmaId || nova.id }));
    } catch {
      setErro('Erro de conexão com o servidor.');
    }
  };

  const apagarTurma = async (id: string, nome: string) => {
    if (!confirm(`Apagar a turma "${nome}"? Isso também apaga todos os alunos dela.`)) return;
    setErro(null);
    try {
      const res = await fetch(`/api/turmas/${id}`, { method: 'DELETE' });
      if (!res.ok) {
        const data = await res.json();
        setErro(data.error || 'Erro ao apagar turma.');
        return;
      }
      setTurmas((prev) => prev.filter((t) => t.id !== id));
      setAlunos((prev) => prev.filter((a) => a.turma.id !== id));
    } catch {
      setErro('Erro de conexão com o servidor.');
    }
  };

  const cadastrarAluno = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formAluno.nome || !formAluno.matricula || !turmaSelecionada) return;
    setErro(null);
    try {
      const res = await fetch('/api/alunos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formAluno, turmaId: turmaSelecionada }),
      });
      if (!res.ok) {
        const data = await res.json();
        setErro(data.error || 'Erro ao cadastrar aluno.');
        return;
      }
      const novo: Aluno = await res.json();
      setAlunos((prev) => [...prev, novo]);
      setTurmas((prev) =>
        prev.map((t) => (t.id === novo.turma.id ? { ...t, alunosCount: t.alunosCount + 1 } : t))
      );
      setFormAluno({ nome: '', matricula: '', senha: '', turmaId: turmaSelecionada });
    } catch {
      setErro('Erro de conexão com o servidor.');
    }
  };

  const apagarAluno = async (id: string, nome: string) => {
    if (!confirm(`Apagar o aluno "${nome}"?`)) return;
    setErro(null);
    try {
      const res = await fetch(`/api/alunos/${id}`, { method: 'DELETE' });
      if (!res.ok) {
        const data = await res.json();
        setErro(data.error || 'Erro ao apagar aluno.');
        return;
      }
      const alunoApagado = alunos.find((a) => a.id === id);
      setAlunos((prev) => prev.filter((a) => a.id !== id));
      if (alunoApagado) {
        setTurmas((prev) =>
          prev.map((t) =>
            t.id === alunoApagado.turma.id ? { ...t, alunosCount: Math.max(0, t.alunosCount - 1) } : t
          )
        );
      }
    } catch {
      setErro('Erro de conexão com o servidor.');
    }
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-200 pb-5">
        <h1 className="text-2xl font-bold text-slate-900">Turmas & Alunos</h1>
        <p className="text-sm text-slate-500">
          Cadastre turmas e alunos. Defina a matrícula e a senha que cada aluno usará para acessar o sistema.
        </p>
      </div>

      {erro && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm p-3 rounded-lg">{erro}</div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-sm font-bold text-slate-700 mb-4 flex items-center gap-2">
            <GraduationCap className="h-4 w-4 text-red-600" /> Cadastrar Turma
          </h2>
          <form onSubmit={criarTurma} className="flex gap-2">
            <input
              type="text"
              required
              placeholder="Ex: RH-2026 Noite"
              value={formTurma.nome}
              onChange={(e) => setFormTurma({ nome: e.target.value })}
              className="flex-1 text-sm p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <button
              type="submit"
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors shadow-sm"
            >
              <Plus className="h-4 w-4" /> Criar
            </button>
          </form>

          <div className="mt-4 divide-y divide-slate-100">
            {turmas.map((t) => (
              <div key={t.id} className="py-3 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{t.nome}</p>
                  <p className="text-xs text-slate-500 flex items-center gap-1">
                    <Users className="h-3 w-3" /> {t.alunosCount} aluno(s)
                  </p>
                </div>
                <button onClick={() => apagarTurma(t.id, t.nome)} className="text-slate-400 hover:text-rose-600">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))}
            {turmas.length === 0 && !loading && (
              <p className="text-xs text-slate-400 py-3">Nenhuma turma cadastrada ainda.</p>
            )}
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-sm font-bold text-slate-700 mb-4 flex items-center gap-2">
            <Users className="h-4 w-4 text-red-600" /> Cadastrar Aluno
          </h2>
          <form onSubmit={cadastrarAluno} className="space-y-3">
            <input
              type="text"
              required
              placeholder="Nome do aluno"
              value={formAluno.nome}
              onChange={(e) => setFormAluno({ ...formAluno, nome: e.target.value })}
              className="w-full text-sm p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <input
              type="text"
              required
              placeholder="Matrícula (ex: 2026001)"
              value={formAluno.matricula}
              onChange={(e) => setFormAluno({ ...formAluno, matricula: e.target.value })}
              className="w-full text-sm p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-600 font-mono"
            />
            <div>
              <label htmlFor="aluno-senha" className="block text-xs font-semibold text-slate-700 mb-1">Senha do aluno</label>
              <input
                id="aluno-senha"
                type="password"
                autoComplete="new-password"
                required
                minLength={6}
                maxLength={128}
                placeholder="Mínimo de 6 caracteres"
                value={formAluno.senha}
                onChange={(e) => setFormAluno({ ...formAluno, senha: e.target.value })}
                className="w-full text-sm p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <p className="mt-1 text-xs text-slate-500">Informe ao aluno a matrícula e a senha definida aqui.</p>
            </div>
            <select
              required
              value={turmaSelecionada}
              onChange={(e) => setFormAluno({ ...formAluno, turmaId: e.target.value })}
              className="w-full text-sm p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-600"
            >
              {turmas.map((t) => (
                <option key={t.id} value={t.id}>{t.nome}</option>
              ))}
            </select>
            <button
              type="submit"
              disabled={turmas.length === 0}
              className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Plus className="h-4 w-4" /> Cadastrar Aluno
            </button>
            {turmas.length === 0 && !loading && (
              <p className="text-xs text-amber-600">Crie uma turma primeiro.</p>
            )}
          </form>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-5 py-3 border-b border-slate-200">
          <h2 className="text-sm font-bold text-slate-700">Alunos Cadastrados</h2>
        </div>
        {loading ? (
          <p className="p-6 text-sm text-slate-500">Carregando...</p>
        ) : (
          <table className="w-full text-left text-sm border-collapse">
            <thead className="bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider">
              <tr>
                <th className="p-3">Nome</th>
                <th className="p-3">Matrícula</th>
                <th className="p-3">Turma</th>
                <th className="p-3 text-center">Ação</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {alunos.map((a) => (
                <tr key={a.id} className="hover:bg-slate-50/80">
                  <td className="p-3 font-semibold text-slate-900">{a.nome}</td>
                  <td className="p-3 font-mono text-xs text-red-600 font-bold">{a.matricula}</td>
                  <td className="p-3 text-xs text-slate-500">{a.turma.nome}</td>
                  <td className="p-3 text-center">
                    <button onClick={() => apagarAluno(a.id, a.nome)} className="text-slate-400 hover:text-rose-600">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
