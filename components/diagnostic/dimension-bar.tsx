import type { DiagnosticDimension } from "./diagnostic-data";

interface DimensionBarProps {
  dim: DiagnosticDimension;
  score: number;
  idx: number;
}

export function DimensionBar({ dim, score, idx }: DimensionBarProps) {
  const Icon = dim.icon;

  return (
    <div
      className="mb-3.5 animate-[fi_0.5s_ease_both]"
      style={
        {
          "--dim-color": dim.color,
          animationDelay: `${idx * 0.1}s`,
        } as React.CSSProperties
      }
    >
      <div className="flex items-center justify-between mb-1.5">
        <span className="flex items-center gap-2 font-sans text-[13px] text-[#cbd5e1] font-medium">
          <Icon size={14} color={dim.color} /> {dim.name}
        </span>
        <span
          className="text-xs font-bold tabular-nums"
          style={{ color: dim.color }}
        >
          {score}/12
        </span>
      </div>
      <div className="h-[5px] bg-[#1e1b4b20] rounded-[3px] overflow-hidden">
        <div
          className="h-full rounded-[3px] transition-[width] duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            width: `${(score / 12) * 100}%`,
            background: `linear-gradient(90deg, ${dim.color}70, ${dim.color})`,
          }}
        />
      </div>
    </div>
  );
}
