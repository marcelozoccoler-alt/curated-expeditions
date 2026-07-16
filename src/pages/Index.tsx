import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Compass,
  Users,
  Heart,
  Gem,
  Calendar,
  MapPin,
  Plane,
} from "lucide-react";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { DestinationCard } from "@/components/DestinationCard";
import { StayCard } from "@/components/StayCard";
import { SEO } from "@/components/SEO";
import { TAGS } from "@/lib/types";
import { getFeaturedDestinations } from "@/lib/destinations";
import { getFeaturedStays } from "@/lib/stays";
import { diaryPosts } from "@/lib/diaryPosts";
import { getDiaryCover } from "@/lib/diaryImages";

import { DEPARTURES } from "@/pages/EmbarqueComACreate";
import heroAmazon from "@/assets/hero-amazon.jpg";
import heroAmazonWebp from "@/assets/hero-amazon.webp";

const MONTHS_SHORT_PT = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];


const Index = () => {
  const featuredDestinations = getFeaturedDestinations();
  const featuredStays = getFeaturedStays();
  const latestDiary = diaryPosts.slice(0, 3);


  return (
    <div className="min-h-screen">
      <SEO
        title="Create Travel — Agência de Viagens Personalizadas em SP"
        description="Agência boutique de viagens com curadoria autoral. Roteiros personalizados para África, Europa, Ásia, Oceania e Brasil. Grupos com guia brasileiro em 2026 e 2027. Atendimento em 5 idiomas."
        canonicalPath="/"
        keywords="agência de viagens personalizada, roteiro sob medida, viagem sob medida, grupo com guia brasileiro, agência boutique São Paulo, travel designer, curadoria de viagens"
      />
      <Header />
      <WhatsAppButton variant="float" />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <picture>
            <source srcSet={heroAmazonWebp} type="image/webp" />
            <img
              src={heroAmazon}
              alt="Paisagem amazônica ao amanhecer"
              width={1920}
              height={1088}
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
          <div className="absolute inset-0 hero-overlay" />
        </div>

        <div className="container-editorial relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="gold-line mx-auto mb-8" />
            <h1 className="heading-hero text-white mb-6">
              Agência de Viagens Personalizadas
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-2xl mx-auto font-light">
              Roteiros sob medida com curadoria autoral. Experiências autênticas, exclusivas e com propósito — para quem busca profundidade.
            </p>
            <p className="text-sm md:text-base text-white/70 mb-10 max-w-2xl mx-auto font-light italic">
              Há 11 anos desenhando viagens do zero para África, Europa, Ásia, Oceania e Brasil.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <WhatsAppButton
                variant="cta"
                label="Criar roteiro sob medida"
                className="text-lg px-8 py-4"
              />
              <Link
                to="/destinos"
                className="btn-outline border-white text-white hover:bg-white hover:text-navy text-lg px-8 py-4"
              >
                Explorar destinos
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/80 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Featured: Grupos com Guia Brasileiro — cardápio cronológico em destaque */}
      <section className="section-padding bg-gradient-to-b from-navy to-navy/95 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-gold blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-emerald blur-3xl" />
        </div>
        <div className="container-editorial relative z-10">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 border border-gold/40 text-gold text-xs font-semibold uppercase tracking-[0.3em] mb-6">
              <Plane size={14} /> Portfólio em destaque
            </div>
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-5 leading-tight">
              Grupos com <span className="text-gold italic">Guia Brasileiro</span>
            </h2>
            <p className="text-lg md:text-xl text-white/85 font-light mb-3">
              {DEPARTURES.length} saídas internacionais 2026 · 2027 com coordenador acompanhante embarcando do Brasil. Tudo em português, do check-in em Guarulhos ao último brinde.
            </p>
            <p className="text-sm text-gold/90 uppercase tracking-[0.2em]">
              Em ordem cronológica de embarque
            </p>
          </div>

          {/* Mini-cardápio: 4 próximas saídas */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {DEPARTURES.slice(0, 4).map((d, i) => {
              const day = String(d.departureDate.getDate()).padStart(2, "0");
              const month = MONTHS_SHORT_PT[d.departureDate.getMonth()];
              const year = String(d.departureDate.getFullYear()).slice(-2);
              return (
                <motion.div
                  key={d.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    to={d.href}
                    className="group block bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-gold hover:bg-white/10 transition-all h-full"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={d.img}
                        alt={d.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                      <div className="absolute top-3 right-3 bg-white/95 text-navy rounded-lg px-2.5 py-1.5 text-center shadow-elegant min-w-[54px]">
                        <div className="text-[9px] uppercase tracking-wider text-gold font-semibold">
                          {month}/{year}
                        </div>
                        <div className="font-serif text-xl font-bold leading-none">{day}</div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="text-[10px] uppercase tracking-wider text-gold font-semibold mb-1.5">
                        {d.tag}
                      </div>
                      <h3 className="font-serif text-lg font-semibold text-white mb-1 group-hover:text-gold transition-colors leading-snug">
                        {d.title}
                      </h3>
                      <p className="text-xs text-white/60 line-clamp-2">{d.subtitle}</p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              to="/embarque-com-a-create"
              className="btn-accent inline-flex items-center gap-2 text-base px-8 py-4"
            >
              Ver cardápio completo de saídas
              <ArrowRight size={18} />
            </Link>
            <p className="text-xs text-white/50 mt-4 uppercase tracking-[0.2em]">
              Filtro por mês · Ordem cronológica · Entrada 25% + 9x sem juros
            </p>
          </div>
        </div>
      </section>


      {/* How We Work */}
      <section className="section-padding bg-muted">
        <div className="container-editorial">
          <div className="text-center mb-16">
            <p className="text-caption text-gold mb-4">Como trabalhamos</p>
            <h2 className="heading-section text-foreground">
              Curadoria para viagens com propósito
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Compass,
                title: "Curadoria profunda",
                description: "Conhecemos cada destino. Selecionamos experiências que valorizam autenticidade, ética e profundidade.",
              },
              {
                icon: Users,
                title: "Roteiro personalizado",
                description: "Cada viagem é única. Ouvimos suas preferências e criamos um roteiro sob medida, respeitando seu ritmo.",
              },
              {
                icon: Heart,
                title: "Suporte contínuo",
                description: "Estamos com você antes, durante e depois. Contato direto, respostas rápidas e cuidado genuíno.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-8 rounded-xl shadow-card text-center"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-hero flex items-center justify-center mx-auto mb-6">
                  <item.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="section-padding">
        <div className="container-editorial">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-caption text-gold mb-4">Inspire-se</p>
              <h2 className="heading-section text-foreground">Destinos em destaque</h2>
            </div>
            <Link
              to="/destinos"
              className="hidden md:flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-medium"
            >
              Ver todos os destinos
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredDestinations.slice(0, 6).map((destination, index) => (
              <DestinationCard key={destination.id} destination={destination} index={index} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link to="/destinos" className="btn-outline">
              Ver todos os destinos
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Tags */}
      <section className="section-padding bg-navy text-white">
        <div className="container-editorial">
          <div className="text-center mb-12">
            <p className="text-caption text-gold mb-4">Experiências</p>
            <h2 className="heading-section">Escolha por tipo de viagem</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {TAGS.map((tag) => (
              <Link
                key={tag.id}
                to={`/experiencias/${tag.id}`}
                className="px-5 py-3 rounded-full border border-white/30 text-white/90 hover:bg-white hover:text-navy transition-all duration-300 font-medium"
              >
                {tag.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Stays */}
      <section className="section-padding">
        <div className="container-editorial">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-caption text-gold mb-4">Curadoria exclusiva</p>
              <h2 className="heading-section text-foreground">Hospedagens selecionadas</h2>
            </div>
            <Link
              to="/hospedagens"
              className="hidden md:flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-medium"
            >
              Ver todas as hospedagens
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredStays.map((stay, index) => (
              <StayCard key={stay.slug} stay={stay} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Crie seu grupo — teaser */}
      <section className="section-padding bg-muted">
        <div className="container-editorial">
          <div className="max-w-4xl mx-auto bg-card border border-border rounded-xl p-8 md:p-12 text-center">
            <Gem size={32} className="text-gold mx-auto mb-5" />
            <p className="text-caption text-gold mb-3">Curadoria de grupos</p>
            <h2 className="heading-section text-foreground mb-4">
              Crie seu grupo, viaje à sua maneira
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto font-light">
              Família, amigos, casamento, incentivo corporativo ou retiro
              espiritual — desenhamos viagens privativas com curadoria autoral
              e suporte 24/7.
            </p>
            <Link to="/crie-seu-grupo" className="btn-accent inline-flex items-center gap-2">
              Conhecer a curadoria de grupos
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* O que fazemos — nossos serviços */}
      <section className="section-padding bg-background">
        <div className="container-editorial">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="heading-section text-foreground mb-4">O que fazemos</h2>
            <p className="text-lg text-muted-foreground font-light">
              Quatro caminhos para viajar com a Create Travel — todos com curadoria autoral e um travel designer dedicado.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                to: "/roteiro-sob-medida",
                icon: Compass,
                title: "Roteiros Personalizados",
                desc: "Cada viagem é desenhada do zero, ouvindo suas preferências, seu ritmo e seu estilo. Sem pacotes prontos.",
              },
              {
                to: "/grupos-guia-brasileiro",
                icon: Users,
                title: "Grupos com Guia Brasileiro",
                desc: `${DEPARTURES.length} saídas internacionais em 2026 e 2027 com coordenador embarcando do Brasil. Tudo em português.`,
              },
              {
                to: "/lua-de-mel-personalizada",
                icon: Heart,
                title: "Lua de Mel Personalizada",
                desc: "Roteiros românticos sob medida para casais que querem viver o primeiro capítulo a dois com exclusividade.",
              },
              {
                to: "/brasil",
                icon: Gem,
                title: "Brasil para o Mundo",
                desc: "Atendimento em 5 idiomas para viajantes que chegam curiosos e saem transformados.",
              },
            ].map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.to}
                  to={s.to}
                  className="group block bg-card border border-border rounded-lg p-8 hover:border-gold hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                    <Icon className="text-gold" size={22} />
                  </div>
                  <h3 className="font-serif text-xl text-foreground mb-3 leading-snug">{s.title}</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">{s.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm text-gold font-medium group-hover:gap-2 transition-all">
                    Saber mais <ArrowRight size={14} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Últimos do Diário */}
      <section className="section-padding bg-muted">
        <div className="container-editorial">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-caption text-gold mb-4">Diário Create Travel</p>
              <h2 className="heading-section text-foreground">Últimas leituras</h2>
            </div>
            <Link
              to="/diario"
              className="hidden md:flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-medium"
            >
              Ver todo o Diário
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {latestDiary.map((post) => {
              const cover = getDiaryCover(post);
              return (
                <Link
                  key={post.slug}
                  to={`/diario/${post.slug}`}
                  className="group block bg-card border border-border rounded-xl overflow-hidden hover:border-gold hover:shadow-card transition-all"
                >
                  {cover && (
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={cover}
                        alt={post.h1}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="text-xs font-semibold text-gold tracking-wider mb-3">
                      {post.category.toUpperCase()} · {post.readingMinutes} MIN
                    </div>
                    <h3 className="text-lg font-serif font-semibold text-foreground group-hover:text-gold transition-colors leading-snug">
                      {post.h1}
                    </h3>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link to="/diario" className="inline-flex items-center gap-2 text-gold font-medium">
              Ver todo o Diário <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>



      {/* Final CTA */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="container-editorial text-center">
          <h2 className="heading-section mb-6">
            Pronto para criar sua próxima aventura?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Conte-nos seus sonhos de viagem. Juntos, vamos transformá-los em uma experiência inesquecível.
          </p>
          <WhatsAppButton
            variant="cta"
            label="Fale com um consultor"
            className="text-lg px-10 py-5"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
