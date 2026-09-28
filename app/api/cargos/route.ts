import { withAuth, ownerId } from '@/lib/auth';
import { NextRequest, NextResponse } from 'next/server';
import { getSupabase, query } from '@/lib/supabase';

async function handleGET() {
  const cargos = await query(getSupabase().from('Cargo').select('*').eq('ownerId', ownerId()).order('titulo', { ascending: true }));
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

  const cargo = await query(getSupabase().from('Cargo').insert({ ownerId: ownerId(),
      codigo: codigo.toUpperCase(),
      titulo,
      salarioBase: Number(salarioBase),
      jornadaMensal: Number(jornadaMensal),
      adicionalInsalubridade: Boolean(adicionalInsalubridade),
      adicionalPericulosidade: Boolean(adicionalPericulosidade),
    }).select('*').single());

  return NextResponse.json(cargo, { status: 201 });
}
export const GET = withAuth(handleGET);

export const POST = withAuth(handlePOST);
