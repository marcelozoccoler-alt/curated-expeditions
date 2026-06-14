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
import heroImg from "@/assets/grupo-nepal-butao-2027.jpg";
import { getHotelUrl, buildHotelsJsonLd, buildHotelsFAQs, buildHotelsKeywords } from "@/lib/groupHotels";

const whatsappParams = {
  type: "Roteiro" as const,
  name: "Grupo Nepal & Butão 2027 — Carnaval (saída 01/02/2027)",
};

const benefits = [
  {
    title: "Carnaval no Himalaia",
    desc: "Saída especial 01 a 15 de fevereiro de 2027: clima seco, céus limpos e visibilidade ideal dos picos nevados.",
  },
  {
    title: "Kathmandu e o vale histórico",
    desc: "Praças Durbar de Kathmandu, Patan e Bhaktapur, Swayambhunath e Changu Narayan — Patrimônios da UNESCO.",
  },
  {
    title: "Nagarkot ao amanhecer",
    desc: "Pernoite na vila de montanha a 2.230m para contemplar o nascer do sol sobre o Himalaia e o Monte Everest.",
  },
  {
    title: "Tiger’s Nest Monastery",
    desc: "Caminhada até o Mosteiro Taktshang, suspenso em uma falésia de Paro — o símbolo espiritual do Butão.",
  },
  {
    title: "Punakha e cerimônia de bênção",
    desc: "Punakha Dzong, ponte suspensa, Chimi Lhakhang e cerimônia tradicional no Khamsum Yulley Namgyal Chorten.",
  },
  {
    title: "Guia desde o Brasil + pensão completa",
    desc: "Coordenador Create Travel embarcando em Guarulhos, guia local em espanhol e pensão completa de Katmandu a Paro.",
  },
];

const itinerary = [
  {
    day: "Dia 1 — 01/02 (seg)",
    title: "São Paulo",
    points: [
      "Apresentação em Guarulhos com o coordenador",
      "Embarque Turkish Airlines TK 16",
    ],
  },
  {
    day: "Dia 2 — 02/02 (ter)",
    title: "São Paulo → Istambul",
    points: [
      "Voo Turkish às 04h10",
      "Chegada Istambul às 22h35",
      "Conexão para Katmandu",
    ],
  },
  {
    day: "Dia 3 — 03/02 (qua)",
    title: "Istambul → Katmandu",
    points: [
      "Voo TK 726 às 01h20 · chegada 11h10",
      "Traslado e descanso no hotel",
      "Jantar de boas-vindas",
    ],
  },
  {
    day: "Dia 4 — 04/02 (qui)",
    title: "Katmandu · Patrimônios UNESCO",
    points: [
      "Praça Durbar de Katmandu",
      "Stupa de Swayambhunath (Templo dos Macacos)",
      "Patan e sua Praça Durbar · almoço e jantar",
    ],
  },
  {
    day: "Dia 5 — 05/02 (sex)",
    title: "Bhaktapur · Nagarkot",
    points: [
      "Praça Durbar de Bhaktapur medieval",
      "Subida a Nagarkot (2.230m)",
      "Pôr do sol sobre o Himalaia · almoço e jantar",
    ],
  },
  {
    day: "Dia 6 — 06/02 (sáb)",
    title: "Nagarkot · Changu Narayan · Katmandu",
    points: [
      "Amanhecer sobre os picos nevados",
      "Templo Changu Narayan (séc. VII)",
      "Retorno a Katmandu · almoço e jantar",
    ],
  },
  {
    day: "Dia 7 — 07/02 (dom)",
    title: "Katmandu → Paro → Thimphu",
    points: [
      "Voo para o Butão e estrada cênica a Thimphu",
      "National Memorial Chorten · Ka Ja Thorm",
      "Almoço e jantar incluídos",
    ],
  },
  {
    day: "Dia 8 — 08/02 (seg)",
    title: "Thimphu · dia completo",
    points: [
      "Buddha Dordenma e Changangkha Lhakhang",
      "Takin Preserve e Pangri Zampa",
      "Tashichhoedzong · almoço e jantar",
    ],
  },
  {
    day: "Dia 9 — 09/02 (ter)",
    title: "Thimphu → Punakha",
    points: [
      "Passo Dochu-la a 3.088m",
      "Punakha Dzong e ponte suspensa",
      "Chimi Lhakhang · almoço e jantar",
    ],
  },
  {
    day: "Dia 10 — 10/02 (qua)",
    title: "Punakha · cerimônia espiritual",
    points: [
      "Caminhada ao Khamsum Yulley Namgyal Chorten",
      "Cerimônia de bênção e acendimento de lamparinas",
      "Vila tradicional de Rinchengang",
    ],
  },
  {
    day: "Dia 11 — 11/02 (qui)",
    title: "Punakha → Paro",
    points: [
      "Wangduephodrang Dzong com vista panorâmica",
      "Ta Dzong (Museu Nacional) e Rinpung Dzong",
      "Casa de fazenda · prática de arco e flecha",
    ],
  },
  {
    day: "Dia 12 — 12/02 (sex)",
    title: "Paro · Tiger’s Nest",
    points: [
      "Caminhada ao Mosteiro Taktshang (≈ 5h)",
      "Banho de pedras quentes ZANTA Spa",
      "Almoço e jantar incluídos",
    ],
  },
  {
    day: "Dia 13 — 13/02 (sáb)",
    title: "Paro → Katmandu",
    points: [
      "Voo a Katmandu · resto do dia livre",
      "Almoço e jantar incluídos",
    ],
  },
  {
    day: "Dia 14 — 14/02 (dom)",
    title: "Katmandu → Istambul → São Paulo",
    points: [
      "Voo TK 727 às 12h35 · chegada Istambul 18h25",
      "Conexão TK 215 às 20h30",
      "Pernoite a bordo",
    ],
  },
  {
    day: "Dia 15 — 15/02 (seg)",
    title: "São Paulo",
    points: [
      "Chegada em Guarulhos às 04h10",
      "Fim dos nossos serviços",
    ],
  },
];

