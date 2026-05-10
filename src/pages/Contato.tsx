import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, MapPin, Instagram, Send } from "lucide-react";
import { z } from "zod";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SEO } from "@/components/SEO";
import { CONTACT, generateWhatsAppLink } from "@/lib/types";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  message: z.string().trim().min(10, "Conte um pouco mais sobre sua viagem").max(1000),
  period: z.string().trim().max(60).optional(),
});

const channels = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: CONTACT.whatsapp,
    href: generateWhatsAppLink({ type: "Geral" }),
    helper: "Resposta em até 1 dia útil",
    accent: "text-emerald",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    helper: "Para briefings detalhados",
    accent: "text-navy",
  },
  {
    icon: MapPin,
    label: "Atelier",
    value: CONTACT.address,
    href: `https://maps.google.com/?q=${encodeURIComponent(CONTACT.address)}`,
    helper: "São Paulo · Visitas com agendamento",
    accent: "text-gold",
  },
];

const Contato = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "", period: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      const first = parsed.error.errors[0]?.message ?? "Verifique os campos";
      toast.error(first);
      return;
    }
    setSubmitting(true);
    const { name, email, message, period } = parsed.data;
    const text = [
      `Olá, Create Travel! Sou ${name}.`,
      message,
      period ? `Período pretendido: ${period}.` : "",
      `Contato: ${email}.`,
    ]
      .filter(Boolean)
      .join(" ");
    const link = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(link, "_blank", "noopener,noreferrer");
    toast.success("Abrindo WhatsApp para enviar sua mensagem.");
    setSubmitting(false);
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Create Travel",
    url: CONTACT.domain,
    email: CONTACT.email,
    telephone: CONTACT.whatsapp,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua José Libero, 80",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: CONTACT.whatsapp,
        email: CONTACT.email,
        availableLanguage: ["Portuguese", "English"],
      },
    ],
  };

  return (
    <>
      <SEO
        title="Contato | Create Travel — Roteiros sob medida"
        description="Fale com a Create Travel para criar um roteiro de luxo discreto sob medida. WhatsApp, e-mail e atelier em São Paulo."
        canonicalPath="/contato"
        jsonLd={jsonLd}
      />
      <Header />

      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_20%,white,transparent_60%)]" />
          <div className="container-editorial relative">
            <Breadcrumbs items={[{ label: "Contato" }]} />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mt-6"
            >
              <span className="inline-block px-4 py-1 rounded-full bg-white/15 text-primary-foreground/90 text-xs tracking-[0.2em] uppercase backdrop-blur-sm">
                Vamos conversar
              </span>
              <h1 className="heading-display text-primary-foreground mt-6">
                Cada viagem começa com uma conversa.
              </h1>
              <p className="text-lg text-primary-foreground/85 font-light mt-6 leading-relaxed">
                Conte-nos o que move você: um destino, uma data marcante, uma
                pausa para pensar. Respondemos com curadoria, ritmo e silêncio
                quando preciso.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Channels */}
        <section className="py-16 -mt-12 relative z-10">
          <div className="container-editorial">
            <div className="grid md:grid-cols-3 gap-6">
              {channels.map((c, i) => (
                <motion.a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="group bg-card border border-border rounded-lg p-7 shadow-sm hover:shadow-elegant transition-all"
                >
                  <c.icon className={`${c.accent} mb-4`} size={26} />
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {c.label}
                  </p>
                  <p className="font-serif text-lg text-foreground mt-2 group-hover:text-gold transition-colors">
                    {c.value}
                  </p>
                  <p className="text-sm text-muted-foreground mt-3">{c.helper}</p>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Form + Editorial */}
        <section className="py-20 bg-muted/30">
          <div className="container-editorial grid lg:grid-cols-5 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <span className="text-xs tracking-[0.2em] uppercase text-gold">
                Briefing
              </span>
              <h2 className="heading-section mt-3">
                Um roteiro nasce de boas perguntas.
              </h2>
              <p className="text-muted-foreground mt-5 leading-relaxed">
                Não temos pacotes prontos. Cada itinerário é desenhado a partir
                do que você sente, do tempo disponível e do tipo de memória
                que quer levar para casa.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-gold">—</span>
                  Resposta em até 1 dia útil.
                </li>
                <li className="flex gap-3">
                  <span className="text-gold">—</span>
                  Atendimento em português, inglês e espanhol.
                </li>
                <li className="flex gap-3">
                  <span className="text-gold">—</span>
                  Ao enviar, sua mensagem abre direto no WhatsApp.
                </li>
              </ul>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3 bg-card border border-border rounded-lg p-8 shadow-sm space-y-5"
            >
              <div className="grid md:grid-cols-2 gap-5">
                <label className="block">
                  <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Nome
                  </span>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-2 w-full bg-transparent border-b border-border focus:border-gold outline-none py-2 font-serif text-lg"
                  />
                </label>
                <label className="block">
                  <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    E-mail
                  </span>
                  <input
                    type="email"
                    required
                    maxLength={255}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-2 w-full bg-transparent border-b border-border focus:border-gold outline-none py-2 font-serif text-lg"
                  />
                </label>
              </div>
              <label className="block">
                <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Período pretendido (opcional)
                </span>
                <input
                  type="text"
                  maxLength={60}
                  placeholder="Ex.: setembro/2026, lua de mel em outubro"
                  value={form.period}
                  onChange={(e) => setForm({ ...form, period: e.target.value })}
                  className="mt-2 w-full bg-transparent border-b border-border focus:border-gold outline-none py-2 font-serif text-lg placeholder:text-muted-foreground/60"
                />
              </label>
              <label className="block">
                <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Mensagem
                </span>
                <textarea
                  required
                  maxLength={1000}
                  rows={5}
                  placeholder="Conte sobre quem viaja, o que busca e o que já experimentou."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-2 w-full bg-transparent border-b border-border focus:border-gold outline-none py-2 font-serif text-base placeholder:text-muted-foreground/60 resize-none"
                />
              </label>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                <p className="text-xs text-muted-foreground">
                  Ao enviar, você concorda em ser contatado pela Create Travel.
                </p>
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-accent inline-flex items-center gap-2 disabled:opacity-60"
                >
                  <Send size={16} />
                  Enviar via WhatsApp
                </button>
              </div>
            </motion.form>
          </div>
        </section>

        {/* Closing strip */}
        <section className="py-16">
          <div className="container-editorial text-center max-w-2xl">
            <Instagram className="mx-auto text-gold" size={22} />
            <p className="font-serif text-2xl mt-4">
              Acompanhe nossa curadoria em movimento.
            </p>
            <a
              href="https://www.instagram.com/createtravel.tur"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sm tracking-[0.18em] uppercase text-foreground border-b border-gold hover:text-gold transition-colors"
            >
              @createtravel.tur
            </a>
          </div>
        </section>
      </main>

      <WhatsAppButton params={{ type: "Geral" }} />
      <Footer />
    </>
  );
};

export default Contato;
