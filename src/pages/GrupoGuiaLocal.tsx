import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Hotel,
  Check,
  X,
  Users,
  Languages,
  ArrowRight,
  Euro,
  Sparkles,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEO } from "@/components/SEO";
import { FAQSection } from "@/components/FAQSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ShareButtons } from "@/components/ShareButtons";
import NotFound from "@/pages/NotFound";
import { CONTACT } from "@/lib/types";
import { ENTITY_IDS } from "@/lib/entity";
import {
  getLocalGuideGroup,
  localGuideGroups,
  formatDeparture,
  MONTHS_PT,
  LOCAL_GUIDE_INCLUDED,
  LOCAL_GUIDE_NOT_INCLUDED,
  localGuidePriceLabel,
} from "@/lib/localGuideGroups";

const DOMAIN = CONTACT.domain.replace(/\/$/, "");

/** "VIENA - BUDAPESTE" → "Viena – Budapeste" */
export const prettyRoute = (route: string) =>
  route
    .split(/\s*[-–]\s*/)
    .map((part) =>
      part
        .trim()
        .toLowerCase()
        .split(" ")
        .map((w) =>
          ["e", "do", "da", "de", "dos", "das"].includes(w)
            ? w
            : w.charAt(0).toUpperCase() + w.slice(1)
        )
        .join(" ")
    )
    .filter(Boolean)
    .join(" – ");

