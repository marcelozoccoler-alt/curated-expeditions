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
import heroImg from "@/assets/grupo-portugal-aldeias-2026.jpg";
import { getHotelUrl, buildHotelsJsonLd, buildHotelsFAQs, buildHotelsKeywords } from "@/lib/groupHotels";

const whatsappParams = {
  type: "Roteiro" as const,
  name: "Grupo Portugal com Aldeias Históricas · Outono 2026 (saída 12/10/2026)",
};

const benefits = [
  {
    title: "Procissão das Velas em Fátima",
    desc: "Participe das celebrações do dia 13 de outubro no Santuário de Fátima — uma das experiências espirituais mais emocionantes do mundo católico.",
  },
  {
    title: "12 Aldeias Históricas",
    desc: "Piódão, Idanha-a-Velha, Marvão, Monsanto, Belmonte, Sortelha, Almeida, Castelo Rodrigo, Trancoso e Linhares da Beira — tesouro medieval de Portugal.",
  },
  {
    title: "Monsanto e Marvão suspensas",
    desc: "Casas entre rochas gigantes em Monsanto, 'a aldeia mais portuguesa', e Marvão a 860m suspensa sobre o Alentejo.",
  },
  {
    title: "Almeida estrela de 12 pontas",
    desc: "A impressionante fortaleza em forma de estrela — uma das mais sofisticadas obras de engenharia militar da Península Ibérica.",
  },
  {
    title: "Coimbra e Belém",
    desc: "A universidade mais antiga do país, a região vitivinícola da Bairrada e o bairro monumental de Belém com Mosteiro dos Jerónimos.",
  },
  {
    title: "Vinhos do Dão e gastronomia",
    desc: "Degustação em vinícola da região de Viseu, terra do vinho do Dão, e sabores autênticos das aldeias do interior.",
  },
];

const itinerary = [
  {
    day: "Dia 1 — 12/10 (seg)",
    title: "São Paulo → Lisboa",
    points: [
      "Apresentação em Guarulhos",
      "Voo TAP 88 às 20h45 · pernoite a bordo",
    ],
  },
  {
    day: "Dia 2 — 13/10 (ter)",
    title: "Lisboa → Fátima",
    points: [
      "Chegada Lisboa 10h35 · traslado a Fátima",
      "Santuário do Rosário de Fátima",
      "Procissão das Velas · jantar no hotel",
    ],
  },
  {
    day: "Dia 3 — 14/10 (qua)",
    title: "Fátima → Piódão → Idanha-a-Velha → Castelo Branco",
    points: [
      "Piódão, a 'aldeia presépio' de xisto azul",
      "Idanha-a-Velha romana · Sé Catedral e muralhas",
      "Chegada a Castelo Branco · Meliá",
    ],
  },
  {
    day: "Dia 4 — 15/10 (qui)",
    title: "Marvão e Monsanto",
    points: [
      "Marvão · muralhas a 860m com vista até Espanha",
      "Tempo livre para almoço",
      "Monsanto · casas entre rochas e Castelo Templário",
    ],
  },
  {
    day: "Dia 5 — 16/10 (sex)",
    title: "Castelo Branco → Belmonte → Sortelha → Covilhã",
    points: [
      "Belmonte · terra de Pedro Álvares Cabral e Museu Judaico",
      "Sortelha medieval intacta · castelo do séc. XIII",
      "Covilhã, a 'Manchester portuguesa' · Puralã Wool Valley",
    ],
  },
  {
    day: "Dia 6 — 17/10 (sáb)",
    title: "Covilhã → Almeida → Castelo Rodrigo → Guarda",
    points: [
      "Almeida · fortaleza estrela de 12 pontas",
      "Castelo Rodrigo · rota de peregrinos a Santiago",
      "Guarda, cidade mais alta de Portugal (1.056m)",
    ],
  },
  {
    day: "Dia 7 — 18/10 (dom)",
    title: "Guarda · Trancoso",
    points: [
      "Trancoso medieval · vielas e judiarias",
      "Batalha de S. Marcos (1355)",
      "Retorno a Guarda · hospedagem",
    ],
  },
  {
    day: "Dia 8 — 19/10 (seg)",
    title: "Guarda → Linhares da Beira → Viseu",
    points: [
      "Linhares da Beira · castelo sobre o vale do Mondego",
      "Viseu · estátua de Viriato e centro histórico",
      "Prova de vinhos do Dão em vinícola da região",
    ],
  },
  {
    day: "Dia 9 — 20/10 (ter)",
    title: "Viseu → Coimbra → Lisboa",
    points: [
      "Travessia da região vitivinícola da Bairrada",
      "Universidade de Coimbra e Quebra-Costas",
      "Chegada a Lisboa · VIP Artes",
    ],
  },
  {
    day: "Dia 10 — 21/10 (qua)",
    title: "Lisboa · capital portuguesa",
    points: [
      "Bairro de Belém · Mosteiro dos Jerónimos (entrada incluída)",
      "Padrão dos Descobrimentos, Torre de Belém e pastéis de Belém",
      "Avenida da Liberdade e Marquês de Pombal",
    ],
  },
  {
    day: "Dia 11 — 22/10 (qui)",
    title: "Lisboa → São Paulo",
    points: [
      "Traslado ao aeroporto",
      "Voo TAP 89 às 13h00 · chegada GRU 19h15",
      "Fim dos nossos serviços",
    ],
  },
];

