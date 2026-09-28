import { withAuth, currentUser } from '@/lib/auth';
import { NextResponse } from 'next/server';
import { getSupabase, query } from '@/lib/supabase';

// GET /api/notificacoes?destino=ALUNO&alunoId=xxx  ou  ?destino=PROFESSOR
async function handleGET() {
  const user = currentUser();
  const where = user.role === 'aluno' ? { alunoId: user.id, destino: 'ALUNO' as const } : { destino: 'PROFESSOR' as const };

  const notificacoes = await query(getSupabase().from('Notificacao').select('*').match(where).order('createdAt', { ascending: false }).limit(20));

  return NextResponse.json(notificacoes);
}
export const GET = withAuth(handleGET);
