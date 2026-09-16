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
import heroImg from "@/assets/grupo-africa-do-sul-carnaval-2027.jpg";

const CANONICAL = "/grupos/africa-do-sul-carnaval-2027";
const GROUP_NAME = "Grupo África do Sul · Carnaval 2027 — Create Travel";
const whatsappParams = {
  type: "Roteiro" as const,
  name: "Grupo África do Sul · Carnaval 2027 (saída 04/02/2027)",
};

const benefits = [
  { title: "Guia acompanhante desde o Brasil", desc: "Guia desde São Paulo e guias locais em português em Joanesburgo e na Cidade do Cabo." },
  { title: "Safáris no Kruger", desc: "Hospedagem no Shishangeni Private Lodge, em concessão privada, com game drives em 4x4 abertos em busca dos Big Five." },
  { title: "Joanesburgo e Soweto", desc: "Museu do Apartheid, Vilakazi Street, Mandela House e o Hector Pieterson Memorial." },
  { title: "Cidade do Cabo completa", desc: "Table Mountain com teleférico incluído, Greenmarket Square, Company's Garden, Castelo da Boa Esperança e Bo-Kaap." },
  { title: "Península do Cabo", desc: "Hout Bay, Chapman's Peak, o Cabo da Boa Esperança e os pinguins africanos em Simon's Town, com almoço incluído." },
  { title: "Voos pela South African Airways", desc: "São Paulo–Joanesburgo e Cidade do Cabo–São Paulo em classe econômica, com uma mala de 23 kg." },
];

const itinerary = [
  { day: "Dia 1 — 04/02 (qui)", title: "São Paulo → Joanesburgo", points: ["Apresentação em Guarulhos e encontro com nosso representante", "Voo SA 223 às 17h45", "Pernoite a bordo"] },
  { day: "Dia 2 — 05/02 (sex)", title: "Joanesburgo · Soweto", points: ["Chegada às 07h45, recepção e traslado ao hotel", "Apartamentos já disponíveis · manhã livre para descanso", "À tarde, visita a Joanesburgo com Soweto"] },
  { day: "Dia 3 — 06/02 (sáb)", title: "Joanesburgo · Museu do Apartheid", points: ["Visita de meio dia ao Museu do Apartheid", "Retorno ao hotel e tarde livre"] },
  { day: "Dia 4 — 07/02 (dom)", title: "Joanesburgo → Parque Nacional Kruger", points: ["Viagem pela província de Mpumalanga até o Shishangeni Lodge", "Almoço em rota incluído", "Chegada ao lodge, em concessão privada do Kruger", "Jantar incluído"] },
  { day: "Dia 5 — 08/02 (seg)", title: "Kruger · dia de safári", points: ["Pensão completa no lodge", "Safári fotográfico ao amanhecer em 4x4 abertos", "Tempo livre para as instalações do lodge", "Novo safári fotográfico no fim do dia e jantar"] },
  { day: "Dia 6 — 09/02 (ter)", title: "Kruger → Joanesburgo → Cidade do Cabo", points: ["Safári fotográfico ao amanhecer em 4x4 abertos e café da manhã", "Viagem de ônibus ao aeroporto de Joanesburgo, com almoço tipo piquenique incluído", "Voo SA 375 às 21h20, chegada à Cidade do Cabo às 23h35", "Recepção e traslado ao hotel"] },
  { day: "Dia 7 — 10/02 (qua)", title: "Cidade do Cabo", points: ["Passeio de dia inteiro com almoço incluído", "Teleférico até a Table Mountain incluído, se o clima permitir", "Greenmarket Square, Company's Garden, Slave Lodge e Catedral St. George", "Castelo da Boa Esperança, centro histórico e o bairro Bo-Kaap"] },
  { day: "Dia 8 — 11/02 (qui)", title: "Península do Cabo", points: ["Passeio de dia inteiro com almoço incluído", "Hout Bay, com opção de barco até a colônia de focas em Duiker Island", "Chapman's Peak e a Reserva Natural do Cabo da Boa Esperança (funicular não incluso)", "Simon's Town e a colônia de pinguins africanos"] },
  { day: "Dia 9 — 12/02 (sex)", title: "Cidade do Cabo", points: ["Dia livre", "Opcional (não incluso): Vinhedos do Cabo, com Stellenbosch, Franschhoek, duas degustações e almoço"] },
  { day: "Dia 10 — 13/02 (sáb)", title: "Cidade do Cabo → São Paulo", points: ["Traslado ao aeroporto", "Voo SA 226 às 12h40", "Chegada prevista a Guarulhos às 16h35 · fim dos nossos serviços"] },
];