const GrupoGuiaLocal = () => {
  const { slug = "" } = useParams();
  const group = getLocalGuideGroup(slug);

  const byMonth = useMemo(() => {
    if (!group) return [] as { label: string; dates: string[] }[];
    const map = new Map<string, string[]>();
    group.departures.forEach((d) => {
      const key = d.slice(0, 7);
      map.set(key, [...(map.get(key) ?? []), d]);
    });
    return Array.from(map.entries())
      .sort()
      .map(([key, dates]) => ({
        label: `${MONTHS_PT[Number(key.slice(5, 7)) - 1]} ${key.slice(0, 4)}`,
        dates,
      }));
  }, [group]);

  if (!group) return <NotFound />;

  const cities = group.hotels.map((h) => h.city);
  const countriesLabel = group.countries.join(" · ");
  const canonicalPath = `/grupos-guia-local/${group.slug}`;
  const priceLabel = localGuidePriceLabel(group);
  const currencySymbol = group.currency === "USD" ? "US$" : "€";

  const whatsappParams = {
    type: "Roteiro" as const,
    name: `Grupo com guia local — ${group.title} (${group.days} dias, cód. ${group.code})`,
  };

  const faqs = [
    {
      q: "O grupo tem guia acompanhante saindo do Brasil?",
      a: `Não. Este é um grupo com guia local: você é recebido no aeroporto de ${cities[0]} e acompanhado por um guia profissional no destino durante todo o circuito, em espanhol e/ou português conforme a saída negociada. É justamente essa estrutura — conhecimento local em vez de coordenação desde o Brasil — que torna o investimento mais racional do que nos grupos com coordenador brasileiro.`,
    },
    {
      q: "Em que idioma é feito o acompanhamento?",
      a: "As saídas garantidas têm guia em espanhol, com material e assistência em português da Create Travel. Em datas específicas negociamos guia em português — consulte a disponibilidade para a sua data.",
    },
    {
      q: `Quantos dias tem o roteiro ${group.title}?`,
      a: `${group.days} dias e ${group.nights} noites, com hospedagem em hotéis categoria ${group.category}, café da manhã buffet diário, ônibus moderno com sistema de áudio e visitas guiadas conforme o itinerário.`,
    },
    {
      q: "Quanto custa e como pago?",
      a: `A partir de ${priceLabel} por pessoa em apartamento duplo${group.singleSupplementEur ? ` (suplemento individual de ${currencySymbol} ${group.singleSupplementEur.toLocaleString("pt-BR")})` : ""}. O pagamento da parte terrestre segue a mesma condição dos nossos grupos: entrada de 25% no ato da reserva e o saldo em até 9x sem juros no cartão de crédito. A parte aérea é cotada à parte e o parcelamento depende da companhia aérea escolhida.`,
    },
    {
      q: "As passagens aéreas estão incluídas?",
      a: "Não estão incluídas, e isso é uma vantagem: cotamos os voos junto com a sua reserva buscando a melhor combinação de tarifa, milhas e conexões a partir da sua cidade — São Paulo, Rio, Belo Horizonte, Curitiba, Porto Alegre, Brasília ou qualquer outra base.",
    },
    {
      q: "As saídas são realmente garantidas?",
      a: `Sim. Todas as ${group.departures.length} datas de 2027 deste roteiro são saídas garantidas: operam com número mínimo já assegurado, então você reserva sabendo que o grupo vai sair.`,
    },
    {
      q: "Quais destinos e cidades o roteiro percorre?",
      a: `${group.subtitle}. Países visitados: ${countriesLabel}.`,
    },
  ];

  const keywords = [
    `grupo ${group.title.toLowerCase()}`,
    "viagem em grupo com guia local",
    "saídas garantidas 2027",
    ...group.countries.map((c) => `viagem em grupo ${c.toLowerCase()}`),
    "circuito europeu em grupo",
    "grupo europa 2027 curadoria",
  ].join(", ");

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "TouristTrip",
      "@id": `${DOMAIN}${canonicalPath}#trip`,
      name: `${group.title} — grupo com guia local (${group.days} dias)`,
      description: `Circuito em grupo por ${countriesLabel} com guia local acompanhante, ${group.nights} noites em hotéis categoria ${group.category}, ônibus e visitas incluídas. ${group.departures.length} saídas garantidas em 2027.`,
      url: `${DOMAIN}${canonicalPath}`,
      touristType: [
        "Viajantes em grupo",
        "Casais",
        "Grupos de amigos",
        "Viajantes 50+",
      ],
      itinerary: {
        "@type": "ItemList",
        numberOfItems: group.itinerary.length,
        itemListElement: group.itinerary.map((d, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: `Dia ${d.day} — ${prettyRoute(d.route)}`,
          description: d.text,
          item: { "@type": "Place", name: prettyRoute(d.route) },
        })),
      },
      provider: { "@id": ENTITY_IDS.organization },
      offers: {
        "@type": "Offer",
        // Nunca publica preço estimado: sem valor fechado, a oferta vai sem `price`.
        ...(group.priceEur && group.priceEur > 0
          ? {
              price: group.priceEur,
              priceCurrency: group.currency ?? "EUR",
            }
          : {}),
        availability: (() => {
          const today = new Date().toISOString().slice(0, 10);
          const upcoming = group.departures.filter((d) => d >= today);
          if (upcoming.length > 0) return "https://schema.org/LimitedAvailability";
          return group.departures.length > 0
            ? "https://schema.org/SoldOut"
            : "https://schema.org/PreOrder";
        })(),
        ...(() => {
          const today = new Date().toISOString().slice(0, 10);
          const upcoming = group.departures.filter((d) => d >= today).sort();
          return upcoming.length ? { priceValidUntil: upcoming[upcoming.length - 1] } : {};
        })(),
        url: `${DOMAIN}${canonicalPath}`,
        seller: { "@id": ENTITY_IDS.organization },
        description:
          group.priceEur && group.priceEur > 0
            ? "Por pessoa em apartamento duplo, parte terrestre. Entrada de 25% + saldo em até 9x sem juros no cartão; aéreo cotado à parte."
            : "Valor sob consulta: roteiro cotado sob medida conforme data de saída e categoria hoteleira. Parte terrestre com entrada de 25% + saldo em até 9x sem juros; aéreo cotado à parte.",
      },
      subjectOf: group.countries.map((c) => ({ "@type": "Place", name: c })),
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
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
        {
          "@type": "ListItem",
          position: 3,
          name: group.title,
          item: `${DOMAIN}${canonicalPath}`,
        },
      ],
    },
  ];

  const related = localGuideGroups
    .filter(
      (g) =>
        g.slug !== group.slug &&
        g.countries.some((c) => group.countries.includes(c))
    )
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      <SEO
        title={`${group.title}: grupo ${group.days} dias, saídas 2027`}
        description={`${group.days} dias em grupo com guia local, ${group.departures.length} saídas garantidas em 2027, a partir de ${priceLabel} por pessoa. ${group.subtitle}`}
        canonicalPath={canonicalPath}
        keywords={keywords}
        jsonLd={jsonLd}
        ogType="article"
      />
      <Header />
      <WhatsAppButton variant="float" params={whatsappParams} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-navy via-navy to-navy/90 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gold blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-emerald blur-3xl" />
        </div>
        <div className="container-editorial relative z-10 max-w-4xl">
          <div className="mb-6 text-white/70">
            <Breadcrumbs
              items={[
                { label: "Grupos com guia local", href: "/grupos-guia-local" },
                { label: group.title },
              ]}
            />
          </div>
          <div className="inline-flex flex-wrap items-center gap-2 mb-6">
            <span className="px-3 py-1 rounded-full bg-gold/20 border border-gold/40 text-gold text-xs font-semibold uppercase tracking-[0.2em]">
              Guia local · {group.category}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs uppercase tracking-[0.2em]">
              Cód. {group.code}
            </span>
          </div>
          <h1 className="heading-hero mb-5">{group.title}</h1>
          <p className="text-xl text-white/90 font-light mb-4">{group.subtitle}</p>
          <p className="text-lg text-white/85 font-light leading-relaxed mb-5">
            {group.intro}
          </p>
          <p className="text-white/70 font-light mb-8">
            {group.days} dias · {group.nights} noites · {countriesLabel} ·{" "}
            {group.departures.length} saídas garantidas em 2027
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#datas"
              className="btn-primary bg-gold text-navy hover:bg-gold/90 font-semibold"
            >
              Ver datas de saída <Calendar size={16} />
            </a>
            <WhatsAppButton
              variant="cta"
              label="Quero reservar"
              params={whatsappParams}
            />
          </div>
        </div>
      </section>

      {/* Destaques do roteiro */}
      <section className="section-padding bg-muted">
        <div className="container-editorial max-w-4xl">
          <p className="text-caption text-gold mb-4">Destaques do roteiro</p>
          <h2 className="heading-section text-foreground mb-8">
            O que torna este circuito especial
          </h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {group.highlights.map((h) => (
              <li
                key={h}
                className="flex gap-3 text-[15px] text-foreground/85 bg-card border border-border rounded-xl p-5 shadow-card"
              >
                <Sparkles size={18} className="shrink-0 mt-0.5 text-gold" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          {/* Bloco GEO — resposta citável por ChatGPT, Gemini e Perplexity */}
          <div className="mt-10">
            <GeoAnswerBlock
              summary={buildGroupAiSummary(group)}
              bullets={buildGroupGeoBullets(group)}
              facts={buildGroupGeoFacts(group)}
              ariaLabel={`Resumo de ${group.title} para busca e IA`}
            />
          </div>
        </div>
      </section>





      {/* Resumo / vantagens */}
      <section className="section-padding bg-background">
        <div className="container-editorial">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Languages,
                title: "Guia local no destino",
                desc: "Guia profissional acompanhando o circuito inteiro, em espanhol e/ou português conforme a saída negociada. Sistema de áudio individual em todas as visitas.",
              },
              {
                icon: Euro,
                title: "Preço muito competitivo",
                desc: `A partir de ${priceLabel} por pessoa em apartamento duplo — a estrutura com guia local é o que permite esse valor sem perder qualidade de hotel e roteiro.`,
              },
              {
                icon: Calendar,
                title: "Saídas garantidas",
                desc: `${group.departures.length} datas confirmadas em 2027. Você reserva com a certeza de que o grupo opera.`,
              },
              {
                icon: Users,
                title: "Voos flexíveis",
                desc: "Sem aéreo amarrado: cotamos os voos da sua cidade e você pode estender a viagem antes ou depois do circuito.",
              },
            ].map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-card border border-border rounded-xl p-6 shadow-card"
                >
                  <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center mb-4">
                    <Icon className="text-gold" size={20} />
                  </div>
                  <h3 className="font-serif text-lg font-semibold mb-2">
                    {b.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {b.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Datas */}
      <section id="datas" className="section-padding bg-muted">
        <div className="container-editorial max-w-4xl">
          <div className="text-center mb-10">
            <p className="text-caption text-gold mb-4">Saídas garantidas 2027</p>
            <h2 className="heading-section text-foreground">
              Escolha a sua data
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {byMonth.map((m) => (
              <div
                key={m.label}
                className="bg-card border border-border rounded-xl p-5 shadow-card"
              >
                <p className="text-xs uppercase tracking-wider text-gold font-semibold mb-3">
                  {m.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {m.dates.map((d) => (
                    <span
                      key={d}
                      className="text-sm px-2.5 py-1 rounded-md bg-muted text-foreground/85 border border-border"
                    >
                      {formatDeparture(d)}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Itinerário */}
      <section className="section-padding">
        <div className="container-editorial">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-caption text-gold mb-4">Roteiro completo</p>
            <h2 className="heading-section text-foreground">
              {group.days} dias — dia a dia
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {group.itinerary.map((d, i) => (
              <motion.div
                key={d.day}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(i * 0.03, 0.3) }}
                className="bg-card border border-border rounded-xl p-6 shadow-card"
              >
                <div className="flex items-center gap-2 text-gold text-xs uppercase tracking-wider font-semibold mb-2">
                  <MapPin size={14} /> Dia {d.day}
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">
                  {prettyRoute(d.route)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {d.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hotéis */}
      <section className="section-padding bg-muted">
        <div className="container-editorial">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <p className="text-caption text-gold mb-4">Hotéis previstos</p>
            <h2 className="heading-section text-foreground">
              Categoria {group.category}, sempre bem localizados
            </h2>
            <p className="text-muted-foreground mt-3 text-sm">
              {group.hotels.every((h) => /selecionad|a definir|categoria/i.test(h.hotel))
                ? `Neste roteiro os hotéis nominais ainda estão em confirmação junto ao operador local. A categoria ${group.category} é garantida em contrato e os nomes são informados antes do pagamento da primeira parcela — fale com a curadoria para receber a lista atualizada.`
                : "Ou similares na categoria indicada, conforme a cidade."}
            </p>

          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {group.hotels.map((h) => (
              <div
                key={h.city}
                className="bg-card border border-border rounded-xl p-6 text-center shadow-card"
              >
                <Hotel className="text-gold mx-auto mb-3" size={22} />
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                  {h.city}
                </p>
                <p className="font-serif text-lg font-semibold text-foreground">
                  {h.hotel}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incluído / não incluído */}
      <section className="section-padding">
        <div className="container-editorial grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-xl p-8 border border-border shadow-card">
            <h3 className="font-serif text-2xl font-semibold mb-6 text-foreground">
              O que está incluído
            </h3>
            <ul className="space-y-3">
              {LOCAL_GUIDE_INCLUDED.map((item) => (
                <li key={item} className="flex gap-3 text-sm">
                  <Check className="text-emerald flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-foreground/85">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card rounded-xl p-8 border border-border shadow-card">
            <h3 className="font-serif text-2xl font-semibold mb-6 text-foreground">
              Não incluído
            </h3>
            <ul className="space-y-3">
              {LOCAL_GUIDE_NOT_INCLUDED.map((item) => (
                <li key={item} className="flex gap-3 text-sm">
                  <X className="text-muted-foreground flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Investimento */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="container-editorial max-w-4xl text-center">
          <p className="text-caption text-gold mb-4">Investimento</p>
          <h2 className="heading-section mb-6">
            A partir de {priceLabel} por pessoa
          </h2>
          <p className="text-white/85 mb-8">
            Em apartamento duplo. Valores por pessoa em{" "}
            {group.currency === "USD" ? "dólares" : "euros"}, sujeitos a
            disponibilidade e à conversão do dia da reserva. Aéreo cotado
            separadamente a partir da sua cidade.
            {group.priceNote ? ` ${group.priceNote}` : ""}
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8 text-left max-w-2xl mx-auto">
            <div className="bg-white/10 border border-white/20 rounded-xl p-6 ring-2 ring-gold/60">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto duplo
              </p>
              <p className="font-serif text-2xl font-semibold">{priceLabel}</p>
              <p className="text-white/70 text-xs mt-1">por pessoa</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Suplemento individual
              </p>
              <p className="font-serif text-2xl font-semibold">
                {group.singleSupplementEur
                  ? `${currencySymbol} ${group.singleSupplementEur.toLocaleString("pt-BR")}`
                  : "Sob consulta"}
              </p>
              <p className="text-white/70 text-xs mt-1">
                para quem viaja em quarto single
              </p>
            </div>
          </div>

          <div className="bg-card/95 text-foreground rounded-xl p-8 mb-8 text-left">
            <p className="text-xs uppercase tracking-wider text-gold mb-3 font-semibold">
              Condição de pagamento
            </p>
            <p className="text-sm text-muted-foreground mb-5">
              Condição válida para a parte terrestre do programa. A parte aérea é cotada à parte e o parcelamento segue as regras da companhia aérea escolhida, que variam de uma cia para outra.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Entrada</p>
                <p className="font-serif text-3xl font-semibold">25%</p>
                <p className="text-sm text-muted-foreground mt-1">
                  no ato da reserva
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Saldo (75%)</p>
                <p className="font-serif text-3xl font-semibold">9x sem juros</p>
                <p className="text-sm text-muted-foreground mt-1">
                  no cartão de crédito
                </p>
              </div>
            </div>
          </div>

          <WhatsAppButton
            variant="cta"
            label="Quero garantir minha vaga"
            params={whatsappParams}
            className="text-lg px-10 py-5"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted">
        <div className="container-editorial max-w-3xl">
          <FAQSection faqs={faqs} />
        </div>
      </section>

      {/* Compartilhar + relacionados */}
      <section className="section-padding">
        <div className="container-editorial max-w-4xl">
          <div className="mb-12">
            <ShareButtons
              url={`${DOMAIN}${canonicalPath}`}
              title={`${group.title} — grupo com guia local, ${group.days} dias`}
            />
          </div>
          {related.length > 0 && (
            <>
              <h2 className="heading-section text-foreground mb-8">
                Outros roteiros na mesma região
              </h2>
              <div className="grid sm:grid-cols-3 gap-5">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to={`/grupos-guia-local/${r.slug}`}
                    className="group bg-card border border-border rounded-xl p-6 hover:border-gold transition-colors"
                  >
                    <p className="text-xs uppercase tracking-wider text-gold mb-2">
                      {r.days} dias · {r.category}
                    </p>
                    <h3 className="font-serif text-lg font-semibold mb-2">
                      {r.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                      {r.subtitle}
                    </p>
                    <span className="text-sm text-gold inline-flex items-center gap-1">
                      Ver roteiro <ArrowRight size={14} />
                    </span>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GrupoGuiaLocal;
