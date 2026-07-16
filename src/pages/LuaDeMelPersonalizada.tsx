import { Link } from "react-router-dom";
import { ArrowRight, Heart, Shield, Gift, Phone, Sparkles } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEO } from "@/components/SEO";
import heroAmazon from "@/assets/hero-amazon.jpg";

const WHY = [
  { icon: Heart, title: "Atendimento discreto e pessoal", desc: "Um travel designer só para vocês, do briefing à volta pra casa." },
  { icon: Sparkles, title: "Hotéis e experiências únicas", desc: "Curadoria de propriedades românticas e experiências que não estão em pacote nenhum." },
  { icon: Phone, title: "Suporte 24h durante a viagem", desc: "Qualquer imprevisto, um WhatsApp resolve. Vocês só se preocupam em aproveitar." },
  { icon: Gift, title: "Benefícios exclusivos", desc: "Upgrades, jantares, transfers e mimos negociados nos hotéis parceiros." },
];

const DESTINATIONS = [
  "Maldivas", "Polinésia Francesa", "Seychelles", "Maurício",
  "Caribe", "Itália", "Grécia", "França",
  "África do Sul", "Tanzânia", "Botsuana", "Bali",
];

const STEPS = [
  { n: "01", title: "Conversa com o casal", desc: "Entendemos o estilo, o tempo disponível, o orçamento e o que vocês querem sentir." },
  { n: "02", title: "Proposta com 2 a 3 opções", desc: "Roteiros diferentes para vocês compararem — praia + cidade, safári + praia, romance clássico europeu." },
  { n: "03", title: "Ajustes até ficar perfeito", desc: "Trocar hotel, esticar uma noite, adicionar um jantar especial — tudo refinado com vocês." },
  { n: "04", title: "Acompanhamento completo", desc: "Documento com dia a dia, mapas, contatos locais e nossa travel designer no WhatsApp." },
];

const LuaDeMelPersonalizada = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Lua de Mel Personalizada",
    provider: { "@type": "TravelAgency", name: "Create Travel", url: "https://createtravel.tur.br" },
    areaServed: "Worldwide",
    description:
      "Lua de mel planejada sob medida por especialistas. Roteiros românticos para Maldivas, Caribe, Europa, África e mais.",
    serviceType: "Lua de mel personalizada",
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Lua de Mel Personalizada — Roteiros Românticos Sob Medida"
        description="Lua de mel planejada sob medida por especialistas. Roteiros românticos para Maldivas, Caribe, Europa, África e mais. Curadoria autoral para o primeiro capítulo a dois."
        canonicalPath="/lua-de-mel-personalizada"
        keywords="lua de mel personalizada, roteiro lua de mel, viagem romântica, lua de mel Maldivas, lua de mel Europa, agência lua de mel"
        jsonLd={jsonLd}
      />
      <Header />
      <WhatsAppButton variant="float" />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[520px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroAmazon} alt="Lua de mel personalizada" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="container-editorial relative z-10 text-white max-w-3xl">
          <div className="gold-line mb-6" />
          <h1 className="heading-hero mb-6">Lua de Mel Personalizada</h1>
          <p className="text-xl md:text-2xl text-white/90 font-light mb-8">
            O primeiro capítulo a dois — desenhado só para vocês, sem pacote de prateleira.
          </p>
          <WhatsAppButton variant="cta" label="Planejar nossa lua de mel" className="text-lg px-8 py-4" />
        </div>
      </section>

      {/* Por que */}
      <section className="section-padding bg-background">
        <div className="container-editorial">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="heading-section text-foreground mb-4">Por que planejar com a Create Travel</h2>
            <p className="text-lg text-muted-foreground font-light">
              Porque lua de mel não é hora de estar refém de call center. É hora de estar com quem cuida.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY.map((w) => {
              const Icon = w.icon;
              return (
                <div key={w.title} className="bg-card border border-border rounded-lg p-6">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                    <Icon className="text-gold" size={22} />
                  </div>
                  <h3 className="font-serif text-lg text-foreground mb-2 leading-snug">{w.title}</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">{w.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Destinos */}
      <section className="section-padding bg-muted">
        <div className="container-editorial">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="heading-section text-foreground mb-4">Destinos mais pedidos para lua de mel</h2>
            <p className="text-muted-foreground font-light">
              De ilhas paradisíacas a capitais europeias — combinamos praia, cidade e experiência como vocês quiserem.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {DESTINATIONS.map((d) => (
              <span
                key={d}
                className="px-5 py-2 rounded-full border border-border bg-card text-foreground text-sm"
              >
                {d}
              </span>
            ))}
          </div>
          <div className="text-center">
            <Link to="/destinos" className="btn-outline">
              Explorar todos os destinos <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="section-padding bg-background">
        <div className="container-editorial">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="heading-section text-foreground mb-4">Como funciona</h2>
            <p className="text-lg text-muted-foreground font-light">
              Do primeiro café ao último brinde nas Maldivas.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((s) => (
              <div key={s.n} className="bg-card border border-border rounded-lg p-6">
                <div className="text-4xl font-serif text-gold mb-3">{s.n}</div>
                <h3 className="font-serif text-lg text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Confiança */}
      <section className="py-16 bg-navy/5 border-y border-border">
        <div className="container-editorial text-center max-w-2xl mx-auto">
          <Shield className="text-gold mx-auto mb-4" size={32} />
          <p className="text-lg text-foreground font-light italic">
            "Uma agência boutique com 11 anos de experiência, CADASTUR ativo e atendimento em 5 idiomas. Sua lua de mel merece esse cuidado."
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="container-editorial text-center max-w-2xl mx-auto">
          <h2 className="heading-section mb-6">Vamos planejar sua lua de mel?</h2>
          <p className="text-xl text-white/90 mb-10 font-light">
            Conte quando é o grande dia e onde vocês sempre sonharam ir. O resto é com a gente.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <WhatsAppButton variant="cta" label="Falar no WhatsApp" className="text-lg px-8 py-4" />
            <Link to="/contato" className="btn-outline border-white text-white hover:bg-white hover:text-navy text-lg px-8 py-4">
              Enviar briefing <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LuaDeMelPersonalizada;
