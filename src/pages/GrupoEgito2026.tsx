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
import heroImg from "@/assets/grupo-egito-2026.jpg";
import { getHotelUrl, buildHotelsJsonLd, buildHotelsFAQs, buildHotelsKeywords } from "@/lib/groupHotels";

const whatsappParams = {
  type: "Roteiro" as const,
  name: "Grupo Egito 2026 (saída 29/09/2026)",
};

const benefits = [
  {
    title: "Cairo das pirâmides ao GEM",
    desc: "Gizé e Esfinge, Cidadela de Saladino, Bairro Copta, Khan El-Khalili e o novíssimo Grande Museu Egípcio — o maior museu arqueológico do mundo dedicado a uma única civilização.",
  },
  {
    title: "Luxor, a maior cidade-museu do mundo",
    desc: "Templos de Karnak e Luxor, Vale dos Reis, Templo de Hatshepsut e Colossos de Memnon na antiga Tebas.",
  },
  {
    title: "Cruzeiro de 4 noites pelo Nilo",
    desc: "Navio Radamis 1 em pensão completa entre Luxor e Assuã, com Edfu, Kom Ombo e o romântico Templo de Filae.",
  },
  {
    title: "Mar Vermelho em Sharm El Sheikh",
    desc: "3 noites no Renaissance Sharm para descansar diante do azul-turquesa de um dos mares mais belos do mundo.",
  },
  {
    title: "Guia acompanhante desde o Brasil",
    desc: "Coordenador Create Travel embarcando com o grupo em Guarulhos e guia local em português durante toda a viagem.",
  },
  {
    title: "Voos Turkish Airlines",
    desc: "Companhia premiada por serviço de bordo, gastronomia e entretenimento. Conexão via Istambul em frota moderna.",
  },
];

const itinerary = [
  {
    day: "Dia 1 — 29/09 (ter)",
    title: "São Paulo → Istambul",
    points: [
      "Apresentação em Guarulhos com o coordenador",
      "Voo Turkish Airlines TK 216 às 16h35",
      "Pernoite a bordo",
    ],
  },
  {
    day: "Dia 2 — 30/09 (qua)",
    title: "Istambul → Cairo",
    points: [
      "Chegada Istambul 11h15 · conexão TK 18h25",
      "Chegada ao Cairo 20h50",
      "Recepção e traslado ao hotel",
    ],
  },
  {
    day: "Dia 3 — 01/10 (qui)",
    title: "Cairo",
    points: [
      "Museu da Civilização Egípcia (NMEC) e múmias reais",
      "Cidadela de Saladino e Mesquita de Alabastro",
      "Bairro Copta, almoço e mercado Khan El-Khalili",
    ],
  },
  {
    day: "Dia 4 — 02/10 (sex)",
    title: "Cairo · Gizé & GEM",
    points: [
      "Pirâmides de Gizé e a Esfinge",
      "Almoço incluído em restaurante local",
      "Grande Museu Egípcio (GEM) · opcional Luz e Som",
    ],
  },
  {
    day: "Dia 5 — 03/10 (sáb)",
    title: "Cairo → Luxor",
    points: [
      "Voo doméstico ao Egito profundo",
      "Templos de Karnak e Luxor",
      "Embarque no cruzeiro Radamis 1 · pensão completa",
    ],
  },
  {
    day: "Dia 6 — 04/10 (dom)",
    title: "Luxor · Margem Ocidental",
    points: [
      "Vale dos Reis e tumbas reais",
      "Templo de Hatshepsut e Colossos de Memnon",
      "Navegação para Edfu · jantar a bordo",
    ],
  },
  {
    day: "Dia 7 — 05/10 (seg)",
    title: "Edfu & Kom Ombo",
    points: [
      "Templo de Hórus em Edfu",
      "Templo duplo de Kom Ombo",
      "Navegação até Assuã · pensão completa",
    ],
  },
  {
    day: "Dia 8 — 06/10 (ter)",
    title: "Assuã",
    points: [
      "Templo de Filae dedicado a Ísis",
      "Alta Barragem e Obelisco Inacabado",
      "Opcional Abu Simbel (saída de madrugada)",
    ],
  },
  {
    day: "Dia 9 — 07/10 (qua)",
    title: "Assuã → Cairo → Sharm El Sheikh",
    points: [
      "Desembarque após café da manhã",
      "Voos domésticos até Sharm El Sheikh",
      "Traslado e hospedagem à beira-mar",
    ],
  },
  {
    day: "Dias 10–11 — 08 a 09/10",
    title: "Sharm El Sheikh · Mar Vermelho",
    points: [
      "Dias livres no Renaissance Sharm",
      "Praia, mergulho e relax no Mar Vermelho",
      "Opcionais de snorkel e passeios marítimos",
    ],
  },
  {
    day: "Dia 12 — 10/10 (sáb)",
    title: "Sharm El Sheikh · descanso",
    points: [
      "Manhã livre",
      "Tarde para últimas experiências à beira-mar",
      "Hospedagem",
    ],
  },
  {
    day: "Dia 13 — 11/10 (dom)",
    title: "Sharm → Cairo → Istambul",
    points: [
      "Voo doméstico a Cairo",
      "Voo TK 691 às 10h10 · conexão TK 215 às 20h15",
      "Pernoite a bordo",
    ],
  },
  {
    day: "Dia 14 — 12/10 (seg)",
    title: "São Paulo",
    points: [
      "Chegada em Guarulhos às 03h30",
      "Fim dos nossos serviços",
    ],
  },
];

