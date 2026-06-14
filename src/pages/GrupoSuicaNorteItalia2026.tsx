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
import heroImg from "@/assets/grupo-suica-norte-italia-2026.jpg";

const whatsappParams = {
  type: "Roteiro" as const,
  name: "Grupo Suíça & Norte da Itália · Outono 2026 (saída 01/10/2026)",
};

const benefits = [
  {
    title: "Zurique e a fábrica da Lindt",
    desc: "Walking tour pelo centro histórico, vitrais de Chagall na Fraumünster e visita à Lindt Home of Chocolate.",
  },
  {
    title: "Monte Titlis e Jungfrau",
    desc: "Teleférico rotativo a 3.238 m, Cliff Walk e a opcional 'Topo da Europa' em Grindelwald.",
  },
  {
    title: "Glacier Express panorâmico",
    desc: "Trem lendário entre Andermatt e St. Moritz cruzando os Alpes outonais em janelas panorâmicas.",
  },
  {
    title: "Lago de Como e Riviera",
    desc: "Bellagio, Portofino, Santa Margherita Ligure e as casas coloridas de Cinque Terre à beira-mar.",
  },
  {
    title: "Vinhos do Piemonte",
    desc: "Degustação de Gavi em vinícola tradicional antes da chegada a Milão.",
  },
  {
    title: "Voos TAP Air Portugal",
    desc: "Conexão eficiente via Lisboa com franquia de 23 kg e acolhida portuguesa desde o embarque.",
  },
];

const itinerary = [
  {
    day: "Dia 1 — 01/10 (qui)",
    title: "São Paulo → Lisboa",
    points: [
      "Apresentação em Guarulhos com o coordenador",
      "Voo TAP 082 às 15h30 · pernoite a bordo",
    ],
  },
  {
    day: "Dia 2 — 02/10 (sex)",
    title: "Lisboa → Zurique",
    points: [
      "Chegada Lisboa 05h25 · conexão TAP 930 às 08h35",
      "Chegada Zurique 12h25 · Mercure Zurich City",
    ],
  },
  {
    day: "Dia 3 — 03/10 (sáb)",
    title: "Zurique · Lindt",
    points: [
      "Walking tour: Grossmünster e Fraumünster (vitrais Chagall)",
      "Visita à Fábrica de Chocolate Lindt",
      "Tarde livre",
    ],
  },
  {
    day: "Dia 4 — 04/10 (dom)",
    title: "Zurique → Lucerna",
    points: [
      "Lucerna · Ponte Capela e Leão de Lucerna",
      "Hospedagem Gran Europe",
    ],
  },
  {
    day: "Dia 5 — 05/10 (seg)",
    title: "Lucerna · Engelberg · Monte Titlis",
    points: [
      "Mosteiro de Engelberg",
      "Teleférico rotativo ao Titlis · Cliff Walk e Glacier Park",
    ],
  },
  {
    day: "Dia 6 — 06/10 (ter)",
    title: "Interlaken · Grindelwald",
    points: [
      "Cidade entre dois lagos",
      "Grindelwald e opcional Jungfrau (Topo da Europa)",
      "Hospedagem The Hey · Interlaken",
    ],
  },
  {
    day: "Dia 7 — 07/10 (qua)",
    title: "Interlaken · Berna · Andermatt",
    points: [
      "Capital suíça e centro histórico (UNESCO)",
      "Traslado a Andermatt",
    ],
  },
  {
    day: "Dia 8 — 08/10 (qui)",
    title: "Glacier Express · St. Moritz",
    points: [
      "Trem panorâmico Andermatt → St. Moritz",
      "Hospedagem Europa St. Moritz",
    ],
  },
  {
    day: "Dia 9 — 09/10 (sex)",
    title: "St. Moritz → Lago de Como → Gênova",
    points: [
      "Travessia para a Itália · Lago de Como",
      "Almoço em Como (sem bebidas)",
      "Continuação à Ligúria · AC Genova Centro",
    ],
  },
  {
    day: "Dia 10 — 10/10 (sáb)",
    title: "Gênova · Cinque Terre",
    points: [
      "Vilarejos coloridos da Riviera",
      "Manarola, Vernazza e Monterosso",
    ],
  },
  {
    day: "Dia 11 — 11/10 (dom)",
    title: "Gênova → Gavi → Milão",
    points: [
      "Degustação de vinhos em vinícola de Gavi (Piemonte)",
      "Tour panorâmico em Milão: Duomo, Galleria, La Scala",
      "Duo Milano Porta Nuova",
    ],
  },
  {
    day: "Dia 12 — 12/10 (seg)",
    title: "Milão → Lisboa → São Paulo",
    points: [
      "Voo TAP 825 às 17h25 · chegada LIS 19h25",
      "Conexão TAP 087 às 23h30",
    ],
  },
  {
    day: "Dia 13 — 13/10 (ter)",
    title: "São Paulo",
    points: [
      "Chegada prevista em Guarulhos às 05h50",
      "Fim dos nossos serviços",
    ],
  },
];

