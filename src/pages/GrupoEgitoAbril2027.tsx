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
import heroImg from "@/assets/grupo-egito-abril-2027.jpg";
import { getHotelUrl, buildHotelsJsonLd, buildHotelsFAQs, buildHotelsKeywords } from "@/lib/groupHotels";

const whatsappParams = {
  type: "Roteiro" as const,
  name: "Grupo Egito Eterno · Abril 2027 (saída 20/04/2027)",
};

const benefits = [
  {
    title: "Pirâmides de Gizé e a Esfinge",
    desc: "Frente a frente com Quéops, Quéfren e Miquerinos — as únicas das Sete Maravilhas do Mundo Antigo que resistiram ao tempo — e com a enigmática Esfinge.",
  },
  {
    title: "Grande Museu Egípcio (GEM)",
    desc: "O maior museu arqueológico do mundo dedicado a uma única civilização, com mais de 100 mil peças, ao lado das pirâmides. Mais o Museu Nacional da Civilização Egípcia e suas múmias reais.",
  },
  {
    title: "Cruzeiro pelo Nilo de Luxor a Assuã",
    desc: "Quatro noites a bordo, com pensão completa, navegando entre Karnak, Vale dos Reis, Edfu, Kom Ombo e o Templo de Filae.",
  },
  {
    title: "Sharm El Sheikh tudo incluído",
    desc: "Encerramento no Mar Vermelho: águas cristalinas, recifes de coral e três noites de resort all inclusive (sem bebidas alcoólicas).",
  },
  {
    title: "Guia acompanhante desde o Brasil",
    desc: "Coordenador embarcando com o grupo em Guarulhos e guias locais em português/espanhol em todas as visitas.",
  },
  {
    title: "Voos Emirates",
    desc: "Conforto, entretenimento individual e serviço de bordo premiado, com conexão em Dubai e 1 bagagem de 23kg incluída.",
  },
];

