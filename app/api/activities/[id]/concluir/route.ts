import { withAuth, currentUser } from '@/lib/auth';
import { NextRequest, NextResponse } from 'next/server';
import { getSupabase, query, optional } from '@/lib/supabase';

async function handlePOST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const user = currentUser();
  if (user.role !== 'aluno') return NextResponse.json({ error: 'Somente alunos podem concluir atividades.' }, { status: 403 });
  const alunoId = user.id;
  const permitida = await optional(getSupabase().from('Activity').select('*').eq('id', id).or('turmaId.is.null,turmaId.eq.' + JSON.stringify(user.turmaId)).limit(1).maybeSingle());
  if (!permitida) return NextResponse.json({ error: 'Atividade não encontrada.' }, { status: 404 });

  try {
    await query(getSupabase().from('AtividadeConclusao').insert({ activityId: id, alunoId }).select('*').single());
  } catch (error: unknown) {
    if (error && typeof error === 'object' && 'code' in error && error.code === '23505') {
      return NextResponse.json({ error: 'Você já concluiu esta atividade.' }, { status: 409 });
    }
    console.error(error);
    return NextResponse.json({ error: 'Erro ao marcar atividade como concluída.' }, { status: 500 });
  }

  const [aluno, activity] = await Promise.all([
    optional(getSupabase().from('Aluno').select('*').eq('id', alunoId).limit(1).maybeSingle()),
    optional(getSupabase().from('Activity').select('*').eq('id', id).limit(1).maybeSingle()),
  ]);

  await query(getSupabase().from('Notificacao').insert({
      mensagem: `${aluno?.nome ?? 'Um aluno'} concluiu a atividade "${activity?.title ?? ''}"`,
      tipo: 'ATIVIDADE_CONCLUIDA',
      destino: 'PROFESSOR',
    }).select('*').single());

  return NextResponse.json({ ok: true });
}
export const POST = withAuth(handlePOST);
