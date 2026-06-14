import { motion } from "framer-motion";
import {
  Calendar,
  Users,
  Plane,
  Hotel,
  MapPin,
  Check,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEO } from "@/components/SEO";
import { FAQSection } from "@/components/FAQSection";
import { CONTACT, generateWhatsAppLink } from "@/lib/types";
import heroImg from "@/assets/grupo-chile-carretera-austral-2026.jpg";

const whatsappParams = {
  type: "Roteiro" as const,
  name: "Grupo Chile com Carretera Austral · Primavera 2026 (saída 28/09/2026)",
};

const benefits = [
  {
    title: "Carretera Austral",
    desc: "Trechos da rota CH-7, uma das estradas mais cênicas do mundo, na primavera patagônica.",
  },
  {
    title: "Capelas de Mármore",
    desc: "Navegação no Lago General Carrera até as esculturas naturais de mármore em águas turquesa.",
  },
  {
    title: "Glaciar San Rafael",
    desc: "Expedição de catamarã pelos fiordes patagônicos com brinde de gelo milenar e open bar.",
  },
  {
    title: "Parque Aikén & cordeiro ao Palo",
    desc: "Caminhada em meio à flora nativa seguida de assado patagônico ao fogo de chão.",
  },
  {
    title: "Termas da Enseada Pérez",
    desc: "Banho em piscinas naturais aquecidas, à beira-mar, em meio à floresta intocada.",
  },
  {
    title: "Santiago elegante",
    desc: "City tour por La Moneda, Plaza de Armas, Cerro Santa Lucía e bairros Lastarria e Las Condes.",
  },
];

const itinerary = [
  {
    day: "Dia 1 — 28/09 (seg)",
    title: "São Paulo → Santiago",
    points: [
      "Apresentação em Guarulhos com o coordenador",
      "Voo LATAM 606 às 14h55 · chegada SCL 18h15",
    ],
  },
  {
    day: "Dia 2 — 29/09 (ter)",
    title: "Santiago",
    points: [
      "City tour: La Moneda, Plaza de Armas, Cerro Santa Lucía",
      "Providencia, Vitacura e Las Condes",
      "Opcional: Vinícola Undurraga no Vale do Maipo",
    ],
  },
  {
    day: "Dia 3 — 30/09 (qua)",
    title: "Santiago → Balmaceda → Puerto Río Tranquilo",
    points: [
      "Voo LATAM 281 às 06h52 · chegada Balmaceda 10h16",
      "Carretera Austral · Cuesta del Diablo e Cerro Castillo",
      "Navegação às Capelas de Mármore · jantar",
    ],
  },
  {
    day: "Dia 4 — 01/10 (qui)",
    title: "Puerto Tranquilo → Puerto Chacabuco",
    points: [
      "Travessia pela Carretera Austral com picnic no caminho",
      "Hospedagem no Loberías del Sur · jantar",
    ],
  },
  {
    day: "Dia 5 — 02/10 (sex)",
    title: "Laguna San Rafael",
    points: [
      "Catamarã pelos fiordes até o Glaciar San Rafael",
      "Café da manhã, almoço e open bar a bordo",
      "Brinde com gelo milenar · jantar",
    ],
  },
  {
    day: "Dia 6 — 03/10 (sáb)",
    title: "Parque Aikén del Sur",
    points: [
      "Caminhada de contemplação pela floresta nativa",
      "Almoço com cordeiro ao Palo estilo Patagônia",
      "Jantar e hospedagem",
    ],
  },
  {
    day: "Dia 7 — 04/10 (dom)",
    title: "Enseada Pérez · termas",
    points: [
      "Navegação e banho em piscinas termais à beira-mar",
      "Coquetel a bordo · almoço e jantar no hotel",
    ],
  },
  {
    day: "Dia 8 — 05/10 (seg)",
    title: "Puerto Chacabuco → Balmaceda → São Paulo",
    points: [
      "Voo LATAM 280 às 10h57 · conexão SCL",
      "LATAM 714 às 15h44 · chegada GRU 20h45",
    ],
  },
];

