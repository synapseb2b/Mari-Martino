import type { Metadata } from "next";
import { Archivo, Instrument_Serif, Spline_Sans_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { WhatsAppFloatingButton } from "@/components/ui/whatsapp-floating-button";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const splineMono = Spline_Sans_Mono({
  subsets: ["latin"],
  variable: "--font-spline-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mari-martino.vercel.app"),
  title: {
    default: "Mari Martino | Talent Acquisition",
    template: "%s | Mari Martino",
  },
  description:
    "Arquitetura de operações de Talent Acquisition com dados, processo e IA. 17 anos em iFood, CI&T e Sage, com 1.000+ contratações tech lideradas em um único ano.",
  keywords: [
    "talent acquisition",
    "recrutamento",
    "maturidade de TA",
    "diagnóstico de recrutamento",
    "IA no recrutamento",
    "people analytics",
    "Mari Martino",
    "Mariane Martino",
    "consultoria de recrutamento",
    "time-to-fill",
  ],
  authors: [{ name: "Mariane Martino" }],
  creator: "Mariane Martino",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://mari-martino.vercel.app",
    siteName: "Mari Martino — Talent Acquisition",
    title: "Mari Martino | Talent Acquisition",
    description:
      "Arquitetura de operações de TA com dados, processo e IA. Diagnóstico gratuito de maturidade de recrutamento para sua empresa.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mari Martino — Talent Acquisition",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mari Martino | Talent Acquisition",
    description:
      "Arquitetura de operações de TA com dados, processo e IA. Diagnóstico gratuito.",
  },
  alternates: {
    canonical: "https://mari-martino.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${archivo.variable} ${instrumentSerif.variable} ${splineMono.variable}`}
    >
      <body className="font-sans antialiased bg-background text-foreground">
        <TooltipProvider>
          <Toaster />
          <WhatsAppFloatingButton />
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
