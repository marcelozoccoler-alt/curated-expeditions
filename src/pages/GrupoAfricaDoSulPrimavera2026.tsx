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
import heroImg from "@/assets/grupo-africa-do-sul-primavera-2026.jpg";
import { getHotelUrl, buildHotelsJsonLd, buildHotelsFAQs, buildHotelsKeywords } from "@/lib/groupHotels";

const whatsappParams = {
  type: "Roteiro" as const,
  name: "Grupo África do Sul · Primavera 2026 (saída 16/11/2026)",
};

const benefits = [
  {
    title: "Pilanesberg em área livre de malária",
    desc: "Safáris no Parque Nacional de Pilanesberg, em reserva privada, sem necessidade de profilaxia para malária — perfeito para quem viaja com a família.",
  },
  {
    title: "Shepherd's Tree Game Lodge 5★",
    desc: "Duas noites em um dos lodges mais elegantes da África do Sul, com suítes de vista panorâmica, gastronomia refinada e piscina sobre a savana.",
  },
  {
    title: "Safáris com guia em português",
    desc: "Game drives em 4x4 abertos ao amanhecer e ao entardecer, com rangers experientes e acompanhamento de guia em português.",
  },
  {
    title: "Soweto, Pretória e o legado de Mandela",
    desc: "Vilakazi Street, Mandela House, Hector Pieterson Memorial e os Union Buildings em Pretória — a cidade jacarandá na primavera.",
  },
  {
    title: "Cape Town e Cabo da Boa Esperança",
    desc: "Table Mountain, Bo-Kaap, Chapman's Peak, Hout Bay, Cabo da Boa Esperança e os pinguins de Boulders Beach em Simon's Town.",
  },
  {
    title: "Guia desde o Brasil",
    desc: "Coordenador Create Travel embarcando em Guarulhos e guia local em português em Johanesburgo e Cidade do Cabo.",
  },
];

const itinerary = [
  {
    day: "Dia 1 — 16/11 (seg)",
    title: "São Paulo → Johanesburgo",
    points: [
      "Apresentação em Guarulhos com o coordenador",
      "Voo South African Airways SA 223 às 17h45",
      "Pernoite a bordo",
    ],
  },
  {
    day: "Dia 2 — 17/11 (ter)",
    title: "Johanesburgo · Soweto",
    points: [
      "Chegada às 07h45 e traslado ao hotel",
      "Tarde: visita a Johanesburgo e Soweto",
      "Vilakazi Street, Mandela House e Hector Pieterson",
    ],
  },
  {
    day: "Dia 3 — 18/11 (qua)",
    title: "Johanesburgo → Pilanesberg",
    points: [
      "Viagem ao Parque Nacional de Pilanesberg",
      "Almoço e tempo livre no lodge",
      "Primeiro safári à tarde · jantar e hospedagem",
    ],
  },
  {
    day: "Dia 4 — 19/11 (qui)",
    title: "Pilanesberg · dia de safáris",
    points: [
      "Safári ao amanhecer em 4x4 aberto",
      "Tarde no lodge · piscina e instalações",
      "Safári ao entardecer · pensão completa",
    ],
  },
  {
    day: "Dia 5 — 20/11 (sex)",
    title: "Pilanesberg → Pretória → Cape Town",
    points: [
      "Safári ao amanhecer · café da manhã",
      "Visita a Pretória e Union Buildings · almoço",
      "Voo SA 375 às 21h20 · chegada Cape Town 23h35",
    ],
  },
  {
    day: "Dia 6 — 21/11 (sáb)",
    title: "Cidade do Cabo · city tour",
    points: [
      "Teleférico da Table Mountain (se o clima permitir)",
      "Greenmarket Square, Company's Garden e Castelo da Boa Esperança",
      "Bairro malaio Bo-Kaap · almoço incluído",
    ],
  },
  {
    day: "Dia 7 — 22/11 (dom)",
    title: "Península do Cabo",
    points: [
      "Hout Bay, Chapman's Peak Drive",
      "Cabo da Boa Esperança e Cape Point · almoço incluído",
      "Pinguins-africanos em Boulders Beach, Simon's Town",
    ],
  },
  {
    day: "Dia 8 — 23/11 (seg)",
    title: "Cidade do Cabo · dia livre",
    points: [
      "Dia livre na cidade",
      "Sugestão: passeio opcional aos Vinhedos do Cabo",
      "Stellenbosch e Franschhoek com degustações",
    ],
  },
  {
    day: "Dia 9 — 24/11 (ter)",
    title: "Cidade do Cabo → São Paulo",
    points: [
      "Traslado ao aeroporto",
      "Voo SA 226 às 12h40",
      "Chegada em Guarulhos às 16h35",
    ],
  },
];

