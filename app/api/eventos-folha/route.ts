import { withAuth } from '@/lib/auth';
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

async function handlePOST(request: Request) {
  const body = await request.json();
  const { codigo, nome, tipo, descricaoDidatica, percentualFixa, incideFGTS } = body;
  if (typeof codigo !== 'string' || !/^[a-zA-Z0-9_-]{1,30}$/.test(codigo.trim()) ||
      typeof nome !== 'string' || !nome.trim() || nome.length > 191 ||
      !['PROVENTO', 'DESCONTO'].includes(tipo) ||
      typeof descricaoDidatica !== 'string' || !descricaoDidatica.trim() || descricaoDidatica.length > 191 ||
      typeof percentualFixa !== 'number' || !Number.isFinite(percentualFixa) || percentualFixa <= 0 || percentualFixa > 100 ||
      typeof incideFGTS !== 'boolean') {
    return NextResponse.json({ error: 'Preencha código, nome, descrição e percentual maior que zero e até 100.' }, { status: 400 });
  }
  if (['0001', '0006'].includes(codigo.trim())) {
    return NextResponse.json({ error: 'Este código é reservado para uma regra de cálculo do sistema. Escolha outro código.' }, { status: 400 });
  }
  try {
    const evento = await prisma.eventoFolha.create({ data: {
      codigo: codigo.trim(), nome: nome.trim(), tipo, descricaoDidatica: descricaoDidatica.trim(),
      percentualFixa, incideFGTS: tipo === 'PROVENTO' && incideFGTS,
    } });
    return NextResponse.json(evento, { status: 201 });
  } catch (error) {
    if (error && typeof error === 'object' && 'code' in error && error.code === 'P2002') {
      return NextResponse.json({ error: 'Este código já está cadastrado.' }, { status: 409 });
    }
    return NextResponse.json({ error: 'Não foi possível cadastrar o código.' }, { status: 500 });
  }
}

// GET /api/eventos-folha -> lista todos os eventos (INSS, IRRF, Vale Transporte, etc.)
async function handleGET() {
  const eventos = await prisma.eventoFolha.findMany({
    orderBy: { codigo: 'asc' },
  });
  return NextResponse.json(eventos);
}

export const GET = withAuth(handleGET, false);

export const POST = withAuth(handlePOST, true);
