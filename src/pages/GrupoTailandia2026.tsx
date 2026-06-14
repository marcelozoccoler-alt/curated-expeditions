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
import heroImg from "@/assets/grupo-tailandia-2026.jpg";
import { getHotelUrl } from "@/lib/groupHotels";

const whatsappParams = {
  type: "Roteiro" as const,
  name: "Grupo Tailândia 2026 com Festival das Lanternas (saída 12/11/2026)",
};

const benefits = [
  {
    title: "Festival das Lanternas (Yi Peng) em Chiang Mai",
    desc: "Participe da soltura coletiva de lanternas e da cerimônia tradicional Loi Krathong — uma das experiências mais mágicas do sudeste asiático.",
  },
  {
    title: "Guia acompanhante desde o Brasil",
    desc: "Embarque em Guarulhos com a equipe Create Travel e siga acompanhado em português do início ao fim da viagem.",
  },
  {
    title: "Voos Emirates com conexão em Dubai",
    desc: "Classe econômica em uma das melhores companhias do mundo, com duas bagagens de 23 kg incluídas no trecho internacional.",
  },
  {
    title: "Phuket, Phi Phi e Bangkok",
    desc: "Praias paradisíacas no Mar de Andaman, a baía de Maya, templos majestosos e o Palácio Real em Bangkok.",
  },
  {
    title: "Ayutthaya, Sukhothai e o norte tailandês",
    desc: "Antigas capitais do Sião, Patrimônio Mundial da UNESCO, Templo Branco e Templo Azul em Chiang Rai.",
  },
  {
    title: "Eco Valley — santuário de elefantes",
    desc: "Interação responsável com elefantes em Chiang Mai, com foco em conservação e turismo sustentável.",
  },
];

const itinerary = [
  {
    day: "Dia 1 — 12/11 (qui)",
    title: "São Paulo",
    points: [
      "Apresentação no Aeroporto de Guarulhos às 21h",
      "Encontro com o guia acompanhante e preparação para o embarque",
    ],
  },
  {
    day: "Dia 2 — 13/11 (sex)",
    title: "São Paulo → Dubai",
    points: [
      "Voo Emirates 262 às 01h30 com destino a Dubai",
      "Chegada em Dubai às 22h35 e conexão para Phuket",
    ],
  },
  {
    day: "Dia 3 — 14/11 (sáb)",
    title: "Dubai → Phuket",
    points: [
      "Voo Emirates 378 às 03h00 → Phuket 12h05",
      "Traslado ao hotel Graceland & Spa · check-in a partir das 16h",
    ],
  },
  {
    day: "Dia 4 — 15/11 (dom)",
    title: "Phuket — city tour",
    points: [
      "Cabo de Laem Phromthep, extremo sul da ilha",
      "View Point com vista para as praias de Kata, Karon e Karon Noi",
      "Centro histórico de Phuket e arquitetura sino-portuguesa",
    ],
  },
  {
    day: "Dia 5 — 16/11 (seg)",
    title: "Ilhas Phi Phi",
    points: [
      "Embarque em lancha rápida rumo a Phi Phi",
      "Baía de Maya (cenário de “A Praia”) e caverna Viking",
      "Almoço incluído · tempo livre em ilha paradisíaca",
      "Retorno a Phuket · hospedagem",
    ],
  },
  {
    day: "Dia 6 — 17/11 (ter)",
    title: "Phuket → Bangkok",
    points: [
      "Traslado e voo doméstico para Bangkok",
      "Traslado ao hotel Ramada Riverside · hospedagem",
    ],
  },
  {
    day: "Dia 7 — 18/11 (qua)",
    title: "Bangkok — templos e Palácio Real",
    points: [
      "Wat Pho (Buda Reclinado) e Wat Trimit (Buda de Ouro)",
      "Palácio Real e Wat Phra Kaew (Buda de Esmeralda)",
      "Sugestão opcional: tuk tuk e street food em Chinatown (Yaowarat)",
    ],
  },
  {
    day: "Dia 8 — 19/11 (qui)",
    title: "Bangkok — dia livre",
    points: [
      "Dia livre para atividades pessoais",
      "Sugestão opcional: cruzeiro com jantar no rio Chao Phraya",
    ],
  },
  {
    day: "Dia 9 — 20/11 (sex)",
    title: "Bangkok → Ayutthaya",
    points: [
      "Saída para Ayutthaya, antiga capital do Sião",
      "Templos históricos · Patrimônio Mundial da UNESCO",
    ],
  },
  {
    day: "Dia 10 — 21/11 (sáb)",
    title: "Ayutthaya → Angthong → Phitsanulok",
    points: [
      "Wat Yai Chaimongkol e Wat Mahatat em Ayutthaya",
      "Angthong: maior imagem de Buda do mundo, com 93 m",
      "Almoço incluído · seguimos para Phitsanulok",
    ],
  },
  {
    day: "Dia 11 — 22/11 (dom)",
    title: "Phitsanulok → Sukhothai → Chiang Rai",
    points: [
      "Parque Histórico de Sukhothai, berço da arte tailandesa",
      "Continuação por estrada até Chiang Rai",
      "Hospedagem no The Heritage",
    ],
  },
  {
    day: "Dia 12 — 23/11 (seg)",
    title: "Chiang Rai → Chiang Mai",
    points: [
      "Templo Branco (Wat Rong Khun) e Templo Azul (Wat Rong Suea Ten)",
      "Continuação para Chiang Mai · hospedagem",
    ],
  },
  {
    day: "Dia 13 — 24/11 (ter)",
    title: "Chiang Mai — Festival das Lanternas",
    points: [
      "Wat Phra Singh e Wat Chedi Luang pela manhã",
      "Cerimônia Loi Krathong com oferenda de kratong",
      "Refeição rápida típica · danças e cânticos de monges",
      "Espetáculo de soltura de lanternas no céu (Yi Peng)",
    ],
  },
  {
    day: "Dia 14 — 25/11 (qua)",
    title: "Chiang Mai — Eco Valley",
    points: [
      "Santuário de elefantes em Eco Valley",
      "Conservação, alimentação e banho com os animais",
      "Tarde livre em Chiang Mai",
    ],
  },
  {
    day: "Dia 15 — 26/11 (qui)",
    title: "Chiang Mai → Dubai → São Paulo",
    points: [
      "Traslado ao aeroporto e voo internacional via Dubai",
      "Conexão Emirates com destino a Guarulhos",
      "Fim dos nossos serviços",
    ],
  },
];