const included = [
  "Bilhete aéreo em classe econômica São Paulo / Johanesburgo // Cidade do Cabo / São Paulo pela South African Airways, com franquia de 1 mala de 23kg",
  "7 noites de hospedagem em hotéis de primeira categoria com café da manhã",
  "Traslados privados com assistência",
  "Guia acompanhante desde São Paulo e guia local em português em Johanesburgo e Cidade do Cabo",
  "Meio dia de visita em Johanesburgo com Soweto, visita a Pretória, passeio de dia todo na Cidade do Cabo e passeio de dia todo ao Cabo da Boa Esperança",
  "Entradas no Museu Casa Mandela, Constitution Court, Castelo da Boa Esperança e Museu SA",
  "Dois safáris em Pilanesberg em 4x4 aberto com ranger e acompanhamento de guia em português",
  "Pensão completa na região de Pilanesberg e almoços nos dias 5, 6 e 7",
  "Tag de rastreamento de bagagem",
  "Acesso à sala VIP W Premium no aeroporto de Guarulhos",
  "Cartão de assistência com cobertura médica de US$ 75.000",
  "Seguro cancelamento Plus Reason até 85 anos: US$ 3.000",
];

const notIncluded = [
  "Taxas de embarque",
  "IOF",
  "Taxas de aeroporto e combustível (USD 251)",
  "Bebidas nas refeições",
  "Passeios opcionais (vinhedos do Cabo)",
  "Gorjetas a guias, motoristas e garçons",
  "Carregadores de malas",
  "Despesas pessoais (frigobar, telefonemas, lavanderia, etc.)",
  "Documentação de viagem e vacinas",
];

const faqs = [
  {
    q: "Qual a condição de pagamento?",
    a: "25% de entrada no ato da reserva e o saldo (75%) em 9 parcelas sem juros no cartão de crédito. Valores em dólar, sujeitos a disponibilidade e confirmação aérea.",
  },
  {
    q: "Brasileiros precisam de visto para a África do Sul?",
    a: "Não é necessário visto para brasileiros em estadia turística de até 90 dias. É obrigatório passaporte com validade mínima de 6 meses a partir da data de retorno e o certificado internacional de vacinação contra febre amarela.",
  },
  {
    q: "Como é o clima em novembro na África do Sul?",
    a: "Novembro é primavera no Hemisfério Sul: paisagens verdes, jacarandás em flor em Pretória e safáris excepcionais com filhotes na savana. Joanesburgo e Pilanesberg ficam entre 16–28 °C, com pancadas de chuva à tarde. Cape Town gira entre 14–24 °C, com vento característico.",
  },
  {
    q: "Pilanesberg é seguro para crianças?",
    a: "É uma região livre de malária — uma grande vantagem em relação ao Kruger. No entanto, o Shepherd's Tree Game Lodge não aceita crianças menores de 12 anos. Para famílias com crianças mais novas, podemos sugerir alternativas.",
  },
  {
    q: "Qual a diferença para o roteiro do Kruger?",
    a: "Este roteiro é em Pilanesberg, área livre de malária, com hospedagem em lodge 5 estrelas (Shepherd's Tree) e guia em português nos safáris. Inclui ainda a visita a Pretória, que não está no roteiro do Kruger. As demais cidades — Soweto e Cape Town — são as mesmas.",
  },
];

const hotelsForSeo = [{ city: "Johanesburgo", hotel: "Onomo Sandton" },
              { city: "Pilanesberg", hotel: "Shepherd's Tree Game Lodge 5★" },
              { city: "Cidade do Cabo", hotel: "Southern Sun Waterfront" }];
