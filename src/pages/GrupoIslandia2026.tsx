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
import heroImg from "@/assets/grupo-islandia-2026.jpg";
import { getHotelUrl, buildHotelsJsonLd, buildHotelsFAQs, buildHotelsKeywords } from "@/lib/groupHotels";

const whatsappParams = {
  type: "Roteiro" as const,
  name: "Grupo Islândia 2026 (saída 12/11/2026)",
};

const benefits = [
  {
    title: "Aurora boreal em novembro",
    desc: "Noites longas, céu profundo e ótima atividade solar — a melhor temporada para caçar as Luzes do Norte longe da poluição luminosa.",
  },
  {
    title: "Crystal Ice Cave em Vatnajökull",
    desc: "Super Jeep e caminhada guiada até uma caverna de gelo natural, com tons translúcidos de azul esculpidos pelo maior glaciar da Europa.",
  },
  {
    title: "Círculo Dourado completo",
    desc: "Þingvellir (UNESCO), o gêiser Strokkur, a cachoeira Gullfoss, a cratera Kerid e a icônica estufa geotérmica Friðheimar.",
  },
  {
    title: "Costa Sul e Jökulsárlón",
    desc: "Vík í Mýrdal, Reynisfjara, a lagoa glacial com icebergs flutuantes e a surreal Diamond Beach de areia negra.",
  },
  {
    title: "Blue Lagoon e Aurora Cruise",
    desc: "Banho termal na lagoa azul-leitosa em meio à lava e cruzeiro noturno no porto de Reykjavík para observar as luzes do norte.",
  },
  {
    title: "Guia acompanhante desde o Brasil",
    desc: "Coordenador Create Travel embarcando com o grupo em Guarulhos e assistência em português durante toda a viagem.",
  },
];

const itinerary = [
  {
    day: "Dia 1 — 12/11 (qui)",
    title: "São Paulo → Frankfurt",
    points: [
      "Apresentação em Guarulhos com o coordenador",
      "Voo Lufthansa LH 507 às 18h45",
      "Pernoite a bordo",
    ],
  },
  {
    day: "Dia 2 — 13/11 (sex)",
    title: "Frankfurt",
    points: [
      "Chegada às 10h15 e traslado ao hotel",
      "Holiday Inn Frankfurt Alte Oper",
      "Tarde livre na cidade do Meno",
    ],
  },
  {
    day: "Dia 3 — 14/11 (sáb)",
    title: "Frankfurt panorâmica",
    points: [
      "Römerberg, casas enxaimel e Frankfurt Cathedral",
      "Ponte Eiserner Steg sobre o rio Main",
      "Skyline “Mainhattan” e tarde livre",
    ],
  },
  {
    day: "Dia 4 — 15/11 (dom)",
    title: "Frankfurt → Reykjavík",
    points: [
      "Voo Lufthansa LH 832 às 11h35",
      "Chegada a Reykjavík às 14h30",
      "Hotel Midgardur by Center · tarde livre",
    ],
  },
  {
    day: "Dia 5 — 16/11 (seg)",
    title: "Reykjavík · Snæfellsnes · Reykholt",
    points: [
      "City tour por Hallgrímskirkja, Harpa e Parlamento",
      "Península de Snæfellsnes, a “Islândia em miniatura”",
      "Cachoeira Barnafoss · jantar no Fosshotel Reykholt",
    ],
  },
  {
    day: "Dia 6 — 17/11 (ter)",
    title: "Círculo Dourado · Hella",
    points: [
      "Parque Þingvellir (UNESCO) e gêiser Strokkur",
      "Cachoeira Gullfoss e cratera Kerið",
      "Estufa Friðheimar (degustação) · hotel Stracta · jantar",
    ],
  },
  {
    day: "Dia 7 — 18/11 (qua)",
    title: "Jökulsárlón · Crystal Ice Cave",
    points: [
      "Lagoa glacial Jökulsárlón com icebergs",
      "Super Jeep até a Crystal Ice Cave em Vatnajökull",
      "Diamond Beach · Fosshotel Núpar · jantar",
    ],
  },
  {
    day: "Dia 8 — 19/11 (qui)",
    title: "Vík · Blue Lagoon · Reykjavík",
    points: [
      "Praia de areia negra de Reynisfjara",
      "Banho termal na Blue Lagoon (entrada incluída)",
      "Retorno a Reykjavík · hotel Midgardur",
    ],
  },
  {
    day: "Dia 9 — 20/11 (sex)",
    title: "Reykjavík · Aurora Cruise",
    points: [
      "Dia livre na capital mais ao norte do mundo",
      "À noite: Aurora Northern Lights Cruise no porto",
      "Caça às Luzes do Norte em alto-mar",
    ],
  },
  {
    day: "Dia 10 — 21/11 (sáb)",
    title: "Reykjavík → Zurique → São Paulo",
    points: [
      "Voo Swiss LX 8325 às 14h00",
      "Conexão em Zurique · LX 92 às 22h45",
      "Pernoite a bordo",
    ],
  },
  {
    day: "Dia 11 — 22/11 (dom)",
    title: "São Paulo",
    points: [
      "Chegada em Guarulhos às 06h45",
      "Fim dos nossos serviços",
    ],
  },
];

