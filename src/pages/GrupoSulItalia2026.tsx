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
import heroImg from "@/assets/grupo-sul-italia-2026.jpg";

const whatsappParams = {
  type: "Roteiro" as const,
  name: "Grupo Sul da Itália 2026 (saída 27/10/2026)",
};

const benefits = [
  {
    title: "Costa Amalfitana no outono",
    desc: "Sorrento, Positano, Amalfi e Capri sob a luz dourada de outubro, longe da multidão do verão e com clima ameno.",
  },
  {
    title: "Pompeia ao pé do Vesúvio",
    desc: "Visita guiada ao sítio arqueológico mais fascinante do mundo, em condições ideais de temperatura e fluxo.",
  },
  {
    title: "Matera e os Sassi",
    desc: "Patrimônio da UNESCO: casas-cavernas escavadas na rocha e uma das cidades habitadas mais antigas do planeta.",
  },
  {
    title: "Puglia autêntica",
    desc: "Bari, Polignano a Mare, Alberobello, Lecce, Otranto, Gallipoli e Santa Maria di Leuca — o melhor do Salento.",
  },
  {
    title: "Sabores de outono",
    desc: "Época da vindima e colheita das oliveiras. Orecchiette, focaccia barese, pasticciotto, Primitivo e Negroamaro.",
  },
  {
    title: "Guia acompanhante desde o Brasil",
    desc: "Coordenador Create Travel embarcando com o grupo em Guarulhos e guia local em português/espanhol no destino.",
  },
];

const itinerary = [
  {
    day: "Dia 1 — 27/10 (ter)",
    title: "São Paulo → Roma",
    points: [
      "Apresentação em Guarulhos com o coordenador",
      "Voo ITA Airways AZ 0675 às 15h45",
      "Pernoite a bordo",
    ],
  },
  {
    day: "Dia 2 — 28/10 (qua)",
    title: "Roma → Nápoles → Sorrento",
    points: [
      "Chegada em Roma às 07h05",
      "Conexão AZ 1263 para Nápoles · chegada 10h35",
      "Traslado e hospedagem em Sorrento",
    ],
  },
  {
    day: "Dia 3 — 29/10 (qui)",
    title: "Costa Amalfitana",
    points: [
      "Parada panorâmica em Positano",
      "Visita a Amalfi · arquitetura medieval",
      "Traslado de barco a Maiori · retorno a Sorrento",
    ],
  },
  {
    day: "Dia 4 — 30/10 (sex)",
    title: "Sorrento livre",
    points: [
      "Dia livre para descanso ou passeios",
      "Opcional: visita à Ilha de Capri e Anacapri",
      "Hospedagem em Sorrento",
    ],
  },
  {
    day: "Dia 5 — 31/10 (sáb)",
    title: "Sorrento · Pompeia · Matera",
    points: [
      "Visita guiada ao sítio arqueológico de Pompeia",
      "Viagem rumo à Basilicata",
      "Chegada e hospedagem em Matera",
    ],
  },
  {
    day: "Dia 6 — 01/11 (dom)",
    title: "Matera → Bari",
    points: [
      "Visita panorâmica aos Sassi de Matera",
      "Casa Gruta de Vico Solitário",
      "Viagem à Puglia · hospedagem em Bari",
    ],
  },
  {
    day: "Dia 7 — 02/11 (seg)",
    title: "Bari e Polignano a Mare",
    points: [
      "Basílica de San Nicola, Catedral e Bari Vecchia",
      "Produção artesanal de massa nas portas das casas",
      "Polignano a Mare · falésias e Lama Monachile",
    ],
  },
  {
    day: "Dia 8 — 03/11 (ter)",
    title: "Bari · Alberobello · Lecce",
    points: [
      "Trulli de Alberobello e Trullo Sovrano",
      "Almoço típico incluído",
      "Viagem a Lecce · hospedagem",
    ],
  },
  {
    day: "Dia 9 — 04/11 (qua)",
    title: "Lecce e Otranto",
    points: [
      "Basílica de Santa Croce e Duomo de Lecce",
      "Catedral de Otranto e Baía dos Turcos",
      "Cabo de Otranto · retorno a Lecce",
    ],
  },
  {
    day: "Dia 10 — 05/11 (qui)",
    title: "Gallipoli e Santa Maria di Leuca",
    points: [
      "Centro histórico de Gallipoli e Catedral de Sant’Agata",
      "Encontro do Mar Adriático com o Jônico",
      "Santuário De Finibus Terrae · retorno a Lecce",
    ],
  },
  {
    day: "Dia 11 — 06/11 (sex)",
    title: "Lecce → Brindisi → Roma → São Paulo",
    points: [
      "Traslado ao aeroporto de Brindisi",
      "Voo AZ 1622 às 15h20 · conexão em Roma",
      "Voo AZ 0674 às 21h50 para São Paulo",
    ],
  },
  {
    day: "Dia 12 — 07/11 (sáb)",
    title: "São Paulo",
    points: [
      "Chegada em Guarulhos às 06h25",
      "Fim dos nossos serviços",
    ],
  },
];

