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
import heroImg from "@/assets/grupo-colombia-2026.jpg";

const whatsappParams = {
  type: "Roteiro" as const,
  name: "Grupo Colômbia 2026 (saída 13/10/2026)",
};

const benefits = [
  {
    title: "Bogotá em altitude",
    desc: "Cerro Monserrate, Museu do Ouro e Museu Botero — a alma ancestral e contemporânea da capital colombiana.",
  },
  {
    title: "Catedral de Sal de Zipaquirá",
    desc: "Uma das maravilhas turísticas da Colômbia, esculpida a 180 metros de profundidade dentro de uma mina de sal.",
  },
  {
    title: "Villa de Leyva colonial",
    desc: "Ruas de pedra, casas brancas e a imensa Plaza Mayor — uma das cidades coloniais mais bem preservadas da América Latina.",
  },
  {
    title: "Cartagena das Índias",
    desc: "Cidade Amuralhada, Forte de San Felipe, bairro de Manga e o universo de Gabriel García Márquez à beira do Caribe.",
  },
  {
    title: "Chiva Rumbera",
    desc: "Passeio noturno em ônibus colorido com música crossover, cumbia, salsa e champeta — a alegria viva de Cartagena.",
  },
  {
    title: "Guia desde o Brasil",
    desc: "Coordenador Create Travel embarcando em Guarulhos e guias locais em português pela Colômbia inteira.",
  },
];

const itinerary = [
  {
    day: "Dia 1 — 13/10 (ter)",
    title: "São Paulo → Bogotá",
    points: [
      "Voo LATAM 4904 às 08h15 · chegada Bogotá 12h25",
      "Recepção e traslado ao Hotel Wyndham",
      "Caminhada pelo Parque de la 93 e Zona Rosa",
    ],
  },
  {
    day: "Dia 2 — 14/10 (qua)",
    title: "Bogotá histórica",
    points: [
      "Cerro Monserrate · vista panorâmica a 3.152 m",
      "Museu do Ouro e centro histórico de La Candelaria",
      "Almoço típico · Plaza de Bolívar e Museu Botero",
    ],
  },
  {
    day: "Dia 3 — 15/10 (qui)",
    title: "Bogotá → Zipaquirá → Villa de Leyva",
    points: [
      "Catedral de Sal de Zipaquirá",
      "Almoço típico regional",
      "Viagem cênica até Villa de Leyva · Hotel Campanário",
    ],
  },
  {
    day: "Dia 4 — 16/10 (sex)",
    title: "Villa de Leyva colonial",
    points: [
      "Plaza Mayor e Parque Antonio Nariño",
      "Museu do Chocolate",
      "Almoço típico em restaurante local",
    ],
  },
  {
    day: "Dia 5 — 17/10 (sáb)",
    title: "Villa de Leyva → Ráquira → Cartagena",
    points: [
      "Vila artesanal de Ráquira (cerâmica colombiana)",
      "Almoço típico · retorno a Bogotá",
      "Voo LATAM 4120 às 19h50 · Hotel Dann Cartagena",
    ],
  },
  {
    day: "Dia 6 — 18/10 (dom)",
    title: "Cartagena · cidade amuralhada",
    points: [
      "Bairro de Manga e Forte de San Felipe de Barajas",
      "Caminhada pelo centro histórico colonial",
      "Almoço típico em restaurante tradicional",
    ],
  },
  {
    day: "Dia 7 — 19/10 (seg)",
    title: "Cartagena · Chiva Rumbera",
    points: [
      "Dia livre · praias e Cidade Amuralhada",
      "À noite: passeio em Chiva Rumbera (cumbia, salsa e champeta)",
      "Paradas no Monumento dos Sapatos Velhos e letras de Cartagena",
    ],
  },
  {
    day: "Dia 8 — 20/10 (ter)",
    title: "Cartagena · dia livre",
    points: [
      "Dia livre para praia e exploração",
      "Opcional: Ilhas del Rosario · Isla Majagua",
      "Hospedagem em Cartagena",
    ],
  },
  {
    day: "Dia 9 — 21/10 (qua)",
    title: "Cartagena → São Paulo",
    points: [
      "Voo LATAM 4127 às 14h55 a Bogotá",
      "Conexão LATAM 4903 às 21h10 · pernoite a bordo",
    ],
  },
  {
    day: "Dia 10 — 22/10 (qui)",
    title: "São Paulo",
    points: [
      "Chegada em Guarulhos às 05h30",
      "Fim dos nossos serviços",
    ],
  },
];

