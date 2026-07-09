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
import heroImg from "@/assets/grupo-croacia-balcas-2026.jpg";
import { getHotelUrl, buildHotelsJsonLd, buildHotelsFAQs, buildHotelsKeywords } from "@/lib/groupHotels";

const whatsappParams = {
  type: "Roteiro" as const,
  name: "Grupo Croácia, Bósnia & Montenegro 2026 (saída 11/10/2026)",
};

const benefits = [
  {
    title: "Outono dourado nos Bálcãs",
    desc: "A melhor estação para percorrer a região: clima ameno, florestas em tons de cobre e cidades sem aglomeração turística.",
  },
  {
    title: "Guia acompanhante desde o Brasil",
    desc: "Embarque em Guarulhos com a equipe Create Travel e siga acompanhado em português do início ao fim da viagem.",
  },
  {
    title: "Voos Turkish Airlines via Istambul",
    desc: "Companhia premiada, refeições reconhecidas mundialmente e conexão prática em um dos aeroportos mais modernos do mundo.",
  },
  {
    title: "Lagos de Plitvice & Adriático",
    desc: "Patrimônio Mundial da UNESCO, dezesseis lagos em socalcos, cachoeiras e o litoral mais cinematográfico da Europa.",
  },
  {
    title: "Dubrovnik, Hvar e o Palácio de Diocleciano",
    desc: "Muralhas medievais, ilhas mediterrâneas e o legado romano de Split — cada parada é um capítulo de história viva.",
  },
  {
    title: "Medjugorje, Mostar e Baía de Kotor",
    desc: "Espiritualidade na Bósnia, a Ponte Velha de Mostar e o único fiorde do Mediterrâneo, em Montenegro.",
  },
];

const itinerary = [
  {
    day: "Dia 1 — 11/10 (dom)",
    title: "São Paulo → Istambul",
    points: [
      "Apresentação no Aeroporto de Guarulhos",
      "Encontro com o guia acompanhante",
      "Embarque no voo Turkish 216 às 16h35 · pernoite a bordo",
    ],
  },
  {
    day: "Dia 2 — 12/10 (seg)",
    title: "Istambul → Zagreb",
    points: [
      "Chegada em Istambul às 11h15 e conexão",
      "Voo Turkish para Zagreb às 18h20 · chegada 19h30",
      "Traslado e hospedagem no Sheraton Zagreb",
    ],
  },
  {
    day: "Dia 3 — 13/10 (ter)",
    title: "Zagreb",
    points: [
      "Cidade Alta, Igreja de São Marcos e Santa Catarina",
      "Catedral, Parlamento e Palácio do Governo",
      "Tarde livre",
    ],
  },
  {
    day: "Dia 4 — 14/10 (qua)",
    title: "Zagreb → Plitvice → Zadar",
    points: [
      "Parque Nacional dos Lagos de Plitvice (UNESCO)",
      "Passeio a pé pelos lagos mais baixos",
      "Almoço incluído · seguimos para Zadar",
      "Hospedagem no Kolovare",
    ],
  },
  {
    day: "Dia 5 — 15/10 (qui)",
    title: "Zadar → Split",
    points: [
      "Órgão do Mar, Igreja de São Donato e Fórum Romano",
      "Catedral de Santa Anastásia · tempo livre",
      "Split: Palácio de Diocleciano (UNESCO), Templo de Júpiter",
      "Hospedagem no Radisson Blu Resort",
    ],
  },
  {
    day: "Dia 6 — 16/10 (sex)",
    title: "Split → Hvar → Split",
    points: [
      "Dia inteiro na ilha de Hvar",
      "Praça Trg Svetog Stjepana e Catedral",
      "Retorno a Split em horário a combinar",
    ],
  },
  {
    day: "Dia 7 — 17/10 (sáb)",
    title: "Split → Medjugorje → Mostar",
    points: [
      "Medjugorje, importante centro de peregrinação mariana",
      "Tempo livre para almoço",
      "Mostar: Ponte Antiga (Stari Most) e Rio Neretva",
      "Hospedagem no City Hotel",
    ],
  },
  {
    day: "Dia 8 — 18/10 (dom)",
    title: "Mostar → Dubrovnik",
    points: [
      "Centro antigo amuralhado de Dubrovnik (UNESCO)",
      "Catedral da Assunção e Monastério Franciscano",
      "Hospedagem no hotel Lero",
    ],
  },
  {
    day: "Dia 9 — 19/10 (seg)",
    title: "Dubrovnik → Kotor → Dubrovnik",
    points: [
      "Excursão à República de Montenegro",
      "Golfo Boka Kotorska — único fiorde do Mediterrâneo",
      "Baía de Kotor (UNESCO) · retorno a Dubrovnik",
    ],
  },
  {
    day: "Dia 10 — 20/10 (ter)",
    title: "Dubrovnik",
    points: [
      "Dia livre · sugestão de praia ou muralhas medievais",
      "Hospedagem",
    ],
  },
  {
    day: "Dia 11 — 21/10 (qua)",
    title: "Dubrovnik → Istambul → São Paulo",
    points: [
      "Traslado ao aeroporto",
      "Voo Turkish 438 às 09h15 — chegada Istambul 12h10",
      "Conexão para Turkish 215 às 20h15 com destino a Guarulhos",
    ],
  },
  {
    day: "Dia 12 — 22/10 (qui)",
    title: "São Paulo",
    points: [
      "Chegada prevista às 03h30",
      "Fim dos nossos serviços",
    ],
  },
];

