import { withAuth, ownerId } from '@/lib/auth';
import { NextRequest, NextResponse } from 'next/server';
import { getSupabase, query, optional } from '@/lib/supabase';

async function handleGET() {
  const pontos = await query(getSupabase().from('RegistroPonto').select('*, funcionario:Funcionario!inner(*)').eq('funcionario.ownerId', ownerId()).order('data', { ascending: false }));
  return NextResponse.json(pontos);
}

async function handlePOST(request: NextRequest) {
  const body = await request.json();
  const { funcionarioId, data, entrada, saidaAlmoco, retornoAlmoco, saida, horasExtras, status } = body;

  if (!funcionarioId || !data || !entrada || !saida) {
    return NextResponse.json(
      { error: 'funcionarioId, data, entrada e saida são obrigatórios' },
      { status: 400 }
    );
  }

  const funcionario = await optional(getSupabase().from('Funcionario').select('*').eq('id', funcionarioId).eq('ownerId', ownerId()).limit(1).maybeSingle());
  if (!funcionario) return NextResponse.json({ error: 'Funcionário não encontrado no seu ambiente.' }, { status: 403 });
  const registro = await query(getSupabase().from('RegistroPonto').insert({
      funcionarioId,
      data: new Date(data).toISOString(),
      entrada,
      saidaAlmoco: saidaAlmoco || '12:00',
      retornoAlmoco: retornoAlmoco || '13:00',
      saida,
      horasExtras: horasExtras || '0h',
      status: status || 'REGULAR',
    }).select('*, funcionario:Funcionario(*)').single());

  return NextResponse.json(registro, { status: 201 });
}
export const GET = withAuth(handleGET);

export const POST = withAuth(handlePOST);
