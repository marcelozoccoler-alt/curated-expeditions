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
import heroImg from "@/assets/grupo-china-2026.jpg";
import { getHotelUrl, buildHotelsJsonLd, buildHotelsFAQs, buildHotelsKeywords } from "@/lib/groupHotels";

const whatsappParams = {
  type: "Roteiro" as const,
  name: "Grupo China Dourada · Outono 2026 (saída 08/10/2026)",
};

const benefits = [
  {
    title: "Beijing imperial no outono",
    desc: "Cidade Proibida, Praça Tian An Men, Palácio de Verão e Templo do Céu sob a luz dourada de outubro.",
  },
  {
    title: "Grande Muralha entre montanhas tingidas",
    desc: "Caminhada na obra mais icônica da humanidade cercada de florestas em tons vermelhos e dourados.",
  },
  {
    title: "Guerreiros de Terracota em Xi'an",
    desc: "Patrimônio UNESCO, antiga capital amuralhada e ponto de partida da Rota da Seda.",
  },
  {
    title: "Zhangjiajie · cenário de Avatar",
    desc: "Pilares de pedra, Elevador Bailong, Montanha Tianzi e a icônica Montanha Hallelujah entre névoas outonais.",
  },
  {
    title: "Shanghai futurista",
    desc: "Bund, Pudong, Torre Jinmao e a French Concession — o passado e o futuro em perfeita harmonia.",
  },
  {
    title: "Trens-bala e voos Ethiopian",
    desc: "Conexões de alta velocidade entre cidades e voos pela Ethiopian Airlines (Star Alliance).",
  },
];

const itinerary = [
  {
    day: "Dia 1 — 08/10 (qui)",
    title: "São Paulo",
    points: ["Apresentação em Guarulhos com o guia acompanhante"],
  },
  {
    day: "Dia 2 — 09/10 (sex)",
    title: "São Paulo → Addis Abeba",
    points: [
      "Voo Ethiopian 507 às 01h45",
      "Chegada Addis Abeba às 19h45 · conexão a Beijing",
    ],
  },
  {
    day: "Dia 3 — 10/10 (sáb)",
    title: "Addis Abeba → Beijing",
    points: [
      "Voo Ethiopian 604 às 01h15",
      "Chegada Beijing 17h20 · traslado e hospedagem",
    ],
  },
  {
    day: "Dia 4 — 11/10 (dom)",
    title: "Beijing imperial",
    points: [
      "Cidade Proibida e Praça Tian An Men",
      "Palácio de Verão · almoço incluído",
    ],
  },
  {
    day: "Dia 5 — 12/10 (seg)",
    title: "Grande Muralha · Pato Laqueado",
    points: [
      "Grande Muralha da China · almoço",
      "Ninho de Pássaro e Cubo Aquático",
      "Jantar de Boas-Vindas com Pato Laqueado",
    ],
  },
  {
    day: "Dia 6 — 13/10 (ter)",
    title: "Beijing → Xi'an",
    points: [
      "Templo do Céu",
      "Trem-bala a Xi'an · hospedagem",
    ],
  },
  {
    day: "Dia 7 — 14/10 (qua)",
    title: "Xi'an · Guerreiros de Terracota",
    points: [
      "Exército de Terracota (UNESCO)",
      "Muralha antiga e bairro muçulmano",
    ],
  },
  {
    day: "Dia 8 — 15/10 (qui)",
    title: "Xi'an → Zhangjiajie",
    points: [
      "Voo doméstico a Zhangjiajie",
      "Geoparque Mundial UNESCO · hospedagem",
    ],
  },
  {
    day: "Dia 9 — 16/10 (sex)",
    title: "Parque Nacional Zhangjiajie",
    points: [
      "Elevador Bailong (326 m)",
      "Reserva Yuanjiajie · Montanha Hallelujah (Avatar)",
      "Montanha Tianzi · almoço fast food",
    ],
  },
  {
    day: "Dia 10 — 17/10 (sáb)",
    title: "Zhangjiajie → Shanghai",
    points: [
      "Voo doméstico a Shanghai",
      "Traslado ao hotel · hospedagem",
    ],
  },
  {
    day: "Dia 11 — 18/10 (dom)",
    title: "Shanghai · clássica",
    points: [
      "Jardim Yuyuan e Templo do Buda de Jade",
      "Passeio pelo Bund e Nanjing Road",
    ],
  },
  {
    day: "Dia 12 — 19/10 (seg)",
    title: "Shanghai · moderna",
    points: [
      "Pudong e Torre Jinmao",
      "French Concession · tarde livre",
    ],
  },
  {
    day: "Dia 13 — 20/10 (ter)",
    title: "Shanghai · dia livre",
    points: [
      "Aptos disponíveis até as 18h",
      "Traslado ao aeroporto",
    ],
  },
  {
    day: "Dia 14 — 21/10 (qua)",
    title: "Shanghai → Addis Abeba → São Paulo",
    points: [
      "Voo Ethiopian 685 às 00h20 · chegada ADD 07h30",
      "Conexão Ethiopian 506 às 09h50 · chegada GRU 16h20",
    ],
  },
];

