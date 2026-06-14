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
import heroImg from "@/assets/grupo-turquia-2026.jpg";

const whatsappParams = {
  type: "Roteiro" as const,
  name: "Grupo Turquia Dourada · Outono 2026 (saída 21/10/2026)",
};

const benefits = [
  {
    title: "Outono dourado em Istambul",
    desc: "Luz cinematográfica sobre cúpulas, minaretes e o Bósforo — a estação mais elegante da cidade entre dois continentes.",
  },
  {
    title: "Capadócia surpreendente",
    desc: "Chaminés de fadas, Göreme, cidade subterrânea de Saratlı e a possibilidade do mítico voo de balão ao amanhecer.",
  },
  {
    title: "Pamukkale e Hierápolis",
    desc: "Piscinas naturais brancas de calcário e a antiga 'Cidade Sagrada' romana, com banho nas piscinas termais do hotel.",
  },
  {
    title: "Éfeso e o mar Egeu",
    desc: "Biblioteca de Celsius, Grande Teatro e Casa da Virgem Maria, com base em Kusadasi à beira do Egeu.",
  },
  {
    title: "Ancara e Bursa",
    desc: "Anıtkabir, o mausoléu de Atatürk, e a primeira capital otomana com a Mesquita Verde e os mercados de seda.",
  },
  {
    title: "Guia desde o Brasil",
    desc: "Coordenador Create Travel embarcando em Guarulhos e guia local em português pela Turquia inteira.",
  },
];

const itinerary = [
  {
    day: "Dia 1 — 21/10 (qua)",
    title: "São Paulo · embarque",
    points: [
      "Apresentação em Guarulhos",
      "Encontro com o coordenador Create Travel",
      "Voo Turkish TK 216 às 16h35 · pernoite a bordo",
    ],
  },
  {
    day: "Dia 2 — 22/10 (qui)",
    title: "Istambul",
    points: [
      "Chegada a Istambul às 11h15",
      "Recepção no Portão 8 e traslado ao hotel",
      "Hospedagem",
    ],
  },
  {
    day: "Dia 3 — 23/10 (sex)",
    title: "Istambul · Bósforo",
    points: [
      "Palácio Beylerbeyi e Colina Çamlıca",
      "Passeio de barco pelo Bósforo · almoço incluído",
      "Bazar das Especiarias",
    ],
  },
  {
    day: "Dia 4 — 24/10 (sáb)",
    title: "Istambul → Ancara",
    points: [
      "Viagem terrestre a Ancara",
      "Visita ao Mausoléu de Atatürk (Anıtkabir)",
      "Jantar e hospedagem",
    ],
  },
  {
    day: "Dia 5 — 25/10 (dom)",
    title: "Ancara → Capadócia",
    points: [
      "Parada no Lago Salgado",
      "Cidade subterrânea de Saratlı e Museu ao Ar Livre de Göreme",
      "Centro de tapetes artesanais · jantar e hospedagem",
    ],
  },
  {
    day: "Dia 6 — 26/10 (seg)",
    title: "Capadócia · vales e aldeias",
    points: [
      "Avanos e Chaminés de Fadas",
      "Uçhisar, Ortahisar e Vale dos Pombos",
      "Opcionais: voo de balão ao amanhecer e Noite Turca",
    ],
  },
  {
    day: "Dia 7 — 27/10 (ter)",
    title: "Capadócia → Pamukkale",
    points: [
      "Sultan Han · caravançará da Rota da Seda",
      "Chegada a Pamukkale e piscinas termais do hotel",
      "Jantar e hospedagem",
    ],
  },
  {
    day: "Dia 8 — 28/10 (qua)",
    title: "Pamukkale → Kusadasi",
    points: [
      "Hierápolis e piscinas brancas de calcário",
      "Visita à joalheria em Selçuk",
      "Jantar e hospedagem em Kusadasi",
    ],
  },
  {
    day: "Dia 9 — 29/10 (qui)",
    title: "Éfeso e Casa da Virgem Maria",
    points: [
      "Ágora, Odeão, Templo de Adriano e Biblioteca de Celsius",
      "Grande Teatro de Éfeso",
      "Casa da Virgem Maria · jantar e hospedagem",
    ],
  },
  {
    day: "Dia 10 — 30/10 (sex)",
    title: "Kusadasi → Bursa → Istambul",
    points: [
      "Bursa, primeira capital otomana",
      "Mesquita Verde e mercados de seda",
      "Retorno a Istambul",
    ],
  },
  {
    day: "Dia 11 — 31/10 (sáb)",
    title: "Istambul histórica",
    points: [
      "Muralhas de Constantinopla, Eyüp e Chifre de Ouro",
      "Av. Istiklal, Hipódromo, Mesquita Azul e Santa Sofia",
      "Grand Bazar · almoço incluído",
    ],
  },
  {
    day: "Dia 12 — 01/11 (dom)",
    title: "Istambul → São Paulo",
    points: [
      "Tempo livre até o traslado ao aeroporto",
      "Voo Turkish Airlines de retorno",
      "Chegada em São Paulo",
    ],
  },
];

