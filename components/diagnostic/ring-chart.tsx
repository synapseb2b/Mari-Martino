import type { MaturityStage } from "./diagnostic-data";

interface RingChartProps {
  score: number;
  max: number;
  stage: MaturityStage;
}

export function RingChart({ score, max, stage }: RingChartProps) {
  const r = 78;
  const c = 2 * Math.PI * r;
  const off = c - (score / max) * c;

  return (
    <div className="relative mx-auto" style={{ width: 200, height: 200 }}>
      <svg width="200" height="200" viewBox="0 0 200 200">
        <defs>
          <linearGradient id="rg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={stage.color} stopOpacity={0.35} />
            <stop offset="100%" stopColor={stage.color} stopOpacity={0.08} />
          </linearGradient>
        </defs>
        <circle
          cx="100"
          cy="100"
          r={r}
          fill="none"
          stroke="url(#rg)"
          strokeWidth="10"
        />
        <circle
          cx="100"
          cy="100"
          r={r}
          fill="none"
          stroke={stage.color}
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={off}
          transform="rotate(-90 100 100)"
          style={{
            transition: "stroke-dashoffset 1.4s cubic-bezier(0.22,1,0.36,1)",
          }}
        />
      </svg>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <div
          className="text-[38px] font-extrabold leading-none tabular-nums"
          style={{ color: stage.color }}
        >
          {score}
        </div>
        <div className="text-[11px] text-[#64748b] mt-1 tracking-[0.06em] uppercase font-semibold">
          de {max} pts
        </div>
      </div>
    </div>
  );
}
