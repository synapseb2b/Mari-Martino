"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5519991396595?text=Ol%C3%A1%20Mari%2C%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20conversar.";

export function WhatsAppFloatingButton() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.4 }}
      className="fixed bottom-7 right-7 z-50 flex size-[60px] items-center justify-center bg-primary text-ink border-2 border-ink shadow-[4px_4px_0_var(--ink)] transition-all duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_var(--ink)]"
    >
      <MessageCircle className="size-[26px]" strokeWidth={2} />
    </motion.a>
  );
}
