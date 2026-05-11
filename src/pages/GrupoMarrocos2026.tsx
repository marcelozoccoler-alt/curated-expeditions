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
import { MarrocosLeadForm } from "@/components/MarrocosLeadForm";
import { CONTACT, generateWhatsAppLink } from "@/lib/types";
import heroImg from "@/assets/grupo-marrocos-2026.jpg";

const whatsappParams = {
  type: "Roteiro" as const,
  name: "Grupo Marrocos 2026 (saída 18/11/2026)",
};

const benefits = [
  {
    title: "Grupo exclusivo e pequeno",
    desc: "Mais conforto, menos filas, mais agilidade e experiências mais próximas do destino.",
  },
  {
    title: "Serviço personalizado Create Travel",
    desc: "Atendimento próximo antes, durante e após a viagem.",
  },
  {
    title: "Acompanhamento em português",
    desc: "Suporte e condução para você viajar com tranquilidade.",
  },
  {
    title: "Roteiro completo e bem amarrado",
    desc: "Cidades imperiais + deserto + cultura + gastronomia + tempo livre bem distribuído.",
  },
  {
    title: "Hospedagens selecionadas",
    desc: "Riads tradicionais e hotéis 3 estrelas cuidadosamente escolhidos.",
  },
];

const itinerary = [
  {
    day: "Dia 1 — 18/11 (qua)",
    title: "Chegada a Casablanca → Rabat",
    points: [
      "Chegada ao Aeroporto Mohammed V (Casablanca)",
      "Recepção e saída rumo a Rabat",
      "Visita panorâmica: Torre Hassan e Mausoléu de Mohammed V (conforme logística)",
      "Hospedagem em Rabat",
    ],
  },
  {
    day: "Dia 2 — 19/11 (qui)",
    title: "Rabat → Chefchaouen",
    points: [
      "Café da manhã e viagem para Chefchaouen, a cidade azul do Rif",
      "Chegada no final da tarde",
      "Tempo livre para primeiras fotos e passeio leve",
      "Hospedagem em Chefchaouen",
    ],
  },
  {
    day: "Dia 3 — 20/11 (sex)",
    title: "Chefchaouen (manhã livre) → Fez",
    points: [
      "Manhã livre para explorar Chefchaouen no seu ritmo",
      "Saída no início da tarde rumo a Fez",
      "Chegada e acomodação",
      "Hospedagem em Fez",
    ],
  },
  {
    day: "Dia 4 — 21/11 (sáb)",
    title: "Fez (visita guiada)",
    points: [
      "Dia inteiro de visita guiada em Fez",
      "Medina medieval e souks tradicionais",
      "Universidade Al Qarawiyyin, madraças e construções históricas",
      "Curtumes típicos de Fez · Hospedagem em Fez",
    ],
  },
  {
    day: "Dia 5 — 22/11 (dom)",
    title: "Fez → Ifrane → Azrou → Vale do Ziz → Merzouga (Saara)",
    points: [
      "Saída cedo atravessando o Médio Atlas",
      "Parada em Ifrane e bosques de cedros em Azrou",
      "Travessia pelo Vale do Ziz até Merzouga",
      "Passeio de camelo nas dunas de Erg Chebbi ao pôr do sol",
      "Pernoite em acampamento de tendas no deserto",
    ],
  },
  {
    day: "Dia 6 — 23/11 (seg)",
    title: "Merzouga → Gargantas do Todra → Vale do Dades",
    points: [
      "Amanhecer no deserto e retorno do acampamento",
      "Visita às Gargantas do Todra",
      "Continuação até o Vale do Dades, com paradas para fotos",
      "Hospedagem no Vale do Dades",
    ],
  },
  {
    day: "Dia 7 — 24/11 (ter)",
    title: "Vale do Dades → Vale das Rosas → Ouarzazate → Marrakech",
    points: [
      "Saída pela manhã pelo Vale das Rosas",
      "Passagem por Ouarzazate, com clima cinematográfico",
      "Travessia do Alto Atlas pelo passo de Tizi n’Tichka",
      "Chegada a Marrakech no final da tarde · Hospedagem em Marrakech",
    ],
  },
  {
    day: "Dia 8 — 25/11 (qua)",
    title: "Marrakech (visita guiada) → Casablanca",
    points: [
      "Visita guiada em Marrakech: bairros históricos, souks e áreas culturais",
      "Após o almoço, viagem para Casablanca",
      "Visita à Mesquita Hassan II (conforme horário/condições locais)",
      "Hospedagem em Casablanca",
    ],
  },
  {
    day: "Dia 9 — 26/11 (qui)",
    title: "Casablanca → Aeroporto",
    points: [
      "Traslado ao aeroporto conforme horário do voo",
      "Embarque de retorno ao Brasil",
      "Chegada em São Paulo (GRU) às 22:25",
      "Fim dos nossos serviços",
    ],
  },
];