const included = [
  "Bilhete aéreo São Paulo / Santiago / Balmaceda / São Paulo em classe econômica pela LATAM, com 1 mala de 23kg",
  "Hotéis de primeira categoria com café da manhã",
  "Coordenador brasileiro desde São Paulo",
  "Traslados com assistência em português/espanhol em Santiago e espanhol em Balmaceda",
  "City tour meio-dia em Santiago com guia em português/espanhol",
  "Excursões em espanhol: Capelas de Mármore, Laguna San Rafael (compartilhado), Parque Aikén e Enseada Pérez",
  "1 lanche e 1 jantar em Puerto Tranquilo (sem bebidas)",
  "1 lanche tipo picnic na Carretera Austral",
  "2 almoços + 1 almoço cordeiro ao Palo estilo Patagônia",
  "4 jantares (sem bebidas)",
  "Café da manhã, aperitivo e open bar (alcoólicas e não alcoólicas) no catamarã da Laguna San Rafael",
  "Tag de rastreamento de bagagem",
  "Sala VIP W Premium no aeroporto de Guarulhos",
  "Cartão de assistência GTA FLOT 75 com cobertura médica de US$ 75.000",
  "Seguro cancelamento Plus Reason até 85 anos: US$ 3.000",
];

const notIncluded = [
  "Taxas de embarque",
  "IOF (USD 93 em apto duplo)",
  "Taxas de aeroporto e combustível (USD 145)",
  "Bebidas nas refeições não especificadas",
  "Gorjetas a guias, motoristas e garçons",
  "Despesas de maleteiros",
  "Despesas pessoais (frigobar, lavanderia, telefonemas, etc.)",
  "Documentação de viagem",
];