const included = [
  "Bilhete aéreo São Paulo / Lisboa / São Paulo em classe econômica pela TAP Air Portugal, com 1 mala de 23kg",
  "9 noites em hotéis de primeira categoria com café da manhã",
  "Coordenador brasileiro acompanhante desde São Paulo",
  "Guia local em português durante todo o roteiro em Portugal",
  "Traslados e visitas conforme o programa",
  "Jantar de chegada em Fátima",
  "Entradas: Sé Catedral de Idanha-a-Velha, Museu Judaico de Belmonte, Castelos de Marvão e Monsanto, claustro do Mosteiro dos Jerónimos",
  "Prova de vinhos em vinícola da região do Dão",
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
  "Almoços e jantares não mencionados no roteiro",
  "Gorjetas a guias, motoristas, garçons e carregadores de malas",
  "Despesas pessoais (frigobar, telefonemas, lavanderia, etc.)",
  "Documentação de viagem",
];

const faqs = [
  {
    q: "Qual a condição de pagamento?",
    a: "25% de entrada no ato da reserva e o saldo (75%) em 9 parcelas sem juros no cartão de crédito. Valores em euro, sujeitos a disponibilidade e confirmação aérea.",
  },
  {
    q: "Brasileiros precisam de visto?",
    a: "Não. Brasileiros não precisam de visto para Portugal (espaço Schengen) para estadias turísticas de até 90 dias. É obrigatório passaporte com validade mínima de 6 meses a partir da data de retorno.",
  },
  {
    q: "Como é o clima em outubro em Portugal?",
    a: "Outono ameno: temperaturas entre 10–22 °C, paisagens em tons dourados e avermelhados, menos turistas. No interior e na Serra da Estrela pode esfriar à noite — recomendamos casaco, capa de chuva leve e calçado confortável para piso de pedra.",
  },
  {
    q: "Vou conseguir participar da Procissão das Velas?",
    a: "Sim. A chegada a Fátima está programada para 13 de outubro, data que encerra o ciclo das grandes peregrinações. A procissão de velas é uma das experiências espirituais mais emocionantes da viagem, com milhares de peregrinos de todo o mundo.",
  },
  {
    q: "Qual a base de hospedagem?",
    a: "Hotéis de primeira categoria: Estrela de Fátima, Meliá Castelo Branco, Puralã Wool Valley (Covilhã), Versatile (Guarda), Grão Vasco (Viseu) e VIP Artes (Lisboa).",
  },
];

const hotelsForSeo = [{ city: "Fátima", hotel: "Estrela de Fátima" },
              { city: "Castelo Branco", hotel: "Meliá Castelo Branco" },
              { city: "Covilhã", hotel: "Puralã – Wool Valley" },
              { city: "Guarda", hotel: "Versatile" },
              { city: "Viseu", hotel: "Grão Vasco" },
              { city: "Lisboa", hotel: "VIP Artes" }];
