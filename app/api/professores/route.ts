import { NextResponse } from 'next/server';
import { withAuth } from '@/lib/auth';
import { getSupabase, query } from '@/lib/supabase';
import { hashPassword } from '@/lib/student-password';

export const GET = withAuth(async () => NextResponse.json(await query(getSupabase().from('Professor').select('id,nome,email').order('nome'))), true);

export const POST = withAuth(async (request: Request) => {
  const { nome, email, senha } = await request.json();
  if (typeof nome !== 'string' || !nome.trim() || nome.length > 191 || typeof email !== 'string' || email.length > 191 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) || typeof senha !== 'string' || senha.length < 6 || senha.length > 128) {
    return NextResponse.json({ error: 'Informe nome, e-mail válido e senha de 6 a 128 caracteres.' }, { status: 400 });
  }
  const professor = await query(getSupabase().from('Professor').insert({ nome: nome.trim(), email: email.trim().toLowerCase(), senhaHash: await hashPassword(senha) }).select('id,nome,email').single());
  return NextResponse.json(professor, { status: 201 });
}, true);