const included = [
  "Bilhete aéreo São Paulo / Lisboa / Zurique · Malpensa / Lisboa / São Paulo em classe econômica pela TAP Air Portugal, com 1 mala de 23kg",
  "10 noites em hotéis de primeira categoria com café da manhã",
  "Guia acompanhante desde o Brasil",
  "Traslados com assistência em português/espanhol: chegada Zurique e saída Milão",
  "Visitas com guia local em português/espanhol",
  "Visita à Fábrica de Chocolate Lindt",
  "Teleférico ao Monte Titlis com Cliff Walk e Glacier Park",
  "Glacier Express entre Andermatt e St. Moritz",
  "Almoço em Como e degustação de vinhos em Gavi",
  "Tag de rastreamento de bagagem",
  "Acesso à Sala VIP W Premium no aeroporto de Guarulhos",
  "Cartão de assistência GTA FLOT 75 com cobertura médica de US$ 75.000",
  "Seguro cancelamento Plus Reason até 85 anos: US$ 3.000",
];

const notIncluded = [
  "Taxas de embarque",
  "IOF (EUR 176 em apto duplo)",
  "Taxas de aeroporto e combustível (EUR 251)",
  "Subida opcional à Jungfrau",
  "Gorjetas a guias, motoristas e garçons",
  "Despesas de maleteiros",
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
    a: "Não. Brasileiros não precisam de visto para Suíça, Itália e Portugal em estadias turísticas até 90 dias. É obrigatório passaporte com validade mínima de 6 meses a partir do retorno e preenchimento do ETIAS quando estiver em vigor.",
  },
  {
    q: "Como é a Suíça e o norte da Itália em outubro?",
    a: "Outono dourado alpino: temperaturas entre 5–18 °C, larch trees em tons cobre, picos com neve recente e lagos italianos espelhados. Recomendamos camadas, casaco quente, capa de chuva, gorro e luvas para o Titlis.",
  },
  {
    q: "Quais hotéis estão previstos?",
    a: "Zurique: Mercure Zurich City · Lucerna: Gran Europe · Interlaken: The Hey · St. Moritz: Europa St. Moritz · Gênova: AC Genova Centro · Milão: Duo Milano Porta Nuova. Todos de primeira categoria.",
  },
  {
    q: "Qual o perfil do grupo?",
    a: "Grupo pequeno com guia acompanhante desde o Brasil. Casais, amigos e viajantes solo são muito bem-vindos. Trabalhamos com apartamento duplo (compartilhado) ou individual (com suplemento).",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Grupo Suíça & Norte da Itália · Outono 2026 — Create Travel",
  description:
    "Grupo organizado de 13 dias pela Suíça e Norte da Itália no outono: Zurique, Lucerna, Titlis, Jungfrau, Glacier Express, Lago de Como, Cinque Terre, Piemonte e Milão. Saída 01/10/2026 pela TAP Air Portugal com guia desde o Brasil.",
  image: heroImg,
  touristType: "Alpes, gastronomia, outono europeu",
  itinerary: itinerary.map((d, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${d.day} — ${d.title}`,
  })),
  offers: {
    "@type": "Offer",
    price: "6498.00",
    priceCurrency: "EUR",
    availability: "https://schema.org/LimitedAvailability",
    validThrough: "2026-10-01",
  },
  provider: {
    "@type": "TravelAgency",
    name: "Create Travel",
    url: CONTACT.domain,
  },
};

const GrupoSuicaNorteItalia2026 = () => {
  const ctaLink = generateWhatsAppLink(whatsappParams);

  return (
    <div className="min-h-screen">
      <SEO
        title="Grupo Suíça & Norte da Itália · Outono 2026 · Alpes, Glacier Express, Cinque Terre & Milão | Create Travel"
        description="13 dias entre Suíça e Norte da Itália no outono 2026: Zurique, Lindt, Monte Titlis, Glacier Express, Lago de Como, Cinque Terre, Piemonte e Milão. Saída 01/10/2026 pela TAP Air Portugal. Entrada 25% + 9x sem juros."
        canonicalPath="/grupos/suica-norte-italia-2026"
        ogImage={heroImg}
        ogType="article"
        jsonLd={jsonLd}
        keywords="viagem em grupo Suíça 2026, Norte da Itália outono, Glacier Express, Monte Titlis Jungfrau, Cinque Terre Portofino, Lago de Como, Create Travel TAP"
      />
      <Header />
      <WhatsAppButton variant="float" params={whatsappParams} />

      {/* Hero */}
      <section className="relative h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Alpes suíços em Grindelwald no outono — chalés tradicionais, larch trees dourados e picos nevados"
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
              Grupo · 01 a 13 de outubro de 2026
            </p>
            <h1 className="heading-hero text-white mb-6">
              Suíça & Norte da Itália
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
              13 dias entre Alpes nevados, Glacier Express, lagos italianos e a Riviera — com guia do Brasil e voos TAP Air Portugal.
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
            { icon: Calendar, label: "Datas", value: "01 a 13/10/2026" },
            { icon: Users, label: "Perfil", value: "Grupo com guia do Brasil" },
            { icon: Plane, label: "Voos", value: "TAP Air Portugal" },
            { icon: Hotel, label: "Estilo", value: "Outono alpino" },
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
              Charme, gastronomia e paisagens de outono
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
            <h2 className="heading-section mb-6">Voos TAP Air Portugal</h2>
            <p className="text-white/85 leading-relaxed mb-4">
              Companhia portuguesa com acolhida lusitana desde o embarque, voos diretos do Brasil a Lisboa e conexões eficientes a Zurique e Milão.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Ida
              </p>
              <p className="font-serif text-lg">GRU → Lisboa → Zurique</p>
              <p className="text-white/75 text-sm mt-1">
                01/10 TAP 082 às 15h30 · chegada LIS 02/10 05h25 + TAP 930 às 08h35 · chegada ZRH 12h25
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Volta
              </p>
              <p className="font-serif text-lg">Malpensa → Lisboa → GRU</p>
              <p className="text-white/75 text-sm mt-1">
                12/10 TAP 825 às 17h25 · chegada LIS 19h25 + TAP 087 às 23h30 · chegada GRU 13/10 05h50
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
              13 dias — dia a dia
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
              { city: "Zurique", hotel: "Mercure Zurich City" },
              { city: "Lucerna", hotel: "Gran Europe" },
              { city: "Interlaken", hotel: "The Hey" },
              { city: "St. Moritz", hotel: "Europa St. Moritz" },
              { city: "Gênova", hotel: "AC Genova Centro" },
              { city: "Milão", hotel: "Duo Milano Porta Nuova" },
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
              { label: "Apto Triplo", price: "€ 6.467" },
              { label: "Apto Duplo", price: "€ 6.498", highlight: true },
              { label: "Apto Individual", price: "€ 7.998" },
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
            + IOF e taxas de aeroporto/combustível (EUR 251). Valores sujeitos a alteração até a confirmação da reserva.
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

export default GrupoSuicaNorteItalia2026;
