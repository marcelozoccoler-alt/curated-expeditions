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
import heroImg from "@/assets/grupo-mexico-2026.jpg";

const whatsappParams = {
  type: "Roteiro" as const,
  name: "Grupo México 2026 — Cidades históricas e Pacífico (saída 12/11/2026)",
};

const benefits = [
  {
    title: "Cidade do México completa",
    desc: "Centro Histórico, Zócalo, Palácio de Belas Artes, Museu Nacional de Antropologia, Teotihuacán e Basílica de Guadalupe.",
  },
  {
    title: "Cidades coloniais Patrimônio UNESCO",
    desc: "Querétaro, San Miguel de Allende e Guanajuato: aqueduto, ruas de paralelepípedo, Callejón del Beso e Teatro Juárez.",
  },
  {
    title: "Guadalajara, mariachi e tequila",
    desc: "Catedral, murais de Orozco, vilarejo de Tlaquepaque e degustação em uma destilaria do Pueblo Mágico de Tequila.",
  },
  {
    title: "Puerto Vallarta All Inclusive",
    desc: "4 dias no Pacífico em regime All Inclusive no Riu Puerto Vallarta — sofisticação e descontração à beira-mar.",
  },
  {
    title: "Guia desde o Brasil",
    desc: "Coordenador Create Travel embarcando em Guarulhos e guia local em português/espanhol em cada cidade.",
  },
  {
    title: "Voos diretos Aeroméxico",
    desc: "Voos AM 015 e AM 014 direto entre Guarulhos e Cidade do México, com franquia de 1 mala de 23kg incluída.",
  },
];

const itinerary = [
  {
    day: "Dia 1 — 12/11 (qui)",
    title: "São Paulo → Cidade do México",
    points: [
      "Apresentação em Guarulhos com o coordenador",
      "Voo Aeroméxico AM 015 às 11h05",
      "Chegada às 17h30 · traslado ao hotel",
    ],
  },
  {
    day: "Dia 2 — 13/11 (sex)",
    title: "Cidade do México · Centro Histórico",
    points: [
      "Zócalo, Catedral e Palácio Presidencial",
      "Praça Tolsá e Palácio de Belas Artes",
      "Avenida Reforma e Museu de Antropologia",
    ],
  },
  {
    day: "Dia 3 — 14/11 (sáb)",
    title: "Teotihuacán e Basílica de Guadalupe",
    points: [
      "Templo de Quetzalcóatl, Pirâmide do Sol e da Lua",
      "Almoço incluído",
      "Basílica de Guadalupe no retorno",
    ],
  },
  {
    day: "Dia 4 — 15/11 (dom)",
    title: "Querétaro · San Miguel de Allende",
    points: [
      "City tour em Querétaro: Aqueduto, Mirante e Casa da Marquesa",
      "Almoço incluído",
      "Centro histórico de San Miguel de Allende",
    ],
  },
  {
    day: "Dia 5 — 16/11 (seg)",
    title: "Guanajuato → Guadalajara",
    points: [
      "Mirante do Pípila, Mercado Hidalgo e Callejón del Beso",
      "Universidade, Jardín de la Unión e Teatro Juárez · almoço incluído",
      "Viagem a Guadalajara",
    ],
  },
  {
    day: "Dia 6 — 17/11 (ter)",
    title: "Guadalajara · Tlaquepaque",
    points: [
      "Catedral, murais de Orozco e Teatro Degollado",
      "Instituto Cultural Cabañas",
      "Tlaquepaque e mariachi no El Parián",
    ],
  },
  {
    day: "Dia 7 — 18/11 (qua)",
    title: "Tequila → Puerto Vallarta",
    points: [
      "Campos de agave azul no Pueblo Mágico de Tequila",
      "Visita a uma destilaria tradicional",
      "Chegada a Puerto Vallarta · All Inclusive",
    ],
  },
  {
    day: "Dia 8 — 19/11 (qui)",
    title: "Puerto Vallarta · city tour",
    points: [
      "Mirante de Mismaloya com vista do Pacífico",
      "Malecón, Catedral de Nossa Senhora de Guadalupe",
      "Rio Cuale e tempo livre · All Inclusive",
    ],
  },
  {
    day: "Dia 9 — 20/11 (sex)",
    title: "Puerto Vallarta · dia livre",
    points: [
      "Dia livre em regime All Inclusive",
      "Piscinas, praia e entretenimento do resort",
    ],
  },
  {
    day: "Dia 10 — 21/11 (sáb)",
    title: "Puerto Vallarta → Cidade do México → São Paulo",
    points: [
      "Voo AM 333 às 13h06 · chegada CDMX 14h50",
      "Conexão AM 014 às 18h45",
      "Pernoite a bordo",
    ],
  },
  {
    day: "Dia 11 — 22/11 (dom)",
    title: "São Paulo",
    points: [
      "Chegada em Guarulhos às 07h35",
      "Fim dos nossos serviços",
    ],
  },
];

