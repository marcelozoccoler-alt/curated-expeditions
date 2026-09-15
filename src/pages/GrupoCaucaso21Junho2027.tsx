import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Check, Hotel, MapPin, Plane, Sparkles, Users, X } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEO } from "@/components/SEO";
import { FAQSection } from "@/components/FAQSection";
import { CONTACT, generateWhatsAppLink } from "@/lib/types";
import { buildHotelsFAQs, buildHotelsJsonLd, buildHotelsKeywords, getHotelUrl } from "@/lib/groupHotels";
import heroImg from "@/assets/grupo-caucaso-junho-2027.jpg";

const CANONICAL = "/grupos/caucaso-21-junho-2027";
const GROUP_NAME = "Grupo Cáucaso — Armênia, Geórgia e Azerbaijão · Saída 21/06/2027 — Create Travel";
const whatsappParams = {
  type: "Roteiro" as const,
  name: "Grupo Cáucaso · Armênia, Geórgia e Azerbaijão (saída 21/06/2027)",
};

const benefits = [
  { title: "Guia acompanhante desde o Brasil", desc: "Encontro em Guarulhos e acompanhamento durante todo o circuito até o retorno." },
  { title: "Entre dois mundos", desc: "Armênia, Geórgia e Azerbaijão: antigas rotas comerciais, montanhas e cidades onde culturas e religiões se encontraram." },
  { title: "Mosteiros milenares", desc: "Khor Virap diante do Monte Ararat, Noravank entre paredes avermelhadas, Geghard e Haghpat, Patrimônios da UNESCO." },
  { title: "Berço do vinho", desc: "Degustação na caverna de Areni, com a adega mais antiga do mundo, e vinhos georgianos fermentados em qvevri." },
  { title: "Baku e o Mar Cáspio", desc: "A capital do Azerbaijão entre o centro histórico murado, a arquitetura futurista e as gravuras rupestres de Gobustan." },
  { title: "Voos pela Turkish Airlines", desc: "São Paulo–Istambul–Yerevan e Baku–Istambul–São Paulo em classe econômica, com uma mala de 23 kg." },
];

