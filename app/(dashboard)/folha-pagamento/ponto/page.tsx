'use client';

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

  const [form, setForm] = useState({
    funcionarioId: '',
    data: '',
    entrada: '08:00',
    saida: '18:00',
  });

  async function carregarDados() {
    setLoading(true);
    try {
      const [resPontos, resFunc] = await Promise.all([
        fetch('/api/pontos'),
        fetch('/api/funcionarios'),
      ]);
      const [dataPontos, dataFunc] = await Promise.all([resPontos.json(), resFunc.json()]);
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
    if (!form.funcionarioId || !form.data) return;
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
      setForm({ funcionarioId: form.funcionarioId, data: '', entrada: '08:00', saida: '18:00' });
    } catch {
      setErro('Erro de conexão com o servidor.');
    }
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
          Registros de frequência que calculam automaticamente horas extras e faltas no simulador da folha.
        </p>
      </div>

      {erro && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm p-3 rounded-lg">{erro}</div>
      )}

      <Card>
        <h2 className="text-sm font-bold text-slate-700 mb-4 flex items-center gap-2">
          <Clock className="h-4 w-4 text-red-600" /> Registrar Frequência
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          <select
            value={form.funcionarioId}
            onChange={(e) => setForm({ ...form, funcionarioId: e.target.value })}
            className="text-xs p-2.5 rounded-lg border border-slate-300"
          >
            {funcionarios.map((f) => (
              <option key={f.id} value={f.id}>{f.nome}</option>
            ))}
          </select>
          <input
            type="date"
            value={form.data}
            onChange={(e) => setForm({ ...form, data: e.target.value })}
            className="text-xs p-2.5 rounded-lg border border-slate-300"
          />
          <input
            type="time"
            value={form.entrada}
            onChange={(e) => setForm({ ...form, entrada: e.target.value })}
            className="text-xs p-2.5 rounded-lg border border-slate-300"
          />
          <input
            type="time"
            value={form.saida}
            onChange={(e) => setForm({ ...form, saida: e.target.value })}
            className="text-xs p-2.5 rounded-lg border border-slate-300"
          />
          <Button size="sm" onClick={handleRegistrar} disabled={funcionarios.length === 0}>
            <Plus className="h-4 w-4" /> Registrar Ponto
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