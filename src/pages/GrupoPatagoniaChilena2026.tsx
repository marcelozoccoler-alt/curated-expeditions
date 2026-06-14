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
import heroImg from "@/assets/grupo-patagonia-chilena-2026.jpg";

const whatsappParams = {
  type: "Roteiro" as const,
  name: "Grupo Patagônia Chilena 2026 (saída 04/10/2026)",
};

const benefits = [
  {
    title: "Guia acompanhante desde o Brasil",
    desc: "Você embarca em Guarulhos com a equipe e segue acompanhado até o retorno.",
  },
  {
    title: "Primavera na Patagônia Austral",
    desc: "Estações em renovação: estepes verdes, lagos vibrantes e fauna em atividade.",
  },
  {
    title: "Voos diretos pela LATAM",
    desc: "Trechos SP/Santiago e Santiago/Punta Arenas, com bagagem de 23 kg incluída.",
  },
  {
    title: "Hotéis de primeira categoria",
    desc: "Almacruz (Santiago), Cabo del Hornos (Punta Arenas) e Costa Australis (Puerto Natales).",
  },
  {
    title: "Refeições selecionadas",
    desc: "2 almoços, 1 lunch box e 3 jantares (sem bebidas) cuidadosamente programados.",
  },
  {
    title: "Sala VIP + seguros completos",
    desc: "Acesso à sala W Premium em GRU, seguro médico US$ 75.000 e seguro cancelamento Plus Reason.",
  },
];

const itinerary = [
  {
    day: "Dia 1 — 04/10 (dom)",
    title: "São Paulo → Santiago",
    points: [
      "Apresentação no Aeroporto de Guarulhos e encontro com o guia",
      "Voo LATAM 606 às 14h55 com destino a Santiago",
      "Chegada às 18h15, recepção e traslado ao hotel",
      "Hospedagem em Santiago (Hotel Almacruz)",
    ],
  },
  {
    day: "Dia 2 — 05/10 (seg)",
    title: "Santiago — city tour e Vinícola Undurraga",
    points: [
      "Visita panorâmica: La Moneda, Plaza de Armas, Catedral, Providencia, Vitacura e Las Condes",
      "Parada em centro de artesanato chileno",
      "Tarde no Vale do Maipo: Vinícola Undurraga (fundada em 1885)",
      "Degustação e retorno ao hotel · Hospedagem em Santiago",
    ],
  },
  {
    day: "Dia 3 — 06/10 (ter)",
    title: "Santiago → Punta Arenas",
    points: [
      "Traslado ao aeroporto e voo LATAM 83 às 08h50",
      "Chegada a Punta Arenas às 13h18",
      "Recepção e traslado ao hotel",
      "Hospedagem em Punta Arenas (Cabo del Hornos)",
    ],
  },
  {
    day: "Dia 4 — 07/10 (qua)",
    title: "Punta Arenas → Puerto Natales",
    points: [
      "City tour: Cerro de la Cruz, Plaza Muñoz Gamero e monumento a Fernão de Magalhães",
      "Almoço incluso",
      "Viagem terrestre até Puerto Natales",
      "Jantar e hospedagem em Puerto Natales (Costa Australis)",
    ],
  },
  {
    day: "Dia 5 — 08/10 (qui)",
    title: "Torres del Paine — dia inteiro",
    points: [
      "Visita à Caverna do Milodón (200 m de comprimento)",
      "Entrada no Parque Nacional Torres del Paine",
      "Caminhada até a cachoeira Salto Grande · Almoço incluso",
      "Lago Grey: mirante para os icebergs e a geleira",
      "Jantar e hospedagem em Puerto Natales",
    ],
  },
  {
    day: "Dia 6 — 09/10 (sex)",
    title: "Glaciares Balmaceda e Serrano",
    points: [
      "Navegação pelo Seno Última Esperanza até o Parque Nacional Bernardo O'Higgins",
      "Vista do Glaciar Balmaceda a partir do barco",
      "Caminhada de 20 min até o Glaciar Serrano · Lunch box incluso",
      "Retorno a Puerto Natales · Jantar e hospedagem",
    ],
  },
  {
    day: "Dia 7 — 10/10 (sáb)",
    title: "Puerto Natales → Punta Arenas → Santiago",
    points: [
      "Café da manhã e tempo livre (check-out até 11h)",
      "Traslado terrestre a Punta Arenas",
      "Voo LATAM 82 às 18h10 com chegada a Santiago às 20h39",
      "Procedimento de embarque internacional",
    ],
  },
  {
    day: "Dia 8 — 11/10 (dom)",
    title: "Santiago → São Paulo",
    points: [
      "Voo LATAM 609 às 00h20 com destino a São Paulo",
      "Chegada prevista às 05h30",
      "Fim dos nossos serviços",
    ],
  },
];

