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
import heroImg from "@/assets/grupo-equador-galapagos-2026.jpg";
import { getHotelUrl } from "@/lib/groupHotels";

const whatsappParams = {
  type: "Roteiro" as const,
  name: "Grupo Equador & Galápagos 2026 (saída 12/10/2026)",
};

const benefits = [
  {
    title: "Guia acompanhante desde o Brasil",
    desc: "Embarque em Guarulhos com a equipe Create Travel e siga acompanhado até o retorno.",
  },
  {
    title: "Galápagos: Patrimônio Natural da UNESCO",
    desc: "Dois passeios de iate por ilhas selecionadas — Seymour Norte, Plazas Sul, Santa Fé ou Bartolomé.",
  },
  {
    title: "Voos LATAM internacionais e domésticos",
    desc: "São Paulo / Lima / Quito / Galápagos / Guayaquil / São Paulo, com 23 kg de bagagem incluída.",
  },
  {
    title: "Andes e Avenida dos Vulcões",
    desc: "Quito colonial a 2.850 m, Metade do Mundo e o imponente Parque Nacional Cotopaxi.",
  },
  {
    title: "Hotéis selecionados",
    desc: "Mercure Quito 4★, Ninfa 3★ em Galápagos e Wyndham Pto Santa Ana 4★ em Guayaquil.",
  },
  {
    title: "Sala VIP + seguros completos",
    desc: "Acesso à sala W Premium em GRU, assistência médica de US$ 75.000 e seguro cancelamento Plus Reason.",
  },
];

const itinerary = [
  {
    day: "Dia 1 — 12/10 (seg)",
    title: "São Paulo",
    points: [
      "Apresentação no Aeroporto de Guarulhos às 23h50",
      "Encontro com o guia acompanhante e preparação para o embarque",
    ],
  },
  {
    day: "Dia 2 — 13/10 (ter)",
    title: "São Paulo → Lima → Quito",
    points: [
      "Voo LATAM 2395 às 03h40 com chegada a Lima às 06h55",
      "Conexão LATAM 08h50 → Quito 11h10",
      "Traslado ao hotel · Hospedagem no Mercure Quito",
    ],
  },
  {
    day: "Dia 3 — 14/10 (qua)",
    title: "Quito colonial e Metade do Mundo",
    points: [
      "City tour: Plaza Grande, La Compañía de Jesús, San Francisco",
      "Mirante El Panecillo a mais de 3.000 m de altitude",
      "Loja de chocolate artesanal com cacau Arriba Nacional",
      "Ciudad Mitad del Mundo e Museu Intiñán · Hospedagem em Quito",
    ],
  },
  {
    day: "Dia 4 — 15/10 (qui)",
    title: "Parque Nacional Cotopaxi",
    points: [
      "Avenida dos Vulcões em direção ao Parque Nacional Cotopaxi",
      "Trilha pela floresta de pinheiros e Centro de Interpretação",
      "Lagoa glacial de Limpiopungo (3.800 m) com vista para o Cotopaxi",
      "Visita à fazenda de rosas Rose Success · Hospedagem em Quito",
    ],
  },
  {
    day: "Dia 5 — 16/10 (sex)",
    title: "Quito → Ilhas Galápagos",
    points: [
      "Voo LATAM 1415 às 09h10 → Galápagos às 11h41",
      "Traslado a Santa Cruz via Canal de Itabaca",
      "Almoço incluído no Rancho El Chato com as tartarugas gigantes",
      "Túneis de lava de Santa Cruz e tarde livre em Puerto Ayora",
    ],
  },
  {
    day: "Dia 6 — 17/10 (sáb)",
    title: "Iate por ilhas selecionadas",
    points: [
      "Navegação a uma das ilhas: Plazas Sul, Bartolomé, Santa Fé ou Seymour Norte",
      "Encontros com iguanas, leões-marinhos, fragatas e atobás-de-pés-azuis",
      "Almoço tradicional a bordo",
      "Retorno e noite livre em Puerto Ayora",
    ],
  },
  {
    day: "Dia 7 — 18/10 (dom)",
    title: "Segundo dia de iate em Galápagos",
    points: [
      "Navegação a uma ilha diferente do dia anterior",
      "Snorkel, trilhas e observação de fauna endêmica",
      "Almoço a bordo · Tarde livre em Puerto Ayora",
    ],
  },
  {
    day: "Dia 8 — 19/10 (seg)",
    title: "Galápagos → Guayaquil",
    points: [
      "Voo LATAM 1412 às 13h28 → Guayaquil às 16h19",
      "Traslado ao hotel · Hospedagem no Wyndham Pto Santa Ana",
    ],
  },
  {
    day: "Dia 9 — 20/10 (ter)",
    title: "Guayaquil — city tour",
    points: [
      "Bairro Las Peñas e Morro Santa Ana com vista panorâmica",
      "Malecón 2000, La Rotonda e Avenida 9 de Outubro",
      "Parque das Iguanas (Parque Seminário)",
      "Almoço incluído · Hospedagem em Guayaquil",
    ],
  },
  {
    day: "Dia 10 — 21/10 (qua)",
    title: "Guayaquil → Lima → São Paulo",
    points: [
      "Manhã livre · Check-out até as 12h",
      "Voo LATAM 1448 às 20h45 → Lima 22h35",
      "Conexão LATAM 8123 às 01h45 com destino a Guarulhos",
    ],
  },
  {
    day: "Dia 11 — 22/10 (qui)",
    title: "Chegada a São Paulo",
    points: [
      "Chegada a Guarulhos às 08h40",
      "Fim dos nossos serviços",
    ],
  },
];

