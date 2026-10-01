import { NextResponse } from 'next/server';
import { getSupabase, query, optional } from '@/lib/supabase';
import { withAuth, currentUser } from '@/lib/auth';

export const GET = withAuth(async () => {
  return NextResponse.json(await query(getSupabase().from('Trabalho').select('*').eq('alunoId', currentUser().id).order('createdAt', { ascending: false })));
});
export const POST = withAuth(async (request: Request) => {
  if (currentUser().role !== 'aluno') return NextResponse.json({ error: 'Somente alunos enviam trabalhos.' }, { status: 403 });
  const text = await request.text();
  if (text.length > 100000) return NextResponse.json({ error: 'Trabalho muito grande.' }, { status: 400 });
  const { tipo, dados, atividadeId } = JSON.parse(text);
  if (!['folha', 'custos', 'contratacao'].includes(tipo) || !dados || typeof dados !== 'object' || Array.isArray(dados)) {
    return NextResponse.json({ error: 'Trabalho inválido.' }, { status: 400 });
  }
  if (atividadeId) {
    const activity = await optional(getSupabase().from('Activity').select('*').eq('id', atividadeId).limit(1).maybeSingle());
    if (!activity || (activity.turmaId && activity.turmaId !== currentUser().turmaId) || activity.mechanism !== tipo) return NextResponse.json({ error: 'Atividade incompatível com este trabalho.' }, { status: 403 });
  }
  const conteudo = { ...dados, atividadeId: atividadeId || null };
  return NextResponse.json(await query(getSupabase().from('Trabalho').insert({ alunoId: currentUser().id, tipo, dados: conteudo }).select('*').single()), { status: 201 });
});
