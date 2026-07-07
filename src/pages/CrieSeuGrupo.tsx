import { motion } from "framer-motion";
import {
  ArrowRight,
  Users,
  Compass,
  Heart,
  PartyPopper,
  Briefcase,
  Flower2,
  Sparkles,
  Mountain,
  GraduationCap,
  Gem,
  Plane,
  ShieldCheck,
  CalendarCheck,
  HeartHandshake,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SEO } from "@/components/SEO";
import { generateWhatsAppLink } from "@/lib/types";
import heroImg from "@/assets/grupo-marrocos-2026.jpg";

const GROUPS = [
  {
    icon: Plane,
    title: "Saídas em grupo com guia do Brasil",
    description:
      "Para quem quer viajar acompanhado: grupos pequenos com guia Create Travel saindo do Brasil junto com você, do embarque ao retorno. Mais segurança, conexões verdadeiras e zero preocupação com logística.",
    whatsappName: "Saída em grupo com guia do Brasil",
  },
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
    title: "Casamento em destino",
    description:
      "Destination wedding, elopement ou celebração íntima com os convidados mais próximos. Cuidamos da hospedagem do grupo, traslados e experiências para todos.",
    whatsappName: "Casamento em destino",
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
];

const PROCESS = [
  {
    icon: HeartHandshake,
    title: "Briefing dedicado",
    description:
      "Entendemos o perfil do grupo, propósito da viagem, ritmo, restrições e o que torna esta data única.",
  },
  {
    icon: Compass,
    title: "Curadoria autoral",
    description:
      "Desenhamos destinos, hospedagens e experiências sob medida — testadas pessoalmente pela nossa equipe.",
  },
  {
    icon: CalendarCheck,
    title: "Operação impecável",
    description:
      "Cuidamos de logística, traslados, contratos, pagamentos e comunicação com cada participante.",
  },
  {
    icon: ShieldCheck,
    title: "Suporte 24/7 no destino",
    description:
      "Anfitrião Create Travel disponível antes, durante e depois — para que o grupo só precise viver a viagem.",
  },
];

const CrieSeuGrupo = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Crie seu grupo — Viagens privativas sob medida | Create"
        description="Família, amigos, casamento, incentivo ou expedição: viagens privativas em grupo com curadoria autoral e logística impecável."
        canonicalPath="/crie-seu-grupo"
      />
      <Header />
      <WhatsAppButton variant="float" />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[520px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Grupo de viajantes em destino exclusivo"
            className="w-full h-full object-cover"
            loading="eager"
            fetchpriority="high"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="container-editorial relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="max-w-3xl mx-auto"
          >
            <div className="gold-line mx-auto mb-8" />
            <p className="text-caption text-gold mb-4">Curadoria de grupos</p>
            <h1 className="heading-hero text-white mb-6">
              Crie seu grupo, viaje à sua maneira
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light">
              Família, amigos, casamento, incentivo corporativo ou retiro
              espiritual — desenhamos viagens privativas com curadoria autoral,
              do primeiro briefing ao último brinde.
            </p>
            <WhatsAppButton
              variant="cta"
              label="Começar a curadoria do meu grupo"
              params={{ type: "Roteiro", name: "Curadoria de viagem em grupo" }}
              className="text-lg px-8 py-4"
            />
          </motion.div>
        </div>
      </section>

      <div className="container-editorial pt-8">
        <Breadcrumbs
          items={[
            { label: "Início", href: "/" },
            { label: "Crie seu grupo" },
          ]}
        />
      </div>


      {/* Tipos de grupo */}
      <section className="section-padding">
        <div className="container-editorial">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <p className="text-caption text-gold mb-4">Para qual grupo?</p>
            <h2 className="heading-section text-foreground mb-5">
              Nove perfis. Uma curadoria à altura.
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              Cada grupo tem um ritmo, um propósito e uma história. Escolha o
              ponto de partida — nós construímos a viagem inteira a partir dele.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {GROUPS.map((group, index) => (
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
        </div>
      </section>

      {/* Como trabalhamos */}
      <section className="section-padding bg-muted">
        <div className="container-editorial">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <p className="text-caption text-gold mb-4">Nosso método</p>
            <h2 className="heading-section text-foreground mb-5">
              Como desenhamos a viagem do seu grupo
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              Um processo claro, transparente e atento — para que a única
              surpresa seja o quanto a viagem supera a expectativa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card p-7 rounded-xl shadow-card"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center mb-5">
                  <step.icon size={22} className="text-white" />
                </div>
                <div className="text-xs font-semibold text-gold tracking-wider mb-2">
                  ETAPA 0{i + 1}
                </div>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-4xl mx-auto bg-card border border-border rounded-xl p-8 md:p-12 text-center">
            <Gem size={32} className="text-gold mx-auto mb-5" />
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
              Expertise Create Travel em grupos
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto font-light">
              Mais de uma década desenhando viagens privativas para grupos de 6
              a 60 pessoas. Briefing dedicado, contratos transparentes,
              fornecedores testados pessoalmente e suporte 24/7 durante a viagem.
            </p>
            <WhatsAppButton
              variant="cta"
              label="Começar a curadoria do meu grupo"
              params={{ type: "Roteiro", name: "Curadoria de viagem em grupo" }}
              className="text-lg px-8 py-4"
            />
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="container-editorial text-center">
          <h2 className="heading-section mb-6">
            Pronto para reunir o seu grupo?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Conte-nos sobre o grupo, o propósito e o sonho. Voltamos com uma
            proposta autoral em poucos dias.
          </p>
          <WhatsAppButton
            variant="cta"
            label="Falar com um consultor"
            params={{ type: "Roteiro", name: "Curadoria de viagem em grupo" }}
            className="text-lg px-10 py-5"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CrieSeuGrupo;