const faqs = [
  {
    q: "Qual a condição de pagamento?",
    a: "25% de entrada no ato da reserva e o saldo (75%) em 9 parcelas sem juros no cartão de crédito. Valores em dólar, sujeitos a disponibilidade e confirmação aérea.",
  },
  {
    q: "Brasileiros precisam de visto ou vacina?",
    a: "Não. Brasileiros não precisam de visto para o Chile. Aceita-se passaporte com validade mínima de 6 meses a partir do retorno OU RG em bom estado com emissão inferior a 10 anos. Vacina não obrigatória.",
  },
  {
    q: "Como é a Patagônia chilena em setembro/outubro?",
    a: "Primavera austral: dias se alongam, rios correm cheios, montanhas ainda salpicadas de neve e flores silvestres começam a despontar. Temperaturas entre 2 e 14 °C. Recomendamos roupas em camadas, casaco impermeável e calçado fechado.",
  },
  {
    q: "A Carretera Austral é asfaltada?",
    a: "Há trechos pavimentados e trechos de cascalho. A viagem é cênica e o ritmo é tranquilo, com paradas para fotos. Veículos adequados e motoristas experientes garantem conforto durante o percurso.",
  },
  {
    q: "Quais hotéis estão previstos?",
    a: "Santiago: Almacruz · Puerto Tranquilo: Apart Hotel y Cabañas Valle Exploradores · Puerto Chacabuco: Loberías del Sur. Todos com café da manhã incluído.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Grupo Chile com Carretera Austral · Primavera 2026 — Create Travel",
  description:
    "Grupo organizado de 8 dias pelo Chile e Patagônia chilena: Santiago, Balmaceda, Carretera Austral, Capelas de Mármore, Glaciar San Rafael, Parque Aikén e termas da Enseada Pérez. Saída 28/09/2026 pela LATAM com guia desde o Brasil.",
  image: heroImg,
  touristType: "Natureza, aventura, paisagens patagônicas, gastronomia",
  itinerary: itinerary.map((d, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${d.day} — ${d.title}`,
  })),
  offers: {
    "@type": "Offer",
    price: "3396.00",
    priceCurrency: "USD",
    availability: "https://schema.org/LimitedAvailability",
    validThrough: "2026-09-28",
  },
  provider: {
    "@type": "TravelAgency",
    name: "Create Travel",
    url: CONTACT.domain,
  },
};

const GrupoChileCarreteraAustral2026 = () => {
  const ctaLink = generateWhatsAppLink(whatsappParams);

  return (
    <div className="min-h-screen">
      <SEO
        title="Grupo Chile com Carretera Austral · Primavera 2026 · Capelas de Mármore & Glaciar San Rafael | Create Travel"
        description="8 dias pelo Chile na primavera 2026: Santiago, Carretera Austral, Capelas de Mármore, Glaciar San Rafael, Parque Aikén e termas da Enseada Pérez. Saída 28/09/2026 pela LATAM. Entrada 25% + 9x sem juros."
        canonicalPath="/grupos/chile-carretera-austral-2026"
        ogImage={heroImg}
        ogType="article"
        jsonLd={jsonLd}
        keywords="viagem em grupo Chile 2026, Carretera Austral, Capelas de Mármore, Glaciar San Rafael, Patagônia chilena, Create Travel LATAM"
      />
      <Header />
      <WhatsAppButton variant="float" params={whatsappParams} />

      {/* Hero */}
      <section className="relative h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Capelas de Mármore no Lago General Carrera, Patagônia chilena, com águas turquesa e montanhas ao fundo"
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
              <Sparkles size={14} /> Primavera 2026 · Saída confirmada
            </div>
            <p className="text-caption text-gold mb-4">
              Grupo · 28 de setembro a 05 de outubro de 2026
            </p>
            <h1 className="heading-hero text-white mb-6">
              Chile com Carretera Austral
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
              8 dias pela rota mais cênica do Chile — Santiago, Capelas de Mármore, Glaciar San Rafael e termas patagônicas. Com guia do Brasil e voos LATAM.
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
            { icon: Calendar, label: "Datas", value: "28/09 a 05/10/2026" },
            { icon: Users, label: "Perfil", value: "Grupo com guia do Brasil" },
            { icon: Plane, label: "Voos", value: "LATAM Airlines" },
            { icon: Hotel, label: "Estilo", value: "Primavera patagônica" },
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
              Natureza épica e experiências autênticas
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
            <h2 className="heading-section mb-6">Voos LATAM Airlines</h2>
            <p className="text-white/85 leading-relaxed mb-4">
              Reconhecida pela excelência em voos pela América do Sul, a LATAM oferece conforto, pontualidade e vista privilegiada da Cordilheira dos Andes — uma prévia da beleza chilena que aguarda em solo.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Ida
              </p>
              <p className="font-serif text-lg">GRU → Santiago → Balmaceda</p>
              <p className="text-white/75 text-sm mt-1">
                28/09 LA 606 às 14h55 · chegada SCL 18h15 · 30/09 LA 281 às 06h52 · chegada BBA 10h16
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Volta
              </p>
              <p className="font-serif text-lg">Balmaceda → Santiago → GRU</p>
              <p className="text-white/75 text-sm mt-1">
                05/10 LA 280 às 10h57 · chegada SCL 12h20 + LA 714 às 15h44 · chegada GRU 20h45
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
              8 dias — dia a dia
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
              Primeira categoria com aconchego patagônico
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { city: "Santiago", hotel: "Almacruz" },
              { city: "Puerto Tranquilo", hotel: "Apart Hotel y Cabañas Valle Exploradores" },
              { city: "Puerto Chacabuco", hotel: "Loberías del Sur" },
            ].map((h, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-xl p-6 text-center shadow-card"
              >
                <Hotel className="mx-auto text-gold mb-3" size={22} />
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                  {h.city}
                </p>
                <p className="font-serif font-semibold">{h.hotel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment */}
      <section
        id="investimento"
        className="section-padding bg-gradient-to-br from-navy to-navy/90 text-white"
      >
        <div className="container-editorial max-w-5xl">
          <div className="text-center mb-14">
            <p className="text-caption text-gold mb-4">Investimento</p>
            <h2 className="heading-section mb-4">Valores por pessoa</h2>
            <p className="text-white/80">
              Entrada de 25% + 9 parcelas sem juros no cartão de crédito.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { label: "Apto Triplo", price: "US$ 3.356" },
              { label: "Apto Duplo", price: "US$ 3.396", highlight: true },
              { label: "Apto Individual", price: "US$ 3.780" },
            ].map((p, i) => (
              <div
                key={i}
                className={`rounded-xl p-8 text-center border ${
                  p.highlight
                    ? "bg-gold text-navy border-gold shadow-elegant"
                    : "bg-white/5 border-white/10"
                }`}
              >
                <p className="text-xs uppercase tracking-wider mb-2 opacity-80">
                  {p.label}
                </p>
                <p className="font-serif text-3xl font-bold">{p.price}</p>
                <p className="text-xs mt-2 opacity-70">por pessoa</p>
              </div>
            ))}
          </div>
          <p className="text-center text-white/70 text-sm mb-8">
            + IOF (USD 93 em apto duplo) e taxas de aeroporto/combustível (USD 145). Valores sujeitos a alteração até a confirmação da reserva.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-serif text-xl mb-4 text-gold">Inclui</h3>
              <ul className="space-y-2">
                {included.map((it, i) => (
                  <li key={i} className="flex gap-2 text-sm text-white/85">
                    <Check className="text-gold flex-shrink-0 mt-1" size={16} />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-xl mb-4 text-gold">Não inclui</h3>
              <ul className="space-y-2">
                {notIncluded.map((it, i) => (
                  <li key={i} className="flex gap-2 text-sm text-white/85">
                    <span className="text-gold mt-1">•</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <WhatsAppButton
              variant="cta"
              label="Quero garantir minha vaga"
              params={whatsappParams}
              className="text-lg px-8 py-4"
            />
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <Footer />
    </div>
  );
};

export default GrupoChileCarreteraAustral2026;
