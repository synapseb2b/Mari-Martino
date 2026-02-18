import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mari Martino — TA Specialist",
    short_name: "Mari Martino",
    description:
      "Aceleração de Maturidade de TA com Dados. Diagnóstico gratuito de maturidade de recrutamento.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8f7ff",
    theme_color: "#0e0c24",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
