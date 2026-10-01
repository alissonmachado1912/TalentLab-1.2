import { withAuth, ownerId } from '@/lib/auth';
import { NextRequest, NextResponse } from 'next/server';
import { getSupabase, query, optional } from '@/lib/supabase';

async function handleGET() {
  const asos = await query(getSupabase().from('RegistroASO').select('*, funcionario:Funcionario!inner(*, empresa:Empresa(razaoSocial,cnpj), cargo:Cargo(titulo))').eq('funcionario.ownerId', ownerId()).order('data', { ascending: false }));
  return NextResponse.json(asos);
}

async function handlePOST(request: NextRequest) {
  const body = await request.json();
  const { funcionarioId, tipo, medico, data, resultado } = body;

  if (!funcionarioId || !tipo || !medico || !data) {
    return NextResponse.json(
      { error: 'funcionarioId, tipo, medico e data são obrigatórios' },
      { status: 400 }
    );
  }

  const funcionario = await optional(getSupabase().from('Funcionario').select('*').eq('id', funcionarioId).eq('ownerId', ownerId()).limit(1).maybeSingle());
  if (!funcionario) return NextResponse.json({ error: 'Funcionário não encontrado no seu ambiente.' }, { status: 403 });
  const registro = await query(getSupabase().from('RegistroASO').insert({
      funcionarioId,
      tipo,
      medico,
      data: new Date(data).toISOString(),
      resultado: resultado || 'APTO',
    }).select('*, funcionario:Funcionario(*, empresa:Empresa(razaoSocial,cnpj), cargo:Cargo(titulo))').single());

  return NextResponse.json(registro, { status: 201 });
}
export const GET = withAuth(handleGET);

export const POST = withAuth(handlePOST);
