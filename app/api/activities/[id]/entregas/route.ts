import { NextResponse } from 'next/server';
import { withAuth } from '@/lib/auth';
import { getSupabase, optional, query } from '@/lib/supabase';
export const GET = withAuth(async (request: Request, { params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const alunoId = new URL(request.url).searchParams.get('alunoId');
  if (!alunoId) return NextResponse.json({ error: 'Selecione um aluno.' }, { status: 400 });
  const conclusao = await optional(getSupabase().from('AtividadeConclusao').select('*').eq('activityId', id).eq('alunoId', alunoId).maybeSingle());
  if (!conclusao) return NextResponse.json({ error: 'Este aluno ainda não concluiu a atividade.' }, { status: 404 });
  const trabalhos = await query(getSupabase().from('Trabalho').select('dados,createdAt').eq('alunoId', alunoId).eq('tipo', 'entrega').eq('dados->>atividadeId', id).lte('createdAt', conclusao.concluidaEm).order('createdAt', { ascending: false }).limit(1));
  return NextResponse.json({ concluidaEm: conclusao.concluidaEm, trabalho: trabalhos[0] || null });
}, true);
