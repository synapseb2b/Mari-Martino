"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, TriangleAlert, Target, RotateCcw } from "lucide-react";

import {
  DIMENSIONS,
  STAGES,
  INTRO_CARDS,
  getStage,
  getDimScore,
} from "./diagnostic-data";
import { RingChart } from "./ring-chart";
import { DimensionBar } from "./dimension-bar";
import { CostCalculator } from "./cost-calculator";

const KEYFRAMES = `
@keyframes fi { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: translateY(0); } }
@keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
`;

const SHORTS = ["Processo", "Dados", "Tecnologia", "Liderança", "Marca"];

function Asterisk({ size = 120 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth={7}
      strokeLinecap="round"
    >
      <path d="M50 8v84" />
      <path d="M13.6 29l72.8 42" />
      <path d="M86.4 29l-72.8 42" />
    </svg>
  );
}

export function TADiagnostic() {
  const [screen, setScreen] = useState<"intro" | "quiz" | "result">("intro");
  const [cDim, setCDim] = useState(0);
  const [cQ, setCQ] = useState(0);
  const [ans, setAns] = useState<Record<number, number>>({});
  const [anim, setAnim] = useState(false);
  const [showRes, setShowRes] = useState(false);

  const total = 15;
  const answered = Object.keys(ans).length;
  const gIdx = cDim * 3 + cQ;
  const tScore = Object.values(ans).reduce((a, b) => a + b, 0);
  const stage = getStage(tScore);
  const stageAccent = stage.color === "#191410" ? "#E8432D" : stage.color;

  function pick(score: number) {
    setAnim(true);
    setAns({ ...ans, [gIdx]: score });
    setTimeout(() => {
      if (cQ < 2) setCQ(cQ + 1);
      else if (cDim < 4) {
        setCDim(cDim + 1);
        setCQ(0);
      } else {
        setScreen("result");
        setTimeout(() => setShowRes(true), 100);
      }
      setAnim(false);
    }, 320);
  }

  function back() {
    if (cQ > 0) setCQ(cQ - 1);
    else if (cDim > 0) {
      setCDim(cDim - 1);
      setCQ(2);
    }
  }

  const dim = DIMENSIONS[cDim];
  const q = dim?.questions[cQ];

  /* ══════════ INTRO ══════════ */
  if (screen === "intro") {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6 sm:px-8 py-12 relative font-sans">
        <style>{KEYFRAMES}</style>

        <Link
          href="/"
          className="absolute top-6 left-6 sm:left-7 inline-flex items-center gap-2 type-mono text-[12px] text-ink-soft hover:text-primary transition-colors"
        >
          <ArrowLeft size={14} strokeWidth={2.5} />
          Voltar ao site
        </Link>

        <div
          className="pointer-events-none absolute top-9 right-8 text-primary opacity-90"
          style={{ animation: "spin-slow 28s linear infinite" }}
        >
          <Asterisk size={120} />
        </div>

        <div className="max-w-[680px] w-full text-center" style={{ animation: "fi 0.6s cubic-bezier(0.22,1,0.36,1) both" }}>
          <span className="inline-flex items-center gap-2.5 border-[1.5px] border-ink px-[18px] py-2.5 type-mono text-[11.5px] text-ink mb-10">
            <span className="size-[9px] bg-primary inline-block" />
            Pré-diagnóstico gratuito · 5 minutos
          </span>

          <h1 className="type-display text-ink text-[clamp(32px,7vw,54px)] leading-none mb-[22px]">
            Qual é o nível de maturidade da{" "}
            <em className="em-serif text-primary">Aquisição de Talentos</em> da sua
            empresa?
          </h1>

          <p className="text-[17px] leading-relaxed text-ink-soft max-w-[520px] mx-auto mb-11">
            15 perguntas para descobrir se sua operação de recrutamento está
            acelerando ou freando o crescimento. Resultado imediato com uma
            leitura inicial e ações prioritárias.
          </p>

          <div className="flex flex-wrap justify-center gap-2.5 mb-12">
            {INTRO_CARDS.map((c) => (
              <span
                key={c.label}
                className="inline-flex items-center gap-2.5 border-[1.5px] border-ink px-4 py-2.5 type-mono text-[11px] tracking-[0.08em] text-ink"
              >
                <span className="size-2 inline-block" style={{ background: c.color }} />
                {c.label}
              </span>
            ))}
          </div>

          <button
            onClick={() => setScreen("quiz")}
            className="inline-flex items-center gap-3 bg-primary text-ink font-extrabold text-[17px] px-11 py-5 btn-offset cursor-pointer"
          >
            Iniciar Pré-diagnóstico
            <ArrowRight size={18} strokeWidth={2.5} />
          </button>

          <p className="type-mono text-[11px] tracking-[0.08em] text-[rgba(25,20,16,0.45)] mt-8">
            Desenvolvido por <strong className="text-ink">Mariane Martino</strong> ·
            Senior Tech TA · 17+ anos
          </p>
        </div>
      </div>
    );
  }

  /* ══════════ QUIZ ══════════ */
  if (screen === "quiz") {
    return (
      <div className="min-h-screen bg-background flex flex-col font-sans">
        <style>{KEYFRAMES}</style>

        {/* Top bar */}
        <div className="border-b-[1.5px] border-ink px-6 sm:px-8 pt-5 pb-4">
          <div className="max-w-[780px] mx-auto">
            <div className="flex items-center justify-between mb-3">
              <span
                className="type-mono text-[12px] tracking-[0.1em] font-semibold"
                style={{ color: dim.color }}
              >
                {dim.name}
              </span>
              <span className="type-mono text-[12px] tracking-normal text-[rgba(25,20,16,0.5)]">
                {answered}/{total}
              </span>
            </div>

            <div className="h-[5px] bg-[rgba(25,20,16,0.12)] overflow-hidden">
              <div
                className="h-full transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ width: `${(answered / total) * 100}%`, background: dim.color }}
              />
            </div>

            <div className="flex gap-1.5 mt-2.5">
              {DIMENSIONS.map((d, i) => {
                const done = i < cDim;
                const cur = i === cDim;
                return (
                  <div
                    key={d.id}
                    className="flex-1 flex items-center justify-center py-[7px] px-1"
                    style={{
                      background: done ? d.color : cur ? d.color + "22" : "rgba(25,20,16,0.06)",
                      border: cur ? `1.5px solid ${d.color}` : "1.5px solid transparent",
                    }}
                  >
                    <span
                      className="type-mono text-[10px] tracking-[0.08em]"
                      style={{ color: done ? "#F5F0E8" : cur ? d.color : "rgba(25,20,16,0.4)" }}
                    >
                      <span className="hidden sm:inline">{SHORTS[i]}</span>
                      <span className="sm:hidden">{SHORTS[i][0]}</span>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Question */}
        <div className="flex-1 flex items-center justify-center px-6 sm:px-8 py-10">
          <div
            className="max-w-[720px] w-full transition-all duration-300 ease-out"
            style={{
              opacity: anim ? 0 : 1,
              transform: anim ? "translateY(8px)" : "translateY(0)",
            }}
          >
            <div className="flex items-center gap-2.5 mb-[18px]">
              <span className="size-2.5 bg-primary inline-block" />
              <span className="type-mono text-[12px] tracking-[0.14em] text-primary font-semibold">
                Pergunta {gIdx + 1} de {total}
              </span>
            </div>

            <h2 className="type-subdisplay text-ink text-[clamp(22px,4vw,30px)] leading-[1.25] mb-9">
              {q.q}
            </h2>

            <div className="flex flex-col gap-2.5">
              {q.options.map((o, i) => (
                <button
                  key={i}
                  onClick={() => pick(o.score)}
                  className="flex items-start gap-4 px-5 py-[18px] bg-card border-[1.5px] border-ink text-ink text-[15px] leading-snug text-left cursor-pointer card-lift"
                >
                  <span className="type-mono flex items-center justify-center min-w-[26px] h-[26px] text-[12px] font-semibold shrink-0 bg-background border-[1.5px] border-[rgba(25,20,16,0.35)] text-ink-soft">
                    {String.fromCharCode(65 + i)}
                  </span>
                  {o.text}
                </button>
              ))}
            </div>

            {gIdx > 0 && (
              <button
                onClick={back}
                className="mt-8 inline-flex items-center gap-2 px-[18px] py-2.5 bg-transparent border-[1.5px] border-[rgba(25,20,16,0.3)] text-ink-soft type-mono text-[12px] tracking-[0.08em] cursor-pointer hover:border-primary hover:text-primary transition-colors"
              >
                <ArrowLeft size={13} strokeWidth={2.5} />
                Voltar
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  /* ══════════ RESULT ══════════ */
  if (screen === "result") {
    return (
      <div className="min-h-screen bg-background font-sans px-6 sm:px-8 py-16">
        <style>{KEYFRAMES}</style>

        <div
          className="max-w-[760px] mx-auto transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            opacity: showRes ? 1 : 0,
            transform: showRes ? "translateY(0)" : "translateY(20px)",
          }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <span
              className="inline-flex items-center gap-2.5 type-mono text-[11.5px] font-semibold px-[18px] py-2 mb-[26px] border-[1.5px]"
              style={{ background: stage.color + "12", borderColor: stage.color, color: stageAccent }}
            >
              {stage.name} · {stage.subtitle}
            </span>
            <h1 className="type-display text-ink text-[clamp(28px,6vw,44px)] leading-[1.05] mb-4">
              Sua operação de TA está no estágio{" "}
              <em className="em-serif" style={{ color: stageAccent }}>
                {stage.name}
              </em>
            </h1>
            <p className="text-[16px] leading-relaxed text-ink-soft max-w-[560px] mx-auto">
              {stage.description}
            </p>
          </div>

          {/* Score + bars */}
          <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-11 items-center mb-10">
            <RingChart score={tScore} max={60} stage={stage} />
            <div>
              <p className="type-mono text-[11px] tracking-[0.14em] text-[rgba(25,20,16,0.55)] mb-4">
                Score por dimensão
              </p>
              {DIMENSIONS.map((d, i) => (
                <DimensionBar key={d.id} dim={d} score={getDimScore(ans, i)} idx={i} />
              ))}
            </div>
          </div>

          {/* Maturity scale */}
          <div className="border-2 border-ink p-6 mb-6 bg-card">
            <p className="type-mono text-[11px] tracking-[0.14em] text-[rgba(25,20,16,0.55)] mb-4">
              Escala de maturidade
            </p>
            <div className="flex gap-2">
              {STAGES.map((s) => {
                const act = s.id === stage.id;
                return (
                  <div
                    key={s.id}
                    className="flex-1 py-3.5 px-2 text-center"
                    style={{
                      background: act ? s.color + "14" : "transparent",
                      border: act ? `2px solid ${s.color}` : "1px solid rgba(25,20,16,0.2)",
                    }}
                  >
                    <p
                      className="type-mono text-[11px] font-bold tracking-[0.08em]"
                      style={{ color: act ? (s.color === "#191410" ? "#191410" : s.color) : "rgba(25,20,16,0.45)" }}
                    >
                      {s.name}
                    </p>
                    <p className="type-mono text-[10px] tracking-normal text-[rgba(25,20,16,0.45)] mt-1">
                      {s.range[0]}–{s.range[1]}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Risks */}
          <div className="border-2 border-[#B3261E] bg-[rgba(179,38,30,0.05)] p-7 mb-5">
            <h3 className="flex items-center gap-2.5 type-subdisplay text-[17px] text-[#B3261E] mb-[18px]">
              <TriangleAlert size={17} strokeWidth={2} />
              Riscos do estágio atual
            </h3>
            <div className="flex flex-col gap-2.5">
              {stage.risks.map((r, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="size-[7px] bg-[#B3261E] shrink-0 mt-[7px]" />
                  <span className="text-[14.5px] leading-relaxed text-ink">{r}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="p-7 mb-5" style={{ border: `2px solid ${stage.color}`, background: stage.color + "0a" }}>
            <h3 className="flex items-center gap-2.5 type-subdisplay text-[17px] mb-[18px]" style={{ color: stageAccent }}>
              <Target size={17} strokeWidth={2} />
              Ações prioritárias para avançar
            </h3>
            <div className="flex flex-col gap-3">
              {stage.actions.map((a, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span
                    className="type-mono flex items-center justify-center min-w-[24px] h-6 text-[12px] font-bold shrink-0"
                    style={{ background: stage.color + "1c", color: stageAccent }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-[14.5px] leading-relaxed text-ink">{a}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cost Calculator */}
          <CostCalculator />

          {/* CTA */}
          <div className="bg-ink px-9 py-11 text-center">
            <h3 className="type-display text-paper text-[30px] mb-3">
              Quer <em className="em-serif text-coral">acelerar</em> essa evolução?
            </h3>
            <p className="text-[14.5px] leading-relaxed text-[rgba(245,240,232,0.7)] max-w-[460px] mx-auto mb-2">
              {stage.cta}
            </p>
            <p className="text-[13px] text-[rgba(245,240,232,0.45)] mb-7">
              Sessão de devolutiva personalizada com análise detalhada e plano de
              ação sob medida.
            </p>
            <a
              href="https://wa.me/5519991396595?text=Ol%C3%A1%20Mari%2C%20fiz%20o%20pr%C3%A9-diagn%C3%B3stico%20e%20gostaria%20de%20agendar%20uma%20devolutiva."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-paper text-ink font-extrabold text-[16px] px-9 py-[18px] btn-offset-vermillion"
            >
              Agendar Devolutiva com a Mari
              <ArrowRight size={17} strokeWidth={2.5} />
            </a>
          </div>

          {/* Footer */}
          <div className="text-center mt-9 pb-10">
            <button
              onClick={() => {
                setScreen("intro");
                setCDim(0);
                setCQ(0);
                setAns({});
                setShowRes(false);
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-transparent border-[1.5px] border-[rgba(25,20,16,0.3)] text-ink-soft type-mono text-[12px] tracking-[0.08em] cursor-pointer hover:border-primary hover:text-primary transition-colors"
            >
              <RotateCcw size={13} strokeWidth={2.5} />
              Refazer pré-diagnóstico
            </button>
            <p className="type-mono text-[10px] tracking-[0.1em] text-[rgba(25,20,16,0.35)] mt-6">
              TA Maturity Diagnostic™ · Por Mariane Martino · Aceleração de Maturidade de TA
            </p>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
