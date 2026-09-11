import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Check, Compass, Hotel, Info, MapPin, Plane, ShieldCheck, Sparkles, ThermometerSnowflake, Users, X } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { FAQSection } from "@/components/FAQSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/types";
import { getHotelUrl, buildHotelsJsonLd, buildHotelsFAQs, buildHotelsKeywords } from "@/lib/groupHotels";
import { laponiaReveillonSignature } from "@/lib/signatureTrips";

const DOMAIN = CONTACT.domain.replace(/\/$/, "");
const PATH = "/grupos/laponia-natal-reveillon-2027";

const whatsappParams = {
  type: "Roteiro" as const,
  name: "Create Signature — Lapônia: Natal Branco & Réveillon em Oslo (21/12/2026)",
};

const experiences = [
  { title: "Navegar onde o mar congela", text: "O quebra-gelo abre passagem pelo Báltico e convida a uma flutuação protegida entre placas de gelo — uma memória fora de qualquer paisagem cotidiana." },
  { title: "Celebrações sob a neve", text: "Jantar de Natal em Rovaniemi e Réveillon em Oslo dão ritmo a uma travessia que une intimidade, paisagem e encontro." },
  { title: "A vida no Ártico", text: "A cultura Sami, as renas e os huskies revelam uma relação ancestral entre pessoas, animais, neve e sobrevivência." },
  { title: "Aventura com estrutura", text: "Snowmobile, pesca no gelo, teleférico e roupas térmicas previstas para viver o inverno com orientação e conforto." },
  { title: "Duas capitais nórdicas", text: "Helsinque abre a jornada com arquitetura e design; Oslo encerra o percurso entre história polar, arte e natureza urbana." },
  { title: "Cuidado desde o Brasil", text: "Assistência da Create Travel no aeroporto de Guarulhos, guia brasileiro durante a jornada e suporte da nossa equipe no Brasil." },
];

const itinerary = [
  { day: "Dia 1 · 21/12", title: "São Paulo → Helsinque", text: "Assistência da Create Travel no aeroporto de Guarulhos e embarque rumo à Finlândia, com conexão em Paris e acompanhamento brasileiro." },
  { day: "Dia 2 · 22/12", title: "Chegada a Helsinque", text: "Recepção, traslado ao hotel previsto e tempo livre para descansar ou iniciar, sem pressa, o primeiro contato com a capital finlandesa." },
  { day: "Dia 3 · 23/12", title: "Helsinque por dentro", text: "Praça do Senado, catedral, Parque Esplanadi, monumento a Sibelius, Igreja da Rocha e Biblioteca Central Oodi revelam uma cidade entre tradição, design e luz de inverno." },
  { day: "Dia 4 · 24/12", title: "Helsinque → Rovaniemi · Noite de Natal", text: "Voo à Lapônia finlandesa e visita ao Museu Arktikum, dedicado à natureza do norte e à cultura Sami. À noite, jantar especial de Natal em Rovaniemi." },
  { day: "Dia 5 · 25/12", title: "Natal no Círculo Polar", text: "A Aldeia do Papai Noel abre um dia de atmosfera natalina, seguido por snowmobile através da floresta branca, sopa quente e pesca em lago congelado." },
  { day: "Dia 6 · 26/12", title: "Kemi e o mar congelado", text: "Excursão ao SnowExperience365 e navegação no quebra-gelo Sampo, com almoço a bordo. Quando as condições permitirem, a experiência inclui flutuação protegida nas águas geladas do Báltico." },
  { day: "Dia 7 · 27/12", title: "Rovaniemi → Tromsø", text: "Voo para a Lapônia norueguesa. Visita panorâmica de Tromsø, passagem pela Catedral do Ártico e subida de teleférico ao mirante Storsteinen." },
  { day: "Dia 8 · 28/12", title: "Renas, cultura Sami e aurora", text: "Passeio de trenó puxado por renas e encontro cultural em acampamento Sami, com sabores locais ao redor do fogo. À noite, primeira busca pela aurora em área escolhida conforme o céu." },
  { day: "Dia 9 · 29/12", title: "Huskies e uma nova noite de céu aberto", text: "Safari de trenó com huskies, contato com os cães e pausa para bebida quente. Mais tarde, segunda saída dedicada às luzes do norte." },
  { day: "Dia 10 · 30/12", title: "Tromsø → Oslo", text: "Voo para Oslo, traslado e restante do dia livre para descobrir a capital entre o fiorde e as colinas arborizadas." },
  { day: "Dia 11 · 31/12", title: "Oslo e a noite de Réveillon", text: "Visita ao Museu Fram, centro histórico e Parque Frogner, onde as esculturas de Vigeland transformam os ciclos da vida em paisagem. À noite, jantar de celebração do Ano-Novo." },
  { day: "Dia 12 · 01/01", title: "Oslo → São Paulo", text: "Manhã livre no primeiro dia do ano e traslado ao aeroporto para o voo de retorno, com conexão em Paris." },
  { day: "Dia 13 · 02/01", title: "Chegada ao Brasil", text: "Desembarque em São Paulo e encerramento de uma travessia celebrada entre a luz, o gelo e as culturas do extremo norte." },
];

