"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, GitBranch, Database, Cpu, Crown, Megaphone } from "lucide-react";

const dimensions = [
  { label: "Processo", icon: GitBranch },
  { label: "Dados", icon: Database },
  { label: "Tecnologia", icon: Cpu },
  { label: "Liderança", icon: Crown },
  { label: "Marca Empregadora", icon: Megaphone },
];

const stages = [
  { label: "Reativo", height: 22, opacity: 0.3 },
  { label: "Operacional", height: 38, opacity: 0.5 },
  { label: "Estratégico", height: 56, opacity: 0.75 },
  { label: "Preditivo", height: 76, opacity: 1 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function DiagnosticPreview() {
  return (
    <section
      id="diagnostico"
      className="relative bg-primary text-ink border-t-2 border-ink"
    >
      <div className="mx-auto max-w-[1360px] px-6 sm:px-10 py-[104px] pb-28">
        {/* Section header */}
        <div className="flex items-center gap-[18px] mb-7">
          <span className="type-mono text-[14px] font-semibold text-ink">04</span>
          <span className="flex-1 h-px bg-ink opacity-35" />
          <span className="type-mono text-[12px] text-ink">Ferramenta gratuita</span>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <h2 className="type-display text-ink max-w-[980px] mb-5 text-[clamp(34px,6vw,60px)] leading-[1]">
            Qual é o nível de maturidade do seu{" "}
            <em className="em-serif text-paper">Talent Acquisition?</em>
          </h2>
          <p className="text-[19px] leading-relaxed text-[rgba(25,20,16,0.8)] max-w-[620px] mb-14">
            15 perguntas. 5 minutos. Resultado imediato com uma leitura inicial
            por dimensão e ações prioritárias para o seu estágio.
          </p>

          {/* Dimension pills */}
          <div className="flex flex-wrap gap-3 mb-14">
            {dimensions.map((dim) => {
              const Icon = dim.icon;
              return (
                <span
                  key={dim.label}
                  className="inline-flex items-center gap-2.5 border-[1.5px] border-ink px-5 py-3 type-mono text-[13px] tracking-[0.08em] text-ink bg-[rgba(245,240,232,0.12)]"
                >
                  <Icon className="size-[15px]" strokeWidth={2} />
                  {dim.label}
                </span>
              );
            })}
          </div>

          {/* Maturity scale + CTA */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <div className="w-full max-w-[620px] border-2 border-ink p-7 bg-[rgba(245,240,232,0.1)]">
              <p className="type-mono text-[11px] tracking-[0.14em] text-ink mb-[18px]">
                Escala de maturidade
              </p>
              <div className="flex gap-2.5 items-end">
                {stages.map((s) => (
                  <div key={s.label} className="flex-1 flex flex-col gap-2 items-center">
                    <div
                      className="w-full bg-ink"
                      style={{ height: `${s.height}px`, opacity: s.opacity }}
                    />
                    <span className="type-mono text-[11px] tracking-[0.06em] text-ink text-center">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/diagnostico"
              className="shrink-0 inline-flex items-center gap-3 bg-ink text-paper font-extrabold text-[18px] px-9 py-[22px] border-2 border-ink shadow-[6px_6px_0_var(--paper)] transition-all duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[9px_9px_0_var(--paper)]"
            >
              Iniciar Pré-diagnóstico Gratuito
              <ArrowRight className="size-[18px]" strokeWidth={2.5} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
