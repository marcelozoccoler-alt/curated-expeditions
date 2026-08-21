import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Languages,
  Euro,
  MapPin,
  Search,
  Users,
  Check,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEO } from "@/components/SEO";
import { FAQSection } from "@/components/FAQSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CONTACT } from "@/lib/types";
import { localGuidePriceLabel } from "@/lib/localGuideGroups";
import {
  localGuideGroups,
  localGuideCountries,
  localGuideMonths,
  formatDeparture,
  MONTHS_PT,
} from "@/lib/localGuideGroups";

import { localGroupAiSummary } from "@/lib/gruposGeo";

const DOMAIN = CONTACT.domain.replace(/\/$/, "");


const monthLabel = (key: string) =>
  `${MONTHS_PT[Number(key.slice(5, 7)) - 1]}/${key.slice(2, 4)}`;

const DIFFERENTIALS = [
  {
    icon: Languages,
    title: "Guia local no destino",
    desc: "Você é recebido no aeroporto e acompanhado por um guia profissional do próprio destino durante todo o circuito — em espanhol e/ou português, conforme o idioma negociado para cada saída.",
  },
  {
    icon: Euro,
    title: "Preços muito competitivos",
    desc: "Sem coordenador embarcando do Brasil, o custo cai de forma significativa. Circuitos de 9 a 20 dias a partir de € 1.695 por pessoa, com hotéis bem localizados e visitas incluídas.",
  },
  {
    icon: Calendar,
    title: "Saídas garantidas em 2027",
    desc: "Datas semanais entre abril e outubro, já confirmadas para operar. Você reserva sabendo que o grupo sai — sem espera por número mínimo.",
  },
  {
    icon: Users,
    title: "Aéreo sob medida",
    desc: "Cotamos os voos a partir da sua cidade, com liberdade para chegar antes ou estender a viagem depois do circuito. A parte terrestre tem entrada de 25% + 9x sem juros; o aéreo é pago conforme as condições da companhia aérea escolhida.",
  },
];