const included = [
  "Bilhete aéreo São Paulo / Beijing · Shanghai / São Paulo em classe econômica pela Ethiopian Airlines (Star Alliance)",
  "Trechos internos Xi'an / Zhangjiajie / Shanghai com operador local (franquia 20 kg)",
  "Trem-bala Beijing / Xi'an",
  "Hotéis de primeira categoria com café da manhã",
  "Guia acompanhante desde São Paulo e guias locais em espanhol (inglês em Zhangjiajie)",
  "Traslados, passeios e entradas conforme o roteiro",
  "Refeições conforme programa (almoços e jantares indicados, incluindo Pato Laqueado)",
  "Cartão de assistência com cobertura médica de US$ 75.000",
  "Seguro cancelamento até 85 anos: US$ 5.000",
];

const notIncluded = [
  "Taxas de embarque",
  "IOF (USD 155 em apto duplo)",
  "Taxas de aeroporto e combustível (USD 900)",
  "Bebidas nas refeições",
  "Gorjetas a guias, motoristas, garçons e carregadores de malas",
  "Despesas pessoais (frigobar, lavanderia, telefonemas, etc.)",
  "Documentação de viagem (passaporte e vacina de febre amarela)",
];

const faqs = [
  {
    q: "Qual a condição de pagamento?",
    a: "25% de entrada no ato da reserva e o saldo (75%) em 9 parcelas sem juros no cartão de crédito. Valores em dólar, sujeitos a disponibilidade e confirmação aérea.",
  },
  {
    q: "Brasileiros precisam de visto para a China?",
    a: "Não. Brasileiros não precisam de visto para estadias turísticas até 30 dias. É obrigatório passaporte com validade mínima de 6 meses a partir da data de retorno e Certificado Internacional de Vacinação contra Febre Amarela.",
  },
  {
    q: "Como é a China em outubro?",
    a: "Outono dourado oriental: temperaturas entre 12–22 °C em Beijing/Xi'an, clima ameno e seco, folhagens em tons vermelhos e dourados. Período ideal para a Grande Muralha e Zhangjiajie. Recomendamos camadas, casaco leve e calçado confortável.",
  },
  {
    q: "Quais hotéis estão previstos?",
    a: "Beijing: New Otani · Xi'an: Sheraton North City · Zhangjiajie: Pullman Hotel · Shanghai: Amara Signature. Todos de primeira categoria.",
  },
  {
    q: "Qual o perfil do grupo?",
    a: "Grupo pequeno com guia acompanhante desde o Brasil. Casais, amigos e viajantes solo são muito bem-vindos. Trabalhamos com apartamento duplo (compartilhado) ou individual (com suplemento).",
  },
];

const hotelsForSeo = [{ city: "Beijing", hotel: "New Otani" },
              { city: "Xi'an", hotel: "Sheraton North City" },
              { city: "Zhangjiajie", hotel: "Pullman Hotel" },
              { city: "Shanghai", hotel: "Amara Signature" }];
