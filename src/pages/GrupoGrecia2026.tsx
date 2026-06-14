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
import heroImg from "@/assets/grupo-grecia-2026.jpg";

const whatsappParams = {
  type: "Roteiro" as const,
  name: "Grupo Grécia 2026 (saída 27/09/2026)",
};

const benefits = [
  {
    title: "Guia acompanhante desde São Paulo",
    desc: "Você embarca com a equipe e segue acompanhado do início ao fim da viagem.",
  },
  {
    title: "Grupo cuidadosamente organizado",
    desc: "Logística fluida, sem filas e com tempo certo em cada destino.",
  },
  {
    title: "Voos diretos pela Iberia",
    desc: "Conexão prática em Madri e bagagem de 23 kg incluída.",
  },
  {
    title: "Hotéis de primeira categoria",
    desc: "Stanley (Atenas), Amalia (Kalambaka), El Greco (Santorini) e Myconian Ambassador (Mykonos).",
  },
  {
    title: "Curadoria cultural Create Travel",
    desc: "Atenas, Delfos, Meteora, Santorini e Mykonos — história, mitologia e Mediterrâneo.",
  },
  {
    title: "Sala VIP em Guarulhos + seguros",
    desc: "Acesso à sala W Premium, seguro médico US$ 75.000 e seguro cancelamento Plus Reason.",
  },
];

const itinerary = [
  {
    day: "Dia 1 — 27/09 (dom)",
    title: "São Paulo → Madri",
    points: [
      "Apresentação no Aeroporto de Guarulhos",
      "Embarque no voo IB 268 às 14h10 com destino a Madri",
      "Pernoite a bordo",
    ],
  },
  {
    day: "Dia 2 — 28/09 (seg)",
    title: "Madri → Atenas",
    points: [
      "Chegada a Madri às 05h35 e conexão",
      "Voo IB 833 às 10h30 com destino a Atenas",
      "Chegada às 15h15 e traslado ao hotel",
      "Hospedagem em Atenas (Hotel Stanley)",
    ],
  },
  {
    day: "Dia 3 — 29/09 (ter)",
    title: "Atenas — centro neoclássico e Acrópole",
    points: [
      "Visita panorâmica: Parlamento, Universidade, Biblioteca, Templo de Zeus, Arco de Adriano e Estádio Panatenáico",
      "Visita guiada à Acrópole e ao Partenon",
      "Tarde livre em Plaka e Monastiraki",
      "Hospedagem em Atenas",
    ],
  },
  {
    day: "Dia 4 — 30/09 (qua)",
    title: "Atenas → Delfos → Kalambaka",
    points: [
      "Saída rumo a Delfos, o antigo centro do mundo",
      "Visita ao museu local e ao sítio arqueológico (Auriga de Bronze)",
      "Continuação até Kalambaka",
      "Jantar e hospedagem em Kalambaka (Hotel Amalia)",
    ],
  },
  {
    day: "Dia 5 — 01/10 (qui)",
    title: "Meteora → Atenas",
    points: [
      "Visita aos mosteiros suspensos de Meteora (Patrimônio UNESCO)",
      "Regresso a Atenas ao entardecer",
      "Hospedagem em Atenas",
    ],
  },
  {
    day: "Dia 6 — 02/10 (sex)",
    title: "Atenas → Santorini",
    points: [
      "Traslado ao porto de Pireus",
      "Embarque no ferry rápido para Santorini",
      "Chegada e traslado ao hotel",
      "Hospedagem em Santorini (Hotel El Greco)",
    ],
  },
  {
    day: "Dia 7 — 03/10 (sáb)",
    title: "Santorini — Oia e Fira",
    points: [
      "Visita a Oia, com vistas para a caldeira vulcânica",
      "Visita a Fira, a capital da ilha",
      "Pôr do sol clássico de Santorini",
      "Hospedagem em Santorini",
    ],
  },
  {
    day: "Dia 8 — 04/10 (dom)",
    title: "Santorini — dia livre",
    points: [
      "Dia livre para vinícolas, praias e gastronomia local",
      "Hospedagem em Santorini",
    ],
  },
  {
    day: "Dia 9 — 05/10 (seg)",
    title: "Santorini → Mykonos",
    points: [
      "Traslado ao porto e ferry rápido para Mykonos",
      "Chegada e traslado ao hotel",
      "Hospedagem em Mykonos (Myconian Ambassador)",
    ],
  },
  {
    day: "Dia 10 — 06/10 (ter)",
    title: "Mykonos — Chora, Panagia Tourliani e Paradise Beach",
    points: [
      "Visita ao mosteiro Panagia Tourliani (séc. XVI)",
      "Parada na famosa Paradise Beach",
      "Chora: porto antigo, Paraportiani, Pequena Veneza e moinhos",
      "Tempo livre · Hospedagem em Mykonos",
    ],
  },
  {
    day: "Dia 11 — 07/10 (qua)",
    title: "Mykonos → Atenas",
    points: [
      "Traslado ao porto e ferry para Pireus",
      "Chegada e traslado ao hotel em Atenas",
      "Hospedagem em Atenas",
    ],
  },
  {
    day: "Dia 12 — 08/10 (qui)",
    title: "Atenas → Madri → São Paulo",
    points: [
      "Traslado ao aeroporto",
      "Voo IB 834 às 16h00 para Madri (chegada 18h55)",
      "Conexão para o voo IB 267 às 23h55 com destino a São Paulo",
      "Pernoite a bordo",
    ],
  },
  {
    day: "Dia 13 — 09/10 (sex)",
    title: "Chegada a São Paulo",
    points: [
      "Chegada prevista em Guarulhos às 06h00",
      "Fim dos nossos serviços",
    ],
  },
];

