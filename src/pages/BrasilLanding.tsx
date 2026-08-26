import { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { z } from "zod";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Loader2,
  CheckCircle2,
  ArrowRight,
  CalendarDays,
  BedDouble,
  Sparkles,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { HreflangTags } from "@/components/HreflangTags";
import { FAQSection } from "@/components/FAQSection";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { openWhatsAppUrl } from "@/components/WhatsAppLeadGate";
import { CONTACT } from "@/lib/types";
import {
  BRASIL_LANDINGS,
  getBrasilLanding,
  toLandingLang,
  type LandingLang,
} from "@/lib/brasilLandings";
import { toast } from "sonner";

interface UiCopy {
  htmlLang: string;
  ctaHero: string;
  whatsapp: string;
  highlights: string;
  bestTime: string;
  whereToStay: string;
  formHeading: string;
  formSub: string;
  name: string;
  namePh: string;
  email: string;
  phone: string;
  phonePh: string;
  travelers: string;
  when: string;
  budget: string;
  notes: string;
  notesPh: string;
  select: string;
  submit: string;
  sending: string;
  successTitle: string;
  successText: string;
  again: string;
  privacy: string;
  faqHeading: string;
  otherHeading: string;
  errName: string;
  errEmail: string;
  errPhone: string;
  errRequired: string;
  travelerOptions: string[];
  whenOptions: string[];
  budgetOptions: string[];
}

const UI: Record<LandingLang, UiCopy> = {
  pt: {
    htmlLang: "pt-BR",
    ctaHero: "Criar meu roteiro",
    whatsapp: "Falar no WhatsApp",
    highlights: "O que desenhamos por lá",
    bestTime: "Melhor época",
    whereToStay: "Onde ficar",
    formHeading: "Vamos desenhar sua viagem?",
    formSub: "Preencha o briefing e nosso time responde em até 24h.",
    name: "Nome completo *",
    namePh: "Como podemos te chamar?",
    email: "E-mail *",
    phone: "WhatsApp *",
    phonePh: "(11) 99999-9999",
    travelers: "Quem viaja *",
    when: "Quando *",
    budget: "Investimento estimado *",
    notes: "Mensagem adicional",
    notesPh: "Conte o que não pode faltar nessa viagem",
    select: "Selecione",
    submit: "Enviar briefing e receber proposta",
    sending: "Enviando…",
    successTitle: "Recebemos seu briefing!",
    successText:
      "Entraremos em contato em até 24h. Se o WhatsApp não abriu, fale com a gente pelo botão flutuante.",
    again: "Enviar outro briefing",
    privacy: "Seus dados são usados apenas para o atendimento do seu roteiro.",
    faqHeading: "Perguntas frequentes",
    otherHeading: "Outros destinos do Brasil",
    errName: "Informe seu nome completo",
    errEmail: "Informe um e-mail válido",
    errPhone: "Informe um WhatsApp válido com DDD",
    errRequired: "Campo obrigatório",
    travelerOptions: ["Casal", "Família", "Sozinho(a)", "Grupo de amigos"],
    whenOptions: [
      "Próximo mês",
      "2 a 3 meses",
      "4 a 6 meses",
      "6 meses ou mais",
      "Flexível",
    ],
    budgetOptions: [
      "R$ 15.000 a R$ 30.000",
      "R$ 30.000 a R$ 50.000",
      "Acima de R$ 50.000",
      "Prefiro não informar",
    ],
  },
  en: {
    htmlLang: "en",
    ctaHero: "Design my trip",
    whatsapp: "Chat on WhatsApp",
    highlights: "What we design there",
    bestTime: "Best time to go",
    whereToStay: "Where to stay",
    formHeading: "Shall we design your trip?",
    formSub: "Send the briefing and our team replies within 24 hours.",
    name: "Full name *",
    namePh: "How should we call you?",
    email: "Email *",
    phone: "WhatsApp *",
    phonePh: "+1 555 000 0000",
    travelers: "Who travels *",
    when: "When *",
    budget: "Estimated budget *",
    notes: "Additional message",
    notesPh: "Tell us what this trip must include",
    select: "Select",
    submit: "Send briefing and get a proposal",
    sending: "Sending…",
    successTitle: "We received your briefing!",
    successText:
      "We will reply within 24 hours. If WhatsApp did not open, use the floating button.",
    again: "Send another briefing",
    privacy: "Your data is used only to plan your itinerary.",
    faqHeading: "Frequently asked questions",
    otherHeading: "Other Brazilian destinations",
    errName: "Please enter your full name",
    errEmail: "Please enter a valid email",
    errPhone: "Please enter a valid WhatsApp number",
    errRequired: "Required field",
    travelerOptions: ["Couple", "Family", "Solo", "Group of friends"],
    whenOptions: [
      "Next month",
      "2 to 3 months",
      "4 to 6 months",
      "6 months or more",
      "Flexible",
    ],
    budgetOptions: [
      "USD 3,000 to 6,000 per person",
      "USD 6,000 to 10,000 per person",
      "Above USD 10,000 per person",
      "Prefer not to say",
    ],
  },
  es: {
    htmlLang: "es",
    ctaHero: "Diseñar mi viaje",
    whatsapp: "Hablar por WhatsApp",
    highlights: "Lo que diseñamos allí",
    bestTime: "Mejor época",
    whereToStay: "Dónde alojarse",
    formHeading: "¿Diseñamos tu viaje?",
    formSub: "Envía el briefing y nuestro equipo responde en 24 horas.",
    name: "Nombre completo *",
    namePh: "¿Cómo te llamamos?",
    email: "Correo electrónico *",
    phone: "WhatsApp *",
    phonePh: "+34 600 000 000",
    travelers: "Quién viaja *",
    when: "Cuándo *",
    budget: "Inversión estimada *",
    notes: "Mensaje adicional",
    notesPh: "Cuéntanos lo que no puede faltar en este viaje",
    select: "Seleccionar",
    submit: "Enviar briefing y recibir propuesta",
    sending: "Enviando…",
    successTitle: "¡Recibimos tu briefing!",
    successText:
      "Responderemos en un plazo de 24 horas. Si WhatsApp no se abrió, usa el botón flotante.",
    again: "Enviar otro briefing",
    privacy: "Tus datos se usan solo para planificar tu itinerario.",
    faqHeading: "Preguntas frecuentes",
    otherHeading: "Otros destinos de Brasil",
    errName: "Indica tu nombre completo",
    errEmail: "Indica un correo válido",
    errPhone: "Indica un WhatsApp válido",
    errRequired: "Campo obligatorio",
    travelerOptions: ["Pareja", "Familia", "Solo/a", "Grupo de amigos"],
    whenOptions: [
      "Próximo mes",
      "2 a 3 meses",
      "4 a 6 meses",
      "6 meses o más",
      "Flexible",
    ],
    budgetOptions: [
      "USD 3.000 a 6.000 por persona",
      "USD 6.000 a 10.000 por persona",
      "Más de USD 10.000 por persona",
      "Prefiero no informar",
    ],
  },
};

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

const emptyValues = {
  name: "",
  email: "",
  phone: "",
  travelers: "",
  when: "",
  budget: "",
  notes: "",
};

type Values = typeof emptyValues;

const scrollToForm = () =>
  document.getElementById("briefing")?.scrollIntoView({ behavior: "smooth", block: "start" });

interface Props {
  /** When set, renders the multilingual variant under /:lang/plan-your-trip/:slug */
  multilingual?: boolean;
}

const BrasilLanding = ({ multilingual = false }: Props) => {
  const { slug, lang } = useParams();
  const landing = getBrasilLanding(slug);
  const uiLang: LandingLang = multilingual ? toLandingLang(lang) : "pt";
  const t = UI[uiLang];

  const [values, setValues] = useState<Values>({ ...emptyValues });
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!landing) return <Navigate to={multilingual ? "/en/incoming" : "/brasil"} replace />;

  const copy = landing.copy[uiLang];
  const basePath = `/crie-sua-viagem/brasil/${landing.slug}`;
  const canonicalPath = multilingual
    ? `/${lang}/plan-your-trip/${landing.slug}`
    : basePath;

  const schema = z.object({
    name: z.string().trim().min(2, t.errName).max(120),
    email: z.string().trim().email(t.errEmail).max(255),
    phone: z
      .string()
      .trim()
      .min(8, t.errPhone)
      .max(40)
      .refine((v) => v.replace(/\D/g, "").length >= 8, t.errPhone),
    travelers: z.string().min(1, t.errRequired),
    when: z.string().min(1, t.errRequired),
    budget: z.string().min(1, t.errRequired),
    notes: z.string().trim().max(600).optional(),
  });

  const set = (key: keyof Values, value: string) =>
    setValues((v) => ({ ...v, [key]: value }));

  const fieldError = (key: keyof Values) =>
    errors[key] ? <p className="text-sm text-destructive mt-1">{errors[key]}</p> : null;

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

    const { error } = await supabase.from("travel_leads").insert({
      name: d.name,
      email: d.email,
      phone: d.phone,
      interest: `Brasil — ${landing.name}`,
      travel_when: d.when,
      travelers: d.travelers,
      budget: d.budget,
      notes: d.notes || null,
      source_page: canonicalPath,
      context_type: `Landing Brasil (${uiLang}) — ${landing.name}`,
    });
    if (error) toast.error(t.successText);

    const message = [
      uiLang === "pt"
        ? `Olá, Create Travel! Quero um roteiro sob medida para ${landing.name}.`
        : uiLang === "es"
          ? `¡Hola, Create Travel! Quiero un itinerario a medida en ${landing.name}, Brasil.`
          : `Hello, Create Travel! I would like a tailor-made trip to ${landing.name}, Brazil.`,
      "",
      `${t.name.replace(" *", "")}: ${d.name}`,
      `${t.email.replace(" *", "")}: ${d.email}`,
      `${t.phone.replace(" *", "")}: ${d.phone}`,
      `${t.travelers.replace(" *", "")}: ${d.travelers}`,
      `${t.when.replace(" *", "")}: ${d.when}`,
      `${t.budget.replace(" *", "")}: ${d.budget}`,
      d.notes ? `${t.notes}: ${d.notes}` : "",
    ]
      .filter((l) => l !== "")
      .join("\n");

    openWhatsAppUrl(
      `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`,
    );

    setSubmitting(false);
    setSuccess(true);
    setValues({ ...emptyValues });
  };

  const others = BRASIL_LANDINGS.filter((l) => l.slug !== landing.slug).slice(0, 4);
  const otherLink = (s: string) =>
    multilingual ? `/${lang}/plan-your-trip/${s}` : `/crie-sua-viagem/brasil/${s}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${CONTACT.domain}${canonicalPath}#service`,
      name: copy.metaTitle,
      serviceType: "Tailor-made travel planning",
      provider: { "@id": `${CONTACT.domain}/#organization` },
      areaServed: { "@type": "Place", name: `${landing.name}, Brasil` },
      description: copy.metaDescription,
      inLanguage: t.htmlLang,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      mainEntity: copy.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title={copy.metaTitle}
        description={copy.metaDescription}
        canonicalPath={canonicalPath}
        keywords={copy.keywords}
        inLanguage={t.htmlLang}
        ogImage={landing.image}
        jsonLd={jsonLd}
      />
      <HreflangTags basePath={basePath} />
      <Header />

      <main>
        {/* HERO */}
        <section className="relative min-h-[78vh] flex items-center">
          <img
            src={landing.image}
            alt={landing.imageAlt}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
          <div className="container-editorial relative z-10 py-24 text-primary-foreground">
            <motion.div {...fadeUp} className="max-w-3xl space-y-6">
              <p className="uppercase tracking-[0.25em] text-xs text-primary-foreground/80">
                {copy.eyebrow}
              </p>
              <h1 className="heading-hero">{copy.title}</h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed max-w-2xl">
                {copy.subtitle}
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <button type="button" onClick={scrollToForm} className="btn-accent">
                  <span>{t.ctaHero}</span>
                  <ArrowRight size={18} />
                </button>
                <WhatsAppButton
                  variant="cta"
                  label={t.whatsapp}
                  params={{ type: "Destino", name: landing.name }}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* INTRO */}
        <section className="section-padding bg-background">
          <div className="container-editorial max-w-3xl space-y-5">
            {copy.intro.map((p) => (
              <motion.p
                key={p.slice(0, 24)}
                {...fadeUp}
                className="text-muted-foreground leading-relaxed text-lg"
              >
                {p}
              </motion.p>
            ))}
          </div>
        </section>

        {/* HIGHLIGHTS */}
        <section className="section-padding bg-muted/40">
          <div className="container-editorial space-y-10">
            <motion.h2 {...fadeUp} className="heading-section text-foreground">
              {t.highlights}
            </motion.h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {copy.highlights.map((h, i) => (
                <motion.article
                  key={h.title}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
                  className="bg-card border border-border rounded-lg p-6 space-y-3"
                >
                  <Sparkles size={20} className="text-accent" aria-hidden="true" />
                  <h3 className="heading-card text-foreground">{h.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* WHEN / WHERE */}
        <section className="section-padding bg-background">
          <div className="container-editorial grid md:grid-cols-2 gap-8">
            <motion.div
              {...fadeUp}
              className="border border-border rounded-lg p-6 space-y-3 bg-card"
            >
              <CalendarDays size={20} className="text-accent" aria-hidden="true" />
              <h2 className="heading-card text-foreground">{t.bestTime}</h2>
              <p className="text-muted-foreground leading-relaxed">{copy.bestTime}</p>
            </motion.div>
            <motion.div
              {...fadeUp}
              className="border border-border rounded-lg p-6 space-y-3 bg-card"
            >
              <BedDouble size={20} className="text-accent" aria-hidden="true" />
              <h2 className="heading-card text-foreground">{t.whereToStay}</h2>
              <p className="text-muted-foreground leading-relaxed">{copy.whereToStay}</p>
            </motion.div>
          </div>
        </section>

        {/* BRIEFING */}
        <section id="briefing" className="section-padding bg-muted/40 scroll-mt-24">
          <div className="container-editorial max-w-3xl">
            <motion.div {...fadeUp} className="space-y-3 mb-10">
              <h2 className="heading-section text-foreground">{t.formHeading}</h2>
              <p className="text-muted-foreground leading-relaxed">{t.formSub}</p>
            </motion.div>

            {success ? (
              <div className="border border-accent/40 bg-accent/5 rounded-lg p-8 space-y-4 text-center">
                <CheckCircle2 size={40} className="text-accent mx-auto" />
                <h3 className="heading-card text-foreground">{t.successTitle}</h3>
                <p className="text-muted-foreground">{t.successText}</p>
                <button type="button" onClick={() => setSuccess(false)} className="btn-outline">
                  {t.again}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="sm:col-span-2">
                    <Label htmlFor="name">{t.name}</Label>
                    <Input
                      id="name"
                      value={values.name}
                      onChange={(e) => set("name", e.target.value)}
                      placeholder={t.namePh}
                      autoComplete="name"
                    />
                    {fieldError("name")}
                  </div>
                  <div>
                    <Label htmlFor="email">{t.email}</Label>
                    <Input
                      id="email"
                      type="email"
                      value={values.email}
                      onChange={(e) => set("email", e.target.value)}
                      placeholder="you@email.com"
                      autoComplete="email"
                    />
                    {fieldError("email")}
                  </div>
                  <div>
                    <Label htmlFor="phone">{t.phone}</Label>
                    <Input
                      id="phone"
                      inputMode="tel"
                      value={values.phone}
                      onChange={(e) => set("phone", e.target.value)}
                      placeholder={t.phonePh}
                      autoComplete="tel"
                    />
                    {fieldError("phone")}
                  </div>
                  <div>
                    <Label>{t.travelers}</Label>
                    <Select
                      value={values.travelers}
                      onValueChange={(v) => set("travelers", v)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder={t.select} />
                      </SelectTrigger>
                      <SelectContent>
                        {t.travelerOptions.map((o) => (
                          <SelectItem key={o} value={o}>
                            {o}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {fieldError("travelers")}
                  </div>
                  <div>
                    <Label>{t.when}</Label>
                    <Select value={values.when} onValueChange={(v) => set("when", v)}>
                      <SelectTrigger>
                        <SelectValue placeholder={t.select} />
                      </SelectTrigger>
                      <SelectContent>
                        {t.whenOptions.map((o) => (
                          <SelectItem key={o} value={o}>
                            {o}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {fieldError("when")}
                  </div>
                  <div className="sm:col-span-2">
                    <Label>{t.budget}</Label>
                    <Select value={values.budget} onValueChange={(v) => set("budget", v)}>
                      <SelectTrigger>
                        <SelectValue placeholder={t.select} />
                      </SelectTrigger>
                      <SelectContent>
                        {t.budgetOptions.map((o) => (
                          <SelectItem key={o} value={o}>
                            {o}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {fieldError("budget")}
                  </div>
                </div>

                <div>
                  <Label htmlFor="notes">{t.notes}</Label>
                  <Textarea
                    id="notes"
                    rows={4}
                    value={values.notes}
                    onChange={(e) => set("notes", e.target.value)}
                    placeholder={t.notesPh}
                  />
                </div>

                <button type="submit" disabled={submitting} className="btn-accent w-full sm:w-auto">
                  {submitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>{t.sending}</span>
                    </>
                  ) : (
                    <>
                      <span>{t.submit}</span>
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>
                <p className="text-xs text-muted-foreground">{t.privacy}</p>
              </form>
            )}
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-background">
          <div className="container-editorial max-w-3xl">
            <FAQSection faqs={copy.faqs} />
          </div>
        </section>

        {/* OTHER DESTINATIONS */}
        <section className="section-padding bg-muted/40">
          <div className="container-editorial space-y-8">
            <h2 className="heading-section text-foreground">{t.otherHeading}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  to={otherLink(o.slug)}
                  className="group rounded-lg overflow-hidden border border-border bg-card block"
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={o.image}
                      alt={o.imageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 space-y-2">
                    <h3 className="heading-card text-foreground">{o.name}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {o.copy[uiLang].subtitle}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm text-accent">
                      <MessageCircle size={15} />
                      {t.ctaHero}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton variant="float" params={{ type: "Destino", name: landing.name }} />
    </div>
  );
};

export default BrasilLanding;