const itinerary = [
  { day: "Dia 1 — 21/06 (seg)", title: "São Paulo", points: ["Apresentação no Aeroporto Internacional de Guarulhos", "Encontro com o coordenador e preparação para o embarque"] },
  { day: "Dia 2 — 22/06 (ter)", title: "São Paulo → Istambul", points: ["Embarque no voo Turkish Airlines TK 16 às 04h10", "Chegada prevista a Istambul às 22h45"] },
  { day: "Dia 3 — 23/06 (qua)", title: "Istambul → Yerevan", points: ["Conexão no voo TK 360 às 02h00, chegada a Yerevan às 05h15", "Recepção, traslado ao hotel e manhã livre para descanso", "Tarde: visita panorâmica — Praça da República, Complexo Cascade, Parque da Vitória e Monumento à Mãe Armênia", "Matenadarán, centro de manuscritos antigos, e Memorial de Tsitsernakaberd"] },
  { day: "Dia 4 — 24/06 (qui)", title: "Yerevan · Garni · Geghard", points: ["Templo pagão de Garni, do século I d.C., e a Sinfonia de Pedra no cânion do rio Azat", "Aula prática de preparo do lavash, o pão tradicional armênio", "Mosteiro de Geghard, esculpido na rocha — Patrimônio Mundial da UNESCO", "Destilaria de brandy Ararat ou Noy, com degustação", "Opcional: concerto vocal de música espiritual armênia em capela de Geghard"] },
  { day: "Dia 5 — 25/06 (sex)", title: "Yerevan · Khor Virap · Noravank", points: ["Mosteiro de Khor Virap, com o Monte Ararat no horizonte", "Região de Vayots Dzor e a Caverna Areni-1, com a adega mais antiga conhecida (6.100 anos)", "Mosteiro de Noravank, joia do século XIII entre formações avermelhadas", "Retorno a Yerevan"] },
  { day: "Dia 6 — 26/06 (sáb)", title: "Yerevan → Sevan → Dilijan → Haghpat → Tbilisi", points: ["Lago Sevan, a Pérola Azul da Armênia, e o Mosteiro de Sevanavank", "Dilijan, a Suíça Armênia, com centro histórico e ateliês de artesanato", "Mosteiro de Haghpat, Patrimônio Mundial da UNESCO", "Fronteira Bagratashen–Sadakhlo e continuação pela Geórgia até Tbilisi"] },
  { day: "Dia 7 — 27/06 (dom)", title: "Tbilisi", points: ["Caminhada pela parte histórica: Museu Estatal de História, Igreja Metekhi e Basílica de Anchiskhati", "Fortaleza de Narikala e, se o tempo permitir, teleférico até o mirante", "Bairro Abanotubani, dos banhos de enxofre, e vista panorâmica pela Ponte da Paz"] },
  { day: "Dia 8 — 28/06 (seg)", title: "Tbilisi · Mtskheta · Uplistsikhe", points: ["Mtskheta, antiga capital e coração espiritual da Geórgia — Patrimônio Mundial da UNESCO", "Igreja de Jvari e Catedral de Svetitskhoveli", "Uplistsikhe, a cidade caverna esculpida na rocha há mais de 3.000 anos", "Retorno a Tbilisi"] },
  { day: "Dia 9 — 29/06 (ter)", title: "Tbilisi", points: ["Praça Orbeliani e caminhada até o mercado de Pontes Secas, com artesanato e curiosidades da época soviética", "Tarde livre para explorar a cidade"] },
  { day: "Dia 10 — 30/06 (qua)", title: "Tbilisi → Baku", points: ["Traslado ao aeroporto e voo para Baku, capital do Azerbaijão", "Chegada e hospedagem no Baku Midtown Hotel"] },
  { day: "Dia 11 — 01/07 (qui)", title: "Baku · Ateshgah · Yanar Dag", points: ["Pista de Mártires, com vista panorâmica de Baku", "Centro histórico murado Icheri Sheher: Palácio de Shirvan Shash e Torre da Donzela", "Templo de fogo de Ateshgah, Patrimônio da UNESCO", "Yanar Dag, a montanha da chama eterna"] },
  { day: "Dia 12 — 02/07 (sex)", title: "Baku · Gobustan", points: ["Museu Heydar Aliyev, ícone da arquitetura moderna", "Reserva Natural de Gobustan, Patrimônio da UNESCO, com gravuras rupestres de 5.000 a 20.000 anos"] },
  { day: "Dia 13 — 03/07 (sáb)", title: "Baku", points: ["Dia livre para descanso e compras de última hora"] },
  { day: "Dia 14 — 04/07 (dom)", title: "Baku → Istambul", points: ["Traslado ao aeroporto e voo TK 333 às 11h30, chegada a Istambul às 13h45", "Conexão no voo TK 215 às 20h25 · pernoite a bordo"] },
  { day: "Dia 15 — 05/07 (seg)", title: "São Paulo", points: ["Chegada prevista a Guarulhos às 03h30", "Fim dos nossos serviços"] },
];

const hotels = [
  { city: "Yerevan", hotel: "Yerevan Grand Ani" },
  { city: "Tbilisi", hotel: "Philarmonic by Mercure" },
  { city: "Baku", hotel: "Baku Midtown Hotel" },
];

const included = [
  "Bilhete aéreo São Paulo / Istambul / Yerevan e Baku / Istambul / São Paulo, em classe econômica, com 1 mala de 23 kg",
  "Trecho aéreo interno Tbilisi / Baku em classe econômica",
  "Hotéis de primeira categoria com café da manhã",
  "Guia acompanhante desde o Brasil",
  "Traslados com assistência em português ou espanhol",
  "Visitas com guia local em português ou espanhol conforme o roteiro",
  "Entradas nos museus, monumentos e locais históricos indicados no programa",
  "Visita à destilaria Ararat com degustação",
  "Visto eletrônico para o Azerbaijão",
  "Serviço de rastreamento de bagagem",
  "Acesso à Sala VIP W Premium no aeroporto de Guarulhos",
  "Cartão de assistência médica internacional de US$ 75.000",
  "Seguro cancelamento de US$ 3.000 para viajantes até 85 anos",
];

const notIncluded = [
  "Taxas de embarque, aeroporto e combustível (USD 698)",
  "IOF",
  "Bebidas nas refeições",
  "Gorjetas a guias, motoristas e garçons",
  "Carregadores de bagagem",
  "Passeios e experiências indicados como opcionais",
  "Despesas pessoais, lavanderia, telefonemas e frigobar",
  "Taxas e impostos não mencionados como incluídos",
];

