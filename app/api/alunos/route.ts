import { withAuth } from '@/lib/auth';
import { NextRequest, NextResponse } from 'next/server';
import { getSupabase, query } from '@/lib/supabase';
import { hashPassword } from '@/lib/student-password';

async function handleGET() {
  const alunos = await query(getSupabase().from('Aluno').select('id, nome, matricula, turmaId, createdAt, turma:Turma(*)').order('nome', { ascending: true }));
  return NextResponse.json(alunos);
}

async function handlePOST(request: NextRequest) {
  const body = await request.json();
  const { nome, matricula, turmaId, senha } = body;

  if (![nome, matricula, turmaId].every((value) => typeof value === 'string' && value.trim())) {
    return NextResponse.json(
      { error: 'nome, matricula e turmaId são obrigatórios' },
      { status: 400 }
    );
  }

  if (typeof senha !== 'string' || senha.length < 6 || senha.length > 128) {
    return NextResponse.json({ error: 'A senha deve ter entre 6 e 128 caracteres.' }, { status: 400 });
  }

  try {
    const aluno = await query(getSupabase().from('Aluno').insert({ nome: nome.trim(), matricula: matricula.trim(), turmaId, senhaHash: await hashPassword(senha) }).select('id, nome, matricula, turmaId, createdAt, turma:Turma(*)').single());
    return NextResponse.json(aluno, { status: 201 });
  } catch (error: unknown) {
    if (error && typeof error === 'object' && 'code' in error && error.code === '23503') {
      return NextResponse.json({ error: 'A turma selecionada não existe mais. Atualize a página e selecione uma turma disponível.' }, { status: 400 });
    }
    if (error && typeof error === 'object' && 'code' in error && error.code === '23505') {
      return NextResponse.json({ error: 'Já existe um aluno com essa matrícula.' }, { status: 409 });
    }
    console.error(error);
    return NextResponse.json({ error: 'Erro ao cadastrar aluno.' }, { status: 500 });
  }
}

export const GET = withAuth(handleGET, true);

export const POST = withAuth(handlePOST, true);
