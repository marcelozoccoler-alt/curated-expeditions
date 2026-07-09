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
import heroImg from "@/assets/grupo-vietna-laos-camboja-2027.jpg";
import { getHotelUrl, buildHotelsJsonLd, buildHotelsFAQs, buildHotelsKeywords } from "@/lib/groupHotels";

const whatsappParams = {
  type: "Roteiro" as const,
  name: "Grupo Vietnã, Laos & Camboja 2027 — Carnaval (saída 01/02/2027)",
};

const benefits = [
  {
    title: "Carnaval no Sudeste Asiático",
    desc: "Saída especial 01 a 17 de fevereiro de 2027: 17 dias de imersão entre Vietnã, Laos e Camboja com guia desde o Brasil.",
  },
  {
    title: "Cruzeiro pela Baía de Halong",
    desc: "Pernoite a bordo entre ilhas de calcário emergindo das águas esmeralda — Patrimônio da UNESCO e um dos cenários mais icônicos da Ásia.",
  },
  {
    title: "Templos de Angkor",
    desc: "Dia inteiro em Siem Reap com Angkor Thom, Templo Bayon, Ta Prohm, Angkor Wat e pôr do sol no Bakheng + jantar com show de dança Apsara.",
  },
  {
    title: "Luang Prabang e o Tak Bat",
    desc: "Cerimônia das Almas ao amanhecer, Wat Xieng Thong, cachoeiras de Kuang Si e travessia de barco pelo Mekong até as cavernas Pak Ou.",
  },
  {
    title: "Hoi An, Ba Na Hills e Hue",
    desc: "Cidade antiga iluminada por lanternas, a icônica Golden Bridge no topo de Ba Na Hills e a cidade imperial de Hue.",
  },
  {
    title: "Guia acompanhante desde o Brasil",
    desc: "Coordenador Create Travel embarcando em Guarulhos, guia local em espanhol e hotéis de primeira categoria em todo o percurso.",
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
      "Voo TK 16 às 04h10",
      "Chegada Istambul às 22h35",
      "Conexão para Hanói",
    ],
  },
  {
    day: "Dia 3 — 03/02 (qua)",
    title: "Istambul → Hanói",
    points: [
      "Voo TK 164 às 02h25 · chegada 15h25",
      "Traslado e acomodação no hotel",
      "Resto do dia livre",
    ],
  },
  {
    day: "Dia 4 — 04/02 (qui)",
    title: "Hanói · dia completo",
    points: [
      "Mausoléu de Ho Chi Minh e casa sobre palafitas",
      "Templo da Literatura e Pagode de Um Pilar",
      "Templo Ngoc Son e cicloriquixá no Bairro Antigo",
    ],
  },
  {
    day: "Dia 5 — 05/02 (sex)",
    title: "Hanói → Baía de Halong",
    points: [
      "Cruzeiro entre as ilhas de calcário",
      "Almoço e jantar a bordo · pôr do sol espetacular",
      "Pernoite no L'Amour Cruise",
    ],
  },
  {
    day: "Dia 6 — 06/02 (sáb)",
    title: "Halong → Hanói → Luang Prabang",
    points: [
      "Tai Chi no deque ao amanhecer",
      "Voo Hanói → Luang Prabang (Laos)",
      "Traslado ao hotel e tempo livre",
    ],
  },
  {
    day: "Dia 7 — 07/02 (dom)",
    title: "Luang Prabang · Tak Bat e Kuang Si",
    points: [
      "Cerimônia das Almas ao amanhecer",
      "Museu Nacional, Wat Xieng Thong e Wat Visoun",
      "Cachoeira Kuang Si",
    ],
  },
  {
    day: "Dia 8 — 08/02 (seg)",
    title: "Luang Prabang → Siem Reap",
    points: [
      "Monte Phousi com vista panorâmica",
      "Barco pelo Mekong até as cavernas Pak Ou",
      "Voo a Siem Reap (Camboja)",
    ],
  },
  {
    day: "Dia 9 — 09/02 (ter)",
    title: "Siem Reap · Templos de Angkor",
    points: [
      "Angkor Thom, Templo Bayon e Ta Prohm",
      "Angkor Wat · Patrimônio da UNESCO",
      "Pôr do sol no Bakheng + jantar com dança Apsara",
    ],
  },
  {
    day: "Dia 10 — 10/02 (qua)",
    title: "Siem Reap → Da Nang → Hoi An",
    points: [
      "Passeio de barco no Lago Tonle Sap",
      "Vilas flutuantes do Camboja",
      "Voo a Da Nang e traslado a Hoi An",
    ],
  },
  {
    day: "Dia 11 — 11/02 (qui)",
    title: "Hoi An · cidade antiga",
    points: [
      "Ponte Japonesa, Pagode Phuoc Kien e Casa Tran Phu",
      "Passeio de barco no Rio Hoai",
      "Lanternas flutuantes ao cair da noite",
    ],
  },
  {
    day: "Dia 12 — 12/02 (sex)",
    title: "Hoi An · Ba Na Hills",
    points: [
      "Teleférico mais longo do mundo (fio único)",
      "Golden Bridge e Pagode Linh Ung",
      "Parque temático Fantasy no topo",
    ],
  },
  {
    day: "Dia 13 — 13/02 (sáb)",
    title: "Hoi An → Hue",
    points: [
      "Cidadela Imperial de Hue",
      "Cruzeiro no Rio Perfume e Pagode Thien Mu",
      "Túmulo do Rei Khai Dinh",
    ],
  },
  {
    day: "Dia 14 — 14/02 (dom)",
    title: "Hue → Saigon · Delta do Mekong",
    points: [
      "Voo a Saigon · sampana pelo Rio Tien em My Tho",
      "Doce de coco e vinho de arroz artesanal",
      "Pomares tropicais e canais",
    ],
  },
  {
    day: "Dia 15 — 15/02 (seg)",
    title: "Saigon · cidade e Cu Chi",
    points: [
      "Catedral de Notre Dame, Palácio da Reunificação e Correio Central",
      "Mercado Ben Thanh e Museu da Guerra",
      "Túneis subterrâneos de Cu Chi",
    ],
  },
  {
    day: "Dia 16 — 16/02 (ter)",
    title: "Saigon → Istambul → São Paulo",
    points: [
      "Voo TK 251 às 06h35 · chegada Istambul 13h50",
      "Conexão TK 215 às 20h30",
      "Pernoite a bordo",
    ],
  },
  {
    day: "Dia 17 — 17/02 (qua)",
    title: "São Paulo",
    points: [
      "Chegada em Guarulhos às 04h10",
      "Fim dos nossos serviços",
    ],
  },
];

