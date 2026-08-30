import { useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Palette,
  Sparkles,
  ShieldCheck,
  Award,
  LifeBuoy,
  Users,
  Leaf,
  PenLine,
  Loader2,
  CheckCircle2,
  ArrowRight,
  Quote,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { FAQSection } from "@/components/FAQSection";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { openWhatsAppUrl } from "@/components/WhatsAppLeadGate";
import { CONTACT, FAQ } from "@/lib/types";
import { testimonials } from "@/lib/testimonials";
import { toast } from "sonner";

import heroSerengeti from "@/assets/hero-serengeti.jpg";
import imgAfrica from "@/assets/regions/serengeti.jpg";
import imgAsia from "@/assets/regions/japao.jpg";
import imgEuropa from "@/assets/regions/italia.jpg";
import imgBrasil from "@/assets/regions/amazonia.jpg";

const STEPS = [
  {
    icon: MessageCircle,
    title: "Conte seus sonhos",
    desc: "Um briefing pensado para entender seu ritmo, seu estilo e o que você não quer numa viagem.",
  },
  {
    icon: Palette,
    title: "Receba sua curadoria",
    desc: "Roteiro desenhado à mão por travel designers, dia a dia, com hotéis e experiências escolhidos a dedo.",
  },
  {
    icon: Sparkles,
    title: "Viaje transformado",
    desc: "Experiências autênticas com suporte antes, durante e depois — WhatsApp direto com quem desenhou sua viagem.",
  },
];

const DIFFERENTIALS = [
  { icon: Award, title: "11 anos desenhando viagens", desc: "Mais de uma década de roteiros autorais em quatro continentes." },
  { icon: ShieldCheck, title: "Registrada no Cadastur", desc: `Agência formalizada junto ao Ministério do Turismo — Cadastur ${CONTACT.cadastur}.` },
  { icon: PenLine, title: "Roteiros 100% autorais", desc: "Nada de pacote de prateleira: cada itinerário nasce do seu perfil." },
  { icon: LifeBuoy, title: "Suporte 24/7", desc: "Acompanhamento antes, durante e depois da viagem, no seu fuso." },
  { icon: Users, title: "Grupos com guia brasileiro", desc: "Saídas em grupo com acompanhamento em português." },
  { icon: Leaf, title: "Turismo de conservação", desc: "Parceiros e lodges comprometidos com comunidades e natureza." },
];

const DESTINATION_CARDS = [
  {
    name: "África",
    image: imgAfrica,
    desc: "Safáris no Serengeti, deserto da Namíbia, Cidade do Cabo e ilhas do Índico.",
    to: "/destinos",
  },
  {
    name: "Ásia",
    image: imgAsia,
    desc: "Japão das estações, Butão, Vietnã, Uzbequistão e a Índia dos palácios.",
    to: "/destinos",
  },
  {
    name: "Europa",
    image: imgEuropa,
    desc: "Sul da Itália, aldeias de Portugal, fiordes noruegueses e Bálcãs autênticos.",
    to: "/destinos",
  },
  {
    name: "Brasil",
    image: imgBrasil,
    desc: "Amazônia, Pantanal, Lençóis Maranhenses, Bonito e a Bahia menos óbvia.",
    to: "/brasil",
  },
];

const TRIP_TYPES = ["Casal", "Família", "Solo", "Grupo de amigos"];
const INTERESTS = ["África", "Ásia", "Europa", "Brasil", "Ainda não sei, quero ajuda"];
const PERIODS = ["Próximo mês", "2 a 3 meses", "4 a 6 meses", "6 meses ou mais", "Flexível"];
const BUDGETS = [
  "Até R$ 15.000",
  "R$ 15.000 a R$ 30.000",
  "R$ 30.000 a R$ 50.000",
  "Acima de R$ 50.000",
  "Prefiro não informar",
];
const STYLES = ["Aventura", "Cultural", "Luxo", "Natureza", "Gastronomia", "Bem-estar"];

const FAQS: FAQ[] = [
  {
    q: "Qual a antecedência mínima para contratar um roteiro sob medida?",
    a: "O ideal são de 4 a 8 meses, sobretudo para safáris, Japão em época de cerejeiras e alta temporada europeia — os melhores lodges e hotéis boutique têm poucos quartos. Ainda assim, atendemos viagens com 30 a 45 dias de antecedência sempre que a disponibilidade permite.",
  },
  {
    q: "Vocês emitem passagens aéreas?",
    a: "Sim. Trabalhamos com as principais companhias e emitimos a parte aérea junto com o roteiro terrestre, incluindo escolha de assentos, conexões confortáveis e classes superiores quando faz sentido para o trajeto.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "A parte terrestre é habitualmente parcelada com entrada de 25% e o saldo em até 9 vezes, conforme a antecedência da viagem. A parte aérea segue as condições da companhia emissora, que variam de acordo com a tarifa escolhida.",
  },
  {
    q: "Posso viajar em grupo com guia brasileiro?",
    a: "Sim. Temos saídas confirmadas em grupo com guia brasileiro acompanhando desde São Paulo, além de grupos com guia local falando português. As datas e roteiros estão publicados na seção de grupos do site.",
  },
  {
    q: "Vocês atendem estrangeiros que querem conhecer o Brasil?",
    a: "Sim. Nossa operação de incoming recebe viajantes em dez idiomas, com roteiros de Amazônia, Pantanal, Lençóis Maranhenses, Rio de Janeiro, Bonito, Foz do Iguaçu e Bahia.",
  },
];

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome completo").max(120),
  email: z.string().trim().email("Informe um e-mail válido").max(255),
  phone: z
    .string()
    .trim()
    .min(8, "Informe um WhatsApp válido com DDD")
    .max(40)
    .refine((v) => v.replace(/\D/g, "").length >= 10, "Informe um WhatsApp válido com DDD"),
  tripType: z.string().min(1, "Selecione o tipo de viagem"),
  interest: z.string().min(1, "Selecione o destino de interesse"),
  period: z.string().min(1, "Selecione o período da viagem"),
  budget: z.string().min(1, "Selecione uma faixa de investimento"),
  notes: z.string().trim().max(600).optional(),
});

