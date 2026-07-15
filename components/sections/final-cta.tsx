"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5519991396595?text=Ol%C3%A1%20Mari%2C%20quero%20agendar%20uma%20conversa%20estrat%C3%A9gica%20sobre%20minha%20opera%C3%A7%C3%A3o%20de%20TA.";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function FinalCTA() {
  return (
    <section id="contact" className="relative bg-ink text-paper border-t-2 border-ink">
      <div className="mx-auto max-w-[900px] px-6 sm:px-10 py-32 md:py-[136px] text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
          className="type-display text-paper text-[clamp(34px,6vw,58px)] leading-[1.02]"
        >
          Pronto para <em className="em-serif text-coral">estruturar</em> sua
          operação de talentos?
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={1}
          className="text-[18px] leading-relaxed text-[rgba(245,240,232,0.65)] mt-6 mb-12 max-w-[620px] mx-auto"
        >
          Uma conversa direta para reduzir o time-to-fill, tirar o recrutamento
          da dependência de indicações e construir uma operação que acompanha o
          crescimento da empresa.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={2}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-paper text-ink font-extrabold text-[18px] px-10 py-[22px] btn-offset-vermillion"
          >
            Falar com a Mari
            <ArrowRight className="size-[18px]" strokeWidth={2.5} />
          </a>
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
          className="type-mono text-[12px] tracking-[0.1em] text-[rgba(245,240,232,0.45)] mt-6"
        >
          Mariane Martino · Resposta em até 24h úteis
        </motion.p>
      </div>
    </section>
  );
}
