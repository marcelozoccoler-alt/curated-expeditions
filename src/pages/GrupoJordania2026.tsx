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
import heroImg from "@/assets/grupo-jordania-2026.jpg";
import { getHotelUrl, buildHotelsJsonLd, buildHotelsFAQs, buildHotelsKeywords } from "@/lib/groupHotels";

const whatsappParams = {
  type: "Roteiro" as const,
  name: "Grupo Jordânia Completa 2026 (saída 09/09/2026)",
};

const benefits = [
  {
    title: "Petra, a cidade rosa",
    desc: "Dois dias dedicados a uma das Sete Maravilhas do Mundo: Siq, Tesouro Al-Khazneh, tumbas reais e o Monastério.",
  },
  {
    title: "Noite beduína em Wadi Rum",
    desc: "Passeio em 4x4 pelo deserto de Lawrence da Arábia e pernoite em acampamento sob céu estrelado.",
  },
  {
    title: "Jerash, a Pompeia do Oriente",
    desc: "Uma das cidades romanas mais bem preservadas do mundo: Arco de Adriano, colunatas e teatro de acústica perfeita.",
  },
  {
    title: "Monte Nebo e Madaba",
    desc: "Mosaicos bizantinos e o mirante de onde, segundo a tradição, Moisés avistou a Terra Prometida.",
  },
  {
    title: "Aqaba, Betânia e Mar Morto",
    desc: "Snorkel no Mar Vermelho, o local do batismo de Jesus no Rio Jordão e o banho mais singular do planeta.",
  },
  {
    title: "Guia acompanhante desde o Brasil",
    desc: "Coordenador Create Travel embarcando com o grupo em Guarulhos e guia local em espanhol durante todo o roteiro.",
  },
];

const itinerary = [
  {
    day: "Dia 1 — 09/09 (qua)",
    title: "São Paulo",
    points: [
      "Apresentação em Guarulhos com o coordenador",
      "Procedimentos de embarque Ethiopian Airlines",
    ],
  },
  {
    day: "Dia 2 — 10/09 (qui)",
    title: "São Paulo → Addis Abeba",
    points: [
      "Voo Ethiopian ET 507 às 01h45",
      "Chegada Addis Abeba às 19h45",
      "Conexão ET 428 às 22h25 rumo a Amã",
    ],
  },
  {
    day: "Dia 3 — 11/09 (sex)",
    title: "Amã · city tour",
    points: [
      "Chegada às 02h25 · traslado e descanso",
      "Mesquita Rei Abdalá I e Cidadela",
      "Rainbow Street, Habiba e Teatro Romano · jantar",
    ],
  },
  {
    day: "Dia 4 — 12/09 (sáb)",
    title: "Amã · Ajlun · Jerash",
    points: [
      "Castelo de Ajlun no alto da montanha",
      "Jerash: Arco do Triunfo, cardo e teatro romano",
      "Retorno a Amã · jantar e hospedagem",
    ],
  },
  {
    day: "Dia 5 — 13/09 (dom)",
    title: "Madaba · Monte Nebo · Petra",
    points: [
      "Igreja de São Jorge e o mapa em mosaico",
      "Monte Nebo · vista do Vale do Jordão e Mar Morto",
      "Viagem a Petra · jantar e hospedagem",
    ],
  },
  {
    day: "Dia 6 — 14/09 (seg)",
    title: "Petra · dia completo",
    points: [
      "Caminhada pelo Siq até o Tesouro Al-Khazneh",
      "Tumbas coloridas, tumbas reais e Monastério",
      "Jantar e hospedagem em Petra",
    ],
  },
  {
    day: "Dia 7 — 15/09 (ter)",
    title: "Petra → Wadi Rum",
    points: [
      "Passeio em 4x4 pelo deserto com beduínos",
      "Pôr do sol entre as formações rochosas",
      "Pernoite em acampamento · jantar incluído",
    ],
  },
  {
    day: "Dia 8 — 16/09 (qua)",
    title: "Wadi Rum → Aqaba",
    points: [
      "Passeio de barco com snorkel no Mar Vermelho",
      "Relax em Tala Bay (almoço não incluído)",
      "Hospedagem em Aqaba · jantar incluído",
    ],
  },
  {
    day: "Dia 9 — 17/09 (qui)",
    title: "Betânia · Mar Morto",
    points: [
      "Sítio do batismo de Jesus no Rio Jordão",
      "Banho e lama terapêutica no Mar Morto",
      "Jantar e hospedagem no Mar Morto",
    ],
  },
  {
    day: "Dia 10 — 18/09 (sex)",
    title: "Mar Morto · Amã",
    points: [
      "Dia livre no resort à beira do Mar Morto",
      "Traslado ao aeroporto de Amã às 18h00",
    ],
  },
  {
    day: "Dia 11 — 19/09 (sáb)",
    title: "Amã → Addis Abeba → São Paulo",
    points: [
      "Voo ET 429 às 03h25 · conexão Addis Abeba",
      "Voo ET 506 às 09h50 · chegada GRU 16h20",
      "Fim dos nossos serviços",
    ],
  },
];

