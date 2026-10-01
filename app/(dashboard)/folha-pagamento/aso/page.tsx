'use client';

import { useCallback, useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableHeader, TableBody } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { FileCheck, Plus } from 'lucide-react';
import ASOReportModal, { type ASOReport, formatASODate } from '@/components/aso-report-modal';
import CodeHelpButton from '@/components/code-help-button';

interface FuncionarioAPI {
  id: string;
  nome: string;
}

type RegistroASO = ASOReport;

export default function ASOPage() {
  const [report, setReport] = useState<RegistroASO | null>(null);
  const [emitting, setEmitting] = useState(false);
  const closeReport = useCallback(() => setReport(null), []);
  const [asos, setAsos] = useState<RegistroASO[]>([]);
  const [funcionarios, setFuncionarios] = useState<FuncionarioAPI[]>([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  const [form, setForm] = useState({
    funcionarioId: '',
    tipo: 'ADMISSIONAL',
    resultado: 'APTO',
    medico: '',
    data: '',
  });

  useEffect(() => {
    const controller = new AbortController();
    Promise.all([
      fetch('/api/asos', { signal: controller.signal }),
      fetch('/api/funcionarios', { signal: controller.signal }),
    ]).then(async ([resAsos, resFunc]) => {
      if (!resAsos.ok || !resFunc.ok) throw new Error('Erro ao carregar');
      const [dataAsos, dataFunc] = await Promise.all([resAsos.json(), resFunc.json()]);
      if (controller.signal.aborted) return;
      setAsos(dataAsos);
      setFuncionarios(dataFunc);
      setForm(prev => ({ ...prev, funcionarioId: prev.funcionarioId || dataFunc[0]?.id || '' }));
    }).catch(() => {
      if (!controller.signal.aborted) setErro('Não foi possível carregar os dados.');
    }).finally(() => {
      if (!controller.signal.aborted) setLoading(false);
    });
    return () => controller.abort();
  }, []);

  const handleEmitir = async () => {
    if (emitting) return;
    if (!form.funcionarioId || !form.medico.trim() || !form.data) { setErro('Preencha funcionário, médico e data para emitir a ASO.'); return; }
    setEmitting(true);
    setErro(null);
    try {
      const res = await fetch('/api/asos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        setErro(data.error || 'Erro ao emitir ASO.');
        return;
      }
      const novo: RegistroASO = await res.json();
      setAsos((prev) => [novo, ...prev]);
      setReport(novo);
      setForm({ funcionarioId: form.funcionarioId, tipo: 'ADMISSIONAL', resultado: 'APTO', medico: '', data: '' });
    } catch {
      setErro('Erro de conexão com o servidor.');
    } finally { setEmitting(false); }
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-200 pb-5">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Atestados de Saúde Ocupacional (ASO)</h1>
            <p className="text-sm text-slate-500">
              Documentação de medicina e segurança do trabalho conforme exigências regulatórias.
            </p>
          </div>
          <div className="pt-1">
            <CodeHelpButton title="Códigos ASO" items={asos.map((a) => ({ code: a.id.slice(0, 8), description: a.tipo }))} />
          </div>
        </div>
      </div>

      {report && <ASOReportModal report={report} onClose={closeReport} />}
      {erro && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm p-3 rounded-lg">{erro}</div>
      )}

      <Card>
        <h2 className="text-sm font-bold text-slate-700 mb-4 flex items-center gap-2">
          <FileCheck className="h-4 w-4 text-red-600" /> Emitir / Cadastrar Exame ASO
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <select
            value={form.funcionarioId}
            onChange={(e) => setForm({ ...form, funcionarioId: e.target.value })}
            className="text-xs p-2.5 rounded-lg border border-slate-300"
          >
            {funcionarios.map((f) => (
              <option key={f.id} value={f.id}>{f.nome}</option>
            ))}
          </select>
          <select
            value={form.tipo}
            onChange={(e) => setForm({ ...form, tipo: e.target.value })}
            className="text-xs p-2.5 rounded-lg border border-slate-300"
          >
            <option value="ADMISSIONAL">ADMISSIONAL</option>
            <option value="PERIODICO">PERIÓDICO</option>
            <option value="DEMISSIONAL">DEMISSIONAL</option>
            <option value="MUDANCA DE FUNCAO">MUDANÇA DE FUNÇÃO</option>
            <option value="RETORNO AO TRABALHO">RETORNO AO TRABALHO</option>
          </select>
          <input
            type="text"
            placeholder="CRM e Nome do Médico"
            value={form.medico}
            onChange={(e) => setForm({ ...form, medico: e.target.value })}
            className="text-xs p-2.5 rounded-lg border border-slate-300"
          />
          <input
            type="date"
            value={form.data}
            onChange={(e) => setForm({ ...form, data: e.target.value })}
            className="text-xs p-2.5 rounded-lg border border-slate-300"
          />
          <label className="text-xs font-semibold">Parecer final
            <select value={form.resultado} onChange={e => setForm({ ...form, resultado: e.target.value })} className="block w-full mt-1">
              <option value="APTO">Apto</option><option value="INAPTO">Inapto</option>
            </select>
          </label>
          <Button size="sm" onClick={handleEmitir} disabled={loading || emitting || funcionarios.length === 0} className="md:col-span-4 md:w-fit">
            <Plus className="h-4 w-4" /> {emitting ? 'Emitindo...' : 'Emitir ASO'}
          </Button>
        </div>
      </Card>

      {loading ? (
        <p className="text-sm text-slate-500">Carregando...</p>
      ) : (
        <Table>
          <TableHeader>
            <tr>
              <th className="p-3">Funcionário</th>
              <th className="p-3">Tipo do Exame</th>
              <th className="p-3">Médico Responsável</th>
              <th className="p-3">Data</th>
              <th className="p-3 text-center">Parecer Final</th>
              <th className="p-3">Relatório</th>
            </tr>
          </TableHeader>
          <TableBody>
            {asos.map((a) => (
              <tr key={a.id}>
                <td className="p-3 font-semibold text-slate-800">{a.funcionario.nome}</td>
                <td className="p-3 text-xs">{a.tipo}</td>
                <td className="p-3 text-xs text-slate-500">{a.medico}</td>
                <td className="p-3 text-xs text-slate-500">{formatASODate(a.data)}</td>
                <td className="p-3 text-center">
                  <Badge variant={a.resultado === 'APTO' ? 'emerald' : 'rose'}>{a.resultado}</Badge>
                </td>
                <td className="p-3"><Button size="sm" variant="outline" onClick={() => setReport(a)}>Ver relatório</Button></td>
              </tr>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}