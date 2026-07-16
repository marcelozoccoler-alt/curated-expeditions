import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Plane, Globe, Check, Calendar } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEO } from "@/components/SEO";
import { DEPARTURES } from "@/pages/EmbarqueComACreate";

const MONTHS_PT = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

const DIFFERENTIALS = [
  { icon: Users, title: "Coordenador brasileiro", desc: "Embarca com o grupo em Guarulhos e acompanha do check-in ao último brinde." },
  { icon: Globe, title: "Tudo em português", desc: "Nada de se perder em inglês macarrônico — comunicação clara do começo ao fim." },
  { icon: Plane, title: "Grupos pequenos", desc: "Máximo de 15 a 20 pessoas. Nada de comboios de 40 turistas de crachá." },
  { icon: Calendar, title: "Parcelamento facilitado", desc: "Entrada de 25% + 9x sem juros no cartão. Sem surpresas." },
];

const GruposGuiaBrasileiro = () => {
  const [year, setYear] = useState<"all" | number>("all");

  const years = useMemo(() => {
    const set = new Set<number>();
    DEPARTURES.forEach((d) => set.add(d.departureDate.getFullYear()));
    return Array.from(set).sort();
  }, []);

  const filtered = useMemo(() => {
    if (year === "all") return DEPARTURES;
    return DEPARTURES.filter((d) => d.departureDate.getFullYear() === year);
  }, [year]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Grupos de Viagem com Guia Brasileiro",
    provider: { "@type": "TravelAgency", name: "Create Travel", url: "https://createtravel.tur.br" },
    areaServed: "Worldwide",
    description: `${DEPARTURES.length} saídas internacionais em 2026 e 2027 com coordenador brasileiro embarcando de São Paulo.`,
    serviceType: "Viagem em grupo com guia brasileiro",
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Grupos de Viagem com Guia Brasileiro — Saídas 2026 e 2027"
        description={`${DEPARTURES.length} saídas internacionais 2026/2027 com coordenador brasileiro embarcando de São Paulo. África do Sul, Jordânia, Grécia, Portugal e mais. Entrada 25% + 9x sem juros.`}
        canonicalPath="/grupos-guia-brasileiro"
        keywords="grupo viagem guia brasileiro, viagem em grupo, saídas em grupo 2026, saídas em grupo 2027, viagem com guia brasileiro"
        jsonLd={jsonLd}
      />
      <Header />
      <WhatsAppButton variant="float" />

      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-navy via-navy to-navy/90 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-gold blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-emerald blur-3xl" />
        </div>
        <div className="container-editorial relative z-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 border border-gold/40 text-gold text-xs font-semibold uppercase tracking-[0.3em] mb-6">
            <Plane size={14} /> {DEPARTURES.length} saídas confirmadas
          </div>
          <div className="gold-line mx-auto mb-6" />
          <h1 className="heading-hero mb-6">
            Grupos com <span className="text-gold italic">Guia Brasileiro</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4 font-light">
            Viaje com quem conhece o destino e fala a sua língua.
          </p>
          <p className="text-base text-white/70 mb-8 font-light">
            Saídas internacionais 2026 e 2027 · Coordenador embarcando de Guarulhos · Grupos pequenos · Entrada 25% + 9x sem juros
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#saidas" className="btn-primary bg-gold text-navy hover:bg-gold/90 text-lg px-8 py-4 font-semibold">
              Ver todas as saídas <ArrowRight size={18} />
            </a>
            <WhatsAppButton variant="cta" label="Quero embarcar" className="text-lg px-8 py-4" />
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="section-padding bg-background">
        <div className="container-editorial">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="heading-section text-foreground mb-4">Como funciona</h2>
            <p className="text-lg text-muted-foreground font-light">
              Grupos pensados para quem quer explorar o mundo sem abrir mão do conforto de viajar em português.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DIFFERENTIALS.map((d) => {
              const Icon = d.icon;
              return (
                <div key={d.title} className="bg-card border border-border rounded-lg p-6">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                    <Icon className="text-gold" size={22} />
                  </div>
                  <h3 className="font-serif text-lg text-foreground mb-2">{d.title}</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">{d.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Saídas */}
      <section id="saidas" className="section-padding bg-muted">
        <div className="container-editorial">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="heading-section text-foreground mb-4">Próximas saídas</h2>
            <p className="text-muted-foreground font-light">
              Em ordem cronológica de embarque. Clique em qualquer roteiro para ver o dia a dia completo.
            </p>
          </div>

          {/* Filtro por ano */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            <button
              onClick={() => setYear("all")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                year === "all" ? "bg-navy text-white" : "bg-card border border-border text-foreground hover:border-navy"
              }`}
            >
              Todas ({DEPARTURES.length})
            </button>
            {years.map((y) => {
              const count = DEPARTURES.filter((d) => d.departureDate.getFullYear() === y).length;
              return (
                <button
                  key={y}
                  onClick={() => setYear(y)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    year === y ? "bg-navy text-white" : "bg-card border border-border text-foreground hover:border-navy"
                  }`}
                >
                  {y} ({count})
                </button>
              );
            })}
          </div>

          {/* Lista de saídas */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((d) => {
              const month = MONTHS_PT[d.departureDate.getMonth()];
              return (
                <Link
                  key={d.href}
                  to={d.href}
                  className="group bg-card border border-border rounded-lg overflow-hidden hover:border-gold hover:shadow-lg transition-all duration-300 flex flex-col"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={d.img}
                      alt={d.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="text-xs uppercase tracking-wider text-gold font-semibold mb-2">
                      {month} / {d.departureDate.getFullYear()}
                    </div>
                    <h3 className="font-serif text-xl text-foreground mb-1 leading-tight">{d.title}</h3>
                    <p className="text-xs text-muted-foreground mb-3">{d.tag}</p>
                    <p className="text-sm text-muted-foreground font-light mb-4 line-clamp-2">{d.subtitle}</p>
                    <div className="mt-auto pt-3 border-t border-border flex items-center justify-between">
                      <span className="text-xs text-emerald font-medium inline-flex items-center gap-1">
                        <Check size={12} /> {d.status}
                      </span>
                      <span className="text-sm text-gold font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                        Ver roteiro <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="container-editorial text-center max-w-2xl mx-auto">
          <h2 className="heading-section mb-6">Quer embarcar com a gente?</h2>
          <p className="text-xl text-white/90 mb-10 font-light">
            Fale com um consultor e reserve sua vaga com apenas 25% de entrada.
          </p>
          <WhatsAppButton variant="cta" label="Falar com um consultor" className="text-lg px-8 py-4" />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GruposGuiaBrasileiro;
