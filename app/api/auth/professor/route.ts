import { NextResponse } from 'next/server';
import { getSupabase, query, optional, count } from '@/lib/supabase';
import { hashPassword, verifyPassword } from '@/lib/student-password';
import { startSession, sessionUser } from '@/lib/auth';

export async function POST(request: Request) {
  const { email, senha, nome, mode } = await request.json();
  if (typeof email !== 'string' || !email.trim() || typeof senha !== 'string' || senha.length < 6 || senha.length > 128) {
    return NextResponse.json({ error: 'Informe e-mail e senha de 6 a 128 caracteres.' }, { status: 400 });
  }
  const identifier = email.trim().toLowerCase();
  let professor = await optional(getSupabase().from('Professor').select('*').eq('email', identifier).limit(1).maybeSingle());
  if (mode === 'register') {
    const caller = await sessionUser();
    if (caller?.role === 'aluno' || ((await count(getSupabase().from('Professor').select('*', { count: 'exact', head: true }))) > 0 && caller?.role !== 'professor')) {
      return NextResponse.json({ error: 'Novos professores devem ser cadastrados por um professor já conectado.' }, { status: 403 });
    }
    if (professor) return NextResponse.json({ error: 'E-mail já cadastrado. Use Acessar.' }, { status: 409 });
    if (typeof nome !== 'string' || !nome.trim()) return NextResponse.json({ error: 'Informe o nome.' }, { status: 400 });
    try {
      professor = await query(getSupabase().from('Professor').insert({ email: identifier, nome: nome.trim(), senhaHash: await hashPassword(senha) }).select('*').single());
    } catch { return NextResponse.json({ error: 'Não foi possível cadastrar. Confira se o e-mail já existe.' }, { status: 409 }); }
  } else if (!professor || !(await verifyPassword(senha, professor.senhaHash))) {
    return NextResponse.json({ error: 'E-mail ou senha incorretos.' }, { status: 401 });
  }
  await startSession(professor.id, 'professor');
  return NextResponse.json({ id: professor.id, name: professor.nome, identifier: professor.email, role: 'professor' });
}
