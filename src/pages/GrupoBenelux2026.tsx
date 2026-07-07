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
import heroImg from "@/assets/grupo-benelux-2026.jpg";
import { getHotelUrl, buildHotelsJsonLd, buildHotelsFAQs, buildHotelsKeywords } from "@/lib/groupHotels";

const whatsappParams = {
  type: "Roteiro" as const,
  name: "Grupo Benelux · Países Baixos, Bélgica e Luxemburgo 2026 (saída 13/10/2026)",
};

const benefits = [
  {
    title: "Amsterdã pelos canais",
    desc: "Patrimônio UNESCO no outono dourado: Praça Dam, Palácio Real, Rijksmuseum e o charme dos cafés à beira d'água.",
  },
  {
    title: "Giethoorn e Afsluitdijk",
    desc: "Passeio de barco na 'Veneza dos Países Baixos' e o impressionante dique de 32 km — proeza da engenharia holandesa.",
  },
  {
    title: "Haia, Delft e Kinderdijk",
    desc: "Capital política, porcelana azul de Vermeer e os 19 moinhos de Kinderdijk, Patrimônio Mundial da UNESCO.",
  },
  {
    title: "Cervejaria trapista",
    desc: "Visita a uma autêntica abadia trapista belga com degustação de 3 cervejas — séculos de tradição monástica.",
  },
  {
    title: "Bruges, Gante e Bruxelas",
    desc: "O conto de fadas medieval de Bruges, a cena vibrante de Gante e a Grand Place de Bruxelas — coração da União Europeia.",
  },
  {
    title: "Luxemburgo de dia inteiro",
    desc: "Palácio Grão-Ducal, Catedral Notre-Dame e o Planalto do Kirchberg — pequeno país, grandioso em beleza.",
  },
];

const itinerary = [
  {
    day: "Dia 1 — 13/10 (ter)",
    title: "São Paulo → Madri",
    points: [
      "Apresentação em Guarulhos",
      "Voo Iberia 268 às 14h10 · pernoite a bordo",
    ],
  },
  {
    day: "Dia 2 — 14/10 (qua)",
    title: "Madri → Amsterdã",
    points: [
      "Chegada Madri 05h35 · conexão Iberia 731 às 08h40",
      "Chegada Amsterdã 11h20",
      "Recepção e traslado ao Four Elements Hotel",
    ],
  },
  {
    day: "Dia 3 — 15/10 (qui)",
    title: "Amsterdã · canais e museus",
    points: [
      "Visita panorâmica com guia local em português",
      "Praça dos Museus, Rijksmuseum e Coster Diamonds",
      "Mercado das Flores e Praça Dam · tarde livre",
    ],
  },
  {
    day: "Dia 4 — 16/10 (sex)",
    title: "Amsterdã → Giethoorn → Roterdã",
    points: [
      "Passeio de barco em Giethoorn (vila sem carros)",
      "Parada no Afsluitdijk · dique de 32 km",
      "Hospedagem no Holiday Inn Express Roterdã",
    ],
  },
  {
    day: "Dia 5 — 17/10 (sáb)",
    title: "Roterdã · Haia · Delft · Kinderdijk",
    points: [
      "Panorâmica em Haia (capital administrativa)",
      "Delft · porcelana azul e cidade natal de Vermeer",
      "Moinhos de Kinderdijk · Patrimônio UNESCO",
    ],
  },
  {
    day: "Dia 6 — 18/10 (dom)",
    title: "Roterdã → Cervejaria trapista → Antuérpia → Bruges",
    points: [
      "Visita à cervejaria trapista com degustação de 3 cervejas",
      "Antuérpia: Praça Maior, Catedral e bairro dos diamantes",
      "Hospedagem em Bruges (Le Bois de Bruges)",
    ],
  },
  {
    day: "Dia 7 — 19/10 (seg)",
    title: "Bruges medieval",
    points: [
      "Centro histórico de Bruges (UNESCO)",
      "Canais, praças e torres medievais",
      "Tempo livre para chocolates e cafés",
    ],
  },
  {
    day: "Dia 8 — 20/10 (ter)",
    title: "Bruges → Gante → Bruxelas",
    points: [
      "Gante · Castelo dos Condes e canais",
      "Continuação a Bruxelas",
      "Hospedagem no Novotel Brussels City Centre",
    ],
  },
  {
    day: "Dia 9 — 21/10 (qua)",
    title: "Bruxelas · capital da UE",
    points: [
      "Grand Place, Manneken Pis e Catedral de São Miguel",
      "Atomium e Parc du Cinquantenaire",
      "Tarde livre",
    ],
  },
  {
    day: "Dia 10 — 22/10 (qui)",
    title: "Bruxelas → Luxemburgo → Bruxelas",
    points: [
      "Panorâmica em Luxemburgo com guia local",
      "Palácio Grão-Ducal, Catedral Notre-Dame e Kirchberg",
      "Retorno a Bruxelas",
    ],
  },
  {
    day: "Dia 11 — 23/10 (sex)",
    title: "Bruxelas → Madri → São Paulo",
    points: [
      "Voo Iberia 604 às 07h05 a Madri (chegada 11h20)",
      "Conexão Iberia 271 às 11h50 · chegada GRU 17h50",
      "Fim dos nossos serviços",
    ],
  },
];

