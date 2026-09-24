import { AsyncLocalStorage } from 'node:async_hooks';
import { createHash, randomBytes } from 'node:crypto';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { prisma } from './prisma';

type User = { id: string; role: string; name: string; identifier: string; alunoId?: string; turmaId?: string; turmaNome?: string };
const context = new AsyncLocalStorage<User>();
const digest = (token: string) => createHash('sha256').update(token).digest('hex');

export async function startSession(userId: string, role: string) {
  const token = randomBytes(32).toString('hex');
  const expiresAt = new Date(Date.now() + 8 * 60 * 60 * 1000);
  await prisma.sessao.create({ data: { tokenHash: digest(token), userId, role, expiresAt } });
  (await cookies()).set('talentlab_session', token, { httpOnly: true, sameSite: 'lax', secure: process.env.NODE_ENV === 'production', path: '/', expires: expiresAt });
}

export async function endSession() {
  const jar = await cookies();
  const token = jar.get('talentlab_session')?.value;
  if (token) await prisma.sessao.deleteMany({ where: { tokenHash: digest(token) } });
  jar.delete('talentlab_session');
}

export async function sessionUser(): Promise<User | null> {
  const token = (await cookies()).get('talentlab_session')?.value;
  if (!token) return null;
  const session = await prisma.sessao.findUnique({ where: { tokenHash: digest(token) } });
  if (!session || session.expiresAt < new Date()) return null;
  if (session.role === 'professor') {
    const p = await prisma.professor.findUnique({ where: { id: session.userId } });
    return p ? { id: p.id, name: p.nome, identifier: p.email, role: 'professor' } : null;
  }
  const a = await prisma.aluno.findUnique({ where: { id: session.userId }, include: { turma: true } });
  return a ? { id: a.id, alunoId: a.id, name: a.nome, identifier: a.matricula, role: 'aluno', turmaId: a.turmaId, turmaNome: a.turma.nome } : null;
}

export function currentUser() {
  const user = context.getStore();
  if (!user) throw new Error('Sessão não verificada');
  return user;
}
export function ownerId() { const user = currentUser(); return user.role === 'aluno' ? user.id : 'professor'; }

export function withAuth<Args extends unknown[]>(handler: (...args: Args) => Promise<Response>, professorOnly = false) {
  return async (...args: Args) => {
    const user = await sessionUser();
    if (!user) return NextResponse.json({ error: 'Entre novamente para continuar.' }, { status: 401 });
    if (professorOnly && user.role !== 'professor') return NextResponse.json({ error: 'Acesso exclusivo do professor.' }, { status: 403 });
    return context.run(user, async () => {
      try { return await handler(...args); }
      catch (error) {
        const code = error && typeof error === 'object' && 'code' in error ? error.code : '';
        if (code === 'P2002') return NextResponse.json({ error: 'Já existe um cadastro com este código ou documento no seu ambiente.' }, { status: 409 });
        if (code === 'P2025') return NextResponse.json({ error: 'Registro não encontrado.' }, { status: 404 });
        return NextResponse.json({ error: 'Não foi possível concluir a operação.' }, { status: 500 });
      }
    });
  };
}