const included = [
  "Bilhete aéreo em classe econômica São Paulo / Addis Abeba / Amã / Addis Abeba / São Paulo pela Ethiopian Airlines com 1 mala de 23kg",
  "Hotéis de primeira categoria com café da manhã",
  "Guia acompanhante desde o Brasil",
  "Traslados com assistência em português/espanhol em Amã",
  "Visitas com guia local em espanhol: Ajlun, Jerash, Madaba, Monte Nebo, Petra, Wadi Rum, Aqaba, Betânia e Mar Morto",
  "Entradas conforme o roteiro",
  "Pernoite em acampamento beduíno em Wadi Rum",
  "Jantares conforme programa (Amã, Petra, Wadi Rum, Aqaba e Mar Morto)",
  "Tag de rastreio de bagagem",
  "Acesso à sala VIP W Premium no aeroporto de Guarulhos",
  "Cartão de assistência GTA FLOT 75 com cobertura médica de US$ 75.000*",
  "Seguro cancelamento Plus Reason até 85 anos: US$ 3.000",
];

const notIncluded = [
  "Taxas de embarque",
  "IOF",
  "Taxas de aeroporto e combustível (USD 912)",
  "Visto de entrada na Jordânia",
  "Bebidas nas refeições",
  "Gorjetas a guias, motoristas, garçons e carregadores de malas",
  "Despesas pessoais (frigobar, telefonemas, lavanderia, etc.)",
];

const faqs = [
  {
    q: "Qual a condição de pagamento?",
    a: "25% de entrada no ato da reserva e o saldo (75%) em 9 parcelas sem juros no cartão de crédito. Valores em dólar, sujeitos a disponibilidade e confirmação aérea.",
  },
  {
    q: "Quais documentos são necessários?",
    a: "Passaporte com validade mínima de 6 meses a partir da data de retorno e visto de entrada na Jordânia (orientamos no momento da reserva — pode ser obtido como Jordan Pass, que também inclui a entrada em Petra). Consulte a Anvisa para vacinas recomendadas.",
  },
  {
    q: "Como é o clima em setembro?",
    a: "É a transição do verão para o outono no Oriente Médio: dias ensolarados e quentes (28–34 °C), noites agradáveis no deserto e clima ameno em Amã. Excelente para visitar Petra e Wadi Rum com conforto.",
  },
  {
    q: "Como funciona a noite em Wadi Rum?",
    a: "Você fica hospedado no Mazayen Camp, um acampamento beduíno com tendas confortáveis, banheiros privativos, jantar tradicional ao ar livre e céu estrelado inesquecível. Uma das experiências mais marcantes da Jordânia.",
  },
  {
    q: "É seguro viajar para a Jordânia?",
    a: "Sim. A Jordânia é um dos destinos mais seguros e estáveis do Oriente Médio, com forte tradição de hospitalidade e turismo bem estruturado. Acompanhamos o grupo do Brasil ao retorno, com guia local especializado em cada região.",
  },
  {
    q: "Posso viajar sozinho(a)?",
    a: "Sim. Trabalhamos com apartamento triplo, duplo ou individual (com suplemento). Podemos emparelhar você com outra pessoa do grupo do mesmo gênero, mediante disponibilidade.",
  },
];

const hotelsForSeo = [{ city: "Amã", hotel: "Golden Tulip Amman" },
              { city: "Petra", hotel: "Petra Palace" },
              { city: "Wadi Rum", hotel: "Mazayen Camp" },
              { city: "Aqaba", hotel: "Oryx Aqaba" },
              { city: "Mar Morto", hotel: "Holiday Inn Resort Dead Sea" }];
