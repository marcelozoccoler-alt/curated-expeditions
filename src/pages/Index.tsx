import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Compass,
  Users,
  Heart,
  MessageCircle,
  Sparkles,
  PartyPopper,
  Briefcase,
  Flower2,
  GraduationCap,
  Gem,
  Mountain,
} from "lucide-react";
import { generateWhatsAppLink } from "@/lib/types";
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
import heroAmazonWebp from "@/assets/hero-amazon.webp";

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
          <picture>
            <source srcSet={heroAmazonWebp} type="image/webp" />
            <img
              src={heroAmazon}
              alt="Paisagem amazônica ao amanhecer"
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

      {/* Promo: Grupo Marrocos 2026 */}
      <section className="bg-gold/10 border-y border-gold/30">
        <div className="container-editorial py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center md:text-left">
            <span className="px-3 py-1 rounded-full bg-gold text-navy text-xs font-semibold uppercase tracking-wider">
              Saída promocional
            </span>
            <p className="text-foreground">
              <strong className="font-serif">Grupo Marrocos 2026</strong> — saída 18/11, grupo exclusivo e pequeno.{" "}
              <span className="text-muted-foreground">A partir de R$ 18.295/pessoa.</span>
            </p>
          </div>
          <Link
            to="/grupos/marrocos-2026"
            className="btn-accent flex items-center gap-2 whitespace-nowrap"
          >
            Saiba mais <ArrowRight size={18} />
          </Link>
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

      {/* Crie seu grupo */}
      <section className="section-padding bg-muted">
        <div className="container-editorial">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <p className="text-caption text-gold mb-4">Curadoria de grupos</p>
            <h2 className="heading-section text-foreground mb-5">
              Crie seu grupo, viaje à sua maneira
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              Família, amigos, casamento, retiro espiritual ou incentivo corporativo —
              desenhamos a viagem do seu grupo com a mesma curadoria autoral, do briefing
              ao último brinde. Logística, hospedagens privativas, experiências exclusivas
              e um anfitrião Create Travel ao seu lado.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: Users,
                title: "Família & multigeracional",
                description:
                  "Roteiros que equilibram aventura, conforto e ritmo para avós, pais e crianças — com quartos conectados, atividades sob medida e momentos memoráveis para todos.",
                whatsappName: "Grupo de família — viagem multigeracional",
              },
              {
                icon: Compass,
                title: "Entre amigos",
                description:
                  "Expedições autorais para grupos fechados: safári, Patagônia, Marrocos, Lençóis. Itinerário, hospedagens icônicas e experiências privativas pensadas para o grupo.",
                whatsappName: "Grupo de amigos — expedição privativa",
              },
              {
                icon: Heart,
                title: "Casamento & lua de mel em grupo",
                description:
                  "Destination wedding, elopement ou celebração íntima com os convidados mais próximos. Cuidamos da hospedagem do grupo, traslados e experiências para todos.",
                whatsappName: "Casamento ou celebração em destino",
              },
              {
                icon: PartyPopper,
                title: "Aniversários & comemorações",
                description:
                  "60 anos, bodas, formatura, despedida. Uma viagem-marco com jantares privativos, brindes ao pôr do sol e momentos que ficam para sempre na memória do grupo.",
                whatsappName: "Comemoração especial em grupo",
              },
              {
                icon: Briefcase,
                title: "Incentivo & corporativo",
                description:
                  "Viagens de incentivo, off-sites e retiros de liderança. Logística impecável, hospedagens com identidade e experiências que aproximam o time de verdade.",
                whatsappName: "Viagem de incentivo corporativo",
              },
              {
                icon: Flower2,
                title: "Retiros de meditação & bem-estar",
                description:
                  "Yoga, silêncio, breathwork, ayurveda. Locais de força — Bali, Açores, Chapada — com facilitadores de confiança e hospedagem que sustenta a prática.",
                whatsappName: "Retiro de meditação e bem-estar",
              },
              {
                icon: Sparkles,
                title: "Espiritualidade & propósito",
                description:
                  "Caminhos xamânicos na Amazônia, peregrinações em Israel, mosteiros no Butão, deserto marroquino. Jornadas internas com guias e mestres locais.",
                whatsappName: "Jornada espiritual em grupo",
              },
              {
                icon: Mountain,
                title: "Aventura & expedição",
                description:
                  "Trekking no Himalaia, kayak no Mamanguá, escalada na Patagônia, mergulho em Noronha. Grupos pequenos com guias técnicos e estrutura premium.",
                whatsappName: "Expedição de aventura em grupo",
              },
              {
                icon: GraduationCap,
                title: "Educacional & cultural",
                description:
                  "Imersões para escolas, alumni, clubes de arte, gastronomia ou vinhos. Visitas privadas, especialistas locais e roteiro com curadoria temática.",
                whatsappName: "Viagem educacional ou cultural em grupo",
              },
            ].map((group, index) => (
              <motion.a
                key={group.title}
                href={generateWhatsAppLink({
                  type: "Roteiro",
                  name: group.whatsappName,
                })}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 6) * 0.05 }}
                className="group block p-7 rounded-xl border border-border bg-card hover:border-gold hover:shadow-card transition-all h-full"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center mb-5">
                  <group.icon size={22} className="text-white" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3 group-hover:text-gold transition-colors">
                  {group.title}
                </h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed mb-5">
                  {group.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-gold group-hover:gap-3 transition-all">
                  Falar com a curadoria
                  <ArrowRight size={16} />
                </span>
              </motion.a>
            ))}
          </div>

          <div className="mt-14 max-w-4xl mx-auto bg-card border border-border rounded-xl p-8 md:p-10 text-center">
            <Gem size={28} className="text-gold mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-3">
              Expertise Create Travel em grupos
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Mais de uma década desenhando viagens privativas para grupos de 6 a 60
              pessoas. Briefing dedicado, contratos transparentes, fornecedores testados
              pessoalmente e suporte 24/7 durante a viagem.
            </p>
            <WhatsAppButton
              variant="cta"
              label="Começar a curadoria do meu grupo"
              params={{ type: "Roteiro", name: "Curadoria de viagem em grupo" }}
            />
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