const included = [
  "Passagens aéreas (Royal Air Maroc, voo direto, classe econômica, 1 mala de 23 kg)",
  "Transfers de chegada e saída",
  "Transporte terrestre em veículo confortável com ar-condicionado (conforme roteiro)",
  "Motorista/guia profissional com fluência em português e espanhol",
  "8 noites de hospedagem com café da manhã (riads + hotéis 3★)",
  "Passeio de camelo ao pôr do sol nas dunas de Erg Chebbi",
  "1 pernoite em acampamento de tendas no Saara",
  "Visitas guiadas em Fez e Marrakech",
  "Assistência de viagem",
];

const notIncluded = [
  "Bebidas",
  "Almoços e jantares (exceto quando o pacote indicar inclusão)",
  "Despesas pessoais",
  "Entradas em monumentos e atrações (quando aplicável)",
  "Gorjetas (guias, motoristas e serviços)",
];

const faqs = [
  {
    q: "Qual o tamanho do grupo?",
    a: "É um grupo exclusivo e pequeno da Create Travel, pensado para garantir mais conforto, agilidade e experiências mais próximas do destino. Vagas limitadas.",
  },
  {
    q: "Como funciona o acompanhamento em português?",
    a: "Você terá suporte e condução em português ao longo do roteiro, com guias e equipe local de apoio, além do atendimento personalizado Create Travel antes, durante e após a viagem.",
  },
  {
    q: "Quais documentos são necessários?",
    a: "Passaporte brasileiro com validade mínima de 6 meses a partir da data de retorno. Brasileiros não precisam de visto para turismo de até 90 dias no Marrocos.",
  },
  {
    q: "Qual o clima em novembro?",
    a: "Outono ameno: dias agradáveis nas cidades imperiais e noites frias no deserto. Recomendamos roupas em camadas, casaco para o Saara e roupas leves para o dia.",
  },
  {
    q: "Como é a hospedagem nos riads?",
    a: "Riads são casas tradicionais marroquinas com pátio interno, arquitetura ornamentada e atmosfera local. Combinamos riads charmosos com hotéis 3★ bem localizados e confortáveis.",
  },
  {
    q: "Como é o pernoite no deserto?",
    a: "Acampamento no Saara com estrutura confortável, jantar típico e céu estrelado. Inclui passeio de camelo ao pôr do sol e amanhecer nas dunas.",
  },
  {
    q: "Qual a condição de pagamento?",
    a: "Entrada de 20% (R$ 3.659,00) + saldo de 80% (R$ 14.636,00) parcelado em até 10x sem juros de R$ 1.463,60 no cartão. Valores sujeitos a disponibilidade e confirmação aérea.",
  },
  {
    q: "Posso ir sozinho(a)? Tem suplemento single?",
    a: "Sim. Os valores são em base dupla; consulte o suplemento single ou solicite emparelhamento de quarto com outra pessoa do grupo.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Grupo Marrocos 2026 — Create Travel",
  description:
    "Grupo exclusivo e pequeno em viagem de 9 dias pelo Marrocos: Casablanca, Rabat, Fez, Saara, Ouarzazate e Marrakech. Saída 18/11/2026.",
  image: heroImg,
  touristType: "Cultural, histórica, sensorial",
  itinerary: itinerary.map((d, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${d.day} — ${d.title}`,
  })),
  offers: {
    "@type": "Offer",
    price: "18295.00",
    priceCurrency: "BRL",
    availability: "https://schema.org/LimitedAvailability",
    validThrough: "2026-11-18",
  },
  provider: {
    "@type": "TravelAgency",
    name: "Create Travel",
    url: CONTACT.domain,
  },
};

const GrupoMarrocos2026 = () => {
  const ctaLink = generateWhatsAppLink(whatsappParams);

  return (
    <div className="min-h-screen">
      <SEO
        title="Grupo Marrocos 2026 — Saída 18/11 | Create Travel"
        description="Viva o Marrocos em grupo exclusivo e pequeno: 9 dias por Casablanca, Fez, Saara e Marrakech. Saída 18/11/2026, a partir de R$ 18.295 por pessoa."
        canonicalPath="/grupos/marrocos-2026"
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
            alt="Riad tradicional marroquino ao entardecer"
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
              <Sparkles size={14} /> Saída promocional · Vagas limitadas
            </div>
            <p className="text-caption text-gold mb-4">Grupo Exclusivo · 18 a 26 de novembro de 2026</p>
            <h1 className="heading-hero text-white mb-6">
              Grupo Marrocos 2026
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
              9 dias por Casablanca, Fez, Saara e Marrakech — em grupo pequeno,
              com acompanhamento em português e curadoria Create Travel.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <WhatsAppButton
                variant="cta"
                label="Garantir minha vaga"
                params={whatsappParams}
                className="text-lg px-8 py-4"
              />
              <a href="#investimento" className="btn-outline border-white text-white hover:bg-white hover:text-navy">
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
            { icon: Calendar, label: "Datas", value: "18 a 26/11/2026" },
            { icon: Users, label: "Perfil", value: "Grupo pequeno" },
            { icon: Plane, label: "Voos", value: "Royal Air Maroc · diretos" },
            { icon: Hotel, label: "Hospedagem", value: "Riads + hotéis 3★" },
          ].map((f, i) => (
            <div key={i} className="flex items-start gap-3">
              <f.icon className="text-gold flex-shrink-0" size={22} />
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{f.label}</p>
                <p className="font-serif font-semibold text-foreground">{f.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-editorial">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-caption text-gold mb-4">Por que viajar com a Create Travel</p>
            <h2 className="heading-section text-foreground">Curadoria, conforto e proximidade</h2>
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
                <h3 className="text-lg font-serif font-semibold mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flights summary */}
      <section className="section-padding bg-navy text-white">
        <div className="container-editorial grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-caption text-gold mb-4">Passagens aéreas incluídas</p>
            <h2 className="heading-section mb-6">Voos diretos pela Royal Air Maroc</h2>
            <p className="text-white/85 leading-relaxed mb-4">
              Classe econômica com 1 bagagem despachada de até 23 kg por pessoa.
              Trechos programados (sujeitos a ajustes pela companhia aérea):
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">Ida</p>
              <p className="font-serif text-lg">São Paulo (GRU) → Casablanca (CMN)</p>
              <p className="text-white/75 text-sm mt-1">18/11/2026 · 00:25 — chegada 13:20</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">Volta</p>
              <p className="font-serif text-lg">Casablanca (CMN) → São Paulo (GRU)</p>
              <p className="text-white/75 text-sm mt-1">26/11/2026 · 16:35 — chegada 22:25</p>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="section-padding">
        <div className="container-editorial">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-caption text-gold mb-4">Roteiro completo</p>
            <h2 className="heading-section text-foreground">9 dias, 8 noites — dia a dia</h2>
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
                <h3 className="font-serif text-xl font-semibold mb-3">{d.title}</h3>
                <ul className="space-y-2">
                  {d.points.map((p, j) => (
                    <li key={j} className="flex gap-2 text-sm text-muted-foreground">
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

      {/* Included / not included */}
      <section className="section-padding bg-muted">
        <div className="container-editorial grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-xl p-8 border border-border shadow-card">
            <h3 className="font-serif text-2xl font-semibold mb-6 text-foreground">
              O que está incluído
            </h3>
            <ul className="space-y-3">
              {included.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm">
                  <Check className="text-emerald flex-shrink-0 mt-0.5" size={18} />
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
                  <X className="text-muted-foreground flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Investment */}
      <section id="investimento" className="section-padding bg-gradient-hero text-white">
        <div className="container-editorial max-w-3xl text-center">
          <p className="text-caption text-gold mb-4">Investimento</p>
          <h2 className="heading-section mb-6">A partir de R$ 18.295,00 por pessoa</h2>
          <p className="text-white/85 mb-8">
            Em acomodação dupla. Valores sujeitos a disponibilidade, confirmação
            aérea e condições comerciais vigentes no momento da reserva.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">Entrada (20%)</p>
              <p className="font-serif text-2xl font-semibold">R$ 3.659,00</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">Saldo (80%)</p>
              <p className="font-serif text-2xl font-semibold">R$ 14.636,00</p>
            </div>
            <div className="bg-gold text-navy rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider mb-2 opacity-80">Saldo em 10x sem juros</p>
              <p className="font-serif text-2xl font-semibold">R$ 1.463,60</p>
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

      {/* Lead capture */}
      <section className="section-padding">
        <div className="container-editorial">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <p className="text-caption text-gold mb-4">Pré-reserva</p>
            <h2 className="heading-section text-foreground">
              Garanta sua vaga em poucos cliques
            </h2>
          </div>
          <MarrocosLeadForm />
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
            Vagas limitadas — grupo exclusivo e pequeno
          </h2>
          <p className="text-muted-foreground mb-8">
            Fale com um consultor Create Travel e reserve sua vaga no Grupo
            Marrocos 2026. Atendimento personalizado e tira-dúvidas pelo WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-lg px-8 py-4">
              Falar no WhatsApp
            </a>
            <Link to="/destinos" className="btn-outline">
              Ver outros destinos <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GrupoMarrocos2026;