const itinerary = [
  {
    day: "Dia 1 — 20/04 (ter)",
    title: "São Paulo → Dubai",
    points: [
      "Apresentação em Guarulhos com o coordenador",
      "Voo Emirates EK 262 às 01h35",
      "Chegada a Dubai prevista às 23h00",
    ],
  },
  {
    day: "Dia 2 — 21/04 (qua)",
    title: "Dubai → Cairo",
    points: [
      "Conexão Emirates EK 929 às 04h00",
      "Chegada ao Cairo às 05h50 · imigração e alfândega",
      "Recepção e traslado ao hotel",
    ],
  },
  {
    day: "Dia 3 — 22/04 (qui)",
    title: "Cairo · Múmias reais, Cidadela e Khan El-Khalili",
    points: [
      "Museu Nacional da Civilização Egípcia (22 múmias e 17 sarcófagos reais)",
      "Cidadela de Saladino e Mesquita de Alabastro (Mohamed Ali)",
      "Bairro Copta e Igreja de São Sérgio · almoço incluído",
      "Mercado de Khan El-Khalili ao fim do dia",
    ],
  },
  {
    day: "Dia 4 — 23/04 (sex)",
    title: "Cairo · Pirâmides de Gizé e Grande Museu Egípcio",
    points: [
      "Pirâmides de Gizé, Esfinge e Templo do Vale",
      "Almoço incluído em restaurante local",
      "Grande Museu Egípcio (GEM) e a estátua colossal de Ramsés II",
      "Opcional: espetáculo de Luz e Som nas pirâmides",
    ],
  },
  {
    day: "Dia 5 — 24/04 (sáb)",
    title: "Cairo → Luxor · embarque no cruzeiro",
    points: [
      "Voo doméstico ao Luxor · Templo de Karnak",
      "Embarque no cruzeiro · almoço a bordo",
      "Templo de Luxor à tarde · jantar e pernoite a bordo",
    ],
  },
  {
    day: "Dia 6 — 25/04 (dom)",
    title: "Luxor · Esna · Edfu",
    points: [
      "Vale dos Reis e a tumba de Tutancâmon",
      "Templo Funerário da Rainha Hatshepsut e Colossos de Memnon",
      "Navegação até Edfu pela eclusa de Esna · pensão completa a bordo",
      "Opcional: voo de balão sobre o Nilo ao amanhecer",
    ],
  },
  {
    day: "Dia 7 — 26/04 (seg)",
    title: "Edfu · Kom Ombo · Assuã",
    points: [
      "Passeio de charrete até o Templo de Hórus em Edfu",
      "Templo de Kom Ombo, dedicado a Sobek e Haroeris",
      "Almoço e jantar a bordo · pernoite em Assuã",
    ],
  },
  {
    day: "Dia 8 — 27/04 (ter)",
    title: "Assuã · Templo de Filae e feluca",
    points: [
      "Templo de Filae, dedicado à deusa Ísis",
      "Passeio em feluca pela Ilha Elefantina, Jardim Botânico e Mausoléu do Aga Khan",
      "Pensão completa e pernoite a bordo",
      "Opcional: excursão ao Templo de Abu Simbel ao amanhecer",
    ],
  },
  {
    day: "Dia 9 — 28/04 (qua)",
    title: "Assuã → Sharm El Sheikh",
    points: [
      "Traslado ao aeroporto de Assuã · voo via Cairo",
      "Chegada e traslado ao resort no Mar Vermelho",
      "Hospedagem tudo incluído (sem bebidas alcoólicas)",
    ],
  },
  {
    day: "Dia 10 — 29/04 (qui)",
    title: "Sharm El Sheikh · dia livre",
    points: [
      "Praia e estrutura do resort · tudo incluído",
      "Opcional: passeio de barco para snorkel nos recifes",
    ],
  },
  {
    day: "Dia 11 — 30/04 (sex)",
    title: "Sharm El Sheikh · dia livre",
    points: [
      "Descanso, mar e contemplação",
      "Hospedagem tudo incluído (sem bebidas alcoólicas)",
    ],
  },
  {
    day: "Dia 12 — 01/05 (sáb)",
    title: "Sharm El Sheikh → Cairo",
    points: [
      "Voo doméstico de volta ao Cairo",
      "Traslado ao hotel nas proximidades do aeroporto",
      "Em horário apropriado, traslado ao aeroporto internacional",
    ],
  },
  {
    day: "Dia 13 — 02/05 (dom)",
    title: "Cairo → Dubai → São Paulo",
    points: [
      "Voo Emirates EK 926 às 02h45 · chegada a Dubai às 07h10",
      "Conexão Emirates EK 261 às 09h05",
      "Chegada em Guarulhos às 17h40 · fim dos nossos serviços",
    ],
  },
];

const included = [
  "Bilhete aéreo em classe econômica São Paulo / Cairo / Luxor / Assuã / Sharm El Sheikh / Cairo / São Paulo, com 1 bagagem de 23kg",
  "Hotéis de primeira categoria com café da manhã",
  "Cruzeiro pelo Nilo de Luxor a Assuã",
  "Guia acompanhante desde o Brasil",
  "Traslados com assistência em português/espanhol em Cairo, Luxor, Assuã e Sharm El Sheikh",
  "Visitas com guia local em português/espanhol conforme roteiro (Cidadela de Saladino, Mesquita Mohamed Ali, Bairro Copta, Museu Nacional da Civilização Egípcia, Khan El-Khalili, Pirâmides de Gizé, Esfinge e Templo do Vale, Grande Museu Egípcio, Karnak, Templo de Luxor, Vale dos Reis, Templo de Hatshepsut, Colossos de Memnon, Edfu, Kom Ombo, Filae e feluca em Assuã)",
  "Entradas conforme o roteiro",
  "06 almoços e 04 jantares (sem bebidas) e tudo incluído em Sharm El Sheikh (sem bebidas alcoólicas)",
  "Visto de entrada no Egito",
  "Serviço de rastreamento e localização de bagagem Blue Ribbon",
  "Acesso à Sala VIP W Premium no aeroporto de Guarulhos",
  "Cartão de assistência GTA FLOT 75 · cobertura médica de US$ 75.000",
  "Seguro cancelamento Plus Reason até 85 anos · US$ 3.000",
];

