import { motion } from "framer-motion";
import {
  Compass,
  Gem,
  HeartHandshake,
  Sparkles,
  Globe2,
  MapPin,
  Leaf,
  Plane,
  Users,
  BookOpen,
  Camera,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { SEO } from "@/components/SEO";
import { CONTACT } from "@/lib/types";
import { destinations } from "@/lib/destinations";


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
    icon: Leaf,
    title: "Viajar é preservar",
    text: "Apoiamos operadores locais, comunidades e projetos de conservação. Sua viagem deixa o destino melhor do que encontrou.",
  },
];

const whatWeDo = [
  {
    icon: Plane,
    title: "Viagens internacionais sob medida",
    text: "Da Patagônia ao Quênia, do Japão à Itália. Roteiros desenhados a quatro mãos, com hotelaria selecionada e experiências que não estão em catálogo.",
    href: "/destinos",
    cta: "Ver destinos",
  },
  {
    icon: Globe2,
    title: "Incoming — Brasil para o mundo",
    text: "Recebemos viajantes estrangeiros no Brasil com atendimento em inglês, espanhol, italiano e alemão. Amazônia, Pantanal, Nordeste, Chapadas e mais.",
    href: "/en/incoming",
    cta: "Brazil incoming",
  },
  {
    icon: Leaf,
    title: "Brasil Vivo — conservação",
    text: "Curadoria de roteiros que conectam o viajante à fauna, flora e aos projetos que protegem os biomas brasileiros — da onça-pintada ao mico-leão-dourado.",
    href: "/brasil-vivo",
    cta: "Conhecer Brasil Vivo",
  },
  {
    icon: Users,
    title: "Grupos com propósito",
    text: "Viagens em grupo pequeno, lideradas por especialistas, em datas únicas. Profundidade cultural, convivência rara e curadoria editorial.",
    href: "/grupos/marrocos-2026",
    cta: "Próximas saídas",
  },
];

const signature = [
  {
    icon: Camera,
    title: "Safáris & vida selvagem",
    text: "Tanzânia, Botswana, Pantanal e Amazônia com guias-naturalistas e camps de pequena escala.",
  },
  {
    icon: BookOpen,
    title: "Cultura & profundidade",
    text: "Japão lento, Itália fora-da-rota, Marrocos com artesãos, Brasil afro-indígena.",
  },
  {
    icon: Sparkles,
    title: "Lua de mel autoral",
    text: "Cenários discretos, hotelaria com alma e gestos que só quem conhece o lugar consegue desenhar.",
  },
  {
    icon: ShieldCheck,
    title: "Famílias multigeração",
    text: "Roteiros que funcionam para avós, pais e crianças — ritmo, segurança e momentos compartilhados.",
  },
];

const ethics = [
  "Trabalhamos com operadores locais legalizados, que pagam impostos e contratam comunidade.",
  "Recusamos atrativos que envolvam exploração animal, contato invasivo com povos originários ou turismo predatório.",
  "Privilegiamos hospedagens de pequena escala, com práticas reais de baixo impacto — não greenwashing.",
  "Quando relevante, direcionamos parte do roteiro a iniciativas de conservação reconhecidas.",
];

const faqs = [
  {
    q: "A Create Travel é uma agência de viagens?",
    a: "Somos uma consultoria autoral de viagens, registrada no Cadastur (21.030.190/0001-60). Trabalhamos como agência sob medida: nada de pacotes prontos, tudo desenhado em conversa com o viajante.",
  },
  {
    q: "Qual o ticket médio de uma viagem com vocês?",
    a: "Não trabalhamos com 'preço de prateleira'. O investimento varia conforme destino, hotelaria, duração e experiências. Atendemos viajantes que valorizam curadoria, hotelaria diferenciada e tempo de qualidade.",
  },
  {
    q: "Vocês atendem apenas brasileiros?",
    a: "Não. Pelo braço Incoming, recebemos viajantes estrangeiros no Brasil em inglês, espanhol, italiano e alemão — especialmente para Amazônia, Pantanal, Chapadas, Nordeste e roteiros culturais.",
  },
  {
    q: "Como começa um roteiro Create Travel?",
    a: "Sempre por uma conversa — por WhatsApp ou videochamada. Ouvimos seu momento, ritmo e desejos, e só então começamos a desenhar. Sem briefings genéricos.",
  },
  {
    q: "Vocês fazem viagens em grupo?",
    a: "Sim, em formato pequeno e com propósito claro — datas únicas, liderança especializada e número limitado de viajantes. Veja as próximas saídas em Grupos.",
  },
];