const included = [
  "Bilhete aéreo São Paulo / Santiago / Punta Arenas / São Paulo (LATAM) com 1 mala de 23 kg",
  "Hotéis de primeira categoria com café da manhã",
  "Guia acompanhante desde o Brasil",
  "Traslados com assistência em português/espanhol em Santiago e Punta Arenas",
  "Visitas com guia local em português em Santiago; em espanhol em Punta Arenas e Puerto Natales",
  "Entradas conforme o roteiro (Torres del Paine, Caverna do Milodón, navegação Balmaceda/Serrano)",
  "2 almoços, 1 lunch box e 3 jantares (sem bebidas)",
  "Tag de rastreamento de bagagem",
  "Acesso à Sala VIP W Premium no aeroporto de Guarulhos",
  "Cartão de assistência GTA FLOT 75 com cobertura médica de US$ 75.000",
  "Seguro cancelamento Plus Reason — até 85 anos: US$ 3.000",
];

const notIncluded = [
  "Taxas de embarque",
  "IOF",
  "Bebidas nas refeições",
  "Gorjetas a guias, motoristas e garçons",
  "Despesas de maleteiros",
  "Despesas pessoais (frigobar, telefonemas, lavanderia, etc.)",
  "Taxas, impostos e afins",
];

const faqs = [
  {
    q: "Qual a condição de pagamento?",
    a: "25% de entrada e o saldo (75%) em 9 parcelas sem juros no cartão de crédito. Valores sujeitos a disponibilidade e confirmação aérea no momento da reserva.",
  },
  {
    q: "Como é o clima na Patagônia em outubro?",
    a: "Primavera austral: dias mais longos, temperaturas amenas durante o dia (5 a 15 °C) e noites frias. Ventos típicos da região. Recomendamos roupas em camadas, corta-vento impermeável e calçado de trilha.",
  },
  {
    q: "É uma viagem muito puxada fisicamente?",
    a: "Não. As caminhadas são curtas (20 a 30 minutos) e em terreno acessível. É essencial estar disposto a andar e enfrentar o vento patagônico, mas não exige preparo físico avançado.",
  },
  {
    q: "Quais documentos são necessários?",
    a: "Passaporte com validade mínima de 6 meses a partir da data de retorno. Brasileiros não precisam de visto nem de vacinas obrigatórias para o Chile.",
  },
  {
    q: "Posso viajar sozinho(a)? Tem suplemento single?",
    a: "Sim. Valores em base dupla ou tripla; o apartamento individual tem suplemento. Podemos emparelhar você com outra pessoa do grupo do mesmo gênero.",
  },
  {
    q: "Qual o tamanho do grupo?",
    a: "Grupo organizado pela Create Travel com guia acompanhante desde São Paulo. Vagas limitadas — recomenda-se reserva antecipada.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Grupo Patagônia Chilena 2026 — Create Travel",
  description:
    "Grupo organizado de 8 dias pela Patagônia Chilena: Santiago, Punta Arenas, Puerto Natales, Torres del Paine e Glaciares Balmaceda e Serrano. Saída 04/10/2026 com guia acompanhante desde o Brasil.",
  image: heroImg,
  touristType: "Natureza, aventura, paisagens",
  itinerary: itinerary.map((d, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${d.day} — ${d.title}`,
  })),
  offers: {
    "@type": "Offer",
    price: "3498.00",
    priceCurrency: "USD",
    availability: "https://schema.org/LimitedAvailability",
    validThrough: "2026-10-04",
  },
  provider: {
    "@type": "TravelAgency",
    name: "Create Travel",
    url: CONTACT.domain,
  },
};

const GrupoPatagoniaChilena2026 = () => {
  const ctaLink = generateWhatsAppLink(whatsappParams);

  return (
    <div className="min-h-screen">
      <SEO
        title="Grupo Patagônia Chilena 2026 — Saída 04/10 | Create Travel"
        description="Santiago, Torres del Paine e glaciares em grupo com guia desde o Brasil. 8 dias na primavera patagônica, voos LATAM, saída 04/10/2026. Entrada 25% + 9x sem juros."
        canonicalPath="/grupos/patagonia-chilena-2026"
        ogImage={heroImg}
        ogType="article"
        jsonLd={jsonLd}
      />
      <Header />
      <WhatsAppButton variant="float" params={whatsappParams} />

      {/* Hero */}
      <section className="relative h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Torres del Paine na primavera, Patagônia Chilena"
            className="w-full h-full object-cover"
            width={1600}
            height={900}
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
              Grupo · 04 a 11 de outubro de 2026
            </p>
            <h1 className="heading-hero text-white mb-6">
              Grupo Patagônia Chilena 2026
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
              Primavera no fim do mundo: 8 dias por Santiago, Punta Arenas,
              Torres del Paine e os glaciares Balmaceda e Serrano, com guia
              acompanhante desde o Brasil.
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
            { icon: Calendar, label: "Datas", value: "04 a 11/10/2026" },
            { icon: Users, label: "Perfil", value: "Grupo com guia do Brasil" },
            { icon: Plane, label: "Voos", value: "LATAM · diretos" },
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
              Aventura, conforto e companhia desde o Brasil
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

      {/* Flights summary */}
      <section className="section-padding bg-navy text-white">
        <div className="container-editorial grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-caption text-gold mb-4">
              Passagens aéreas incluídas
            </p>
            <h2 className="heading-section mb-6">
              Voos pela LATAM Airlines
            </h2>
            <p className="text-white/85 leading-relaxed mb-4">
              Classe econômica com 1 bagagem despachada de até 23 kg por pessoa.
              Trechos previstos (sujeitos a ajustes pela companhia aérea):
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Ida
              </p>
              <p className="font-serif text-lg">
                São Paulo (GRU) → Santiago → Punta Arenas
              </p>
              <p className="text-white/75 text-sm mt-1">
                04/10 LATAM 606 14h55 · 06/10 LATAM 83 08h50
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Volta
              </p>
              <p className="font-serif text-lg">
                Punta Arenas → Santiago → São Paulo (GRU)
              </p>
              <p className="text-white/75 text-sm mt-1">
                10/10 LATAM 82 18h10 · 11/10 LATAM 609 00h20 — chegada GRU 05h30
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
              8 dias — dia a dia
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
          <div className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              { city: "Santiago", hotel: "Almacruz" },
              { city: "Punta Arenas", hotel: "Cabo del Hornos" },
              { city: "Puerto Natales", hotel: "Costa Australis" },
            ].map((h) => (
              <div
                key={h.city}
                className="bg-card border border-border rounded-xl p-6 text-center shadow-card"
              >
                <Hotel className="text-gold mx-auto mb-3" size={22} />
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                  {h.city}
                </p>
                <p className="font-serif text-lg font-semibold text-foreground">
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
            A partir de US$ 3.498 por pessoa
          </h2>
          <p className="text-white/85 mb-8">
            Em acomodação dupla. Valores em dólar, por pessoa, acrescidos de IOF
            (USD 96) e taxas de aeroporto e combustível (USD 189). Sujeitos a
            disponibilidade e confirmação aérea.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto triplo
              </p>
              <p className="font-serif text-2xl font-semibold">US$ 3.468</p>
              <p className="text-white/70 text-xs mt-1">+ IOF US$ 95</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6 ring-2 ring-gold/60">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto duplo
              </p>
              <p className="font-serif text-2xl font-semibold">US$ 3.498</p>
              <p className="text-white/70 text-xs mt-1">+ IOF US$ 96</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto individual
              </p>
              <p className="font-serif text-2xl font-semibold">US$ 4.099</p>
              <p className="text-white/70 text-xs mt-1">+ IOF US$ 115</p>
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
            Patagônia Chilena 2026. Atendimento personalizado pelo WhatsApp.
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

export default GrupoPatagoniaChilena2026;