type Values = z.infer<typeof schema>;

const emptyValues: Values = {
  name: "",
  email: "",
  phone: "",
  tripType: "",
  interest: "",
  period: "",
  budget: "",
  notes: "",
};

const maskPhone = (raw: string) => {
  const d = raw.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : "";
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
};

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

const scrollToForm = () => {
  document.getElementById("briefing")?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const CrieSuaViagem = () => {
  const [values, setValues] = useState<Values>({ ...emptyValues });
  const [styles, setStyles] = useState<string[]>([]);
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const set = (key: keyof Values, value: string) =>
    setValues((v) => ({ ...v, [key]: value }));

  const toggleStyle = (style: string) =>
    setStyles((s) => (s.includes(style) ? s.filter((x) => x !== style) : [...s, style]));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof Values, string>> = {};
      parsed.error.issues.forEach((iss) => {
        const key = iss.path[0] as keyof Values;
        if (!fieldErrors[key]) fieldErrors[key] = iss.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);

    const d = parsed.data;
    const styleLine = styles.length ? styles.join(", ") : "Sem preferência declarada";
    const notes = [
      styles.length ? `Estilo de viagem: ${styleLine}` : "",
      d.notes ? `Mensagem: ${d.notes}` : "",
    ]
      .filter(Boolean)
      .join(" | ");

    const { error } = await supabase.from("travel_leads").insert({
      name: d.name,
      email: d.email,
      phone: d.phone,
      interest: d.interest,
      travel_when: d.period,
      travelers: d.tripType,
      budget: d.budget,
      notes: notes || null,
      source_page: "/crie-sua-viagem",
      context_type: "Briefing inteligente — landing de conversão",
    });

    if (error) {
      toast.error("Não conseguimos registrar seu briefing. Vamos seguir pelo WhatsApp.");
    }

    const message = [
      "Olá, Create Travel! Acabei de enviar meu briefing pelo site.",
      "",
      `Nome: ${d.name}`,
      `E-mail: ${d.email}`,
      `WhatsApp: ${d.phone}`,
      `Tipo de viagem: ${d.tripType}`,
      `Destino de interesse: ${d.interest}`,
      `Período: ${d.period}`,
      `Investimento estimado: ${d.budget}`,
      `Estilo de viagem: ${styleLine}`,
      d.notes ? `Mensagem: ${d.notes}` : "",
    ]
      .filter((l) => l !== "")
      .join("\n");

    openWhatsAppUrl(
      `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`,
    );

    setSubmitting(false);
    setSuccess(true);
    setValues({ ...emptyValues });
    setStyles([]);
  };

  const featured = testimonials.slice(0, 3);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${CONTACT.domain}/crie-sua-viagem#service`,
      name: "Roteiro de viagem sob medida — Create Travel",
      provider: { "@id": `${CONTACT.domain}/#organization` },
      areaServed: ["África", "Ásia", "Europa", "Brasil"],
      serviceType: "Planejamento de viagem personalizado",
      description:
        "Briefing consultivo e roteiro autoral desenhado por travel designers, com curadoria de hotéis, experiências e suporte antes, durante e depois da viagem.",
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  const fieldError = (key: keyof Values) =>
    errors[key] ? <p className="text-sm text-destructive mt-1">{errors[key]}</p> : null;

  return (
    <div className="min-h-screen">
      <SEO
        title="Roteiro de viagem sob medida | Create Travel"
        description="Briefing consultivo e roteiro autoral desenhado por travel designers para África, Ásia, Europa e Brasil. Curadoria exclusiva, grupos com guia brasileiro e suporte 24/7."
        canonicalPath="/crie-sua-viagem"
        keywords="roteiro de viagem sob medida, viagem personalizada, agência boutique de viagens, travel designer, grupos com guia brasileiro, viagem de luxo autoral"
        jsonLd={jsonLd}
      />
      <Header />

      <main>
        {/* HERO */}
        <section className="relative min-h-[86vh] flex items-center">
          <img
            src={heroSerengeti}
            alt="Planície africana ao amanhecer, com acácias recortadas contra o céu"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/55 to-foreground/80" />
          <div className="container-editorial relative z-10 py-24 text-primary-foreground">
            <motion.div {...fadeUp} className="max-w-3xl space-y-6">
              <p className="uppercase tracking-[0.25em] text-xs text-primary-foreground/80">
                Agência boutique · 11 anos · Cadastur
              </p>
              <h1 className="heading-hero">
                Sua próxima viagem merece ser desenhada sob medida
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed max-w-2xl">
                Roteiros autorais com curadoria exclusiva para quem busca profundidade,
                não apenas destinos.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <button type="button" onClick={scrollToForm} className="btn-accent">
                  <span>Criar meu roteiro</span>
                  <ArrowRight size={18} />
                </button>
                <WhatsAppButton
                  variant="cta"
                  label="Falar no WhatsApp"
                  params={{ type: "Roteiro", name: "Roteiro sob medida" }}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section className="section-padding bg-background">
          <div className="container-editorial space-y-12">
            <motion.div {...fadeUp} className="max-w-2xl space-y-3">
              <h2 className="heading-section text-foreground">Como funciona</h2>
              <p className="text-muted-foreground leading-relaxed">
                Três passos, nenhum formulário engessado: uma conversa real que se
                transforma em roteiro.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              {STEPS.map((step, i) => (
                <motion.div
                  key={step.title}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="space-y-4"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <step.icon size={22} />
                  </div>
                  <p className="text-xs uppercase tracking-[0.2em] text-accent">
                    Passo {i + 1}
                  </p>
                  <h3 className="heading-card text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section className="section-padding bg-muted/40">
          <div className="container-editorial space-y-12">
            <motion.h2 {...fadeUp} className="heading-section text-foreground">
              Nossos diferenciais
            </motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {DIFFERENTIALS.map((item, i) => (
                <motion.div
                  key={item.title}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                  className="bg-card border border-border rounded-lg p-6 space-y-3"
                >
                  <item.icon size={22} className="text-accent" />
                  <h3 className="font-medium text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* DESTINOS */}
        <section className="section-padding bg-background">
          <div className="container-editorial space-y-12">
            <motion.div {...fadeUp} className="max-w-2xl space-y-3">
              <h2 className="heading-section text-foreground">Destinos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Quatro frentes de curadoria, cada uma com roteiros desenhados a partir
                de quem viaja — nunca de um catálogo.
              </p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {DESTINATION_CARDS.map((card, i) => (
                <motion.article
                  key={card.name}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                  className="rounded-lg overflow-hidden border border-border bg-card flex flex-col"
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={card.image}
                      alt={`Paisagem representativa de roteiros da Create Travel na ${card.name}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <div className="p-5 space-y-3 flex-1 flex flex-col">
                    <h3 className="heading-card text-foreground">{card.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {card.desc}
                    </p>
                    <div className="space-y-2 pt-1">
                      <a
                        href={`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
                          `Olá, Create Travel! Quero um roteiro sob medida na ${card.name}.`,
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-accent hover:underline"
                      >
                        <MessageCircle size={16} />
                        Falar sobre {card.name}
                      </a>
                      <Link
                        to={card.to}
                        className="block text-sm text-muted-foreground hover:text-foreground"
                      >
                        Ver destinos
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section className="section-padding bg-muted/40">
          <div className="container-editorial space-y-12">
            <motion.div {...fadeUp} className="max-w-2xl space-y-3">
              <h2 className="heading-section text-foreground">
                Quem já viajou com a gente
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Relatos reais de viajantes que voltaram — e voltaram a viajar com a
                Create Travel.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {featured.map((t, i) => (
                <motion.figure
                  key={t.slug}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                  className="bg-card border border-border rounded-lg p-6 space-y-4 flex flex-col"
                >
                  <Quote size={26} className="text-accent" aria-hidden="true" />
                  <blockquote className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {t.quote.split(". ").slice(0, 3).join(". ")}.
                  </blockquote>
                  <figcaption className="flex items-center gap-3 pt-2 border-t border-border">
                    
                    <div className="w-11 h-11 rounded-full overflow-hidden bg-muted flex-shrink-0">
                      {t.photos[0] && (
                        <img
                          src={t.photos[0].src}
                          alt={`${t.author}, viajante da Create Travel`}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-foreground text-sm">{t.author}</p>
                      <p className="text-xs text-muted-foreground truncate">
                        {t.destination}
                      </p>
                    </div>
                  </figcaption>
                </motion.figure>
              ))}
            </div>
            <div>
              <Link
                to="/depoimentos"
                className="inline-flex items-center gap-2 text-accent hover:underline"
              >
                Ver todas as histórias de viagem
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* BRIEFING */}
        <section id="briefing" className="section-padding bg-background scroll-mt-24">
          <div className="container-editorial max-w-3xl">
            <motion.div {...fadeUp} className="space-y-3 mb-10">
              <h2 className="heading-section text-foreground">
                Vamos criar sua viagem dos sonhos?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Preencha o briefing abaixo e nosso time entrará em contato em até 24h.
              </p>
            </motion.div>

            {success ? (
              <div className="border border-accent/40 bg-accent/5 rounded-lg p-8 space-y-4 text-center">
                <CheckCircle2 size={40} className="text-accent mx-auto" />
                <h3 className="heading-card text-foreground">
                  Recebemos seu briefing!
                </h3>
                <p className="text-muted-foreground">
                  Entraremos em contato em até 24h. Se o WhatsApp não abriu
                  automaticamente, fale com a gente pelo botão flutuante.
                </p>
                <button
                  type="button"
                  onClick={() => setSuccess(false)}
                  className="btn-outline"
                >
                  Enviar outro briefing
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="sm:col-span-2">
                    <Label htmlFor="name">Nome completo *</Label>
                    <Input
                      id="name"
                      value={values.name}
                      onChange={(e) => set("name", e.target.value)}
                      placeholder="Como podemos te chamar?"
                      autoComplete="name"
                    />
                    {fieldError("name")}
                  </div>
                  <div>
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={values.email}
                      onChange={(e) => set("email", e.target.value)}
                      placeholder="voce@email.com"
                      autoComplete="email"
                    />
                    {fieldError("email")}
                  </div>
                  <div>
                    <Label htmlFor="phone">WhatsApp *</Label>
                    <Input
                      id="phone"
                      inputMode="tel"
                      value={values.phone}
                      onChange={(e) => set("phone", maskPhone(e.target.value))}
                      placeholder="(11) 99999-9999"
                      autoComplete="tel"
                    />
                    {fieldError("phone")}
                  </div>

                  <div>
                    <Label>Tipo de viagem *</Label>
                    <Select value={values.tripType} onValueChange={(v) => set("tripType", v)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        {TRIP_TYPES.map((o) => (
                          <SelectItem key={o} value={o}>
                            {o}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {fieldError("tripType")}
                  </div>
                  <div>
                    <Label>Destino de interesse *</Label>
                    <Select value={values.interest} onValueChange={(v) => set("interest", v)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        {INTERESTS.map((o) => (
                          <SelectItem key={o} value={o}>
                            {o}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {fieldError("interest")}
                  </div>
                  <div>
                    <Label>Período da viagem *</Label>
                    <Select value={values.period} onValueChange={(v) => set("period", v)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        {PERIODS.map((o) => (
                          <SelectItem key={o} value={o}>
                            {o}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {fieldError("period")}
                  </div>
                  <div>
                    <Label>Investimento estimado *</Label>
                    <Select value={values.budget} onValueChange={(v) => set("budget", v)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        {BUDGETS.map((o) => (
                          <SelectItem key={o} value={o}>
                            {o}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {fieldError("budget")}
                  </div>
                </div>

                <fieldset className="space-y-3">
                  <legend className="text-sm font-medium text-foreground">
                    Estilo de viagem
                  </legend>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {STYLES.map((style) => (
                      <label
                        key={style}
                        className="flex items-center gap-3 border border-border rounded-md px-4 py-3 cursor-pointer hover:bg-muted/50 transition-colors"
                      >
                        <Checkbox
                          checked={styles.includes(style)}
                          onCheckedChange={() => toggleStyle(style)}
                        />
                        <span className="text-sm text-foreground">{style}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div>
                  <Label htmlFor="notes">Mensagem adicional</Label>
                  <Textarea
                    id="notes"
                    rows={4}
                    value={values.notes}
                    onChange={(e) => set("notes", e.target.value)}
                    placeholder="Conte-nos mais sobre sua viagem dos sonhos"
                  />
                </div>

                <button type="submit" disabled={submitting} className="btn-accent w-full sm:w-auto">
                  {submitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Enviando…</span>
                    </>
                  ) : (
                    <>
                      <span>Enviar briefing e receber proposta</span>
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>
                <p className="text-xs text-muted-foreground">
                  Seus dados são usados apenas para o atendimento do seu roteiro.
                </p>
              </form>
            )}
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-muted/40">
          <div className="container-editorial max-w-3xl">
            <FAQSection faqs={FAQS} />
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton variant="float" params={{ type: "Roteiro", name: "Roteiro sob medida" }} />
    </div>
  );
};

export default CrieSuaViagem;
