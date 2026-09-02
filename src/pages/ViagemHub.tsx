import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CIDADES, CIDADES_EM_BREVE, VIAGEM, VIAGEM_PATH } from "@/lib/viagens/capitaisImperiais";
import { CONTACT } from "@/lib/types";
import { TrilhaSonora } from "@/components/viagem/TrilhaSonora";
import { TRILHA_VIAGEM } from "@/lib/viagens/trilhas";
import { ArrowRight, BookOpen, Camera, MapPin, Film } from "lucide-react";

const DOMAIN = CONTACT.domain.replace(/\/$/, "");

const ViagemHub = () => {
  const description =
    "Diário de viagem do grupo exclusivo e autoral Create Travel por Budapeste, Viena, Praga e Istambul em outubro de 2026: roteiro dia a dia, história, lendas e as memórias do grupo.";

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: `${VIAGEM.nome} — ${VIAGEM.subtitulo}`,
      itemListElement: CIDADES.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.nome,
        url: `${DOMAIN}${VIAGEM_PATH}/${c.slug}`,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: `${DOMAIN}/` },
        { "@type": "ListItem", position: 2, name: VIAGEM.nome, item: `${DOMAIN}${VIAGEM_PATH}` },
      ],
    },
  ];

  const pilares = [
    {
      icon: MapPin,
      title: "Roteiro dia a dia",
      text: "Cada hora da viagem descrita com história, lendas, restaurantes e mapas — para ler antes, durante e depois.",
    },
    {
      icon: Camera,
      title: "Memória do grupo",
      text: "Fotos e vídeos entram em cada dia à medida que a viagem acontece, com legendas e créditos.",
    },
    {
      icon: Film,
      title: "Blog e vídeo",
      text: "O mesmo material alimenta os posts do diário e os roteiros de vídeo para YouTube e Reels.",
    },
    {
      icon: BookOpen,
      title: "Livro impresso",
      text: "No fim da jornada, tudo é diagramado num livro — um exemplar para cada viajante do grupo.",
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Capitais Imperiais 2026 — diário do grupo"
        description={description}
        canonicalPath={VIAGEM_PATH}
        keywords="Budapeste Viena Praga Istambul roteiro, viagem em grupo Europa Central 2026, diário de viagem Danúbio"
        jsonLd={jsonLd}
      />
      <Header />

      <section className="relative h-[70vh] min-h-[460px] w-full overflow-hidden">
        <img
          src={VIAGEM.hero}
          alt="Amanhecer sobre o Danúbio, com cúpulas e torres na névoa"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/65 to-navy/25" />
        <div className="container-editorial relative h-full flex flex-col justify-end pb-16">
          <p className="text-caption text-gold mb-3">Grupo exclusivo e autoral · {VIAGEM.periodo}</p>
          <h1 className="font-serif text-4xl sm:text-6xl font-semibold text-primary-foreground leading-tight max-w-3xl">
            {VIAGEM.nome}
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-primary-foreground/85 font-serif italic">
            {VIAGEM.subtitulo}
          </p>
          <p className="mt-5 max-w-2xl text-primary-foreground/80 leading-relaxed">
            {VIAGEM.chamada}
          </p>
        </div>
      </section>

      <main className="container-editorial py-14">
        <Breadcrumbs items={[{ label: VIAGEM.nome }]} />

        <section className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pilares.map((p) => (
            <div key={p.title} className="rounded-2xl border border-border bg-card p-5">
              <p.icon size={20} className="text-gold mb-3" />
              <h2 className="font-serif text-lg font-semibold text-foreground mb-1.5">{p.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
            </div>
          ))}
        </section>

        <section className="mt-16">
          <p className="text-caption text-gold mb-3">Os capítulos da viagem</p>
          <h2 className="heading-section mb-8">Quatro cidades, uma história</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {CIDADES.map((c) => (
              <Link
                key={c.slug}
                to={`${VIAGEM_PATH}/${c.slug}`}
                className="group overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={c.hero}
                    alt={`${c.nome} — ${c.subtitle}`}
                    loading="lazy"
                    width={1600}
                    height={912}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-caption text-gold mb-1.5">{c.dates}</p>
                  <h3 className="font-serif text-2xl font-semibold text-foreground">{c.nome}</h3>
                  <p className="text-muted-foreground italic mt-1">{c.subtitle}</p>
                  <p className="text-sm text-foreground/75 mt-3">
                    {c.days.length} dias · {c.chapters.length} capítulos de contexto
                  </p>
                  <span className="inline-flex items-center gap-2 mt-4 text-gold text-sm">
                    Abrir o roteiro <ArrowRight size={15} />
                  </span>
                </div>
              </Link>
            ))}

            {CIDADES_EM_BREVE.map((c) => (
              <div
                key={c.slug}
                className="rounded-2xl border border-dashed border-border bg-muted/30 p-6 flex flex-col justify-center min-h-[180px]"
              >
                <p className="text-caption text-gold mb-1.5">{c.periodo}</p>
                <h3 className="font-serif text-2xl font-semibold text-foreground">{c.nome}</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Capítulo em preparação — entra aqui assim que o roteiro estiver fechado.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-2xl bg-navy text-primary-foreground p-8 sm:p-10">
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold mb-3">
            Quer viver uma viagem assim, com o seu grupo?
          </h2>
          <p className="text-primary-foreground/85 max-w-2xl leading-relaxed">
            Desenhamos viagens autorais para grupos exclusivos, com roteiro escrito à mão, curadoria
            de hotéis e restaurantes e o registro completo da jornada — do diário online ao livro
            impresso.
          </p>
          <WhatsAppButton
            variant="cta"
            label="Falar com a Create Travel"
            params={{ type: "Geral", name: `${VIAGEM.nome} — ${VIAGEM.subtitulo}` }}
            className="mt-6"
          />
          <p className="text-xs text-primary-foreground/60 mt-4">
            {CONTACT.email} · {CONTACT.whatsapp}
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ViagemHub;