const hotelsSeoJsonLd = buildHotelsJsonLd(hotelsForSeo, "Grupo China Dourada · Outono 2026 — Create Travel", "/grupos/china-2026");
const hotelsSeoFaqs = buildHotelsFAQs(hotelsForSeo, "Grupo China Dourada · Outono 2026 — Create Travel", "/grupos/china-2026");
const hotelsSeoKeywords = buildHotelsKeywords(hotelsForSeo);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Grupo China Dourada · Outono 2026 — Create Travel",
  description:
    "Grupo organizado de 14 dias pela China no outono: Beijing, Grande Muralha, Xi'an e Guerreiros de Terracota, Zhangjiajie e Shanghai. Saída 08/10/2026 pela Ethiopian Airlines com guia desde o Brasil.",
  image: heroImg,
  touristType: "Cultura, natureza, outono oriental",
  itinerary: itinerary.map((d, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${d.day} — ${d.title}`,
  })),
  offers: {
    "@type": "Offer",
    price: "5998.00",
    priceCurrency: "USD",
    availability: "https://schema.org/LimitedAvailability",
    validThrough: "2026-10-08",
  },
  provider: {
    "@type": "TravelAgency",
    name: "Create Travel",
    url: CONTACT.domain,
  },
};

const GrupoChina2026 = () => {
  const ctaLink = generateWhatsAppLink(whatsappParams);

  return (
    <div className="min-h-screen">
      <SEO
        title="Grupo China Dourada · Outono 2026 · Beijing, Xi'an, Zhangjiajie & Shanghai | Create Travel"
        description="14 dias pela China no outono 2026: Cidade Proibida, Grande Muralha, Guerreiros de Terracota, Zhangjiajie (cenário de Avatar) e Shanghai. Saída 08/10/2026 pela Ethiopian Airlines. Entrada 25% + 9x sem juros."
        canonicalPath="/grupos/china-2026"
        ogImage={heroImg}
        ogType="article"
        jsonLd={[jsonLd, ...hotelsSeoJsonLd]}
        keywords={`viagem em grupo China 2026, Grande Muralha outono, Guerreiros Terracota Xi'an, Zhangjiajie Avatar, Shanghai Pudong, grupo China com guia do Brasil, Create Travel Ethiopian Airlines, ${hotelsSeoKeywords}`}
      />
      <Header />
      <WhatsAppButton variant="float" params={whatsappParams} />

      {/* Hero */}
      <section className="relative h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Zhangjiajie no outono — pilares de pedra envoltos em névoa dourada, cenário que inspirou o filme Avatar"
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
              Grupo · 08 a 21 de outubro de 2026
            </p>
            <h1 className="heading-hero text-white mb-6">
              China Dourada
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
              14 dias entre Beijing imperial, Grande Muralha, Guerreiros de Terracota, Zhangjiajie e Shanghai — com guia do Brasil e voos Ethiopian.
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
            { icon: Calendar, label: "Datas", value: "08 a 21/10/2026" },
            { icon: Users, label: "Perfil", value: "Grupo com guia do Brasil" },
            { icon: Plane, label: "Voos", value: "Ethiopian Airlines" },
            { icon: Hotel, label: "Estilo", value: "Outono oriental" },
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
              Uma jornada inesquecível no outono oriental
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
            <h2 className="heading-section mb-6">Voos Ethiopian Airlines</h2>
            <p className="text-white/85 leading-relaxed mb-4">
              Companhia membro da Star Alliance, fundada em 1945 com base em Addis Abeba. Premiada por pontualidade, segurança e hospitalidade — combina excelência internacional com a calorosa acolhida africana.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Ida
              </p>
              <p className="font-serif text-lg">GRU → Addis Abeba → Beijing</p>
              <p className="text-white/75 text-sm mt-1">
                09/10 ET 507 às 01h45 · chegada ADD 19h45 · 10/10 ET 604 às 01h15 · chegada PEK 17h20
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Volta
              </p>
              <p className="font-serif text-lg">Shanghai → Addis Abeba → GRU</p>
              <p className="text-white/75 text-sm mt-1">
                21/10 ET 685 às 00h20 · chegada ADD 07h30 · ET 506 às 09h50 · chegada GRU 16h20
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { city: "Beijing", hotel: "New Otani" },
              { city: "Xi'an", hotel: "Sheraton North City" },
              { city: "Zhangjiajie", hotel: "Pullman Hotel" },
              { city: "Shanghai", hotel: "Amara Signature" },
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
              { label: "Apto Triplo", price: "US$ 5.968" },
              { label: "Apto Duplo", price: "US$ 5.998", highlight: true },
              { label: "Apto Individual", price: "US$ 7.160" },
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
            + IOF e taxas de aeroporto/combustível (USD 900). Valores sujeitos a alteração até a confirmação da reserva.
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

      <FAQSection faqs={[...faqs, ...hotelsSeoFaqs]} />

      <Footer />
    </div>
  );
};

export default GrupoChina2026;
