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
import heroImg from "@/assets/grupo-balcas-autenticos-2026.jpg";
import { getHotelUrl, buildHotelsJsonLd, buildHotelsFAQs, buildHotelsKeywords } from "@/lib/groupHotels";

const whatsappParams = {
  type: "Roteiro" as const,
  name: "Grupo Bálcãs Autênticos · Albânia, Kosovo e Macedônia do Norte 2026 (saída 13/10/2026)",
};

const benefits = [
  {
    title: "Três países, uma alma balcânica",
    desc: "Albânia, Kosovo e Macedônia do Norte em um único roteiro — autênticos, longe das multidões e em pleno outono dourado.",
  },
  {
    title: "Krujë e Prizren históricas",
    desc: "Cidadela de Skanderbeg, bazar otomano e o centro histórico de Prizren com a Ponte de Pedra e a Mesquita Sinan Pasha.",
  },
  {
    title: "Mosteiro de Visoki Dečani",
    desc: "Patrimônio UNESCO com mais de mil afrescos medievais — um dos maiores tesouros espirituais dos Bálcãs.",
  },
  {
    title: "Lago de Ohrid e São Naum",
    desc: "A 'Jerusalém dos Bálcãs' com passeio de barco, Igreja de São João Kaneo e nascentes do Rio Drin.",
  },
  {
    title: "Berat e Gjirokastër UNESCO",
    desc: "A 'Cidade das Mil Janelas' e a 'Cidade de Pedra' — duas joias albanesas reconhecidas pela UNESCO.",
  },
  {
    title: "Riviera Albanesa e Butrint",
    desc: "A estrada cinematográfica entre montanhas e o Mar Jônico, o sítio arqueológico de Butrint e o Parque de Llogara.",
  },
];

const itinerary = [
  {
    day: "Dia 1 — 13/10 (ter)",
    title: "São Paulo → Roma",
    points: [
      "Apresentação em Guarulhos com o coordenador",
      "Voo ITA 675 às 14h10 · pernoite a bordo",
    ],
  },
  {
    day: "Dia 2 — 14/10 (qua)",
    title: "Roma → Tirana → Krujë",
    points: [
      "Chegada Roma 06h50 · conexão ITA 0582 às 09h15",
      "Chegada Tirana 10h40 · traslado a Krujë",
      "Hospedagem · jantar incluído",
    ],
  },
  {
    day: "Dia 3 — 15/10 (qui)",
    title: "Krujë → Prizren",
    points: [
      "Cidadela do século XV, centro da resistência antiotomana",
      "Centro histórico de Prizren · Mesquita Sinan Pasha",
      "Ponte de Pedra · almoço e jantar incluídos",
    ],
  },
  {
    day: "Dia 4 — 16/10 (sex)",
    title: "Prizren → Dečani → Pristina → Skopje",
    points: [
      "Mosteiro de Visoki Dečani (UNESCO)",
      "Pristina · Biblioteca Nacional, Torre do Relógio · almoço",
      "Continuação a Skopje · jantar incluído",
    ],
  },
  {
    day: "Dia 5 — 17/10 (sáb)",
    title: "Skopje → Ohrid",
    points: [
      "Estátua de Alexandre, Casa Memorial de Madre Teresa",
      "Fortaleza Kale, Mesquita Mustafa Pasha e bazar otomano",
      "Almoço · seguimos a Ohrid · jantar incluído",
    ],
  },
  {
    day: "Dia 6 — 18/10 (dom)",
    title: "Ohrid · San Naum",
    points: [
      "Catedral Santa Sofia e Igreja de São Clemente",
      "Teatro romano · passeio de barco · almoço à beira do lago",
      "Mosteiro de São Naum e nascentes do Drin · jantar em Ohrid",
    ],
  },
  {
    day: "Dia 7 — 19/10 (seg)",
    title: "Ohrid → Berat",
    points: [
      "Travessia para a Albânia",
      "Centro histórico de Berat (UNESCO), bairros Mangalemi e Gorrica",
      "Cidadela e Museu Onufri · almoço e jantar",
    ],
  },
  {
    day: "Dia 8 — 20/10 (ter)",
    title: "Berat → Gjirokastër → Saranda",
    points: [
      "Gjirokastër (UNESCO) · cidadela e Casa Skenduli",
      "Almoço em Gjirokastër",
      "Continuação a Saranda · jantar incluído",
    ],
  },
  {
    day: "Dia 9 — 21/10 (qua)",
    title: "Saranda · Ksamil · Butrint",
    points: [
      "Sítio arqueológico de Butrint (UNESCO)",
      "Ksamil · almoço com frutos do mar do Mar Jônico",
      "Tarde livre em Saranda · jantar incluído",
    ],
  },
  {
    day: "Dia 10 — 22/10 (qui)",
    title: "Saranda → Llogara → Apolônia → Tirana",
    points: [
      "Riviera Albanesa cinematográfica",
      "Parque Nacional de Llogara · almoço típico com iogurte e mel silvestre",
      "Sítio de Apolônia · chegada Tirana · jantar",
    ],
  },
  {
    day: "Dia 11 — 23/10 (sex)",
    title: "Tirana · capital albanesa",
    points: [
      "Praça Skanderbeg, Bunker Atômico e Mesquita Et'hem Bey",
      "Mosaicos romanos do século III",
      "Almoço e jantar de despedida",
    ],
  },
  {
    day: "Dia 12 — 24/10 (sáb)",
    title: "Tirana → Roma → São Paulo",
    points: [
      "Voo ITA 507 às 05h35 a Roma · chegada 07h00",
      "Conexão ITA 678 às 09h35 a São Paulo",
    ],
  },
  {
    day: "Dia 13 — 25/10 (dom)",
    title: "São Paulo",
    points: [
      "Chegada prevista em Guarulhos às 16h55",
      "Fim dos nossos serviços",
    ],
  },
];