const included = [
  "Bilhete aéreo São Paulo / Dubai / Phuket // Bangkok / Dubai / São Paulo (Emirates), classe econômica, com duas bagagens de 23 kg",
  "Voos internos com franquia de uma mala de 23 kg",
  "Hotéis de primeira categoria com café da manhã",
  "Guia acompanhante desde o Brasil",
  "Traslados com assistência em português/espanhol",
  "Passeio às Ilhas Phi Phi em lancha rápida",
  "Bangkok: Palácio Real e Buda de Esmeralda",
  "Ayutthaya: Wat Yai Chaimongkol e Wat Mahatat",
  "Chiang Rai: Templo Azul e Templo Branco",
  "Chiang Mai: Santuário dos Elefantes (Eco Valley) e Festival das Lanternas",
  "6 almoços (sem bebidas) e 1 refeição rápida no festival",
  "Tag de rastreio de bagagem",
  "Acesso à Sala VIP W Premium no aeroporto de Guarulhos",
  "Cartão de assistência GTA FLOT 75 com cobertura de US$ 75.000",
  "Seguro cancelamento para passageiros até 85 anos: US$ 3.000",
];

const notIncluded = [
  "Taxas de embarque",
  "IOF",
  "Taxas de aeroporto e combustível (US$ 639)",
  "Bebidas nas refeições",
  "Gorjetas a guias, motoristas e garçons",
  "Despesas de carregadores de malas",
  "Despesas pessoais (frigobar, telefonemas, lavanderia, etc.)",
  "Taxas, impostos e afins",
];