const included = [
  "Bilhete aéreo em classe econômica São Paulo / Cidade do México // Puerto Vallarta / Cidade do México / São Paulo pela Aeroméxico, com franquia de 1 mala de 23kg",
  "Hotéis de primeira categoria com café da manhã",
  "Regime All Inclusive em Puerto Vallarta (4 dias)",
  "Guia acompanhante desde São Paulo",
  "Visitas com guia local em português/espanhol conforme o roteiro",
  "Traslados com assistência em português/espanhol na Cidade do México e Puerto Vallarta",
  "Almoços incluídos nos dias 3, 4 e 5",
  "Entradas a Teotihuacán, Basílica de Guadalupe, Museu de Antropologia e destilaria de tequila",
  "Acesso à sala VIP W Premium no aeroporto de Guarulhos",
  "Cartão de assistência com cobertura médica de US$ 75.000",
  "Seguro cancelamento Plus Reason até 85 anos: US$ 3.000",
];

const notIncluded = [
  "Taxas de embarque",
  "IOF",
  "Taxas de aeroporto e combustível (USD 248)",
  "Bebidas nas refeições (fora do All Inclusive)",
  "Passeios opcionais",
  "Gorjetas a guias, motoristas e garçons",
  "Carregadores de malas",
  "Despesas pessoais (frigobar, telefonemas, lavanderia, etc.)",
  "Documentação de viagem, vistos e autorizações",
];

