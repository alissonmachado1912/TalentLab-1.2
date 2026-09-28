import { withAuth, currentUser } from '@/lib/auth';
import { NextRequest, NextResponse } from 'next/server';
import { getSupabase, execute } from '@/lib/supabase';

async function handlePOST(request: NextRequest) {
  const body = await request.json();
  const { ids } = body;

  if (!Array.isArray(ids) || ids.length === 0) {
    return NextResponse.json({ ok: true });
  }

  await execute(getSupabase().from('Notificacao').update({ lida: true }).in('id', ids).eq('destino', currentUser().role === 'aluno' ? 'ALUNO' : 'PROFESSOR').match(currentUser().role === 'aluno' ? { alunoId: currentUser().id } : {}));

  return NextResponse.json({ ok: true });
}
export const POST = withAuth(handlePOST);