const included = [
  "Bilhete aéreo São Paulo / Frankfurt / Reykjavík / Zurique / São Paulo em classe econômica com franquia de 1 mala de 23kg",
  "8 noites em hotéis de primeira categoria com café da manhã",
  "Guia acompanhante desde o Brasil",
  "Traslados com assistência em português/espanhol em Frankfurt e Reykjavík",
  "Todas as visitas conforme itinerário com entradas incluídas",
  "Entradas: cratera Kerið, Blue Lagoon, Crystal Ice Cave em Jökulsárlón e Aurora Northern Lights Cruise",
  "3 jantares (sem bebidas)",
  "Tag de rastreio de bagagem",
  "Acesso à sala VIP W Premium no aeroporto de Guarulhos",
  "Cartão de assistência GTA FLOT 75 com cobertura médica de US$ 75.000*",
  "Seguro cancelamento para passageiros até 85 anos: US$ 3.000",
];

const notIncluded = [
  "Taxas de embarque",
  "IOF",
  "Taxas de aeroporto e combustível (EUR 335)",
  "Bebidas nas refeições",
  "Passeios opcionais",
  "Gorjetas a guias, motoristas, garçons e carregadores de malas",
  "Despesas pessoais (frigobar, telefonemas, lavanderia, etc.)",
];

const faqs = [
  {
    q: "Qual a condição de pagamento?",
    a: "25% de entrada no ato da reserva e o saldo (75%) em 9 parcelas sem juros no cartão de crédito. Valores em euro, sujeitos a disponibilidade e confirmação aérea.",
  },
  {
    q: "Quais documentos são necessários?",
    a: "Passaporte com validade mínima de 6 meses a partir da data de retorno. Brasileiros não precisam de visto para a Islândia ou Alemanha (espaço Schengen). A partir de 2025 é exigido o registro ETIAS — incluímos orientação na sua reserva.",
  },
  {
    q: "Vamos mesmo ver a aurora boreal?",
    a: "Novembro é uma das melhores temporadas: noites longas e bom índice de atividade solar. Não há garantia 100% (depende do clima e do sol), mas o roteiro está desenhado para maximizar suas chances — três noites no interior longe de luzes urbanas e um cruzeiro noturno dedicado à observação.",
  },
  {
    q: "Como é o frio em novembro?",
    a: "Temperaturas entre -2 °C e 5 °C, com possibilidade de neve e vento forte na costa sul. Enviamos uma lista detalhada de equipamentos e roupas térmicas para você embarcar tranquilo(a).",
  },
  {
    q: "Posso viajar sozinho(a)? Tem suplemento single?",
    a: "Sim. Trabalhamos com apartamento duplo, triplo ou individual. Podemos emparelhar você com outra pessoa do grupo do mesmo gênero para evitar o suplemento single.",
  },
  {
    q: "A Crystal Ice Cave é segura?",
    a: "Sim. O acesso é feito em Super Jeep modificado, com guia local especializado e equipamento de segurança fornecido (capacete e grampos). A caverna é monitorada diariamente pelas equipes locais.",
  },
];

const hotelsForSeo = [{ city: "Frankfurt", hotel: "Holiday Inn Frankfurt Alte Oper" },
              { city: "Reykjavík", hotel: "Midgardur by Center" },
              { city: "Reykholt", hotel: "Fosshotel Reykholt" },
              { city: "Hella", hotel: "Hotel Stracta" },
              { city: "Núpar", hotel: "Fosshotel Núpar" }];
