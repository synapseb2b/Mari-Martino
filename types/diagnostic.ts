import type { LucideIcon } from "lucide-react";

export interface DiagnosticOption {
  text: string;
  score: number;
}

export interface DiagnosticQuestion {
  q: string;
  options: DiagnosticOption[];
}

export interface DiagnosticDimension {
  id: string;
  name: string;
  icon: LucideIcon;
  color: string;
  questions: DiagnosticQuestion[];
}

export interface MaturityStage {
  id: string;
  name: string;
  subtitle: string;
  range: [number, number];
  color: string;
  icon: LucideIcon;
  description: string;
  risks: string[];
  actions: string[];
  cta: string;
}

export interface DiagnosticState {
  screen: "intro" | "quiz" | "result";
  currentDimension: number;
  currentQuestion: number;
  answers: Record<number, number>;
  showResult: boolean;
}
