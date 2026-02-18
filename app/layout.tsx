import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { WhatsAppFloatingButton } from "@/components/ui/whatsapp-floating-button";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mari-martino.vercel.app"),
  title: {
    default: "Mari Martino | Talent Acquisition",
    template: "%s | Mari Martino",
  },
  description:
    "Estruturo operações de Talent Acquisition com dados, processo e inteligência de mercado. 17 anos construindo máquinas de contratação em empresas como iFood, CI&T e Sage.",
  keywords: [
    "talent acquisition",
    "recrutamento",
    "maturidade de TA",
    "diagnóstico de recrutamento",
    "mentoria TA",
    "people analytics",
    "Mari Martino",
    "Mariane Martino",
    "consultoria RH",
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
      "Estruturo operações de TA com dados e inteligência de mercado. Diagnóstico gratuito de maturidade de recrutamento para sua empresa.",
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
      "Estruturo operações de TA com dados e inteligência de mercado. Diagnóstico gratuito.",
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
    <html lang="pt-BR" className={manrope.variable}>
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