const hotels = [
  { city: "Joanesburgo", hotel: "Onomo Sandton" },
  { city: "Área do Kruger Park", hotel: "Shishangeni Main Lodge" },
  { city: "Cidade do Cabo", hotel: "Fountains" },
];

const included = [
  "Bilhete aéreo São Paulo / Joanesburgo / Cidade do Cabo / São Paulo, em classe econômica, com 1 mala de 23 kg",
  "8 noites em hotéis de primeira categoria com café da manhã",
  "Guia acompanhante desde São Paulo e guias locais em português em Joanesburgo e na Cidade do Cabo",
  "Traslados com assistência",
  "Safáris fotográficos em veículos 4x4 abertos com ranger no Kruger",
  "Pensão completa no lodge no Kruger, com almoços e jantares indicados no roteiro",
  "Teleférico da Table Mountain, se o clima permitir (nas datas em que estiver em manutenção, a visita é substituída pelo Signal Hill)",
  "Passeios de dia inteiro na Cidade do Cabo e na Península do Cabo, com almoço incluído",
];

const notIncluded = [
  "Taxas de embarque, aeroporto e combustível (USD 271)",
  "IOF",
  "Bebidas nas refeições",
  "Passeio opcional aos Vinhedos do Cabo, em Stellenbosch e Franschhoek",
  "Funicular no Cabo da Boa Esperança e passeio de barco às focas em Hout Bay",
  "Gorjetas a guias, motoristas, garçons e carregadores de malas",
  "Despesas pessoais, frigobar, telefonemas e lavanderia",
  "Documentação de viagem, vistos e autorizações",
  "Taxas e impostos não mencionados como incluídos",
];

const faqs = [
  { q: "Como funciona o acompanhamento?", a: "Um guia acompanhante segue com o grupo desde o embarque em São Paulo, e as visitas em Joanesburgo e na Cidade do Cabo são conduzidas por guias locais em português. Os safáris no Kruger são realizados com ranger em inglês." },
  { q: "Quais documentos e vacinas são exigidos?", a: "Passaporte com validade mínima de seis meses a partir da data de retorno. Não é necessário visto para brasileiros, e a vacina contra febre amarela é obrigatória." },
  { q: "Crianças podem participar dos safáris?", a: "A idade mínima para participar do safári é 6 anos, e a participação fica sujeita à avaliação do guia. Há tarifa específica para crianças, de USD 3.293 mais IOF de USD 75." },
  { q: "Como é a hospedagem no Kruger?", a: "O grupo fica no Shishangeni Main Lodge, dentro da concessão privada Mpanamana, no Parque Nacional Kruger, com pensão completa e safáris ao amanhecer e no fim do dia." },
  { q: "Como é o clima em fevereiro?", a: "É verão no hemisfério sul: Joanesburgo e o Kruger ficam quentes e úmidos, em geral entre 19°C e 31°C, com pancadas de chuva à tarde; a Cidade do Cabo é seca e ventosa, entre 18°C e 28°C. Leve roupas leves em tons neutros para o safári, agasalho para os game drives ao amanhecer, protetor solar, repelente e chapéu." },
  { q: "Quais valores não estão no preço divulgado?", a: "Os valores por pessoa não incluem as taxas de aeroporto e combustível de USD 271 nem o IOF indicado em cada categoria de apartamento." },
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
  description: "Viagem de 10 dias pela África do Sul no Carnaval, de 04 a 13 de fevereiro de 2027, com guia desde o Brasil: Joanesburgo, Soweto, Museu do Apartheid, safáris no Kruger em concessão privada, Cidade do Cabo e Península do Cabo.",
  image: heroImg,
  touristType: "Safári, vida selvagem, história e paisagens costeiras",
  itinerary: { "@type": "ItemList", itemListElement: itinerary.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: `${item.day} — ${item.title}` })) },
  offers: { "@type": "Offer", price: "4997.00", priceCurrency: "USD", availability: "https://schema.org/LimitedAvailability", validThrough: "2027-02-04", priceValidUntil: "2027-02-04" },
  provider: { "@id": "https://createtravel.tur.br/#organization" },
};

