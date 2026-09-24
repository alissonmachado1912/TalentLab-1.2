import { NextResponse } from 'next/server';
import { endSession, sessionUser } from '@/lib/auth';
export async function GET() {
  const user = await sessionUser();
  return NextResponse.json(user || { error: 'Entre novamente.' }, { status: user ? 200 : 401 });
}
export async function DELETE() { await endSession(); return NextResponse.json({ ok: true }); }