const faqs = [
  {
    q: "Qual a condição de pagamento?",
    a: "25% de entrada no ato da reserva e o saldo (75%) em 9 parcelas sem juros no cartão de crédito. Valores em dólar, sujeitos a disponibilidade e confirmação aérea.",
  },
  {
    q: "Quando acontece o Festival das Lanternas?",
    a: "Yi Peng e Loi Krathong são celebrados na lua cheia do 12º mês do calendário lunar tailandês — em 2026 acontecem em Chiang Mai exatamente durante nossa estada, no dia 24/11.",
  },
  {
    q: "Quais documentos e vacinas são necessários?",
    a: "Passaporte com validade mínima de 6 meses a partir da data de retorno. Brasileiros não precisam de visto, mas é obrigatório preencher o formulário eletrônico de entrada (Arrival Card) e apresentar comprovante de vacina contra febre amarela.",
  },
  {
    q: "Como é o ritmo da viagem?",
    a: "É uma viagem rica em deslocamentos, com voos domésticos e trechos rodoviários no norte. As atividades são moderadas, com caminhadas leves em templos e parques históricos. Recomendamos roupas leves, calçado confortável e disposição para o calor tropical.",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Grupo Tailândia 2026 com Festival das Lanternas — Create Travel",
  description:
    "Grupo organizado de 15 dias pela Tailândia: Phuket, Phi Phi, Bangkok, Ayutthaya, Sukhothai, Chiang Rai e Chiang Mai durante o Festival das Lanternas (Yi Peng & Loi Krathong). Saída 12/11/2026 com guia acompanhante desde o Brasil e voos Emirates.",
  image: heroImg,
  touristType: "Cultura, natureza, festivais tradicionais",
  itinerary: itinerary.map((d, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${d.day} — ${d.title}`,
  })),
  offers: {
    "@type": "Offer",
    price: "5978.00",
    priceCurrency: "USD",
    availability: "https://schema.org/LimitedAvailability",
    validThrough: "2026-11-12",
  },
  provider: {
    "@type": "TravelAgency",
    name: "Create Travel",
    url: CONTACT.domain,
  },
};

const GrupoTailandia2026 = () => {
  const ctaLink = generateWhatsAppLink(whatsappParams);

  return (
    <div className="min-h-screen">
      <SEO
        title="Grupo Tailândia 2026 — Festival das Lanternas | Create Travel"
        description="15 dias pela Tailândia em grupo com guia do Brasil: Phuket, Phi Phi, Bangkok, Ayutthaya, Sukhothai e Chiang Mai durante o Festival das Lanternas. Saída 12/11/2026. Entrada 25% + 9x sem juros."
        canonicalPath="/grupos/tailandia-2026"
        ogImage={heroImg}
        ogType="article"
        jsonLd={jsonLd}
        keywords="viagem em grupo Tailândia 2026, Festival das Lanternas Chiang Mai, Yi Peng Loi Krathong, grupo com guia do Brasil, Phuket Phi Phi Bangkok, Sukhothai Ayutthaya, Create Travel Tailândia"
      />
      <Header />
      <WhatsAppButton variant="float" params={whatsappParams} />

      {/* Hero */}
      <section className="relative h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Festival das Lanternas (Yi Peng) em Chiang Mai, Tailândia, com lanternas iluminando o céu noturno"
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
              Grupo · 12 a 26 de novembro de 2026
            </p>
            <h1 className="heading-hero text-white mb-6">
              Tailândia com Festival das Lanternas
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
              15 dias entre praias, templos e tradições milenares — incluindo a
              noite mágica do Yi Peng em Chiang Mai, quando o céu se transforma
              em um mar de luz.
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
            { icon: Calendar, label: "Datas", value: "12 a 26/11/2026" },
            { icon: Users, label: "Perfil", value: "Grupo com guia do Brasil" },
            { icon: Plane, label: "Voos", value: "Emirates · via Dubai" },
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
              Tradições milenares com a segurança de um grupo
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
              Voos pela Emirates Airlines
            </h2>
            <p className="text-white/85 leading-relaxed mb-4">
              Classe econômica com 2 bagagens despachadas de até 23 kg cada por
              pessoa nos trechos internacionais. Voar com a Emirates é sinônimo
              de conforto, entretenimento individual e atendimento impecável.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Ida
              </p>
              <p className="font-serif text-lg">
                GRU → Dubai → Phuket
              </p>
              <p className="text-white/75 text-sm mt-1">
                13/11 EK 262 01h30 · 14/11 EK 378 03h00 — chegada 12h05
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Volta
              </p>
              <p className="font-serif text-lg">
                Chiang Mai → Dubai → GRU
              </p>
              <p className="text-white/75 text-sm mt-1">
                26/11 conexão Emirates via Dubai com destino a Guarulhos
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              { city: "Phuket", hotel: "Graceland & Spa" },
              { city: "Bangkok", hotel: "Ramada Riverside" },
              { city: "Ayutthaya", hotel: "Classic Kameo Ayutthaya" },
              { city: "Phitsanulok", hotel: "Pattara Phitsanulok" },
              { city: "Chiang Rai", hotel: "The Heritage" },
              { city: "Chiang Mai", hotel: "Kantary Hills / Centara Riverside" },
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
            A partir de US$ 5.978 por pessoa
          </h2>
          <p className="text-white/85 mb-8">
            Em acomodação dupla. Valores em dólar, por pessoa, acrescidos de IOF
            e taxas de aeroporto e combustível (US$ 639). Sujeitos a
            disponibilidade e confirmação aérea no momento da reserva.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto triplo
              </p>
              <p className="font-serif text-2xl font-semibold">US$ 5.946</p>
              <p className="text-white/70 text-xs mt-1">+ IOF US$ 148</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6 ring-2 ring-gold/60">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto duplo
              </p>
              <p className="font-serif text-2xl font-semibold">US$ 5.978</p>
              <p className="text-white/70 text-xs mt-1">+ IOF US$ 150</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto individual
              </p>
              <p className="font-serif text-2xl font-semibold">US$ 6.789</p>
              <p className="text-white/70 text-xs mt-1">+ IOF US$ 175</p>
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
            Vagas limitadas — grupo com guia do Brasil
          </h2>
          <p className="text-muted-foreground mb-8">
            Fale com um consultor Create Travel e reserve sua vaga no Grupo
            Tailândia 2026 com Festival das Lanternas. Atendimento personalizado
            pelo WhatsApp.
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

export default GrupoTailandia2026;
