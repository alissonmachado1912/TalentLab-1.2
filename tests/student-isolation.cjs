// Run against the local development server: node tests/student-isolation.cjs
require('dotenv').config({ quiet: true });
const assert = require('node:assert/strict');
const { PrismaClient } = require('../generated/prisma/client');
const { PrismaMariaDb } = require('@prisma/adapter-mariadb');
const db = new PrismaClient({ adapter: new PrismaMariaDb(process.env.DATABASE_URL) });
const base = 'http://localhost:3000';
const tag = 'isolation-' + Date.now();
const { scryptSync, randomBytes } = require('node:crypto');
const studentIds = [];
let professorId, turmaId, activityId;
async function call(path, cookie = '', method = 'GET', body) {
  const response = await fetch(base + path, { method, headers: { Cookie: cookie, 'Content-Type': 'application/json' }, ...(body ? { body: JSON.stringify(body) } : {}) });
  const data = await response.json();
  return { status: response.status, data, cookie: response.headers.get('set-cookie')?.split(';')[0] || '' };
}
(async () => {
  try {
    assert.equal((await call('/api/empresas')).status, 401);
    const salt = randomBytes(16).toString('hex');
    const fixture = await db.professor.create({ data: { nome: 'Professor teste', email: tag + '@teste.local', senhaHash: salt + ':' + scryptSync('TesteSeguro123', salt, 64).toString('hex') } });
    professorId = fixture.id;
    const teacher = await call('/api/auth/professor', '', 'POST', { mode: 'login', email: tag + '@teste.local', senha: 'TesteSeguro123' });
    assert.equal(teacher.status, 200); professorId = teacher.data.id;
    const turma = await call('/api/turmas', teacher.cookie, 'POST', { nome: tag });
    assert.equal(turma.status, 201); turmaId = turma.data.id;
    const users = [];
    for (const suffix of ['A', 'B']) {
      const created = await call('/api/alunos', teacher.cookie, 'POST', { nome: tag + suffix, matricula: tag + suffix, turmaId, senha: 'TesteSeguro123' });
      assert.equal(created.status, 201); studentIds.push(created.data.id);
      const login = await call('/api/alunos/login', '', 'POST', { matricula: tag + suffix, senha: 'TesteSeguro123' });
      assert.equal(login.status, 200); users.push(login);
    }
    const [a,b] = users;
    assert.equal((await call('/api/auth/professor', b.cookie, 'POST', { mode: 'register', nome: 'Aluno disfarçado', email: tag + '-fake@teste.local', senha: 'TesteSeguro123' })).status, 403);
    const empresa = await call('/api/empresas', a.cookie, 'POST', { razaoSocial: tag, cnpj: tag, ownerId: b.data.id });
    assert.equal(empresa.status, 201);
    assert.equal(empresa.data.ownerId, a.data.id);
    const cargo = await call('/api/cargos', a.cookie, 'POST', { codigo: tag, titulo: tag, salarioBase: 2000, jornadaMensal: 220 });
    assert.equal(cargo.status, 201);
    const otherEmpresa = await call('/api/empresas', b.cookie, 'POST', { razaoSocial: tag, cnpj: tag });
    assert.equal(otherEmpresa.status, 201, 'CNPJ can be repeated in different student environments');
    const otherCargo = await call('/api/cargos', b.cookie, 'POST', { codigo: tag, titulo: tag, salarioBase: 2000, jornadaMensal: 220 });
    assert.equal(otherCargo.status, 201, 'Cargo code can be repeated in different student environments');
    const employee = { codigo: tag, nome: tag, cpf: tag, empresaId: empresa.data.id, cargoId: cargo.data.id, salarioBase: 2000, dataAdmissao: '2026-09-24' };
    assert.equal((await call('/api/funcionarios', b.cookie, 'POST', employee)).status, 403);
    const funcionario = await call('/api/funcionarios', a.cookie, 'POST', employee);
    assert.equal(funcionario.status, 201);
    const pontoBody = { funcionarioId: funcionario.data.id, data: '2026-09-24', entrada: '08:00', saida: '17:00' };
    assert.equal((await call('/api/pontos', b.cookie, 'POST', pontoBody)).status, 403);
    const ponto = await call('/api/pontos', a.cookie, 'POST', pontoBody);
    assert.equal(ponto.status, 201);
    const asoBody = { funcionarioId: funcionario.data.id, tipo: 'Admissional', medico: 'Teste', data: '2026-09-24' };
    assert.equal((await call('/api/asos', b.cookie, 'POST', asoBody)).status, 403);
    assert.equal((await call('/api/asos', a.cookie, 'POST', asoBody)).status, 201);
    for (const path of ['/api/funcionarios', '/api/pontos', '/api/asos']) {
      assert.equal((await call(path + '?alunoId=' + a.data.id, b.cookie)).data.length, 0);
      assert.equal((await call(path, a.cookie)).data.length, 1);
    }
    assert.equal((await call('/api/empresas', b.cookie)).data.some(e => e.id === empresa.data.id), false);
    for (const [path,id] of [['empresas',empresa.data.id],['cargos',cargo.data.id],['funcionarios',funcionario.data.id],['pontos',ponto.data.id]]) {
      assert.notEqual((await call(`/api/${path}/${id}`, b.cookie, 'DELETE')).status, 200);
    }
    assert.equal((await call('/api/avaliacao?alunoId=' + a.data.id, b.cookie)).status, 403);
    assert.equal((await call('/api/alunos', b.cookie)).status, 403);
    assert.equal((await call('/api/turmas', b.cookie, 'POST', { nome: 'Forbidden' })).status, 403);
    assert.equal((await call('/api/eventos-folha', b.cookie, 'POST', {})).status, 403);
    const trabalho = await call('/api/trabalhos', a.cookie, 'POST', { alunoId: b.data.id, tipo: 'custos', dados: { custoTotal: 123 } });
    assert.equal(trabalho.status, 201); assert.equal(trabalho.data.alunoId, a.data.id);
    assert.equal((await call('/api/trabalhos', b.cookie)).data.length, 0);
    const activity = await call('/api/activities', teacher.cookie, 'POST', { type: 'pratica', title: tag, statement: tag, instructions: tag, mechanism: 'empresas', createdBy: tag, turmaId });
    assert.equal(activity.status, 201); activityId = activity.data.id;
    assert.equal((await call(`/api/activities/${activityId}/concluir`, a.cookie, 'POST', { alunoId: b.data.id })).status, 200);
    const reviewA = await call('/api/avaliacao?alunoId=' + a.data.id, teacher.cookie);
    assert.equal(reviewA.status, 200);
    for (const key of ['empresas','cargos','funcionarios','pontos','asos','trabalhos','conclusoes']) assert.equal(reviewA.data[key].length, 1, key);
    const reviewB = await call('/api/avaliacao?alunoId=' + b.data.id, teacher.cookie);
    assert.equal(reviewB.data.trabalhos.length, 0); assert.equal(reviewB.data.conclusoes.length, 0);
    await call('/api/auth/session', a.cookie, 'DELETE');
    assert.equal((await call('/api/empresas', a.cookie)).status, 401);
    console.log('PASS: login, isolation, repeated codes, related records, forged IDs, teacher consultation, saved work, activity identity and logout.');
  } finally {
    await db.sessao.deleteMany({ where: { userId: { in: [...studentIds, ...(professorId ? [professorId] : [])] } } });
    await db.trabalho.deleteMany({ where: { alunoId: { in: studentIds } } });
    await db.funcionario.deleteMany({ where: { ownerId: { in: studentIds } } });
    await db.cargo.deleteMany({ where: { ownerId: { in: studentIds } } });
    await db.empresa.deleteMany({ where: { ownerId: { in: studentIds } } });
    await db.notificacao.deleteMany({ where: { mensagem: { contains: tag } } });
    if (activityId) await db.activity.deleteMany({ where: { id: activityId } });
    if (turmaId) await db.turma.deleteMany({ where: { id: turmaId } });
    if (professorId) await db.professor.deleteMany({ where: { id: professorId } });
    await db.$disconnect();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
