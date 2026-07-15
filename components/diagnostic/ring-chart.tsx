import type { MaturityStage } from "./diagnostic-data";

interface RingChartProps {
  score: number;
  max: number;
  stage: MaturityStage;
}

export function RingChart({ score, max, stage }: RingChartProps) {
  const r = 82;
  const c = 2 * Math.PI * r; // ≈ 515.2
  const off = c * (1 - score / max);

  return (
    <div className="relative justify-self-center" style={{ width: 200, height: 200 }}>
      <svg width="200" height="200" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r={r} fill="none" stroke="rgba(25,20,16,0.1)" strokeWidth="14" />
        <circle
          cx="100"
          cy="100"
          r={r}
          fill="none"
          stroke={stage.color}
          strokeWidth="14"
          strokeLinecap="butt"
          strokeDasharray={c}
          strokeDashoffset={off}
          transform="rotate(-90 100 100)"
          style={{ transition: "stroke-dashoffset 1.2s cubic-bezier(0.22,1,0.36,1)" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="type-display text-ink text-[48px] leading-none tabular-nums">{score}</span>
        <span className="type-mono text-[11px] tracking-[0.1em] text-[rgba(25,20,16,0.5)] mt-1">
          de {max} pontos
        </span>
      </div>
    </div>
  );
}