const included = [
  "Bilhete aéreo São Paulo / Istambul / Zagreb // Dubrovnik / Istambul / São Paulo (Turkish Airlines), classe econômica, com 1 mala de 23 kg",
  "Hotéis de primeira categoria com café da manhã",
  "Guia acompanhante desde o Brasil",
  "Traslados com assistência em português/espanhol em Zagreb e Dubrovnik",
  "Visitas com guia local em português/espanhol em Zagreb, Zadar, Split e Dubrovnik",
  "Entradas: Parque de Plitvice, Palácio de Diocleciano, Catedral de Mostar e Monastério Franciscano",
  "1 almoço (sem bebidas)",
  "Tag de rastreio de bagagem",
  "Acesso à Sala VIP W Premium no aeroporto de Guarulhos",
  "Cartão de assistência GTA FLOT 75 com cobertura de US$ 75.000",
  "Seguro cancelamento para passageiros até 85 anos: US$ 3.000",
];

const notIncluded = [
  "Taxas de embarque",
  "IOF",
  "Taxas de aeroporto e combustível (EUR 595)",
  "Bebidas nas refeições",
  "Gorjetas a guias, motoristas, garçons e carregadores de malas",
  "Despesas pessoais (frigobar, telefonemas, lavanderia, etc.)",
  "Taxas, impostos e afins",
];

const faqs = [
  {
    q: "Qual a condição de pagamento?",
    a: "25% de entrada no ato da reserva e o saldo (75%) em 9 parcelas sem juros no cartão de crédito. Valores em euro, sujeitos a disponibilidade e confirmação aérea.",
  },
  {
    q: "Por que viajar pelos Bálcãs no outono?",
    a: "Em outubro, a região vive o chamado outono dourado: clima ameno, sem o calor do verão, florestas em tons de cobre e vermelho, mar ainda agradável e cidades mais tranquilas — o melhor momento para experiências autênticas em Plitvice, Hvar e Dubrovnik.",
  },
  {
    q: "Quais documentos e vacinas são necessários?",
    a: "Passaporte com validade mínima de 6 meses a partir da data de retorno. Brasileiros não precisam de visto para Croácia, Bósnia-Herzegovina e Montenegro. Recomenda-se carteira de vacinação internacional atualizada.",
  },
  {
    q: "Como é o ritmo da viagem?",
    a: "É uma viagem cultural com deslocamentos rodoviários entre cidades históricas. As atividades incluem caminhadas leves em centros amuralhados, parques e palácios. Recomendamos calçado confortável e roupas em camadas para o outono europeu.",
  },
  {
    q: "Posso viajar sozinho(a)? Tem suplemento single?",
    a: "Sim. Trabalhamos com apartamento duplo, triplo ou individual. Podemos emparelhar você com outra pessoa do grupo do mesmo gênero, evitando o suplemento single.",
  },
  {
    q: "Qual o tamanho do grupo?",
    a: "Grupo organizado pela Create Travel com guia acompanhante desde São Paulo. Vagas limitadas — recomenda-se reserva antecipada.",
  },
];

const hotelsForSeo = [{ city: "Zagreb", hotel: "Sheraton Zagreb" },
              { city: "Zadar", hotel: "Kolovare" },
              { city: "Split", hotel: "Radisson Blu Resort" },
              { city: "Mostar", hotel: "City Hotel" },
              { city: "Dubrovnik", hotel: "Lero" }];
