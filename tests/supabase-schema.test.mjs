
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { PGlite } from '@electric-sql/pglite';

test('migration preserves constraints, seed data, cascades and server-only access', async () => {
  const db = new PGlite();
  try {
    await db.exec('create role anon; create role authenticated; create role service_role bypassrls;');
    await db.exec(await readFile(new URL('../supabase/migrations/20260928000000_initial.sql', import.meta.url), 'utf8'));
    const rows = async (sql, params = []) => (await db.query(sql, params)).rows;
    assert.equal((await rows('select count(*)::int as total from public."EventoFolha"'))[0].total, 10);
    const tables = await rows("select tablename, rowsecurity from pg_tables where schemaname = 'public'");
    assert.equal(tables.length, 17);
    assert.ok(tables.every(t => t.rowsecurity));
    for (const role of ['anon', 'authenticated']) {
      await db.exec('set role ' + role);
      await assert.rejects(db.query('select * from public."Professor"'), { code: '42501' });
      await assert.rejects(db.query('select * from public."Sessao"'), { code: '42501' });
      await db.exec('reset role');
    }
    await db.exec('set role service_role');
    const [turma] = await rows('insert into public."Turma" (nome) values ($1) returning *', ['Turma teste']);
    assert.ok(turma.id);
    const [aluno] = await rows('insert into public."Aluno" (nome, matricula, "turmaId") values ($1, $2, $3) returning *', ['Aluno', '123', turma.id]);
    await assert.rejects(db.query('insert into public."Aluno" (nome, matricula, "turmaId") values ($1, $2, $3)', ['Outro', '123', turma.id]), { code: '23505' });
    await assert.rejects(db.query('insert into public."Aluno" (nome, matricula, "turmaId") values ($1, $2, $3)', ['Outro', '456', 'missing']), { code: '23503' });
    const [empresa] = await rows('insert into public."Empresa" ("ownerId", "razaoSocial", cnpj) values ($1, $2, $3) returning *', [aluno.id, 'Empresa', '123']);
    await rows('insert into public."Empresa" ("ownerId", "razaoSocial", cnpj) values ($1, $2, $3)', ['outro-aluno', 'Outra', '123']);
    await assert.rejects(db.query('insert into public."Empresa" ("ownerId", "razaoSocial", cnpj) values ($1, $2, $3)', [aluno.id, 'Duplicada', '123']), { code: '23505' });
    const [updated] = await rows('update public."Empresa" set "razaoSocial" = $1 where id = $2 returning *', ['Atualizada', empresa.id]);
    assert.ok(new Date(updated.updatedAt) >= new Date(empresa.updatedAt));
    const [cargo] = await rows('insert into public."Cargo" (codigo, titulo, "salarioBase", "jornadaMensal") values ($1, $2, $3, $4) returning *', ['1', 'Cargo', 2000, 220]);
    const [funcionario] = await rows('insert into public."Funcionario" (codigo, "empresaId", nome, cpf, "cargoId", "salarioBase", "dataAdmissao") values ($1,$2,$3,$4,$5,$6,$7) returning *', ['1', empresa.id, 'Funcionario', '123', cargo.id, 2000, '2026-09-28']);
    await assert.rejects(db.query('delete from public."Cargo" where id = $1', [cargo.id]), error => ['23503', '23001'].includes(error.code));
    await rows('insert into public."RegistroPonto" ("funcionarioId", data, entrada, "saidaAlmoco", "retornoAlmoco", saida) values ($1,$2,$3,$4,$5,$6)', [funcionario.id, '2026-09-28', '08:00', '12:00', '13:00', '17:00']);
    await rows('delete from public."Funcionario" where id = $1', [funcionario.id]);
    assert.equal((await rows('select count(*)::int as total from public."RegistroPonto"'))[0].total, 0);
    const [activity] = await rows('insert into public."Activity" (type,title,statement,instructions,mechanism,"className","createdBy","turmaId") values ($1,$2,$3,$4,$5,$6,$7,$8) returning *', ['pratica','Teste','Teste','Teste','empresas','','Professor',turma.id]);
    await rows('insert into public."AtividadeConclusao" ("activityId","alunoId") values ($1,$2)', [activity.id,aluno.id]);
    await assert.rejects(db.query('insert into public."AtividadeConclusao" ("activityId","alunoId") values ($1,$2)', [activity.id,aluno.id]), {code:'23505'});
    await rows('delete from public."Turma" where id = $1', [turma.id]);
    assert.equal((await rows('select count(*)::int as total from public."Aluno"'))[0].total, 0);
    assert.equal((await rows('select count(*)::int as total from public."AtividadeConclusao"'))[0].total, 0);
    assert.equal((await rows('select "turmaId" from public."Activity" where id = $1', [activity.id]))[0].turmaId, null);
  } finally {
    await db.close();
  }
});