const included = [
  "Bilhete aéreo São Paulo / Roma / Tirana / Roma / São Paulo em classe econômica pela ITA Airways, com 1 mala de 23kg",
  "10 noites em hotéis de primeira categoria com café da manhã",
  "Guia acompanhante desde o Brasil",
  "Traslados e visitas com guias locais em português/espanhol",
  "Refeições conforme o roteiro (almoços e jantares indicados)",
  "Entradas: Cidadela de Krujë, Mosteiro de Dečani, Catedral Santa Sofia, passeio de barco em Ohrid, Mosteiro de São Naum, Berat, Gjirokastër, Butrint, Apolônia e Bunker Atômico",
  "Tag de rastreamento de bagagem",
  "Acesso à Sala VIP W Premium no aeroporto de Guarulhos",
  "Cartão de assistência GTA FLOT 75 com cobertura médica de US$ 75.000",
  "Seguro cancelamento Plus Reason até 85 anos: US$ 3.000",
];

const notIncluded = [
  "Taxas de embarque",
  "IOF",
  "Taxas de aeroporto e combustível (EUR 185)",
  "Bebidas nas refeições",
  "Gorjetas a guias, motoristas, garçons e carregadores de malas",
  "Despesas pessoais (frigobar, telefonemas, lavanderia, etc.)",
  "Documentação de viagem e vistos",
];

const faqs = [
  {
    q: "Qual a condição de pagamento?",
    a: "25% de entrada no ato da reserva e o saldo (75%) em 9 parcelas sem juros no cartão de crédito. Valores em euro, sujeitos a disponibilidade e confirmação aérea.",
  },
  {
    q: "Brasileiros precisam de visto?",
    a: "Não. Brasileiros não precisam de visto para Albânia, Kosovo e Macedônia do Norte para estadias turísticas. É obrigatório passaporte com validade mínima de 6 meses a partir da data de retorno. Exigência de Certificado Internacional de Vacinação contra Febre Amarela.",
  },
  {
    q: "Como é o clima em outubro nos Bálcãs?",
    a: "Outono dourado balcânico: temperaturas entre 10–20 °C, dias ensolarados, folhas em tons cobre e luz suave perfeita para fotografia. Recomendamos camadas, casaco leve, capa de chuva e calçado confortável para piso de pedra.",
  },
  {
    q: "Qual a base de hospedagem?",
    a: "Hotéis de primeira categoria: Krujë (Panorama ou Dior), Prizren (Prizren Classic), Skopje (Holiday Inn Skopje), Ohrid (Metropol), Berat (Colombo Berat), Saranda (Toer) e Tirana (Rogner Tirana).",
  },
  {
    q: "Qual o perfil do grupo?",
    a: "Grupo pequeno com guia acompanhante desde o Brasil. Casais, amigos e viajantes solo são muito bem-vindos. Trabalhamos com apartamento duplo (compartilhado) ou individual (com suplemento).",
  },
];