const included = [
  "Bilhete aéreo São Paulo / Bogotá / Cartagena / São Paulo em classe econômica pela LATAM, com 1 mala de 23kg",
  "Hotéis de primeira categoria com café da manhã",
  "Guia acompanhante desde o Brasil",
  "Traslados com assistência em português/espanhol em Bogotá, Villa de Leyva e Cartagena",
  "Visitas com guia local em português/espanhol conforme o roteiro",
  "Entradas: Cerro Monserrate, Museu do Ouro, Museu Botero, Catedral de Sal e Forte de San Felipe",
  "5 almoços (sem bebidas)",
  "Passeio noturno em Chiva Rumbera em Cartagena",
  "Tag de rastreamento de bagagem",
  "Acesso à Sala VIP W Premium no aeroporto de Guarulhos",
];

const notIncluded = [
  "Taxas de embarque",
  "IOF",
  "Taxas de aeroporto e combustível (USD 185)",
  "Gorjetas a guias, motoristas, hotéis e restaurantes",
  "Bebidas nas refeições",
  "Passeio opcional Ilhas del Rosario · Isla Majagua",
  "Refeições não mencionadas no roteiro",
  "Despesas pessoais (frigobar, telefonemas, lavanderia, etc.)",
  "Documentação de viagem",
];

