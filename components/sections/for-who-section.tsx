"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

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
            Soluções dimensionadas para cada desafio
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
          {/* Card B2C */}
          <motion.div
            variants={cardVariants}
            className="bg-white rounded-2xl border border-black/5 p-6 sm:p-8 card-glow-light flex flex-col group"
          >
            <span className="inline-flex self-start items-center rounded-full bg-primary/10 text-primary text-[11px] font-semibold uppercase tracking-wider px-3 py-1 mb-5">
              B2C
            </span>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#0A0F1E] mb-3">
              Para profissionais de TA/RH
            </h3>

            <p className="text-sm text-neutral-500 leading-relaxed mb-6">
              Você tem 25-35 anos, trabalha com recrutamento e está no momento de provar que sua
              área gera resultado estratégico — não só operacional.
            </p>

            <ul className="space-y-3 mb-8 flex-1">
              {[
                "Em transição para seu primeiro cargo de liderança",
                "Precisa construir indicadores que provem valor para a diretoria",
                "Quer dominar dados, métricas e People Analytics",
                "Busca método — não motivação",
              ].map((item, i) => (
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
              Conhecer mentoria →
            </Link>
          </motion.div>

          {/* Card B2B */}
          <motion.div
            variants={cardVariants}
            className="bg-white rounded-2xl border border-black/5 p-6 sm:p-8 card-glow-light flex flex-col group"
          >
            <span className="inline-flex self-start items-center rounded-full bg-primary/10 text-primary text-[11px] font-semibold uppercase tracking-wider px-3 py-1 mb-5">
              B2B
            </span>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#0A0F1E] mb-3">
              Para empresas de 100 a 1.000 funcionários
            </h3>

            <p className="text-sm text-neutral-500 leading-relaxed mb-6">
              Sua empresa fatura R$ 20-500M, o CEO ainda participa de entrevistas e vagas críticas
              ficam abertas por meses. O RH existe, mas opera sem dados e sem processo escalável.
            </p>

            <ul className="space-y-3 mb-8 flex-1">
              {[
                "Vagas críticas levam mais de 60 dias para fechar",
                "RH reporta ao financeiro — não existe Head of People",
                "Contratações dependem de indicação, não de processo",
                "Turnover acima de 20% nos primeiros 6 meses",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Zap className="size-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-neutral-600 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/diagnostico"
              className="inline-flex items-center self-start text-primary font-bold text-sm hover:underline transition-colors"
            >
              Fazer diagnóstico gratuito →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
