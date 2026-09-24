import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { verifyPassword } from '@/lib/student-password';
import { startSession } from '@/lib/auth';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { matricula, senha } = body;

  if (typeof matricula !== 'string' || !matricula.trim() || typeof senha !== 'string' || !senha || senha.length > 128) {
    return NextResponse.json({ error: 'Informe a matrícula e uma senha válida.' }, { status: 400 });
  }

  const aluno = await prisma.aluno.findUnique({
    where: { matricula: matricula.trim() },
    include: { turma: true },
  });

  if (!aluno?.senhaHash || !(await verifyPassword(senha, aluno.senhaHash))) {
    return NextResponse.json({ error: 'Matrícula ou senha incorreta. Confira com o professor.' }, { status: 401 });
  }

  await startSession(aluno.id, 'aluno');
  return NextResponse.json({
    id: aluno.id,
    nome: aluno.nome,
    matricula: aluno.matricula,
    turmaId: aluno.turmaId,
    turma: aluno.turma,
  });
}
