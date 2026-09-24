import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { withAuth } from '@/lib/auth';

export const GET = withAuth(async (request: Request) => {
  const id = new URL(request.url).searchParams.get('alunoId');
  if (!id) return NextResponse.json({ error: 'Selecione um aluno.' }, { status: 400 });
  const aluno = await prisma.aluno.findUnique({ where: { id }, select: { id: true, nome: true, matricula: true, turma: true } });
  if (!aluno) return NextResponse.json({ error: 'Aluno não encontrado.' }, { status: 404 });
  const [empresas, cargos, funcionarios, pontos, asos, trabalhos, conclusoes] = await Promise.all([
    prisma.empresa.findMany({ where: { ownerId: id }, include: { setores: true }, orderBy: { razaoSocial: 'asc' } }),
    prisma.cargo.findMany({ where: { ownerId: id }, orderBy: { titulo: 'asc' } }),
    prisma.funcionario.findMany({ where: { ownerId: id }, include: { empresa: true, cargo: true }, orderBy: { nome: 'asc' } }),
    prisma.registroPonto.findMany({ where: { funcionario: { ownerId: id } }, include: { funcionario: true }, orderBy: { data: 'desc' } }),
    prisma.registroASO.findMany({ where: { funcionario: { ownerId: id } }, include: { funcionario: true }, orderBy: { data: 'desc' } }),
    prisma.trabalho.findMany({ where: { alunoId: id }, orderBy: { createdAt: 'desc' } }),
    prisma.atividadeConclusao.findMany({ where: { alunoId: id }, include: { activity: true }, orderBy: { concluidaEm: 'desc' } }),
  ]);
  return NextResponse.json({ aluno, empresas, cargos, funcionarios, pontos, asos, trabalhos, conclusoes });
}, true);
