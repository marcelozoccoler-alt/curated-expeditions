import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const SUGGESTIONS = [
  { to: "/destinos", label: "Destinos com curadoria" },
  { to: "/grupos-guia-local", label: "Grupos com guia local" },
  { to: "/cruzeiros-fluviais", label: "Cruzeiros fluviais" },
  { to: "/diario", label: "Diário de viagem" },
  { to: "/perguntas-frequentes", label: "Perguntas frequentes" },
  { to: "/contato", label: "Falar com a Create Travel" },
];

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <SEO
        title="Página não encontrada — Create Travel"
        description="A página que você procura não existe ou mudou de endereço. Explore nossos destinos, grupos com guia local e roteiros sob medida."
        canonicalPath={location.pathname}
        noindex
      />
      <Header />
      <main className="flex flex-1 items-center justify-center px-6 py-24">
        <div className="w-full max-w-2xl text-center">
          <p className="font-sans text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Erro 404
          </p>
          <h1 className="mt-4 font-serif text-3xl text-foreground md:text-4xl">
            Esta rota não existe no nosso mapa
          </h1>
          <p className="mt-4 text-base text-muted-foreground">
            A página que você procura pode ter mudado de endereço. Siga por um destes caminhos:
          </p>
          <nav className="mt-10 grid gap-3 sm:grid-cols-2">
            {SUGGESTIONS.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className="rounded-md border border-border px-5 py-4 text-left font-sans text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                {s.label}
              </Link>
            ))}
          </nav>
          <Link
            to="/"
            className="mt-10 inline-block font-sans text-sm uppercase tracking-widest text-primary underline-offset-4 hover:underline"
          >
            Voltar para a home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
