'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  ArrowRight,
  GraduationCap,
  Lock,
  Mail,
  ShieldCheck,
  UserRound,
  CheckCircle2,
  IdCard,
} from 'lucide-react';

type Role = 'aluno' | 'professor';

const CURRENT_USER_KEY = 'talentlab_current_user';

export default function LoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [role, setRole] = useState<Role>('aluno');
  const [name, setName] = useState('');
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [matricula, setMatricula] = useState('');
  const [studentPassword, setStudentPassword] = useState('');
  const [message, setMessage] = useState('');

  const isStudent = role === 'aluno';

  const handleSubmitAluno = async (e: FormEvent) => {
    e.preventDefault();
    setMessage('');

    try {
      const res = await fetch('/api/alunos/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ matricula, senha: studentPassword }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.error || 'Matrícula não encontrada.');
        return;
      }

      const alunoUser = {
        name: data.nome,
        identifier: data.matricula,
        role: 'aluno' as const,
        alunoId: data.id,
        turmaId: data.turma.id,
        turmaNome: data.turma.nome,
      };

      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(alunoUser));
      router.push('/dashboard');
    } catch {
      setMessage('Erro de conexão com o servidor.');
    }
  };

  const handleSubmitProfessor = async (e: FormEvent) => {
    e.preventDefault();
    setMessage('');
    try {
      const response = await fetch('/api/auth/professor', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: identifier, senha: password, nome: name, mode }),
      });
      const data = await response.json();
      if (!response.ok) { setMessage(data.error || 'Erro ao entrar.'); return; }
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(data));
      router.push('/dashboard');
    } catch { setMessage('Erro de conexão com o servidor.'); }
  };


  return (
    <main className="min-h-screen bg-[#f5f5f5] flex items-stretch">
      <section className="hidden lg:flex lg:w-[46%] bg-[#e30613] text-white relative overflow-hidden p-12 xl:p-16 flex-col justify-between">
        <div className="absolute -right-28 -bottom-28 h-80 w-80 rounded-full border-[70px] border-white/10" />
        <div className="absolute right-10 top-24 h-40 w-40 rounded-full border-[35px] border-black/10" />

        <div className="relative z-10">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 bg-white text-[#e30613] flex items-center justify-center font-black text-xl rounded-sm">
              TL
            </div>
            <div>
              <p className="font-black text-2xl tracking-tight">TalentLab</p>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/80">SENAI-SP • Ambiente Educacional</p>
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-xl">
          <span className="inline-flex items-center gap-2 bg-black/20 border border-white/20 px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-sm">
            Laboratório prático
          </span>
          <h1 className="text-4xl xl:text-5xl font-black leading-tight mt-5">
            Aprenda operando processos reais de RH.
          </h1>
          <p className="text-white/85 mt-5 text-sm xl:text-base leading-7 max-w-lg">
            Um ambiente de simulação para transformar atividades de RH, Departamento Pessoal e Administração em experiência prática.
          </p>
          <div className="mt-8 space-y-3 text-sm font-semibold">
            {['Cadastros integrados', 'Folha e holerite simulados', 'Ponto, ASO e custos de produção'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 text-[11px] text-white/70">
          TalentLab • Plataforma educacional de simulação • SENAI-SP
        </div>
      </section>

      <section className="flex-1 flex items-center justify-center p-5 sm:p-8">
        <div className="w-full max-w-md">
          <div className="lg:hidden flex items-center gap-3 mb-8">
            <div className="h-11 w-11 bg-[#e30613] text-white flex items-center justify-center font-black rounded-sm">TL</div>
            <div>
              <p className="font-black text-xl">TalentLab</p>
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#e30613]">SENAI-SP • Ambiente Educacional</p>
            </div>
          </div>

          <div className="bg-white border border-neutral-200 shadow-sm p-7 sm:p-9 rounded-sm">
            <div className="mb-7">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#e30613]">Acesso ao laboratório</p>
              <h2 className="text-2xl font-black text-neutral-950 mt-2">
                {isStudent ? 'Entre no TalentLab' : mode === 'login' ? 'Entre no TalentLab' : 'Crie seu cadastro'}
              </h2>
              <p className="text-sm text-neutral-500 mt-2">
                {isStudent
                  ? 'Digite sua matrícula e a senha fornecida pelo professor.'
                  : mode === 'login'
                  ? 'Selecione seu perfil para acessar a plataforma.'
                  : 'Cadastro simples para professor.'}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-6">
              <button
                type="button"
                onClick={() => { setRole('aluno'); setMessage(''); }}
                className={`border p-3 text-left rounded-sm transition ${isStudent ? 'border-[#e30613] bg-red-50' : 'border-neutral-200 hover:border-neutral-400'}`}
              >
                <GraduationCap className={`h-5 w-5 ${isStudent ? 'text-[#e30613]' : 'text-neutral-500'}`} />
                <p className="font-bold text-sm mt-2">Aluno</p>
                <p className="text-[11px] text-neutral-500">Acessar atividades</p>
              </button>
              <button
                type="button"
                onClick={() => { setRole('professor'); setMessage(''); }}
                className={`border p-3 text-left rounded-sm transition ${!isStudent ? 'border-[#e30613] bg-red-50' : 'border-neutral-200 hover:border-neutral-400'}`}
              >
                <ShieldCheck className={`h-5 w-5 ${!isStudent ? 'text-[#e30613]' : 'text-neutral-500'}`} />
                <p className="font-bold text-sm mt-2">Professor</p>
                <p className="text-[11px] text-neutral-500">Gerenciar turmas</p>
              </button>
            </div>

            {isStudent ? (
              <form onSubmit={handleSubmitAluno} className="space-y-4">
                <div>
                  <label htmlFor="student-matricula" className="field-label">Matrícula</label>
                  <div className="relative">
                    <IdCard className="field-icon" />
                    <input
                      id="student-matricula"
                      name="matricula"
                      autoComplete="username"
                      required
                      value={matricula}
                      onChange={(e) => setMatricula(e.target.value)}
                      placeholder="Ex: 2026001"
                      className="field-input font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="student-password" className="field-label">Senha</label>
                  <div className="relative">
                    <Lock className="field-icon" />
                    <input id="student-password" type="password" autoComplete="current-password" required value={studentPassword} onChange={(e) => setStudentPassword(e.target.value)} placeholder="Digite sua senha" className="field-input" />
                  </div>
                </div>
                {message && <p className="text-xs font-semibold text-red-600 bg-red-50 border border-red-100 p-3 rounded-sm">{message}</p>}

                <button type="submit" className="w-full bg-[#e30613] hover:bg-[#c80510] text-white font-bold py-3 rounded-sm transition flex items-center justify-center gap-2">
                  Entrar no TalentLab
                  <ArrowRight className="h-4 w-4" />
                </button>

                <p className="text-[11px] text-neutral-400 text-center">
                  Não tem uma matrícula? Peça ao seu professor para cadastrar você em uma turma.
                </p>
              </form>
            ) : (
              <>
                <div className="flex border-b border-neutral-200 mb-6">
                  <button type="button" onClick={() => setMode('login')} className={`px-1 pb-3 mr-6 text-sm font-bold border-b-2 ${mode === 'login' ? 'border-[#e30613] text-[#e30613]' : 'border-transparent text-neutral-400'}`}>
                    Acessar
                  </button>
                  <button type="button" onClick={() => setMode('register')} className={`px-1 pb-3 text-sm font-bold border-b-2 ${mode === 'register' ? 'border-[#e30613] text-[#e30613]' : 'border-transparent text-neutral-400'}`}>
                    Criar cadastro
                  </button>
                </div>

                <form onSubmit={handleSubmitProfessor} className="space-y-4">
                  {mode === 'register' && (
                    <div>
                      <label className="field-label">Nome completo</label>
                      <div className="relative">
                        <UserRound className="field-icon" />
                        <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Seu nome completo" className="field-input" />
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="field-label">E-mail</label>
                    <div className="relative">
                      <Mail className="field-icon" />
                      <input required value={identifier} onChange={(e) => setIdentifier(e.target.value)} placeholder="professor@email.com" className="field-input" />
                    </div>
                  </div>

                  <div>
                    <label className="field-label">Senha</label>
                    <div className="relative">
                      <Lock className="field-icon" />
                      <input required minLength={6} type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mínimo de 6 caracteres" className="field-input" />
                    </div>
                  </div>

                  {message && <p className="text-xs font-semibold text-red-600 bg-red-50 border border-red-100 p-3 rounded-sm">{message}</p>}

                  <button type="submit" className="w-full bg-[#e30613] hover:bg-[#c80510] text-white font-bold py-3 rounded-sm transition flex items-center justify-center gap-2">
                    {mode === 'login' ? 'Entrar no TalentLab' : 'Criar cadastro'}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              </>
            )}

            <p className="text-[10px] text-neutral-400 mt-6 text-center leading-5">
              Ambiente educacional com acesso individual. O professor cadastra os alunos e define suas senhas.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
