import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Compass, Users, Heart, MessageCircle } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { DestinationCard } from "@/components/DestinationCard";
import { StayCard } from "@/components/StayCard";
import { SEO } from "@/components/SEO";
import { TAGS } from "@/lib/types";
import { getFeaturedDestinations } from "@/lib/destinations";
import { getFeaturedStays } from "@/lib/stays";
import heroAmazon from "@/assets/hero-amazon.jpg";

const Index = () => {
  const featuredDestinations = getFeaturedDestinations();
  const featuredStays = getFeaturedStays();

  return (
    <div className="min-h-screen">
      <SEO
        title="Create Travel — Curadoria de viagens com propósito"
        description="Portal premium de curadoria de destinos e hospedagens. Experiências autênticas, exclusivas e com propósito — luxo discreto pela Create Travel."
        canonicalPath="/"
      />
      <Header />
      <WhatsAppButton variant="float" />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroAmazon}
            alt="Paisagem amazônica ao amanhecer"
            className="w-full h-full object-cover"
          />
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
              Eleve sua perspectiva de viagem
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto font-light">
              Curadoria de experiências autênticas, exclusivas e com propósito. 
              Luxo discreto para quem busca profundidade.
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
                description: "Conhecemos cada destino pessoalmente. Selecionamos experiências que valorizam autenticidade, ética e profundidade.",
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