const included = [
  "Bilhete aéreo em classe econômica São Paulo / Istambul / São Paulo pela Turkish Airlines, com 1 mala de 23kg",
  "Hotéis de primeira categoria com café da manhã",
  "Guia acompanhante desde o Brasil",
  "Traslados de chegada e saída em Istambul",
  "Visitas conforme o roteiro com guia local em português ou espanhol com conhecimento de português",
  "2 almoços e 6 jantares (sem bebidas)",
  "Taxas de turismo locais",
  "Tag de rastreamento de bagagem",
  "Acesso à Sala VIP W Premium no aeroporto de Guarulhos",
  "Cartão de assistência GTA FLOT 75 com cobertura médica de US$ 75.000",
  "Seguro cancelamento Plus Reason até 85 anos: US$ 3.000",
];

const notIncluded = [
  "Taxas de embarque",
  "IOF",
  "Taxas de aeroporto e combustível (EUR 586)",
  "Gorjetas obrigatórias a guias, motoristas, hotéis e restaurantes (USD 50 por pessoa, pagos localmente em espécie)",
  "Bebidas nas refeições",
  "Passeios opcionais (Jeep Safári, balão e Noite Turca)",
  "Carregadores de malas",
  "Despesas pessoais (frigobar, telefonemas, lavanderia, etc.)",
  "Documentação de viagem",
];

