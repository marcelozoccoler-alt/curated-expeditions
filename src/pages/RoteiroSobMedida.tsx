import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Palette, Sparkles, LifeBuoy, MapPin, Users, Heart, Compass, FileText, Clock } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEO } from "@/components/SEO";
import heroAmazon from "@/assets/hero-amazon.jpg";

const STEPS = [
  { icon: MessageCircle, title: "1. Conversa inicial", desc: "Entendemos seu perfil, ritmo, orçamento e desejos. Sem formulário engessado — uma conversa real." },
  { icon: Palette, title: "2. Proposta personalizada", desc: "Um travel designer desenha o roteiro dia a dia, com hotéis, experiências e transporte selecionados a dedo." },
  { icon: Sparkles, title: "3. Ajustes até ficar perfeito", desc: "Refinamos juntos — trocar uma cidade, esticar dois dias, subir a categoria de um hotel. Sem burocracia." },
  { icon: LifeBuoy, title: "4. Suporte antes, durante e depois", desc: "Um WhatsApp direto com sua travel designer do primeiro voo à volta pra casa." },
];

const INCLUDED = [
  "Planejamento dia a dia com horários e sequência lógica",
  "Curadoria de hotéis e hospedagens alinhadas ao seu perfil",
  "Sugestões de restaurantes, atrações e experiências únicas",
  "Dicas práticas: transporte, moeda, clima, vistos, costumes locais",
  "Documento digital em PDF interativo com mapas e links",
  "Travel designer dedicado e número direto de WhatsApp",
];

const FOR_WHOM = [
  { icon: Heart, label: "Casais em lua de mel" },
  { icon: Users, label: "Famílias com crianças" },
  { icon: Compass, label: "Viajantes experientes" },
  { icon: MapPin, label: "Quem foge de pacotes prontos" },
];

const DESTINATIONS = [
  { name: "África do Sul", to: "/destinos" },
  { name: "Tanzânia", to: "/destinos" },
  { name: "Jordânia", to: "/destinos" },
  { name: "Grécia", to: "/destinos" },
  { name: "Portugal", to: "/destinos" },
  { name: "Itália", to: "/destinos" },
  { name: "Islândia", to: "/destinos" },
  { name: "Butão", to: "/destinos" },
  { name: "Japão", to: "/destinos" },
  { name: "Nova Zelândia", to: "/destinos" },
  { name: "Patagônia", to: "/destinos" },
  { name: "Brasil", to: "/brasil" },
];

const RoteiroSobMedida = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Roteiro de Viagem Sob Medida",
    provider: { "@type": "TravelAgency", name: "Create Travel", url: "https://createtravel.tur.br" },
    areaServed: "Worldwide",
    description:
      "Roteiros de viagem personalizados desenhados do zero por um travel designer. Planejamento dia a dia, curadoria de hotéis, experiências exclusivas e suporte antes, durante e depois da viagem.",
    serviceType: "Roteiro personalizado de viagem",
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Roteiro de Viagem Sob Medida — Planejamento Exclusivo"
        description="Roteiros de viagem personalizados desenhados do zero por um travel designer. Planejamento dia a dia, curadoria de hotéis, experiências exclusivas e suporte completo."
        canonicalPath="/roteiro-sob-medida"
        keywords="roteiro sob medida, roteiro personalizado, viagem sob medida, travel designer, planejador de viagens, agência de viagens personalizada"
        jsonLd={jsonLd}
      />
      <Header />
      <WhatsAppButton variant="float" />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[520px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroAmazon} alt="Roteiro de viagem sob medida" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="container-editorial relative z-10 text-white max-w-3xl">
          <div className="gold-line mb-6" />
          <h1 className="heading-hero mb-6">Roteiro de Viagem Sob Medida</h1>
          <p className="text-xl md:text-2xl text-white/90 font-light mb-8">
            Um planejamento exclusivo desenhado do zero para você — sem pacotes prontos, sem atalhos.
          </p>
          <WhatsAppButton variant="cta" label="Começar meu roteiro" className="text-lg px-8 py-4" />
        </div>
      </section>

      {/* Como funciona */}
      <section className="section-padding bg-background">
        <div className="container-editorial">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="heading-section text-foreground mb-4">Como funciona</h2>
            <p className="text-lg text-muted-foreground font-light">
              Quatro etapas simples do primeiro "oi" ao último brinde da viagem.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="bg-card border border-border rounded-lg p-6">
                  <div className="w-12 h-12 rounded-full bg-emerald/10 flex items-center justify-center mb-4">
                    <Icon className="text-emerald" size={22} />
                  </div>
                  <h3 className="font-serif text-lg text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* O que está incluso */}
      <section className="section-padding bg-muted">
        <div className="container-editorial grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="gold-line mb-6" />
            <h2 className="heading-section text-foreground mb-4">O que está incluso</h2>
            <p className="text-muted-foreground font-light mb-6">
              Não vendemos um PDF — vendemos uma parceria de ponta a ponta. Cada roteiro sob medida da Create Travel entrega:
            </p>
            <ul className="space-y-3">
              {INCLUDED.map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <FileText className="text-gold shrink-0 mt-1" size={18} />
                  <span className="text-foreground">{i}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="gold-line mb-6" />
            <h2 className="heading-section text-foreground mb-4">Para quem é</h2>
            <p className="text-muted-foreground font-light mb-6">
              Roteiros sob medida são para quem entende que uma boa viagem começa muito antes do embarque.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {FOR_WHOM.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.label} className="bg-card border border-border rounded-lg p-5 flex items-center gap-3">
                    <Icon className="text-gold shrink-0" size={20} />
                    <span className="text-sm text-foreground font-medium">{f.label}</span>
                  </div>
                );
              })}
            </div>
            <div className="mt-8 p-5 bg-navy/5 border-l-4 border-gold rounded-r-lg">
              <div className="flex items-center gap-2 text-sm text-navy font-semibold mb-1">
                <Clock size={16} /> Tempo de resposta
              </div>
              <p className="text-sm text-muted-foreground">
                Enviamos a primeira proposta em até 5 dias úteis após a conversa inicial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Destinos */}
      <section className="section-padding bg-background">
        <div className="container-editorial">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="heading-section text-foreground mb-4">Destinos que mais planejamos</h2>
            <p className="text-muted-foreground font-light">
              Onde nossos clientes têm ido — e onde temos parceiros locais de confiança.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {DESTINATIONS.map((d) => (
              <Link
                key={d.name}
                to={d.to}
                className="px-5 py-2 rounded-full border border-border bg-card text-foreground hover:border-gold hover:text-gold transition-colors text-sm"
              >
                {d.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="container-editorial text-center max-w-2xl mx-auto">
          <h2 className="heading-section mb-6">Vamos criar seu roteiro?</h2>
          <p className="text-xl text-white/90 mb-10 font-light">
            Conte um pouco sobre a viagem que você quer viver. Nós cuidamos do resto.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <WhatsAppButton variant="cta" label="Falar no WhatsApp" className="text-lg px-8 py-4" />
            <Link to="/contato" className="btn-outline border-white text-white hover:bg-white hover:text-navy text-lg px-8 py-4">
              Enviar briefing por e-mail <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RoteiroSobMedida;