const GruposGuiaLocal = () => {
  const [country, setCountry] = useState<string>("all");
  const [month, setMonth] = useState<string>("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();
    return localGuideGroups.filter((g) => {
      if (country !== "all" && !g.countries.includes(country)) return false;
      if (month !== "all" && !g.departures.some((d) => d.startsWith(month)))
        return false;
      if (q) {
        const haystack = `${g.title} ${g.subtitle} ${g.countries.join(" ")}`
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [country, month, query]);

  const totalDepartures = localGuideGroups.reduce(
    (acc, g) => acc + g.departures.length,
    0
  );

  const faqs = [
    {
      q: "O que é um grupo com guia local?",
      a: "É uma viagem em grupo com saída garantida em que o acompanhamento é feito por um guia profissional no próprio destino, do primeiro ao último dia do circuito — sem coordenador embarcando do Brasil. Você recebe traslado de chegada, hospedagem, ônibus, visitas guiadas com sistema de áudio e assistência da Create Travel em português antes, durante e depois da viagem.",
    },
    {
      q: "Qual a diferença entre grupo com guia local e grupo com guia brasileiro?",
      a: "No grupo com guia brasileiro, um coordenador da Create Travel embarca com você em Guarulhos e segue junto até a volta. No grupo com guia local, o acompanhamento começa no destino, com guia do país em espanhol e/ou português conforme a saída. A vantagem do guia local está na profundidade do conhecimento de quem vive no destino, na amplitude de datas disponíveis e em um investimento mais racional, já que não há coordenação desde o Brasil.",
    },
    {
      q: "Em que idioma é o acompanhamento?",
      a: "As saídas garantidas operam com guia em espanhol e há datas específicas com guia em português, negociadas conforme o roteiro. Toda a comunicação com a Create Travel — orçamento, documentos, briefing e suporte na viagem — é em português.",
    },
    {
      q: "Como funciona o pagamento?",
      a: "A mesma condição dos grupos com guia brasileiro, válida para a parte terrestre: entrada de 25% no ato da reserva e o saldo em até 9x sem juros no cartão de crédito. As passagens aéreas são cotadas separadamente, a partir da sua cidade, e o pagamento do aéreo segue as regras da companhia aérea escolhida — que mudam de uma cia para outra.",
    },
    {
      q: "Posso buscar grupos por destino, e não só por data?",
      a: `Sim. Nesta página você filtra os ${localGuideGroups.length} circuitos por destino (${localGuideCountries.length} países), por mês de saída ou por busca livre de cidade e roteiro. As mesmas saídas também aparecem nas páginas de destino e de região correspondentes do site.`,
    },
    {
      q: "Quais destinos estão disponíveis?",
      a: `Circuitos por ${localGuideCountries.join(", ")}, combinando capitais imperiais, Leste Europeu, Bálcãs e Adriático, Alpes, Alemanha romântica, Suíça, Países Baixos e Paris.`,
    },
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Grupos de viagem com guia local",
      serviceType: "Viagem em grupo com guia local e saída garantida",
      provider: { "@id": "https://createtravel.tur.br/#organization" },
      areaServed: localGuideCountries.map((c) => ({
        "@type": "Country",
        name: c,
      })),
      description: `${localGuideGroups.length} circuitos em grupo com guia local e ${totalDepartures} saídas garantidas em 2027 pela Europa, a partir de € 1.695 por pessoa. Parte terrestre: entrada 25% + 9x sem juros.`,
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Circuitos em grupo com guia local — saídas garantidas 2027",
      numberOfItems: localGuideGroups.length,
      itemListElement: localGuideGroups.map((g, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: `${g.title} — ${g.days} dias`,
        url: `${DOMAIN}/grupos-guia-local/${g.slug}`,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: DOMAIN },
        {
          "@type": "ListItem",
          position: 2,
          name: "Grupos com guia local",
          item: `${DOMAIN}/grupos-guia-local`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      url: `${DOMAIN}/grupos-guia-local`,
      name: "Grupos com guia local — Create Travel",
      inLanguage: "pt-BR",
      description: localGroupAiSummary,
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: [".ai-summary", "h1"],
      },
    },
  ];


  return (
    <div className="min-h-screen">
      <SEO
        title="Grupos com Guia Local — Saídas Garantidas 2027"
        description={`${localGuideGroups.length} circuitos europeus em grupo com guia local e ${totalDepartures} saídas garantidas em 2027. Busque por destino ou por data. A partir de € 1.695 · entrada 25% + 9x sem juros.`}
        canonicalPath="/grupos-guia-local"
        keywords="grupo com guia local, viagem em grupo saída garantida, circuito europeu em grupo 2027, viagem em grupo europa curadoria, grupo capitais imperiais, grupo bálcãs, grupo leste europeu, viagem em grupo por destino"
        jsonLd={jsonLd}
      />
      <Header />
      <WhatsAppButton variant="float" />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pb-24 bg-gradient-to-b from-navy via-navy to-navy/90 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-gold blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-emerald blur-3xl" />
        </div>
        <div className="container-editorial relative z-10 max-w-3xl mx-auto text-center">
          <div className="mb-6 flex justify-center text-white/70">
            <Breadcrumbs items={[{ label: "Grupos com guia local" }]} />
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 border border-gold/40 text-gold text-xs font-semibold uppercase tracking-[0.3em] mb-6">
            <Calendar size={14} /> {totalDepartures} saídas garantidas 2027
          </div>
          <div className="gold-line mx-auto mb-6" />
          <h1 className="heading-hero mb-6">
            Grupos com <span className="text-gold italic">Guia Local</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4 font-light">
            Saídas garantidas com guia do próprio destino — curadoria local e datas
            ao longo de todo o ano.
          </p>
          <p className="text-base text-white/70 mb-8 font-light">
            {localGuideGroups.length} circuitos por {localGuideCountries.length}{" "}
            países · idiomas conforme negociado · entrada 25% + 9x sem juros
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#roteiros"
              className="btn-primary bg-gold text-navy hover:bg-gold/90 text-lg px-8 py-4 font-semibold"
            >
              Buscar por destino <ArrowRight size={18} />
            </a>
            <WhatsAppButton
              variant="cta"
              label="Falar com um consultor"
              className="text-lg px-8 py-4"
            />
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="section-padding bg-background">
        <div className="container-editorial">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="heading-section text-foreground mb-4">
              Como funcionam os grupos com guia local
            </h2>
            <p className="ai-summary text-lg text-muted-foreground font-light">
              {localGroupAiSummary}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DIFFERENTIALS.map((d, i) => {
              const Icon = d.icon;
              return (
                <motion.div
                  key={d.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-card border border-border rounded-xl p-6 shadow-card"
                >
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                    <Icon className="text-gold" size={22} />
                  </div>
                  <h3 className="font-serif text-lg text-foreground mb-2">
                    {d.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    {d.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Roteiros + filtros */}
      <section id="roteiros" className="section-padding bg-muted">
        <div className="container-editorial">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="heading-section text-foreground mb-4">
              Busque por destino ou por data
            </h2>
            <p className="text-muted-foreground font-light">
              Filtre os circuitos pelo país que você quer conhecer, pelo mês da
              saída ou digite uma cidade.
            </p>
          </div>

          {/* Busca livre */}
          <div className="max-w-xl mx-auto mb-8">
            <label htmlFor="busca-grupo" className="sr-only">
              Buscar roteiro em grupo por cidade ou destino
            </label>
            <div className="relative">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                size={18}
              />
              <input
                id="busca-grupo"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ex.: Praga, Dubrovnik, Suíça, Paris…"
                className="w-full pl-12 pr-4 py-3 rounded-full bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold"
              />
            </div>
          </div>

          {/* Filtro por destino */}
          <div className="mb-6">
            <p className="text-xs uppercase tracking-wider text-muted-foreground text-center mb-3 flex items-center justify-center gap-2">
              <MapPin size={14} /> Destino
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setCountry("all")}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  country === "all"
                    ? "bg-navy text-white"
                    : "bg-card border border-border text-foreground hover:border-navy"
                }`}
              >
                Todos os destinos
              </button>
              {localGuideCountries.map((c) => {
                const count = localGuideGroups.filter((g) =>
                  g.countries.includes(c)
                ).length;
                return (
                  <button
                    key={c}
                    onClick={() => setCountry(c)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                      country === c
                        ? "bg-navy text-white"
                        : "bg-card border border-border text-foreground hover:border-navy"
                    }`}
                  >
                    {c} ({count})
                  </button>
                );
              })}
            </div>
          </div>

          {/* Filtro por mês */}
          <div className="mb-10">
            <p className="text-xs uppercase tracking-wider text-muted-foreground text-center mb-3 flex items-center justify-center gap-2">
              <Calendar size={14} /> Mês de saída
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setMonth("all")}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  month === "all"
                    ? "bg-gold text-navy"
                    : "bg-card border border-border text-foreground hover:border-gold"
                }`}
              >
                Todas as datas
              </button>
              {localGuideMonths.map((m) => (
                <button
                  key={m}
                  onClick={() => setMonth(m)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    month === m
                      ? "bg-gold text-navy"
                      : "bg-card border border-border text-foreground hover:border-gold"
                  }`}
                >
                  {monthLabel(m)}
                </button>
              ))}
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mb-8">
            {filtered.length}{" "}
            {filtered.length === 1 ? "roteiro encontrado" : "roteiros encontrados"}
          </p>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((g) => {
              const next =
                month === "all"
                  ? g.departures[0]
                  : g.departures.find((d) => d.startsWith(month)) ??
                    g.departures[0];
              return (
                <Link
                  key={g.slug}
                  to={`/grupos-guia-local/${g.slug}`}
                  className="group bg-card border border-border rounded-xl p-6 hover:border-gold hover:shadow-lg transition-all flex flex-col"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs uppercase tracking-wider text-gold font-semibold">
                      {g.days} dias · {g.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Cód. {g.code}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl text-foreground mb-2 leading-tight">
                    {g.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-light mb-2 line-clamp-2">
                    {g.subtitle}
                  </p>
                  <p className="text-sm text-foreground/75 font-light italic mb-4 line-clamp-3">
                    {g.intro}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {g.countries.slice(0, 4).map((c) => (
                      <span
                        key={c}
                        className="text-[11px] px-2 py-0.5 rounded-full bg-muted border border-border text-muted-foreground"
                      >
                        {c}
                      </span>
                    ))}
                    {g.countries.length > 4 && (
                      <span className="text-[11px] px-2 py-0.5 rounded-full bg-muted border border-border text-muted-foreground">
                        +{g.countries.length - 4}
                      </span>
                    )}
                  </div>
                  <div className="mt-auto pt-3 border-t border-border">
                    <p className="text-sm font-serif text-foreground mb-1">
                      {localGuidePriceLabel(g) === "Sob consulta"
                        ? "Valor sob consulta"
                        : `A partir de ${localGuidePriceLabel(g)}`}
                      {localGuidePriceLabel(g) !== "Sob consulta" && (
                        <span className="text-xs text-muted-foreground font-sans">
                          {" "}
                          / pessoa
                        </span>
                      )}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-emerald inline-flex items-center gap-1">
                        <Check size={12} /> {g.departures.length} saídas ·{" "}
                        {formatDeparture(next)}
                      </span>
                      <span className="text-sm text-gold inline-flex items-center gap-1">
                        Ver <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">
              Nenhum roteiro com esse filtro. Fale com a gente pelo WhatsApp —
              desenhamos o circuito que você procura.
            </p>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-editorial max-w-3xl">
          <FAQSection faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="container-editorial text-center max-w-2xl">
          <h2 className="heading-section mb-6">
            Quer comparar com um grupo com guia brasileiro?
          </h2>
          <p className="text-xl text-white/90 mb-10 font-light">
            Temos as duas estruturas. Conte o destino e a data que você tem em
            mente — indicamos a melhor combinação de curadoria e acompanhamento.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <WhatsAppButton
              variant="cta"
              label="Falar com um consultor"
              className="text-lg px-8 py-4"
            />
            <Link to="/grupos-guia-brasileiro" className="btn-outline">
              Ver grupos com guia brasileiro <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GruposGuiaLocal;
