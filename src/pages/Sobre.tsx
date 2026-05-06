import { motion } from "framer-motion";
import { Compass, Gem, HeartHandshake, Sparkles, Globe2, MapPin } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SEO } from "@/components/SEO";
import { CONTACT } from "@/lib/types";

const DOMAIN = CONTACT.domain.replace(/\/$/, "");

const pillars = [
  {
    icon: Compass,
    title: "Curadoria autoral",
    text: "Cada destino é escolhido por profundidade, autenticidade e propósito — nunca por algoritmo ou volume.",
  },
  {
    icon: Gem,
    title: "Luxo discreto",
    text: "Refinamento sem ostentação: acomodações com alma, experiências raras e um ritmo que respeita o lugar.",
  },
  {
    icon: HeartHandshake,
    title: "Parceria 1:1",
    text: "Trabalhamos lado a lado com você. Sem pacotes prontos — cada roteiro nasce de uma conversa.",
  },
  {
    icon: Sparkles,
    title: "Detalhes que importam",
    text: "Da reserva à reentrada em casa, antecipamos os pequenos gestos que tornam a viagem inesquecível.",
  },
];

const stats = [
  { value: "60+", label: "Destinos curados" },
  { value: "12", label: "Estilos de experiência" },
  { value: "100%", label: "Roteiros sob medida" },
];

const Sobre = () => {
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Create Travel",
    url: `${DOMAIN}/`,
    telephone: CONTACT.whatsappNumber,
    email: CONTACT.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua José Libero, 80 - Planalto Paulista",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    areaServed: "Worldwide",
    description:
      "Curadoria de viagens com propósito: destinos, hospedagens e experiências escolhidas por profundidade e autenticidade.",
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Sobre a Create Travel — Curadoria de viagens com propósito"
        description="Somos uma consultoria autoral de viagens. Conheça a filosofia, os pilares e a equipe por trás de cada roteiro Create Travel."
        canonicalPath="/sobre"
        jsonLd={orgLd}
      />
      <Header />
      <WhatsAppButton variant="float" />

      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-hero text-primary-foreground">
        <div className="container-editorial">
          <Breadcrumbs items={[{ label: "Sobre" }]} />
          <div className="max-w-3xl mt-4">
            <div className="gold-line mb-6" />
            <h1 className="heading-hero mb-6">
              Viagens pensadas como obras autorais
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 font-light leading-relaxed">
              A Create Travel nasceu de uma inquietação: a de que viajar bem é,
              antes de tudo, viajar com intenção. Cada roteiro é construído à
              mão, em conversa, com profundidade — para que você volte
              transformado, não apenas fotografado.
            </p>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="section-padding">
        <div className="container-editorial grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <p className="text-sm tracking-[0.2em] uppercase text-gold font-medium mb-4">
              Nosso manifesto
            </p>
            <h2 className="heading-section mb-0">
              Menos checklist. <br />
              Mais sentido.
            </h2>
          </div>
          <div className="md:col-span-7 space-y-6 text-foreground/85 leading-relaxed text-lg">
            <p>
              Acreditamos que a melhor viagem é aquela que cabe só em você. Por
              isso recusamos pacotes prontos e listas de "imperdíveis" — eles
              servem ao destino, não ao viajante.
            </p>
            <p>
              Trabalhamos com uma rede internacional de parceiros locais,
              hoteleiros, guias e artesãos que conhecemos pessoalmente. É essa
              proximidade que nos permite abrir portas, ajustar ritmos e
              desenhar experiências que não estão em nenhum catálogo.
            </p>
            <p>
              Curadoria, para nós, é uma forma de cuidado — com o seu tempo,
              com o lugar visitado e com o que você leva para casa.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="section-padding bg-card border-y border-border">
        <div className="container-editorial">
          <div className="max-w-2xl mb-12">
            <p className="text-sm tracking-[0.2em] uppercase text-gold font-medium mb-4">
              Pilares
            </p>
            <h2 className="heading-section">O que nos guia</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                  <p.icon size={22} />
                </div>
                <h3 className="font-serif text-xl text-foreground">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding">
        <div className="container-editorial">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center">
                <span className="font-serif text-5xl md:text-6xl text-primary mb-2">
                  {s.value}
                </span>
                <span className="text-sm tracking-[0.15em] uppercase text-muted-foreground">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-card border-y border-border">
        <div className="container-editorial">
          <div className="max-w-2xl mb-12">
            <p className="text-sm tracking-[0.2em] uppercase text-gold font-medium mb-4">
              Como trabalhamos
            </p>
            <h2 className="heading-section">Do primeiro encontro à volta para casa</h2>
          </div>
          <ol className="grid md:grid-cols-3 gap-8">
            {[
              {
                n: "01",
                title: "Conversa inicial",
                text: "Entendemos seu momento, ritmo e o que move você a viajar. Sem briefings genéricos.",
              },
              {
                n: "02",
                title: "Curadoria sob medida",
                text: "Desenhamos um roteiro autoral, com hospedagens, experiências e logística pensadas em conjunto.",
              },
              {
                n: "03",
                title: "Acompanhamento real",
                text: "Estamos disponíveis antes, durante e depois — porque viagem boa também se mede no pós.",
              },
            ].map((step) => (
              <li key={step.n} className="border-t border-border pt-6">
                <span className="font-serif text-3xl text-gold">{step.n}</span>
                <h3 className="font-serif text-xl mt-3 mb-2 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Where we are */}
      <section className="section-padding">
        <div className="container-editorial grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-gold font-medium mb-4">
              Onde estamos
            </p>
            <h2 className="heading-section mb-6">Base em São Paulo, alcance global</h2>
            <div className="space-y-3 text-foreground/85">
              <p className="flex items-start gap-3">
                <MapPin className="text-gold mt-1 shrink-0" size={18} />
                <span>Rua José Libero, 80 — Planalto Paulista, São Paulo · SP</span>
              </p>
              <p className="flex items-start gap-3">
                <Globe2 className="text-gold mt-1 shrink-0" size={18} />
                <span>Atendimento para viajantes em todo o Brasil e exterior</span>
              </p>
            </div>
          </div>

          <div className="bg-gradient-hero text-primary-foreground p-10 rounded-lg">
            <h3 className="font-serif text-2xl mb-4">
              Pronto para desenhar a sua próxima viagem?
            </h3>
            <p className="text-primary-foreground/85 mb-6 leading-relaxed">
              Comece com uma conversa — sem compromisso. Em poucos minutos
              entendemos o que você procura e damos os primeiros passos juntos.
            </p>
            <WhatsAppButton variant="cta" label="Falar com um curador" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sobre;
