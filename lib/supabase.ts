import 'server-only';
import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import type { Database } from './database.types';

let client: SupabaseClient<Database>;

export function getSupabase() {
  if (client) return client;
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY;
  if (!url || !key) throw new Error('Configure SUPABASE_URL e SUPABASE_SECRET_KEY no .env.local.');
  client = createClient<Database>(url, key, {
    auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
  });
  return client;
}

type Result<T> = { data: T; error: { code?: string; message: string } | null };

// Supabase retorna erros no resultado; as rotas os tratam no withAuth.
export async function query<T>(request: PromiseLike<Result<T>>): Promise<NonNullable<T>> {
  const { data, error } = await request;
  if (error) throw error;
  if (data === null) throw { code: 'PGRST116', message: 'Registro n?o encontrado.' };
  return data as NonNullable<T>;
}

export async function optional<T>(request: PromiseLike<Result<T>>): Promise<T> {
  const { data, error } = await request;
  if (error) throw error;
  return data;
}

export async function execute(request: PromiseLike<{ error: { code?: string; message: string } | null }>) {
  const { error } = await request;
  if (error) throw error;
}

export async function count(request: PromiseLike<{ count: number | null; error: { code?: string; message: string } | null }>) {
  const { count: total, error } = await request;
  if (error) throw error;
  return total ?? 0;
}
