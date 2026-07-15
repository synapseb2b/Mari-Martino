"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 + i * 0.1,
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

export function Hero() {
  const { scrollY } = useScroll();

  /* Parallax orbs */
  const orbY1 = useTransform(scrollY, [0, 800], [0, -100]);
  const orbY2 = useTransform(scrollY, [0, 800], [0, -160]);
  const orbY3 = useTransform(scrollY, [0, 800], [0, -60]);

  /* Subtle content offset */
  const contentY = useTransform(scrollY, [0, 600], [0, 40]);

  return (
    <section className="relative min-h-screen flex items-center bg-[#0A0F1E] overflow-hidden">
      {/* Background grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      {/* ── Parallax Orbs ── */}
      <motion.div
        style={{ y: orbY1 }}
        className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-primary/20 blur-[150px] pointer-events-none"
      />
      <motion.div
        style={{ y: orbY2 }}
        className="absolute bottom-[-15%] left-[-10%] w-[800px] h-[800px] rounded-full bg-primary/15 blur-[150px] pointer-events-none"
      />
      <motion.div
        style={{ y: orbY3 }}
        className="absolute top-[40%] left-[55%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[150px] pointer-events-none"
      />

      {/* ── Content ── */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 sm:py-40 lg:py-48"
      >
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="text-primary text-sm font-bold uppercase tracking-wider mb-6"
          >
            Talent Acquisition para empresas em crescimento
          </motion.p>

          {/* H1 */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-[1.05] tracking-tight"
          >
            Sua empresa cresce.
            <br />
            Sua operação de talentos acompanha?
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-lg text-muted-foreground max-w-2xl leading-relaxed mt-6"
          >
            Não é recrutamento. É a arquitetura da operação que faz a empresa
            atrair, contratar, integrar e acompanhar talento no ritmo do
            crescimento — com dados, processo e IA. 17 anos em iFood, CI&T e Sage.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="flex flex-wrap items-center gap-4 mt-8 sm:mt-10"
          >
            {/* Primary CTA */}
            <Link
              href="/diagnostico"
              className="group inline-flex items-center gap-2.5 bg-primary text-white rounded-full px-7 py-4 text-base font-bold shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300"
            >
              Avaliar Maturidade de TA
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* Secondary CTA */}
            <a
              href="#services"
              className="inline-flex items-center gap-2.5 border-2 border-border/50 rounded-full px-7 py-4 text-base font-medium text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-300"
            >
              Conhecer serviços
              <ArrowDown className="size-5" />
            </a>
          </motion.div>

          {/* Badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="mt-10 sm:mt-12"
          >
            <span className="inline-flex items-center rounded-full bg-white/5 border border-white/10 px-5 py-2.5 text-sm text-muted-foreground">
              1.000+ contratações tech em um ano · Latam e América do Norte
            </span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