const included = [
  "Bilhete aéreo internacional em classe econômica São Paulo / Istambul / Hanói // Saigon / Istambul / São Paulo pela Turkish Airlines, com franquia de 1 mala de 23kg",
  "Voos domésticos Hanói / Luang Prabang / Siem Reap / Da Nang // Hue / Saigon com fornecedor local, franquia de 1 mala de 20kg",
  "Hotéis de primeira categoria com café da manhã",
  "Cruzeiro com pernoite na Baía de Halong (L'Amour Cruise) com almoço e jantar a bordo",
  "Guia acompanhante desde o Brasil e guia local em espanhol",
  "Traslados privados com assistência em todas as cidades",
  "Todas as visitas em privativo com entradas conforme o roteiro",
  "Jantar com show de dança Apsara em Siem Reap",
  "Experiências no Delta do Mekong: sampana, doce de coco e vinho de arroz",
];

const notIncluded = [
  "Taxas de embarque",
  "IOF",
  "Taxas de aeroporto e combustível (USD 749)",
  "Vistos: Laos (USD 50), Vietnã (USD 50) e Camboja (USD 36) — feitos online antes do embarque",
  "Formulário Camboja E-Arrival (gratuito, online, 7 dias antes da chegada)",
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
    q: "Quais documentos e vistos são necessários?",
    a: "Passaporte com validade mínima de 6 meses a partir da data de retorno e 2 folhas em branco para cada país visitado. Vistos online antes do embarque: Laos (laoevisa.gov.la — USD 50, entrada única), Vietnã (evisa.gov.vn — USD 50, múltiplas entradas válido 30 dias) e Camboja (evisa.gov.kh — USD 36, entrada única). Além do visto, é preciso preencher o formulário Camboja E-Arrival (arrival.gov.kh) 7 dias antes da chegada — será gerado um QR code. Vacina de febre amarela obrigatória. Leve 2 fotos 3x4 por precaução.",
  },
  {
    q: "Como é o clima em fevereiro no Sudeste Asiático?",
    a: "Fevereiro é uma das melhores épocas para a região: estação seca, dias ensolarados e temperaturas agradáveis. No norte do Vietnã (Hanói, Halong) os dias são frescos (15–22 °C). No centro e sul (Hoi An, Saigon) e em Siem Reap o clima é tropical e mais quente (25–32 °C). Em Luang Prabang, manhãs frescas. Leve roupas em camadas.",
  },
  {
    q: "Posso viajar sozinho(a)?",
    a: "Sim. Trabalhamos com apartamento triplo, duplo ou individual (com suplemento). Podemos emparelhar você com outra pessoa do grupo do mesmo gênero, mediante disponibilidade.",
  },
  {
    q: "Como é o ritmo da viagem com tantos países?",
    a: "São 17 dias com curadoria que equilibra cultura, conforto e tempo livre. Os voos internos são curtos (todos com fornecedor local) e os traslados são privativos com guia. Há momentos contemplativos (Tak Bat, cruzeiro em Halong, lanternas de Hoi An) e dias mais intensos de visitas (Angkor, Hue, Saigon).",
  },
];

