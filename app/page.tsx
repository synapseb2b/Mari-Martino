import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services-section";
import { AuthoritySection } from "@/components/sections/authority-section";
import { ForWhoSection } from "@/components/sections/for-who-section";
import { DiagnosticPreview } from "@/components/sections/diagnostic-preview";
import { FinalCTA } from "@/components/sections/final-cta";
import { JsonLd } from "@/components/json-ld";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <AuthoritySection />
        <ForWhoSection />
        <DiagnosticPreview />
        <FinalCTA />
      </main>
      <Footer />
      <JsonLd />
    </div>
  );
}
