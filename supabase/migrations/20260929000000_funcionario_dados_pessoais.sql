-- Execute no SQL Editor do Supabase. Preserva os registros existentes.
ALTER TABLE public."Funcionario"
  ADD COLUMN IF NOT EXISTS "sexo" text CHECK ("sexo" IN ('MASCULINO', 'FEMININO')),
  ADD COLUMN IF NOT EXISTS "dataNascimento" date;
NOTIFY pgrst, 'reload schema';
