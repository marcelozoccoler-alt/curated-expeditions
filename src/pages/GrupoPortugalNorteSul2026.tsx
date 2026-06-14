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
import heroImg from "@/assets/grupo-portugal-norte-sul-2026.jpg";
import { getHotelUrl } from "@/lib/groupHotels";

const whatsappParams = {
  type: "Roteiro" as const,
  name: "Grupo Portugal de Norte a Sul · Outono 2026 (saída 28/09/2026)",
};

const benefits = [
  {
    title: "Porto e Vale do Douro UNESCO",
    desc: "Ribeira do Porto, cruzeiro no Douro a partir do Pinhão e degustação em quinta histórica.",
  },
  {
    title: "Aveiro · Veneza portuguesa",
    desc: "Passeio de moliceiro, ovos moles e visita ao Museu da Vista Alegre.",
  },
  {
    title: "Serra da Estrela",
    desc: "Paisagens de montanha e degustação dos famosos queijos regionais.",
  },
  {
    title: "Fátima e Óbidos",
    desc: "Santuário Mariano e ginjinha no copo de chocolate na vila medieval.",
  },
  {
    title: "Lisboa, Sintra e Cascais",
    desc: "Capital portuguesa, palácios de Sintra e elegância à beira-mar em Estoril.",
  },
  {
    title: "Alentejo e Algarve",
    desc: "Évora cidade-museu, Monsaraz, e as praias douradas de Vilamoura, Sagres, Lagos e Albufeira.",
  },
];

const itinerary = [
  {
    day: "Dia 1 — 28/09 (seg)",
    title: "São Paulo → Madri",
    points: [
      "Apresentação em Guarulhos",
      "Voo Iberia 268 às 14h10 · pernoite a bordo",
    ],
  },
  {
    day: "Dia 2 — 29/09 (ter)",
    title: "Madri → Porto",
    points: [
      "Chegada Madri 05h35 · conexão IB 545 às 11h25",
      "Walking tour: Aliados, São Bento, Ribeira e Ponte Luís I",
    ],
  },
  {
    day: "Dia 3 — 30/09 (qua)",
    title: "Porto · Aveiro",
    points: [
      "Aveiro · passeio de moliceiro e ovos moles",
      "Museu da Vista Alegre",
      "Opcional: jantar com show de fado",
    ],
  },
  {
    day: "Dia 4 — 01/10 (qui)",
    title: "Porto · Braga · Régua",
    points: [
      "Santuário do Bom Jesus e centro histórico",
      "Continuação ao Vale do Douro · Régua Douro Hotel",
    ],
  },
  {
    day: "Dia 5 — 02/10 (sex)",
    title: "Régua · Pinhão · Douro",
    points: [
      "Cruzeiro de 1h pelo Rio Douro",
      "Degustação em quinta tradicional de Vinho do Porto",
    ],
  },
  {
    day: "Dia 6 — 03/10 (sáb)",
    title: "Régua → Serra da Estrela → Covilhã",
    points: [
      "Travessia panorâmica · queijos da Serra",
      "Hospedagem Puralã Wool Valley",
    ],
  },
  {
    day: "Dia 7 — 04/10 (dom)",
    title: "Covilhã → Fátima",
    points: [
      "Santuário do Rosário de Fátima",
      "Possibilidade de Procissão das Velas",
    ],
  },
  {
    day: "Dia 8 — 05/10 (seg)",
    title: "Fátima · Óbidos · Lisboa",
    points: [
      "Vila medieval de Óbidos · ginjinha no copo de chocolate",
      "Chegada a Lisboa · Vip Arts",
    ],
  },
  {
    day: "Dia 9 — 06/10 (ter)",
    title: "Lisboa · Cascais · Estoril · Sintra",
    points: [
      "Belém, Mosteiro dos Jerónimos e Torre",
      "Cabo da Roca, Cascais e palácios de Sintra",
    ],
  },
  {
    day: "Dia 10 — 07/10 (qua)",
    title: "Lisboa → Monsaraz → Évora",
    points: [
      "Reguengos de Monsaraz suspensa sobre campos dourados",
      "Évora cidade-museu · Évora Hotel",
    ],
  },
  {
    day: "Dia 11 — 08/10 (qui)",
    title: "Évora → Faro → Vilamoura",
    points: [
      "Centro histórico amuralhado de Faro",
      "Marina de Vilamoura",
    ],
  },
  {
    day: "Dia 12 — 09/10 (sex)",
    title: "Vilamoura · Sagres · Lagos · Albufeira",
    points: [
      "Falésias douradas do Algarve",
      "Sagres, Lagos e ruelas de Albufeira",
    ],
  },
  {
    day: "Dia 13 — 10/10 (sáb)",
    title: "Vilamoura → Lisboa → Madri",
    points: [
      "Voo IB 1144 às 16h45 · chegada MAD 19h10",
      "Conexão IB 267 às 23h55",
    ],
  },
  {
    day: "Dia 14 — 11/10 (dom)",
    title: "São Paulo",
    points: [
      "Chegada prevista em Guarulhos às 06h00",
      "Fim dos nossos serviços",
    ],
  },
];

