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
import heroImg from "@/assets/grupo-sul-italia-outubro-2026.jpg";

const whatsappParams = {
  type: "Roteiro" as const,
  name: "Grupo Sul da Itália · Outono 2026 (saída 11/10/2026)",
};

const benefits = [
  {
    title: "Costa Amalfitana no ritmo do outono",
    desc: "Sorrento, Positano e Amalfi com luz dourada, clima ameno e longe das multidões do verão.",
  },
  {
    title: "Pompeia íntima e silenciosa",
    desc: "Caminhar pelas ruas da cidade soterrada pelo Vesúvio em 79 d.C. quase como num museu particular.",
  },
  {
    title: "Matera Patrimônio UNESCO",
    desc: "Os Sassi escavados na rocha, a cidade-caverna mais fascinante do sul da Itália.",
  },
  {
    title: "Puglia da colheita",
    desc: "Bari, Polignano a Mare, Alberobello e seus trulli, Lecce barroca, Otranto e Gallipoli no auge gastronômico.",
  },
  {
    title: "Santa Maria di Leuca",
    desc: "Onde o Mar Adriático encontra o Jônico — o encerramento simbólico da jornada.",
  },
  {
    title: "Voos ITA Airways",
    desc: "Companhia de bandeira italiana, frota moderna e conexão eficiente entre São Paulo, Roma e Nápoles.",
  },
];

const itinerary = [
  {
    day: "Dia 1 — 11/10 (dom)",
    title: "São Paulo → Roma",
    points: [
      "Apresentação em Guarulhos com o coordenador",
      "Voo ITA AZ 0679 às 18h50 · pernoite a bordo",
    ],
  },
  {
    day: "Dia 2 — 12/10 (seg)",
    title: "Roma → Nápoles → Sorrento",
    points: [
      "Chegada Roma 11h30 · conexão AZ 1269 às 13h20",
      "Chegada Nápoles 14h20 · traslado a Sorrento",
    ],
  },
  {
    day: "Dia 3 — 13/10 (ter)",
    title: "Positano · Amalfi · Maiori",
    points: [
      "Parada panorâmica no alto de Positano",
      "Amalfi medieval e a antiga república marítima",
      "Travessia de barco a Maiori pela Costa Amalfitana",
    ],
  },
  {
    day: "Dia 4 — 14/10 (qua)",
    title: "Sorrento livre · opcional Capri",
    points: [
      "Dia livre em Sorrento",
      "Opcional: Ilha de Capri, Anacapri, La Piazzetta e Jardins de Augusto",
    ],
  },
  {
    day: "Dia 5 — 15/10 (qui)",
    title: "Sorrento → Pompeia → Matera",
    points: [
      "Sítio arqueológico de Pompeia ao pé do Vesúvio",
      "Continuação à Basilicata · hospedagem em Matera",
    ],
  },
  {
    day: "Dia 6 — 16/10 (sex)",
    title: "Matera · os Sassi",
    points: [
      "Casas-caverna escavadas na rocha (UNESCO)",
      "Igrejas rupestres e centro histórico",
    ],
  },
  {
    day: "Dia 7 — 17/10 (sáb)",
    title: "Matera → Alberobello → Bari",
    points: [
      "Alberobello e os trulli (UNESCO)",
      "Chegada a Bari · centro histórico Bari Vecchia",
    ],
  },
  {
    day: "Dia 8 — 18/10 (dom)",
    title: "Bari · Polignano a Mare",
    points: [
      "Basílica de San Nicola e cidade velha",
      "Polignano a Mare e a praia de Lama Monachile",
    ],
  },
  {
    day: "Dia 9 — 19/10 (seg)",
    title: "Bari → Lecce",
    points: [
      "A 'Florença do Sul' e o barroco pugliese",
      "Pedra de Lecce dourada · centro histórico",
    ],
  },
  {
    day: "Dia 10 — 20/10 (ter)",
    title: "Otranto · Santa Maria di Leuca · Gallipoli",
    points: [
      "Otranto e sua catedral com mosaicos",
      "Santa Maria di Leuca — encontro do Adriático com o Jônico",
      "Gallipoli e a alma mediterrânea",
    ],
  },
  {
    day: "Dia 11 — 21/10 (qua)",
    title: "Lecce → Brindisi → Roma → São Paulo",
    points: [
      "Traslado ao aeroporto de Brindisi",
      "Voo AZ 1622 às 15h15 · conexão AZ 0674 às 22h05",
    ],
  },
  {
    day: "Dia 12 — 22/10 (qui)",
    title: "São Paulo",
    points: [
      "Chegada prevista em Guarulhos às 05h20",
      "Fim dos nossos serviços",
    ],
  },
];