const faqs = [
  {
    q: "Qual a condição de pagamento?",
    a: "25% de entrada no ato da reserva e o saldo (75%) em 9 parcelas sem juros no cartão de crédito. Valores em dólar, sujeitos a disponibilidade e confirmação aérea.",
  },
  {
    q: "Brasileiros precisam de visto para a Colômbia?",
    a: "Não. Brasileiros não precisam de visto para estadia turística de até 90 dias. É obrigatório passaporte com validade mínima de 6 meses a partir da data de retorno.",
  },
  {
    q: "Como é o clima em outubro?",
    a: "Bogotá e Villa de Leyva ficam em altitude, com temperaturas amenas (10–20 °C) e possibilidade de chuva — leve agasalho e capa leve. Cartagena é Caribe puro, com 27–32 °C e clima úmido o ano todo. Recomendamos roupas leves, protetor solar e roupa de banho.",
  },
  {
    q: "Como funciona a altitude em Bogotá?",
    a: "Bogotá fica a 2.640 m e o Cerro Monserrate a 3.152 m. A maioria dos viajantes se adapta sem problemas, mas recomendamos hidratação reforçada, ritmo tranquilo no primeiro dia e evitar excessos de álcool e comida pesada na chegada.",
  },
  {
    q: "Qual o perfil do grupo?",
    a: "Grupo pequeno com guia acompanhante desde o Brasil. Casais, amigos e viajantes solo são muito bem-vindos. Trabalhamos com apartamento duplo (compartilhado) ou individual (com suplemento).",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Grupo Colômbia 2026 — Create Travel",
  description:
    "Grupo organizado de 10 dias pela Colômbia: Bogotá, Zipaquirá, Villa de Leyva, Ráquira e Cartagena das Índias. Saída 13/10/2026 pela LATAM com guia desde o Brasil.",
  image: heroImg,
  touristType: "Cultura, história, Caribe",
  itinerary: itinerary.map((d, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${d.day} — ${d.title}`,
  })),
  offers: {
    "@type": "Offer",
    price: "2698.00",
    priceCurrency: "USD",
    availability: "https://schema.org/LimitedAvailability",
    validThrough: "2026-10-13",
  },
  provider: {
    "@type": "TravelAgency",
    name: "Create Travel",
    url: CONTACT.domain,
  },
};

const GrupoColombia2026 = () => {
  const ctaLink = generateWhatsAppLink(whatsappParams);

  return (
    <div className="min-h-screen">
      <SEO
        title="Grupo Colômbia 2026 com guia do Brasil | Create Travel"
        description="10 dias pela Colômbia: Bogotá, Catedral de Sal de Zipaquirá, Villa de Leyva e Cartagena das Índias. Saída 13/10/2026 pela LATAM. Entrada 25% + 9x sem juros."
        canonicalPath="/grupos/colombia-2026"
        ogImage={heroImg}
        ogType="article"
        jsonLd={jsonLd}
        keywords="viagem em grupo Colômbia 2026, Cartagena das Índias, Bogotá, Villa de Leyva, Catedral de Sal, grupo Colômbia com guia do Brasil, Create Travel LATAM"
      />
      <Header />
      <WhatsAppButton variant="float" params={whatsappParams} />

      {/* Hero */}
      <section className="relative h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Centro histórico colonial e muralhas de Cartagena das Índias ao pôr do sol"
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
              <Sparkles size={14} /> Outubro 2026 · Saída confirmada
            </div>
            <p className="text-caption text-gold mb-4">
              Grupo · 13 a 22 de outubro de 2026
            </p>
            <h1 className="heading-hero text-white mb-6">Colômbia</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
              10 dias entre montanhas, história e Caribe: Bogotá, Catedral de
              Sal de Zipaquirá, Villa de Leyva e Cartagena das Índias — com
              guia do Brasil e voos LATAM.
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
            { icon: Calendar, label: "Datas", value: "13 a 22/10/2026" },
            { icon: Users, label: "Perfil", value: "Grupo com guia do Brasil" },
            { icon: Plane, label: "Voos", value: "LATAM" },
            { icon: Hotel, label: "Estilo", value: "Cultura + Caribe" },
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
              Entre montanhas, história e o calor do Caribe
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
            <h2 className="heading-section mb-6">Voos LATAM</h2>
            <p className="text-white/85 leading-relaxed mb-4">
              Uma das maiores e mais reconhecidas companhias aéreas da América
              Latina, com voos pontuais, modernos e confortáveis. Conexão
              direta entre Brasil e Colômbia, com bagagem de 23kg incluída.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Ida
              </p>
              <p className="font-serif text-lg">GRU → Bogotá</p>
              <p className="text-white/75 text-sm mt-1">
                13/10 LATAM 4904 às 08h15 · chegada BOG 12h25
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Voo doméstico
              </p>
              <p className="font-serif text-lg">Bogotá → Cartagena</p>
              <p className="text-white/75 text-sm mt-1">
                17/10 LATAM 4120 às 19h50 · chegada CTG 21h20
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Volta
              </p>
              <p className="font-serif text-lg">Cartagena → Bogotá → GRU</p>
              <p className="text-white/75 text-sm mt-1">
                21/10 LATAM 4127 às 14h55 + LATAM 4903 às 21h10 · chegada 22/10
                às 05h30
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
              10 dias — dia a dia
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
          <div className="grid sm:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              { city: "Bogotá", hotel: "Wyndham Bogotá Art" },
              { city: "Villa de Leyva", hotel: "Hotel Campanário" },
              { city: "Cartagena", hotel: "Dann Cartagena" },
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
                  {h.hotel}
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
            A partir de US$ 2.698 por pessoa
          </h2>
          <p className="text-white/85 mb-8">
            Em acomodação dupla. Valores em dólar, por pessoa, acrescidos de
            IOF e taxas de aeroporto e combustível (USD 185). Sujeitos a
            disponibilidade e confirmação aérea no momento da reserva.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto triplo
              </p>
              <p className="font-serif text-2xl font-semibold">US$ 2.668</p>
              <p className="text-white/70 text-xs mt-1">+ IOF USD 67</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6 ring-2 ring-gold/60">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto duplo
              </p>
              <p className="font-serif text-2xl font-semibold">US$ 2.698</p>
              <p className="text-white/70 text-xs mt-1">+ IOF USD 68</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto individual
              </p>
              <p className="font-serif text-2xl font-semibold">US$ 3.275</p>
              <p className="text-white/70 text-xs mt-1">+ IOF USD 86</p>
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
          <FAQSection faqs={faqs} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding">
        <div className="container-editorial text-center max-w-2xl">
          <h2 className="heading-section text-foreground mb-6">
            Vagas limitadas — Colômbia em outubro
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

export default GrupoColombia2026;