const included = [
  "Bilhete aéreo em classe econômica São Paulo / Atenas / São Paulo (Iberia) com 1 peça de 23 kg",
  "Hotéis de primeira categoria com café da manhã",
  "Guia acompanhante desde São Paulo",
  "Traslados com assistência em português/espanhol em Atenas, Santorini e Mykonos",
  "Bilhetes de ferry Pireus / Santorini / Mykonos / Pireus em classe econômica",
  "City tour de meio-dia em Atenas com visita à Acrópole",
  "Sítio arqueológico de Delfos com guia local",
  "Visita a Meteora e Termópilas com guia local",
  "Passeio de meio-dia em Santorini (Oia e Fira)",
  "Passeio de meio-dia em Mykonos",
  "1 jantar (sem bebidas) em Kalambaka",
  "Tag de rastreamento de bagagem",
  "Acesso à Sala VIP W Premium no aeroporto de Guarulhos",
  "Cartão de assistência médica com cobertura de US$ 75.000",
  "Seguro cancelamento Plus Reason — até 85 anos: US$ 3.000",
];

const notIncluded = [
  "Taxas de embarque",
  "IOF",
  "Bebidas nas refeições",
  "Despesas de maleteiros",
  "Gorjetas a guias, motoristas e garçons",
  "Taxas, impostos e afins",
  "Despesas pessoais (telefonemas, lavanderia, frigobar, etc.)",
];