const included = [
  "Bilhete aéreo São Paulo / Madri / Porto · Lisboa / Madri / São Paulo em classe econômica pela Iberia, com 1 mala de 23kg",
  "11 noites em hotéis de primeira categoria com café da manhã",
  "Coordenador brasileiro desde São Paulo e guia local em português",
  "Traslados com assistência em português no Porto e em Lisboa",
  "Cruzeiro de 1h no Rio Douro a partir do Pinhão",
  "Degustação de vinhos em quinta no Vale do Douro",
  "Degustação de queijos na Serra da Estrela",
  "Passeio de moliceiro em Aveiro e visita ao Museu da Vista Alegre",
  "Ginjinha em Óbidos no copo de chocolate",
  "1 jantar (sem bebidas)",
  "Tag de rastreamento de bagagem",
  "Acesso à Sala VIP W Premium no aeroporto de Guarulhos",
  "Cartão de assistência GTA FLOT 75 com cobertura médica de US$ 75.000",
  "Seguro cancelamento até 85 anos: US$ 3.000",
];

const notIncluded = [
  "Taxas de embarque",
  "IOF (EUR 115 em apto duplo)",
  "Taxas de aeroporto e combustível (EUR 156)",
  "Bebidas nas refeições",
  "Gorjetas a guias, motoristas e garçons",
  "Despesas de carregadores de malas",
  "Despesas pessoais (frigobar, lavanderia, telefonemas, etc.)",
  "Documentação de viagem (passaporte, ETIAS quando vigente)",
];