const faqs = [
  {
    q: "Qual a condição de pagamento?",
    a: "25% de entrada no ato da reserva e o saldo (75%) em 9 parcelas sem juros no cartão de crédito. Valores em euro, sujeitos a disponibilidade e confirmação aérea.",
  },
  {
    q: "Brasileiros precisam de visto para a Turquia?",
    a: "Não. Brasileiros não precisam de visto para estadia turística de até 90 dias. É obrigatório passaporte com validade mínima de 6 meses a partir da data de retorno.",
  },
  {
    q: "Como é o clima na Turquia em outubro/novembro?",
    a: "É plena estação de outono — luz dourada, temperaturas amenas e baixa probabilidade de calor excessivo. Istambul costuma variar entre 12–20 °C, Capadócia tem dias suaves e madrugadas frias (boas para voo de balão), e o Egeu fica em torno de 18–24 °C. Leve agasalho leve, casaco e sapato confortável.",
  },
  {
    q: "O voo de balão na Capadócia está incluído?",
    a: "Não. É um passeio opcional, realizado bem cedo ao amanhecer e sujeito a condições climáticas. No outono os voos costumam acontecer com regularidade. Recomendamos reservar com antecedência via WhatsApp para garantir o lugar.",
  },
  {
    q: "Qual o perfil do grupo?",
    a: "Grupo pequeno com guia acompanhante desde o Brasil. Casais, amigos e viajantes solo são muito bem-vindos. Trabalhamos com apartamento duplo (compartilhado) ou individual (com suplemento).",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Grupo Turquia Dourada — Outono 2026 — Create Travel",
  description:
    "Grupo organizado de 12 dias pela Turquia no outono 2026: Istambul, Ancara, Capadócia, Pamukkale, Kusadasi, Éfeso e Bursa. Saída 21/10/2026 pela Turkish Airlines com guia desde o Brasil.",
  image: heroImg,
  touristType: "Cultura, história, outono",
  itinerary: itinerary.map((d, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${d.day} — ${d.title}`,
  })),
  offers: {
    "@type": "Offer",
    price: "3698.00",
    priceCurrency: "EUR",
    availability: "https://schema.org/LimitedAvailability",
    validThrough: "2026-10-21",
  },
  provider: {
    "@type": "TravelAgency",
    name: "Create Travel",
    url: CONTACT.domain,
  },
};

const GrupoTurquia2026 = () => {
  const ctaLink = generateWhatsAppLink(whatsappParams);

  return (
    <div className="min-h-screen">
      <SEO
        title="Grupo Turquia Dourada · Outono 2026 com guia do Brasil | Create Travel"
        description="12 dias pela Turquia no outono 2026: Istambul, Ancara, Capadócia, Pamukkale, Éfeso, Kusadasi e Bursa. Saída 21/10/2026 pela Turkish Airlines. Entrada 25% + 9x sem juros."
        canonicalPath="/grupos/turquia-2026"
        ogImage={heroImg}
        ogType="article"
        jsonLd={jsonLd}
        keywords="viagem em grupo Turquia 2026, Capadócia outono, Istambul outubro, grupo Turquia com guia do Brasil, Create Travel Turkish Airlines"
      />
      <Header />
      <WhatsAppButton variant="float" params={whatsappParams} />

      {/* Hero */}
      <section className="relative h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Balões sobrevoando as chaminés de fadas da Capadócia ao amanhecer no outono"
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
              <Sparkles size={14} /> Outono 2026 · Saída confirmada
            </div>
            <p className="text-caption text-gold mb-4">
              Grupo · 21 de outubro a 1 de novembro de 2026
            </p>
            <h1 className="heading-hero text-white mb-6">Turquia Dourada</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
              12 dias no charme do outono: Istambul, Ancara, Capadócia,
              Pamukkale, Éfeso, Kusadasi e Bursa — com guia do Brasil e voos
              Turkish Airlines.
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
            { icon: Calendar, label: "Datas", value: "21/10 a 01/11/2026" },
            { icon: Users, label: "Perfil", value: "Grupo com guia do Brasil" },
            { icon: Plane, label: "Voos", value: "Turkish Airlines" },
            { icon: Hotel, label: "Estilo", value: "Outono cultural" },
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
              Outono dourado entre cúpulas, balões e chaminés de fadas
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
              Companhia eleita repetidamente entre as melhores do mundo, com
              bom atendimento a bordo, refeições de qualidade e ampla seleção
              de entretenimento. Frota moderna e assentos confortáveis para os
              voos longos entre Guarulhos e Istambul.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Ida
              </p>
              <p className="font-serif text-lg">GRU → Istambul</p>
              <p className="text-white/75 text-sm mt-1">
                21/10 TK 216 às 16h35 · chegada IST 22/10 às 11h15
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Volta
              </p>
              <p className="font-serif text-lg">Istambul → GRU</p>
              <p className="text-white/75 text-sm mt-1">
                01/11 voo Turkish Airlines · horário confirmado na emissão
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
              12 dias — dia a dia
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
              { city: "Istambul", hotel: "Tryp by Wyndham Beyoğlu" },
              { city: "Ancara", hotel: "New Park Ankara" },
              { city: "Capadócia", hotel: "Ramada by Wyndham Cappadocia" },
              { city: "Pamukkale", hotel: "Colossae Thermal & Spa" },
              { city: "Kusadasi", hotel: "Tusan Beach Resort" },
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
            A partir de € 3.698 por pessoa
          </h2>
          <p className="text-white/85 mb-8">
            Em acomodação dupla. Valores em euro, por pessoa, acrescidos de IOF
            e taxas de aeroporto e combustível (EUR 586). Sujeitos a
            disponibilidade e confirmação aérea no momento da reserva.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto triplo
              </p>
              <p className="font-serif text-2xl font-semibold">€ 3.678</p>
              <p className="text-white/70 text-xs mt-1">+ IOF EUR 85</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6 ring-2 ring-gold/60">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto duplo
              </p>
              <p className="font-serif text-2xl font-semibold">€ 3.698</p>
              <p className="text-white/70 text-xs mt-1">+ IOF EUR 86</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto individual
              </p>
              <p className="font-serif text-2xl font-semibold">€ 4.580</p>
              <p className="text-white/70 text-xs mt-1">+ IOF EUR 114</p>
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
            Vagas limitadas — Turquia no outono
          </h2>
          <p className="text-muted-foreground mb-8">
            Fale com um consultor Create Travel e reserve sua vaga na saída de
            21/10/2026. Atendimento personalizado pelo WhatsApp.
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

export default GrupoTurquia2026;