const faqs = [
  { q: "Como funciona o acompanhamento?", a: "Um guia acompanhante brasileiro segue com o grupo desde o embarque em Guarulhos até o retorno. No destino, as visitas são conduzidas por guias locais em português ou espanhol." },
  { q: "Brasileiros precisam de visto?", a: "Armênia e Geórgia não exigem visto de turismo para brasileiros. O visto eletrônico do Azerbaijão é obrigatório e já está incluído no pacote. O passaporte deve ter validade mínima de seis meses a partir da data de retorno." },
  { q: "Como é o clima no Cáucaso no fim de junho?", a: "Verão caucasiano: dias longos e ensolarados, calor mais intenso em Baku e noites agradáveis nas regiões de montanha, como Dilijan e o Lago Sevan. Leve roupas leves e um agasalho para a noite." },
  { q: "A viagem é cansativa?", a: "O ritmo é moderado, com caminhadas em sítios históricos e um dia de travessia terrestre da Armênia para a Geórgia. Há manhãs e tardes livres distribuídas no roteiro para descanso." },
  { q: "Quais valores não estão no preço divulgado?", a: "Os valores por pessoa não incluem as taxas de aeroporto e combustível de USD 698 nem o IOF indicado em cada categoria de apartamento." },
  { q: "Posso viajar sozinho(a)?", a: "Sim. Há valores para apartamento individual, duplo e triplo, sujeitos à disponibilidade no momento da reserva." },
];

const hotelsJsonLd = buildHotelsJsonLd(hotels, GROUP_NAME, CANONICAL);
const hotelsFaqs = buildHotelsFAQs(hotels, GROUP_NAME, CANONICAL);
const hotelsKeywords = buildHotelsKeywords(hotels);
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  "@id": `${CONTACT.domain}${CANONICAL}#trip`,
  url: `${CONTACT.domain}${CANONICAL}`,
  name: GROUP_NAME,
  description: "Viagem de 15 dias pelo Cáucaso, de 21 de junho a 5 de julho de 2027, com guia acompanhante desde o Brasil: Yerevan, Garni, Geghard, Khor Virap, Noravank, Lago Sevan, Tbilisi, Mtskheta, Uplistsikhe, Baku e Gobustan.",
  image: heroImg,
  touristType: "História, mosteiros milenares, vinhos, montanhas e cultura caucasiana",
  itinerary: { "@type": "ItemList", itemListElement: itinerary.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: `${item.day} — ${item.title}` })) },
  offers: { "@type": "Offer", price: "5581.00", priceCurrency: "USD", availability: "https://schema.org/LimitedAvailability", validThrough: "2027-06-21", priceValidUntil: "2027-06-21" },
  provider: { "@id": "https://createtravel.tur.br/#organization" },
};

