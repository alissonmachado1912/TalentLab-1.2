'use client';

import SaveWorkButton from '@/components/save-work-button';
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PieChart, Calculator } from 'lucide-react';

export default function CustosPage() {
  const [custosFixos, setCustosFixos] = useState(15000);
  const [mãoDeObra, setMãoDeObra] = useState(8500);
  const [materiaPrima, setMateriaPrima] = useState(12);
  const [quantidadeProduzida, setQuantidadeProduzida] = useState(1000);
  const [margemLucro, setMargemLucro] = useState(30);

  const custoTotal = custosFixos + mãoDeObra + (materiaPrima * quantidadeProduzida);
  const custoUnitario = custoTotal / (quantidadeProduzida || 1);
  const precoVendaSugerido = custoUnitario * (1 + margemLucro / 100);

  return (
    <div className="space-y-6">
      <SaveWorkButton tipo="custos" dados={{ custosFixos, maoDeObra: mãoDeObra, materiaPrima, quantidadeProduzida, margemLucro, custoTotal, custoUnitario, precoVendaSugerido }} />
      <div className="border-b border-slate-200 pb-5">
        <h1 className="text-2xl font-bold text-slate-900">Custos de Produção & Valor Unitário</h1>
        <p className="text-sm text-slate-500">
          Módulo de formação do preço de venda com base na mão de obra da folha e insumos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2 space-y-4">
          <h2 className="text-sm font-bold text-slate-700 flex items-center gap-2">
            <Calculator className="h-4 w-4 text-red-600" /> Parâmetros de Custo Industrial
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Custos Fixos da Fábrica (R$)</label>
              <input
                type="number"
                value={custosFixos}
                onChange={(e) => setCustosFixos(Number(e.target.value))}
                className="w-full text-sm p-2.5 rounded-lg border border-slate-300"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Total Mão de Obra (Folha + Encargos)</label>
              <input
                type="number"
                value={mãoDeObra}
                onChange={(e) => setMãoDeObra(Number(e.target.value))}
                className="w-full text-sm p-2.5 rounded-lg border border-slate-300"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Matéria Prima por Unidade (R$)</label>
              <input
                type="number"
                value={materiaPrima}
                onChange={(e) => setMateriaPrima(Number(e.target.value))}
                className="w-full text-sm p-2.5 rounded-lg border border-slate-300"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Lote/Quantidade Produzida</label>
              <input
                type="number"
                value={quantidadeProduzida}
                onChange={(e) => setQuantidadeProduzida(Number(e.target.value))}
                className="w-full text-sm p-2.5 rounded-lg border border-slate-300"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-slate-600 mb-1">Margem de Lucro Desejada (%)</label>
              <input
                type="number"
                value={margemLucro}
                onChange={(e) => setMargemLucro(Number(e.target.value))}
                className="w-full text-sm p-2.5 rounded-lg border border-slate-300"
              />
            </div>
          </div>
        </Card>

        <Card className="bg-slate-900 text-white flex flex-col justify-between">
          <div>
            <h2 className="text-sm font-bold text-slate-200 mb-4 flex items-center gap-2">
              <PieChart className="h-4 w-4 text-red-400" /> Resultados Apurados
            </h2>

            <div className="space-y-4">
              <div>
                <span className="text-xs text-slate-400 block">Custo Total de Produção</span>
                <span className="text-xl font-bold text-red-400">R$ {custoTotal.toFixed(2)}</span>
              </div>
              <div>
                <span className="text-xs text-slate-400 block">Custo Unitário do Produto</span>
                <span className="text-xl font-bold text-red-400">R$ {custoUnitario.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">Preço Sugerido de Venda</span>
            <span className="text-3xl font-black text-emerald-400">R$ {precoVendaSugerido.toFixed(2)}</span>
          </div>
        </Card>
      </div>
    </div>
  );
}