const faqs = [
  {
    q: "Qual a condição de pagamento?",
    a: "25% de entrada no ato da reserva e o saldo (75%) em 9 parcelas sem juros no cartão de crédito. Valores em euro, sujeitos a disponibilidade e confirmação aérea.",
  },
  {
    q: "Brasileiros precisam de visto?",
    a: "Não. Brasileiros não precisam de visto para Portugal e Espanha em estadias turísticas até 90 dias. É obrigatório passaporte com validade mínima de 6 meses a partir do retorno e preenchimento do ETIAS quando estiver em vigor.",
  },
  {
    q: "Como é Portugal em outubro?",
    a: "Outono dourado lusitano: temperaturas entre 14–24 °C (mais quente no Algarve), dias ensolarados, vindima no Douro e folhagens em tons cobre. Recomendamos camadas, casaco leve e calçado confortável para piso de pedra.",
  },
  {
    q: "Quais hotéis estão previstos?",
    a: "Porto: Fénix Porto ou Ipanema · Régua: Régua Douro · Covilhã: Puralã Wool Valley · Fátima: Estrela de Fátima · Lisboa: Vip Arts · Évora: Évora Hotel · Vilamoura: hotel de primeira categoria. Todos com café da manhã.",
  },
  {
    q: "Qual o perfil do grupo?",
    a: "Grupo pequeno com coordenador brasileiro desde São Paulo e guia local em português. Casais, amigos e viajantes solo são muito bem-vindos. Trabalhamos com apartamento duplo (compartilhado) ou individual (com suplemento).",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Grupo Portugal de Norte a Sul · Outono 2026 — Create Travel",
  description:
    "Grupo organizado de 14 dias por Portugal: Porto, Douro, Aveiro, Braga, Serra da Estrela, Fátima, Óbidos, Lisboa, Sintra, Évora e Algarve. Saída 28/09/2026 pela Iberia com guia desde o Brasil.",
  image: heroImg,
  touristType: "Cultura, gastronomia, vinhos, outono ibérico",
  itinerary: itinerary.map((d, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${d.day} — ${d.title}`,
  })),
  offers: {
    "@type": "Offer",
    price: "4498.00",
    priceCurrency: "EUR",
    availability: "https://schema.org/LimitedAvailability",
    validThrough: "2026-09-28",
  },
  provider: {
    "@type": "TravelAgency",
    name: "Create Travel",
    url: CONTACT.domain,
  },
};

const GrupoPortugalNorteSul2026 = () => {
  const ctaLink = generateWhatsAppLink(whatsappParams);

  return (
    <div className="min-h-screen">
      <SEO
        title="Grupo Portugal de Norte a Sul · Outono 2026 · Porto, Douro, Lisboa & Algarve | Create Travel"
        description="14 dias por Portugal no outono 2026: Porto, Douro, Aveiro, Braga, Serra da Estrela, Fátima, Óbidos, Lisboa, Sintra, Évora e Algarve. Saída 28/09/2026 pela Iberia. Entrada 25% + 9x sem juros."
        canonicalPath="/grupos/portugal-norte-sul-2026"
        ogImage={heroImg}
        ogType="article"
        jsonLd={jsonLd}
        keywords="viagem em grupo Portugal 2026, Vale do Douro outono, Porto Lisboa Algarve, Serra da Estrela queijos, Fátima Óbidos, Create Travel Iberia"
      />
      <Header />
      <WhatsAppButton variant="float" params={whatsappParams} />

      {/* Hero */}
      <section className="relative h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Vale do Douro no outono — socalcos de vinhedos em tons dourados sobre o rio Douro com quintas históricas"
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
              Grupo · 28 de setembro a 11 de outubro de 2026
            </p>
            <h1 className="heading-hero text-white mb-6">
              Portugal de Norte a Sul
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
              14 dias do Porto ao Algarve no auge do outono — Douro, Serra da Estrela, Fátima, Lisboa, Évora e mar do sul. Com guia do Brasil e voos Iberia.
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
            { icon: Calendar, label: "Datas", value: "28/09 a 11/10/2026" },
            { icon: Users, label: "Perfil", value: "Grupo com guia do Brasil" },
            { icon: Plane, label: "Voos", value: "Iberia" },
            { icon: Hotel, label: "Estilo", value: "Outono lusitano" },
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
              Tradições, sabores e encantos
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
            <h2 className="heading-section mb-6">Voos Iberia</h2>
            <p className="text-white/85 leading-relaxed mb-4">
              Companhia espanhola com boa conectividade entre Europa e América Latina, aeronaves modernas e serviço de bordo funcional. Pontualidade é um dos seus pontos fortes.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Ida
              </p>
              <p className="font-serif text-lg">GRU → Madri → Porto</p>
              <p className="text-white/75 text-sm mt-1">
                28/09 IB 268 às 14h10 · chegada MAD 29/09 05h35 + IB 545 às 11h25 · chegada OPO 11h45
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Volta
              </p>
              <p className="font-serif text-lg">Lisboa → Madri → GRU</p>
              <p className="text-white/75 text-sm mt-1">
                10/10 IB 1144 às 16h45 · chegada MAD 19h10 + IB 267 às 23h55 · chegada GRU 11/10 06h00
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
              14 dias — dia a dia
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { city: "Porto", hotel: "Fénix Porto ou Ipanema" },
              { city: "Régua", hotel: "Régua Douro" },
              { city: "Covilhã", hotel: "Puralã Wool Valley" },
              { city: "Fátima", hotel: "Estrela de Fátima" },
              { city: "Lisboa", hotel: "Vip Arts" },
              { city: "Évora", hotel: "Évora Hotel" },
            ].map((h, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-xl p-6 text-center shadow-card"
              >
                <Hotel className="mx-auto text-gold mb-3" size={22} />
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                  {h.city}
                </p>
                <p className="font-serif font-semibold"><a href={getHotelUrl(h.hotel)} target="_blank" rel="noopener noreferrer" className="hover:text-gold underline-offset-4 hover:underline transition-colors">{h.hotel}</a></p>
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
              { label: "Apto Triplo", price: "€ 4.464" },
              { label: "Apto Duplo", price: "€ 4.498", highlight: true },
              { label: "Apto Individual", price: "€ 5.589" },
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
            + IOF e taxas de aeroporto/combustível (EUR 156). Valores sujeitos a alteração até a confirmação da reserva.
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

export default GrupoPortugalNorteSul2026;