const notIncluded = [
  "Taxas de embarque",
  "IOF",
  "Taxas de aeroporto e combustível (US$ 625)",
  "Bebidas nas refeições e bebidas alcoólicas em Sharm El Sheikh",
  "Gorjetas a guias, motoristas, garçons e carregadores de malas",
  "Passeios opcionais (Abu Simbel, voo de balão, Luz e Som, snorkel)",
  "Despesas pessoais (frigobar, telefonemas, lavanderia)",
  "Documentação de viagem",
  "Taxas, impostos e afins",
];

const faqs = [
  {
    q: "Qual a condição de pagamento?",
    a: "25% de entrada no ato da reserva e o saldo (75%) em 9 parcelas sem juros no cartão de crédito — condição válida para a parte terrestre do programa. A parte aérea é cotada separadamente e o parcelamento segue as condições da companhia aérea escolhida, que mudam de uma cia para outra. Valores em dólar, por pessoa, sujeitos a disponibilidade e confirmação aérea.",
  },
  {
    q: "Preciso de visto ou vacinas para o Egito?",
    a: "Sim, é necessário visto de entrada — já incluído no pacote. Também é exigida a vacina de febre amarela e passaporte com validade mínima de 6 meses a partir da data de retorno.",
  },
  {
    q: "Como é o clima no Egito em abril?",
    a: "Abril é um dos melhores meses para visitar o Egito: primavera com temperaturas agradáveis (24–32°C durante o dia), noites frescas no deserto e luz dourada ideal para fotografia nos templos.",
  },
  {
    q: "Vale a pena o opcional de Abu Simbel?",
    a: "Sim. Para muitos viajantes, Abu Simbel é o conjunto monumental mais impressionante do Egito. A saída é por volta das 03h30 de Assuã, com cerca de 3 horas de estrada, e o nascer do sol sobre os colossos de Ramsés II compensa cada minuto.",
  },
  {
    q: "Como funciona o cruzeiro pelo Nilo?",
    a: "São quatro noites a bordo entre Luxor e Assuã, com cabine, pensão completa (sem bebidas) e visitas guiadas em terra: Karnak, Templo de Luxor, Vale dos Reis, Hatshepsut, Edfu, Kom Ombo e Filae.",
  },
  {
    q: "Posso viajar sozinho(a)? Tem suplemento single?",
    a: "Sim. Trabalhamos com apartamento duplo, triplo ou individual.",
  },
  {
    q: "É uma viagem indicada para mulheres viajando sozinhas ou em dupla?",
    a: "Sim — é um dos perfis mais frequentes dos nossos grupos. Muitas viajantes acima dos 50 anos embarcam sozinhas ou com uma amiga e encontram um grupo acolhedor, ritmo confortável, traslados sempre assistidos e um coordenador brasileiro disponível do início ao fim. Você nunca precisa resolver nada sozinha: bagagem, check-ins, entradas e horários ficam com a gente.",
  },
  {
    q: "O ritmo do roteiro é confortável para quem tem mais de 50 anos?",
    a: "Sim. O roteiro alterna dias de visitas com dias de descanso: quatro noites de cruzeiro pelo Nilo (você dorme no mesmo quarto enquanto o cenário muda) e três noites de resort tudo incluído em Sharm El Sheikh. As visitas têm transporte privativo com ar-condicionado, paradas para descanso, almoços incluídos e guia em português explicando cada templo.",
  },
  {
    q: "Preciso falar inglês ou árabe para viajar no grupo?",
    a: "Não. Do embarque em Guarulhos ao retorno, você é acompanhada em português: coordenador embarcando com o grupo e guias locais falando português/espanhol em todas as visitas e traslados.",
  },
  {
    q: "Quantas pessoas viajam no grupo?",
    a: "Trabalhamos com vagas limitadas, para manter atenção individual, mobilidade nos templos e clima de convivência. Por isso a reserva antecipada é importante.",
  },
];