const GrupoCaucaso21Junho2027 = () => {
  const ctaLink = generateWhatsAppLink(whatsappParams);
  return (
    <div className="min-h-screen">
      <SEO title="Cáucaso 21/06/2027 com Guia desde o Brasil | Create" description="15 dias por Armênia, Geórgia e Azerbaijão: Yerevan, Tbilisi, Baku, mosteiros milenares e Gobustan. Saída 21/06/2027 com guia desde o Brasil." canonicalPath={CANONICAL} ogImage={heroImg} ogType="article" jsonLd={[jsonLd, ...hotelsJsonLd]} keywords={`Cáucaso junho 2027, viagem em grupo Armênia Geórgia Azerbaijão, Cáucaso com guia brasileiro, excursão Cáucaso saindo de São Paulo, Turkish Airlines, Yerevan, Tbilisi, Baku, Gobustan, ${hotelsKeywords}`} />
      <Header />
      <WhatsAppButton variant="float" params={whatsappParams} />

      <section className="relative h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0"><img src={heroImg} alt="Mosteiro de pedra entre montanhas avermelhadas do Cáucaso ao entardecer" className="w-full h-full object-cover" width={1600} height={900} fetchPriority="high" /><div className="absolute inset-0 hero-overlay" /></div>
        <div className="container-editorial relative z-10"><motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/90 text-navy text-xs font-semibold uppercase tracking-wider mb-6"><Sparkles size={14} /> Junho 2027 · Vagas limitadas</div>
          <p className="text-caption text-gold mb-4">Grupo com guia desde o Brasil · 21/06 a 05/07/2027</p>
          <h1 className="heading-hero text-white mb-6">Cáucaso: entre dois mundos, uma grande descoberta</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">15 dias por Armênia, Geórgia e Azerbaijão — mosteiros milenares, o berço do vinho e o Mar Cáspio, com guia acompanhante desde o Brasil.</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4"><WhatsAppButton variant="cta" label="Garantir minha vaga" params={whatsappParams} className="text-lg px-8 py-4" /><a href="#investimento" className="btn-outline border-white text-white hover:bg-white hover:text-navy">Ver investimento <ArrowRight size={18} /></a></div>
        </motion.div></div>
      </section>

      <section className="bg-muted py-10 border-b border-border"><div className="container-editorial grid grid-cols-2 md:grid-cols-4 gap-6">{[
        { icon: Calendar, label: "Datas", value: "21/06 a 05/07/2027" }, { icon: Users, label: "Perfil", value: "Guia desde o Brasil" }, { icon: Plane, label: "Voos", value: "Turkish Airlines" }, { icon: Hotel, label: "Hospedagem", value: "Hotéis 1ª categoria" },
      ].map((fact) => <div key={fact.label} className="flex items-start gap-3"><fact.icon className="text-gold flex-shrink-0" size={22} /><div><p className="text-xs uppercase tracking-wider text-muted-foreground">{fact.label}</p><p className="font-serif font-semibold text-foreground">{fact.value}</p></div></div>)}</div></section>

      <section className="section-padding"><div className="container-editorial"><div className="text-center mb-14 max-w-2xl mx-auto"><p className="text-caption text-gold mb-4">Por que viver esta jornada</p><h2 className="heading-section text-foreground">Três países, três identidades, uma região</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{benefits.map((benefit, index) => <motion.div key={benefit.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="bg-card p-8 rounded-xl shadow-card border border-border"><div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center mb-4"><Check className="text-gold" size={20} /></div><h3 className="text-lg font-serif font-semibold mb-2">{benefit.title}</h3><p className="text-muted-foreground text-sm leading-relaxed">{benefit.desc}</p></motion.div>)}</div></div></section>

      <section className="section-padding bg-navy text-white"><div className="container-editorial grid lg:grid-cols-2 gap-12 items-start"><div><p className="text-caption text-gold mb-4">Passagens aéreas incluídas</p><h2 className="heading-section mb-6">Voos pela Turkish Airlines via Istambul</h2><p className="text-white/85 leading-relaxed">Classe econômica, com uma mala despachada de até 23 kg por pessoa. O trecho interno Tbilisi–Baku também está incluído. Horários previstos, sujeitos a ajustes da companhia aérea.</p></div><div className="space-y-4"><div className="bg-white/5 border border-white/10 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">Ida</p><p className="font-serif text-lg">São Paulo (GRU) → Istambul (IST) → Yerevan (EVN)</p><p className="text-white/75 text-sm mt-1">22/06 · TK 16 às 04h10, chegada a Istambul às 22h45 — conexão TK 360 às 02h00, chegada a Yerevan em 23/06 às 05h15</p></div><div className="bg-white/5 border border-white/10 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">Volta</p><p className="font-serif text-lg">Baku (GYD) → Istambul (IST) → São Paulo (GRU)</p><p className="text-white/75 text-sm mt-1">04/07 · TK 333 às 11h30 — conexão TK 215 às 20h25, chegada em 05/07 às 03h30</p></div></div></div></section>

      <section className="section-padding"><div className="container-editorial"><div className="text-center mb-14 max-w-2xl mx-auto"><p className="text-caption text-gold mb-4">Roteiro completo</p><h2 className="heading-section text-foreground">15 dias — dia a dia</h2></div><div className="grid md:grid-cols-2 gap-6">{itinerary.map((item, index) => <motion.div key={item.day} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.03 }} className="bg-card border border-border rounded-xl p-6 shadow-card"><div className="flex items-center gap-2 text-gold text-xs uppercase tracking-wider font-semibold mb-2"><MapPin size={14} /> {item.day}</div><h3 className="font-serif text-xl font-semibold mb-3">{item.title}</h3><ul className="space-y-2">{item.points.map((point) => <li key={point} className="flex gap-2 text-sm text-muted-foreground"><span className="text-gold mt-1">•</span><span>{point}</span></li>)}</ul></motion.div>)}</div></div></section>

      <section className="section-padding bg-muted"><div className="container-editorial"><div className="text-center mb-12 max-w-2xl mx-auto"><p className="text-caption text-gold mb-4">Hotéis previstos</p><h2 className="heading-section text-foreground">Hospedagens selecionadas</h2><p className="text-muted-foreground mt-4">Todos com café da manhã incluído. Hotéis previstos ou similares da mesma categoria.</p></div><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">{hotels.map((hotel) => <div key={hotel.city} className="bg-card border border-border rounded-xl p-6 text-center shadow-card"><Hotel className="text-gold mx-auto mb-3" size={22} /><p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{hotel.city}</p><p className="font-serif text-lg font-semibold text-foreground"><a href={getHotelUrl(hotel.hotel)} target="_blank" rel="noopener noreferrer" className="hover:text-gold underline-offset-4 hover:underline transition-colors">{hotel.hotel}</a></p></div>)}</div></div></section>

      <section className="section-padding"><div className="container-editorial grid md:grid-cols-2 gap-8"><div className="bg-card rounded-xl p-8 border border-border shadow-card"><h2 className="font-serif text-2xl font-semibold mb-6 text-foreground">O que está incluído</h2><ul className="space-y-3">{included.map((item) => <li key={item} className="flex gap-3 text-sm"><Check className="text-emerald flex-shrink-0 mt-0.5" size={18} /><span className="text-foreground/85">{item}</span></li>)}</ul></div><div className="bg-card rounded-xl p-8 border border-border shadow-card"><h2 className="font-serif text-2xl font-semibold mb-6 text-foreground">Não incluído</h2><ul className="space-y-3">{notIncluded.map((item) => <li key={item} className="flex gap-3 text-sm"><X className="text-muted-foreground flex-shrink-0 mt-0.5" size={18} /><span className="text-muted-foreground">{item}</span></li>)}</ul></div></div></section>

      <section id="investimento" className="section-padding bg-gradient-hero text-white"><div className="container-editorial max-w-4xl text-center"><p className="text-caption text-gold mb-4">Investimento</p><h2 className="heading-section mb-6">A partir de US$ 5.569 por pessoa</h2><p className="text-white/85 mb-8">Valores por pessoa, acrescidos de IOF e de USD 698 em taxas de aeroporto e combustível. Sujeitos a disponibilidade e confirmação aérea.</p><div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">{[
        { label: "Apto triplo", price: "US$ 5.569", extra: "+ IOF US$ 143" }, { label: "Apto duplo", price: "US$ 5.581", extra: "+ IOF US$ 144" }, { label: "Apto individual", price: "US$ 6.396", extra: "+ IOF US$ 169" },
      ].map((price) => <div key={price.label} className="bg-white/10 border border-white/20 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">{price.label}</p><p className="font-serif text-2xl font-semibold">{price.price}</p><p className="text-white/70 text-xs mt-1">{price.extra}</p></div>)}</div><WhatsAppButton variant="cta" label="Quero garantir minha vaga" params={whatsappParams} className="text-lg px-10 py-5" /></div></section>

      <section className="section-padding bg-muted"><div className="container-editorial max-w-3xl"><FAQSection faqs={[...faqs, ...hotelsFaqs]} /></div></section>
      <section className="section-padding"><div className="container-editorial text-center max-w-2xl"><h2 className="heading-section text-foreground mb-6">Vagas limitadas — grupo com guia desde o Brasil</h2><p className="text-muted-foreground mb-8">Fale com a curadoria Create Travel e consulte a disponibilidade para o Cáucaso com saída em 21 de junho de 2027.</p><div className="flex flex-col sm:flex-row items-center justify-center gap-4"><a href={ctaLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-lg px-8 py-4">Falar no WhatsApp</a><Link to="/embarque-com-a-create" className="btn-outline">Ver outras saídas <ArrowRight size={18} /></Link></div></div></section>
      <Footer />
    </div>
  );
};

export default GrupoCaucaso21Junho2027;