const hotelsSeoJsonLd = buildHotelsJsonLd(hotelsForSeo, "Grupo África do Sul — Primavera 2026 — Create Travel", "/grupos/africa-do-sul-primavera-2026");
const hotelsSeoFaqs = buildHotelsFAQs(hotelsForSeo, "Grupo África do Sul — Primavera 2026 — Create Travel", "/grupos/africa-do-sul-primavera-2026");
const hotelsSeoKeywords = buildHotelsKeywords(hotelsForSeo);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Grupo África do Sul — Primavera 2026 — Create Travel",
  description:
    "Grupo organizado de 9 dias pela África do Sul na primavera: Johanesburgo, Soweto, Pilanesberg (área livre de malária) com lodge 5 estrelas Shepherd's Tree, Pretória, Cape Town e Cabo da Boa Esperança. Saída 16/11/2026 pela South African Airways.",
  image: heroImg,
  touristType: "Safári, natureza, cultura, primavera",
  itinerary: itinerary.map((d, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${d.day} — ${d.title}`,
  })),
  offers: {
    "@type": "Offer",
    price: "4998.00",
    priceCurrency: "USD",
    availability: "https://schema.org/LimitedAvailability",
    validThrough: "2026-11-16",
  },
  provider: {
    "@type": "TravelAgency",
    name: "Create Travel",
    url: CONTACT.domain,
  },
};

const GrupoAfricaDoSulPrimavera2026 = () => {
  const ctaLink = generateWhatsAppLink(whatsappParams);

  return (
    <div className="min-h-screen">
      <SEO
        title="Grupo África do Sul · Primavera 2026 com guia do Brasil | Create Travel"
        description="9 dias na África do Sul na primavera: Soweto, safári no Pilanesberg em lodge 5 estrelas (área livre de malária), Pretória, Table Mountain e Cabo da Boa Esperança. Saída 16/11/2026 pela South African Airways. Entrada 25% + 9x sem juros."
        canonicalPath="/grupos/africa-do-sul-primavera-2026"
        ogImage={heroImg}
        ogType="article"
        jsonLd={[jsonLd, ...hotelsSeoJsonLd]}
        keywords={`viagem em grupo África do Sul Primavera 2026, safári Pilanesberg área livre de malária, Shepherd's Tree Game Lodge, Cape Town novembro com guia do Brasil, Create Travel safári, ${hotelsSeoKeywords}`}
      />
      <Header />
      <WhatsAppButton variant="float" params={whatsappParams} />

      {/* Hero */}
      <section className="relative h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Savana sul-africana verdejante na primavera com rinoceronte e cratera do Pilanesberg ao fundo"
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
              <Sparkles size={14} /> Grupos 2026 · Saída confirmada
            </div>
            <p className="text-caption text-gold mb-4">
              Grupo · 16 a 24 de novembro de 2026
            </p>
            <h1 className="heading-hero text-white mb-6">
              África do Sul
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
              9 dias na primavera: Soweto e o legado de Mandela, safári em
              Pilanesberg em lodge 5 estrelas (área livre de malária), Pretória
              e o esplendor de Cape Town — com guia do Brasil e voos South
              African Airways.
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
            { icon: Calendar, label: "Datas", value: "16 a 24/11/2026" },
            { icon: Users, label: "Perfil", value: "Grupo com guia do Brasil" },
            { icon: Plane, label: "Voos", value: "South African Airways" },
            { icon: Hotel, label: "Estilo", value: "Safári 5★ · Cape Town" },
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
              Primavera sul-africana em lodge 5 estrelas
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
            <h2 className="heading-section mb-6">Voos South African Airways</h2>
            <p className="text-white/85 leading-relaxed mb-4">
              Companhia nacional sul-africana, com serviço atencioso, aeronaves
              confortáveis, refeições de qualidade e entretenimento a bordo. O
              clima de hospitalidade africana começa no embarque, tornando a
              travessia parte da experiência da viagem.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Ida
              </p>
              <p className="font-serif text-lg">GRU → Johanesburgo</p>
              <p className="text-white/75 text-sm mt-1">
                16/11 SA 223 às 17h45 · chegada JNB 17/11 às 07h45
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Doméstico
              </p>
              <p className="font-serif text-lg">Johanesburgo → Cidade do Cabo</p>
              <p className="text-white/75 text-sm mt-1">
                20/11 SA 375 às 21h20 · chegada CPT às 23h35
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Volta
              </p>
              <p className="font-serif text-lg">Cidade do Cabo → GRU</p>
              <p className="text-white/75 text-sm mt-1">
                24/11 SA 226 às 12h40 · chegada GRU 16h35
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
              9 dias — dia a dia
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
              { city: "Johanesburgo", hotel: "Onomo Sandton" },
              { city: "Pilanesberg", hotel: "Shepherd's Tree Game Lodge 5★" },
              { city: "Cidade do Cabo", hotel: "Southern Sun Waterfront" },
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
            A partir de US$ 4.998 por pessoa
          </h2>
          <p className="text-white/85 mb-8">
            Em acomodação dupla. Valores em dólar, por pessoa, acrescidos de IOF
            e taxas de aeroporto e combustível (USD 251). Sujeitos a
            disponibilidade e confirmação aérea no momento da reserva.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto triplo
              </p>
              <p className="font-serif text-2xl font-semibold">US$ 4.968</p>
              <p className="text-white/70 text-xs mt-1">+ IOF USD 129</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6 ring-2 ring-gold/60">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto duplo
              </p>
              <p className="font-serif text-2xl font-semibold">US$ 4.998</p>
              <p className="text-white/70 text-xs mt-1">+ IOF USD 130</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto individual
              </p>
              <p className="font-serif text-2xl font-semibold">US$ 6.117</p>
              <p className="text-white/70 text-xs mt-1">+ IOF USD 165</p>
            </div>
          </div>

          <p className="text-white/70 text-sm mb-8">
            Importante: o Shepherd's Tree Game Lodge não aceita crianças menores
            de 12 anos. Criança (acima de 12): USD 3.229 + IOF 74.
          </p>

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
            Vagas limitadas — primavera na África do Sul
          </h2>
          <p className="text-muted-foreground mb-8">
            Fale com um consultor Create Travel e reserve sua vaga no grupo de
            novembro de 2026. Atendimento personalizado pelo WhatsApp.
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

export default GrupoAfricaDoSulPrimavera2026;
