export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Mari Martino — Talent Acquisition",
    url: "https://mari-martino.vercel.app",
    description:
      "Arquitetura de operações de Talent Acquisition com dados, processo e IA. 17 anos em iFood, CI&T e Sage, com 1.000+ contratações tech lideradas em um único ano.",
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
      "Diagnóstico Estratégico de Talent Acquisition",
      "Projeto de Arquitetura de TA",
      "Fast Tracks de IA em Recrutamento",
      "Palestras e Masterclasses",
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