const included = [
  "Bilhete aéreo São Paulo / Cairo / São Paulo pela Turkish Airlines em classe econômica",
  "Voos domésticos Cairo / Luxor e Assuã / Cairo / Sharm El Sheikh / Cairo",
  "Visto de entrada no Egito incluído",
  "5 noites em hotéis de primeira categoria no Cairo (Intercontinental Semiramis e City Stars) e Sharm El Sheikh (Renaissance)",
  "4 noites de cruzeiro pelo Nilo no Radamis 1 em pensão completa",
  "Traslados privativos com assistência em português",
  "Guia coordenador desde São Paulo e guia local em português durante todo o roteiro",
  "Todas as visitas mencionadas com entradas pagas",
  "Almoços e jantares conforme indicado no roteiro",
  "Cartão de assistência com cobertura médica internacional",
  "Seguro cancelamento Plus Reason até 85 anos",
];

const notIncluded = [
  "Taxas de embarque",
  "IOF",
  "Taxas de aeroporto e combustível (USD 725)",
  "Bebidas nas refeições",
  "Passeios opcionais (Abu Simbel, Luz e Som em Gizé, etc.)",
  "Gorjetas a guias, motoristas, garçons e carregadores de malas",
  "Despesas pessoais (frigobar, telefonemas, lavanderia, etc.)",
];

const faqs = [
  {
    q: "Qual a condição de pagamento?",
    a: "25% de entrada no ato da reserva e o saldo (75%) em 9 parcelas sem juros no cartão de crédito. Valores em dólar, sujeitos a disponibilidade e confirmação aérea.",
  },
  {
    q: "Quais documentos e vacinas são necessários?",
    a: "Passaporte com validade mínima de 6 meses a partir da data de retorno. O visto de entrada no Egito já está incluído no pacote. A vacina contra febre amarela é exigida (Certificado Internacional emitido com ao menos 10 dias de antecedência).",
  },
  {
    q: "É melhor incluir o opcional de Abu Simbel?",
    a: "Sim, recomendamos. Abu Simbel é uma das obras-primas de Ramsés II, esculpida na rocha e relocada pela UNESCO. A saída acontece de madrugada a partir de Assuã, com cerca de 3h de viagem, e vale cada minuto.",
  },
  {
    q: "Como é o cruzeiro pelo Nilo?",
    a: "São 4 noites a bordo do Radamis 1 em apartamentos com vista para o rio, pensão completa (café da manhã, almoço e jantar) e visitas guiadas em Luxor, Edfu, Kom Ombo e Assuã.",
  },
  {
    q: "Posso viajar sozinho(a)? Tem suplemento single?",
    a: "Sim. Trabalhamos com apartamento duplo, triplo ou individual. Podemos emparelhar você com outra pessoa do grupo do mesmo gênero para evitar o suplemento single.",
  },
  {
    q: "Como é a temperatura no Egito no final de setembro?",
    a: "É a melhor época do ano para visitar o Egito — temperaturas amenas no Cairo e em Luxor, dias ensolarados em Assuã e mar quente em Sharm El Sheikh. A luz dourada de outono valoriza monumentos e fotos.",
  },
];

const hotelsForSeo = [{ city: "Cairo", hotel: "Intercontinental Semiramis" },
              { city: "Cruzeiro no Nilo", hotel: "Radamis 1" },
              { city: "Sharm El Sheikh", hotel: "Renaissance Sharm" },
              { city: "Cairo (retorno)", hotel: "Intercontinental City Stars" }];