const included = [
  "Bilhete aéreo São Paulo / Madri / Amsterdã / Bruxelas / Madri / São Paulo em classe econômica pela Iberia, com 1 mala de 23kg",
  "Hotéis de primeira categoria com café da manhã",
  "Guia acompanhante desde o Brasil",
  "Traslados com assistência em português em Amsterdã e Bruxelas",
  "Visitas com guia local em Amsterdã, Bruges, Gante, Bruxelas e Luxemburgo",
  "Entradas: passeio de barco em Giethoorn, cervejaria trapista (com degustação) e Kinderdijk",
  "Tag de rastreamento de bagagem",
  "Acesso à Sala VIP W Premium no aeroporto de Guarulhos",
  "Cartão de assistência GTA FLOT 75 com cobertura médica de US$ 75.000",
  "Seguro cancelamento Plus Reason até 85 anos: US$ 3.000",
];

const notIncluded = [
  "Taxas de embarque",
  "IOF",
  "Taxas de aeroporto e combustível (EUR 187)",
  "Gorjetas a guias, motoristas e garçons",
  "Carregadores de malas",
  "Bebidas e refeições não mencionadas no roteiro",
  "Despesas pessoais (frigobar, telefonemas, lavanderia, etc.)",
  "Documentação de viagem",
];

const faqs = [
  {
    q: "Qual a condição de pagamento?",
    a: "25% de entrada no ato da reserva e o saldo (75%) em 9 parcelas sem juros no cartão de crédito. Valores em euro, sujeitos a disponibilidade e confirmação aérea.",
  },
  {
    q: "Brasileiros precisam de visto?",
    a: "Não. Brasileiros não precisam de visto para Países Baixos, Bélgica e Luxemburgo (espaço Schengen) para estadias turísticas de até 90 dias. É obrigatório passaporte com validade mínima de 6 meses a partir da data de retorno. Vacinas não são exigidas.",
  },
  {
    q: "Como é o clima em outubro?",
    a: "Outono europeu clássico: temperaturas entre 8–16 °C, dias mais curtos, folhas douradas e possibilidade de chuva. Recomendamos casaco, capa de chuva leve, calçado confortável e cachecol.",
  },
  {
    q: "Qual a base de hospedagem?",
    a: "Hotéis de primeira categoria em Amsterdã (Four Elements), Roterdã (Holiday Inn Express Central Station), Bruges (Le Bois de Bruges) e Bruxelas (Novotel Brussels City Centre).",
  },
  {
    q: "Qual o perfil do grupo?",
    a: "Grupo pequeno com guia acompanhante desde o Brasil. Casais, amigos e viajantes solo são muito bem-vindos. Trabalhamos com apartamento duplo (compartilhado) ou individual (com suplemento).",
  },
];

const hotelsForSeo = [{ city: "Amsterdã", hotel: "Four Elements" },
              { city: "Roterdã", hotel: "Holiday Inn Express Central Station" },
              { city: "Bruges", hotel: "Le Bois de Bruges" },
              { city: "Bruxelas", hotel: "Novotel Brussels City Centre" }];