const faqs = [
  {
    q: "Qual a condição de pagamento?",
    a: "25% de entrada no ato da reserva e o saldo (75%) em 9 parcelas sem juros no cartão de crédito. Valores em dólar, sujeitos a disponibilidade e confirmação aérea.",
  },
  {
    q: "Brasileiros precisam de visto para o México?",
    a: "Sim. Brasileiros precisam de autorização eletrônica (SAE) ou visto consular para entrar no México. Passaporte com validade mínima de 6 meses a partir da data de retorno. Nossa equipe orienta sobre o processo após a reserva. Não é exigida vacina de febre amarela vinda do Brasil.",
  },
  {
    q: "Como é o clima em novembro no México?",
    a: "Novembro é uma das melhores épocas: estação seca, dias ensolarados e temperaturas agradáveis. Cidade do México e cidades coloniais (Querétaro, San Miguel, Guanajuato, Guadalajara) ficam entre 8–22 °C (manhãs frescas, tardes amenas — leve casaco). Em Puerto Vallarta o clima é tropical e mais quente (22–30 °C).",
  },
  {
    q: "O que é o regime All Inclusive em Puerto Vallarta?",
    a: "São 4 noites no Riu Puerto Vallarta em regime All Inclusive: café da manhã, almoço, jantar, snacks, bebidas (alcoólicas e não alcoólicas) e entretenimento do resort estão inclusos. Você só precisa relaxar.",
  },
  {
    q: "Posso viajar sozinho(a)?",
    a: "Sim. Trabalhamos com apartamento triplo, duplo ou individual (com suplemento). Podemos emparelhar você com outra pessoa do grupo do mesmo gênero, mediante disponibilidade.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Grupo México 2026 — Cidades históricas e Pacífico — Create Travel",
  description:
    "Grupo organizado de 11 dias pelo México: Cidade do México, Teotihuacán, Querétaro, San Miguel de Allende, Guanajuato, Guadalajara, Tequila e Puerto Vallarta All Inclusive. Saída 12/11/2026 com guia desde o Brasil e voos Aeroméxico.",
  image: heroImg,
  touristType: "Cultura, história, gastronomia, praia",
  itinerary: itinerary.map((d, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${d.day} — ${d.title}`,
  })),
  offers: {
    "@type": "Offer",
    price: "4398.00",
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

const GrupoMexico2026 = () => {
  const ctaLink = generateWhatsAppLink(whatsappParams);

  return (
    <div className="min-h-screen">
      <SEO
        title="Grupo México 2026 — Cidades históricas e Puerto Vallarta com guia do Brasil | Create Travel"
        description="11 dias pelo México em grupo com guia do Brasil: Cidade do México, Teotihuacán, Querétaro, San Miguel de Allende, Guanajuato, Guadalajara, Tequila e Puerto Vallarta All Inclusive. Saída 12/11/2026 pela Aeroméxico. Entrada 25% + 9x sem juros."
        canonicalPath="/grupos/mexico-2026"
        ogImage={heroImg}
        ogType="article"
        jsonLd={jsonLd}
        keywords="viagem em grupo México 2026, cidades coloniais México, Teotihuacán Puerto Vallarta com guia do Brasil, San Miguel de Allende Guanajuato, Create Travel América Latina"
      />
      <Header />
      <WhatsAppButton variant="float" params={whatsappParams} />

      {/* Hero */}
      <section className="relative h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Cidade colonial de Guanajuato com casas coloridas em mosaico ao pôr do sol"
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
              Grupo · 12 a 22 de novembro de 2026
            </p>
            <h1 className="heading-hero text-white mb-6">México</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
              11 dias entre cidades históricas e o Pacífico: Cidade do México,
              Teotihuacán, Querétaro, San Miguel, Guanajuato, Guadalajara,
              Tequila e Puerto Vallarta All Inclusive — com guia do Brasil e
              voos Aeroméxico.
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
            { icon: Plane, label: "Voos", value: "Aeroméxico direto" },
            { icon: Hotel, label: "Estilo", value: "Histórico + All Inclusive" },
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
              Cidades históricas, sabores e o Pacífico
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
            <h2 className="heading-section mb-6">Voos Aeroméxico</h2>
            <p className="text-white/85 leading-relaxed mb-4">
              Companhia de bandeira mexicana e membro da aliança SkyTeam, com
              voos diretos entre Guarulhos e Cidade do México. Franquia de 1
              mala de 23kg incluída e voo doméstico Puerto Vallarta–Cidade do
              México pela mesma cia.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Ida
              </p>
              <p className="font-serif text-lg">GRU → Cidade do México</p>
              <p className="text-white/75 text-sm mt-1">
                12/11 AM 015 às 11h05 · chegada CDMX 17h30
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Doméstico
              </p>
              <p className="font-serif text-lg">
                Puerto Vallarta → Cidade do México
              </p>
              <p className="text-white/75 text-sm mt-1">
                21/11 AM 333 às 13h06 · chegada CDMX 14h50
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Volta
              </p>
              <p className="font-serif text-lg">Cidade do México → GRU</p>
              <p className="text-white/75 text-sm mt-1">
                21/11 AM 014 às 18h45 · chegada GRU 22/11 às 07h35
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
              { city: "Cidade do México", hotel: "Royal Reforma" },
              { city: "San Miguel de Allende", hotel: "Real de Minas" },
              { city: "Guadalajara", hotel: "Morales" },
              { city: "Puerto Vallarta", hotel: "Riu Puerto Vallarta · All Inclusive" },
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
                  <a href={`https://www.google.com/search?q=${encodeURIComponent(h.hotel + " site oficial")}`} target="_blank" rel="noopener noreferrer" className="hover:text-gold underline-offset-4 hover:underline transition-colors">{h.hotel}</a>
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
            A partir de US$ 4.398 por pessoa
          </h2>
          <p className="text-white/85 mb-8">
            Em acomodação dupla. Valores em dólar, por pessoa, acrescidos de IOF
            e taxas de aeroporto e combustível (USD 248). Sujeitos a
            disponibilidade e confirmação aérea no momento da reserva.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto triplo
              </p>
              <p className="font-serif text-2xl font-semibold">US$ 4.368</p>
              <p className="text-white/70 text-xs mt-1">+ IOF USD 100</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6 ring-2 ring-gold/60">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto duplo
              </p>
              <p className="font-serif text-2xl font-semibold">US$ 4.398</p>
              <p className="text-white/70 text-xs mt-1">+ IOF USD 101</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto individual
              </p>
              <p className="font-serif text-2xl font-semibold">US$ 5.216</p>
              <p className="text-white/70 text-xs mt-1">+ IOF USD 128</p>
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
            México 2026. Atendimento personalizado pelo WhatsApp.
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

export default GrupoMexico2026;