const included = [
  "Bilhete aéreo São Paulo / Roma / Nápoles · Brindisi / Roma / São Paulo em classe econômica pela ITA Airways, com 1 mala de 23kg",
  "9 noites em hotéis de primeira categoria com café da manhã",
  "Guia acompanhante desde o Brasil",
  "Traslados e visitas com guias locais em português/espanhol",
  "Travessia de barco de Amalfi a Maiori",
  "Entradas: Pompeia, Sassi de Matera, Alberobello, Lecce e principais sítios do roteiro",
  "Tag de rastreamento de bagagem",
  "Acesso à Sala VIP W Premium no aeroporto de Guarulhos",
  "Cartão de assistência GTA FLOT 75 com cobertura médica de US$ 75.000",
  "Seguro cancelamento Plus Reason até 85 anos: US$ 3.000",
];

const notIncluded = [
  "Taxas de embarque",
  "IOF (EUR 113 em apto duplo)",
  "Taxas de aeroporto e combustível (EUR 187)",
  "Taxa de cidade paga diretamente no hotel (aprox. EUR 6 por pessoa/noite)",
  "Bebidas e refeições não mencionadas",
  "Gorjetas a guias, motoristas, garçons e carregadores de malas",
  "Passeio opcional a Capri",
  "Documentação de viagem (ETIAS) e despesas pessoais",
];