const hotelsSeoJsonLd = buildHotelsJsonLd(hotelsForSeo, "Grupo Jordânia Completa 2026 — Create Travel", "/grupos/jordania-2026");
const hotelsSeoFaqs = buildHotelsFAQs(hotelsForSeo, "Grupo Jordânia Completa 2026 — Create Travel", "/grupos/jordania-2026");
const hotelsSeoKeywords = buildHotelsKeywords(hotelsForSeo);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Grupo Jordânia Completa 2026 — Create Travel",
  description:
    "Grupo organizado de 11 dias pela Jordânia: Amã, Jerash, Ajlun, Madaba, Monte Nebo, Petra, Wadi Rum, Aqaba, Betânia e Mar Morto. Saída 09/09/2026 com guia desde o Brasil e voos Ethiopian Airlines.",
  image: heroImg,
  touristType: "História, cultura, deserto, espiritualidade",
  itinerary: itinerary.map((d, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${d.day} — ${d.title}`,
  })),
  offers: {
    "@type": "Offer",
    price: "4173.00",
    priceCurrency: "USD",
    availability: "https://schema.org/LimitedAvailability",
    validThrough: "2026-09-09",
  },
  provider: {
    "@type": "TravelAgency",
    name: "Create Travel",
    url: CONTACT.domain,
  },
};

const GrupoJordania2026 = () => {
  const ctaLink = generateWhatsAppLink(whatsappParams);

  return (
    <div className="min-h-screen">
      <SEO
        title="Grupo Jordânia 2026 — Petra, Wadi Rum e Mar Morto com guia do Brasil | Create Travel"
        description="11 dias pela Jordânia em grupo com guia do Brasil: Amã, Jerash, Petra, Wadi Rum, Aqaba, Betânia e Mar Morto. Saída 09/09/2026 pela Ethiopian Airlines. Entrada 25% + 9x sem juros."
        canonicalPath="/grupos/jordania-2026"
        ogImage={heroImg}
        ogType="article"
        jsonLd={[jsonLd, ...hotelsSeoJsonLd]}
        keywords={`viagem em grupo Jordânia 2026, Petra com guia do Brasil, Wadi Rum acampamento beduíno, Mar Morto, Create Travel Oriente Médio, ${hotelsSeoKeywords}`}
      />
      <Header />
      <WhatsAppButton variant="float" params={whatsappParams} />

      {/* Hero */}
      <section className="relative h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="O Tesouro Al-Khazneh de Petra visto pelo desfiladeiro do Siq na luz dourada do entardecer"
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
              Grupo · 09 a 19 de setembro de 2026
            </p>
            <h1 className="heading-hero text-white mb-6">Jordânia Completa</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
              11 dias entre Petra, Wadi Rum, o Rio Jordão e o Mar Morto — com
              guia do Brasil, voos Ethiopian Airlines e pernoite em acampamento
              beduíno sob as estrelas.
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
            { icon: Calendar, label: "Datas", value: "09 a 19/09/2026" },
            { icon: Users, label: "Perfil", value: "Grupo com guia do Brasil" },
            { icon: Plane, label: "Voos", value: "Ethiopian Airlines" },
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
              Do deserto rosa ao Mar Morto, em um só roteiro
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
            <h2 className="heading-section mb-6">Voos Ethiopian Airlines</h2>
            <p className="text-white/85 leading-relaxed mb-4">
              Membro da Star Alliance e premiada na África pela segurança,
              modernidade e hospitalidade. Conexão em Addis Abeba para chegar a
              Amã e iniciar a jornada pela Jordânia.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Ida
              </p>
              <p className="font-serif text-lg">GRU → Addis Abeba → Amã</p>
              <p className="text-white/75 text-sm mt-1">
                10/09 ET 507 às 01h45 · conexão ET 428 às 22h25 · chegada Amã
                11/09 às 02h25
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Volta
              </p>
              <p className="font-serif text-lg">Amã → Addis Abeba → GRU</p>
              <p className="text-white/75 text-sm mt-1">
                19/09 ET 429 às 03h25 · conexão ET 506 às 09h50 · chegada GRU
                16h20
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
            {[
              { city: "Amã", hotel: "Golden Tulip Amman" },
              { city: "Petra", hotel: "Petra Palace" },
              { city: "Wadi Rum", hotel: "Mazayen Camp" },
              { city: "Aqaba", hotel: "Oryx Aqaba" },
              { city: "Mar Morto", hotel: "Holiday Inn Resort Dead Sea" },
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
            A partir de US$ 4.173 por pessoa
          </h2>
          <p className="text-white/85 mb-8">
            Em acomodação dupla. Valores em dólar, por pessoa, acrescidos de IOF
            e taxas de aeroporto e combustível (USD 912). Sujeitos a
            disponibilidade e confirmação aérea no momento da reserva.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto triplo
              </p>
              <p className="font-serif text-2xl font-semibold">US$ 4.153</p>
              <p className="text-white/70 text-xs mt-1">+ IOF USD 96</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6 ring-2 ring-gold/60">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto duplo
              </p>
              <p className="font-serif text-2xl font-semibold">US$ 4.173</p>
              <p className="text-white/70 text-xs mt-1">+ IOF USD 97</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto individual
              </p>
              <p className="font-serif text-2xl font-semibold">US$ 4.998</p>
              <p className="text-white/70 text-xs mt-1">+ IOF USD 123</p>
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
            Jordânia Completa 2026. Atendimento personalizado pelo WhatsApp.
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

export default GrupoJordania2026;