const hotels = [
  { city: "Helsinque", hotel: "Hotel Haven" },
  { city: "Rovaniemi", hotel: "Scandic Rovaniemi City" },
  { city: "Tromsø", hotel: "Thon Hotel Tromsø" },
  { city: "Oslo", hotel: "Clarion The Hub" },
];

const included = [
  "Voos internacionais em classe econômica a partir de São Paulo, conforme bloqueio a confirmar",
  "Voos internos Helsinque–Rovaniemi, Rovaniemi–Tromsø e Tromsø–Oslo",
  "10 noites em hotéis previstos de categoria primeira superior e primeira, ou similares, com café da manhã",
  "Seis refeições ao longo do roteiro, incluindo jantar de Natal em Rovaniemi e Réveillon em Oslo",
  "Guia acompanhante brasileiro e guias locais em português ou espanhol nas visitas previstas",
  "Assistência da Create Travel no aeroporto de Guarulhos e suporte da equipe no Brasil",
  "Traslados, visitas e entradas descritos no roteiro",
  "Quebra-gelo, snowmobile, pesca no gelo, trenós com renas e huskies e duas buscas pela aurora",
  "Roupas especiais de inverno durante o período previsto na Lapônia",
  "Serviço de maleteiros nos hotéis, limitado a uma mala por pessoa",
  "Seguro e assistência de viagem conforme plano informado na confirmação",
];

const notIncluded = [
  "Taxas de embarque e eventuais encargos não indicados na proposta final",
  "Refeições e bebidas não mencionadas como incluídas",
  "Passeios opcionais e despesas pessoais",
  "Documentação de viagem e requisitos migratórios",
  "Traslados fora das datas ou dos horários definidos para o grupo",
  "Gorjetas voluntárias não previstas nos serviços",
];

const faqs = [
  { q: "Quando será a viagem de Natal e Réveillon à Lapônia?", a: "A saída está confirmada para 21 de dezembro de 2026, com retorno ao Brasil em 2 de janeiro de 2027. São 13 dias e 10 noites, sujeitos à confirmação final dos serviços aéreos e terrestres." },
  { q: "A aurora boreal é garantida?", a: "Não. A aurora é um fenômeno natural condicionado à atividade solar, à ausência de nuvens e à visibilidade. O roteiro prevê duas buscas noturnas em Tromsø para ampliar as oportunidades de observação." },
  { q: "É necessário ter experiência para conduzir o snowmobile?", a: "Não é exigida experiência prévia, pois há orientação local. O condutor deve ter pelo menos 18 anos, carteira de habilitação válida e aceitar as regras de responsabilidade do fornecedor. Restrições de altura e idade podem se aplicar." },
  { q: "As roupas para o frio estão incluídas?", a: "Está previsto o fornecimento de roupas térmicas durante a permanência na Lapônia, incluindo itens como macacão e botas. Os componentes exatos devem ser reconfirmados na documentação final da viagem." },
  { q: "Qual é o nível de esforço físico?", a: "O roteiro combina caminhadas urbanas e atividades na neve. É importante ter mobilidade para subir em trenós, embarcações e veículos, caminhar sobre superfícies geladas e suportar temperaturas negativas." },
  { q: "Qual é o investimento da viagem?", a: "O valor está sob consulta porque depende da confirmação dos voos, da acomodação escolhida e da disponibilidade dos serviços. A Create Travel envia uma proposta atualizada antes da reserva." },
];

const hotelJsonLd = buildHotelsJsonLd(hotels, laponiaReveillonSignature.title, PATH);
const hotelFaqs = buildHotelsFAQs(hotels, laponiaReveillonSignature.title, PATH);
const hotelKeywords = buildHotelsKeywords(hotels);

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "@id": `${DOMAIN}${PATH}#trip`,
    name: laponiaReveillonSignature.title,
    url: `${DOMAIN}${PATH}`,
    description: "Jornada Create Signature de 13 dias de Natal e Réveillon pela Finlândia e Noruega, com Helsinque, Lapônia, quebra-gelo, cultura Sami, Tromsø, aurora boreal e Oslo.",
    image: laponiaReveillonSignature.image,
    touristType: "Viajantes 40+ interessados em natureza, cultura nórdica, conforto e experiências árticas",
    startDate: "2026-12-21",
    endDate: "2027-01-02",
    itinerary: {
      "@type": "ItemList",
      itemListElement: itinerary.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: `${item.day} — ${item.title}` })),
    },
    offers: { "@type": "Offer", priceCurrency: "BRL", description: "Valor sob consulta", availability: "https://schema.org/LimitedAvailability", validFrom: "2026-09-11" },
    provider: { "@id": `${DOMAIN}/#organization` },
  },
  { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: DOMAIN },
    { "@type": "ListItem", position: 2, name: "Create Signature", item: `${DOMAIN}/create-signature` },
    { "@type": "ListItem", position: 3, name: laponiaReveillonSignature.title, item: `${DOMAIN}${PATH}` },
  ] },
  ...hotelJsonLd,
];

