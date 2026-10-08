/* eslint-disable @typescript-eslint/no-require-imports */
// Executar após npm run build: node tests/requisitos-ui.cjs
// Todas as chamadas /api são interceptadas: não acessa nem modifica banco real.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawn } = require('node:child_process');

const base = 'http://127.0.0.1:3100';
const debugPort = 9338;
const browserPath = ['C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', 'C:/Program Files/Google/Chrome/Application/chrome.exe'].find(p => fs.existsSync(p));
if (!browserPath) throw new Error('Edge ou Chrome não encontrado para o teste local.');
const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'talentlab-ui-'));
const server = spawn(process.execPath, [path.resolve(__dirname, '../node_modules/next/dist/bin/next'), 'start', '--port', '3100'], { windowsHide: true, stdio: ['ignore', 'ignore', 'pipe'], cwd: path.resolve(__dirname, '..') });
let serverError = '';
server.stderr.on('data', chunk => { serverError += chunk.toString(); });
const browser = spawn(browserPath, ['--headless=new', '--disable-gpu', '--no-first-run', '--no-default-browser-check', '--remote-debugging-port=' + debugPort, '--user-data-dir=' + profile, 'about:blank'], { windowsHide: true, stdio: 'ignore' });
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
let socket;
let nextId = 0;
const pending = new Map();
const errors = [];
function send(method, params = {}) {
  const id = ++nextId;
  return new Promise((resolve, reject) => { pending.set(id, { resolve, reject }); socket.send(JSON.stringify({ id, method, params })); });
}
async function evaluate(expression) {
  const result = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.text);
  return result.result.value;
}
async function until(expression, label) {
  for (let i = 0; i < 100; i++) { if (await evaluate(expression)) return; await delay(100); }
  throw new Error('Não ocorreu: ' + label);
}
async function clickText(text) {
  assert.equal(await evaluate(`(() => { const button = [...document.querySelectorAll('button')].find(b => b.textContent.trim() === ${JSON.stringify(text)}); if (!button || button.disabled) return false; button.click(); return true; })()`), true, text + ' disponível');
}
async function input(selector, value, kind = 'input') {
  await evaluate(`(() => { const el = document.querySelector(${JSON.stringify(selector)}); const setter = Object.getOwnPropertyDescriptor(${kind === 'select' ? 'HTMLSelectElement' : kind === 'textarea' ? 'HTMLTextAreaElement' : 'HTMLInputElement'}.prototype, 'value').set; setter.call(el, ${JSON.stringify(value)}); el.dispatchEvent(new Event('input', { bubbles: true })); el.dispatchEvent(new Event('change', { bubbles: true })); })()`);
}
const now = new Date();
const inicio = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2,'0')}-01`;
const empresa = { id: 'e1', razaoSocial: 'Empresa teste', nomeFantasia: '', cnpj: '123', cidadeUF: 'SP', setoresCount: 0, funcionariosCount: 2 };
const cargo = { id: 'c1', codigo: 'C1', titulo: 'Cargo teste', salarioBase: 2200, jornadaMensal: 220, adicionalInsalubridade: false, adicionalPericulosidade: false };
const funcionarios = [1,2].map(i => ({ id: 'f' + i, codigo: 'F' + i, nome: 'Funcionário teste ' + i, cpf: '123' + i, sexo: 'FEMININO', dataNascimento: '2000-01-01', observacoes: 'Observação teste', pcd: false, salarioBase: 2200, dependentes: 0, dataAdmissao: '2026-01-01', empresa, cargo }));
const pontos = [{ id: 'p1', funcionarioId: 'f1', data: inicio + 'T00:00:00Z', entrada: '08:00', saidaAlmoco: '12:00', retornoAlmoco: '13:00', saida: '18:00', horasExtras: '2h', status: 'REGULAR', funcionario: funcionarios[0] }];
const eventos = [{ codigo: '0006', nome: 'Hora Extra 50%', tipo: 'PROVENTO', percentualFixa: null, incideFGTS: true, descricaoDidatica: 'Horas extras registradas' }, { codigo: '0003', nome: 'Vale transporte', tipo: 'DESCONTO', percentualFixa: 6, incideFGTS: false, descricaoDidatica: 'Vale transporte' }];
function api(url, method, body) {
  const pathname = url.pathname;
  if (pathname === '/api/auth/session') return { id: 'professor', role: 'professor', name: 'Professor teste', identifier: 'teste@example.com' };
  if (pathname === '/api/notificacoes') return [];
  if (pathname === '/api/empresas') return [empresa];
  if (pathname === '/api/cargos') return [cargo];
  if (pathname === '/api/funcionarios') return funcionarios;
  if (pathname.startsWith('/api/funcionarios/')) {
    const employee = funcionarios.find(f => f.id === pathname.split('/').pop());
    if (method === 'PATCH') Object.assign(employee, body);
    return employee;
  }
  if (pathname.startsWith('/api/empresas/')) { Object.assign(empresa, body); return empresa; }
  if (pathname.startsWith('/api/cargos/')) { Object.assign(cargo, body, { salarioBase: Number(body.salarioBase), jornadaMensal: Number(body.jornadaMensal) }); return cargo; }
  if (pathname === '/api/eventos-folha') return eventos;
  if (pathname === '/api/pontos') {
    if (method === 'POST') { const employee = funcionarios.find(f => f.id === body.funcionarioId); const minutes = time => Number(time.split(':')[0]) * 60 + Number(time.split(':')[1]); const extras = Math.max(0, minutes(body.saida) - minutes(body.entrada) - (minutes(body.retornoAlmoco) - minutes(body.saidaAlmoco)) - 480); const point = { ...body, horasExtras: extras / 60 + 'h', id: 'p' + (pontos.length + 1), funcionario: employee, data: body.data + 'T00:00:00Z', status: 'REGULAR' }; pontos.push(point); return point; }
    return pontos;
  }
  if (pathname === '/api/pontos/relatorio') {
    const employee = funcionarios.find(f => f.id === url.searchParams.get('funcionarioId'));
    const start = url.searchParams.get('inicio');
    const minutes = value => Number(value.split(':')[0]) * 60 + Number(value.split(':')[1]);
    const days = Array.from({ length: 30 }, (_,i) => {
      const data = new Date(new Date(start).getTime() + i * 86400000).toISOString().slice(0,10);
      const records = pontos.filter(p => p.funcionarioId === employee.id && p.data.slice(0,10) === data);
      return { data, pontos: records, minutosTrabalhados: records.reduce((sum,p) => sum + minutes(p.saida) - minutes(p.entrada) - (minutes(p.retornoAlmoco) - minutes(p.saidaAlmoco)),0) };
    });
    return { funcionario: employee, inicio: start, fim: days[29].data, dias: days, totalMinutos: days.reduce((sum,d) => sum+d.minutosTrabalhados,0), totalExtras: days.reduce((sum,d) => sum+d.pontos.reduce((n,p)=>n+Number(p.horasExtras.replace('h',''))*60,0),0), registrosInvalidos:0 };
  }
  if (pathname === '/api/folha/horas-extras') {
    const employeeId = url.searchParams.get('funcionarioId'); const start = url.searchParams.get('inicio');
    const end = new Date(new Date(start).getTime() + 29 * 86400000).toISOString().slice(0,10);
    const points = pontos.filter(p => p.funcionarioId === employeeId && p.data.slice(0,10) >= start && p.data.slice(0,10) <= end);
    const horas = points.reduce((sum,p) => sum + Number(p.horasExtras.replace('h','')), 0);
    return { inicio: start, fim: end, minutos: horas * 60, valor: horas * 15, fingerprint: 'teste', bloqueado: false, persistenciaDisponivel: false, nomeEvento: 'Hora Extra 50%', existente: null, pontos: points, item: horas ? { codigoEvento: '0006', tipo: 'PROVENTO', referencia: horas + 'h', valorCalculado: horas * 15, memoriaCalculo: horas + 'h x (R$ 10.00 + 50%)' } : null };
  }
  throw new Error('Endpoint de teste não previsto: ' + pathname);
}
(async () => {
  try {
    let started = false;
    for (let i = 0; i < 30; i++) { if (server.exitCode !== null) throw new Error('Servidor não iniciou: ' + serverError); try { if ((await fetch(base, { signal: AbortSignal.timeout(500) })).ok) { started = true; break; } } catch {} await delay(100); }
    if (!started) throw new Error('Servidor local indisponível. ' + serverError);
    let tabs;
    for (let i = 0; i < 30; i++) { if (browser.exitCode !== null) throw new Error('Navegador não iniciou.'); try { tabs = await (await fetch(`http://127.0.0.1:${debugPort}/json`, { signal: AbortSignal.timeout(500) })).json(); if (tabs.some(t => t.type === 'page')) break; } catch {} await delay(100); }
    if (!tabs) throw new Error('Navegador local indisponível.');
    const tab = tabs.find(t => t.type === 'page');
    socket = new WebSocket(tab.webSocketDebuggerUrl);
    await new Promise((resolve,reject) => { socket.addEventListener('open',resolve,{once:true}); socket.addEventListener('error',reject,{once:true}); });
    socket.addEventListener('message', async event => {
      const message = JSON.parse(event.data);
      if (message.id) { const waiter = pending.get(message.id); pending.delete(message.id); if (message.error) waiter?.reject(message.error); else waiter?.resolve(message.result); return; }
      if (message.method === 'Runtime.exceptionThrown') errors.push(message.params.exceptionDetails.exception?.description || message.params.exceptionDetails.text);
      if (message.method !== 'Fetch.requestPaused') return;
      const { requestId, request } = message.params;
      try {
        const payload = api(new URL(request.url), request.method, request.postData ? JSON.parse(request.postData) : {});
        await send('Fetch.fulfillRequest', { requestId, responseCode: 200, responseHeaders: [{name:'Content-Type',value:'application/json'}], body: Buffer.from(JSON.stringify(payload)).toString('base64') });
      } catch(error) { errors.push(error.message); await send('Fetch.failRequest', { requestId, errorReason: 'Failed' }); }
    });
    await send('Runtime.enable'); await send('Page.enable');
    await send('Emulation.setDeviceMetricsOverride',{width:1280,height:720,deviceScaleFactor:1,mobile:false});
    await send('Fetch.enable', { patterns: [{ urlPattern: base + '/api/*' }] });
    async function navigate(url, text) { await send('Page.navigate',{url:base + url}); await until(`document.body.innerText.includes(${JSON.stringify(text)})`, text); }
    await navigate('/cadastros/funcionarios', 'Dados pessoais');
    await evaluate("document.querySelector('main').scrollTop = document.querySelector('main').scrollHeight");
    await clickText('Dados pessoais');
    await until("document.body.innerText.includes('Dados pessoais de Funcionário teste 1') && !document.body.innerText.includes('Consultando os dados')", 'consulta do funcionário');
    assert.equal(await evaluate("(() => { const f = document.querySelector('form'); const r=f.getBoundingClientRect(); return r.top >= 0 && r.top < 720 && f.textContent.includes('Empresa teste') && f.textContent.includes('Cargo teste'); })()"), true, 'formulário visível no contêiner rolável');
    await input('form textarea','Observação editada','textarea'); await clickText('Salvar');
    await until("!document.body.innerText.includes('Dados pessoais de Funcionário teste 1')", 'salvar os dados pessoais');
    assert.equal(funcionarios[0].observacoes,'Observação editada');
    await navigate('/cadastros/empresas','Cadastro de Empresas');
    await until("!!document.querySelector('[aria-label=\"Editar empresa\"]')", 'lista de empresas');
    await evaluate("document.querySelector('[aria-label=\"Editar empresa\"]').click()");
    await until("document.body.innerText.includes('Salvar alterações')",'editar empresa');
    await clickText('Salvar alterações');
    await until("!document.body.innerText.includes('Cancelar edição')",'salvar empresa');
    await navigate('/cadastros/cargos','Cadastro de Cargos');
    await until("!!document.querySelector('[aria-label=\"Editar cargo\"]')", 'lista de cargos');
    await evaluate("document.querySelector('[aria-label=\"Editar cargo\"]').click()");
    await until("document.body.innerText.includes('Salvar alterações')",'editar cargo');
    await clickText('Salvar alterações');
    await until("!document.body.innerText.includes('Cancelar edição')",'salvar cargo');
    await navigate('/folha-pagamento/calcular','Simulador da Folha');
    await until("document.body.innerText.includes('Horas extras incluídas automaticamente')",'extras automáticas');
    assert.equal(await evaluate("[...document.querySelectorAll('tbody tr')].filter(r => r.textContent.includes('0006')).length"),1);
    await clickText('Gerar Holerite');
    await until("document.body.innerText.includes('Recibo de Pagamento de Salário')",'holerite');
    assert.equal(await evaluate("[...document.querySelectorAll('h3')].find(h=>h.textContent.includes('Recibo')).parentElement.parentElement.textContent.includes('30.00')"),true);
    await evaluate("[...document.querySelectorAll('h3')].find(h=>h.textContent.includes('Recibo')).parentElement.querySelector('button:last-child').click()");
    await until("!document.body.innerText.includes('Recibo de Pagamento de Salário')",'fechar holerite');
    await input('main select','f2','select');
    await until("document.body.innerText.includes('Nenhuma hora extra registrada')",'trocar funcionário');
    assert.equal(await evaluate("[...document.querySelectorAll('tbody tr')].filter(r=>r.textContent.includes('0006')).length"),0);
    await navigate('/folha-pagamento/ponto','Registrar Ponto');
    await clickText('Registrar Ponto');
    await until("document.body.innerText.includes('Selecione o funcionário e a data')", 'validação visível do botão de ponto');
    await input('input[type=date]',inicio);
    assert.equal(await evaluate("document.querySelector('input[aria-label=\"Horas extras automáticas\"]').readOnly"), true);
    await input('input[aria-label="Saída"]','17:00');
    await until("document.querySelector('input[aria-label=\"Horas extras automáticas\"]').value === '0h 00min'", 'jornada regular de oito horas');
    await input('input[aria-label="Saída"]','18:00');
    await until("document.querySelector('input[aria-label=\"Horas extras automáticas\"]').value === '1h 00min'", 'hora extra calculada sem digitação');
    await clickText('Registrar Ponto');
    await until("[...document.querySelectorAll('tbody tr')].some(r=>r.textContent.includes('1h'))", 'registrar ponto');
    await clickText('Gerar relatório');
    await until("!!document.querySelector('#time-report-modal')", 'relatório de ponto em janela');
    assert.equal(await evaluate("document.querySelector('.time-sheet').textContent.includes('Empresa teste') && document.querySelector('.time-sheet').textContent.includes('Funcionário teste 1')"),true);
    assert.equal(await evaluate("document.querySelectorAll('.time-sheet tbody tr').length"),31);
    assert.equal(await evaluate("document.querySelector('.time-sheet').textContent.includes('Total de horas extras: 3h 00min')"),true);
    await evaluate('window.print = () => { window.__timePrintRequested = true; }');
    await clickText('Imprimir / Salvar PDF');
    assert.equal(await evaluate('window.__timePrintRequested'),true);
    const screenshot = await send('Page.captureScreenshot');
    fs.writeFileSync(path.resolve(__dirname,'../.next/time-report-test.png'),Buffer.from(screenshot.data,'base64'));
    await send('Emulation.setEmulatedMedia',{media:'print'});
    assert.equal(await evaluate("getComputedStyle(document.querySelector('.time-toolbar')).display === 'none' && document.querySelector('main').getClientRects().length === 0"),true);
    const pdf = await send('Page.printToPDF',{printBackground:true,preferCSSPageSize:true});
    const pdfBytes = Buffer.from(pdf.data,'base64'); assert.equal(pdfBytes.subarray(0,4).toString(),'%PDF');
    fs.writeFileSync(path.resolve(__dirname,'../.next/time-report-test.pdf'),pdfBytes);
    await send('Emulation.setEmulatedMedia',{media:''});
    await send('Input.dispatchKeyEvent',{type:'keyDown',key:'Escape',code:'Escape',windowsVirtualKeyCode:27});
    await send('Input.dispatchKeyEvent',{type:'keyUp',key:'Escape',code:'Escape',windowsVirtualKeyCode:27});
    await until("!document.querySelector('#time-report-modal')",'fechar relatório pelo teclado');
    await evaluate("document.querySelector('a[href*=\"funcionarioId\"]').click()");
    await until("document.body.innerText.includes('Simulador da Folha')", 'link direto para a folha');
    await until("document.body.innerText.includes('Horas extras incluídas automaticamente')", 'ponto recém-registrado na folha');
    assert.equal(await evaluate("[...document.querySelectorAll('tbody tr')].find(r=>r.textContent.includes('0006')).textContent.includes('45.00')"),true);
    assert.equal(await evaluate("document.querySelector('main select').value"),'f1');
    assert.deepEqual(errors,[]);
    console.log('PASS: cliques em dados pessoais, salvar funcionário, editar/salvar empresa e cargo, registrar ponto, extras automáticas, holerite, fechar e trocar funcionário. Nenhum banco real acessado.');
  } finally { if (socket?.readyState === 1) { try { await send('Browser.close'); } catch {} socket.close(); } browser.kill(); server.kill(); }
})().catch(error => { console.error(error); process.exitCode=1; });
