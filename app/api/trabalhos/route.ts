import { NextResponse } from 'next/server';
import { getSupabase, query } from '@/lib/supabase';
import { withAuth, currentUser } from '@/lib/auth';

export const GET = withAuth(async () => {
  return NextResponse.json(await query(getSupabase().from('Trabalho').select('*').eq('alunoId', currentUser().id).order('createdAt', { ascending: false })));
});
export const POST = withAuth(async (request: Request) => {
  if (currentUser().role !== 'aluno') return NextResponse.json({ error: 'Somente alunos enviam trabalhos.' }, { status: 403 });
  const text = await request.text();
  if (text.length > 100000) return NextResponse.json({ error: 'Trabalho muito grande.' }, { status: 400 });
  const { tipo, dados } = JSON.parse(text);
  if (!['folha', 'custos', 'contratacao'].includes(tipo) || !dados || typeof dados !== 'object' || Array.isArray(dados)) {
    return NextResponse.json({ error: 'Trabalho inválido.' }, { status: 400 });
  }
  return NextResponse.json(await query(getSupabase().from('Trabalho').insert({ alunoId: currentUser().id, tipo, dados }).select('*').single()), { status: 201 });
});