const hotelsSeoJsonLd = buildHotelsJsonLd(hotelsForSeo, "Grupo Portugal com Aldeias Históricas 2026 — Outono — Create Travel", "/grupos/portugal-aldeias-historicas-2026");
const hotelsSeoFaqs = buildHotelsFAQs(hotelsForSeo, "Grupo Portugal com Aldeias Históricas 2026 — Outono — Create Travel", "/grupos/portugal-aldeias-historicas-2026");
const hotelsSeoKeywords = buildHotelsKeywords(hotelsForSeo);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Grupo Portugal com Aldeias Históricas 2026 — Outono — Create Travel",
  description:
    "Grupo organizado de 11 dias por Portugal: Fátima, Piódão, Marvão, Monsanto, Belmonte, Sortelha, Almeida, Guarda, Trancoso, Viseu, Coimbra e Lisboa. Saída 12/10/2026 pela TAP Air Portugal com guia desde o Brasil.",
  image: heroImg,
  touristType: "Cultura, história, aldeias históricas, outono europeu",
  itinerary: itinerary.map((d, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${d.day} — ${d.title}`,
  })),
  offers: {
    "@type": "Offer",
    price: "4149.00",
    priceCurrency: "EUR",
    availability: "https://schema.org/LimitedAvailability",
    validThrough: "2026-10-12",
  },
  provider: {
    "@type": "TravelAgency",
    name: "Create Travel",
    url: CONTACT.domain,
  },
};

const GrupoPortugalAldeias2026 = () => {
  const ctaLink = generateWhatsAppLink(whatsappParams);

  return (
    <div className="min-h-screen">
      <SEO
        title="Grupo Portugal com Aldeias Históricas 2026 · Outono com guia do Brasil | Create Travel"
        description="11 dias pelo Portugal autêntico no outono 2026: Procissão das Velas em Fátima, 12 Aldeias Históricas, Coimbra e Lisboa. Saída 12/10/2026 pela TAP. Entrada 25% + 9x sem juros."
        canonicalPath="/grupos/portugal-aldeias-historicas-2026"
        ogImage={heroImg}
        ogType="article"
        jsonLd={[jsonLd, ...hotelsSeoJsonLd]}
        keywords={`viagem em grupo Portugal 2026, Aldeias Históricas de Portugal, Fátima 13 de outubro, Monsanto Marvão, grupo Portugal com guia do Brasil, Create Travel TAP, ${hotelsSeoKeywords}`}
      />
      <Header />
      <WhatsAppButton variant="float" params={whatsappParams} />

      {/* Hero */}
      <section className="relative h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Aldeia histórica de Monsanto em Portugal — casas de granito entre rochas gigantes e castelo medieval no outono"
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
              <Sparkles size={14} /> Outono 2026 · Saída confirmada
            </div>
            <p className="text-caption text-gold mb-4">
              Grupo · 12 a 22 de outubro de 2026
            </p>
            <h1 className="heading-hero text-white mb-6">
              Portugal com Aldeias Históricas
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
              11 dias pelo Portugal profundo no outono: Procissão das Velas em
              Fátima, 12 Aldeias Históricas medievais, Coimbra e Lisboa — com
              guia do Brasil e voos TAP.
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
            { icon: Calendar, label: "Datas", value: "12 a 22/10/2026" },
            { icon: Users, label: "Perfil", value: "Grupo com guia do Brasil" },
            { icon: Plane, label: "Voos", value: "TAP Air Portugal" },
            { icon: Hotel, label: "Estilo", value: "Outono português" },
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
              Um Portugal profundo, histórico e autêntico
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
            <h2 className="heading-section mb-6">Voos TAP Air Portugal</h2>
            <p className="text-white/85 leading-relaxed mb-4">
              Companhia membro da Star Alliance, a maior rede aérea do mundo,
              com conexões práticas via Lisboa, serviço de bordo premiado e o
              tradicional acolhimento português que torna cada voo parte
              especial da viagem.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Ida
              </p>
              <p className="font-serif text-lg">GRU → Lisboa</p>
              <p className="text-white/75 text-sm mt-1">
                12/10 TAP 88 às 20h45 · chegada LIS 13/10 às 10h35
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Volta
              </p>
              <p className="font-serif text-lg">Lisboa → GRU</p>
              <p className="text-white/75 text-sm mt-1">
                22/10 TAP 89 às 13h00 · chegada GRU 19h15
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
              11 dias — dia a dia
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {[
              { city: "Fátima", hotel: "Estrela de Fátima" },
              { city: "Castelo Branco", hotel: "Meliá Castelo Branco" },
              { city: "Covilhã", hotel: "Puralã – Wool Valley" },
              { city: "Guarda", hotel: "Versatile" },
              { city: "Viseu", hotel: "Grão Vasco" },
              { city: "Lisboa", hotel: "VIP Artes" },
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
            A partir de € 4.149 por pessoa
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
              <p className="font-serif text-2xl font-semibold">€ 4.120</p>
              <p className="text-white/70 text-xs mt-1">+ IOF EUR 101</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6 ring-2 ring-gold/60">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto duplo
              </p>
              <p className="font-serif text-2xl font-semibold">€ 4.149</p>
              <p className="text-white/70 text-xs mt-1">+ IOF EUR 102</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto individual
              </p>
              <p className="font-serif text-2xl font-semibold">€ 4.735</p>
              <p className="text-white/70 text-xs mt-1">+ IOF EUR 121</p>
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
            Vagas limitadas — Portugal no outono
          </h2>
          <p className="text-muted-foreground mb-8">
            Fale com um consultor Create Travel e reserve sua vaga na saída de
            12/10/2026. Atendimento personalizado pelo WhatsApp.
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

export default GrupoPortugalAldeias2026;
