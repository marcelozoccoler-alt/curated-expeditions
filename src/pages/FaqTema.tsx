import { Link, useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  faqContinentTopics,
  faqTagTopics,
  faqTopicMeta,
  faqTopicPath,
  getFaqTopic,
  PRE_CONTATO,
} from "@/lib/faqHub";
import { CONTACT } from "@/lib/types";
import NotFound from "./NotFound";

const DOMAIN = CONTACT.domain.replace(/\/$/, "");

const FaqTema = () => {
  const { kind, slug } = useParams();
  const topic = getFaqTopic(kind, slug);

  if (!topic) return <NotFound />;

  const meta = faqTopicMeta(topic);
  const path = faqTopicPath(topic);
  const kindLabel = topic.kind === "continente" ? "Continente" : "Experiência";
  const siblings = (topic.kind === "continente" ? faqContinentTopics : faqTagTopics)
    .filter((t) => t.slug !== topic.slug)
    .slice(0, 12);

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "pt-BR",
    mainEntity: topic.subgroups.flatMap((g) =>
      g.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    ),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: `${DOMAIN}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Perguntas frequentes",
        item: `${DOMAIN}/perguntas-frequentes`,
      },
      { "@type": "ListItem", position: 3, name: topic.label, item: `${DOMAIN}${path}` },
    ],
  };

  const speakableLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: meta.title,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".ai-summary"],
    },
    url: `${DOMAIN}${path}`,
  };

  return (
    <div className="min-h-screen">
      <SEO
        title={meta.title}
        description={meta.description}
        canonicalPath={path}
        keywords={meta.keywords}
        jsonLd={[faqLd, breadcrumbLd, speakableLd]}
      />
      <Header />

      <main className="container-page py-8">
        <Breadcrumbs
          items={[
            { label: "Perguntas frequentes", href: "/perguntas-frequentes" },
            { label: topic.label },
          ]}
        />

        <header className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {kindLabel} · {topic.count} respostas
          </p>
          <h1 className="heading-hero text-foreground">
            {topic.kind === "continente"
              ? `Perguntas frequentes: ${topic.label}`
              : `${topic.label}: perguntas frequentes`}
          </h1>
          <div className="ai-summary">
            <p className="text-lg leading-relaxed text-muted-foreground">{meta.intro}</p>
          </div>
        </header>

        {topic.subgroups.length > 1 && (
          <nav aria-label="Índice das perguntas" className="mt-10 flex flex-wrap gap-3">
            {topic.subgroups.map((g, i) => (
              <a
                key={g.title}
                href={`#grupo-${i}`}
                className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                {g.title}
              </a>
            ))}
          </nav>
        )}

        <div className="mt-12 space-y-14">
          {topic.subgroups.map((group, i) => (
            <section key={group.title} id={`grupo-${i}`} className="scroll-mt-24 space-y-6">
              <h2 className="heading-section text-foreground">{group.title}</h2>
              <div className="space-y-6">
                {group.items.map((item) => (
                  <article key={item.q} className="rounded-lg border border-border p-6">
                    <h3 className="mb-3 text-lg font-medium text-foreground">{item.q}</h3>
                    <p className="leading-relaxed text-muted-foreground">{item.a}</p>
                    <Link
                      to={`/destinos/${item.sourceSlug}`}
                      className="mt-4 inline-block text-sm text-primary hover:underline"
                    >
                      Ver roteiro e destaques de {item.sourceName} →
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-16 space-y-6">
          <h2 className="heading-section text-foreground">Antes de falar com a Create</h2>
          <p className="max-w-3xl text-muted-foreground">
            Quatro definições simples aceleram muito a primeira proposta — e
            deixam a conversa focada no que realmente importa na sua viagem.
          </p>
          <ol className="grid gap-4 sm:grid-cols-2">
            {PRE_CONTATO.map((step, i) => (
              <li key={step.title} className="rounded-lg border border-border p-6">
                <p className="text-sm text-gold">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 text-lg font-medium text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {topic.destinations.length > 0 && (
          <section className="mt-16 space-y-5">
            <h2 className="heading-section text-foreground">
              Destinos relacionados a {topic.label}
            </h2>
            <ul className="flex flex-wrap gap-3">
              {topic.destinations.slice(0, 24).map((d) => (
                <li key={d.slug}>
                  <Link
                    to={`/destinos/${d.slug}`}
                    className="inline-block rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    {d.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {siblings.length > 0 && (
          <section className="mt-16 space-y-5">
            <h2 className="heading-section text-foreground">
              {topic.kind === "continente"
                ? "Perguntas de outros continentes"
                : "Perguntas de outras experiências"}
            </h2>
            <ul className="flex flex-wrap gap-3">
              {siblings.map((t) => (
                <li key={t.slug}>
                  <Link
                    to={faqTopicPath(t)}
                    className="inline-block rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    {t.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mt-16 rounded-lg border border-border p-8 text-center">
          <h2 className="heading-section text-foreground">
            Sua pergunta é sobre a sua viagem?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Fale direto com um travel designer da Create Travel — atendimento
            humano, sem robô e sem call center.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <WhatsAppButton
              variant="cta"
              params={{ type: "Geral", name: topic.label }}
              label="Falar com um travel designer"
            />
            <Link to="/perguntas-frequentes" className="btn-outline inline-flex items-center">
              Ver todas as perguntas
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FaqTema;
