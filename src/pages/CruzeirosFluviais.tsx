import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Ship, MapPin, CalendarDays, ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FAQSection } from "@/components/FAQSection";
import { riverCruises, CRUISE_REGIONS } from "@/lib/riverCruises";
import { CONTACT } from "@/lib/types";
import heroImage from "@/assets/cruzeiros-fluviais.jpg";

const DOMAIN = CONTACT.domain.replace(/\/$/, "");

const generalFaq = [
  {
    q: "O que está incluído em um cruzeiro fluvial AmaWaterways?",
    a: "Cabine (a maioria com varanda dupla), todas as refeições, vinhos e cervejas no almoço e jantar, excursões diárias em cada porto, bicicletas e caminhadas guiadas, Wi-Fi e gorjetas da tripulação. Aéreo internacional e pré/pós em terra são cotados à parte pela Create Travel.",
  },
  {
    q: "Qual a diferença entre cruzeiro fluvial e marítimo?",
    a: "Os navios fluviais levam de 100 a 200 hóspedes, atracam no centro histórico das cidades, navegam com paisagem sempre à vista e não têm mar aberto — praticamente eliminam o risco de mareio.",
  },
  {
    q: "Qual é o melhor roteiro para a primeira vez?",
    a: "Danúbio ou Reno. São os mais equilibrados entre cidades icônicas, paisagem e trechos curtos de navegação. Douro e Provence são ideais para quem busca vinho e gastronomia.",
  },
  {
    q: "Com quanta antecedência devo reservar?",
    a: "De 8 a 12 meses para datas de alta demanda (vindima no Douro, tulipas na Holanda, mercados de Natal e cerejeiras). Cabines com varanda esgotam primeiro.",
  },
  {
    q: "A Create Travel acompanha o grupo?",
    a: "Sim. Montamos saídas com anfitrião brasileiro quando há grupo mínimo, e também reservamos partidas individuais com suporte em português antes e durante a viagem.",
  },
];

const CruzeirosFluviais = () => {
  const [region, setRegion] = useState<string>("todas");

  const filtered =
    region === "todas" ? riverCruises : riverCruises.filter((c) => c.region === region);

  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Rotas de cruzeiros fluviais AmaWaterways",
    numberOfItems: riverCruises.length,
    itemListElement: riverCruises.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${DOMAIN}/cruzeiros-fluviais/${c.slug}`,
      name: c.name,
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: `${DOMAIN}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Cruzeiros fluviais",
        item: `${DOMAIN}/cruzeiros-fluviais`,
      },
    ],
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: generalFaq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Cruzeiros fluviais AmaWaterways — rotas e roteiros | Create Travel"
        description="Todas as rotas de cruzeiros fluviais AmaWaterways: Danúbio, Reno, Douro, Sena, Ródano, Mekong, Nilo e Magdalena. Roteiros dia a dia e reserva com curadoria Create Travel."
        canonicalPath="/cruzeiros-fluviais"
        jsonLd={[itemListLd, breadcrumbLd, faqLd]}
      />
      <Header />
      <WhatsAppButton variant="float" />

      <section className="relative pt-32 pb-20 bg-gradient-hero text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <img
            src={heroImage}
            alt="Navio fluvial navegando entre vinhedos em terraços na Europa"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-editorial relative">
          <Breadcrumbs items={[{ label: "Cruzeiros fluviais" }]} />
          <div className="max-w-3xl mt-6">
            <p className="text-caption text-gold mb-4">AmaWaterways · Parceria Create Travel</p>
            <div className="gold-line mb-6" />
            <h1 className="heading-hero mb-5">
              Cruzeiros fluviais <em className="italic font-normal">AmaWaterways</em>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 font-light">
              Navios pequenos que atracam no centro das cidades, excursões incluídas em cada
              porto e a paisagem sempre a poucos metros da varanda. Reunimos as rotas fluviais
              da AmaWaterways com roteiro dia a dia, melhor época e o que está incluído.
            </p>
            <div className="mt-8">
              <WhatsAppButton
                variant="cta"
                params={{ type: "Roteiro", name: "Cruzeiros fluviais AmaWaterways" }}
                label="Cotar um cruzeiro fluvial"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding flex-1">
        <div className="container-editorial">
          <div className="flex flex-wrap gap-2 mb-10">
            {["todas", ...CRUISE_REGIONS].map((r) => (
              <button
                key={r}
                onClick={() => setRegion(r)}
                aria-pressed={region === r}
                className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                  region === r
                    ? "border-gold bg-gold/10 text-foreground"
                    : "border-border text-muted-foreground hover:border-gold"
                }`}
              >
                {r === "todas" ? "Todas as rotas" : r}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((c, i) => (
              <motion.div
                key={c.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (i % 9) * 0.04 }}
              >
                <Link
                  to={`/cruzeiros-fluviais/${c.slug}`}
                  className="group h-full flex flex-col p-6 rounded-lg border border-border bg-card hover:border-gold transition-colors"
                >
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                    Rio {c.river} · {c.region}
                  </p>
                  <h2 className="text-xl font-serif text-foreground mb-3 group-hover:text-gold transition-colors">
                    {c.name}
                  </h2>
                  <p className="text-[15px] text-foreground/80 leading-relaxed flex-1">
                    {c.intro.slice(0, 160)}…
                  </p>
                  <div className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <MapPin size={14} className="text-gold" />
                      {c.route}
                    </span>
                    <span className="flex items-center gap-2">
                      <CalendarDays size={14} className="text-gold" />
                      {c.duration}
                    </span>
                    <span className="flex items-center gap-2">
                      <Ship size={14} className="text-gold" />
                      {c.ships.join(", ")}
                    </span>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm text-gold">
                    Ver roteiro completo
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 max-w-3xl">
            <FAQSection faqs={generalFaq} title="Cruzeiros fluviais: perguntas frequentes" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CruzeirosFluviais;
