"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mic, Zap, Building2, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceCard {
  icon: LucideIcon;
  tag: string;
  number: string;
  title: string;
  description: string;
  items?: string[];
  ctaLabel: string;
  ctaHref: string;
}

const WHATSAPP_BASE = "https://wa.me/5519991396595?text=";

const services: ServiceCard[] = [
  {
    icon: Mic,
    tag: "Autoridade",
    number: "01",
    title: "Palestras & Masterclasses",
    description:
      "IA aplicada a Talent Acquisition, sem teoria vazia. Para eventos, lideranças e times que precisam entender o que muda na contratação a partir de agora.",
    ctaLabel: "Convidar para uma palestra",
    ctaHref: `${WHATSAPP_BASE}${encodeURIComponent("Olá Mari, quero convidar você para uma palestra ou masterclass.")}`,
  },
  {
    icon: Zap,
    tag: "Entrada",
    number: "02",
    title: "Fast Tracks",
    description:
      "Formatos diretos para resolver um problema específico de recrutamento com IA. Você escolhe a profundidade.",
    items: [
      "Guia prático gravado: IA no recrutamento, ponta a ponta",
      "Diagnóstico Express: você preenche, eu devolvo 3 prioridades",
      "Sessão Estratégica ao vivo: 50 min para destravar um desafio",
    ],
    ctaLabel: "Começar por um Fast Track",
    ctaHref: `${WHATSAPP_BASE}${encodeURIComponent("Olá Mari, tenho interesse nos Fast Tracks de TA + IA.")}`,
  },
  {
    icon: Building2,
    tag: "Transformação",
    number: "03",
    title: "Projeto de Arquitetura de TA",
    description:
      "O trabalho completo. Começa por um Diagnóstico Estratégico e evolui para um projeto que redesenha o processo, indica as ferramentas certas (inclusive IA) e capacita o time — sem assumir a sua operação.",
    ctaLabel: "Fazer o Diagnóstico",
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
            Como trabalho
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A0F1E] tracking-tight text-center">
            Da autoridade à transformação da sua operação
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
                className="bg-white rounded-2xl border border-black/5 p-6 sm:p-8 card-glow-light group hover:border-primary/20 transition-all duration-300 flex flex-col"
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
                <span className="inline-flex self-start items-center rounded-full bg-primary/10 text-primary text-[11px] font-semibold uppercase tracking-wider px-3 py-1 mb-4">
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

                {/* Optional items */}
                {service.items && (
                  <ul className="space-y-2.5 mb-6">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <ArrowRight className="size-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-neutral-600 leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* CTA */}
                <div className="mt-auto pt-4 border-t border-black/5">
                  {isInternal ? (
                    <Link
                      href={service.ctaHref}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary/80 transition group/btn"
                    >
                      {service.ctaLabel}
                      <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  ) : (
                    <a
                      href={service.ctaHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary/80 transition group/btn"
                    >
                      {service.ctaLabel}
                      <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
