"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const credentials = [
  "17 anos estruturando operações de Talent Acquisition em tecnologia",
  "Senior Tech TA Coordinator no iFood",
  "Passagens por CI&T e Sage — construindo máquinas de contratação de escala",
  "Especialista em People Analytics e maturidade de TA",
  "Mentora de profissionais de RH em transição para liderança",
];

const stats = [
  { value: "17+", label: "anos de experiência" },
  { value: "500+", label: "profissionais impactados" },
  { value: "5", label: "dimensões de maturidade avaliadas" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

export function AuthoritySection() {
  return (
    <section id="authority" className="relative py-24 md:py-32 bg-[#0A0F1E] overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* ── Left Column: Text ── */}
          <div>
            {/* Eyebrow */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={0}
              className="text-xs font-bold uppercase tracking-wider text-primary mb-4"
            >
              Quem conduz
            </motion.p>

            {/* H2 */}
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={1}
              className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-8"
            >
              Mari Martino
            </motion.h2>

            {/* Credentials */}
            <div className="space-y-4 mb-8">
              {credentials.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  custom={2 + i * 0.5}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Blockquote */}
            <motion.blockquote
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={5}
              className="relative pl-6 border-l-2 border-primary/40"
            >
              <p className="italic text-muted-foreground/70 leading-relaxed">
                &ldquo;Recrutamento não é sobre preencher vagas. É sobre construir
                a infraestrutura que permite à empresa escalar sem depender de
                heróis. Eu instalo esse sistema: processo, dados e a inteligência
                para usar os dois.&rdquo;
              </p>
            </motion.blockquote>
          </div>

          {/* ── Right Column: Photo + Stats ── */}
          <div className="flex flex-col items-center gap-8">
            {/* Photo */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={0}
              className="relative"
            >
              <img
                src="/images/mari-martino.jpg"
                alt="Mariane Martino — Especialista em Talent Acquisition"
                className="rounded-2xl object-cover w-full max-w-[280px] mx-auto shadow-2xl border border-border/50"
              />
            </motion.div>

            {/* Stats */}
            <div className="w-full flex flex-col gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  custom={i + 1}
                  className="bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 p-5 text-center card-glow"
                >
                  <p className="text-4xl sm:text-5xl font-extrabold text-primary tracking-tighter">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
