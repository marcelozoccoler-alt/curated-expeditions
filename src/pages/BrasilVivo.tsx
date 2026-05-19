import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Leaf,
  Footprints,
  HandHeart,
  Microscope,
  ExternalLink,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SEO } from "@/components/SEO";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { CONTACT } from "@/lib/types";
import { BIOMES, type BiomeId } from "@/lib/biomes";
import {
  ENDANGERED_SPECIES,
  CONSERVATION_PROJECTS,
  STATUS_COLOR,
} from "@/lib/conservation";

import heroImg from "@/assets/incoming-biomes-hero.jpg";
import amazoniaImg from "@/assets/destinations/brasil-amazonia-anavilhanas.jpg";
import cerradoImg from "@/assets/destinations/brasil-chapada-dos-veadeiros.jpg";
import mataAtlanticaImg from "@/assets/destinations/brasil-rio-de-janeiro.jpg";
import caatingaImg from "@/assets/destinations/brasil-chapada-diamantina.jpg";
import pantanalImg from "@/assets/destinations/brasil-pantanal-norte.jpg";
import pampaImg from "@/assets/states/rio-grande-do-sul.jpg";
import costaImg from "@/assets/destinations/brasil-fernando-de-noronha.jpg";

const DOMAIN = CONTACT.domain.replace(/\/$/, "");

const BIOME_IMAGE: Record<BiomeId, string> = {
  amazonia: amazoniaImg,
  cerrado: cerradoImg,
  "mata-atlantica": mataAtlanticaImg,
  caatinga: caatingaImg,
  pantanal: pantanalImg,
  pampa: pampaImg,
  costa: costaImg,
};

const philosophy = [
  {
    icon: Leaf,
    title: "Experiência autêntica",
    text: "Pessoas reais, território vivo. Guias-naturalistas, comunidades ribeirinhas, mestres de saber e cozinheiras que carregam o sabor do lugar.",
  },
  {
    icon: Footprints,
    title: "Baixo impacto",
    text: "Grupos pequenos, operadores locais, ritmo do bioma. Recusamos lugares e práticas que ferem o ambiente ou comunidades.",
  },
  {
    icon: HandHeart,
    title: "Conservação ativa",
    text: "Toda viagem que desenhamos prioriza pousadas, reservas e operadores que dedicam parte da receita à proteção da fauna e flora.",
  },
  {
    icon: Microscope,
    title: "Conhecimento em campo",
    text: "Biólogos, cientistas e moradores que leem a paisagem com você — para que a viagem deixe entendimento, não só foto.",
  },
];

const faq = [
  {
    q: "O que é turismo de conservação?",
    a: "É a forma de viajar que transforma a presença do viajante em recurso para a proteção do território: hospedagens que mantêm reservas privadas, guias-naturalistas que dependem da fauna em pé, comunidades que escolhem preservar porque preservar gera renda. Na Create Travel é a base de todo roteiro pelo Brasil.",
  },
  {
    q: "Quais são os biomas brasileiros e quais posso visitar?",
    a: "O Brasil tem seis biomas terrestres — Amazônia, Cerrado, Mata Atlântica, Caatinga, Pantanal e Pampa — além da extensa costa marinha. Todos podem ser visitados com curadoria responsável, e cada um pede uma janela ideal de clima, infraestrutura e logística que desenhamos junto com você.",
  },
  {
    q: "Como sei se uma viagem é realmente sustentável?",
    a: "Procure três marcas: operadores locais com vínculo real à comunidade, grupos pequenos, e clareza sobre para onde vai o dinheiro. Roteiros da Create Travel listam o porquê de cada hospedagem e parceiro, sempre com transparência sobre práticas de conservação.",
  },
  {
    q: "Posso ver onça-pintada de forma ética?",
    a: "Sim — o Pantanal Norte (Porto Jofre, Transpantaneira) tem a maior densidade conhecida de onças do mundo e protocolos consolidados de observação fluvial respeitosa, conduzidos por pousadas que monitoram populações em parceria com pesquisadores.",
  },
  {
    q: "Que projetos de preservação a Create Travel apoia indiretamente?",
    a: "Nossos roteiros priorizam fazendas, pousadas e operadores parceiros do Instituto Onça-Pintada, Projeto Tamar, Instituto Arara Azul, AMLD (mico-leão-dourado), Instituto Mamirauá, ICAS, SOS Mata Atlântica e Fundação Grupo Boticário, entre outros — instituições reconhecidas e idôneas de conservação no Brasil.",
  },
  {
    q: "É possível combinar luxo e baixo impacto no Brasil?",
    a: "Totalmente. Existe uma nova geração de lodges e pousadas-boutique brasileiras — Amazônia, Pantanal, Mata Atlântica, Chapada Diamantina — que entregam conforto refinado com energia solar, água tratada na fonte, gastronomia regional e equipes locais. Curamos exatamente esses lugares.",
  },
];

