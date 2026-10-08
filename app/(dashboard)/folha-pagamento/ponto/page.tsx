'use client';

import TimeReport from '@/components/time-report';
import Link from 'next/link';
import { dailyOvertimeMinutes, formatMinutes } from '@/lib/time-report';
import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableHeader, TableBody } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Clock, Plus, Trash2 } from 'lucide-react';

interface FuncionarioAPI {
  id: string;
  nome: string;
}

interface RegistroPonto {
  id: string;
  funcionario: FuncionarioAPI;
  data: string;
  entrada: string;
  saidaAlmoco: string;
  retornoAlmoco: string;
  saida: string;
  horasExtras: string;
  status: 'REGULAR' | 'ATRASO';
}

export default function PontoPage() {
  const [pontos, setPontos] = useState<RegistroPonto[]>([]);
  const [funcionarios, setFuncionarios] = useState<FuncionarioAPI[]>([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [folhaHref, setFolhaHref] = useState('');

  const [form, setForm] = useState({
    funcionarioId: '',
    data: '',
    entrada: '08:00',
    saidaAlmoco: '12:00',
    retornoAlmoco: '13:00',
    saida: '18:00',
  });
  const extrasCalculadas = dailyOvertimeMinutes(form);

  async function carregarDados() {
    setLoading(true);
    try {
      const [resPontos, resFunc] = await Promise.all([
        fetch('/api/pontos'),
        fetch('/api/funcionarios'),
      ]);
      const [dataPontos, dataFunc] = await Promise.all([resPontos.json(), resFunc.json()]);
      if (!resPontos.ok || !resFunc.ok) throw new Error('Erro ao carregar os dados.');
      setPontos(dataPontos);
      setFuncionarios(dataFunc);
      setForm((prev) => ({ ...prev, funcionarioId: prev.funcionarioId || dataFunc[0]?.id || '' }));
    } catch {
      setErro('Não foi possível carregar os dados.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    carregarDados();
  }, []);

  const handleRegistrar = async () => {
    if (!form.funcionarioId || !form.data) { setErro('Selecione o funcionário e a data antes de registrar o ponto.'); return; }
    if (saving) return;
    setSaving(true);
    setErro(null);
    try {
      const res = await fetch('/api/pontos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        setErro(data.error || 'Erro ao registrar ponto.');
        return;
      }
      const novo: RegistroPonto = await res.json();
      setPontos((prev) => [novo, ...prev]);
      const inicio = new Date(new Date(form.data).getTime() - 29 * 86400000).toISOString().slice(0,10);
      setFolhaHref('/folha-pagamento/calcular?' + new URLSearchParams({ funcionarioId: form.funcionarioId, inicio }));
      setForm({ funcionarioId: form.funcionarioId, data: '', entrada: '08:00', saidaAlmoco: '12:00', retornoAlmoco: '13:00', saida: '18:00' });
    } catch {
      setErro('Erro de conexão com o servidor.');
    } finally { setSaving(false); }
  };

  const handleApagar = async (id: string, nome: string) => {
    if (!confirm(`Tem certeza que deseja apagar o registro de ponto de "${nome}" para sempre?`)) return;

    setErro(null);
    try {
      const res = await fetch(`/api/pontos/${id}`, { method: 'DELETE' });
      if (!res.ok) {
        const data = await res.json();
        setErro(data.error || 'Erro ao apagar registro de ponto.');
        return;
      }
      setPontos((prev) => prev.filter((p) => p.id !== id));
    } catch {
      setErro('Erro de conexão com o servidor.');
    }
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-200 pb-5">
        <h1 className="text-2xl font-bold text-slate-900">Espelho de Ponto Diário</h1>
        <p className="text-sm text-slate-500">
          Horas extras calculadas acima de 8 horas trabalhadas, descontando o intervalo informado.
        </p>
      </div>

      {erro && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm p-3 rounded-lg">{erro}</div>
      )}
      {folhaHref && <p role="status" className="text-sm text-slate-700">Ponto registrado. <Link href={folhaHref} className="text-red-600 font-semibold">Ver na simulação da folha e no holerite</Link></p>}

      <Card>
        <h2 className="text-sm font-bold text-slate-700 mb-4 flex items-center gap-2">
          <Clock className="h-4 w-4 text-red-600" /> Registrar ponto
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          <label className="text-xs text-slate-600">Funcionário<select
            value={form.funcionarioId}
            onChange={(e) => setForm({ ...form, funcionarioId: e.target.value })}
            className="block w-full text-xs p-2.5 rounded-lg border border-slate-300"
          >
            {funcionarios.map((f) => (
              <option key={f.id} value={f.id}>{f.nome}</option>
            ))}
          </select></label>
          <label className="text-xs text-slate-600">Data<input
            type="date"
            value={form.data}
            onChange={(e) => setForm({ ...form, data: e.target.value })}
            aria-label="Data do ponto"
            className="block w-full text-xs p-2.5 rounded-lg border border-slate-300"
          /></label>
          <label className="text-xs text-slate-600">Entrada<input
            type="time"
            value={form.entrada}
            aria-label="Entrada"
            onChange={(e) => setForm({ ...form, entrada: e.target.value })}
            className="block w-full text-xs p-2.5 rounded-lg border border-slate-300"
          /></label>
          <label className="text-xs text-slate-600">Início do intervalo<input aria-label="Saída para intervalo" type="time" value={form.saidaAlmoco} onChange={e => setForm({ ...form, saidaAlmoco: e.target.value })} className="block w-full text-xs p-2.5 rounded-lg border border-slate-300" /></label>
          <label className="text-xs text-slate-600">Fim do intervalo<input aria-label="Retorno do intervalo" type="time" value={form.retornoAlmoco} onChange={e => setForm({ ...form, retornoAlmoco: e.target.value })} className="block w-full text-xs p-2.5 rounded-lg border border-slate-300" /></label>
          <label className="text-xs text-slate-600">Saída<input
            type="time"
            value={form.saida}
            aria-label="Saída"
            onChange={(e) => setForm({ ...form, saida: e.target.value })}
            className="block w-full text-xs p-2.5 rounded-lg border border-slate-300"
          /></label>
          <label className="text-xs text-slate-600">Horas extras automáticas<input aria-label="Horas extras automáticas" readOnly value={extrasCalculadas === null ? 'Confira os horários' : formatMinutes(extrasCalculadas)} className="block w-full text-xs p-2.5 rounded-lg border border-slate-300" /></label>
          <Button size="sm" onClick={handleRegistrar} disabled={saving || funcionarios.length === 0}>
            <Plus className="h-4 w-4" /> {saving ? 'Registrando...' : 'Registrar Ponto'}
          </Button>
        </div>
      </Card>

      <TimeReport funcionarios={funcionarios} />

      {loading ? (
        <p className="text-sm text-slate-500">Carregando...</p>
      ) : (
        <Table>
          <TableHeader>
            <tr>
              <th className="p-3">Funcionário</th>
              <th className="p-3">Data</th>
              <th className="p-3">Entrada</th>
              <th className="p-3">Intervalo</th>
              <th className="p-3">Saída</th>
              <th className="p-3 text-center">H. Extras</th>
              <th className="p-3 text-center">Situação</th>
              <th className="p-3 text-center">Ação</th>
            </tr>
          </TableHeader>
          <TableBody>
            {pontos.map((p) => (
              <tr key={p.id}>
                <td className="p-3 font-semibold text-slate-800">{p.funcionario.nome}</td>
                <td className="p-3 text-xs text-slate-500">{new Date(p.data).toLocaleDateString('pt-BR')}</td>
                <td className="p-3 text-xs font-mono">{p.entrada}</td>
                <td className="p-3 text-xs font-mono">{p.saidaAlmoco} - {p.retornoAlmoco}</td>
                <td className="p-3 text-xs font-mono">{p.saida}</td>
                <td className="p-3 text-center font-bold text-xs text-red-600">{p.horasExtras}</td>
                <td className="p-3 text-center">
                  <Badge variant={p.status === 'REGULAR' ? 'emerald' : 'amber'}>{p.status}</Badge>
                </td>
                <td className="p-3 text-center">
                  <button
                    onClick={() => handleApagar(p.id, p.funcionario.nome)}
                    className="text-slate-400 hover:text-rose-600 transition-colors"
                    title="Apagar registro"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