const included = [
  "Bilhete aéreo São Paulo / Lima / Quito / Galápagos / Guayaquil / São Paulo (LATAM) com 1 mala de 23 kg",
  "Hotéis de primeira categoria em Quito e Guayaquil e categoria turística em Galápagos, com café da manhã",
  "Guia acompanhante desde o Brasil",
  "Traslados com assistência em português/espanhol em Quito, Galápagos e Guayaquil",
  "Entradas conforme o roteiro (Mitad del Mundo, Museu Intiñán, Cotopaxi, navegações em Galápagos)",
  "4 almoços incluídos",
  "Tag de rastreamento de bagagem",
  "Acesso à Sala VIP W Premium no aeroporto de Guarulhos",
  "Cartão de assistência GTA FLOT 75 com cobertura médica de US$ 75.000",
  "Seguro cancelamento Plus Reason — até 85 anos: US$ 3.000",
];

const notIncluded = [
  "Taxas de embarque",
  "IOF",
  "Taxas de Galápagos (US$ 130) e taxas de aeroporto/combustível (US$ 198)",
  "Bebidas nas refeições",
  "Gorjetas a guias, motoristas e garçons",
  "Despesas de maleteiros",
  "Despesas pessoais (frigobar, telefonemas, lavanderia, etc.)",
];

