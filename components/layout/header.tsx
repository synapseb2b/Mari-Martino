"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Serviços", href: "#services" },
  { label: "Sobre", href: "#authority" },
  { label: "Diagnóstico", href: "/diagnostico" },
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
  const { scrollY } = useScroll();

  /* Scroll-driven opacity: 60% → 95% */
  const headerBg = useTransform(
    scrollY,
    [0, 120],
    ["rgba(10, 15, 30, 0.6)", "rgba(10, 15, 30, 0.95)"]
  );

  const headerBlur = useTransform(scrollY, [0, 120], [8, 20]);
  const backdropValue = useTransform(headerBlur, (v) => `blur(${v}px)`);

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
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }}
        style={{
          backgroundColor: headerBg,
          backdropFilter: backdropValue,
          WebkitBackdropFilter: backdropValue,
        }}
        className="fixed top-0 w-full z-50 border-b border-white/[0.06]"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <span className="font-extrabold text-lg text-foreground tracking-tight">
                Mari Martino
              </span>
              <span className="text-xs text-muted-foreground ml-2 hidden sm:inline">
                Talent Acquisition
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/diagnostico"
                className="inline-flex items-center gap-2 bg-primary text-white rounded-full px-5 py-2.5 text-sm font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 hover:-translate-y-0.5"
              >
                Diagnóstico Gratuito
                <ArrowRight className="size-4" />
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex items-center justify-center size-10 rounded-lg text-foreground hover:bg-white/10 transition-colors"
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile Full-Screen Overlay ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl lg:hidden flex flex-col"
          >
            {/* Close button */}
            <div className="flex justify-end p-4">
              <button
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center size-10 rounded-lg text-foreground hover:bg-white/10 transition-colors"
                aria-label="Fechar menu"
              >
                <X className="size-6" />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col items-center justify-center flex-1 gap-6">
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
                    className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile CTA */}
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
                  className="inline-flex items-center gap-2 bg-primary text-white rounded-full px-7 py-3.5 text-base font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300"
                >
                  Diagnóstico Gratuito
                  <ArrowRight className="size-5" />
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
