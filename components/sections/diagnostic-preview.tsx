"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  GitBranch,
  Database,
  Cpu,
  Crown,
  Megaphone,
} from "lucide-react";

const dimensions = [
  { label: "Processo", icon: GitBranch, color: "#818cf8" },
  { label: "Dados", icon: Database, color: "#34d399" },
  { label: "Tecnologia", icon: Cpu, color: "#f59e0b" },
  { label: "Liderança", icon: Crown, color: "#f472b6" },
  { label: "Marca Empregadora", icon: Megaphone, color: "#a78bfa" },
];

const stages = [
  { label: "Reativo", level: 1 },
  { label: "Operacional", level: 2 },
  { label: "Estratégico", level: 3 },
  { label: "Preditivo", level: 4 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export function DiagnosticPreview() {
  return (
    <section className="relative bg-[#0A0F1E] py-24 md:py-32 overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-wider text-primary mb-4">
            FERRAMENTA GRATUITA
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight text-center max-w-3xl mx-auto">
            Descubra o nível de maturidade do seu Talent Acquisition
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground text-center max-w-xl mx-auto mt-4">
            15 perguntas. 5 minutos. Resultado imediato com diagnóstico por dimensão e ações
            prioritárias para o seu estágio.
          </p>
        </motion.div>

        {/* Dimension pills */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {dimensions.map((dim, i) => {
            const Icon = dim.icon;
            return (
              <motion.div
                key={dim.label}
                variants={fadeUp}
                custom={i}
                className="bg-card/50 border border-border/50 rounded-xl px-4 py-3 flex items-center gap-2.5 card-glow"
              >
                <Icon className="size-4" style={{ color: dim.color }} />
                <span className="text-xs sm:text-sm font-medium text-foreground">
                  {dim.label}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Maturity stages bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-card/50 border border-border/50 rounded-2xl p-6 max-w-2xl mx-auto mb-12"
        >
          <div className="flex gap-2">
            {stages.map((stage, i) => (
              <div key={stage.label} className="flex-1 flex flex-col items-center gap-2">
                <div
                  className="w-full rounded-xl"
                  style={{
                    height: `${20 + i * 14}px`,
                    opacity: 0.3 + i * 0.2,
                    background: "linear-gradient(135deg, #10B981, #14B8A6)",
                  }}
                />
                <span className="text-[10px] sm:text-xs font-medium text-muted-foreground text-center">
                  {stage.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center"
        >
          <Link
            href="/diagnostico"
            className="inline-flex items-center gap-2.5 bg-primary text-white rounded-full px-8 py-4 text-base sm:text-lg font-bold shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300"
          >
            Iniciar Diagnóstico Gratuito
            <ArrowRight className="size-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