const included = [
  "Bilhete aéreo internacional em classe econômica São Paulo / Istambul / Katmandu / Istambul / São Paulo pela Turkish Airlines",
  "Voos domésticos Katmandu / Paro / Katmandu com cia aérea local",
  "Hotéis de primeira categoria com café da manhã",
  "Guia acompanhante desde São Paulo e guia local em espanhol",
  "Traslados privados com assistência em Katmandu e Paro",
  "Todas as visitas em privativo com entradas conforme o roteiro",
  "Experiências: cerimônia de bênção em Punakha, arco e flecha em Paro, banho de pedras quentes ZANTA",
  "Pensão completa (sem bebidas) do jantar do dia 3 ao café da manhã do dia 14",
  "Visto do Butão (incluído)",
  "Taxa SDF do Butão (USD 600)",
  "Tag de rastreio de bagagem",
  "Acesso à sala VIP W Premium no aeroporto de Guarulhos",
  "Cartão de assistência GTA FLOT 75 com cobertura médica de US$ 75.000*",
  "Seguro cancelamento para passageiros até 85 anos: US$ 3.000",
];

const notIncluded = [
  "Taxas de embarque",
  "IOF",
  "Taxas de aeroporto e combustível (USD 867)",
  "Visto do Nepal (USD 30, pago direto no aeroporto)",
  "Bebidas nas refeições",
  "Gorjetas a guias, motoristas e garçons",
  "Despesas pessoais (frigobar, telefonemas, lavanderia, etc.)",
];

