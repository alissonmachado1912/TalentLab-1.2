/* eslint-disable @typescript-eslint/no-require-imports */
// Testes isolados: PostgreSQL em memória; nenhum .env ou banco remoto é utilizado.
const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const { PGlite } = require('@electric-sql/pglite');
const root = path.resolve(__dirname, '..');

function loadSources(mocks) {
  const cache = new Map();
  function load(file) {
    const absolute = path.resolve(root, file);
    if (cache.has(absolute)) return cache.get(absolute).exports;
    const compiledModule = { exports: {} }; cache.set(absolute, compiledModule);
    const source = ts.transpileModule(fs.readFileSync(absolute, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
    const localRequire = name => {
      if (name in mocks) return mocks[name];
      if (name.startsWith('@/')) return load(name.slice(2) + '.ts');
      if (name.startsWith('.')) return load(path.relative(root, path.resolve(path.dirname(absolute), name)) + '.ts');
      return require(name);
    };
    new Function('require', 'module', 'exports', source)(localRequire, compiledModule, compiledModule.exports);
    return compiledModule.exports;
  }
  return load;
}

test('regras de duração usam somente horários e extras informados', () => {
  const load = loadSources({});
  const time = load('lib/time-report.ts');
  assert.deepEqual(time.period30('2026-02-10'), { start: '2026-02-10', end: '2026-03-11', exclusiveEnd: '2026-03-12' });
  assert.throws(() => time.period30('2026-02-30'));
  assert.equal(time.workedMinutes({ entrada: '08:00', saidaAlmoco: '12:00', retornoAlmoco: '13:30', saida: '18:00' }), 510);
  assert.equal(time.workedMinutes({ entrada: '22:00', saidaAlmoco: '23:00', retornoAlmoco: '00:00', saida: '06:00' }), null);
  assert.equal(time.workedMinutes({ entrada: '08:00', saidaAlmoco: '', retornoAlmoco: '', saida: '18:00' }), null);
  for (const value of ['1h30min', '1:30', '1,5h', '1.5', '1h 30m']) assert.equal(time.overtimeMinutes(value), 90);
  for (const value of ['-1h', 'abc', '1:60', '1h90']) assert.equal(time.overtimeMinutes(value), null);
  assert.equal(time.overtimeMinutes('0h'), 0);
  const day = { entrada: '08:00', saidaAlmoco: '12:00', retornoAlmoco: '13:00', saida: '17:00' };
  assert.equal(time.dailyOvertimeMinutes(day), 0);
  assert.equal(time.dailyOvertimeMinutes({ ...day, saida: '18:00' }), 60);
  assert.equal(time.dailyOvertimeMinutes({ ...day, saida: '17:30' }), 30);
  assert.equal(time.dailyOvertimeMinutes({ ...day, saida: '16:00' }), 0);
  assert.equal(time.dailyOvertimeMinutes({ ...day, retornoAlmoco: '14:00', saida: '18:00' }), 0);
  assert.equal(time.dailyOvertimeMinutes({ ...day, saida: '06:00' }), null);
  const validation = load('lib/registration-validation.ts');
  const engine = load('lib/engine.ts');
  assert.equal(engine.formatOvertimeText('1.00000000000000000000h x (R$ 113.64 + 50%)'), '1h x (R$ 113.64 + 50%)');
  assert.equal(engine.formatPayrollHours(1.5), '1h 30min');
  assert.equal(validation.validEmployeeNotes({ pcd: 'Sim' }), false);
  assert.equal(validation.validEmployeeNotes({ pcd: true, observacoes: 'Teste' }), true);
  assert.throws(() => validation.jobData({ codigo: 'C1', titulo: 'Cargo', salarioBase: -1, jornadaMensal: 220, adicionalInsalubridade: false, adicionalPericulosidade: false }));
  const merge = load('lib/payroll-items.ts').replacePointOvertime;
  const regular = { codigoEvento: '0003', valorCalculado: 132 };
  const manual = { codigoEvento: '0006', valorCalculado: 99 };
  const automatic = { codigoEvento: '0006', valorCalculado: 30, lancamentoId: null, pontoIds: ['p1'] };
  assert.deepEqual(merge([regular, manual], automatic), [regular, automatic]);
  assert.deepEqual(merge(merge([regular], automatic), automatic), [regular, automatic]);
  assert.deepEqual(merge([regular, automatic], null), [regular]);
});

// Adaptador de teste do transporte Supabase; as queries e constraints executam em PostgreSQL.
function databaseAdapter(db, missingTables = new Set()) {
  const quote = value => '"' + value.replaceAll('"', '""') + '"';
  class Builder {
    constructor(table) { this.table = table; this.filters = []; this.orders = []; this.parameters = []; this.operation = 'select'; this.columns = '*'; }
    select(columns = '*') { this.columns = columns; return this; }
    insert(value) { this.operation = 'insert'; this.value = value; return this; }
    update(value) { this.operation = 'update'; this.value = value; return this; }
    delete() { this.operation = 'delete'; return this; }
    param(value) { this.parameters.push(value); return '$' + this.parameters.length; }
    eq(key, value) { this.filters.push(`${quote(key)} = ${this.param(value)}`); return this; }
    gte(key, value) { this.filters.push(`${quote(key)} >= ${this.param(value)}`); return this; }
    lt(key, value) { this.filters.push(`${quote(key)} < ${this.param(value)}`); return this; }
    in(key, values) { this.filters.push(`${quote(key)} in (${values.map(v => this.param(v)).join(',')})`); return this; }
    order(key, options = {}) { this.orders.push(`${quote(key)} ${options.ascending === false ? 'desc' : 'asc'}`); return this; }
    range(start, end) { this.offset = start; this.size = end - start + 1; return this; }
    limit(size) { this.size = size; return this; }
    single() { this.mode = 'single'; return this; }
    maybeSingle() { this.mode = 'maybe'; return this; }
    then(resolve, reject) { return this.run().then(resolve, reject); }
    async run() {
      try {
        if (missingTables.has(this.table)) throw { code: 'PGRST205', message: 'Missing table' };
        let sql;
        const table = 'public.' + quote(this.table);
        const where = this.filters.length ? ' where ' + this.filters.join(' and ') : '';
        if (this.operation === 'insert') {
          const keys = Object.keys(this.value);
          sql = `insert into ${table} (${keys.map(quote).join(',')}) values (${keys.map(k => this.param(this.value[k])).join(',')}) returning *`;
        } else if (this.operation === 'update') {
          sql = `update ${table} set ${Object.entries(this.value).map(([k, v]) => `${quote(k)} = ${this.param(v)}`).join(',')}${where} returning *`;
        } else if (this.operation === 'delete') {
          sql = `delete from ${table}${where} returning *`;
        } else {
          sql = `select * from ${table}${where}${this.orders.length ? ' order by ' + this.orders.join(',') : ''}${this.size !== undefined ? ' limit ' + this.size : ''}${this.offset ? ' offset ' + this.offset : ''}`;
        }
        let { rows } = await db.query(sql, this.parameters);
        rows = rows.map(row => Object.fromEntries(Object.entries(row).map(([k, v]) => [k, v instanceof Date ? v.toISOString() : v])));
        if (this.columns.includes('empresa:') || this.columns.includes('cargo:')) {
          for (const row of rows) {
            row.empresa = (await db.query('select * from public."Empresa" where id = $1', [row.empresaId])).rows[0];
            row.cargo = (await db.query('select * from public."Cargo" where id = $1', [row.cargoId])).rows[0];
          }
        } else if (this.columns.includes('funcionario:')) {
          for (const row of rows) row.funcionario = (await db.query('select * from public."Funcionario" where id = $1', [row.funcionarioId])).rows[0];
        } else if (this.columns.includes('turma:')) {
          for (const row of rows) row.turma = (await db.query('select * from public."Turma" where id = $1', [row.turmaId])).rows[0];
        } else if (this.columns !== '*') {
          const columns = this.columns.split(','); rows = rows.map(row => Object.fromEntries(columns.map(k => [k, row[k]])));
        }
        if (this.mode && rows.length !== 1) return { data: null, error: this.mode === 'maybe' && rows.length === 0 ? null : { code: 'PGRST116', message: 'Não encontrado' } };
        return { data: this.mode ? rows[0] : rows, error: null };
      } catch (error) { return { data: null, error }; }
    }
  }
  return {
    from: table => new Builder(table),
    rpc: async (name, args) => {
      try {
        const { rows } = await db.query(`select public.${name}($1,$2,$3,$4,$5::jsonb) as result`, [args.p_owner, args.p_funcionario, args.p_inicio, args.p_salario, JSON.stringify(args.p_pontos)]);
        return { data: rows[0].result, error: null };
      } catch (error) { return { data: null, error }; }
    },
  };
}

test('APIs, sessões, isolamento, relatórios e lançamento transacional em PostgreSQL local', async () => {
  const db = new PGlite();
  const cookieJar = new Map();
  try {
    await db.exec('create role anon; create role authenticated; create role service_role bypassrls;');
    for (const migration of fs.readdirSync(path.join(root, 'supabase/migrations')).sort()) await db.exec(fs.readFileSync(path.join(root, 'supabase/migrations', migration), 'utf8'));
    const missingTables = new Set();
    const adapter = databaseAdapter(db, missingTables);
    const helpers = { getSupabase: () => adapter, query: async promise => { const result = await promise; if (result.error) throw result.error; if (result.data === null) throw { code: 'PGRST116' }; return result.data; }, optional: async promise => { const result = await promise; if (result.error) throw result.error; return result.data; }, execute: async promise => { const result = await promise; if (result.error) throw result.error; } };
    const load = loadSources({ '@/lib/supabase': helpers, './supabase': helpers, 'next/server': { NextResponse: { json: (data, options) => Response.json(data, options) } }, 'next/headers': { cookies: async () => ({ get: name => cookieJar.has(name) ? { value: cookieJar.get(name) } : undefined, set: (name, value) => cookieJar.set(name, value), delete: name => cookieJar.delete(name) }) } });
    const auth = load('lib/auth.ts');
    const call = async (file, method, body, id, query = '') => {
      const request = new Request('http://localhost/api/test' + query, { method, ...(body ? { headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) } : {}) });
      request.nextUrl = new URL(request.url);
      const response = await load(file)[method](request, { params: Promise.resolve({ id }) });
      return { status: response.status, data: await response.json() };
    };
    const companyRoute = 'app/api/empresas/[id]/route.ts';
    const jobRoute = 'app/api/cargos/[id]/route.ts';
    const employeeRoute = 'app/api/funcionarios/[id]/route.ts';
    const reportRoute = 'app/api/pontos/relatorio/route.ts';
    const payrollRoute = 'app/api/folha/horas-extras/route.ts';
    const teacherRoute = 'app/api/professores/route.ts';
    assert.equal((await call(companyRoute, 'PATCH', {}, 'missing')).status, 401);
    assert.equal((await call(teacherRoute, 'POST', {})).status, 401);
    assert.equal((await call(payrollRoute, 'GET')).status, 401);
    const hash = await load('lib/student-password.ts').hashPassword('Teste123');
    await db.query('insert into public."Professor" (id,nome,email,"senhaHash") values ($1,$2,$3,$4)', ['teacher', 'Professora', 'teacher@example.com', hash]);
    await db.exec(`insert into public."Turma" (id,nome) values ('turma','Turma'); insert into public."Aluno" (id,nome,matricula,"turmaId") values ('aluno-a','Aluno A','A','turma'), ('aluno-b','Aluno B','B','turma');
      insert into public."Empresa" (id,"ownerId","razaoSocial",cnpj) values ('empresa','aluno-a','Empresa','123');
      insert into public."Cargo" (id,"ownerId",codigo,titulo,"salarioBase","jornadaMensal") values ('cargo','aluno-a','C1','Cargo',2200,220);
      insert into public."Funcionario" (id,"ownerId",codigo,"empresaId",nome,cpf,"cargoId","salarioBase","dataAdmissao",sexo,"dataNascimento") values ('func','aluno-a','F1','empresa','Pessoa','123','cargo',2200,'2026-01-01','FEMININO','2000-01-01');`);
    await auth.startSession('aluno-b', 'aluno');
    const company = { razaoSocial: 'Empresa editada', cnpj: '456', nomeFantasia: 'Fantasia', cidadeUF: 'SP' };
    const job = { codigo: 'C2', titulo: 'Cargo editado', salarioBase: 2500, jornadaMensal: 200, adicionalInsalubridade: true, adicionalPericulosidade: false };
    assert.equal((await call(companyRoute, 'PATCH', company, 'empresa')).status, 404);
    assert.equal((await call(employeeRoute, 'GET', null, 'func')).status, 404);
    assert.equal((await call(jobRoute, 'PATCH', job, 'cargo')).status, 404);
    assert.equal((await call(employeeRoute, 'PATCH', { sexo: 'FEMININO', dataNascimento: '2000-01-01', pcd: true }, 'func')).status, 404);
    assert.equal((await call(reportRoute, 'GET', null, null, '?funcionarioId=func&inicio=2026-01-01')).status, 404);
    assert.equal((await call(teacherRoute, 'POST', { nome: 'Outro', email: 'other@example.com', senha: 'Teste123' })).status, 403);
    await auth.startSession('aluno-a', 'aluno');
    const details = await call(employeeRoute, 'GET', null, 'func');
    assert.equal(details.status, 200); assert.equal(details.data.cpf, '123'); assert.equal(details.data.empresa.id, 'empresa');
    const pointBody = { funcionarioId: 'func', data: '2026-04-01', entrada: '08:00', saidaAlmoco: '12:00', retornoAlmoco: '13:00', saida: '18:00', horasExtras: '99h' };
    const automaticPoint = await call('app/api/pontos/route.ts', 'POST', pointBody);
    assert.equal(automaticPoint.status, 201); assert.equal(automaticPoint.data.horasExtras, '1h 00min');
    const regularPoint = await call('app/api/pontos/route.ts', 'POST', { ...pointBody, data: '2026-04-02', saida: '17:00' });
    assert.equal(regularPoint.status, 201); assert.equal(regularPoint.data.horasExtras, '0h 00min');
    assert.equal((await call('app/api/pontos/route.ts', 'POST', { ...pointBody, retornoAlmoco: '11:00' })).status, 400);
    assert.equal((await call('app/api/pontos/route.ts', 'POST', { ...pointBody, saidaAlmoco: '' })).status, 400);
    assert.equal((await call(companyRoute, 'PATCH', company, 'empresa')).status, 200);
    await db.exec(`insert into public."Cargo" (id,"ownerId",codigo,titulo,"salarioBase","jornadaMensal") values ('other-cargo','aluno-a','OTHER','Outro cargo',3100,220);
      insert into public."Funcionario" (id,"ownerId",codigo,"empresaId",nome,cpf,"cargoId","salarioBase","dataAdmissao") values
      ('linked','aluno-a','F2','empresa','Outro vinculado','222','cargo',2200,'2026-01-01'),
      ('other-job','aluno-a','F3','empresa','Outro cargo','333','other-cargo',3100,'2026-01-01'),
      ('other-owner','aluno-b','F4','empresa','Outro ambiente','444','cargo',3200,'2026-01-01');`);
    assert.equal((await call(jobRoute, 'PATCH', job, 'cargo')).status, 200);
    assert.equal((await db.query('select "salarioBase" from public."Funcionario" where id = $1',['func'])).rows[0].salarioBase,2500);
    assert.equal((await db.query('select "salarioBase" from public."Funcionario" where id = $1',['linked'])).rows[0].salarioBase,2500);
    assert.equal((await db.query('select "salarioBase" from public."Funcionario" where id = $1',['other-job'])).rows[0].salarioBase,3100);
    assert.equal((await db.query('select "salarioBase" from public."Funcionario" where id = $1',['other-owner'])).rows[0].salarioBase,3200);
    assert.equal((await call(jobRoute, 'PATCH', { ...job, salarioBase: -1 }, 'cargo')).status, 400);
    assert.equal((await db.query('select "empresaId","cargoId","salarioBase" from public."Funcionario" where id = $1', ['func'])).rows[0].cargoId, 'cargo');
    const demographics = { sexo: 'FEMININO', dataNascimento: '2000-01-01', observacoes: 'Observação persistida', pcd: true };
    const changed = await call(employeeRoute, 'PATCH', demographics, 'func');
    assert.equal(changed.status, 200); assert.equal(changed.data.pcd, true); assert.equal(changed.data.observacoes, demographics.observacoes);
    assert.equal((await call(employeeRoute, 'PATCH', { ...demographics, pcd: 'Sim' }, 'func')).status, 400);
    for (const [id, date, extras] of [['p1','2026-01-01','1h30min'],['p2','2026-01-30','0.5h'],['fora','2026-01-31','2h']]) {
      await db.query('insert into public."RegistroPonto" (id,"funcionarioId",data,entrada,"saidaAlmoco","retornoAlmoco",saida,"horasExtras") values ($1,$2,$3,$4,$5,$6,$7,$8)', [id, 'func', date, '08:00', '12:00', '13:00', '18:00', extras]);
    }
    const report = await call(reportRoute, 'GET', null, null, '?funcionarioId=func&inicio=2026-01-01');
    assert.equal(report.status, 200); assert.equal(report.data.dias.length, 30); assert.equal(report.data.totalMinutos, 1080); assert.equal(report.data.totalExtras, 120); assert.equal(report.data.dias[1].pontos.length, 0);
    assert.equal(report.data.funcionario.empresa.id,'empresa'); assert.equal(report.data.funcionario.cargo.id,'cargo'); assert.equal(report.data.funcionario.cpf,'123');
    assert.equal((await call(reportRoute, 'GET', null, null, '?funcionarioId=func&inicio=2026-02-30')).status, 400);
    const preview = await call(payrollRoute, 'GET', null, null, '?funcionarioId=func&inicio=2026-01-01');
    assert.equal(preview.status, 200); assert.equal(preview.data.minutos, 120); assert.equal(preview.data.valor, 34.09);
    assert.equal(preview.data.item.codigoEvento, '0006'); assert.equal(preview.data.item.valorCalculado, 34.09);
    assert.equal((await call(employeeRoute, 'PATCH', { observacoes: 'Somente observações' }, 'func')).status, 200);
    missingTables.add('LancamentoHoraExtra');
    const legacyPreview = await call(payrollRoute, 'GET', null, null, '?funcionarioId=func&inicio=2026-01-01');
    assert.equal(legacyPreview.status, 200); assert.equal(legacyPreview.data.persistenciaDisponivel, false); assert.equal(legacyPreview.data.item.valorCalculado, 34.09);
    assert.equal((await call(payrollRoute, 'POST', { funcionarioId: 'func', inicio: '2026-01-01', fingerprint: legacyPreview.data.fingerprint })).status, 503);
    missingTables.clear();
    const confirmation = { funcionarioId: 'func', inicio: '2026-01-01', fingerprint: preview.data.fingerprint };
    assert.equal((await call(payrollRoute, 'POST', { ...confirmation, fingerprint: 'fake' })).status, 409);
    const saved = await call(payrollRoute, 'POST', confirmation);
    assert.equal(saved.status, 201); assert.equal(saved.data.item.valorCalculado, 34.09); assert.ok(saved.data.existente.folhaId);
    assert.equal((await call(payrollRoute, 'POST', confirmation)).status, 409);
    const overlapping = await call(payrollRoute, 'GET', null, null, '?funcionarioId=func&inicio=2026-01-02');
    assert.equal(overlapping.data.bloqueado, true);
    assert.equal((await call(payrollRoute, 'POST', { ...confirmation, inicio: '2026-01-02', fingerprint: overlapping.data.fingerprint })).status, 409);
    const rows = async sql => (await db.query(sql)).rows;
    assert.equal((await rows('select count(*)::int as n from public."LancamentoHoraExtraPonto"'))[0].n, 2);
    assert.equal((await rows('select "totalProventos" from public."FolhaPagamento"'))[0].totalProventos, 2534.09);
    await assert.rejects(db.query('delete from public."RegistroPonto" where id = $1', ['p1']), error => ['23503', '23001'].includes(error.code));
    await assert.rejects(db.query('update public."RegistroPonto" set "horasExtras" = $1 where id = $2', ['3h','p1']), { code: 'P0001' });
    // Tenta repetir por RPC diretamente: o erro deve desfazer folha, evento e lançamento inteiros.
    const before = (await rows('select count(*)::int as n from public."FolhaPagamento"'))[0].n;
    const duplicate = await adapter.rpc('confirmar_horas_extras', { p_owner: 'aluno-a', p_funcionario: 'func', p_inicio: '2026-01-02', p_salario: 2500, p_pontos: [{ id: 'p2', horasExtras: '0.5h', minutos: 30 }, { id: 'fora', horasExtras: '2h', minutos: 120 }] });
    assert.equal(duplicate.error.code, '23505');
    assert.equal((await rows('select count(*)::int as n from public."FolhaPagamento"'))[0].n, before);
    await auth.startSession('teacher', 'professor');
    assert.equal((await call(employeeRoute, 'GET', null, 'func')).status, 200);
    const teacherEdit = await call(employeeRoute, 'PATCH', { ...demographics, observacoes: 'Revisado pela professora', pcd: false }, 'func');
    assert.equal(teacherEdit.status, 200); assert.equal(teacherEdit.data.pcd, false);
    const previousSession = cookieJar.get('talentlab_session');
    assert.equal((await call(teacherRoute, 'POST', { nome: '', email: 'bad', senha: '1' })).status, 400);
    const teacher = await call(teacherRoute, 'POST', { nome: 'Professor novo', email: 'NEW@EXAMPLE.COM', senha: 'Teste123' });
    assert.equal(teacher.status, 201); assert.equal(teacher.data.email, 'new@example.com'); assert.equal('senhaHash' in teacher.data, false);
    assert.equal(cookieJar.get('talentlab_session'), previousSession);
    assert.equal((await auth.sessionUser()).id, 'teacher');
    assert.equal((await call(teacherRoute, 'POST', { nome: 'Duplicado', email: 'new@example.com', senha: 'Teste123' })).status, 409);
    const logged = await call('app/api/auth/professor/route.ts', 'POST', { email: 'new@example.com', senha: 'Teste123', mode: 'login' });
    assert.equal(logged.status, 200); assert.equal((await auth.sessionUser()).id, teacher.data.id);
    for (const role of ['anon', 'authenticated']) {
      await db.exec('set role ' + role);
      await assert.rejects(db.query('select * from public."LancamentoHoraExtra"'), { code: '42501' });
      await assert.rejects(db.query("select public.confirmar_horas_extras('aluno-a','func','2026-01-01',2200,'[]')"), { code: '42501' });
      await db.exec('reset role');
    }
  } finally { await db.close(); }
});
