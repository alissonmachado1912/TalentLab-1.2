import { withAuth, currentUser } from '@/lib/auth';
import { NextRequest, NextResponse } from 'next/server';
import { getSupabase, query, execute } from '@/lib/supabase';

// GET /api/activities?alunoId=xxx&turmaId=xxx
async function handleGET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const user = currentUser();
  const alunoId = user.role === 'aluno' ? user.id : searchParams.get('alunoId');
  const turmaId = user.role === 'aluno' ? user.turmaId : searchParams.get('turmaId');

  let requestQuery = getSupabase().from('Activity')
    .select('*, turma:Turma(nome, alunos:Aluno(id)), conclusoes:AtividadeConclusao(alunoId)')
    .order('createdAt', { ascending: false });
  if (turmaId) requestQuery = requestQuery.or('turmaId.is.null,turmaId.eq.' + JSON.stringify(turmaId));
  const activities = await query(requestQuery);

  const resposta = activities.map((a) => ({
    id: a.id,
    type: a.type,
    title: a.title,
    statement: a.statement,
    instructions: a.instructions,
    mechanism: a.mechanism,
    className: a.className,
    createdBy: a.createdBy,
    createdAt: a.createdAt,
    turmaId: a.turmaId,
    turmaNome: a.turma?.nome ?? null,
    totalAlunosTurma: a.turma?.alunos.length ?? 0,
    totalConcluidos: a.conclusoes.length,
    concluidaPeloAluno: alunoId ? a.conclusoes.some(c => c.alunoId === alunoId) : undefined,
  }));

  return NextResponse.json(resposta);
}

// POST /api/activities -> professor publica atividade (notifica os alunos da turma)
async function handlePOST(request: NextRequest) {
  const body = await request.json();
  const { type, title, statement, instructions, mechanism, className, createdBy, turmaId } = body;

  if (!type || !title || !statement || !instructions || !mechanism || !createdBy) {
    return NextResponse.json({ error: 'Campos obrigatórios faltando.' }, { status: 400 });
  }

  const activity = await query(getSupabase().from('Activity').insert({
      type,
      title,
      statement,
      instructions,
      mechanism,
      className: className || '',
      createdBy,
      turmaId: turmaId || null,
    }).select('*').single());

  if (turmaId) {
    const alunos = await query(getSupabase().from('Aluno').select('*').eq('turmaId', turmaId));
    if (alunos.length > 0) {
      await execute(getSupabase().from('Notificacao').insert(alunos.map((al) => ({
          mensagem: `Nova atividade publicada: ${title}`,
          tipo: 'NOVA_ATIVIDADE' as const,
          destino: 'ALUNO' as const,
          alunoId: al.id,
        }))));
    }
  }

  return NextResponse.json(activity, { status: 201 });
}
export const GET = withAuth(handleGET, false);

export const POST = withAuth(handlePOST, true);