const faqs = [
  {
    q: "Qual a condição de pagamento?",
    a: "25% de entrada e o saldo (75%) em 9 parcelas sem juros no cartão de crédito. Valores sujeitos a disponibilidade e confirmação aérea no momento da reserva.",
  },
  {
    q: "Qual o tamanho do grupo?",
    a: "Grupo organizado pela Create Travel com guia acompanhante desde São Paulo. Vagas limitadas — recomenda-se reserva antecipada.",
  },
  {
    q: "Quais documentos são necessários?",
    a: "Passaporte com validade mínima de 6 meses a partir da data de retorno. Brasileiros não precisam de visto nem de vacina obrigatória para a Grécia.",
  },
  {
    q: "Como é o clima no final de setembro / início de outubro?",
    a: "Período de transição entre verão e outono: dias agradáveis, mar ainda convidativo e destinos com ritmo mais autêntico. Recomenda-se levar camadas leves e um casaco para a brisa noturna.",
  },
  {
    q: "Posso viajar sozinho(a)? Tem suplemento single?",
    a: "Sim. Os valores são em base dupla ou tripla; o apartamento individual tem suplemento. Consulte-nos para emparelhamento de quarto com outra pessoa do grupo.",
  },
  {
    q: "Como funcionam os voos e conexões?",
    a: "Voos pela Iberia com conexão em Madri (hub moderno e prático) tanto na ida quanto na volta. Inclui 1 mala despachada de 23 kg em classe econômica.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Grupo Grécia 2026 — Create Travel",
  description:
    "Grupo organizado de 13 dias pela Grécia: Atenas, Delfos, Meteora, Santorini e Mykonos. Saída 27/09/2026 com guia acompanhante desde São Paulo.",
  image: heroImg,
  touristType: "Cultural, histórica, mediterrânea",
  itinerary: itinerary.map((d, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${d.day} — ${d.title}`,
  })),
  offers: {
    "@type": "Offer",
    price: "4998.00",
    priceCurrency: "EUR",
    availability: "https://schema.org/LimitedAvailability",
    validThrough: "2026-09-27",
  },
  provider: {
    "@type": "TravelAgency",
    name: "Create Travel",
    url: CONTACT.domain,
  },
};

const GrupoGrecia2026 = () => {
  const ctaLink = generateWhatsAppLink(whatsappParams);

  return (
    <div className="min-h-screen">
      <SEO
        title="Grupo Grécia 2026 — Saída 27/09 | Create Travel"
        description="Atenas, Delfos, Meteora, Santorini e Mykonos em grupo com guia acompanhante desde SP. 13 dias, voos Iberia, saída 27/09/2026. Entrada 25% + 9x sem juros."
        canonicalPath="/grupos/grecia-2026"
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
            alt="Pôr do sol em Oia, Santorini — casas brancas e cúpulas azuis sobre o Mar Egeu"
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
              Grupo · 27 de setembro a 09 de outubro de 2026
            </p>
            <h1 className="heading-hero text-white mb-6">
              Grupo Grécia 2026 — Eterna
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
              Entre deuses, ilhas e história: 13 dias por Atenas, Delfos,
              Meteora, Santorini e Mykonos, em grupo organizado com guia
              acompanhante desde São Paulo.
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
            { icon: Calendar, label: "Datas", value: "27/09 a 09/10/2026" },
            { icon: Users, label: "Perfil", value: "Grupo com guia do Brasil" },
            { icon: Plane, label: "Voos", value: "Iberia · via Madri" },
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
              Conteúdo cultural, conforto e segurança
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
              Voos pela Iberia com conexão em Madri
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
                São Paulo (GRU) → Madri → Atenas (ATH)
              </p>
              <p className="text-white/75 text-sm mt-1">
                27/09/2026 · IB 268 14h10 → IB 833 chegada 15h15 (28/09)
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Volta
              </p>
              <p className="font-serif text-lg">
                Atenas (ATH) → Madri → São Paulo (GRU)
              </p>
              <p className="text-white/75 text-sm mt-1">
                08/10/2026 · IB 834 16h00 → IB 267 23h55 — chegada GRU 06h00 (09/10)
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
              Hospedagens cuidadosamente selecionadas
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { city: "Atenas", hotel: "Stanley" },
              { city: "Kalambaka", hotel: "Amalia" },
              { city: "Santorini", hotel: "El Greco" },
              { city: "Mykonos", hotel: "Myconian Ambassador" },
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
            A partir de € 4.998 por pessoa
          </h2>
          <p className="text-white/85 mb-8">
            Em acomodação dupla. Valores em Euro, por pessoa, acrescidos de IOF
            (EUR 128) e taxas de aeroporto e combustível (EUR 197). Sujeitos a
            disponibilidade e confirmação aérea.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto triplo
              </p>
              <p className="font-serif text-2xl font-semibold">€ 4.966</p>
              <p className="text-white/70 text-xs mt-1">+ IOF € 127</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6 ring-2 ring-gold/60">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto duplo
              </p>
              <p className="font-serif text-2xl font-semibold">€ 4.998</p>
              <p className="text-white/70 text-xs mt-1">+ IOF € 128</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto individual
              </p>
              <p className="font-serif text-2xl font-semibold">€ 6.569</p>
              <p className="text-white/70 text-xs mt-1">+ IOF € 179</p>
            </div>
          </div>

          <div className="bg-card/95 text-foreground rounded-xl p-8 mb-8 text-left">
            <p className="text-xs uppercase tracking-wider text-gold mb-3 font-semibold">
              Condição de pagamento
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">
                  Entrada
                </p>
                <p className="font-serif text-3xl font-semibold text-foreground">
                  25%
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  no ato da reserva
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Saldo (75%)</p>
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
            Grécia 2026. Atendimento personalizado pelo WhatsApp.
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
            <Link to="/crie-seu-grupo" className="btn-outline">
              Ver outros grupos <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GrupoGrecia2026;
