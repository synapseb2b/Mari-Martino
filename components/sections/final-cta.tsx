"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5519991396595?text=Olá Mari, quero agendar uma conversa estratégica sobre minha operação de TA.";

export function FinalCTA() {
  return (
    <section id="contact" className="relative bg-[#111827] py-24 md:py-32 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight"
        >
          Pronto para estruturar sua operação de talentos?
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="text-base sm:text-lg text-muted-foreground leading-relaxed mt-6 max-w-2xl mx-auto"
        >
          Uma conversa direta para reduzir o time-to-fill, tirar o recrutamento
          da dependência de indicações e construir uma operação que acompanha o
          crescimento da empresa.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-primary text-white rounded-full px-8 py-4 text-base font-bold shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300"
          >
            Falar com a Mari
            <ArrowRight className="size-5" />
          </a>
        </motion.div>

        {/* Micro-copy */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-sm text-muted-foreground mt-4"
        >
          Mariane Martino · Resposta em até 24h úteis
        </motion.p>
      </div>
    </section>
  );
}
