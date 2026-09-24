import { withAuth, currentUser } from '@/lib/auth';
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

async function handlePOST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const user = currentUser();
  if (user.role !== 'aluno') return NextResponse.json({ error: 'Somente alunos podem concluir atividades.' }, { status: 403 });
  const alunoId = user.id;
  const permitida = await prisma.activity.findFirst({ where: { id, OR: [{ turmaId: user.turmaId }, { turmaId: null }] } });
  if (!permitida) return NextResponse.json({ error: 'Atividade não encontrada.' }, { status: 404 });

  try {
    await prisma.atividadeConclusao.create({
      data: { activityId: id, alunoId },
    });
  } catch (error: any) {
    if (error.code === 'P2002') {
      return NextResponse.json({ error: 'Você já concluiu esta atividade.' }, { status: 409 });
    }
    console.error(error);
    return NextResponse.json({ error: 'Erro ao marcar atividade como concluída.' }, { status: 500 });
  }

  const [aluno, activity] = await Promise.all([
    prisma.aluno.findUnique({ where: { id: alunoId } }),
    prisma.activity.findUnique({ where: { id } }),
  ]);

  await prisma.notificacao.create({
    data: {
      mensagem: `${aluno?.nome ?? 'Um aluno'} concluiu a atividade "${activity?.title ?? ''}"`,
      tipo: 'ATIVIDADE_CONCLUIDA',
      destino: 'PROFESSOR',
    },
  });

  return NextResponse.json({ ok: true });
}
export const POST = withAuth(handlePOST);
