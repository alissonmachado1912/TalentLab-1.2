import { withAuth, currentUser } from '@/lib/auth';
import { NextRequest, NextResponse } from 'next/server';
import { getSupabase, query, optional } from '@/lib/supabase';

async function handlePOST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const user = currentUser();
  if (user.role !== 'aluno') return NextResponse.json({ error: 'Somente alunos podem concluir atividades.' }, { status: 403 });
  const alunoId = user.id;
  const permitida = await optional(getSupabase().from('Activity').select('*').eq('id', id).or('turmaId.is.null,turmaId.eq.' + JSON.stringify(user.turmaId)).limit(1).maybeSingle());
  if (!permitida) return NextResponse.json({ error: 'Atividade não encontrada.' }, { status: 404 });

  const anterior = await optional(getSupabase().from('AtividadeConclusao').select('id').eq('activityId', id).eq('alunoId', alunoId).maybeSingle());
  if (anterior) return NextResponse.json({ ok: true, concluida: true });
  const db = getSupabase();
  let registros;
  switch (permitida.mechanism) {
    case 'empresas': registros = await query(db.from('Empresa').select('*').eq('ownerId', alunoId)); break;
    case 'cargos': registros = await query(db.from('Cargo').select('*').eq('ownerId', alunoId)); break;
    case 'funcionarios': registros = await query(db.from('Funcionario').select('*, empresa:Empresa(razaoSocial), cargo:Cargo(titulo)').eq('ownerId', alunoId)); break;
    case 'ponto': registros = await query(db.from('RegistroPonto').select('*, funcionario:Funcionario!inner(nome,ownerId)').eq('funcionario.ownerId', alunoId)); break;
    case 'aso': registros = await query(db.from('RegistroASO').select('*, funcionario:Funcionario!inner(nome,ownerId)').eq('funcionario.ownerId', alunoId)); break;
    default: registros = await query(db.from('Trabalho').select('dados,createdAt').eq('alunoId', alunoId).eq('tipo', permitida.mechanism).eq('dados->>atividadeId', id).order('createdAt', { ascending: false }).limit(1));
  }
  if (!registros.length) return NextResponse.json({ error: 'Ainda não há trabalho para entregar. Faça os cadastros ou salve o resultado no simulador aberto por esta atividade.' }, { status: 400 });
  await query(db.from('Trabalho').insert({ alunoId, tipo: 'entrega', dados: { atividadeId: id, titulo: permitida.title, modulo: permitida.mechanism, registros } }).select('id').single());

  try {
    await query(getSupabase().from('AtividadeConclusao').insert({ activityId: id, alunoId }).select('*').single());
  } catch (error: unknown) {
    if (error && typeof error === 'object' && 'code' in error && error.code === '23505') {
      return NextResponse.json({ ok: true, concluida: true });
    }
    console.error(error);
    return NextResponse.json({ error: 'Erro ao marcar atividade como concluída.' }, { status: 500 });
  }

  try {
  const [aluno, activity] = await Promise.all([
    optional(getSupabase().from('Aluno').select('*').eq('id', alunoId).limit(1).maybeSingle()),
    optional(getSupabase().from('Activity').select('*').eq('id', id).limit(1).maybeSingle()),
  ]);

  await query(getSupabase().from('Notificacao').insert({
      mensagem: `${aluno?.nome ?? 'Um aluno'} concluiu a atividade "${activity?.title ?? ''}"`,
      tipo: 'ATIVIDADE_CONCLUIDA',
      destino: 'PROFESSOR',
    }).select('*').single());

  } catch { console.error('Conclusão salva; falha ao enviar notificação ao professor.'); }
  return NextResponse.json({ ok: true, concluida: true });
}
export const POST = withAuth(handlePOST);
