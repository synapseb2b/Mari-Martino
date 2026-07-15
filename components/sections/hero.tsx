"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const tickerItems = [
  "1.000+ contratações tech em um ano",
  "17 anos de experiência",
  "iFood",
  "CI&T",
  "Sage",
  "Latam & América do Norte",
];

function Asterisk({ className = "", size = 14 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth={size > 40 ? 7 : 10}
      strokeLinecap="round"
      className={className}
    >
      <path d="M50 8v84" />
      <path d="M13.6 29l72.8 42" />
      <path d="M86.4 29l-72.8 42" />
    </svg>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative bg-background overflow-hidden">
      <div className="relative mx-auto max-w-[1360px] px-6 sm:px-10 pt-[88px] pb-[72px] md:pt-[104px] md:pb-[88px]">
        {/* Rotating asterisk */}
        <div className="pointer-events-none absolute top-[40px] right-4 md:top-[60px] md:right-6 text-primary animate-spin-slow opacity-90">
          <Asterisk size={220} className="w-[130px] h-[130px] md:w-[220px] md:h-[220px]" />
        </div>

        {/* Eyebrow */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="flex items-center gap-3.5"
        >
          <span className="size-3 bg-primary inline-block shrink-0" />
          <span className="type-mono text-[13px] tracking-[0.16em] text-ink">
            Talent Acquisition para empresas em crescimento
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="type-display mt-9 text-ink max-w-[1100px] text-[clamp(44px,9vw,96px)] leading-[0.98] tracking-[-0.03em]"
        >
          Sua empresa cresce.
          <br />
          Sua operação de talentos{" "}
          <em className="em-serif text-primary text-[1.06em]">acompanha?</em>
        </motion.h1>

        {/* Sub + CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="mt-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10"
        >
          <p className="text-[20px] leading-relaxed text-ink-soft max-w-[560px]">
            Não é recrutamento. É a arquitetura da operação que faz a empresa
            atrair, contratar, integrar e acompanhar talento no ritmo do
            crescimento — com dados, processo e IA.
          </p>

          <div className="flex flex-wrap items-center gap-5 shrink-0">
            <Link
              href="/diagnostico"
              className="inline-flex items-center gap-3 bg-primary text-ink font-extrabold text-[17px] px-8 py-5 btn-offset"
            >
              Avaliar maturidade de TA
              <ArrowRight className="size-[18px]" strokeWidth={2.5} />
            </Link>
            <a
              href="#services"
              className="inline-flex items-center gap-2.5 text-ink font-bold text-[16px] pb-1 border-b-2 border-ink hover:text-primary hover:border-primary transition-colors"
            >
              Conhecer serviços
              <ArrowDown className="size-4" strokeWidth={2.5} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Ticker */}
      <div className="bg-ink border-t-2 border-ink overflow-hidden py-[17px]">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center shrink-0" aria-hidden={dup === 1}>
              {tickerItems.map((item, i) => (
                <div key={i} className="flex items-center gap-14 whitespace-nowrap pr-14">
                  <span className="type-mono text-[14px] tracking-[0.14em] text-paper">
                    {item}
                  </span>
                  <Asterisk size={14} className="text-primary shrink-0" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
