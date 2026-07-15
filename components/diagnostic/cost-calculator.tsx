"use client";

import { useState } from "react";
import { DollarSign } from "lucide-react";

export function CostCalculator() {
  const [sal, setSal] = useState("");
  const [days, setDays] = useState("");
  const [mult, setMult] = useState("2");

  const cost =
    sal && days
      ? ((parseFloat(sal) * 12) / 240) * parseFloat(mult) * parseFloat(days)
      : 0;

  const inputClass =
    "w-full box-border px-3 py-[11px] bg-background border-[1.5px] border-ink text-ink text-[14px] outline-none focus:border-primary transition-colors";
  const labelClass =
    "block type-mono text-[10px] tracking-[0.1em] text-[rgba(25,20,16,0.55)] mb-1.5";

  return (
    <div className="border-2 border-ink bg-card p-7 mb-8">
      <h4 className="flex items-center gap-2.5 type-subdisplay text-[17px] text-ink mb-1.5">
        <DollarSign size={17} strokeWidth={2} className="text-primary" />
        Calculadora de Custo de Vacância
      </h4>
      <p className="text-[13.5px] leading-relaxed text-ink-soft mb-6">
        Descubra quanto cada vaga aberta está custando para sua empresa.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div>
          <label className={labelClass}>Salário mensal (R$)</label>
          <input
            type="number"
            value={sal}
            onChange={(e) => setSal(e.target.value)}
            placeholder="12.000"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Dias em aberto</label>
          <input
            type="number"
            value={days}
            onChange={(e) => setDays(e.target.value)}
            placeholder="60"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Impacto do cargo</label>
          <select
            value={mult}
            onChange={(e) => setMult(e.target.value)}
            className={`${inputClass} cursor-pointer`}
          >
            <option value="1">Suporte (1x)</option>
            <option value="2">Tático (2x)</option>
            <option value="3">Estratégico (3x)</option>
          </select>
        </div>
      </div>

      {cost > 0 && (
        <div className="mt-[22px] p-[22px] text-center border-2 border-primary bg-[rgba(232,67,45,0.06)]">
          <p className="type-mono text-[10.5px] tracking-[0.12em] text-[rgba(25,20,16,0.55)] mb-1.5">
            Custo estimado desta vacância
          </p>
          <p className="type-display text-primary text-[38px]">
            R$ {cost.toLocaleString("pt-BR", { maximumFractionDigits: 0 })}
          </p>
          <p className="type-mono text-[10px] tracking-normal text-[rgba(25,20,16,0.45)] mt-2.5">
            (Salário Anual / 240 dias úteis) × Multiplicador × Dias em aberto
          </p>
        </div>
      )}
    </div>
  );
}