const faqs = [
  {
    q: "Qual a condição de pagamento?",
    a: "25% de entrada no ato da reserva e o saldo (75%) em 9 parcelas sem juros no cartão de crédito. Valores em euro, sujeitos a disponibilidade e confirmação aérea.",
  },
  {
    q: "Brasileiros precisam de visto para a Itália?",
    a: "Não. Brasileiros não precisam de visto para estadias turísticas até 90 dias. É obrigatório passaporte com validade mínima de 6 meses a partir da data de retorno e preenchimento do formulário ETIAS quando entrar em vigor.",
  },
  {
    q: "Como é o sul da Itália em outubro?",
    a: "Outono dourado: temperaturas entre 16–24 °C, mar ainda azul, luz suave perfeita para fotografia e gastronomia no auge — colheita de uvas e azeitonas. Recomendamos camadas, casaco leve e calçado confortável para piso de pedra.",
  },
  {
    q: "Quais hotéis estão previstos?",
    a: "Sorrento: Grand Hotel Vesuvio · Matera: San Domenico · Bari: Unahotel Regina · Lecce: Hilton Garden Inn. Todos de primeira categoria.",
  },
  {
    q: "Qual o perfil do grupo?",
    a: "Grupo pequeno com guia acompanhante desde o Brasil. Casais, amigos e viajantes solo são muito bem-vindos. Trabalhamos com apartamento duplo (compartilhado) ou individual (com suplemento).",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Grupo Sul da Itália · Outono 2026 — Create Travel",
  description:
    "Grupo organizado de 12 dias pelo sul da Itália: Sorrento, Costa Amalfitana, Pompeia, Matera, Alberobello, Bari, Polignano, Lecce, Otranto e Santa Maria di Leuca. Saída 11/10/2026 pela ITA Airways com guia desde o Brasil.",
  image: heroImg,
  touristType: "Cultura, gastronomia, outono italiano",
  itinerary: itinerary.map((d, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${d.day} — ${d.title}`,
  })),
  offers: {
    "@type": "Offer",
    price: "4757.00",
    priceCurrency: "EUR",
    availability: "https://schema.org/LimitedAvailability",
    validThrough: "2026-10-11",
  },
  provider: {
    "@type": "TravelAgency",
    name: "Create Travel",
    url: CONTACT.domain,
  },
};

const GrupoSulItaliaOutubro2026 = () => {
  const ctaLink = generateWhatsAppLink(whatsappParams);

  return (
    <div className="min-h-screen">
      <SEO
        title="Grupo Sul da Itália · Outono 2026 · Costa Amalfitana, Matera & Puglia | Create Travel"
        description="12 dias pelo sul da Itália no outono 2026: Sorrento, Positano, Amalfi, Pompeia, Matera, Alberobello, Bari, Lecce e Santa Maria di Leuca. Saída 11/10/2026 pela ITA Airways. Entrada 25% + 9x sem juros."
        canonicalPath="/grupos/sul-italia-outubro-2026"
        ogImage={heroImg}
        ogType="article"
        jsonLd={jsonLd}
        keywords="viagem em grupo sul da Itália 2026, Costa Amalfitana outono, Matera Puglia, Alberobello trulli, Lecce barroco, grupo Itália com guia do Brasil, Create Travel ITA Airways"
      />
      <Header />
      <WhatsAppButton variant="float" params={whatsappParams} />

      {/* Hero */}
      <section className="relative h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Positano na Costa Amalfitana ao entardecer de outono — casas pastel sobre falésias e o mar Mediterrâneo turquesa"
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
              Grupo · 11 a 22 de outubro de 2026
            </p>
            <h1 className="heading-hero text-white mb-6">
              Sul da Itália
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
              12 dias de Costa Amalfitana, Matera e Puglia no ritmo perfeito do outono — com guia do Brasil e voos ITA Airways.
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
            { icon: Calendar, label: "Datas", value: "11 a 22/10/2026" },
            { icon: Users, label: "Perfil", value: "Grupo com guia do Brasil" },
            { icon: Plane, label: "Voos", value: "ITA Airways" },
            { icon: Hotel, label: "Estilo", value: "Outono italiano" },
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
              Em outubro, a beleza no ritmo perfeito
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
            <h2 className="heading-section mb-6">Voos ITA Airways</h2>
            <p className="text-white/85 leading-relaxed mb-4">
              Companhia aérea nacional da Itália, fundada em 2021 para substituir a Alitalia. Frota moderna e excelente conexão entre o Brasil, Roma e o sul italiano via Nápoles e Brindisi.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Ida
              </p>
              <p className="font-serif text-lg">GRU → Roma → Nápoles</p>
              <p className="text-white/75 text-sm mt-1">
                11/10 AZ 0679 às 18h50 + 12/10 AZ 1269 às 13h20 · chegada NAP 14h20
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Volta
              </p>
              <p className="font-serif text-lg">Brindisi → Roma → GRU</p>
              <p className="text-white/75 text-sm mt-1">
                21/10 AZ 1622 às 15h15 + AZ 0674 às 22h05 · chegada GRU 22/10 05h20
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
              Primeira categoria em cada cidade
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { city: "Sorrento", hotel: "Grand Hotel Vesuvio" },
              { city: "Matera", hotel: "San Domenico" },
              { city: "Bari", hotel: "Unahotel Regina" },
              { city: "Lecce", hotel: "Hilton Garden Inn" },
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
              { label: "Apto Triplo", price: "€ 4.730" },
              { label: "Apto Duplo", price: "€ 4.757", highlight: true },
              { label: "Apto Individual", price: "€ 5.328" },
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
            + IOF e taxas de aeroporto/combustível (EUR 187). Valores sujeitos a alteração até a confirmação da reserva.
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

export default GrupoSulItaliaOutubro2026;