const hotelsSeoJsonLd = buildHotelsJsonLd(hotelsForSeo, "Grupo Croácia, Bósnia & Montenegro 2026 — Create Travel", "/grupos/croacia-balcas-2026");
const hotelsSeoFaqs = buildHotelsFAQs(hotelsForSeo, "Grupo Croácia, Bósnia & Montenegro 2026 — Create Travel", "/grupos/croacia-balcas-2026");
const hotelsSeoKeywords = buildHotelsKeywords(hotelsForSeo);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Grupo Croácia, Bósnia & Montenegro 2026 — Create Travel",
  description:
    "Grupo organizado de 12 dias pela Croácia, Bósnia-Herzegovina e Montenegro: Zagreb, Plitvice, Zadar, Split, Hvar, Mostar, Dubrovnik e Baía de Kotor. Saída 11/10/2026 com guia acompanhante desde o Brasil e voos Turkish Airlines.",
  image: heroImg,
  touristType: "Cultura, história, natureza, espiritualidade",
  itinerary: itinerary.map((d, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${d.day} — ${d.title}`,
  })),
  offers: {
    "@type": "Offer",
    price: "4338.00",
    priceCurrency: "EUR",
    availability: "https://schema.org/LimitedAvailability",
    validThrough: "2026-10-11",
  },
  provider: {
    "@type": "TravelAgency",
    name: "Create Travel",
    url: CONTACT.domain,
  },
};

const GrupoCroaciaBalcas2026 = () => {
  const ctaLink = generateWhatsAppLink(whatsappParams);

  return (
    <div className="min-h-screen">
      <SEO
        title="Grupo Croácia, Bósnia & Montenegro 2026 — Outono nos Bálcãs | Create Travel"
        description="12 dias pelos Bálcãs em grupo com guia do Brasil: Zagreb, Plitvice, Zadar, Split, Hvar, Mostar, Dubrovnik e Baía de Kotor. Saída 11/10/2026 pela Turkish Airlines. Entrada 25% + 9x sem juros."
        canonicalPath="/grupos/croacia-balcas-2026"
        ogImage={heroImg}
        ogType="article"
        jsonLd={[jsonLd, ...hotelsSeoJsonLd]}
        keywords={`viagem em grupo Croácia 2026, Bálcãs com guia do Brasil, Plitvice Dubrovnik Kotor, Mostar Medjugorje, Bósnia Montenegro grupo, Create Travel Croácia, outono nos Bálcãs, ${hotelsSeoKeywords}`}
      />
      <Header />
      <WhatsAppButton variant="float" params={whatsappParams} />

      {/* Hero */}
      <section className="relative h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Muralhas medievais de Dubrovnik ao pôr do sol, com o mar Adriático e telhados de terracota, Croácia"
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/90 text-navy text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles size={14} /> Saída confirmada · Vagas limitadas
            </div>
            <p className="text-caption text-gold mb-4">
              Grupo · 11 a 22 de outubro de 2026
            </p>
            <h1 className="heading-hero text-white mb-6">
              Croácia, Bósnia & Montenegro
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
              12 dias de outono dourado nos Bálcãs: Plitvice, Adriático, Hvar e
              Dubrovnik, com Medjugorje, Mostar e a Baía de Kotor.
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
            { icon: Calendar, label: "Datas", value: "11 a 22/10/2026" },
            { icon: Users, label: "Perfil", value: "Grupo com guia do Brasil" },
            { icon: Plane, label: "Voos", value: "Turkish · via Istambul" },
            { icon: Hotel, label: "Hospedagem", value: "Hotéis 1ª categoria" },
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
              Os Bálcãs em uma de suas estações mais bonitas
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
            <h2 className="heading-section mb-6">
              Voos pela Turkish Airlines
            </h2>
            <p className="text-white/85 leading-relaxed mb-4">
              Classe econômica com 1 bagagem despachada de até 23 kg por pessoa
              no trecho internacional. Refeições premiadas, conforto a bordo e
              conexão em um dos aeroportos mais modernos do mundo.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Ida
              </p>
              <p className="font-serif text-lg">
                GRU → Istambul → Zagreb
              </p>
              <p className="text-white/75 text-sm mt-1">
                11/10 TK 216 16h35 · 12/10 TK Istambul → Zagreb 18h20 — chegada
                19h30
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Volta
              </p>
              <p className="font-serif text-lg">
                Dubrovnik → Istambul → GRU
              </p>
              <p className="text-white/75 text-sm mt-1">
                21/10 TK 438 09h15 · TK 215 20h15 — chegada GRU 22/10 às 03h30
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
              12 dias — dia a dia
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              { city: "Zagreb", hotel: "Sheraton Zagreb" },
              { city: "Zadar", hotel: "Kolovare" },
              { city: "Split", hotel: "Radisson Blu Resort" },
              { city: "Mostar", hotel: "City Hotel" },
              { city: "Dubrovnik", hotel: "Lero" },
            ].map((h) => (
              <div
                key={h.city}
                className="bg-card border border-border rounded-xl p-6 text-center shadow-card"
              >
                <Hotel className="text-gold mx-auto mb-3" size={22} />
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                  {h.city}
                </p>
                <p className="font-serif text-lg font-semibold text-foreground">
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
            A partir de € 4.338 por pessoa
          </h2>
          <p className="text-white/85 mb-8">
            Em acomodação dupla. Valores em euro, por pessoa, acrescidos de IOF
            e taxas de aeroporto e combustível (EUR 595). Sujeitos a
            disponibilidade e confirmação aérea no momento da reserva.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto triplo
              </p>
              <p className="font-serif text-2xl font-semibold">€ 4.298</p>
              <p className="text-white/70 text-xs mt-1">+ IOF EUR 113</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6 ring-2 ring-gold/60">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto duplo
              </p>
              <p className="font-serif text-2xl font-semibold">€ 4.338</p>
              <p className="text-white/70 text-xs mt-1">+ IOF EUR 114</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto individual
              </p>
              <p className="font-serif text-2xl font-semibold">€ 5.145</p>
              <p className="text-white/70 text-xs mt-1">+ IOF EUR 139</p>
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
            Vagas limitadas — grupo com guia do Brasil
          </h2>
          <p className="text-muted-foreground mb-8">
            Fale com um consultor Create Travel e reserve sua vaga no Grupo
            Croácia, Bósnia & Montenegro 2026. Atendimento personalizado pelo
            WhatsApp.
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

export default GrupoCroaciaBalcas2026;