const GrupoLaponiaNatalReveillon2027 = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="Lapônia no Natal e Réveillon 2027"
      description="Natal na Lapônia e Réveillon em Oslo em 13 dias, com guia brasileiro, aurora boreal, quebra-gelo, snowmobile, cultura Sami, Helsinque e Tromsø."
      canonicalPath={PATH}
      ogImage={laponiaReveillonSignature.image}
      ogType="article"
      keywords={`Natal na Lapônia 2026, Réveillon em Oslo 2027, Lapônia com guia brasileiro, aurora boreal Tromsø, Círculo Polar Ártico, quebra-gelo Finlândia, viagem de luxo Lapônia, ${hotelKeywords}`}
      jsonLd={jsonLd}
    />
    <Header />
    <WhatsAppButton variant="float" params={whatsappParams} />

    <main>
      <section className="relative min-h-[92vh] flex items-end overflow-hidden">
        <img src={laponiaReveillonSignature.image} alt={laponiaReveillonSignature.imageAlt} className="absolute inset-0 h-full w-full object-cover" width={1600} height={1000} fetchPriority="high" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-editorial relative z-10 pb-14 pt-32 md:pb-20">
          <div className="max-w-4xl text-primary-foreground">
            <div className="mb-7 text-primary-foreground/70"><Breadcrumbs items={[{ label: "Create Signature", href: "/create-signature" }, { label: "Natal e Réveillon 2027" }]} /></div>
            <p className="inline-flex items-center gap-2 border border-gold/50 bg-navy/70 px-4 py-2 rounded-full text-caption text-gold mb-5"><Sparkles size={15} /> Create Signature · Grandes Jornadas</p>
            <h1 className="heading-hero mb-5">Lapônia: Natal Branco & Réveillon em Oslo</h1>
            <p className="text-xl md:text-2xl max-w-3xl text-primary-foreground/90 font-light leading-relaxed mb-8">
              Duas celebrações, um horizonte de neve: o Natal no coração da Lapônia e a chegada do novo ano em Oslo, sob a possibilidade luminosa da aurora.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsAppButton variant="cta" label="Consultar esta jornada" params={whatsappParams} className="text-lg px-8 py-4" />
              <Button asChild variant="outline" size="lg" className="border-primary-foreground/70 bg-navy/35 text-primary-foreground hover:bg-background hover:text-foreground">
                <a href="#roteiro">Ver o dia a dia <ArrowRight /></a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card py-9">
        <div className="container-editorial grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Calendar, label: "Data", value: "21/12/2026 a 02/01/2027" },
            { icon: Compass, label: "Duração", value: "13 dias · 10 noites" },
            { icon: Users, label: "Assistência", value: "Create Travel em Guarulhos" },
            { icon: Plane, label: "Rota", value: "Finlândia e Noruega" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start gap-3"><Icon className="text-gold shrink-0" size={21} /><div><p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p><p className="font-serif font-semibold">{value}</p></div></div>
          ))}
        </div>
      </section>

      <section className="section-padding">
        <div className="container-editorial grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-caption text-gold mb-4">O coração da jornada</p>
            <h2 className="heading-section mb-6">Quando o extraordinário é a paisagem inteira</h2>
            <p className="text-editorial mb-5">A Lapônia ensina outra medida para o tempo. O som dos passos muda sobre a neve, a respiração ganha presença e o horizonte parece maior do que a memória alcança.</p>
            <p className="text-editorial">Esta jornada conecta Helsinque, Rovaniemi, Kemi, Tromsø e Oslo em uma narrativa nórdica de design, exploração polar, culturas ancestrais e natureza em estado absoluto.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
            {experiences.map((item, index) => (
              <article key={item.title} className="border-t border-border pt-6"><span className="font-serif text-gold text-2xl">0{index + 1}</span><h3 className="font-serif text-xl my-3">{item.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section id="roteiro" className="section-padding bg-muted scroll-mt-24">
        <div className="container-editorial">
          <div className="max-w-3xl mb-12"><p className="text-caption text-gold mb-4">Roteiro completo</p><h2 className="heading-section mb-4">Treze dias entre celebrações e paisagens árticas</h2><p className="text-muted-foreground">A ordem das atividades, horários e voos pode ser ajustada para segurança, clima e melhor aproveitamento da viagem.</p></div>
          <div className="grid md:grid-cols-2 gap-5">
            {itinerary.map((item) => (
              <article key={item.day} className="bg-card border border-border rounded-lg p-6 md:p-7"><p className="text-caption text-gold flex items-center gap-2 mb-2"><MapPin size={14} /> {item.day}</p><h3 className="font-serif text-xl mb-3">{item.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-editorial">
          <div className="text-center max-w-2xl mx-auto mb-12"><p className="text-caption text-gold mb-4">Hotéis previstos</p><h2 className="heading-section">Bases de conforto no extremo norte</h2></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {hotels.map((item) => (
              <article key={item.city} className="border border-border rounded-lg p-6 bg-card"><Hotel className="text-gold mb-4" size={22} /><p className="text-caption text-muted-foreground mb-2">{item.city}</p><a href={getHotelUrl(item.hotel)} target="_blank" rel="noopener noreferrer" className="font-serif text-lg hover:text-gold transition-colors">{item.hotel}</a><p className="text-xs text-muted-foreground mt-2">ou similar</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy text-primary-foreground">
        <div className="container-editorial grid lg:grid-cols-2 gap-8">
          <div className="border border-primary-foreground/20 rounded-lg p-7 md:p-9"><h2 className="font-serif text-3xl mb-7">O que está incluído</h2><ul className="space-y-4">{included.map((item) => <li key={item} className="flex gap-3 text-sm text-primary-foreground/85"><Check className="text-gold shrink-0 mt-0.5" size={18} />{item}</li>)}</ul></div>
          <div className="border border-primary-foreground/20 rounded-lg p-7 md:p-9"><h2 className="font-serif text-3xl mb-7">Não incluído</h2><ul className="space-y-4">{notIncluded.map((item) => <li key={item} className="flex gap-3 text-sm text-primary-foreground/70"><X className="text-primary-foreground/50 shrink-0 mt-0.5" size={18} />{item}</li>)}</ul></div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-editorial grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start">
          <div>
            <p className="text-caption text-gold mb-4">Antes de embarcar</p>
            <h2 className="heading-section mb-7">O Ártico pede preparo — e recompensa presença</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { icon: ThermometerSnowflake, title: "Clima", text: "Frio intenso, neve e vento fazem parte da experiência. A lista pessoal de roupas será orientada antes da viagem." },
                { icon: ShieldCheck, title: "Segurança", text: "Atividades dependem das condições locais e podem ser alteradas ou canceladas sem aviso prévio para preservar a segurança." },
                { icon: Info, title: "Restrições", text: "Snowmobile e flutuação têm regras de idade, altura, habilitação e mobilidade que serão verificadas antes da reserva." },
                { icon: Plane, title: "Confirmação", text: "Voos, hotéis, horários e sequência das visitas serão reconfirmados na documentação final do grupo." },
              ].map(({ icon: Icon, title, text }) => <article key={title} className="bg-muted rounded-lg p-6"><Icon className="text-gold mb-4" size={22} /><h3 className="font-serif text-lg mb-2">{title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{text}</p></article>)}
            </div>
          </div>
          <aside className="bg-muted border border-border rounded-lg p-8 md:p-10">
            <p className="text-caption text-gold mb-4">Investimento</p>
            <h2 className="font-serif text-4xl mb-4">Sob consulta</h2>
            <p className="text-muted-foreground leading-relaxed mb-7">A proposta será atualizada conforme acomodação, disponibilidade aérea e confirmação dos serviços. Assim você recebe valores reais, sem estimativas que possam induzir ao erro.</p>
            <WhatsAppButton variant="cta" label="Receber proposta atualizada" params={whatsappParams} className="w-full" />
          </aside>
        </div>
      </section>

      <section className="section-padding bg-muted"><div className="container-editorial max-w-3xl"><FAQSection faqs={[...faqs, ...hotelFaqs]} title="Perguntas frequentes sobre a Lapônia" /></div></section>

      <section className="section-padding"><div className="container-editorial max-w-3xl text-center"><p className="text-caption text-gold mb-4">Create Signature</p><h2 className="heading-section mb-6">O norte não é apenas um ponto no mapa. É uma forma de olhar o mundo.</h2><p className="text-muted-foreground text-lg mb-9">Converse com a Create Travel para receber disponibilidade, valores e todos os detalhes desta jornada.</p><div className="flex flex-col sm:flex-row justify-center gap-4"><WhatsAppButton variant="cta" label="Quero viver esta jornada" params={whatsappParams} className="text-lg px-8 py-4" /><Button asChild variant="outline" size="lg"><Link to="/create-signature">Ver Create Signature <ArrowRight /></Link></Button></div></div></section>
    </main>
    <Footer />
  </div>
);

export default GrupoLaponiaNatalReveillon2027;