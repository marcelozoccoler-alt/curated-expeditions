import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RoteiroMarkdown } from "@/components/viagem/RoteiroMarkdown";
import { FotosDoDia } from "@/components/viagem/FotosDoDia";
import {
  BotaoOuvir,
  NarracaoAviso,
  NarracaoProvider,
  TextoNarravel,
} from "@/components/viagem/NarracaoRoteiro";
import { textoParaNarracao, VOZ_NARRADOR } from "@/lib/viagens/narracao";
import {
  MAPA_HOTEL_EMBED,
  mapaRotaEmbed,
  PARIS,
  RESUMO_HORARIOS,
  rotasDoDia,
  VIAGEM_PARIS,
  VIAGEM_PARIS_PATH,
} from "@/lib/viagens/parisEntreAmigas";
import { Clock, MapPin, Bus, Car, Footprints, AlarmClock, ExternalLink } from "lucide-react";


const ViagemParis = () => {
  const data = PARIS;
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

  const iconeModo = (modo: string) =>
    modo === "transit" ? Bus : modo === "walking" ? Footprints : Car;

  return (
    <NarracaoProvider voz={VOZ_NARRADOR}>
      <div className="min-h-screen">
        <SEO
          title="Paris entre amigas — livro autoral da viagem"
          description="Livro autoral da viagem de Silvia e Patrícia a Paris, de 24 a 30 de setembro de 2026: roteiro dia a dia, logística conferida, rotas do hotel até cada ponto de encontro e estimativas de custo."
          canonicalPath={VIAGEM_PARIS_PATH}
          ogType="article"
          noindex
        />
        <Header />

        {/* Capa */}
        <section className="relative h-[68vh] min-h-[440px] w-full overflow-hidden print:h-auto">
          <img
            src={VIAGEM_PARIS.hero}
            alt="O Sena ao amanhecer, com fachadas parisienses e a Torre Eiffel ao fundo"
            width={1920}
            height={1080}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/65 to-navy/25" />
          <div className="container-editorial relative h-full flex flex-col justify-end pb-14">
            <p className="text-caption text-gold mb-3">
              Livro autoral · {VIAGEM_PARIS.viajantes} · {VIAGEM_PARIS.periodo}
            </p>
            <h1 className="font-serif text-4xl sm:text-6xl font-semibold text-primary-foreground leading-tight">
              {data.title}
            </h1>
            <p className="mt-3 text-lg text-primary-foreground/85 max-w-2xl font-serif italic">
              {data.subtitle}
            </p>
          </div>
        </section>

        <main className="container-editorial py-12">
          <Breadcrumbs items={[{ label: "Paris entre amigas" }]} />

          <NarracaoAviso cidade="Paris" textoCompleto={textoCidade} />

          {/* Resumo dos horários */}
          <section className="mt-10 rounded-2xl border border-border bg-card overflow-hidden">
            <div className="p-6 sm:p-7 border-b border-border">
              <p className="text-caption text-gold mb-1">Resumo essencial</p>
              <h2 className="font-serif text-2xl font-semibold text-foreground">
                Os horários que não podem falhar
              </h2>
              <p className="text-sm text-muted-foreground mt-2 flex items-start gap-2">
                <AlarmClock size={16} className="text-gold mt-0.5 shrink-0" />
                Todos os horários de saída já vêm com folga generosa. Na dúvida, saia ainda mais
                cedo: um café a mais custa pouco, um passeio perdido não tem reembolso.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-muted/50 text-left">
                  <tr className="text-xs uppercase tracking-wide text-muted-foreground">
                    <th className="px-4 py-3 font-medium">Data</th>
                    <th className="px-4 py-3 font-medium">Atividade</th>
                    <th className="px-4 py-3 font-medium">Início</th>
                    <th className="px-4 py-3 font-medium">Estar no local</th>
                    <th className="px-4 py-3 font-medium">Sair do hotel</th>
                  </tr>
                </thead>
                <tbody>
                  {RESUMO_HORARIOS.map((r) => (
                    <tr key={r.data} className="border-t border-border/70">
                      <td className="px-4 py-3 whitespace-nowrap text-foreground/80">{r.data}</td>
                      <td className="px-4 py-3 text-foreground">{r.atividade}</td>
                      <td className="px-4 py-3 whitespace-nowrap font-medium">{r.inicio}</td>
                      <td className="px-4 py-3 whitespace-nowrap">{r.local}</td>
                      <td className="px-4 py-3 text-gold whitespace-nowrap">{r.saida}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <div className="mt-14 grid lg:grid-cols-[220px_1fr] gap-10">
            {/* Índice */}
            <aside className="hidden lg:block print:hidden">
              <div className="sticky top-24 space-y-2">
                <p className="text-caption text-gold mb-3">Neste livro</p>
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
                <a
                  href="#rotas"
                  className="block text-sm leading-snug font-medium text-foreground hover:text-gold pt-2"
                >
                  Rotas do hotel até os pontos de encontro
                </a>
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

                    <MapasDoDia block={block} />

                    <FotosDoDia cidadeSlug={data.slug} blocoId={block.id} titulo={block.title} />

                  </article>
                ) : (
                  <section key={block.id} id={block.id} className="scroll-mt-24">
                    <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground mb-2 leading-tight">
                      {block.title}
                    </h2>
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

            </div>
          </div>
        </main>

        <Footer />
      </div>
    </NarracaoProvider>
  );
};

export default ViagemParis;