const hotelsSeoJsonLd = buildHotelsJsonLd(hotelsForSeo, "Grupo Egito 2026 — Create Travel", "/grupos/egito-2026");
const hotelsSeoFaqs = buildHotelsFAQs(hotelsForSeo, "Grupo Egito 2026 — Create Travel", "/grupos/egito-2026");
const hotelsSeoKeywords = buildHotelsKeywords(hotelsForSeo);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Grupo Egito 2026 — Create Travel",
  description:
    "Grupo organizado de 14 dias pelo Egito: Cairo com Pirâmides e GEM, Luxor, cruzeiro pelo Nilo até Assuã e Mar Vermelho em Sharm El Sheikh. Saída 29/09/2026 com guia acompanhante desde o Brasil e voos Turkish Airlines.",
  image: heroImg,
  touristType: "Cultura, história, cruzeiro fluvial, praia",
  itinerary: itinerary.map((d, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${d.day} — ${d.title}`,
  })),
  offers: {
    "@type": "Offer",
    price: "4598.00",
    priceCurrency: "USD",
    availability: "https://schema.org/LimitedAvailability",
    validThrough: "2026-09-29",
  },
  provider: {
    "@type": "TravelAgency",
    name: "Create Travel",
    url: CONTACT.domain,
  },
};

const GrupoEgito2026 = () => {
  const ctaLink = generateWhatsAppLink(whatsappParams);

  return (
    <div className="min-h-screen">
      <SEO
        title="Grupo Egito 2026 — Pirâmides, Cruzeiro pelo Nilo & Mar Vermelho | Create Travel"
        description="14 dias pelo Egito em grupo com guia do Brasil: Cairo, GEM, Luxor, cruzeiro pelo Nilo e Sharm El Sheikh. Saída 29/09/2026 pela Turkish Airlines. Entrada 25% + 9x sem juros."
        canonicalPath="/grupos/egito-2026"
        ogImage={heroImg}
        ogType="article"
        jsonLd={[jsonLd, ...hotelsSeoJsonLd]}
        keywords={`viagem em grupo Egito 2026, pirâmides Gizé com guia do Brasil, cruzeiro Nilo em português, Grande Museu Egípcio GEM, Sharm El Sheikh Mar Vermelho, Create Travel Egito, ${hotelsSeoKeywords}`}
      />
      <Header />
      <WhatsAppButton variant="float" params={whatsappParams} />

      {/* Hero */}
      <section className="relative h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Pirâmides de Gizé e a Esfinge ao pôr do sol no Egito"
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
              <Sparkles size={14} /> Saída confirmada · Vagas limitadas
            </div>
            <p className="text-caption text-gold mb-4">
              Grupo · 29 de setembro a 12 de outubro de 2026
            </p>
            <h1 className="heading-hero text-white mb-6">Egito</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
              14 dias entre as Pirâmides, o novíssimo GEM, Luxor, um cruzeiro
              pelo Nilo e o Mar Vermelho — com guia do Brasil e voos Turkish
              Airlines.
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
            { icon: Calendar, label: "Datas", value: "29/09 a 12/10/2026" },
            { icon: Users, label: "Perfil", value: "Grupo com guia do Brasil" },
            { icon: Plane, label: "Voos", value: "Turkish Airlines" },
            { icon: Hotel, label: "Hospedagem", value: "Hotéis 1ª categoria + cruzeiro" },
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
              Onde o tempo ganha eternidade
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
              Classe econômica com bagagem despachada. Conexão em Istambul, uma
              das companhias mais premiadas do mundo em serviço de bordo,
              gastronomia e entretenimento.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Ida
              </p>
              <p className="font-serif text-lg">GRU → Istambul → Cairo</p>
              <p className="text-white/75 text-sm mt-1">
                29/09 TK 216 16h35 · conexão TK em Istambul · chegada Cairo
                30/09 às 20h50
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Doméstico no Egito
              </p>
              <p className="font-serif text-lg">
                Cairo · Luxor · Assuã · Sharm El Sheikh
              </p>
              <p className="text-white/75 text-sm mt-1">
                Voos domésticos incluídos para otimizar o roteiro
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Volta
              </p>
              <p className="font-serif text-lg">Cairo → Istambul → GRU</p>
              <p className="text-white/75 text-sm mt-1">
                11/10 TK 691 10h10 · conexão TK 215 20h15 · chegada GRU 12/10 às
                03h30
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
              14 dias — dia a dia
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
              { city: "Cairo", hotel: "Intercontinental Semiramis" },
              { city: "Cruzeiro no Nilo", hotel: "Radamis 1" },
              { city: "Sharm El Sheikh", hotel: "Renaissance Sharm" },
              { city: "Cairo (retorno)", hotel: "Intercontinental City Stars" },
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
            A partir de US$ 4.598 por pessoa
          </h2>
          <p className="text-white/85 mb-8">
            Em acomodação dupla. Valores em dólar, por pessoa, acrescidos de IOF
            e taxas de aeroporto e combustível (USD 725). Sujeitos a
            disponibilidade e confirmação aérea no momento da reserva.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto triplo
              </p>
              <p className="font-serif text-2xl font-semibold">US$ 4.558</p>
              <p className="text-white/70 text-xs mt-1">+ IOF USD 118</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6 ring-2 ring-gold/60">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto duplo
              </p>
              <p className="font-serif text-2xl font-semibold">US$ 4.598</p>
              <p className="text-white/70 text-xs mt-1">+ IOF USD 120</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto individual
              </p>
              <p className="font-serif text-2xl font-semibold">US$ 5.342</p>
              <p className="text-white/70 text-xs mt-1">+ IOF USD 142</p>
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
            Egito 2026. Atendimento personalizado pelo WhatsApp.
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

export default GrupoEgito2026;