const faqs = [
  {
    q: "Qual a condição de pagamento?",
    a: "25% de entrada no ato da reserva e o saldo (75%) em 9 parcelas sem juros no cartão de crédito. Valores em dólar, sujeitos a disponibilidade e confirmação aérea.",
  },
  {
    q: "Quais documentos e vacinas são necessários?",
    a: "Passaporte com validade mínima de 6 meses a partir da data de retorno. Visto do Butão incluso no pacote (precisamos de foto digital tamanho passaporte). Visto do Nepal (USD 30) é obtido no aeroporto — recomenda-se preencher o formulário em tia.immigration.gov.np antes do embarque. É exigida vacina de febre amarela. Leve 2 fotos 3x4 por segurança.",
  },
  {
    q: "Como é o clima em fevereiro no Himalaia?",
    a: "Fevereiro é uma das melhores épocas: tempo seco, céus limpíssimos e máxima visibilidade dos picos nevados. Em Kathmandu e Paro os dias são frescos (10–18 °C) e as noites frias (próximas de 0 °C). Em Nagarkot e Punakha pode haver geada matinal — leve roupas em camadas.",
  },
  {
    q: "Quão exigente é a caminhada ao Tiger’s Nest?",
    a: "Cerca de 5 horas ida e volta, com subida moderada a 3.120m de altitude. Não é técnica, mas exige condicionamento. É possível usar mula em parte do trajeto. A recompensa é um dos cenários mais marcantes do planeta.",
  },
  {
    q: "Posso viajar sozinho(a)?",
    a: "Sim. Trabalhamos com apartamento triplo, duplo ou individual (com suplemento). Podemos emparelhar você com outra pessoa do grupo do mesmo gênero, mediante disponibilidade.",
  },
  {
    q: "O que é a taxa SDF do Butão?",
    a: "O Butão cobra a Sustainable Development Fee (USD 100/dia em 2026/27) para preservar cultura e meio ambiente. No nosso pacote, a SDF total (USD 600) já está inclusa — você não paga separadamente.",
  },
];

const hotelsForSeo = [{ city: "Katmandu", hotel: "Hotel Himalaya" },
              { city: "Nagarkot", hotel: "Club Himalaya Resort" },
              { city: "Thimphu", hotel: "Lemon Tree Taba" },
              { city: "Punakha", hotel: "Lobesa Boutique" },
              { city: "Paro", hotel: "Hotel previsto 1ª categoria" }];
