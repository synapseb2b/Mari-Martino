"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TriangleAlert, Zap, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const signals = [
  "Vagas críticas ficam meses abertas e travam o comercial",
  "O recrutamento roda sem processo, na base do improviso",
  "As contratações dependem de indicação, não de método",
  "A marca empregadora não atrai os melhores candidatos",
];

const reasons = [
  "Método de TA de empresa de tecnologia aplicado a qualquer setor",
  "Dados, processo e projetos ágeis no lugar de intuição",
  "IA no pipeline de recrutamento, na prática — não como conceito",
  "Construo com o seu time e transfiro autonomia, sem assumir a operação",
];

export function ForWhoSection() {
  return (
    <section id="for-who" className="relative bg-background border-t-[1.5px] border-ink">
      <div className="mx-auto max-w-[1360px] px-6 sm:px-10 py-[104px] pb-28">
        {/* Section header */}
        <div className="flex items-center gap-[18px] mb-7">
          <span className="type-mono text-[14px] tracking-normal font-semibold text-primary">01</span>
          <span className="flex-1 h-px bg-ink opacity-25" />
          <span className="type-mono text-[12px] text-ink">Para quem</span>
        </div>
        <h2 className="type-display text-ink max-w-[900px] mb-16 text-[clamp(32px,6vw,54px)] leading-[1.02]">
          Para empresas que crescem mais rápido{" "}
          <em className="em-serif text-primary">do que contratam</em>
        </h2>

        {/* Framed grid */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 border-2 border-ink"
        >
          {/* O sinal */}
          <div className="p-8 sm:p-12 flex flex-col bg-background border-b-2 md:border-b-0 md:border-r-2 border-ink transition-colors duration-300 hover:bg-card">
            <span className="self-start type-mono text-[11px] tracking-[0.14em] text-primary border-[1.5px] border-primary px-3 py-1.5 mb-7">
              O sinal
            </span>
            <h3 className="type-subdisplay text-ink text-[30px] mb-3.5">
              Sua operação de talentos travou
            </h3>
            <p className="text-[15px] leading-relaxed text-ink-soft mb-8">
              A empresa cresce, o CEO ainda entra em entrevistas e o time de RH
              corre atrás sem parar. Se você reconhece os sinais abaixo, é hora
              de estruturar.
            </p>
            <div className="flex flex-col flex-1 mb-8">
              {signals.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3.5 py-3.5 border-t border-[rgba(25,20,16,0.15)]"
                >
                  <TriangleAlert className="size-4 text-primary shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="text-[15px] leading-snug text-ink">{item}</span>
                </div>
              ))}
            </div>
            <Link
              href="/diagnostico"
              className="self-start inline-flex items-center gap-2 text-ink font-bold text-[15px] border-b-2 border-primary pb-[3px] hover:text-primary transition-colors"
            >
              Fazer o pré-diagnóstico gratuito
              <ArrowRight className="size-[15px]" strokeWidth={2.5} />
            </Link>
          </div>

          {/* A solução */}
          <div className="p-8 sm:p-12 flex flex-col bg-ink text-paper">
            <span className="self-start type-mono text-[11px] tracking-[0.14em] text-coral border-[1.5px] border-coral px-3 py-1.5 mb-7">
              A solução
            </span>
            <h3 className="type-subdisplay text-paper text-[30px] mb-3.5">
              Por que a Mari
            </h3>
            <p className="text-[15px] leading-relaxed text-[rgba(245,240,232,0.65)] mb-8">
              17 anos estruturando recrutamento em empresas de tecnologia de alta
              escala. Esse mesmo rigor, aplicado à realidade da sua empresa.
            </p>
            <div className="flex flex-col flex-1 mb-8">
              {reasons.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3.5 py-3.5 border-t border-[rgba(245,240,232,0.18)]"
                >
                  <Zap className="size-4 text-coral shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="text-[15px] leading-snug text-paper">{item}</span>
                </div>
              ))}
            </div>
            <Link
              href="#services"
              className="self-start inline-flex items-center gap-2 text-paper font-bold text-[15px] border-b-2 border-coral pb-[3px] hover:text-coral transition-colors"
            >
              Ver como trabalho
              <ArrowRight className="size-[15px]" strokeWidth={2.5} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
