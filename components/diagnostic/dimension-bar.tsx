import type { DiagnosticDimension } from "./diagnostic-data";

interface DimensionBarProps {
  dim: DiagnosticDimension;
  score: number;
  idx: number;
}

export function DimensionBar({ dim, score, idx }: DimensionBarProps) {
  return (
    <div className="mb-3.5" style={{ animation: `fi 0.5s ease both`, animationDelay: `${idx * 0.1}s` }}>
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-[13px] font-semibold text-ink">{dim.name}</span>
        <span className="type-mono text-[12px] tracking-normal text-[rgba(25,20,16,0.55)]">
          {score}/12
        </span>
      </div>
      <div className="h-2 bg-[rgba(25,20,16,0.1)] overflow-hidden">
        <div
          className="h-full transition-[width] duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ width: `${(score / 12) * 100}%`, background: dim.color }}
        />
      </div>
    </div>
  );
}
