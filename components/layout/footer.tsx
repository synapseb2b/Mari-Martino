"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/5519991396595";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Serviços", href: "#services" },
  { label: "Diagnóstico", href: "/diagnostico" },
  { label: "Sobre", href: "#authority" },
];

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="bg-[#0A0F1E] border-t border-border/50 pt-16 pb-8"
    >
      {/* Top divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1 — Brand */}
          <div>
            <p className="text-lg font-extrabold text-foreground">Mari Martino</p>
            <p className="text-sm text-primary font-medium mt-1">Talent Acquisition</p>
            <p className="text-sm text-muted-foreground leading-relaxed mt-3">
              Arquitetura de operações de TA com dados, processo e IA.
            </p>
          </div>

          {/* Column 2 — Navigation */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
              Navegação
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
              Contato
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 — Legal */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
              Legal
            </p>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; 2026 Mariane Martino. Todos os direitos reservados.
          </p>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground/50 hover:text-primary transition-colors"
          >
            Desenvolvido por Synapse B2B
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
