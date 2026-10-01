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
    .select('*, turma:Turma(nome, alunos:Aluno(id,nome,matricula)), conclusoes:AtividadeConclusao(alunoId,concluidaEm)')
    .order('createdAt', { ascending: false });
  if (turmaId) requestQuery = requestQuery.or('turmaId.is.null,turmaId.eq.' + JSON.stringify(turmaId));
  const activities = await query(requestQuery);

  const todos = user.role === 'professor' && activities.some(a => !a.turmaId) ? await query(getSupabase().from('Aluno').select('id,nome,matricula')) : [];
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
    totalAlunosTurma: a.turma?.alunos.length ?? todos.length,
    totalConcluidos: a.conclusoes.length,
    participantes: user.role === 'professor' ? (a.turma?.alunos || todos).map(al => ({ ...al, concluidaEm: a.conclusoes.find(c => c.alunoId === al.id)?.concluidaEm || null })) : undefined,
    concluidaEm: alunoId ? a.conclusoes.find(c => c.alunoId === alunoId)?.concluidaEm || null : undefined,
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

  if (!turmaId || !(await query(getSupabase().from('Turma').select('id').eq('id', turmaId))).length) return NextResponse.json({ error: 'Selecione uma turma válida antes de publicar.' }, { status: 400 });
  const activity = await query(getSupabase().from('Activity').insert({
      type,
      title,
      statement,
      instructions,
      mechanism,
      className: className || '',
      createdBy: currentUser().name,
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