const BrasilVivo = () => {
  const conservationMessage = `Olá, Create Travel! Quero criar um roteiro pelo Brasil com foco em natureza, fauna e turismo de conservação. Pode me contar sobre as melhores experiências?`;
  const conservationWhatsApp = `https://wa.me/${
    CONTACT.whatsappNumber
  }?text=${encodeURIComponent(conservationMessage)}`;

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const pageLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Brasil Vivo — Biomas, fauna, flora e conservação",
    url: `${DOMAIN}/brasil-vivo`,
    description:
      "Conheça os 6 biomas do Brasil, espécies ameaçadas e projetos de conservação reais — e a filosofia da Create Travel de viajar com experiência autêntica e baixo impacto.",
    isPartOf: { "@type": "WebSite", name: "Create Travel", url: `${DOMAIN}/` },
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Brasil Vivo — Biomas, fauna e turismo de conservação | Create Travel"
        description="Amazônia, Pantanal, Cerrado, Mata Atlântica, Caatinga, Pampa e Costa: roteiros sob medida que protegem a natureza brasileira. Conheça espécies ameaçadas e projetos sérios de conservação."
        canonicalPath="/brasil-vivo"
        keywords="biomas do Brasil, turismo de conservação, viagem sustentável Brasil, onça-pintada Pantanal, mico-leão-dourado, projeto Tamar, Instituto Mamirauá, Amazônia, Pantanal, ecoturismo Brasil, viagem responsável, fauna brasileira, espécies ameaçadas"
        jsonLd={[pageLd, faqLd]}
        ogImage={heroImg}
      />
      <Header />
      <WhatsAppButton variant="float" />

      {/* Hero */}
      <section className="relative pt-32 pb-20 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt="Floresta brasileira ao nascer do sol"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy/85" />
        </div>
        <div className="container-editorial">
          <Breadcrumbs items={[{ label: "Brasil Vivo" }]} />
          <div className="max-w-3xl mt-4">
            <div className="gold-line mb-6" />
            <p className="text-sm tracking-[0.25em] uppercase text-gold mb-4">
              Biomas · Fauna · Conservação
            </p>
            <h1 className="heading-hero mb-6">
              Brasil Vivo — viajar é também preservar
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 font-light leading-relaxed mb-8">
              Seis biomas, uma costa imensa e algumas das criaturas mais raras
              do planeta. A Create Travel desenha viagens autênticas pelo
              Brasil natural — com guias-naturalistas, pousadas comprometidas e
              roteiros que apoiam, na prática, quem protege a floresta.
            </p>
            <WhatsAppButton
              variant="cta"
              label="Criar um roteiro de natureza"
            />
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding">
        <div className="container-editorial grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="text-sm tracking-[0.2em] uppercase text-gold font-medium mb-4">
              Nossa filosofia
            </p>
            <h2 className="heading-section mb-6">
              Experiência autêntica.
              <br />
              Território preservado.
            </h2>
            <p className="text-foreground/80 leading-relaxed text-lg">
              Viajamos para conhecer o lugar como ele é — e voltamos sabendo
              que ele continua ali, melhor do que encontramos. Essa é a
              equação que orienta toda viagem Create Travel pelo Brasil.
            </p>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {philosophy.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-card border border-border rounded-lg p-6"
              >
                <div className="w-11 h-11 rounded-full bg-gold/10 text-gold flex items-center justify-center mb-4">
                  <p.icon size={20} />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-2">
                  {p.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {p.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Biomes */}
      <section className="section-padding bg-card border-y border-border">
        <div className="container-editorial">
          <div className="max-w-2xl mb-12">
            <p className="text-sm tracking-[0.2em] uppercase text-gold font-medium mb-4">
              Os biomas do Brasil
            </p>
            <h2 className="heading-section mb-4">
              Seis mundos numa única viagem
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              De rios voadores na Amazônia a canyons no extremo sul, cada bioma
              tem seu calendário, sua fauna icônica e seus guardiões. Entender
              isso é o primeiro passo para uma viagem com sentido.
            </p>
          </div>

          <div className="space-y-12">
            {BIOMES.map((b, idx) => (
              <motion.article
                key={b.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  idx % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <img
                    src={BIOME_IMAGE[b.id]}
                    alt={`Bioma ${b.name.pt}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div
                    className="absolute top-4 left-4 px-3 py-1 rounded-sm text-xs uppercase tracking-wider text-white"
                    style={{ backgroundColor: b.color }}
                  >
                    {b.name.pt}
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                    {b.name.pt}
                  </h3>
                  <p className="text-foreground/85 leading-relaxed mb-5">
                    {b.description.pt}
                  </p>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span
                        className="block text-[10px] uppercase tracking-[0.2em] mb-1"
                        style={{ color: b.color }}
                      >
                        Fauna
                      </span>
                      <p className="text-foreground/80 leading-relaxed">
                        {b.fauna.pt}
                      </p>
                    </div>
                    <div>
                      <span
                        className="block text-[10px] uppercase tracking-[0.2em] mb-1"
                        style={{ color: b.color }}
                      >
                        Flora
                      </span>
                      <p className="text-foreground/80 leading-relaxed">
                        {b.flora.pt}
                      </p>
                    </div>
                    <div className="border-l-2 pl-3" style={{ borderColor: b.color }}>
                      <span
                        className="block text-[10px] uppercase tracking-[0.2em] mb-1"
                        style={{ color: b.color }}
                      >
                        Belezas cênicas
                      </span>
                      <p className="text-foreground leading-relaxed">{b.wow.pt}</p>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Endangered species */}
      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-2xl mb-12">
            <p className="text-sm tracking-[0.2em] uppercase text-gold font-medium mb-4">
              Espécies que protegemos vendo
            </p>
            <h2 className="heading-section mb-4">
              Encontros raros, com responsabilidade
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              Cada uma destas espécies carrega a história do seu bioma. Vê-las
              em liberdade só é possível porque alguém, em silêncio, dedicou a
              vida a protegê-las. Damos os caminhos éticos para esse encontro.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ENDANGERED_SPECIES.map((s) => (
              <motion.article
                key={s.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="border border-border rounded-lg p-5 flex flex-col bg-card"
              >
                <span
                  className="self-start text-[10px] uppercase tracking-[0.15em] px-2 py-1 rounded-sm text-white mb-3"
                  style={{ backgroundColor: STATUS_COLOR[s.status] }}
                >
                  {s.status}
                </span>
                <h3 className="font-serif text-lg text-foreground leading-tight">
                  {s.commonName}
                </h3>
                <p className="text-xs italic text-muted-foreground mb-3">
                  {s.scientificName}
                </p>
                <p className="text-sm text-foreground/80 leading-relaxed mb-3">
                  {s.whyItMatters}
                </p>
                <div className="mt-auto pt-3 border-t border-border/60">
                  <span className="flex items-center gap-1 text-[10px] uppercase tracking-[0.15em] text-gold mb-1">
                    <MapPin size={10} />
                    Onde ver com ética
                  </span>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {s.whereToSee}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Conservation projects */}
      <section className="section-padding bg-card border-y border-border">
        <div className="container-editorial">
          <div className="max-w-2xl mb-12">
            <p className="text-sm tracking-[0.2em] uppercase text-gold font-medium mb-4">
              Projetos idôneos de conservação
            </p>
            <h2 className="heading-section mb-4">
              Quem cuida do Brasil de verdade
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              São organizações reconhecidas, com décadas de trabalho científico
              e comunitário. Não substituem doações diretas — mas a viagem que
              você faz pode apoiar a rede de operadores e pousadas que
              sustentam o trabalho delas em campo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {CONSERVATION_PROJECTS.map((p) => (
              <motion.article
                key={p.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="border border-border rounded-lg p-6 bg-background flex flex-col"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gold/10 text-gold flex items-center justify-center shrink-0">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-foreground leading-tight">
                      {p.name}
                    </h3>
                    <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mt-1">
                      {p.focus}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-foreground/85 leading-relaxed mb-4">
                  {p.description}
                </p>
                <div className="border-l-2 border-gold pl-3 mb-4">
                  <span className="block text-[10px] uppercase tracking-[0.15em] text-gold mb-1">
                    Como sua viagem apoia
                  </span>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {p.travelerLink}
                  </p>
                </div>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-1 text-sm text-gold hover:text-gold/80 transition-colors"
                >
                  Conhecer o projeto
                  <ExternalLink size={14} />
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* How your trip preserves */}
      <section className="section-padding">
        <div className="container-editorial grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-gold font-medium mb-4">
              Como sua viagem preserva
            </p>
            <h2 className="heading-section mb-6">
              O ciclo simples do turismo que protege
            </h2>
            <ol className="space-y-5">
              {[
                {
                  n: "01",
                  t: "Você viaja com curadoria",
                  d: "Roteiro pensado para o ritmo do bioma, sem aglomeração e sem extrair valor do território.",
                },
                {
                  n: "02",
                  t: "Operadores locais são contratados",
                  d: "Guias-naturalistas, barqueiros, cozinheiras e pousadas-família recebem direto pela sua presença.",
                },
                {
                  n: "03",
                  t: "Renda fica na comunidade",
                  d: "Famílias que dependem da floresta em pé têm motivo concreto para mantê-la em pé.",
                },
                {
                  n: "04",
                  t: "Conservação se sustenta",
                  d: "Reservas privadas, pesquisa de fauna e fiscalização comunitária seguem funcionando — porque dão renda.",
                },
              ].map((s) => (
                <li key={s.n} className="flex gap-4">
                  <span className="font-serif text-2xl text-gold w-10 shrink-0">
                    {s.n}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg text-foreground mb-1">
                      {s.t}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {s.d}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="bg-gradient-hero text-primary-foreground p-10 rounded-lg">
            <h3 className="font-serif text-2xl mb-4">
              Quero viajar protegendo a natureza brasileira
            </h3>
            <p className="text-primary-foreground/85 mb-6 leading-relaxed">
              Conte o que move você — observar onças no Pantanal, dormir em
              lodge ribeirinho na Amazônia, caminhar na Chapada com geólogo,
              ver tartarugas desovando no litoral. Desenhamos o roteiro
              autêntico, com baixo impacto, para você.
            </p>
            <a
              href={conservationWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              Falar com um curador
            </a>
            <p className="text-xs text-primary-foreground/60 mt-4">
              Resposta em horário comercial · Sem compromisso
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-card border-y border-border">
        <div className="container-editorial max-w-3xl">
          <div className="mb-10">
            <p className="text-sm tracking-[0.2em] uppercase text-gold font-medium mb-4">
              Perguntas frequentes
            </p>
            <h2 className="heading-section">
              Turismo de conservação no Brasil
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faq.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-serif text-lg">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 flex flex-col sm:flex-row items-start gap-4">
            <Link
              to="/destinos/brasil"
              className="text-sm text-gold hover:text-gold/80 underline underline-offset-4"
            >
              Ver destinos pelo Brasil
            </Link>
            <Link
              to="/sobre"
              className="text-sm text-gold hover:text-gold/80 underline underline-offset-4"
            >
              Conheça a Create Travel
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BrasilVivo;