const hotelsForSeo = [
  { city: "Cairo", hotel: "Sheraton Cairo" },
  { city: "Cruzeiro no Nilo", hotel: "Renaissance ou Radamis 1" },
  { city: "Sharm El Sheikh", hotel: "JAZ Mirabel Resort" },
  { city: "Cairo (retorno)", hotel: "Intercontinental City Stars" },
];
const GROUP_NAME = "Grupo Egito Eterno Abril 2027 — Create Travel";
const CANONICAL = "/grupos/egito-abril-2027";
const hotelsSeoJsonLd = buildHotelsJsonLd(hotelsForSeo, GROUP_NAME, CANONICAL);
const hotelsSeoFaqs = buildHotelsFAQs(hotelsForSeo, GROUP_NAME, CANONICAL);
const hotelsSeoKeywords = buildHotelsKeywords(hotelsForSeo);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  "@id": `${CONTACT.domain}${CANONICAL}#trip`,
  url: `${CONTACT.domain}${CANONICAL}`,
  name: GROUP_NAME,
  description:
    "Grupo organizado de 13 dias pelo Egito na primavera: Cairo, Pirâmides de Gizé, Grande Museu Egípcio, Luxor, cruzeiro pelo Nilo até Assuã, Edfu, Kom Ombo, Filae e Sharm El Sheikh no Mar Vermelho. Saída 20/04/2027 com guia acompanhante desde o Brasil e voos Emirates.",
  image: heroImg,
  touristType: "História, arqueologia, cruzeiro fluvial, praia",
  itinerary: { "@type": "ItemList", itemListElement: itinerary.map((d, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${d.day} — ${d.title}`,
  })) },
  offers: {
    "@type": "Offer",
    price: "4895.00",
    priceCurrency: "USD",
    availability: "https://schema.org/LimitedAvailability",
    validThrough: "2027-04-20", priceValidUntil: "2027-04-20",
  },
  provider: { "@id": "https://createtravel.tur.br/#organization" },
};

const GrupoEgitoAbril2027 = () => {
  const ctaLink = generateWhatsAppLink(whatsappParams);

  return (
    <div className="min-h-screen">
      <SEO
        title="Grupo Egito · Abril 2027 — Nilo, Pirâmides e Mar Vermelho | Create Travel"
        description="13 dias no Egito em abril de 2027: Cairo, Pirâmides de Gizé, Grande Museu Egípcio, Luxor, cruzeiro pelo Nilo até Assuã e Sharm El Sheikh. Saída 20/04/2027 pela Emirates com guia do Brasil."
        canonicalPath={CANONICAL}
        ogImage={heroImg}
        ogType="article"
        jsonLd={[jsonLd, ...hotelsSeoJsonLd]}
        keywords={`viagem em grupo para o Egito, viagem em grupo Egito 2027, excursão para o Egito com guia brasileiro, grupo brasileiro Egito abril 2027, viagem em grupo para mulheres, viagem para mulheres acima de 50 anos, viagem em grupo com acompanhante em português, viagem em grupo sozinha, excursão Egito saindo de São Paulo, pacote Egito tudo organizado, quanto custa viagem para o Egito em grupo, Egito parcelado em 9x sem juros, cruzeiro no Nilo Luxor Assuã, Pirâmides de Gizé em grupo, Grande Museu Egípcio, Sharm El Sheikh Mar Vermelho, viagem em grupo com voos Emirates, Create Travel Egito, ${hotelsSeoKeywords}`}
      />
      <Header />
      <WhatsAppButton variant="float" params={whatsappParams} />

      {/* Hero */}
      <section className="relative h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Pirâmides de Gizé ao pôr do sol com feluca navegando pelo Nilo, Egito"
            className="w-full h-full object-cover"
            width={1600}
            height={912}
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
              <Sparkles size={14} /> Primavera 2027 · Vagas limitadas
            </div>
            <p className="text-caption text-gold mb-4">
              Grupo · 20 de abril a 02 de maio de 2027
            </p>
            <h1 className="heading-hero text-white mb-6">Egito Eterno</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
              13 dias entre as Pirâmides de Gizé, os templos de Luxor, um cruzeiro pelo Nilo até Assuã e o azul do Mar Vermelho — com guia do Brasil e voos Emirates.
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
            { icon: Calendar, label: "Datas", value: "20/04 a 02/05/2027" },
            { icon: Users, label: "Perfil", value: "Grupo com guia do Brasil" },
            { icon: Plane, label: "Voos", value: "Emirates" },
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
              Onde a história ganha vida, na primavera do Nilo
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
            <p className="text-caption text-gold mb-4">Passagens aéreas incluídas</p>
            <h2 className="heading-section mb-6">Voos pela Emirates</h2>
            <p className="text-white/85 leading-relaxed mb-4">
              Voar com a Emirates é sinônimo de conforto e tecnologia a serviço do viajante: poltronas cômodas, entretenimento individual com milhares de opções e refeições inspiradas em diferentes culturas. Classe econômica com 1 bagagem de 23kg incluída.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">Ida</p>
              <p className="font-serif text-lg">GRU → Dubai → Cairo</p>
              <p className="text-white/75 text-sm mt-1">
                20/04 EK 262 às 01h35 · conexão EK 929 às 04h00 · chegada ao Cairo 21/04 às 05h50
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">Volta</p>
              <p className="font-serif text-lg">Cairo → Dubai → GRU</p>
              <p className="text-white/75 text-sm mt-1">
                02/05 EK 926 às 02h45 · conexão EK 261 às 09h05 · chegada a Guarulhos às 17h40
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
            <h2 className="heading-section text-foreground">13 dias — dia a dia</h2>
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
                    <li key={j} className="flex gap-2 text-sm text-muted-foreground">
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
            {hotelsForSeo.map((h) => (
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
                  <Check className="text-emerald flex-shrink-0 mt-0.5" size={18} />
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
                  <X className="text-muted-foreground flex-shrink-0 mt-0.5" size={18} />
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
            A partir de US$ 4.895 por pessoa
          </h2>
          <p className="text-white/85 mb-8">
            Em acomodação dupla. Valores em dólar, por pessoa, acrescidos de IOF e de taxas de aeroporto e combustível (US$ 625). Sujeitos a disponibilidade e confirmação aérea no momento da reserva.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">Apto triplo</p>
              <p className="font-serif text-2xl font-semibold">US$ 4.878</p>
              <p className="text-white/70 text-xs mt-1">+ IOF US$ 131</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6 ring-2 ring-gold/60">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">Apto duplo</p>
              <p className="font-serif text-2xl font-semibold">US$ 4.895</p>
              <p className="text-white/70 text-xs mt-1">+ IOF US$ 132</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">Apto individual</p>
              <p className="font-serif text-2xl font-semibold">US$ 6.138</p>
              <p className="text-white/70 text-xs mt-1">+ IOF US$ 171</p>
            </div>
          </div>

          <div className="bg-card/95 text-foreground rounded-xl p-8 mb-8 text-left">
            <p className="text-xs uppercase tracking-wider text-gold mb-3 font-semibold">
              Condição de pagamento
            </p>
            <p className="text-sm text-muted-foreground mb-5">
              Condição válida para a parte terrestre do programa. A parte aérea é cotada à parte e o parcelamento segue as regras da companhia aérea escolhida, que variam de uma cia para outra.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Entrada</p>
                <p className="font-serif text-3xl font-semibold text-foreground">25%</p>
                <p className="text-sm text-muted-foreground mt-1">no ato da reserva</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Saldo (75%)</p>
                <p className="font-serif text-3xl font-semibold text-foreground">9x sem juros</p>
                <p className="text-sm text-muted-foreground mt-1">no cartão de crédito</p>
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
            Fale com um consultor Create Travel e reserve sua vaga no Grupo Egito Eterno · Abril 2027. Atendimento personalizado pelo WhatsApp.
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

export default GrupoEgitoAbril2027;