const hotelsSeoJsonLd = buildHotelsJsonLd(hotelsForSeo, "Grupo Benelux 2026 — Países Baixos, Bélgica e Luxemburgo — Create Travel", "/grupos/benelux-2026");
const hotelsSeoFaqs = buildHotelsFAQs(hotelsForSeo, "Grupo Benelux 2026 — Países Baixos, Bélgica e Luxemburgo — Create Travel", "/grupos/benelux-2026");
const hotelsSeoKeywords = buildHotelsKeywords(hotelsForSeo);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Grupo Benelux 2026 — Países Baixos, Bélgica e Luxemburgo — Create Travel",
  description:
    "Grupo organizado de 11 dias pelo Benelux: Amsterdã, Giethoorn, Roterdã, Haia, Delft, Kinderdijk, Antuérpia, Bruges, Gante, Bruxelas e Luxemburgo. Saída 13/10/2026 pela Iberia com guia desde o Brasil.",
  image: heroImg,
  touristType: "Cultura, história, outono europeu",
  itinerary: itinerary.map((d, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${d.day} — ${d.title}`,
  })),
  offers: {
    "@type": "Offer",
    price: "4989.00",
    priceCurrency: "EUR",
    availability: "https://schema.org/LimitedAvailability",
    validThrough: "2026-10-13",
  },
  provider: {
    "@type": "TravelAgency",
    name: "Create Travel",
    url: CONTACT.domain,
  },
};

const GrupoBenelux2026 = () => {
  const ctaLink = generateWhatsAppLink(whatsappParams);

  return (
    <div className="min-h-screen">
      <SEO
        title="Grupo Benelux 2026 · Países Baixos, Bélgica e Luxemburgo com guia do Brasil | Create Travel"
        description="11 dias pelo Benelux no outono 2026: Amsterdã, Giethoorn, Roterdã, Haia, Delft, Kinderdijk, Bruges, Gante, Bruxelas e Luxemburgo. Saída 13/10/2026 pela Iberia. Entrada 25% + 9x sem juros."
        canonicalPath="/grupos/benelux-2026"
        ogImage={heroImg}
        ogType="article"
        jsonLd={[jsonLd, ...hotelsSeoJsonLd]}
        keywords={`viagem em grupo Benelux 2026, Países Baixos Bélgica Luxemburgo, Amsterdã outono, Bruges, grupo Benelux com guia do Brasil, Create Travel Iberia, ${hotelsSeoKeywords}`}
      />
      <Header />
      <WhatsAppButton variant="float" params={whatsappParams} />

      {/* Hero */}
      <section className="relative h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Canal de Amsterdã ao entardecer no outono, com casas históricas e ponte de pedra"
            className="w-full h-full object-cover"
            width={1600}
            height={900}
            fetchpriority="high"
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
              Grupo · 13 a 23 de outubro de 2026
            </p>
            <h1 className="heading-hero text-white mb-6">
              Países Baixos, Bélgica & Luxemburgo
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
              11 dias entre canais, moinhos e cidades medievais: Amsterdã,
              Giethoorn, Roterdã, Kinderdijk, Bruges, Gante, Bruxelas e
              Luxemburgo — com guia do Brasil e voos Iberia.
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
            { icon: Calendar, label: "Datas", value: "13 a 23/10/2026" },
            { icon: Users, label: "Perfil", value: "Grupo com guia do Brasil" },
            { icon: Plane, label: "Voos", value: "Iberia" },
            { icon: Hotel, label: "Estilo", value: "Outono europeu" },
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
              Grand Tour entre canais, moinhos e cidades medievais
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
              Uma das companhias aéreas mais tradicionais da Europa, com sede
              em Madri. Frota moderna, bom atendimento a bordo e excelente
              conexão entre Brasil e o Benelux via Madri-Barajas.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Ida
              </p>
              <p className="font-serif text-lg">GRU → Madri → Amsterdã</p>
              <p className="text-white/75 text-sm mt-1">
                13/10 IB 268 às 14h10 + 14/10 IB 731 às 08h40 · chegada AMS 11h20
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Volta
              </p>
              <p className="font-serif text-lg">Bruxelas → Madri → GRU</p>
              <p className="text-white/75 text-sm mt-1">
                23/10 IB 604 às 07h05 + IB 271 às 11h50 · chegada GRU 17h50
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
              { city: "Amsterdã", hotel: "Four Elements" },
              { city: "Roterdã", hotel: "Holiday Inn Express Central Station" },
              { city: "Bruges", hotel: "Le Bois de Bruges" },
              { city: "Bruxelas", hotel: "Novotel Brussels City Centre" },
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
            A partir de € 4.989 por pessoa
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
              <p className="font-serif text-2xl font-semibold">€ 4.968</p>
              <p className="text-white/70 text-xs mt-1">+ IOF EUR 126</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6 ring-2 ring-gold/60">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto duplo
              </p>
              <p className="font-serif text-2xl font-semibold">€ 4.989</p>
              <p className="text-white/70 text-xs mt-1">+ IOF EUR 128</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto individual
              </p>
              <p className="font-serif text-2xl font-semibold">€ 5.898</p>
              <p className="text-white/70 text-xs mt-1">+ IOF EUR 156</p>
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
            Vagas limitadas — Benelux no outono
          </h2>
          <p className="text-muted-foreground mb-8">
            Fale com um consultor Create Travel e reserve sua vaga na saída de
            13/10/2026. Atendimento personalizado pelo WhatsApp.
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

export default GrupoBenelux2026;
