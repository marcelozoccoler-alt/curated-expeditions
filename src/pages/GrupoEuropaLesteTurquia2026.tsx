import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Calendar,
  Users,
  Plane,
  Hotel,
  MapPin,
  Check,
  X,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEO } from "@/components/SEO";
import { FAQSection } from "@/components/FAQSection";
import { CONTACT, generateWhatsAppLink } from "@/lib/types";
import heroImg from "@/assets/grupo-europa-leste-turquia-2026.jpg";
import { getHotelUrl, buildHotelsJsonLd, buildHotelsFAQs, buildHotelsKeywords } from "@/lib/groupHotels";

const whatsappParams = {
  type: "Roteiro" as const,
  name: "Grupo Europa do Leste & Turquia 2026 · Budapeste, Viena, Praga e Istambul (saída 02/10/2026)",
};

const benefits = [
  {
    title: "Quatro capitais icónicas em 15 dias",
    desc: "Budapeste às margens do Danúbio, Viena imperial, Praga medieval e Istambul entre Europa e Ásia — uma viagem cultural completa pelo Leste Europeu e Turquia.",
  },
  {
    title: "Grupo enxuto · máximo 12 pessoas",
    desc: "Experiência intimista, logística inteligente e atendimento próximo. Casais, amigos e viajantes solo são bem-vindos.",
  },
  {
    title: "Cruzeiro pelo Danúbio em Budapeste",
    desc: "Navegação pelo rio mais icónico da Europa Central, passando pelo Parlamento húngaro iluminado e pela Ponte das Correntes.",
  },
  {
    title: "Concerto clássico no Palácio de Schönbrunn",
    desc: "Uma noite de Mozart e Strauss no palácio imperial dos Habsburgo — uma das experiências mais marcantes de Viena.",
  },
  {
    title: "Jantar com espetáculo medieval em Praga",
    desc: "Mesa farta, música, dança e ambientação medieval no coração da cidade dos cem campanários.",
  },
  {
    title: "Trekkings urbanos guiados em cada cidade",
    desc: "Meio dia de caminhada interpretativa em Buda, Pest, Viena, Praga e Istambul — para sentir cada capital no seu próprio ritmo.",
  },
];

