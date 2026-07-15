"use client";

import { motion } from "framer-motion";
import { CircleCheck } from "lucide-react";

const credentials = [
  "17 anos estruturando operações de Talent Acquisition em tecnologia",
  "1.000+ contratações tech lideradas em um único ano",
  "Trajetória em iFood, CI&T e Sage, com operação em Latam e América do Norte",
  "Implementa agentes de IA no pipeline de recrutamento, na prática",
  "Especialista em People Analytics e maturidade de TA",
];

const stats = [
  { value: "17+", label: "anos de experiência" },
  { value: "1.000+", label: "contratações tech em 1 ano" },
  { value: "2", label: "continentes de operação" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function AuthoritySection() {
  return (
    <section id="authority" className="relative bg-background border-t-[1.5px] border-ink">
      <div className="mx-auto max-w-[1360px] px-6 sm:px-10 py-[104px] pb-28">
        {/* Section header */}
        <div className="flex items-center gap-[18px] mb-7">
          <span className="type-mono text-[14px] font-semibold text-primary">03</span>
          <span className="flex-1 h-px bg-ink opacity-25" />
          <span className="type-mono text-[12px] text-ink">Quem conduz</span>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-14 lg:gap-20 items-start"
        >
          {/* Left */}
          <div className="min-w-0">
            <h2 className="type-display text-ink text-[clamp(40px,8vw,72px)] leading-[0.98] mb-1.5">
              Mari Martino
            </h2>
            <p className="em-serif text-primary text-[28px] mb-10">
              arquiteta de operações de talento
            </p>

            <div className="flex flex-col">
              {credentials.map((item, i) => (
                <div
                  key={i}
                  className={
                    "flex items-start gap-3.5 py-[15px] border-t border-[rgba(25,20,16,0.15)]" +
                    (i === credentials.length - 1 ? " border-b border-[rgba(25,20,16,0.15)]" : "")
                  }
                >
                  <CircleCheck className="size-[18px] text-primary shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="text-[16px] leading-snug text-ink">{item}</span>
                </div>
              ))}
            </div>

            <blockquote className="mt-11 pl-7 border-l-[3px] border-primary">
              <p className="em-serif text-ink-soft text-[24px] leading-[1.45]">
                &ldquo;Recrutamento não é sobre preencher vagas. É sobre construir
                a infraestrutura que permite à empresa escalar sem depender de
                heróis. Eu instalo esse sistema: processo, dados e a inteligência
                para usar os dois.&rdquo;
              </p>
            </blockquote>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-10 min-w-0">
            <div className="photo-offset self-center w-full max-w-[380px] mr-4">
              <img
                src="/images/mari-martino.jpg"
                alt="Mariane Martino — Especialista em Talent Acquisition"
                className="relative block w-full border-2 border-ink object-cover box-border"
              />
            </div>

            <div className="grid grid-cols-3 border-2 border-ink mt-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={
                    "py-6 px-2 sm:px-3 text-center min-w-0" +
                    (i < stats.length - 1 ? " border-r-2 border-ink" : "")
                  }
                >
                  <p className="type-display text-primary text-[clamp(28px,5vw,40px)]">
                    {stat.value}
                  </p>
                  <p className="type-mono text-[10px] tracking-[0.1em] text-ink-soft mt-1.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
