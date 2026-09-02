import { Link, Navigate, useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RoteiroMarkdown } from "@/components/viagem/RoteiroMarkdown";
import { FotosDoDia } from "@/components/viagem/FotosDoDia";
import { TrilhaSonora } from "@/components/viagem/TrilhaSonora";
import { getTrilha } from "@/lib/viagens/trilhas";
import {
  BotaoOuvir,
  NarracaoAviso,
  NarracaoProvider,
  TextoNarravel,
} from "@/components/viagem/NarracaoRoteiro";
import { textoParaNarracao, vozDaCidade } from "@/lib/viagens/narracao";
import {
  CIDADES,
  CIDADES_EM_BREVE,
  VIAGEM,
  VIAGEM_PATH,
  getCidade,
} from "@/lib/viagens/capitaisImperiais";
import { CONTACT } from "@/lib/types";
import { Clock, BookOpen, ArrowRight } from "lucide-react";

const DOMAIN = CONTACT.domain.replace(/\/$/, "");

const ViagemCidade = () => {
  const { cidade } = useParams();
  const data = getCidade(cidade);

  if (!data) return <Navigate to={VIAGEM_PATH} replace />;

  const trilha = getTrilha(data.slug);
  const voz = vozDaCidade(data.slug);
  const path = `${VIAGEM_PATH}/${data.slug}`;
  const textoDoBloco = (b: (typeof data.blocks)[number]) =>
    textoParaNarracao(
      b.subtitle ?? b.title,
      b.intro,
      ...b.items.map((i) => textoParaNarracao(i.heading, i.body))
    );
  const textoCidade = textoParaNarracao(
    data.title,
    data.subtitle,
    ...data.blocks.map((b) => textoDoBloco(b))
  );
  const description = `Roteiro dia a dia em ${data.nome} (${data.dates}) do grupo exclusivo e autoral Create Travel: história, lendas, hotel, gastronomia e cada hora da viagem.`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: `${data.title} — ${data.subtitle}`,
      description,
      inLanguage: "pt-BR",
      image: `${DOMAIN}${data.hero}`,
      mainEntityOfPage: `${DOMAIN}${path}`,
      author: { "@type": "Organization", name: "Create Travel" },
      publisher: { "@type": "Organization", name: "Create Travel" },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: `${DOMAIN}/` },
        { "@type": "ListItem", position: 2, name: VIAGEM.nome, item: `${DOMAIN}${VIAGEM_PATH}` },
        { "@type": "ListItem", position: 3, name: data.nome, item: `${DOMAIN}${path}` },
      ],
    },
  ];

  return (
    <NarracaoProvider voz={voz}>
    <div className="min-h-screen">
      <SEO
        title={`${data.nome} dia a dia — roteiro do grupo`}
        description={description}
        canonicalPath={path}
        ogType="article"
        keywords={`roteiro ${data.nome}, o que fazer em ${data.nome}, viagem em grupo ${data.nome}, ${data.nome} outubro 2026`}
        jsonLd={jsonLd}
      />
      <Header />

      {/* Hero */}
      <section className="relative h-[62vh] min-h-[420px] w-full overflow-hidden print:h-auto">
        <img
          src={data.hero}
          alt={`${data.nome} — ${data.subtitle}`}
          width={1600}
          height={912}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/20" />
        <div className="container-editorial relative h-full flex flex-col justify-end pb-14">
          <p className="text-caption text-gold mb-3">{VIAGEM.nome} · {data.dates}</p>
          <h1 className="font-serif text-4xl sm:text-6xl font-semibold text-primary-foreground leading-tight">
            {data.nome}
          </h1>
          <p className="mt-3 text-lg text-primary-foreground/85 max-w-2xl font-serif italic">
            {data.subtitle}
          </p>
        </div>
      </section>

      <main className="container-editorial py-12">
        <Breadcrumbs items={[{ label: VIAGEM.nome, href: VIAGEM_PATH }, { label: data.nome }]} />

        <NarracaoAviso cidade={data.nome} textoCompleto={textoCidade} />

        {/* Navegação entre cidades */}
        <nav className="mt-6 flex flex-wrap gap-2" aria-label="Cidades da viagem">
          {CIDADES.map((c) => (
            <Link
              key={c.slug}
              to={`${VIAGEM_PATH}/${c.slug}`}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                c.slug === data.slug
                  ? "border-gold bg-gold text-primary-foreground"
                  : "border-border hover:border-gold/60 text-foreground/80"
              }`}
            >
              {c.nome}
            </Link>
          ))}
          {CIDADES_EM_BREVE.map((c) => (
            <span
              key={c.slug}
              className="rounded-full border border-dashed border-border px-4 py-1.5 text-sm text-muted-foreground"
            >
              {c.nome} · em breve
            </span>
          ))}
        </nav>

        <div className="mt-12 grid lg:grid-cols-[220px_1fr] gap-10">
          {/* Índice */}
          <aside className="hidden lg:block print:hidden">
            <div className="sticky top-24 space-y-2">
              <p className="text-caption text-gold mb-3">Nesta cidade</p>
              {data.blocks.map((b) => (
                <a
                  key={b.id}
                  href={`#${b.id}`}
                  className={`block text-sm leading-snug transition-colors hover:text-gold ${
                    b.kind === "day" ? "font-medium text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {b.title}
                </a>
              ))}
            </div>
          </aside>

          <div className="min-w-0 space-y-16">
            {data.blocks.map((block) =>
              block.kind === "day" ? (
                <article key={block.id} id={block.id} className="scroll-mt-24">
                  <header className="border-t-2 border-gold pt-5 mb-6">
                    <p className="text-caption text-gold">{block.title}</p>
                    {block.subtitle && (
                      <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mt-2 leading-tight">
                        {block.subtitle}
                      </h2>
                    )}
                    <div className="mt-3">
                      <BotaoOuvir
                        id={`${block.id}-completo`}
                        texto={textoDoBloco(block)}
                        label="Ouvir o dia inteiro"
                      />
                    </div>
                  </header>

                  {block.intro && (
                    <div className="mb-8">
                      <div className="mb-2">
                        <BotaoOuvir
                          id={`${block.id}-intro`}
                          texto={textoParaNarracao(block.intro)}
                          label="Ouvir esta abertura"
                        />
                      </div>
                      <TextoNarravel
                        id={`${block.id}-intro`}
                        texto={textoParaNarracao(block.intro)}
                      >
                        <RoteiroMarkdown>{block.intro}</RoteiroMarkdown>
                      </TextoNarravel>
                    </div>
                  )}

                  <ol className="relative space-y-8 border-l border-border/70 pl-6 sm:pl-8">
                    {block.items.map((item) => (
                      <li key={item.id} className="relative">
                        <span className="absolute -left-[1.72rem] sm:-left-[2.22rem] top-1.5 h-3 w-3 rounded-full bg-gold ring-4 ring-background" />
                        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
                          {item.time && (
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-navy px-3 py-1 text-xs font-medium text-primary-foreground">
                              <Clock size={12} /> {item.time}
                            </span>
                          )}
                          <h3 className="font-serif text-xl sm:text-2xl font-semibold text-foreground">
                            {item.heading}
                          </h3>
                          <BotaoOuvir
                            id={item.id}
                            texto={textoParaNarracao(item.heading, item.body)}
                          />
                        </div>
                        <TextoNarravel
                          id={item.id}
                          texto={textoParaNarracao(item.heading, item.body)}
                        >
                          <RoteiroMarkdown>{item.body}</RoteiroMarkdown>
                        </TextoNarravel>
                      </li>
                    ))}
                  </ol>

                  <FotosDoDia cidadeSlug={data.slug} blocoId={block.id} titulo={block.title} />
                </article>
              ) : (
                <section key={block.id} id={block.id} className="scroll-mt-24">
                  <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground mb-2 leading-tight">
                    {block.title}
                  </h2>
                  {block.subtitle && (
                    <p className="text-muted-foreground italic mb-4">{block.subtitle}</p>
                  )}
                  <div className="mb-4">
                    <BotaoOuvir
                      id={`${block.id}-completo`}
                      texto={textoDoBloco(block)}
                      label="Ouvir este capítulo"
                    />
                  </div>
                  {block.intro && (
                    <div className="mb-6">
                      <TextoNarravel
                        id={`${block.id}-intro`}
                        texto={textoParaNarracao(block.title, block.intro)}
                      >
                        <RoteiroMarkdown>{block.intro}</RoteiroMarkdown>
                      </TextoNarravel>
                    </div>
                  )}
                  <div className="space-y-7">
                    {block.items.map((item) => (
                      <div
                        key={item.id}
                        className="rounded-2xl border border-border bg-card p-5 sm:p-6"
                      >
                        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                          <h3 className="font-serif text-lg sm:text-xl font-semibold text-foreground">
                            {item.time ? `${item.time} — ${item.heading}` : item.heading}
                          </h3>
                          <BotaoOuvir
                            id={item.id}
                            texto={textoParaNarracao(item.heading, item.body)}
                          />
                        </div>
                        <TextoNarravel
                          id={`${item.id}-texto`}
                          texto={textoParaNarracao(item.heading, item.body)}
                        >
                          <RoteiroMarkdown>{item.body}</RoteiroMarkdown>
                        </TextoNarravel>
                      </div>
                    ))}
                  </div>
                </section>
              )
            )}

            <div className="rounded-2xl bg-navy text-primary-foreground p-8 print:hidden">
              <BookOpen size={22} className="text-gold mb-3" />
              <h2 className="font-serif text-2xl font-semibold mb-2">
                Este capítulo vira livro
              </h2>
              <p className="text-primary-foreground/85 max-w-2xl">
                Cada dia registrado aqui — com as fotos que chegarem durante a viagem — compõe o
                livro impresso que cada viajante recebe no fim da jornada.
              </p>
              <Link
                to={VIAGEM_PATH}
                className="inline-flex items-center gap-2 mt-5 text-gold hover:underline underline-offset-4"
              >
                Ver a viagem completa <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </main>

      {trilha && (
        <TrilhaSonora titulo={trilha.titulo} descricao={trilha.descricao} faixas={trilha.faixas} />
      )}

      <Footer />
    </div>
    </NarracaoProvider>
  );
};

export default ViagemCidade;
