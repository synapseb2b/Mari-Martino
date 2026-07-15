import type { Metadata } from "next";
import { TADiagnostic } from "@/components/diagnostic/ta-diagnostic";

export const metadata: Metadata = {
  title: "Pré-diagnóstico de Maturidade de TA",
  description:
    "Descubra o nível de maturidade da Aquisição de Talentos da sua empresa. 15 perguntas, 5 minutos, resultado imediato com uma leitura inicial e ações prioritárias.",
};

export default function DiagnosticoPage() {
  return <TADiagnostic />;
}
