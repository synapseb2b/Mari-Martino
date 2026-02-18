"use client";

import { useState } from "react";
import { DollarSign, AlertTriangle } from "lucide-react";
import type { MaturityStage } from "./diagnostic-data";

interface CostCalculatorProps {
  stage: MaturityStage;
}

export function CostCalculator({ stage }: CostCalculatorProps) {
  const [sal, setSal] = useState("");
  const [days, setDays] = useState("");
  const [mult, setMult] = useState("2");

  const cost =
    sal && days
      ? ((parseFloat(sal) * 12) / 240) * parseFloat(mult) * parseFloat(days)
      : 0;

  return (
    <div className="bg-card border border-border rounded-[14px] p-7 mt-7">
      {/* Header */}
      <div className="flex items-center gap-2.5 mb-1.5">
        <div
          className="flex items-center justify-center w-8 h-8 rounded-lg"
          style={{ background: `${stage.color}15` }}
        >
          <DollarSign size={16} color={stage.color} />
        </div>
        <h4 className="font-sans text-base font-bold text-[#f1f5f9] m-0">
          Calculadora de Custo de Vac&acirc;ncia
        </h4>
      </div>
      <p className="font-sans text-[13px] text-[#94a3b8] leading-relaxed mb-6">
        Descubra quanto cada vaga aberta est&aacute; custando para sua empresa.
      </p>

      {/* Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div>
          <label className="block font-sans text-[11px] text-[#64748b] uppercase tracking-[0.06em] mb-1.5">
            Sal&aacute;rio mensal (R$)
          </label>
          <input
            type="number"
            value={sal}
            onChange={(e) => setSal(e.target.value)}
            placeholder="12.000"
            className="w-full px-3 py-2.5 bg-[#0A0F1E] border border-border rounded-lg text-[#f1f5f9] text-sm outline-none focus:border-primary transition-colors font-sans"
          />
        </div>
        <div>
          <label className="block font-sans text-[11px] text-[#64748b] uppercase tracking-[0.06em] mb-1.5">
            Dias em aberto
          </label>
          <input
            type="number"
            value={days}
            onChange={(e) => setDays(e.target.value)}
            placeholder="60"
            className="w-full px-3 py-2.5 bg-[#0A0F1E] border border-border rounded-lg text-[#f1f5f9] text-sm outline-none focus:border-primary transition-colors font-sans"
          />
        </div>
        <div>
          <label className="block font-sans text-[11px] text-[#64748b] uppercase tracking-[0.06em] mb-1.5">
            Impacto do cargo
          </label>
          <select
            value={mult}
            onChange={(e) => setMult(e.target.value)}
            className="w-full px-3 py-2.5 bg-[#0A0F1E] border border-border rounded-lg text-[#f1f5f9] font-sans text-sm outline-none focus:border-primary transition-colors"
          >
            <option value="1">Suporte (1x)</option>
            <option value="2">T&aacute;tico (2x)</option>
            <option value="3">Estrat&eacute;gico (3x)</option>
          </select>
        </div>
      </div>

      {/* Result */}
      {cost > 0 && (
        <div
          className="mt-6 p-5 rounded-[10px] text-center"
          style={{
            background: `${stage.color}10`,
            border: `1px solid ${stage.color}30`,
          }}
        >
          <div className="flex items-center justify-center gap-1.5 mb-1.5">
            <AlertTriangle size={14} color={stage.color} />
            <span className="font-sans text-[11px] text-[#94a3b8] uppercase tracking-[0.06em]">
              Custo estimado desta vac&acirc;ncia
            </span>
          </div>
          <div
            className="text-[34px] font-extrabold leading-tight"
            style={{ color: stage.color }}
          >
            R${" "}
            {cost.toLocaleString("pt-BR", { maximumFractionDigits: 0 })}
          </div>
          <div className="font-sans text-[11px] text-[#475569] mt-2.5">
            (Sal&aacute;rio Anual / 240 dias &uacute;teis) x Multiplicador x Dias em aberto
          </div>
        </div>
      )}
    </div>
  );
}