const itinerary = [
  {
    day: "Dia 1 — 02/10 (sex)",
    title: "São Paulo → Istambul",
    points: [
      "Apresentação em Guarulhos com o coordenador",
      "Voo TK 216 às 16h35 · pernoite a bordo",
    ],
  },
  {
    day: "Dia 2 — 03/10 (sáb)",
    title: "Istambul → Budapeste",
    points: [
      "Chegada Istambul 11h15 · conexão TK 1033 às 12h20",
      "Chegada Budapeste 13h15 · traslado ao hotel",
      "Check-in Hotel Medos",
    ],
  },
  {
    day: "Dia 3 — 04/10 (dom)",
    title: "Trekking Buda",
    points: [
      "Meio dia de trekking urbano pelo lado histórico de Buda",
      "Castelo de Buda, Bastião dos Pescadores e Igreja de Matias (passagens externas)",
      "Tarde livre",
    ],
  },
  {
    day: "Dia 4 — 05/10 (seg)",
    title: "Trekking Pest + Cruzeiro Danúbio",
    points: [
      "Trekking urbano por Pest: Parlamento, Basílica de Santo Estêvão, Avenida Andrássy",
      "Cruzeiro pelo Rio Danúbio (incluído)",
    ],
  },
  {
    day: "Dia 5 — 06/10 (ter)",
    title: "Budapeste → Viena",
    points: [
      "Trem econômico Budapeste → Viena",
      "Check-in ibis Wien Mariahilf",
      "Tarde livre em Viena",
    ],
  },
  {
    day: "Dia 6 — 07/10 (qua)",
    title: "Trekking Viena + Concerto Clássico",
    points: [
      "Trekking urbano por Viena: Ringstrasse, Hofburg, Catedral de Santo Estêvão",
      "Concerto de Música Clássica no Palácio de Schönbrunn (incluído)",
    ],
  },
  {
    day: "Dia 7 — 08/10 (qui)",
    title: "Viena · dia livre",
    points: [
      "Sugestões: Museu de História da Arte, Palácio Belvedere, café Sacher",
      "Tempo livre para a Ópera, Naschmarkt e cafés históricos",
    ],
  },
  {
    day: "Dia 8 — 09/10 (sex)",
    title: "Viena → Praga",
    points: [
      "Trem econômico Viena → Praga",
      "Check-in Hotel Taurus",
      "Tarde livre na cidade dos cem campanários",
    ],
  },
  {
    day: "Dia 9 — 10/10 (sáb)",
    title: "Trekking Praga + Jantar Medieval",
    points: [
      "Trekking urbano: Cidade Velha, Relógio Astronômico, Ponte Carlos e Malá Strana",
      "Jantar com espetáculo medieval (incluído)",
    ],
  },
  {
    day: "Dia 10 — 11/10 (dom)",
    title: "Praga · dia livre",
    points: [
      "Sugestões: Castelo de Praga, Catedral de São Vito, Beco Dourado",
      "Bairro judeu de Josefov e Cidade Velha à noite",
    ],
  },
  {
    day: "Dia 11 — 12/10 (seg)",
    title: "Praga → Istambul",
    points: [
      "Traslado ao aeroporto · Voo TK 1772 às 15h20",
      "Chegada Istambul 19h05 · traslado ao hotel",
      "Check-in Hotel Galata Times",
    ],
  },
  {
    day: "Dia 12 — 13/10 (ter)",
    title: "Trekking Istambul",
    points: [
      "Meio dia de trekking urbano: Sultanahmet, Mesquita Azul, Hipódromo e Cisterna da Basílica (passagens externas)",
      "Tarde livre na Torre de Gálata",
    ],
  },
  {
    day: "Dia 13 — 14/10 (qua)",
    title: "Istambul · dia livre",
    points: [
      "Sugestões: Grand Bazaar, Bazar das Especiarias, Bósforo, Santa Sofia, Palácio Topkapi",
      "Travessia entre Europa e Ásia",
    ],
  },
  {
    day: "Dia 14 — 15/10 (qui)",
    title: "Istambul → São Paulo",
    points: [
      "Traslado ao aeroporto · Voo TK 215 às 20h15",
      "Pernoite a bordo",
    ],
  },
  {
    day: "Dia 15 — 16/10 (sex)",
    title: "Chegada ao Brasil",
    points: [
      "Chegada prevista em Guarulhos às 03h30",
      "Fim dos nossos serviços",
    ],
  },
];

const included = [
  "Passagens aéreas Turkish Airlines em classe econômica: GRU–IST–BUD e PRG–IST–GRU, com 1 bagagem despachada de 23kg",
  "Trens econômicos Budapeste → Viena e Viena → Praga",
  "12 noites de hospedagem em hotéis 3 estrelas (ou similares) com café da manhã",
  "Traslados entre aeroportos/estações e hotéis em todas as cidades",
  "Trekkings urbanos guiados (meio dia) em Buda, Pest, Viena, Praga e Istambul",
  "Cruzeiro pelo Rio Danúbio em Budapeste",
  "Concerto de Música Clássica no Palácio de Schönbrunn, Viena",
  "Jantar com espetáculo medieval em Praga",
  "Assistência 24h durante toda a viagem",
];

const notIncluded = [
  "Entradas e ingressos para atrações não mencionadas como inclusas",
  "Refeições além do café da manhã, bebidas, despesas pessoais e gorjetas",
  "Seguro viagem (recomendamos contratação — consulte coberturas)",
  "Qualquer transporte fora do descrito nesta proposta",
  "Taxas de embarque e IOF",
];

