import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center px-4">
      <div className="text-center">
        <p className="font-mono text-sm text-accent tracking-[0.2em] uppercase mb-4">
          404
        </p>
        <h1 className="font-serif text-3xl md:text-4xl text-primary-foreground mb-4">
          Página não encontrada
        </h1>
        <p className="text-primary-foreground/70 mb-8 max-w-md mx-auto">
          A página que você procura não existe ou foi movida.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-8 py-3 rounded-full transition-all duration-300"
        >
          Voltar ao início
        </Link>
      </div>
    </div>
  );
}
