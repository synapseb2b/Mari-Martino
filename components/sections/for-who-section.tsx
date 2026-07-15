"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AlertTriangle, Zap } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
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
    <section id="for-who" className="relative bg-[#F8FAFC] py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-wider text-primary mb-4">
            PARA QUEM
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0A0F1E]">
            Para empresas que crescem mais rápido do que contratam
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {/* Card — Sinais */}
          <motion.div
            variants={cardVariants}
            className="bg-white rounded-2xl border border-black/5 p-6 sm:p-8 card-glow-light flex flex-col group"
          >
            <span className="inline-flex self-start items-center rounded-full bg-primary/10 text-primary text-[11px] font-semibold uppercase tracking-wider px-3 py-1 mb-5">
              O sinal
            </span>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#0A0F1E] mb-3">
              Sua operação de talentos travou
            </h3>

            <p className="text-sm text-neutral-500 leading-relaxed mb-6">
              A empresa cresce, o CEO ainda entra em entrevistas e o time de RH
              corre atrás sem parar. Se você reconhece os sinais abaixo, é hora de
              estruturar.
            </p>

            <ul className="space-y-3 mb-8 flex-1">
              {signals.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <AlertTriangle className="size-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-neutral-600 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/diagnostico"
              className="inline-flex items-center self-start text-primary font-bold text-sm hover:underline transition-colors"
            >
              Fazer o diagnóstico gratuito →
            </Link>
          </motion.div>

          {/* Card — Por que a Mari */}
          <motion.div
            variants={cardVariants}
            className="bg-white rounded-2xl border border-black/5 p-6 sm:p-8 card-glow-light flex flex-col group"
          >
            <span className="inline-flex self-start items-center rounded-full bg-primary/10 text-primary text-[11px] font-semibold uppercase tracking-wider px-3 py-1 mb-5">
              A solução
            </span>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#0A0F1E] mb-3">
              Por que a Mari
            </h3>

            <p className="text-sm text-neutral-500 leading-relaxed mb-6">
              17 anos estruturando recrutamento em empresas de tecnologia de alta
              escala. Esse mesmo rigor, aplicado à realidade da sua empresa.
            </p>

            <ul className="space-y-3 mb-8 flex-1">
              {reasons.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Zap className="size-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-neutral-600 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="#services"
              className="inline-flex items-center self-start text-primary font-bold text-sm hover:underline transition-colors"
            >
              Ver como trabalho →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
