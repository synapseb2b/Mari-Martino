"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  AlertTriangle,
  Target,
  RotateCcw,
  Clock,
  Zap,
  CircleDot,
  CheckCircle2,
  Shield,
  Lightbulb,
  BarChart3,
} from "lucide-react";

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

/* ──────────────────────────────────────────
   Keyframe styles injected once
   ────────────────────────────────────────── */
const KEYFRAMES = `
@keyframes fi {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes pg {
  0%, 100% { box-shadow: 0 0 0 0 rgba(139,92,246,0); }
  50%      { box-shadow: 0 0 32px 4px rgba(139,92,246,0.15); }
}
`;

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

  /* ── Quiz navigation ── */
  function pick(score: number) {
    setAnim(true);
    setAns({ ...ans, [gIdx]: score });
    setTimeout(() => {
      if (cQ < 2) {
        setCQ(cQ + 1);
      } else if (cDim < 4) {
        setCDim(cDim + 1);
        setCQ(0);
      } else {
        setScreen("result");
        setTimeout(() => setShowRes(true), 100);
      }
      setAnim(false);
    }, 350);
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
  const DIcon = dim?.icon;

  /* ════════════════════════════════════════
     INTRO SCREEN
     ════════════════════════════════════════ */
  if (screen === "intro") {
    return (
      <div className="min-h-screen bg-[#0A0F1E] flex items-center justify-center p-6 font-sans relative">
        <style>{KEYFRAMES}</style>

        {/* Subtle grid bg */}
        <div className="absolute inset-0 bg-grid opacity-50" />

        {/* Back to site link */}
        <Link
          href="/"
          className="absolute top-6 left-6 flex items-center gap-1.5 text-[#64748b] hover:text-primary text-sm font-sans transition-colors z-10"
        >
          <ArrowLeft size={14} />
          Voltar ao site
        </Link>

        <div className="relative z-10 max-w-[580px] w-full text-center animate-[fi_0.6s_ease]">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-[18px] py-[7px] rounded-full mb-9 bg-primary/10 border border-primary/20">
            <Clock size={13} className="text-primary" />
            <span className="text-[11.5px] text-primary tracking-[0.06em] uppercase font-semibold">
              Diagn&oacute;stico gratuito &middot; 5 minutos
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[clamp(32px,5vw,46px)] font-extrabold text-[#f8fafc] leading-[1.12] mb-[18px] tracking-tight">
            Qual &eacute; o n&iacute;vel de maturidade da{" "}
            <span className="text-gradient">
              Aquisi&ccedil;&atilde;o de Talentos
            </span>{" "}
            da sua empresa?
          </h1>

          {/* Subheading */}
          <p className="text-base text-[#94a3b8] leading-[1.7] mx-auto mb-11 max-w-[480px]">
            15 perguntas para descobrir se sua opera&ccedil;&atilde;o de recrutamento est&aacute;
            acelerando ou freando o crescimento. Resultado imediato com
            diagn&oacute;stico e a&ccedil;&otilde;es priorit&aacute;rias.
          </p>

          {/* Dimension cards */}
          <div className="grid grid-cols-3 gap-2.5 mb-11 max-w-[400px] mx-auto">
            {INTRO_CARDS.map((c, i) => {
              const I = c.icon;
              return (
                <div
                  key={i}
                  className="py-3.5 px-2 bg-card/50 border border-border rounded-[10px] text-center animate-[fi_0.5s_ease_both]"
                  style={{ animationDelay: `${0.1 + i * 0.07}s` }}
                >
                  <I size={20} color={c.color} className="mx-auto mb-1.5" />
                  <div className="text-[11px] text-[#64748b] tracking-[0.04em]">
                    {c.label}
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA button */}
          <button
            onClick={() => setScreen("quiz")}
            className="inline-flex items-center gap-2.5 px-[52px] py-4 bg-primary text-white border-none rounded-xl font-sans text-base font-bold cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(139,92,246,0.4)]"
            style={{
              boxShadow: "0 4px 32px rgba(139,92,246,0.3)",
            }}
          >
            Iniciar Diagn&oacute;stico <ArrowRight size={18} />
          </button>

          {/* Footer credit */}
          <p className="text-xs text-[#334155] mt-7">
            Desenvolvido por{" "}
            <strong className="text-[#64748b]">Mariane Martino</strong>
            {" "}&middot; Senior Tech TA &middot; 17+ anos
          </p>
        </div>
      </div>
    );
  }

  /* ════════════════════════════════════════
     QUIZ SCREEN
     ════════════════════════════════════════ */
  if (screen === "quiz") {
    return (
      <div className="min-h-screen bg-[#0A0F1E] flex flex-col font-sans">
        <style>{KEYFRAMES}</style>

        {/* Top bar */}
        <div className="px-7 pt-[18px] pb-0">
          {/* Dimension name + progress count */}
          <div className="flex items-center justify-between mb-2.5">
            <span
              className="flex items-center gap-2 text-xs font-semibold"
              style={{ color: dim.color }}
            >
              <DIcon size={14} /> {dim.name}
            </span>
            <span className="text-xs text-[#475569] font-medium">
              {answered}/{total}
            </span>
          </div>

          {/* Progress bar */}
          <div className="h-[3px] bg-[#1E293B] rounded-sm overflow-hidden">
            <div
              className="h-full rounded-sm transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                width: `${(answered / total) * 100}%`,
                background: "linear-gradient(90deg, #8B5CF6, #6366F1)",
              }}
            />
          </div>

          {/* Dimension step indicators */}
          <div className="flex gap-[5px] mt-2.5">
            {DIMENSIONS.map((d, i) => {
              const I = d.icon;
              const done = i < cDim;
              const cur = i === cDim;
              return (
                <div
                  key={d.id}
                  className="flex-1 flex items-center justify-center py-1.5 rounded-md transition-all duration-300"
                  style={{
                    background: done
                      ? `${d.color}18`
                      : cur
                        ? `${d.color}10`
                        : "transparent",
                    border: cur
                      ? `1px solid ${d.color}40`
                      : "1px solid transparent",
                  }}
                >
                  {done ? (
                    <CheckCircle2 size={12} color={d.color} />
                  ) : (
                    <I size={12} color={cur ? d.color : "#334155"} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Question area */}
        <div className="flex-1 flex items-center justify-center px-7 py-6">
          <div
            className="max-w-[620px] w-full transition-all duration-300 ease-out"
            style={{
              opacity: anim ? 0 : 1,
              transform: anim ? "translateY(8px)" : "translateY(0)",
            }}
          >
            {/* Question number */}
            <div className="text-[11.5px] text-primary mb-3.5 tracking-[0.06em] flex items-center gap-1.5 font-semibold uppercase">
              <CircleDot size={12} /> PERGUNTA {gIdx + 1} DE {total}
            </div>

            {/* Question text */}
            <h2 className="text-[clamp(22px,3.5vw,27px)] font-bold text-[#f1f5f9] leading-[1.35] mb-8 tracking-tight">
              {q.q}
            </h2>

            {/* Options */}
            <div className="flex flex-col gap-2">
              {q.options.map((o, i) => {
                const sel = ans[gIdx] === o.score;
                return (
                  <button
                    key={i}
                    onClick={() => pick(o.score)}
                    className="flex items-start gap-3 px-[18px] py-[15px] rounded-[10px] text-[#e2e8f0] font-sans text-sm leading-relaxed text-left cursor-pointer transition-all duration-200 hover:bg-[#ffffff06] hover:border-[#ffffff18]"
                    style={{
                      background: sel ? `${dim.color}12` : "rgba(255,255,255,0.02)",
                      border: sel
                        ? `1.5px solid ${dim.color}50`
                        : "1.5px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <span
                      className="flex items-center justify-center min-w-[24px] h-6 rounded-md text-[11px] shrink-0 mt-px transition-all duration-200 font-semibold"
                      style={{
                        background: sel ? dim.color : "#1E293B",
                        border: sel ? "none" : "1px solid #334155",
                        color: sel ? "#fff" : "#475569",
                      }}
                    >
                      {String.fromCharCode(65 + i)}
                    </span>
                    {o.text}
                  </button>
                );
              })}
            </div>

            {/* Back button */}
            {gIdx > 0 && (
              <button
                onClick={back}
                className="mt-7 px-[18px] py-[9px] bg-transparent border border-border rounded-lg text-[#64748b] font-sans text-[13px] cursor-pointer inline-flex items-center gap-1.5 transition-colors hover:border-primary/40 hover:text-primary"
              >
                <ArrowLeft size={14} /> Voltar
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  /* ════════════════════════════════════════
     RESULT SCREEN
     ════════════════════════════════════════ */
  if (screen === "result") {
    const SI = stage.icon;
    return (
      <div className="min-h-screen bg-[#0A0F1E] font-sans px-6 py-9 relative">
        <style>{KEYFRAMES}</style>

        {/* Subtle grid bg */}
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

        <div
          className="relative z-10 max-w-[660px] mx-auto transition-all duration-800 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            opacity: showRes ? 1 : 0,
            transform: showRes ? "translateY(0)" : "translateY(20px)",
          }}
        >
          {/* ── Header ── */}
          <div className="text-center mb-10">
            {/* Stage badge */}
            <div
              className="inline-flex items-center gap-2 px-5 py-[7px] rounded-full mb-[22px]"
              style={{
                background: `${stage.color}12`,
                border: `1px solid ${stage.color}35`,
              }}
            >
              <SI size={14} color={stage.color} />
              <span
                className="text-xs tracking-[0.07em] uppercase font-semibold"
                style={{ color: stage.color }}
              >
                {stage.name} &middot; {stage.subtitle}
              </span>
            </div>

            <h1 className="text-[clamp(28px,5vw,38px)] font-extrabold text-[#f8fafc] leading-[1.18] mb-3.5 tracking-tight">
              Sua opera&ccedil;&atilde;o de TA est&aacute; no est&aacute;gio{" "}
              <span style={{ color: stage.color }}>
                {stage.name}
              </span>
            </h1>
            <p className="text-[15px] text-[#94a3b8] leading-[1.65] max-w-[520px] mx-auto">
              {stage.description}
            </p>
          </div>

          {/* ── Score ring + dimension bars ── */}
          <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-9 mb-9 items-start">
            <RingChart score={tScore} max={60} stage={stage} />
            <div>
              <h3 className="text-[11px] text-[#475569] uppercase tracking-[0.08em] mb-4 flex items-center gap-1.5 font-semibold">
                <BarChart3 size={12} /> Score por dimens&atilde;o
              </h3>
              {DIMENSIONS.map((d, i) => (
                <DimensionBar
                  key={d.id}
                  dim={d}
                  score={getDimScore(ans, i)}
                  idx={i}
                />
              ))}
            </div>
          </div>

          {/* ── Maturity scale ── */}
          <div className="bg-card/50 border border-border rounded-[14px] p-6 mb-7">
            <h3 className="text-[11px] text-[#475569] uppercase tracking-[0.08em] mb-3.5 flex items-center gap-1.5 font-semibold">
              <Zap size={12} /> Escala de maturidade
            </h3>
            <div className="flex gap-1.5">
              {STAGES.map((s) => {
                const SIc = s.icon;
                const act = s.id === stage.id;
                return (
                  <div
                    key={s.id}
                    className="flex-1 py-3.5 px-2 rounded-[10px] text-center transition-all duration-300"
                    style={{
                      background: act ? `${s.color}15` : "transparent",
                      border: act
                        ? `2px solid ${s.color}`
                        : "1px solid #1E293B",
                      animation: act ? "pg 3s ease infinite" : "none",
                    }}
                  >
                    <SIc
                      size={16}
                      color={act ? s.color : "#334155"}
                      className="mx-auto mb-1"
                    />
                    <div
                      className="text-[10px] font-bold uppercase tracking-[0.05em]"
                      style={{ color: act ? s.color : "#475569" }}
                    >
                      {s.name}
                    </div>
                    <div className="text-[9px] text-[#475569] mt-0.5 font-medium">
                      {s.range[0]}-{s.range[1]}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Risks ── */}
          <div className="bg-[#ef444410] border border-[#ef444425] rounded-[14px] p-[26px] mb-4">
            <h3 className="flex items-center gap-2 text-[15px] font-bold text-[#fca5a5] mb-4">
              <Shield size={16} color="#ef4444" /> Riscos do est&aacute;gio atual
            </h3>
            {stage.risks.map((r, i) => (
              <div key={i} className="flex gap-2.5 mb-2.5 items-start">
                <AlertTriangle
                  size={13}
                  color="#ef4444"
                  className="shrink-0 mt-[3px]"
                />
                <span className="text-sm text-[#e2e8f0] leading-relaxed">
                  {r}
                </span>
              </div>
            ))}
          </div>

          {/* ── Actions ── */}
          <div
            className="rounded-[14px] p-[26px] mb-4"
            style={{
              background: `${stage.color}08`,
              border: `1px solid ${stage.color}25`,
            }}
          >
            <h3
              className="flex items-center gap-2 text-[15px] font-bold mb-4"
              style={{ color: stage.color }}
            >
              <Target size={16} color={stage.color} /> A&ccedil;&otilde;es priorit&aacute;rias para
              avan&ccedil;ar
            </h3>
            {stage.actions.map((a, i) => (
              <div key={i} className="flex gap-2.5 mb-2.5 items-start">
                <span
                  className="flex items-center justify-center min-w-[22px] h-[22px] rounded-md text-[11px] font-semibold shrink-0 mt-0.5"
                  style={{
                    background: `${stage.color}20`,
                    color: stage.color,
                  }}
                >
                  {i + 1}
                </span>
                <span className="text-sm text-[#e2e8f0] leading-relaxed">
                  {a}
                </span>
              </div>
            ))}
          </div>

          {/* ── Cost Calculator ── */}
          <CostCalculator stage={stage} />

          {/* ── CTA card ── */}
          <div
            className="rounded-[18px] p-9 mt-8 text-center"
            style={{
              background: `linear-gradient(135deg, ${stage.color}10, ${stage.color}05)`,
              border: `1px solid ${stage.color}30`,
            }}
          >
            <div
              className="flex items-center justify-center w-12 h-12 rounded-xl mx-auto mb-4"
              style={{ background: `${stage.color}15` }}
            >
              <Lightbulb size={22} color={stage.color} />
            </div>
            <h3 className="text-[26px] font-extrabold text-[#f1f5f9] mb-2.5 tracking-tight">
              Quer acelerar essa evolu&ccedil;&atilde;o?
            </h3>
            <p className="text-sm text-[#94a3b8] leading-relaxed mb-1.5 max-w-[440px] mx-auto">
              {stage.cta}
            </p>
            <p className="text-[13px] text-[#64748b] mb-7">
              Sess&atilde;o de devolutiva personalizada com an&aacute;lise detalhada e plano de
              a&ccedil;&atilde;o sob medida.
            </p>
            <a
              href="https://wa.me/5519991396595?text=Ol%C3%A1%20Mari%2C%20fiz%20o%20diagn%C3%B3stico%20e%20gostaria%20de%20agendar%20uma%20devolutiva."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-11 py-[15px] bg-primary text-white border-none rounded-xl font-sans text-[15px] font-bold cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(139,92,246,0.4)]"
              style={{
                boxShadow: "0 4px 28px rgba(139,92,246,0.3)",
              }}
            >
              Agendar Devolutiva com a Mari <ChevronRight size={18} />
            </a>
          </div>

          {/* ── Footer ── */}
          <div className="text-center mt-9 pb-10">
            <button
              onClick={() => {
                setScreen("intro");
                setCDim(0);
                setCQ(0);
                setAns({});
                setShowRes(false);
              }}
              className="px-6 py-2.5 bg-transparent border border-border rounded-lg text-[#64748b] font-sans text-[13px] cursor-pointer inline-flex items-center gap-1.5 transition-colors hover:border-primary/40 hover:text-primary"
            >
              <RotateCcw size={13} /> Refazer diagn&oacute;stico
            </button>
            <p className="text-[11px] text-[#1E293B] mt-6">
              TA Maturity Diagnostic&trade; &middot; Por Mariane Martino &middot; Acelera&ccedil;&atilde;o de Maturidade de TA
            </p>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
