export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Mari Martino — Talent Acquisition",
    url: "https://mari-martino.vercel.app",
    description:
      "Estruturo operações de Talent Acquisition com dados, processo e inteligência de mercado. 17 anos construindo máquinas de contratação em empresas como iFood, CI&T e Sage.",
    founder: {
      "@type": "Person",
      name: "Mariane Martino",
      jobTitle: "Especialista em Talent Acquisition",
    },
    areaServed: {
      "@type": "Country",
      name: "BR",
    },
    serviceType: [
      "Mentoria Estratégica Individual em Talent Acquisition",
      "TA Intelligence Program",
      "Diagnóstico de Maturidade de TA",
      "Consultoria em Talent Acquisition",
      "People Analytics",
    ],
    knowsAbout: [
      "Talent Acquisition",
      "People Analytics",
      "TA Maturity Model",
      "Recrutamento Tech",
      "Employer Branding",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