const hotelsForSeo = [{ city: "Hanói", hotel: "Le Jardin Haute Couture" },
              { city: "Halong", hotel: "L'Amour Cruise" },
              { city: "Luang Prabang", hotel: "Choasis" },
              { city: "Siem Reap", hotel: "Prince D'Angkor" },
              { city: "Hoi An", hotel: "Historic Hoi An" },
              { city: "Hue", hotel: "White Lotus Hue" },
              { city: "Saigon", hotel: "Harmony Saigon" }];
const hotelsSeoJsonLd = buildHotelsJsonLd(hotelsForSeo, "Grupo Vietnã, Laos & Camboja 2027 — Carnaval — Create Travel", "/grupos/vietna-laos-camboja-2027");
const hotelsSeoFaqs = buildHotelsFAQs(hotelsForSeo, "Grupo Vietnã, Laos & Camboja 2027 — Carnaval — Create Travel", "/grupos/vietna-laos-camboja-2027");
const hotelsSeoKeywords = buildHotelsKeywords(hotelsForSeo);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Grupo Vietnã, Laos & Camboja 2027 — Carnaval — Create Travel",
  description:
    "Grupo organizado de 17 dias pelo Sudeste Asiático no Carnaval 2027: Hanói, Baía de Halong, Luang Prabang, Siem Reap (Angkor Wat), Hoi An, Ba Na Hills, Hue e Saigon. Saída 01/02/2027 com guia desde o Brasil e voos Turkish Airlines.",
  image: heroImg,
  touristType: "Cultura, história, espiritualidade, Patrimônio UNESCO",
  itinerary: itinerary.map((d, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${d.day} — ${d.title}`,
  })),
  offers: {
    "@type": "Offer",
    price: "6798.00",
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

const GrupoVietnaLaosCamboja2027 = () => {
  const ctaLink = generateWhatsAppLink(whatsappParams);

  return (
    <div className="min-h-screen">
      <SEO
        title="Grupo Vietnã, Laos & Camboja 2027 — Carnaval com guia do Brasil | Create Travel"
        description="17 dias pelo Sudeste Asiático em grupo com guia do Brasil: Hanói, cruzeiro em Halong, Luang Prabang, Angkor Wat, Hoi An, Hue e Saigon. Saída 01/02/2027 (Carnaval) pela Turkish Airlines. Entrada 25% + 9x sem juros."
        canonicalPath="/grupos/vietna-laos-camboja-2027"
        ogImage={heroImg}
        ogType="article"
        jsonLd={[jsonLd, ...hotelsSeoJsonLd]}
        keywords={`viagem em grupo Vietnã Laos Camboja 2027, Carnaval Sudeste Asiático, Angkor Wat com guia do Brasil, Halong Bay Hoi An Luang Prabang, Create Travel Ásia, ${hotelsSeoKeywords}`}
      />
      <Header />
      <WhatsAppButton variant="float" params={whatsappParams} />

      {/* Hero */}
      <section className="relative h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Junco tradicional com velas vermelhas navegando entre as ilhas de calcário da Baía de Halong ao pôr do sol"
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
              Grupo · 01 a 17 de fevereiro de 2027
            </p>
            <h1 className="heading-hero text-white mb-6">
              Vietnã, Laos & Camboja
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
              17 dias entre templos e tradições: Hanói, cruzeiro pela Baía de
              Halong, Luang Prabang, os templos de Angkor, Hoi An, Hue e Saigon
              — com guia do Brasil e voos Turkish Airlines.
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
            { icon: Calendar, label: "Datas", value: "01 a 17/02/2027" },
            { icon: Users, label: "Perfil", value: "Grupo com guia do Brasil" },
            { icon: Plane, label: "Voos", value: "Turkish Airlines" },
            { icon: Hotel, label: "Hotéis", value: "Primeira categoria" },
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
              Entre templos, tradições e cenários cinematográficos
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
              entretenimento. Conexão em Istambul e voos domésticos
              Hanói–Luang Prabang–Siem Reap–Da Nang e Hue–Saigon emitidos com
              fornecedor local.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Ida
              </p>
              <p className="font-serif text-lg">GRU → Istambul → Hanói</p>
              <p className="text-white/75 text-sm mt-1">
                02/02 TK 16 às 04h10 · conexão TK 164 às 02h25 · chegada Hanói
                03/02 às 15h25
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Voos domésticos
              </p>
              <p className="font-serif text-lg">
                Hanói → Luang Prabang → Siem Reap → Da Nang // Hue → Saigon
              </p>
              <p className="text-white/75 text-sm mt-1">
                Todos os trechos internos com fornecedor local incluídos
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Volta
              </p>
              <p className="font-serif text-lg">Saigon → Istambul → GRU</p>
              <p className="text-white/75 text-sm mt-1">
                16/02 TK 251 às 06h35 · conexão TK 215 às 20h30 · chegada GRU
                17/02 às 04h10
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
              17 dias — dia a dia
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
              { city: "Hanói", hotel: "Le Jardin Haute Couture" },
              { city: "Halong", hotel: "L'Amour Cruise" },
              { city: "Luang Prabang", hotel: "Choasis" },
              { city: "Siem Reap", hotel: "Prince D'Angkor" },
              { city: "Hoi An", hotel: "Historic Hoi An" },
              { city: "Hue", hotel: "White Lotus Hue" },
              { city: "Saigon", hotel: "Harmony Saigon" },
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
            A partir de US$ 6.798 por pessoa
          </h2>
          <p className="text-white/85 mb-8">
            Em acomodação dupla. Valores em dólar, por pessoa, acrescidos de IOF
            e taxas de aeroporto e combustível (USD 749). Sujeitos a
            disponibilidade e confirmação aérea no momento da reserva.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto triplo
              </p>
              <p className="font-serif text-2xl font-semibold">US$ 6.768</p>
              <p className="text-white/70 text-xs mt-1">+ IOF USD 171</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6 ring-2 ring-gold/60">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto duplo
              </p>
              <p className="font-serif text-2xl font-semibold">US$ 6.798</p>
              <p className="text-white/70 text-xs mt-1">+ IOF USD 172</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto individual
              </p>
              <p className="font-serif text-2xl font-semibold">US$ 7.810</p>
              <p className="text-white/70 text-xs mt-1">+ IOF USD 204</p>
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
            Vietnã, Laos & Camboja 2027 (Carnaval). Atendimento personalizado
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

export default GrupoVietnaLaosCamboja2027;
