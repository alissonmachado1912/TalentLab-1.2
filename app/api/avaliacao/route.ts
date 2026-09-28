import { NextResponse } from 'next/server';
import { getSupabase, query, optional } from '@/lib/supabase';
import { withAuth } from '@/lib/auth';

export const GET = withAuth(async (request: Request) => {
  const id = new URL(request.url).searchParams.get('alunoId');
  if (!id) return NextResponse.json({ error: 'Selecione um aluno.' }, { status: 400 });
  const aluno = await optional(getSupabase().from('Aluno').select('id, nome, matricula, turma:Turma(*)').eq('id', id).limit(1).maybeSingle());
  if (!aluno) return NextResponse.json({ error: 'Aluno não encontrado.' }, { status: 404 });
  const [empresas, cargos, funcionarios, pontos, asos, trabalhos, conclusoes] = await Promise.all([
    query(getSupabase().from('Empresa').select('*, setores:Setor(*)').eq('ownerId', id).order('razaoSocial', { ascending: true })),
    query(getSupabase().from('Cargo').select('*').eq('ownerId', id).order('titulo', { ascending: true })),
    query(getSupabase().from('Funcionario').select('*, empresa:Empresa(*), cargo:Cargo(*)').eq('ownerId', id).order('nome', { ascending: true })),
    query(getSupabase().from('RegistroPonto').select('*, funcionario:Funcionario!inner(*)').eq('funcionario.ownerId', id).order('data', { ascending: false })),
    query(getSupabase().from('RegistroASO').select('*, funcionario:Funcionario!inner(*)').eq('funcionario.ownerId', id).order('data', { ascending: false })),
    query(getSupabase().from('Trabalho').select('*').eq('alunoId', id).order('createdAt', { ascending: false })),
    query(getSupabase().from('AtividadeConclusao').select('*, activity:Activity(*)').eq('alunoId', id).order('concluidaEm', { ascending: false })),
  ]);
  return NextResponse.json({ aluno, empresas, cargos, funcionarios, pontos, asos, trabalhos, conclusoes });
}, true);