const GrupoAfricaDoSulCarnaval2027 = () => {
  const ctaLink = generateWhatsAppLink(whatsappParams);
  return (
    <div className="min-h-screen">
      <SEO title="África do Sul Carnaval 2027 com Guia desde o Brasil | Create" description="10 dias entre safáris e paisagens: Soweto, Museu do Apartheid, Kruger em lodge privado, Table Mountain e Península do Cabo. Saída 04/02/2027." canonicalPath={CANONICAL} ogImage={heroImg} ogType="article" jsonLd={[jsonLd, ...hotelsJsonLd]} keywords={`África do Sul Carnaval 2027, safári Kruger com guia brasileiro, viagem em grupo Cidade do Cabo, excursão África do Sul saindo de São Paulo, South African Airways, Shishangeni, ${hotelsKeywords}`} />
      <Header />
      <WhatsAppButton variant="float" params={whatsappParams} />

      <section className="relative h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0"><img src={heroImg} alt="Elefante na savana africana ao amanhecer com veículo de safári ao fundo" className="w-full h-full object-cover" width={1600} height={900} fetchPriority="high" /><div className="absolute inset-0 hero-overlay" /></div>
        <div className="container-editorial relative z-10"><motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/90 text-navy text-xs font-semibold uppercase tracking-wider mb-6"><Sparkles size={14} /> Carnaval 2027 · Lugares limitados</div>
          <p className="text-caption text-gold mb-4">Grupo com guia desde o Brasil · 04 a 13 de fevereiro de 2027</p>
          <h1 className="heading-hero text-white mb-6">Carnaval na África do Sul: entre safáris e paisagens</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">10 dias entre Joanesburgo, Soweto, os safáris do Kruger em lodge privado e a beleza da Cidade do Cabo.</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4"><WhatsAppButton variant="cta" label="Garantir minha vaga" params={whatsappParams} className="text-lg px-8 py-4" /><a href="#investimento" className="btn-outline border-white text-white hover:bg-white hover:text-navy">Ver investimento <ArrowRight size={18} /></a></div>
        </motion.div></div>
      </section>

      <section className="bg-muted py-10 border-b border-border"><div className="container-editorial grid grid-cols-2 md:grid-cols-4 gap-6">{[
        { icon: Calendar, label: "Datas", value: "04 a 13/02/2027" }, { icon: Users, label: "Perfil", value: "Guia desde o Brasil" }, { icon: Plane, label: "Voos", value: "South African Airways" }, { icon: Hotel, label: "Hospedagem", value: "Hotéis 1ª categoria e lodge" },
      ].map((fact) => <div key={fact.label} className="flex items-start gap-3"><fact.icon className="text-gold flex-shrink-0" size={22} /><div><p className="text-xs uppercase tracking-wider text-muted-foreground">{fact.label}</p><p className="font-serif font-semibold text-foreground">{fact.value}</p></div></div>)}</div></section>

      <section className="section-padding"><div className="container-editorial"><div className="text-center mb-14 max-w-2xl mx-auto"><p className="text-caption text-gold mb-4">Por que viver esta jornada</p><h2 className="heading-section text-foreground">A África selvagem e a África cosmopolita</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{benefits.map((benefit, index) => <motion.div key={benefit.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="bg-card p-8 rounded-xl shadow-card border border-border"><div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center mb-4"><Check className="text-gold" size={20} /></div><h3 className="text-lg font-serif font-semibold mb-2">{benefit.title}</h3><p className="text-muted-foreground text-sm leading-relaxed">{benefit.desc}</p></motion.div>)}</div></div></section>

      <section className="section-padding bg-navy text-white"><div className="container-editorial grid lg:grid-cols-2 gap-12 items-start"><div><p className="text-caption text-gold mb-4">Passagens aéreas incluídas</p><h2 className="heading-section mb-6">Voos pela South African Airways</h2><p className="text-white/85 leading-relaxed">Classe econômica, com uma mala despachada de até 23 kg por pessoa, incluindo o trecho interno até a Cidade do Cabo. Horários previstos, sujeitos a ajustes da companhia aérea.</p></div><div className="space-y-4"><div className="bg-white/5 border border-white/10 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">Ida</p><p className="font-serif text-lg">São Paulo (GRU) → Joanesburgo (JNB)</p><p className="text-white/75 text-sm mt-1">04/02 · SA 223 às 17h45, chegada em 05/02 às 07h45</p></div><div className="bg-white/5 border border-white/10 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">Interno e volta</p><p className="font-serif text-lg">Joanesburgo → Cidade do Cabo (CPT) → São Paulo (GRU)</p><p className="text-white/75 text-sm mt-1">09/02 · SA 375 às 21h20, chegada às 23h35 — 13/02 · SA 226 às 12h40, chegada às 16h35</p></div></div></div></section>

      <section className="section-padding"><div className="container-editorial"><div className="text-center mb-14 max-w-2xl mx-auto"><p className="text-caption text-gold mb-4">Roteiro completo</p><h2 className="heading-section text-foreground">10 dias — dia a dia</h2></div><div className="grid md:grid-cols-2 gap-6">{itinerary.map((item, index) => <motion.div key={item.day} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.03 }} className="bg-card border border-border rounded-xl p-6 shadow-card"><div className="flex items-center gap-2 text-gold text-xs uppercase tracking-wider font-semibold mb-2"><MapPin size={14} /> {item.day}</div><h3 className="font-serif text-xl font-semibold mb-3">{item.title}</h3><ul className="space-y-2">{item.points.map((point) => <li key={point} className="flex gap-2 text-sm text-muted-foreground"><span className="text-gold mt-1">•</span><span>{point}</span></li>)}</ul></motion.div>)}</div></div></section>

      <section className="section-padding bg-muted"><div className="container-editorial"><div className="text-center mb-12 max-w-2xl mx-auto"><p className="text-caption text-gold mb-4">Hotéis previstos</p><h2 className="heading-section text-foreground">Hospedagens selecionadas</h2><p className="text-muted-foreground mt-4">Todos com café da manhã incluído. Hotéis previstos ou similares da mesma categoria.</p></div><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{hotels.map((hotel) => <div key={hotel.city} className="bg-card border border-border rounded-xl p-6 text-center shadow-card"><Hotel className="text-gold mx-auto mb-3" size={22} /><p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{hotel.city}</p><p className="font-serif text-lg font-semibold text-foreground"><a href={getHotelUrl(hotel.hotel)} target="_blank" rel="noopener noreferrer" className="hover:text-gold underline-offset-4 hover:underline transition-colors">{hotel.hotel}</a></p></div>)}</div></div></section>

      <section className="section-padding"><div className="container-editorial grid md:grid-cols-2 gap-8"><div className="bg-card rounded-xl p-8 border border-border shadow-card"><h2 className="font-serif text-2xl font-semibold mb-6 text-foreground">O que está incluído</h2><ul className="space-y-3">{included.map((item) => <li key={item} className="flex gap-3 text-sm"><Check className="text-emerald flex-shrink-0 mt-0.5" size={18} /><span className="text-foreground/85">{item}</span></li>)}</ul></div><div className="bg-card rounded-xl p-8 border border-border shadow-card"><h2 className="font-serif text-2xl font-semibold mb-6 text-foreground">Não incluído</h2><ul className="space-y-3">{notIncluded.map((item) => <li key={item} className="flex gap-3 text-sm"><X className="text-muted-foreground flex-shrink-0 mt-0.5" size={18} /><span className="text-muted-foreground">{item}</span></li>)}</ul></div></div></section>

      <section id="investimento" className="section-padding bg-gradient-hero text-white"><div className="container-editorial max-w-4xl text-center"><p className="text-caption text-gold mb-4">Investimento</p><h2 className="heading-section mb-6">A partir de US$ 4.987 por pessoa</h2><p className="text-white/85 mb-8">Valores por pessoa, acrescidos de IOF e de USD 271 em taxas de aeroporto e combustível. Crianças a partir de US$ 3.293 mais IOF de US$ 75. Sujeitos a disponibilidade e confirmação aérea.</p><div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">{[
        { label: "Apto triplo", price: "US$ 4.987", extra: "+ IOF US$ 128" }, { label: "Apto duplo", price: "US$ 4.997", extra: "+ IOF US$ 129" }, { label: "Apto individual", price: "US$ 5.996", extra: "+ IOF US$ 161" },
      ].map((price) => <div key={price.label} className="bg-white/10 border border-white/20 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">{price.label}</p><p className="font-serif text-2xl font-semibold">{price.price}</p><p className="text-white/70 text-xs mt-1">{price.extra}</p></div>)}</div><WhatsAppButton variant="cta" label="Quero garantir minha vaga" params={whatsappParams} className="text-lg px-10 py-5" /></div></section>

      <section className="section-padding bg-muted"><div className="container-editorial max-w-3xl"><FAQSection faqs={[...faqs, ...hotelsFaqs]} /></div></section>
      <section className="section-padding"><div className="container-editorial text-center max-w-2xl"><h2 className="heading-section text-foreground mb-6">Lugares limitados — grupo com guia desde o Brasil</h2><p className="text-muted-foreground mb-8">Fale com a curadoria Create Travel e consulte a disponibilidade para a África do Sul no Carnaval de 2027.</p><div className="flex flex-col sm:flex-row items-center justify-center gap-4"><a href={ctaLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-lg px-8 py-4">Falar no WhatsApp</a><Link to="/embarque-com-a-create" className="btn-outline">Ver outras saídas <ArrowRight size={18} /></Link></div></div></section>
      <Footer />
    </div>
  );
};

export default GrupoAfricaDoSulCarnaval2027;
