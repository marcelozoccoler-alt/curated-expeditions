import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CONTACT } from "@/lib/types";
import { testimonials } from "@/lib/testimonials";
import { Quote, Camera, BadgeCheck } from "lucide-react";

const DOMAIN = CONTACT.domain.replace(/\/$/, "");

const Depoimentos = () => {
  // Depoimentos reais e autorizados primeiro.
  const ordered = [...testimonials].sort(
    (a, b) => Number(Boolean(b.verified)) - Number(Boolean(a.verified)),
  );

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Nós viajamos! — histórias de viagem Create Travel",
      itemListElement: testimonials.map((t, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: t.title,
        item: `${DOMAIN}/depoimentos#${t.slug}`,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: `${DOMAIN}/` },
        { "@type": "ListItem", position: 2, name: "Nós viajamos!", item: `${DOMAIN}/depoimentos` },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Nós viajamos! — histórias reais de viagem | Create Travel"
        description="Relatos de viajantes que fizeram roteiro sob medida com a Create Travel: França, Grécia, Turquia, Israel, Suíça e mais, com bastidores do atendimento."
        canonicalPath="/depoimentos"
        keywords="nós viajamos, histórias de viagem create travel, experiência de viagem, atendimento personalizado, roteiro sob medida, agência de viagens boutique"
        jsonLd={jsonLd}
      />
      <Header />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-primary text-primary-foreground">
          <div className="container-editorial">
            <div className="gold-line mb-6" />
            <h1 className="heading-hero mb-6 max-w-4xl">
              Nós <span className="text-gold italic">viajamos!</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 font-light max-w-3xl">
              Cada viagem que sai daqui volta como história. Aqui estão relatos de viajantes que
              desenharam roteiros sob medida com a gente — com o que deu certo, o que mudou no
              caminho e os bastidores do atendimento que raramente aparecem na foto.
            </p>
          </div>
        </section>

        <div className="container-editorial pt-6">
          <Breadcrumbs items={[{ label: "Nós viajamos!" }]} />
        </div>

        {/* Depoimentos */}
        <section className="section-padding">
          <div className="container-editorial">
            <h2 className="heading-section mb-4">Histórias de quem viajou com a Create Travel</h2>
            <div className="gold-line mb-12" />

            <div className="space-y-16">
              {ordered.map((t) => (
                <article key={t.slug} id={t.slug} className="scroll-mt-28">
                  {t.verified && t.photos.length > 0 && (
                    <div className="mb-10">
                      <div
                        className="grid grid-cols-2 grid-flow-dense gap-2 sm:grid-cols-3 sm:gap-3"
                        style={{ gridAutoRows: "clamp(120px, 24vw, 150px)" }}
                      >
                        {t.photos.map((p, i) => {
                          const shape =
                            i === 0
                              ? "col-span-2 row-span-1 sm:col-span-2 sm:row-span-1"
                              : i === 3 || i === 6 || i === 9 || i === 12
                                ? "col-span-2 row-span-1 sm:col-span-1 sm:row-span-1"
                                : i === 7
                                  ? "col-span-1 row-span-1 sm:col-span-2 sm:row-span-1"
                                  : i === 2
                                    ? "col-span-1 row-span-1 sm:col-span-1 sm:row-span-2"
                                    : "col-span-1 row-span-1 sm:col-span-1 sm:row-span-1";
                          return (
                            <figure
                              key={p.src}
                              className={`group relative overflow-hidden rounded-sm ring-1 ring-gold/30 ${shape}`}
                            >
                              <img
                                src={p.src}
                                alt={p.alt}
                                loading={i === 0 ? "eager" : "lazy"}
                                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                              />
                              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent opacity-90" />
                              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 p-2 sm:p-3">
                                <span className="font-serif text-[10px] sm:text-xs italic text-primary-foreground drop-shadow line-clamp-2">
                                  {p.caption}
                                </span>
                              </figcaption>
                            </figure>
                          );
                        })}
                      </div>
                      <p className="mt-3 text-xs text-muted-foreground">
                        Fotos originais da viagem, publicadas com autorização de {t.author}.
                      </p>
                    </div>
                  )}

                  <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
                    {/* Depoimento */}
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-gold mb-3">
                        {t.tripType} · {t.destination}
                      </p>
                      <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5 leading-snug">
                        {t.title}
                      </h3>

                      {t.verified && (
                        <div className="mb-5 flex flex-wrap items-center gap-2">
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald/40 bg-emerald/10 px-3 py-1 text-xs font-medium text-emerald">
                            <BadgeCheck size={13} /> Depoimento autorizado
                          </span>
                          {t.countries?.map((c) => (
                            <span
                              key={c}
                              className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                            >
                              {c}
                            </span>
                          ))}
                        </div>
                      )}


                      <blockquote className="relative border-l-2 border-gold/60 pl-6">
                        <Quote
                          size={22}
                          className="absolute -left-[11px] -top-1 bg-background text-gold"
                        />
                        <p className="text-lg leading-relaxed text-foreground/90 font-light">
                          {t.quote}
                        </p>
                        <footer className="mt-4 text-sm text-muted-foreground">
                          <span className="font-medium text-foreground">{t.author}</span> · {t.city}{" "}
                          · viagem em {t.month}
                        </footer>
                      </blockquote>

                      {/* Nota da Create Travel */}
                      <div className="mt-8 rounded-xl bg-muted/60 border border-border p-6">
                        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                          Nota da Create Travel
                        </p>
                        <p className="text-sm md:text-base leading-relaxed text-foreground/80">
                          {t.note}
                        </p>
                      </div>
                    </div>

                    {/* Narrativa das fotos + galeria */}
                    <aside className="lg:pt-14">
                      <div className="rounded-xl border border-border bg-card p-6 shadow-card">
                        <div className="flex items-center gap-2 mb-4 text-gold">
                          <Camera size={16} />
                          <span className="text-xs uppercase tracking-[0.2em]">
                            Lembranças da viagem
                          </span>
                        </div>
                        <p className="text-sm md:text-base leading-relaxed text-foreground/85 font-light italic">
                          {t.photoStory}
                        </p>

                        {t.photos.length > 0 && !t.verified ? (
                          <div className="mt-6 grid grid-cols-2 gap-3">
                            {t.photos.map((p) => (
                              <figure key={p.src}>
                                <img
                                  src={p.src}
                                  alt={p.alt}
                                  loading="lazy"
                                  className="aspect-[4/5] w-full rounded-lg object-cover"
                                />
                                <figcaption className="mt-2 text-xs text-muted-foreground">
                                  {p.caption}
                                </figcaption>
                              </figure>
                            ))}
                          </div>
                        ) : (
                          <div className="mt-6 rounded-lg border border-dashed border-border p-4">
                            <ul className="space-y-1.5">
                              {t.suggestedCaptions.map((c) => (
                                <li key={c} className="text-sm text-foreground/75">
                                  — {c}
                                </li>
                              ))}
                            </ul>
                            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                              <span className="font-medium text-foreground">
                                Ordem narrativa sugerida:
                              </span>{" "}
                              {t.photoDirection}
                            </p>
                          </div>
                        )}
                      </div>
                    </aside>
                  </div>

                  <div className="divider mt-14" />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-20 md:pb-28">
          <div className="container-editorial">
            <div className="rounded-2xl bg-primary text-primary-foreground p-10 md:p-14 text-center">
              <div className="gold-line mx-auto mb-6" />
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
                A próxima história pode ser a sua
              </h2>
              <p className="text-primary-foreground/80 font-light max-w-2xl mx-auto mb-8">
                Conte para onde você quer ir — ou apenas o que você quer sentir. O roteiro nasce
                dessa conversa, e o acompanhamento continua antes, durante e depois da viagem.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <WhatsAppButton variant="cta" label="Falar com um travel designer" />
                <Link
                  to="/roteiro-sob-medida"
                  className="inline-flex items-center justify-center rounded-lg border border-primary-foreground/40 px-6 py-3 font-medium text-primary-foreground transition-colors hover:border-gold hover:text-gold"
                >
                  Como funciona o roteiro sob medida
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton variant="float" />
    </div>
  );
};

export default Depoimentos;