const hotelsSeoJsonLd = buildHotelsJsonLd(hotelsForSeo, "Grupo Nepal & Butão 2027 — Carnaval — Create Travel", "/grupos/nepal-butao-2027");
const hotelsSeoFaqs = buildHotelsFAQs(hotelsForSeo, "Grupo Nepal & Butão 2027 — Carnaval — Create Travel", "/grupos/nepal-butao-2027");
const hotelsSeoKeywords = buildHotelsKeywords(hotelsForSeo);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Grupo Nepal & Butão 2027 — Carnaval — Create Travel",
  description:
    "Grupo organizado de 15 dias pelo Himalaia no Carnaval 2027: Kathmandu, Bhaktapur, Nagarkot, Thimphu, Punakha, Paro e o Tiger's Nest Monastery. Saída 01/02/2027 com guia desde o Brasil e voos Turkish Airlines.",
  image: heroImg,
  touristType: "Espiritualidade, cultura, natureza, montanha",
  itinerary: itinerary.map((d, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${d.day} — ${d.title}`,
  })),
  offers: {
    "@type": "Offer",
    price: "7998.00",
    priceCurrency: "USD",
    availability: "https://schema.org/LimitedAvailability",
    validThrough: "2027-02-01",
  },
  provider: {
    "@type": "TravelAgency",
    name: "Create Travel",
    url: CONTACT.domain,
  },
};

const GrupoNepalButao2027 = () => {
  const ctaLink = generateWhatsAppLink(whatsappParams);

  return (
    <div className="min-h-screen">
      <SEO
        title="Grupo Nepal & Butão 2027 — Carnaval no Himalaia com guia do Brasil | Create Travel"
        description="15 dias pelo reino do Himalaia em grupo com guia do Brasil: Kathmandu, Bhaktapur, Nagarkot, Thimphu, Punakha, Paro e Tiger's Nest. Saída 01/02/2027 (Carnaval) pela Turkish Airlines. Entrada 25% + 9x sem juros."
        canonicalPath="/grupos/nepal-butao-2027"
        ogImage={heroImg}
        ogType="article"
        jsonLd={[jsonLd, ...hotelsSeoJsonLd]}
        keywords={`viagem em grupo Nepal Butão 2027, Carnaval Himalaia, Tiger's Nest com guia do Brasil, Kathmandu Punakha Paro, Create Travel Ásia, ${hotelsSeoKeywords}`}
      />
      <Header />
      <WhatsAppButton variant="float" params={whatsappParams} />

      {/* Hero */}
      <section className="relative h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Tiger's Nest Monastery em Paro suspenso em falésia do Himalaia ao nascer do sol"
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
              <Sparkles size={14} /> Carnaval 2027 · Saída confirmada
            </div>
            <p className="text-caption text-gold mb-4">
              Grupo · 01 a 15 de fevereiro de 2027
            </p>
            <h1 className="heading-hero text-white mb-6">Nepal & Butão</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
              15 dias pelo reino do Himalaia: Kathmandu, vale medieval, Nagarkot
              ao amanhecer, Punakha, Paro e a subida ao Tiger’s Nest — com guia
              do Brasil e voos Turkish Airlines.
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
            { icon: Calendar, label: "Datas", value: "01 a 15/02/2027" },
            { icon: Users, label: "Perfil", value: "Grupo com guia do Brasil" },
            { icon: Plane, label: "Voos", value: "Turkish Airlines" },
            { icon: Hotel, label: "Pensão", value: "Hotéis 1ª + completa" },
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
              Uma jornada pelo reino do Himalaia
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
              Companhia premiada por serviço de bordo, gastronomia e
              entretenimento. Conexão em Istambul e voo doméstico
              Katmandu–Paro–Katmandu pela cia local — uma das aproximações mais
              cinematográficas de todo o transporte aéreo.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Ida
              </p>
              <p className="font-serif text-lg">GRU → Istambul → Katmandu</p>
              <p className="text-white/75 text-sm mt-1">
                02/02 TK 16 às 04h10 · conexão TK 726 às 01h20 · chegada
                Katmandu 03/02 às 11h10
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Doméstico no Himalaia
              </p>
              <p className="font-serif text-lg">Katmandu → Paro → Katmandu</p>
              <p className="text-white/75 text-sm mt-1">
                Voos cênicos sobre o Himalaia incluídos no pacote
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Volta
              </p>
              <p className="font-serif text-lg">Katmandu → Istambul → GRU</p>
              <p className="text-white/75 text-sm mt-1">
                14/02 TK 727 às 12h35 · conexão TK 215 às 20h30 · chegada GRU
                15/02 às 04h10
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
              Hospedagens cuidadosamente selecionadas
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
            {[
              { city: "Katmandu", hotel: "Hotel Himalaya" },
              { city: "Nagarkot", hotel: "Club Himalaya Resort" },
              { city: "Thimphu", hotel: "Lemon Tree Taba" },
              { city: "Punakha", hotel: "Lobesa Boutique" },
              { city: "Paro", hotel: "Hotel previsto 1ª categoria" },
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
            A partir de US$ 7.998 por pessoa
          </h2>
          <p className="text-white/85 mb-8">
            Em acomodação dupla. Valores em dólar, por pessoa, acrescidos de IOF
            e taxas de aeroporto e combustível (USD 867). Sujeitos a
            disponibilidade e confirmação aérea no momento da reserva.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto triplo
              </p>
              <p className="font-serif text-2xl font-semibold">US$ 7.978</p>
              <p className="text-white/70 text-xs mt-1">+ IOF USD 213</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6 ring-2 ring-gold/60">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto duplo
              </p>
              <p className="font-serif text-2xl font-semibold">US$ 7.998</p>
              <p className="text-white/70 text-xs mt-1">+ IOF USD 214</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto individual
              </p>
              <p className="font-serif text-2xl font-semibold">US$ 8.989</p>
              <p className="text-white/70 text-xs mt-1">+ IOF USD 245</p>
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
            Nepal & Butão 2027 (Carnaval). Atendimento personalizado pelo
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

export default GrupoNepalButao2027;