const Sobre = () => {
  const destCount = destinations.length;
  const countryCount = new Set(destinations.map((d) => d.country)).size;
  const continentCount = new Set(destinations.map((d) => d.continent)).size;

  const stats = [
    { value: `${destCount}+`, label: "Destinos curados" },
    { value: `${countryCount}`, label: "Países no portfólio" },
    { value: `${continentCount}`, label: "Continentes" },
  ];


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
      "Curadoria autoral de viagens com propósito: roteiros internacionais, incoming Brasil e turismo de conservação.",
    knowsAbout: [
      "Viagens sob medida",
      "Safári África",
      "Brasil incoming",
      "Turismo de conservação",
      "Lua de mel",
      "Viagens em família",
    ],
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Sobre a Create Travel — Consultoria autoral de viagens com propósito"
        description="Curadoria de viagens internacionais, incoming Brasil e turismo de conservação. Conheça a filosofia, os pilares e o método Create Travel."
        canonicalPath="/sobre"
        jsonLd={[orgLd, faqLd]}
      />
      <Header />
      <WhatsAppButton variant="float" />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-hero text-primary-foreground">
        <div className="container-editorial">
          <Breadcrumbs items={[{ label: "Sobre" }]} />
          <div className="max-w-3xl mt-4">
            <div className="gold-line mb-6" />
            <p className="text-sm tracking-[0.25em] uppercase text-gold font-medium mb-5">
              Create Travel · desde a primeira conversa
            </p>
            <h1 className="heading-hero mb-6">
              Viagens pensadas como obras autorais
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 font-light leading-relaxed">
              Somos uma consultoria de viagens nascida de uma convicção: a de
              que viajar bem é, antes de tudo, viajar com intenção. Cada roteiro
              é construído à mão, em conversa, com profundidade — para que você
              volte transformado, não apenas fotografado.
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
              proximidade que nos permite abrir portas, ajustar ritmos e desenhar
              experiências que não estão em nenhum catálogo.
            </p>
            <p>
              Curadoria, para nós, é uma forma de cuidado — com o seu tempo, com
              o lugar visitado e com o que você leva para casa. É também uma
              forma de responsabilidade: cada viagem que organizamos sustenta
              comunidades, hotelaria de pequena escala e iniciativas reais de
              conservação.
            </p>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="section-padding bg-card border-y border-border">
        <div className="container-editorial">
          <div className="max-w-2xl mb-12">
            <p className="text-sm tracking-[0.2em] uppercase text-gold font-medium mb-4">
              O que fazemos
            </p>
            <h2 className="heading-section">Quatro frentes, uma mesma filosofia</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Da África à Ásia, do Brasil profundo ao incoming internacional,
              tudo nasce do mesmo princípio: viagem é encontro — com o lugar,
              com o outro e consigo.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {whatWeDo.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group p-8 rounded-lg bg-background border border-border hover:border-gold/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-5">
                  <w.icon size={22} />
                </div>
                <h3 className="font-serif text-2xl text-foreground mb-3">
                  {w.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  {w.text}
                </p>
                <Link
                  to={w.href}
                  className="text-gold font-medium hover:text-gold-light inline-flex items-center gap-2"
                >
                  {w.cta} →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="section-padding">
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
      <section className="section-padding bg-card border-y border-border">
        <div className="container-editorial">
          <div className="max-w-2xl mb-12">
            <p className="text-sm tracking-[0.2em] uppercase text-gold font-medium mb-4">
              Em números
            </p>
            <h2 className="heading-section">Um portfólio construído viagem a viagem</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
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

      {/* Signature experiences */}
      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-2xl mb-12">
            <p className="text-sm tracking-[0.2em] uppercase text-gold font-medium mb-4">
              Assinaturas
            </p>
            <h2 className="heading-section">Onde nossa curadoria brilha</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {signature.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="border-t border-border pt-6"
              >
                <s.icon className="text-gold mb-4" size={26} />
                <h3 className="font-serif text-xl text-foreground mb-2">
                  {s.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-[15px]">
                  {s.text}
                </p>
              </motion.div>
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
            <h2 className="heading-section">
              Do primeiro encontro à volta para casa
            </h2>
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
                <h3 className="font-serif text-xl mt-3 mb-2 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Ethics */}
      <section className="section-padding">
        <div className="container-editorial grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <p className="text-sm tracking-[0.2em] uppercase text-gold font-medium mb-4">
              Ética & responsabilidade
            </p>
            <h2 className="heading-section mb-6">
              Viajar com propósito não é um selo. É um compromisso.
            </h2>
            <p className="text-foreground/85 leading-relaxed">
              Acreditamos que turismo bem feito é uma das ferramentas mais
              poderosas de preservação cultural e ambiental. Por isso temos
              regras claras — para nós e para os parceiros que escolhemos.
            </p>
          </div>
          <ul className="md:col-span-7 space-y-4">
            {ethics.map((e, i) => (
              <li
                key={i}
                className="flex items-start gap-4 p-5 rounded-lg bg-card border border-border"
              >
                <ShieldCheck className="text-gold shrink-0 mt-0.5" size={22} />
                <span className="text-foreground/85 leading-relaxed">{e}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-card border-y border-border">
        <div className="container-editorial max-w-4xl">
          <FAQSection faqs={faqs} />
        </div>
      </section>

      {/* Where we are + CTA */}
      <section className="section-padding">
        <div className="container-editorial grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-gold font-medium mb-4">
              Onde estamos
            </p>
            <h2 className="heading-section mb-6">
              Base em São Paulo, alcance global
            </h2>
            <div className="space-y-3 text-foreground/85">
              <p className="flex items-start gap-3">
                <MapPin className="text-gold mt-1 shrink-0" size={18} />
                <span>Rua José Libero, 80 — Planalto Paulista, São Paulo · SP</span>
              </p>
              <p className="flex items-start gap-3">
                <Globe2 className="text-gold mt-1 shrink-0" size={18} />
                <span>Atendimento para viajantes em todo o Brasil e exterior</span>
              </p>
              <p className="flex items-start gap-3">
                <ShieldCheck className="text-gold mt-1 shrink-0" size={18} />
                <span>Cadastur {CONTACT.cadastur}</span>
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
