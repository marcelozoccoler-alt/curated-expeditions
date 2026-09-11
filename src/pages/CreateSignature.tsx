import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Compass, Languages, ShieldCheck, Sparkles } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/types";
import { signatureTrips } from "@/lib/signatureTrips";

const DOMAIN = CONTACT.domain.replace(/\/$/, "");

const pillars = [
  {
    icon: Compass,
    title: "Roteiros que não se repetem",
    text: "Travessias e experiências escolhidas pelo que revelam de um lugar, não apenas por sua fama.",
  },
  {
    icon: ShieldCheck,
    title: "Conforto em cada transição",
    text: "Hotéis de categoria superior, logística acompanhada e tempo bem distribuído entre descoberta e descanso.",
  },
  {
    icon: Languages,
    title: "Cuidado desde Guarulhos",
    text: "Assistência da Create Travel no aeroporto, guia brasileiro durante a jornada e suporte da nossa equipe no Brasil.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Create Signature — Grandes Jornadas",
    url: `${DOMAIN}/create-signature`,
    description:
      "Coleção de viagens em grupo de alto padrão da Create Travel, com experiências raras, curadoria e acompanhamento em português.",
    provider: { "@id": `${DOMAIN}/#organization` },
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Viagens Create Signature",
    itemListElement: signatureTrips.map((trip, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: trip.title,
      url: `${DOMAIN}${trip.href}`,
    })),
  },
];

const CreateSignature = () => {
  const featured = signatureTrips[0];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Create Signature — Viagens em Grupo de Luxo"
        description="Grandes jornadas em grupo com curadoria Create Travel, hotéis superiores, experiências raras e acompanhamento em português. Conheça a coleção Signature."
        canonicalPath="/create-signature"
        ogImage={featured.image}
        ogType="website"
        keywords="viagens em grupo de luxo, grupos premium, viagem exclusiva com guia brasileiro, Create Signature, grandes jornadas"
        jsonLd={jsonLd}
      />
      <Header />
      <WhatsAppButton variant="float" />

      <main>
        <section className="relative min-h-[82vh] flex items-end overflow-hidden">
          <img
            src={featured.image}
            alt={featured.imageAlt}
            className="absolute inset-0 h-full w-full object-cover"
            width={1600}
            height={1000}
            fetchPriority="high"
          />
          <div className="absolute inset-0 hero-overlay" />
          <div className="container-editorial relative z-10 pb-16 pt-32 md:pb-24">
            <div className="max-w-4xl text-primary-foreground">
              <div className="mb-8 text-primary-foreground/75">
                <Breadcrumbs items={[{ label: "Create Signature" }]} />
              </div>
              <p className="text-caption text-gold mb-4 inline-flex items-center gap-2">
                <Sparkles size={16} /> Coleção de viagens extraordinárias
              </p>
              <h1 className="heading-hero mb-6">Create Signature</h1>
              <p className="font-serif text-2xl md:text-4xl mb-5 text-primary-foreground/95">
                Grandes Jornadas
              </p>
              <p className="max-w-2xl text-lg md:text-xl leading-relaxed text-primary-foreground/85 font-light">
                Há viagens que nos levam a um lugar. Outras ampliam o mundo que existe dentro de nós. Esta coleção nasce para quem busca o raro com conforto, profundidade e companhia à altura da experiência.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-editorial">
            <div className="max-w-3xl mb-14">
              <div className="gold-line mb-6" />
              <p className="text-caption text-gold mb-3">A assinatura Create Travel</p>
              <h2 className="heading-section mb-5">Curadoria para atravessar fronteiras — e voltar diferente</h2>
              <p className="text-editorial">
                Create Signature reúne grupos exclusivos em rotas de forte valor cultural e natural. Cada jornada equilibra hotéis selecionados, experiências memoráveis e acompanhamento próximo, sem retirar do viajante a liberdade de sentir o destino no próprio ritmo.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {pillars.map(({ icon: Icon, title, text }) => (
                <article key={title} className="border-t border-border pt-7">
                  <Icon className="text-gold mb-5" size={25} />
                  <h3 className="font-serif text-xl mb-3">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted">
          <div className="container-editorial">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
              <div>
                <p className="text-caption text-gold mb-3">Próximas saídas</p>
                <h2 className="heading-section">Duas estações, duas formas de viver o Ártico</h2>
              </div>
              <p className="text-muted-foreground max-w-lg md:text-right">
                O Natal e o Réveillon sob a neve ou a luz do fim do inverno: escolha o tempo que mais conversa com você.
              </p>
            </div>

            <div className="space-y-10">
            {signatureTrips.map((trip) => (
              <article key={trip.slug} className="grid lg:grid-cols-[1.35fr_1fr] bg-card border border-border overflow-hidden rounded-lg">
                <Link to={trip.href} className="block min-h-[330px] lg:min-h-[520px] overflow-hidden">
                  <img
                    src={trip.image}
                    alt={trip.imageAlt}
                    loading="lazy"
                    width={1600}
                    height={1000}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />
                </Link>
                <div className="p-7 md:p-12 flex flex-col justify-center">
                  <p className="text-caption text-gold mb-4">{trip.collection}</p>
                  <h3 className="font-serif text-3xl md:text-4xl leading-tight mb-4">{trip.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-7">{trip.subtitle}</p>
                  <div className="space-y-3 text-sm border-y border-border py-6 mb-8">
                    <p className="flex gap-3"><Calendar size={18} className="text-gold shrink-0" /> {trip.dates} · {trip.duration}</p>
                    <p className="flex gap-3"><Compass size={18} className="text-gold shrink-0" /> {trip.destinations.join(" · ")}</p>
                  </div>
                  <Button asChild size="lg" className="self-start">
                    <Link to={trip.href}>Conhecer esta jornada <ArrowRight /></Link>
                  </Button>
                </div>
              </article>
            ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-navy text-primary-foreground">
          <div className="container-editorial max-w-3xl text-center">
            <p className="text-caption text-gold mb-4">Seu lugar em uma grande jornada</p>
            <h2 className="heading-section mb-6">Algumas viagens começam muito antes do embarque</h2>
            <p className="text-primary-foreground/80 text-lg mb-9 font-light">
              Começam quando um destino encontra um desejo antigo. Conte-nos qual paisagem chama por você.
            </p>
            <WhatsAppButton variant="cta" label="Conversar com a Create Travel" className="text-lg px-8 py-4" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CreateSignature;