const included = [
  "Bilhete aéreo em classe econômica São Paulo / Nápoles e Brindisi / São Paulo pela ITA Airways com 1 peça de 23kg",
  "Hotéis de primeira categoria com café da manhã",
  "Guia acompanhante desde São Paulo",
  "Traslados com assistência em português/espanhol em Nápoles e Brindisi",
  "Visitas com guia local: Costa Amalfitana, Pompeia, Matera, Bari, Polignano a Mare, Alberobello, Lecce, Otranto, Gallipoli e Santa Maria di Leuca",
  "Entradas conforme descrito no roteiro",
  "1 almoço em Alberobello (sem bebidas)",
  "Tag de rastreio de bagagem",
  "Acesso à sala VIP W Premium no aeroporto de Guarulhos",
  "Cartão de assistência com cobertura médica de US$ 75.000*",
  "Seguro cancelamento Plus Reason até 85 anos: US$ 3.000",
];

const notIncluded = [
  "Taxas de embarque",
  "IOF",
  "Taxas de aeroporto e combustível (EUR 187)",
  "Formulário ETIAS",
  "Taxa de hospedagem local (city tax, paga no check-out)",
  "Bebidas nas refeições",
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
    a: "Passaporte com validade mínima de 6 meses a partir da data de retorno e preenchimento do formulário online ETIAS exigido pela Itália. Não é necessária vacina para brasileiros.",
  },
  {
    q: "Como é o clima no sul da Itália no final de outubro?",
    a: "É uma das melhores épocas para visitar: temperaturas amenas (16–22 °C), dias ainda ensolarados, paisagens em tons dourados e ocres, muito menos turistas e gastronomia no auge com vindima e colheita das oliveiras.",
  },
  {
    q: "Posso viajar sozinho(a)?",
    a: "Sim. Trabalhamos com apartamento triplo, duplo ou individual (com suplemento). Podemos emparelhar você com outra pessoa do grupo do mesmo gênero, mediante disponibilidade.",
  },
  {
    q: "Como funciona o dia livre em Sorrento?",
    a: "No dia 4 oferecemos um dia livre, com a possibilidade de fazer o passeio opcional à Ilha de Capri e Anacapri (Villa de Axel Munthe, La Piazzetta, Jardins de Augusto). Custos opcionais não incluídos no pacote.",
  },
  {
    q: "Quem opera os voos?",
    a: "A ITA Airways, companhia aérea nacional da Itália sucessora da Alitalia, com voo direto Guarulhos–Roma e conexões internas a Nápoles e Brindisi.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Grupo Sul da Itália 2026 — Create Travel",
  description:
    "Grupo organizado de 12 dias pelo sul da Itália em pleno outono: Costa Amalfitana, Pompeia, Matera, Bari, Alberobello, Lecce e Santa Maria di Leuca. Saída 27/10/2026 com guia desde o Brasil e voos ITA Airways.",
  image: heroImg,
  touristType: "Cultura, história, gastronomia",
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
    validThrough: "2026-10-27",
  },
  provider: {
    "@type": "TravelAgency",
    name: "Create Travel",
    url: CONTACT.domain,
  },
};