const faqs = [
  {
    q: "Qual a condição de pagamento?",
    a: "Entrada de 25% no ato da reserva para confirmação da vaga e saldo (75%) dividido em 10x sem juros no cartão de crédito. Valores em reais, sujeitos a disponibilidade no momento da confirmação.",
  },
  {
    q: "Brasileiros precisam de visto?",
    a: "Não. Brasileiros não precisam de visto para Hungria, Áustria, República Tcheca e Turquia para estadias turísticas de até 90 dias. É obrigatório passaporte com validade mínima de 6 meses a partir da data de retorno.",
  },
  {
    q: "Como é o clima em outubro nesses países?",
    a: "Outono europeu: temperaturas entre 8–18 °C em Budapeste, Viena e Praga, e 14–22 °C em Istambul. Dias mais curtos, folhas em tons cobre e luz suave perfeita para fotografia. Recomendamos camadas, casaco médio, capa de chuva e calçado confortável.",
  },
  {
    q: "Qual a base de hospedagem?",
    a: "Hotéis 3 estrelas (ou similares) com café da manhã incluído: Budapeste (Hotel Medos), Viena (ibis Wien Mariahilf), Praga (Hotel Taurus) e Istambul (Hotel Galata Times). Sempre em quartos standard.",
  },
  {
    q: "Qual o perfil do grupo?",
    a: "Grupo exclusivo com no máximo 12 participantes. Casais, amigos e viajantes solo são muito bem-vindos. Trabalhamos com apartamento duplo (compartilhado) ou individual (com suplemento de R$ 3.500).",
  },
];

