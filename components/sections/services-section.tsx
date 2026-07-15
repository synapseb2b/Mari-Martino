"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ServiceRow {
  number: string;
  tag: string;
  tagSolid?: boolean;
  title: string;
  description: string;
  items?: string[];
  ctaLabel: string;
  href: string;
  external?: boolean;
}

const WHATSAPP_BASE = "https://wa.me/5519991396595?text=";

const services: ServiceRow[] = [
  {
    number: "/01",
    tag: "Autoridade",
    title: "Palestras & Masterclasses",
    description:
      "IA aplicada a Talent Acquisition, sem teoria vazia. Para eventos, lideranças e times que precisam entender o que muda na contratação a partir de agora.",
    ctaLabel: "Convidar para uma palestra",
    href: `${WHATSAPP_BASE}${encodeURIComponent("Olá Mari, quero convidar você para uma palestra ou masterclass.")}`,
    external: true,
  },
  {
    number: "/02",
    tag: "Entrada",
    title: "Fast Tracks",
    description:
      "Formatos diretos para resolver um problema específico de recrutamento com IA. Você escolhe a profundidade.",
    items: [
      "Guia prático gravado: IA no recrutamento, ponta a ponta",
      "Diagnóstico Express: você preenche, eu devolvo 3 prioridades",
      "Sessão Estratégica ao vivo: 50 min para destravar um desafio",
    ],
    ctaLabel: "Começar por um Fast Track",
    href: `${WHATSAPP_BASE}${encodeURIComponent("Olá Mari, tenho interesse nos Fast Tracks de TA + IA.")}`,
    external: true,
  },
  {
    number: "/03",
    tag: "Transformação",
    tagSolid: true,
    title: "Projeto de Arquitetura de TA",
    description:
      "O trabalho completo. Começa por um Diagnóstico Estratégico e evolui para um projeto que redesenha o processo, indica as ferramentas certas (inclusive IA) e capacita o time — sem assumir a sua operação.",
    ctaLabel: "Começar pelo pré-diagnóstico",
    href: "/diagnostico",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const rowVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function ServicesSection() {
  return (
    <section id="services" className="relative bg-ink text-paper">
      <div className="mx-auto max-w-[1360px] px-6 sm:px-10 py-[104px] pb-28">
        {/* Section header */}
        <div className="flex items-center gap-[18px] mb-7">
          <span className="type-mono text-[14px] font-semibold text-coral">02</span>
          <span className="flex-1 h-px bg-paper opacity-25" />
          <span className="type-mono text-[12px] text-paper">Como trabalho</span>
        </div>
        <h2 className="type-display text-paper max-w-[920px] mb-16 text-[clamp(32px,6vw,54px)] leading-[1.02]">
          Da autoridade à{" "}
          <em className="em-serif text-coral">transformação</em> da sua operação
        </h2>

        {/* Rows */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {services.map((s, idx) => {
            const inner = (
              <>
                <span className="type-mono text-[15px] tracking-normal text-coral pt-1.5">
                  {s.number}
                </span>
                <div>
                  <span
                    className={
                      s.tagSolid
                        ? "inline-block type-mono text-[10px] tracking-[0.14em] text-ink bg-coral px-2.5 py-[5px] mb-3.5"
                        : "inline-block type-mono text-[10px] tracking-[0.14em] text-[rgba(245,240,232,0.55)] border border-[rgba(245,240,232,0.3)] px-2.5 py-1 mb-3.5"
                    }
                  >
                    {s.tag}
                  </span>
                  <h3 className="type-subdisplay text-[32px] leading-[1.1]">{s.title}</h3>
                </div>
                <div>
                  <p className="text-[15px] leading-relaxed text-[rgba(245,240,232,0.65)] mb-4">
                    {s.description}
                  </p>
                  {s.items && (
                    <div className="flex flex-col gap-2 mb-4">
                      {s.items.map((it, i) => (
                        <span
                          key={i}
                          className="flex gap-2.5 text-[14px] leading-snug text-[rgba(245,240,232,0.8)]"
                        >
                          <span className="text-coral">→</span>
                          {it}
                        </span>
                      ))}
                    </div>
                  )}
                  <span className="inline-flex items-center gap-2 font-bold text-[14px] text-coral">
                    {s.ctaLabel}
                  </span>
                </div>
                <ArrowUpRight
                  className="size-7 text-coral justify-self-start md:justify-self-end mt-2.5"
                  strokeWidth={2}
                />
              </>
            );

            const rowClass =
              "group grid grid-cols-1 md:grid-cols-[90px_1.1fr_1.3fr_60px] gap-6 md:gap-10 items-start py-10 border-t border-[rgba(245,240,232,0.22)] text-paper transition-all duration-300 hover:bg-[rgba(245,240,232,0.04)] hover:pl-4" +
              (idx === services.length - 1 ? " border-b border-[rgba(245,240,232,0.22)]" : "");

            return (
              <motion.div key={s.number} variants={rowVariant}>
                {s.external ? (
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className={rowClass}>
                    {inner}
                  </a>
                ) : (
                  <Link href={s.href} className={rowClass}>
                    {inner}
                  </Link>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