const faqs = [
  {
    q: "Qual a condição de pagamento?",
    a: "25% de entrada e o saldo (75%) em 9 parcelas sem juros no cartão de crédito. Valores sujeitos a disponibilidade e confirmação aérea no momento da reserva.",
  },
  {
    q: "Quais documentos e vacinas são necessários?",
    a: "Passaporte com validade mínima de 6 meses a partir da data de retorno. Brasileiros não precisam de visto. É exigida a vacina de febre amarela.",
  },
  {
    q: "Como funcionam os passeios em Galápagos?",
    a: "São dois dias inteiros de navegação de iate a partir de Santa Cruz. As ilhas visitadas (Plazas Sul, Bartolomé, Santa Fé ou Seymour Norte) são definidas pelo Parque Nacional conforme controle ambiental — todas oferecem experiências extraordinárias com a fauna endêmica.",
  },
  {
    q: "É uma viagem pesada fisicamente?",
    a: "Não. Há caminhadas leves a moderadas em Cotopaxi (3.800 m de altitude) e em Galápagos. Recomenda-se calçado confortável, protetor solar e disposição para o sol e o mar das ilhas.",
  },
  {
    q: "Posso viajar sozinho(a)? Tem suplemento single?",
    a: "Sim. Valores em base dupla, tripla ou individual. Podemos emparelhar você com outra pessoa do grupo do mesmo gênero, evitando o suplemento single.",
  },
  {
    q: "Qual o tamanho do grupo?",
    a: "Grupo organizado pela Create Travel com guia acompanhante desde São Paulo. Vagas limitadas — recomenda-se reserva antecipada.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Grupo Equador & Galápagos 2026 — Create Travel",
  description:
    "Grupo organizado de 11 dias por Quito, Cotopaxi, Ilhas Galápagos e Guayaquil. Saída 12/10/2026 com guia acompanhante desde o Brasil e voos LATAM.",
  image: heroImg,
  touristType: "Natureza, cultura, fauna endêmica",
  itinerary: itinerary.map((d, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${d.day} — ${d.title}`,
  })),
  offers: {
    "@type": "Offer",
    price: "3997.00",
    priceCurrency: "USD",
    availability: "https://schema.org/LimitedAvailability",
    validThrough: "2026-10-12",
  },
  provider: {
    "@type": "TravelAgency",
    name: "Create Travel",
    url: CONTACT.domain,
  },
};

const GrupoEquadorGalapagos2026 = () => {
  const ctaLink = generateWhatsAppLink(whatsappParams);

  return (
    <div className="min-h-screen">
      <SEO
        title="Grupo Equador & Galápagos 2026 — Saída 12/10 | Create Travel"
        description="Quito, Cotopaxi, Ilhas Galápagos e Guayaquil em grupo com guia desde o Brasil. 11 dias, voos LATAM, saída 12/10/2026. Entrada 25% + 9x sem juros."
        canonicalPath="/grupos/equador-galapagos-2026"
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
            alt="Atobá-de-pés-azuis e iguana marinha em Galápagos, Equador"
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
              Grupo · 12 a 22 de outubro de 2026
            </p>
            <h1 className="heading-hero text-white mb-6">
              Grupo Equador & Galápagos 2026
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
              Dos céus dos Andes ao azul de Galápagos: 11 dias por Quito,
              Cotopaxi, Ilhas Galápagos e Guayaquil, com guia acompanhante
              desde o Brasil.
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
            { icon: Calendar, label: "Datas", value: "12 a 22/10/2026" },
            { icon: Users, label: "Perfil", value: "Grupo com guia do Brasil" },
            { icon: Plane, label: "Voos", value: "LATAM · via Lima" },
            { icon: Hotel, label: "Hospedagem", value: "Hotéis selecionados" },
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
              Natureza extraordinária com a segurança de um grupo
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
                GRU → Lima → Quito · Quito → Galápagos
              </p>
              <p className="text-white/75 text-sm mt-1">
                13/10 LATAM 2395 03h40 · 16/10 LATAM 1415 09h10
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Volta
              </p>
              <p className="font-serif text-lg">
                Galápagos → Guayaquil → Lima → GRU
              </p>
              <p className="text-white/75 text-sm mt-1">
                19/10 LATAM 1412 · 21/10 LATAM 1448 20h45 · LATAM 8123 01h45 — chegada GRU 08h40
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
          <div className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              { city: "Quito", hotel: "Mercure Quito 4★" },
              { city: "Galápagos", hotel: "Ninfa 3★" },
              { city: "Guayaquil", hotel: "Wyndham Pto Santa Ana 4★" },
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
            A partir de US$ 3.997 por pessoa
          </h2>
          <p className="text-white/85 mb-8">
            Em acomodação dupla. Valores em dólar, por pessoa, acrescidos de IOF,
            taxas de Galápagos (US$ 130) e taxas de aeroporto e combustível
            (US$ 198). Sujeitos a disponibilidade e confirmação aérea.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto triplo
              </p>
              <p className="font-serif text-2xl font-semibold">US$ 3.948</p>
              <p className="text-white/70 text-xs mt-1">+ IOF US$ 112</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6 ring-2 ring-gold/60">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto duplo
              </p>
              <p className="font-serif text-2xl font-semibold">US$ 3.997</p>
              <p className="text-white/70 text-xs mt-1">+ IOF US$ 113</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto individual
              </p>
              <p className="font-serif text-2xl font-semibold">US$ 4.604</p>
              <p className="text-white/70 text-xs mt-1">+ IOF US$ 132</p>
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
            Equador & Galápagos 2026. Atendimento personalizado pelo WhatsApp.
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

export default GrupoEquadorGalapagos2026;