const hotelsForSeo = [
  { city: "Budapeste", hotel: "Hotel Medos" },
  { city: "Viena", hotel: "ibis Wien Mariahilf" },
  { city: "Praga", hotel: "Hotel Taurus" },
  { city: "Istambul", hotel: "Hotel Galata Times" },
];
const hotelsSeoJsonLd = buildHotelsJsonLd(hotelsForSeo, "Grupo Europa do Leste & Turquia 2026 — Budapeste, Viena, Praga e Istambul — Create Travel", "/grupos/europa-do-leste-turquia-2026");
const hotelsSeoFaqs = buildHotelsFAQs(hotelsForSeo, "Grupo Europa do Leste & Turquia 2026 — Budapeste, Viena, Praga e Istambul — Create Travel", "/grupos/europa-do-leste-turquia-2026");
const hotelsSeoKeywords = buildHotelsKeywords(hotelsForSeo);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Grupo Europa do Leste & Turquia 2026 — Budapeste, Viena, Praga e Istambul — Create Travel",
  description:
    "Grupo exclusivo de 15 dias por Budapeste, Viena, Praga e Istambul. Saída 02/10/2026 pela Turkish Airlines, com cruzeiro pelo Danúbio, concerto em Schönbrunn e jantar medieval em Praga.",
  image: heroImg,
  touristType: "Cultura, história, capitais europeias, outono",
  itinerary: itinerary.map((d, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${d.day} — ${d.title}`,
  })),
  offers: {
    "@type": "Offer",
    price: "24935.00",
    priceCurrency: "BRL",
    availability: "https://schema.org/SoldOut",
    validThrough: "2026-10-02",
  },
  provider: {
    "@type": "TravelAgency",
    name: "Create Travel",
    url: CONTACT.domain,
  },
};

const GrupoEuropaLesteTurquia2026 = () => {
  const ctaLink = generateWhatsAppLink(whatsappParams);

  return (
    <div className="min-h-screen">
      <SEO
        title="Grupo Europa do Leste & Turquia 2026 · Budapeste, Viena, Praga e Istambul | Create Travel"
        description="15 dias por Budapeste, Viena, Praga e Istambul em grupo exclusivo de até 12 pessoas. Saída 02/10/2026 pela Turkish Airlines, cruzeiro pelo Danúbio, concerto em Schönbrunn e jantar medieval em Praga. R$ 24.935 + entrada 25% + 10x sem juros."
        canonicalPath="/grupos/europa-do-leste-turquia-2026"
        ogImage={heroImg}
        ogType="article"
        jsonLd={[jsonLd, ...hotelsSeoJsonLd]}
        keywords={`viagem em grupo Europa do Leste 2026, Budapeste Viena Praga Istambul, grupo Turquia 2026, Turkish Airlines, cruzeiro Danúbio, concerto Schönbrunn, jantar medieval Praga, Create Travel, ${hotelsSeoKeywords}`}
      />
      <Header />
      <WhatsAppButton variant="float" params={whatsappParams} />

      {/* Hero */}
      <section className="relative h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Parlamento de Budapeste às margens do Danúbio ao entardecer com silhuetas de Praga e Istambul ao fundo"
            className="w-full h-full object-cover"
            width={1600}
            height={900}
            fetchPriority="high"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="container-editorial relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/90 text-navy text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles size={14} /> Outono 2026 · Grupo exclusivo
            </div>
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-destructive text-destructive-foreground text-sm font-bold uppercase tracking-wider shadow-lg mb-6">
              Lote esgotado / Lotado
            </div>
            <p className="text-caption text-gold mb-4">
              Grupo · 02 a 16 de outubro de 2026 · máximo 12 pessoas
            </p>
            <h1 className="heading-hero text-white mb-6">
              Europa do Leste & Turquia
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
              15 dias por Budapeste, Viena, Praga e Istambul — cruzeiro pelo
              Danúbio, concerto em Schönbrunn, jantar medieval e o encontro
              entre Europa e Ásia. Voos Turkish Airlines.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <WhatsAppButton
                variant="cta"
                label="Entrar na lista de espera"
                params={whatsappParams}
                className="text-lg px-8 py-4"
              />
              <a
                href="#investimento"
                className="btn-outline border-white text-white hover:bg-white hover:text-navy"
              >
                Ver investimento <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick facts */}
      <section className="bg-muted py-10 border-b border-border">
        <div className="container-editorial grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Calendar, label: "Datas", value: "02 a 16/10/2026" },
            { icon: Users, label: "Perfil", value: "Grupo · máx. 12 pessoas" },
            { icon: Plane, label: "Voos", value: "Turkish Airlines" },
            { icon: Hotel, label: "Estilo", value: "Capitais europeias" },
          ].map((f, i) => (
            <div key={i} className="flex items-start gap-3">
              <f.icon className="text-gold flex-shrink-0" size={22} />
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  {f.label}
                </p>
                <p className="font-serif font-semibold text-foreground">
                  {f.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-editorial">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-caption text-gold mb-4">
              Por que viajar com a Create Travel
            </p>
            <h2 className="heading-section text-foreground">
              Quatro cidades icónicas, uma viagem inesquecível
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card p-8 rounded-xl shadow-card border border-border"
              >
                <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center mb-4">
                  <Check className="text-gold" size={20} />
                </div>
                <h3 className="text-lg font-serif font-semibold mb-2">
                  {b.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {b.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flights */}
      <section className="section-padding bg-navy text-white">
        <div className="container-editorial grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-caption text-gold mb-4">
              Passagens aéreas incluídas
            </p>
            <h2 className="heading-section mb-6">Voos Turkish Airlines</h2>
            <p className="text-white/85 leading-relaxed mb-4">
              Companhia premiada com uma das maiores malhas da Europa e Ásia,
              hub em Istambul e excelente conexão para o Leste Europeu. Inclui
              1 bagagem despachada de 23 kg em todos os trechos.
            </p>
            <p className="text-white/70 text-sm">
              Entre cidades europeias, trens econômicos confortáveis: Budapeste
              → Viena e Viena → Praga.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Ida
              </p>
              <p className="font-serif text-lg">GRU → IST → BUD</p>
              <p className="text-white/75 text-sm mt-1">
                02/10 TK 216 às 16h35 + 03/10 TK 1033 às 12h20 · chegada Budapeste 13h15
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Trecho intra-Europa
              </p>
              <p className="font-serif text-lg">PRG → IST</p>
              <p className="text-white/75 text-sm mt-1">
                12/10 TK 1772 às 15h20 · chegada Istambul 19h05
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Volta
              </p>
              <p className="font-serif text-lg">IST → GRU</p>
              <p className="text-white/75 text-sm mt-1">
                15/10 TK 215 às 20h15 · chegada GRU 16/10 03h30
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="section-padding">
        <div className="container-editorial">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-caption text-gold mb-4">Roteiro completo</p>
            <h2 className="heading-section text-foreground">
              15 dias — dia a dia
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {itinerary.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="bg-card border border-border rounded-xl p-6 shadow-card"
              >
                <div className="flex items-center gap-2 text-gold text-xs uppercase tracking-wider font-semibold mb-2">
                  <MapPin size={14} /> {d.day}
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">
                  {d.title}
                </h3>
                <ul className="space-y-2">
                  {d.points.map((p, j) => (
                    <li
                      key={j}
                      className="flex gap-2 text-sm text-muted-foreground"
                    >
                      <span className="text-gold mt-1">•</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hotels */}
      <section className="section-padding bg-muted">
        <div className="container-editorial">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <p className="text-caption text-gold mb-4">Hotéis previstos</p>
            <h2 className="heading-section text-foreground">
              Hospedagens 3★ com café da manhã
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {hotelsForSeo.map((h) => (
              <div
                key={h.city}
                className="bg-card border border-border rounded-xl p-6 text-center shadow-card"
              >
                <Hotel className="text-gold mx-auto mb-3" size={22} />
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                  {h.city}
                </p>
                <p className="font-serif text-base font-semibold text-foreground">
                  <a href={getHotelUrl(h.hotel)} target="_blank" rel="noopener noreferrer" className="hover:text-gold underline-offset-4 hover:underline transition-colors">{h.hotel}</a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Included / not included */}
      <section className="section-padding">
        <div className="container-editorial grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-xl p-8 border border-border shadow-card">
            <h3 className="font-serif text-2xl font-semibold mb-6 text-foreground">
              O que está incluído
            </h3>
            <ul className="space-y-3">
              {included.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm">
                  <Check
                    className="text-emerald flex-shrink-0 mt-0.5"
                    size={18}
                  />
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
              {notIncluded.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm">
                  <X
                    className="text-muted-foreground flex-shrink-0 mt-0.5"
                    size={18}
                  />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Investment */}
      <section
        id="investimento"
        className="section-padding bg-gradient-hero text-white"
      >
        <div className="container-editorial max-w-4xl text-center">
          <p className="text-caption text-gold mb-4">Investimento</p>
          <h2 className="heading-section mb-6">
            R$ 24.935 por pessoa
          </h2>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-destructive text-destructive-foreground text-base font-bold uppercase tracking-wider shadow-lg mb-6">
            Lote esgotado / Lotado
          </div>
          <p className="text-white/85 mb-8">
            Em apartamento duplo ou compartilhado. Suplemento single de
            R$ 3.500 — mesma estrutura de parcelamento. As vagas para este grupo
            foram esgotadas; deixe seu nome na lista de espera para possíveis
            reposições.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8 text-left opacity-60">
            <div className="bg-white/10 border border-white/20 rounded-xl p-6 ring-2 ring-gold/60">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto duplo / compartilhado
              </p>
              <p className="font-serif text-2xl font-semibold">R$ 24.935</p>
              <p className="text-white/70 text-xs mt-1">por pessoa</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Suplemento single
              </p>
              <p className="font-serif text-2xl font-semibold">+ R$ 3.500</p>
              <p className="text-white/70 text-xs mt-1">quarto individual</p>
            </div>
          </div>

          <div className="bg-card/95 text-foreground rounded-xl p-8 mb-8 text-left opacity-60">
            <p className="text-xs uppercase tracking-wider text-gold mb-3 font-semibold">
              Condição de pagamento
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Entrada</p>
                <p className="font-serif text-3xl font-semibold text-foreground">
                  25%
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  no ato da reserva
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">
                  Saldo (75%)
                </p>
                <p className="font-serif text-3xl font-semibold text-foreground">
                  10x sem juros
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  no cartão de crédito
                </p>
              </div>
            </div>
          </div>

          <WhatsAppButton
            variant="cta"
            label="Entrar na lista de espera"
            params={whatsappParams}
            className="text-lg px-10 py-5"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted">
        <div className="container-editorial max-w-3xl">
          <FAQSection faqs={[...faqs, ...hotelsSeoFaqs]} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding">
        <div className="container-editorial text-center max-w-2xl">
          <h2 className="heading-section text-foreground mb-6">
            Lote esgotado / Lotado
          </h2>
          <p className="text-muted-foreground mb-8">
            As vagas para este grupo foram esgotadas. Deixe seu nome na lista de
            espera pelo WhatsApp e te avisamos caso surja alguma reposição.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-lg px-8 py-4"
            >
              Entrar na lista de espera
            </a>
            <Link to="/embarque-com-a-create" className="btn-outline">
              Ver outras saídas <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GrupoEuropaLesteTurquia2026;
