import { withAuth, ownerId } from '@/lib/auth';
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

async function handleGET() {
  const cargos = await prisma.cargo.findMany({
    where: { ownerId: ownerId() },
    orderBy: { titulo: 'asc' },
  });
  return NextResponse.json(cargos);
}

async function handlePOST(request: NextRequest) {
  const body = await request.json();
  const {
    codigo,
    titulo,
    salarioBase,
    jornadaMensal,
    adicionalInsalubridade,
    adicionalPericulosidade,
  } = body;

  if (!codigo || !titulo || salarioBase == null || jornadaMensal == null) {
    return NextResponse.json(
      { error: 'codigo, titulo, salarioBase e jornadaMensal são obrigatórios' },
      { status: 400 }
    );
  }

  const cargo = await prisma.cargo.create({
    data: { ownerId: ownerId(),
      codigo: codigo.toUpperCase(),
      titulo,
      salarioBase: Number(salarioBase),
      jornadaMensal: Number(jornadaMensal),
      adicionalInsalubridade: Boolean(adicionalInsalubridade),
      adicionalPericulosidade: Boolean(adicionalPericulosidade),
    },
  });

  return NextResponse.json(cargo, { status: 201 });
}
export const GET = withAuth(handleGET);

export const POST = withAuth(handlePOST);