const hotelsSeoJsonLd = buildHotelsJsonLd(hotelsForSeo, "Grupo Islândia 2026 — Create Travel", "/grupos/islandia-2026");
const hotelsSeoFaqs = buildHotelsFAQs(hotelsForSeo, "Grupo Islândia 2026 — Create Travel", "/grupos/islandia-2026");
const hotelsSeoKeywords = buildHotelsKeywords(hotelsForSeo);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Grupo Islândia 2026 — Create Travel",
  description:
    "Grupo organizado de 11 dias pela Islândia em novembro: Reykjavík, Círculo Dourado, costa sul, Jökulsárlón, Crystal Ice Cave, Blue Lagoon e cruzeiro da aurora boreal. Saída 12/11/2026 com guia desde o Brasil e voos Lufthansa.",
  image: heroImg,
  touristType: "Natureza, aurora boreal, aventura, cultura",
  itinerary: itinerary.map((d, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${d.day} — ${d.title}`,
  })),
  offers: {
    "@type": "Offer",
    price: "5996.00",
    priceCurrency: "EUR",
    availability: "https://schema.org/LimitedAvailability",
    validThrough: "2026-11-12",
  },
  provider: {
    "@type": "TravelAgency",
    name: "Create Travel",
    url: CONTACT.domain,
  },
};

const GrupoIslandia2026 = () => {
  const ctaLink = generateWhatsAppLink(whatsappParams);

  return (
    <div className="min-h-screen">
      <SEO
        title="Grupo Islândia 2026 — Aurora Boreal, Crystal Ice Cave & Círculo Dourado | Create Travel"
        description="11 dias pela Islândia em grupo com guia do Brasil: Reykjavík, Círculo Dourado, Jökulsárlón, Crystal Ice Cave, Blue Lagoon e Aurora Cruise. Saída 12/11/2026 pela Lufthansa. Entrada 25% + 9x sem juros."
        canonicalPath="/grupos/islandia-2026"
        ogImage={heroImg}
        ogType="article"
        jsonLd={[jsonLd, ...hotelsSeoJsonLd]}
        keywords={`viagem em grupo Islândia 2026, aurora boreal com guia do Brasil, Crystal Ice Cave em português, Círculo Dourado Islândia, Blue Lagoon Reykjavík, Create Travel Islândia, ${hotelsSeoKeywords}`}
      />
      <Header />
      <WhatsAppButton variant="float" params={whatsappParams} />

      {/* Hero */}
      <section className="relative h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Aurora boreal dançando sobre montanhas nevadas e icebergs na Islândia"
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
              Grupo · 12 a 22 de novembro de 2026
            </p>
            <h1 className="heading-hero text-white mb-6">Islândia</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
              11 dias sob a aurora boreal: Reykjavík, Círculo Dourado,
              Jökulsárlón, Crystal Ice Cave e Blue Lagoon — com guia do Brasil e
              voos Lufthansa.
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
            { icon: Calendar, label: "Datas", value: "12 a 22/11/2026" },
            { icon: Users, label: "Perfil", value: "Grupo com guia do Brasil" },
            { icon: Plane, label: "Voos", value: "Lufthansa + Swiss" },
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
              Uma jornada sob as Luzes do Norte
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
            <h2 className="heading-section mb-6">Voos Lufthansa & Swiss</h2>
            <p className="text-white/85 leading-relaxed mb-4">
              Classe econômica com franquia de bagagem despachada. Ida pela
              Lufthansa via Frankfurt — eficiência, conforto e tradição alemã —
              e retorno pela Swiss via Zurique.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Ida
              </p>
              <p className="font-serif text-lg">GRU → Frankfurt</p>
              <p className="text-white/75 text-sm mt-1">
                12/11 LH 507 às 18h45 · chegada Frankfurt 13/11 às 10h15
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Frankfurt → Reykjavík
              </p>
              <p className="font-serif text-lg">FRA → KEF</p>
              <p className="text-white/75 text-sm mt-1">
                15/11 LH 832 às 11h35 · chegada Reykjavík às 14h30
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Volta
              </p>
              <p className="font-serif text-lg">Reykjavík → Zurique → GRU</p>
              <p className="text-white/75 text-sm mt-1">
                21/11 LX 8325 às 14h00 · conexão LX 92 às 22h45 · chegada GRU
                22/11 às 06h45
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {[
              { city: "Frankfurt", hotel: "Holiday Inn Frankfurt Alte Oper" },
              { city: "Reykjavík", hotel: "Midgardur by Center" },
              { city: "Reykholt", hotel: "Fosshotel Reykholt" },
              { city: "Hella", hotel: "Hotel Stracta" },
              { city: "Núpar", hotel: "Fosshotel Núpar" },
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
            A partir de € 5.996 por pessoa
          </h2>
          <p className="text-white/85 mb-8">
            Em acomodação dupla. Valores em euro, por pessoa, acrescidos de IOF
            e taxas de aeroporto e combustível (EUR 335). Sujeitos a
            disponibilidade e confirmação aérea no momento da reserva.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto triplo
              </p>
              <p className="font-serif text-2xl font-semibold">€ 5.980</p>
              <p className="text-white/70 text-xs mt-1">+ IOF EUR 144</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6 ring-2 ring-gold/60">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto duplo
              </p>
              <p className="font-serif text-2xl font-semibold">€ 5.996</p>
              <p className="text-white/70 text-xs mt-1">+ IOF EUR 145</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto individual
              </p>
              <p className="font-serif text-2xl font-semibold">€ 7.094</p>
              <p className="text-white/70 text-xs mt-1">+ IOF EUR 179</p>
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
            Islândia 2026. Atendimento personalizado pelo WhatsApp.
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

export default GrupoIslandia2026;
