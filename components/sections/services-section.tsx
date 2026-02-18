"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { User, Users, BarChart3, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceCard {
  icon: LucideIcon;
  tag: string;
  number: string;
  title: string;
  description: string;
  price: string;
  ctaLabel: string;
  ctaHref: string;
}

const WHATSAPP_BASE = "https://wa.me/5519991396595?text=";

const services: ServiceCard[] = [
  {
    icon: User,
    tag: "PARA PROFISSIONAIS DE TA/RH",
    number: "01",
    title: "Mentoria Estratégica Individual",
    description:
      "Sessões 1:1 para profissionais de TA em transição para liderança ou recém-promovidos. Construímos juntos: indicadores de recrutamento, SLAs com hiring managers e a narrativa que prova o valor da sua área para a diretoria.",
    price: "R$ 180/hora",
    ctaLabel: "Agendar conversa",
    ctaHref: `${WHATSAPP_BASE}${encodeURIComponent("Olá Mari, tenho interesse na mentoria individual.")}`,
  },
  {
    icon: Users,
    tag: "PROGRAMA INTENSIVO · 6 SEMANAS",
    number: "02",
    title: "TA Intelligence Program",
    description:
      "6 sábados consecutivos para coordenadores e analistas de TA/RH que precisam sair do operacional e construir uma operação orientada por dados. Você sai com dashboards, SLAs, funil mapeado e um plano 30-60-90 pronto para apresentar.",
    price: "R$ 1.200/participante",
    ctaLabel: "Garantir vaga na próxima turma",
    ctaHref: `${WHATSAPP_BASE}${encodeURIComponent("Olá Mari, quero saber sobre a próxima turma do TA Intelligence Program.")}`,
  },
  {
    icon: BarChart3,
    tag: "PARA EMPRESAS",
    number: "03",
    title: "Diagnóstico de Maturidade de TA",
    description:
      "Assessment online que mapeia 5 dimensões da sua operação de recrutamento e posiciona a empresa em um dos 4 estágios de maturidade. Inclui calculadora de custo de vacância. Devolutiva executiva com plano de ação sob medida.",
    price: "Diagnóstico gratuito · Devolutiva + projeto sob consulta",
    ctaLabel: "Fazer diagnóstico gratuito",
    ctaHref: "/diagnostico",
  },
];

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

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-[#F8FAFC] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <p className="text-xs font-bold uppercase tracking-wider text-primary mb-4">
            Portfólio
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A0F1E] tracking-tight text-center">
            Três formas de trabalhar comigo
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            const isInternal = service.ctaHref.startsWith("/");

            return (
              <motion.div
                key={service.number}
                variants={cardVariants}
                className="bg-white rounded-2xl border border-black/5 p-6 sm:p-8 card-glow-light group hover:border-primary/20 transition-all duration-300"
              >
                {/* Number + Icon */}
                <div className="flex items-start justify-between mb-6">
                  <span className="text-4xl font-light text-primary/20">
                    {service.number}
                  </span>
                  <div className="flex items-center justify-center bg-primary/10 rounded-xl p-3 text-primary">
                    <Icon className="size-6" />
                  </div>
                </div>

                {/* Tag */}
                <span className="inline-flex items-center rounded-full bg-primary/10 text-primary text-[11px] font-semibold uppercase tracking-wider px-3 py-1 mb-4">
                  {service.tag}
                </span>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#0A0F1E] group-hover:text-primary transition-colors mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-neutral-500 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Price */}
                <div className="border-t border-black/5 pt-4">
                  <p className="text-sm font-semibold text-[#0A0F1E]">
                    {service.price}
                  </p>
                </div>

                {/* CTA */}
                {isInternal ? (
                  <Link
                    href={service.ctaHref}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary/80 transition group/btn mt-3"
                  >
                    {service.ctaLabel}
                    <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                ) : (
                  <a
                    href={service.ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary/80 transition group/btn mt-3"
                  >
                    {service.ctaLabel}
                    <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
