"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Serviços", href: "#services" },
  { label: "Sobre", href: "#authority" },
  { label: "Pré-diagnóstico", href: "/diagnostico" },
  { label: "Contato", href: "#contact" },
];

const mobileNavVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.08, duration: 0.4, ease: "easeOut" as const },
  }),
};

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* ── Header Bar ── */}
      <header className="sticky top-0 z-50 w-full bg-background border-b-[1.5px] border-ink">
        <div className="mx-auto max-w-[1360px] px-6 sm:px-10">
          <div className="flex h-[74px] items-center justify-between gap-6">
            {/* Logo */}
            <Link href="/" className="flex items-baseline gap-2.5">
              <span className="type-display text-[19px] text-ink">Mari Martino</span>
              <span className="type-mono text-[10px] text-primary hidden sm:inline">
                Talent Acquisition
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="type-mono text-[12px] tracking-[0.1em] text-ink hover:text-primary transition-colors px-3.5 py-2"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <Link
              href="/diagnostico"
              className="hidden lg:inline-flex items-center gap-2.5 bg-ink text-paper font-bold text-[14px] px-[22px] py-3 border-[1.5px] border-ink transition-all duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-primary hover:text-ink hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--ink)]"
            >
              Pré-diagnóstico gratuito
              <ArrowRight className="size-[15px]" strokeWidth={2.5} />
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex items-center justify-center size-10 text-ink hover:text-primary transition-colors"
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            >
              {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Full-Screen Overlay ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-ink lg:hidden flex flex-col"
          >
            <div className="flex justify-end p-5">
              <button
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center size-10 text-paper hover:text-coral transition-colors"
                aria-label="Fechar menu"
              >
                <X className="size-7" />
              </button>
            </div>

            <nav className="flex flex-col items-center justify-center flex-1 gap-7">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  custom={i}
                  variants={mobileNavVariant}
                  initial="hidden"
                  animate="visible"
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="type-display text-[28px] text-paper hover:text-coral transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                custom={navLinks.length}
                variants={mobileNavVariant}
                initial="hidden"
                animate="visible"
                className="mt-6"
              >
                <Link
                  href="/diagnostico"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center gap-2.5 bg-primary text-ink font-extrabold text-[16px] px-8 py-4 btn-offset-paper"
                >
                  Pré-diagnóstico gratuito
                  <ArrowRight className="size-5" strokeWidth={2.5} />
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
