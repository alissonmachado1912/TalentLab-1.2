import { withAuth } from '@/lib/auth';
import { NextRequest, NextResponse } from 'next/server';
import { getSupabase, query } from '@/lib/supabase';

async function handleGET() {
  const turmas = await query(getSupabase().from('Turma').select('*, alunos:Aluno(id)').order('nome', { ascending: true }));

  const resposta = turmas.map((t) => ({
    id: t.id,
    nome: t.nome,
    alunosCount: t.alunos.length,
  }));

  return NextResponse.json(resposta);
}

async function handlePOST(request: NextRequest) {
  const body = await request.json();
  const { nome } = body;

  if (!nome) {
    return NextResponse.json({ error: 'nome é obrigatório' }, { status: 400 });
  }

  const turma = await query(getSupabase().from('Turma').insert({ nome }).select('*').single());
  return NextResponse.json({ ...turma, alunosCount: 0 }, { status: 201 });
}
export const GET = withAuth(handleGET, true);

export const POST = withAuth(handlePOST, true);