const hotelsForSeo = [{ city: "Krujë", hotel: "Panorama ou Dior" },
              { city: "Prizren", hotel: "Prizren Classic" },
              { city: "Skopje", hotel: "Holiday Inn Skopje" },
              { city: "Ohrid", hotel: "Metropol" },
              { city: "Berat", hotel: "Colombo Berat" },
              { city: "Saranda", hotel: "Toer" },
              { city: "Tirana", hotel: "Rogner Tirana" }];
const hotelsSeoJsonLd = buildHotelsJsonLd(hotelsForSeo, "Grupo Bálcãs Autênticos 2026 — Albânia, Kosovo e Macedônia do Norte — Create Travel", "/grupos/balcas-autenticos-2026");
const hotelsSeoFaqs = buildHotelsFAQs(hotelsForSeo, "Grupo Bálcãs Autênticos 2026 — Albânia, Kosovo e Macedônia do Norte — Create Travel", "/grupos/balcas-autenticos-2026");
const hotelsSeoKeywords = buildHotelsKeywords(hotelsForSeo);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Grupo Bálcãs Autênticos 2026 — Albânia, Kosovo e Macedônia do Norte — Create Travel",
  description:
    "Grupo organizado de 13 dias pelos Bálcãs autênticos: Krujë, Prizren, Dečani, Pristina, Skopje, Ohrid, Berat, Gjirokastër, Saranda, Butrint e Tirana. Saída 13/10/2026 pela ITA Airways com guia desde o Brasil.",
  image: heroImg,
  touristType: "Cultura, história, outono balcânico",
  itinerary: itinerary.map((d, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${d.day} — ${d.title}`,
  })),
  offers: {
    "@type": "Offer",
    price: "4759.00",
    priceCurrency: "EUR",
    availability: "https://schema.org/LimitedAvailability",
    validThrough: "2026-10-13",
  },
  provider: {
    "@type": "TravelAgency",
    name: "Create Travel",
    url: CONTACT.domain,
  },
};

const GrupoBalcasAutenticos2026 = () => {
  const ctaLink = generateWhatsAppLink(whatsappParams);

  return (
    <div className="min-h-screen">
      <SEO
        title="Grupo Bálcãs Autênticos 2026 · Albânia, Kosovo e Macedônia do Norte com guia do Brasil | Create Travel"
        description="13 dias pelos Bálcãs autênticos no outono 2026: Krujë, Prizren, Dečani, Skopje, Ohrid, Berat, Gjirokastër, Butrint e Tirana. Saída 13/10/2026 pela ITA Airways. Entrada 25% + 9x sem juros."
        canonicalPath="/grupos/balcas-autenticos-2026"
        ogImage={heroImg}
        ogType="article"
        jsonLd={[jsonLd, ...hotelsSeoJsonLd]}
        keywords={`viagem em grupo Bálcãs 2026, Albânia Kosovo Macedônia do Norte, Berat Gjirokastër, Ohrid Skopje, grupo Bálcãs com guia do Brasil, Create Travel ITA Airways, ${hotelsSeoKeywords}`}
      />
      <Header />
      <WhatsAppButton variant="float" params={whatsappParams} />

      {/* Hero */}
      <section className="relative h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Berat, Albânia — cidade das mil janelas com casas otomanas brancas, ponte de pedra e montanhas ao entardecer"
            className="w-full h-full object-cover"
            width={1600}
            height={900}
            fetchpriority="high"
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/90 text-navy text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles size={14} /> Outono 2026 · Saída confirmada
            </div>
            <p className="text-caption text-gold mb-4">
              Grupo · 13 a 25 de outubro de 2026
            </p>
            <h1 className="heading-hero text-white mb-6">
              Bálcãs Autênticos
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
              13 dias entre fortalezas, mosteiros e lagos: Albânia, Kosovo e
              Macedônia do Norte no auge do outono — com guia do Brasil e voos
              ITA Airways.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <WhatsAppButton
                variant="cta"
                label="Garantir minha vaga"
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
            { icon: Calendar, label: "Datas", value: "13 a 25/10/2026" },
            { icon: Users, label: "Perfil", value: "Grupo com guia do Brasil" },
            { icon: Plane, label: "Voos", value: "ITA Airways" },
            { icon: Hotel, label: "Estilo", value: "Outono balcânico" },
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
              Três países, uma mesma alma balcânica
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
            <h2 className="heading-section mb-6">Voos ITA Airways</h2>
            <p className="text-white/85 leading-relaxed mb-4">
              A companhia aérea nacional da Itália, fundada em 2021, com frota
              moderna e serviço centrado na experiência do cliente. Excelente
              conexão entre o Brasil e os Bálcãs via Roma-Fiumicino.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Ida
              </p>
              <p className="font-serif text-lg">GRU → Roma → Tirana</p>
              <p className="text-white/75 text-sm mt-1">
                13/10 ITA 675 às 14h10 + 14/10 ITA 0582 às 09h15 · chegada TIA 10h40
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Volta
              </p>
              <p className="font-serif text-lg">Tirana → Roma → GRU</p>
              <p className="text-white/75 text-sm mt-1">
                24/10 ITA 507 às 05h35 + ITA 678 às 09h35 · chegada GRU 25/10 16h55
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
              13 dias — dia a dia
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
              Hospedagens cuidadosamente selecionadas
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {[
              { city: "Krujë", hotel: "Panorama ou Dior" },
              { city: "Prizren", hotel: "Prizren Classic" },
              { city: "Skopje", hotel: "Holiday Inn Skopje" },
              { city: "Ohrid", hotel: "Metropol" },
              { city: "Berat", hotel: "Colombo Berat" },
              { city: "Saranda", hotel: "Toer" },
              { city: "Tirana", hotel: "Rogner Tirana" },
            ].map((h) => (
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
            A partir de € 4.759 por pessoa
          </h2>
          <p className="text-white/85 mb-8">
            Em acomodação dupla. Valores em euro, por pessoa, acrescidos de IOF
            e taxas de aeroporto e combustível (EUR 185). Sujeitos a
            disponibilidade e confirmação aérea no momento da reserva.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto triplo
              </p>
              <p className="font-serif text-2xl font-semibold">€ 4.738</p>
              <p className="text-white/70 text-xs mt-1">+ IOF EUR 114</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6 ring-2 ring-gold/60">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto duplo
              </p>
              <p className="font-serif text-2xl font-semibold">€ 4.759</p>
              <p className="text-white/70 text-xs mt-1">+ IOF EUR 115</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto individual
              </p>
              <p className="font-serif text-2xl font-semibold">€ 5.259</p>
              <p className="text-white/70 text-xs mt-1">+ IOF EUR 131</p>
            </div>
          </div>

          <div className="bg-card/95 text-foreground rounded-xl p-8 mb-8 text-left">
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
                  9x sem juros
                </p>
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
          <FAQSection faqs={[...faqs, ...hotelsSeoFaqs]} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding">
        <div className="container-editorial text-center max-w-2xl">
          <h2 className="heading-section text-foreground mb-6">
            Vagas limitadas — Bálcãs no outono
          </h2>
          <p className="text-muted-foreground mb-8">
            Fale com um consultor Create Travel e reserve sua vaga na saída de
            13/10/2026. Atendimento personalizado pelo WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-lg px-8 py-4"
            >
              Falar no WhatsApp
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

export default GrupoBalcasAutenticos2026;
