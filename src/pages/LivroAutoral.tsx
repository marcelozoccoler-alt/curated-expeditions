import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CIDADES, CIDADES_EM_BREVE, VIAGEM, VIAGEM_PATH } from "@/lib/viagens/capitaisImperiais";
import { CONTACT } from "@/lib/types";
import { ArrowRight, BookOpen, Camera, Feather, Film } from "lucide-react";

const DOMAIN = CONTACT.domain.replace(/\/$/, "");
const PATH = "/livro-autoral";

const LivroAutoral = () => {
  const description =
    "O Livro Autoral Create Travel: cada viagem em grupo exclusivo vira um livro — roteiro escrito à mão, história, lendas, fotos do grupo e um exemplar impresso para cada viajante.";

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Livro Autoral Create Travel",
      description,
      url: `${DOMAIN}${PATH}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: `${DOMAIN}/` },
        { "@type": "ListItem", position: 2, name: "Livro Autoral Create Travel", item: `${DOMAIN}${PATH}` },
      ],
    },
  ];

  const etapas = [
    {
      icon: Feather,
      title: "Escrito à mão, antes da partida",
      text: "Cada dia da viagem nasce como texto: história, personagens, lendas, mesas e caminhadas. O roteiro já é literatura antes de ser vivido.",
    },
    {
      icon: Camera,
      title: "Fotografado durante a jornada",
      text: "As imagens e vídeos do grupo entram dia a dia no capítulo correspondente, com legendas e créditos de quem registrou.",
    },
    {
      icon: Film,
      title: "Contado em vídeo",
      text: "O mesmo material vira posts do diário e roteiros de vídeo, na voz autoral da Create Travel.",
    },
    {
      icon: BookOpen,
      title: "Impresso e entregue",
      text: "Ao fim da viagem, tudo é diagramado num livro com capa, um capítulo por cidade e dedicatória — um exemplar para cada viajante.",
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Livro Autoral Create Travel — a viagem que vira livro"
        description={description}
        canonicalPath={PATH}
        keywords="livro de viagem personalizado, diário de viagem em grupo, viagem autoral Create Travel"
        jsonLd={jsonLd}
      />
      <Header />

      <section className="relative h-[70vh] min-h-[440px] w-full overflow-hidden">
        <img
          src={VIAGEM.hero}
          alt="Amanhecer sobre o Danúbio — capa do Livro Autoral Create Travel"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/30" />
        <div className="container-editorial relative h-full flex flex-col justify-end pb-16">
          <p className="text-caption text-gold mb-3">Coleção Create Travel</p>
          <h1 className="font-serif text-4xl sm:text-6xl font-semibold text-primary-foreground leading-tight max-w-3xl">
            Livro Autoral Create Travel
          </h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/85 leading-relaxed text-lg">
            Toda viagem em grupo exclusivo da Create Travel se transforma em um livro. Aqui ficam os
            volumes — abertos, capítulo a capítulo, enquanto a jornada acontece.
          </p>
        </div>
      </section>

      <main className="container-editorial py-14">
        <Breadcrumbs items={[{ label: "Livro Autoral Create Travel" }]} />

        <section className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {etapas.map((e) => (
            <div key={e.title} className="rounded-2xl border border-border bg-card p-5">
              <e.icon size={20} className="text-gold mb-3" />
              <h2 className="font-serif text-lg font-semibold text-foreground mb-1.5">{e.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{e.text}</p>
            </div>
          ))}
        </section>

        <section className="mt-16">
          <p className="text-caption text-gold mb-3">Volume I</p>
          <h2 className="heading-section mb-8">{VIAGEM.nome}</h2>

          <div className="rounded-2xl border border-border bg-card overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative aspect-[16/11] md:aspect-auto md:min-h-[320px]">
                <img
                  src={VIAGEM.hero}
                  alt={`${VIAGEM.nome} — ${VIAGEM.subtitulo}`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="p-7 sm:p-9 flex flex-col justify-center">
                <p className="text-caption text-gold mb-2">{VIAGEM.periodo}</p>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground">
                  {VIAGEM.subtitulo}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{VIAGEM.chamada}</p>
                <Link
                  to={VIAGEM_PATH}
                  className="inline-flex items-center gap-2 mt-6 text-gold font-medium"
                >
                  Abrir o livro <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="border-t border-border p-7 sm:p-9">
              <p className="text-caption text-gold mb-4">Capítulos</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {CIDADES.map((c) => (
                  <Link
                    key={c.slug}
                    to={`${VIAGEM_PATH}/${c.slug}`}
                    className="rounded-xl border border-border p-4 hover:border-gold transition-colors"
                  >
                    <p className="text-xs text-muted-foreground">{c.dates}</p>
                    <p className="font-serif text-lg font-semibold text-foreground mt-1">{c.nome}</p>
                    <p className="text-xs text-muted-foreground mt-1">{c.days.length} dias</p>
                  </Link>
                ))}
                {CIDADES_EM_BREVE.map((c) => (
                  <div
                    key={c.slug}
                    className="rounded-xl border border-dashed border-border bg-muted/30 p-4"
                  >
                    <p className="text-xs text-muted-foreground">{c.periodo}</p>
                    <p className="font-serif text-lg font-semibold text-foreground mt-1">{c.nome}</p>
                    <p className="text-xs text-muted-foreground mt-1">Capítulo em preparação</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 rounded-2xl bg-navy text-primary-foreground p-8 sm:p-10">
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold mb-3">
            Quer o seu grupo com um livro assim?
          </h2>
          <p className="text-primary-foreground/85 max-w-2xl leading-relaxed">
            Desenhamos viagens autorais para grupos exclusivos, com roteiro escrito à mão, curadoria
            de hotéis e restaurantes e o registro completo da jornada — do diário online ao livro
            impresso entregue a cada viajante.
          </p>
          <WhatsAppButton
            variant="cta"
            label="Falar com a Create Travel"
            params={{ type: "Geral", name: "Livro Autoral Create Travel" }}
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

export default LivroAutoral;
