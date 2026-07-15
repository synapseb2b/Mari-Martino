"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/5519991396595";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Serviços", href: "#services" },
  { label: "Pré-diagnóstico", href: "/diagnostico" },
  { label: "Sobre", href: "#authority" },
];

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="bg-ink text-paper border-t border-[rgba(245,240,232,0.2)]"
    >
      <div className="mx-auto max-w-[1360px] px-6 sm:px-10 pt-[72px] pb-8">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 lg:gap-12">
          {/* Column 1 — Brand */}
          <div>
            <p className="type-display text-[18px] text-paper">Mari Martino</p>
            <p className="type-mono text-[11px] text-coral mt-1.5">Talent Acquisition</p>
            <p className="text-[14px] leading-relaxed text-[rgba(245,240,232,0.55)] mt-4 max-w-[280px]">
              Arquitetura de operações de TA com dados, processo e IA.
            </p>
          </div>

          {/* Column 2 — Navigation */}
          <div>
            <p className="type-mono text-[11px] tracking-[0.14em] text-[rgba(245,240,232,0.45)] mb-[18px]">
              Navegação
            </p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-[rgba(245,240,232,0.7)] hover:text-coral transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div>
            <p className="type-mono text-[11px] tracking-[0.14em] text-[rgba(245,240,232,0.45)] mb-[18px]">
              Contato
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] text-[rgba(245,240,232,0.7)] hover:text-coral transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] text-[rgba(245,240,232,0.7)] hover:text-coral transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 — Legal */}
          <div>
            <p className="type-mono text-[11px] tracking-[0.14em] text-[rgba(245,240,232,0.45)] mb-[18px]">
              Legal
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="#"
                  className="text-[14px] text-[rgba(245,240,232,0.7)] hover:text-coral transition-colors"
                >
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-[rgba(245,240,232,0.15)] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="type-mono text-[11px] tracking-[0.08em] normal-case text-[rgba(245,240,232,0.4)]">
            © 2026 Mariane Martino. Todos os direitos reservados.
          </p>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="type-mono text-[11px] tracking-[0.08em] normal-case text-[rgba(245,240,232,0.3)] hover:text-coral transition-colors"
          >
            Desenvolvido por Synapse B2B
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