const GrupoSulItalia2026 = () => {
  const ctaLink = generateWhatsAppLink(whatsappParams);

  return (
    <div className="min-h-screen">
      <SEO
        title="Grupo Sul da Itália 2026 — Costa Amalfitana, Matera e Puglia | Create Travel"
        description="12 dias pelo sul da Itália em grupo com guia do Brasil: Sorrento, Costa Amalfitana, Pompeia, Matera, Bari, Alberobello, Lecce e Santa Maria di Leuca. Saída 27/10/2026 pela ITA Airways. Entrada 25% + 9x sem juros."
        canonicalPath="/grupos/sul-italia-2026"
        ogImage={heroImg}
        ogType="article"
        jsonLd={jsonLd}
        keywords="viagem em grupo Sul da Itália 2026, Costa Amalfitana outono, Matera Sassi, Puglia em grupo, Alberobello trulli, Create Travel Itália"
      />
      <Header />
      <WhatsAppButton variant="float" params={whatsappParams} />

      {/* Hero */}
      <section className="relative h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Polignano a Mare com casas brancas sobre falésias e mar Adriático ao pôr do sol"
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
              Grupo · 27 de outubro a 07 de novembro de 2026
            </p>
            <h1 className="heading-hero text-white mb-6">Sul da Itália</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
              12 dias de outono italiano: Costa Amalfitana, Pompeia, Matera,
              Puglia e o encontro de dois mares em Santa Maria di Leuca — com
              guia do Brasil e voos ITA Airways.
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
            { icon: Calendar, label: "Datas", value: "27/10 a 07/11/2026" },
            { icon: Users, label: "Perfil", value: "Grupo com guia do Brasil" },
            { icon: Plane, label: "Voos", value: "ITA Airways" },
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
              Outono na Itália: sabores, histórias e encanto do sul
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
              Companhia aérea nacional da Itália, sucessora da Alitalia. Voo
              direto Guarulhos–Roma e conexões internas a Nápoles e Brindisi
              para abrir e fechar a viagem nas duas pontas do sul italiano.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Ida
              </p>
              <p className="font-serif text-lg">GRU → Roma → Nápoles</p>
              <p className="text-white/75 text-sm mt-1">
                27/10 AZ 0675 às 15h45 · conexão AZ 1263 · chegada Nápoles
                28/10 às 10h35
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Volta
              </p>
              <p className="font-serif text-lg">Brindisi → Roma → GRU</p>
              <p className="text-white/75 text-sm mt-1">
                06/11 AZ 1622 às 15h20 · conexão AZ 0674 às 21h50 · chegada GRU
                07/11 às 06h25
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {[
              { city: "Sorrento", hotel: "Cesare Augusto" },
              { city: "Matera", hotel: "Unahotels" },
              { city: "Bari", hotel: "Vittoria Bari" },
              { city: "Lecce", hotel: "8più Lecce" },
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
                  {h.hotel}
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
            A partir de € 4.757 por pessoa
          </h2>
          <p className="text-white/85 mb-8">
            Em acomodação dupla. Valores em euro, por pessoa, acrescidos de IOF
            e taxas de aeroporto e combustível (EUR 187). Sujeitos a
            disponibilidade e confirmação aérea no momento da reserva.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto triplo
              </p>
              <p className="font-serif text-2xl font-semibold">€ 4.730</p>
              <p className="text-white/70 text-xs mt-1">+ IOF EUR 112</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6 ring-2 ring-gold/60">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto duplo
              </p>
              <p className="font-serif text-2xl font-semibold">€ 4.757</p>
              <p className="text-white/70 text-xs mt-1">+ IOF EUR 113</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto individual
              </p>
              <p className="font-serif text-2xl font-semibold">€ 5.328</p>
              <p className="text-white/70 text-xs mt-1">+ IOF EUR 131</p>
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
            Fale com um consultor Create Travel e reserve sua vaga no Grupo Sul
            da Itália 2026. Atendimento personalizado pelo WhatsApp.
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

export default GrupoSulItalia2026;
