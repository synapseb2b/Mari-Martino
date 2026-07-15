import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="text-center">
        <p className="type-mono text-[13px] text-primary mb-6">404</p>
        <h1 className="type-display text-ink text-[clamp(40px,9vw,80px)] leading-none mb-5">
          Página <em className="em-serif text-primary">não encontrada</em>
        </h1>
        <p className="text-[16px] text-ink-soft mb-10 max-w-md mx-auto">
          A página que você procura não existe ou foi movida.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-3 bg-primary text-ink font-extrabold text-[16px] px-8 py-4 btn-offset"
        >
          Voltar ao início
          <ArrowRight className="size-[18px]" strokeWidth={2.5} />
        </Link>
      </div>
    </div>
  );
}
