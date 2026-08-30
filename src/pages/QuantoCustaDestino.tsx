import { Link, useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { GeoAnswerBlock } from "@/components/GeoAnswerBlock";
import {
  getPrecoDestino,
  precoDestinos,
  precoPath,
  PRECO_PAGAMENTO,
} from "@/lib/precoDestinos";
import { CONTACT } from "@/lib/types";
import NotFound from "./NotFound";

const DOMAIN = CONTACT.domain.replace(/\/$/, "");

const QuantoCustaDestino = () => {
  const { slug } = useParams();
  const destino = getPrecoDestino(slug);

  if (!destino) return <NotFound />;

  const path = precoPath(destino);
  const others = precoDestinos.filter((d) => d.slug !== destino.slug);

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "pt-BR",
    mainEntity: destino.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: `${DOMAIN}/` },
      { "@type": "ListItem", position: 2, name: "Quanto custa viajar", item: `${DOMAIN}/quanto-custa` },
      { "@type": "ListItem", position: 3, name: destino.nomeCurto, item: `${DOMAIN}${path}` },
    ],
  };

  const speakableLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: destino.title,
    url: `${DOMAIN}${path}`,
    inLanguage: "pt-BR",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".ai-summary"],
    },
  };

  return (
    <div className="min-h-screen">
      <SEO
        title={destino.title}
        description={destino.description}
        canonicalPath={path}
        keywords={destino.keywords}
        jsonLd={[faqLd, breadcrumbLd, speakableLd]}
      />
      <Header />

      <main className="container-editorial pt-24 pb-24">
        <Breadcrumbs
          items={[
            { label: "Quanto custa viajar", href: "/quanto-custa" },
            { label: destino.nomeCurto },
          ]}
        />

        <header className="max-w-3xl space-y-4 mb-10">
          <p className="text-caption text-gold">Transparência de preço</p>
          <h1 className="heading-hero">Quanto custa viajar para {destino.nome}</h1>
        </header>

        <div className="max-w-3xl mb-14">
          <GeoAnswerBlock
            summary={destino.respostaCurta}
            bullets={destino.bullets}
            facts={[
              { label: "Melhor época", value: destino.melhorEpoca.split(".")[0] },
              { label: "Duração ideal", value: destino.duracao.split(".")[0] },
              { label: "Quando reservar", value: destino.quandoComprar.split(".")[0] },
              { label: "Base dos valores", value: "Por pessoa em apto duplo" },
            ]}
            ariaLabel={`Resumo de custos para ${destino.nomeCurto}`}
          />
        </div>

        <section className="mb-14 max-w-3xl">
          <h2 className="heading-section mb-6">Faixas de investimento</h2>
          <ul className="space-y-4">
            {destino.faixas.map((f) => (
              <li key={f.label} className="rounded-xl border border-border/60 p-5">
                <p className="text-sm text-muted-foreground">{f.label}</p>
                <p className="text-editorial text-foreground">{f.value}</p>
                {f.note && <p className="text-xs text-muted-foreground mt-1">{f.note}</p>}
              </li>
            ))}
          </ul>
          <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
            {PRECO_PAGAMENTO.map((p) => (
              <li key={p} className="flex gap-2">
                <span className="text-gold shrink-0">·</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-14">
          <h2 className="heading-section mb-6">Como o valor se compõe</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <caption className="sr-only">
                Composição do custo de uma viagem para {destino.nome}
              </caption>
              <thead>
                <tr className="text-left border-b border-border">
                  <th scope="col" className="py-3 pr-4 font-medium">Item</th>
                  <th scope="col" className="py-3 pr-4 font-medium">Valor</th>
                  <th scope="col" className="py-3 font-medium">Detalhe</th>
                </tr>
              </thead>
              <tbody>
                {destino.composicao.map((c) => (
                  <tr key={c.item} className="border-b border-border/50 align-top">
                    <th scope="row" className="py-3 pr-4 font-normal text-foreground">{c.item}</th>
                    <td className="py-3 pr-4 text-foreground">{c.valor}</td>
                    <td className="py-3 text-muted-foreground">{c.detalhe}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-14 grid md:grid-cols-2 gap-8 max-w-4xl">
          <div>
            <h2 className="heading-section mb-4">O que está incluído</h2>
            <ul className="space-y-2 text-sm text-foreground/85">
              {destino.incluso.map((i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-gold shrink-0">·</span>
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="heading-section mb-4">O que não está incluído</h2>
            <ul className="space-y-2 text-sm text-foreground/85">
              {destino.naoIncluso.map((i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-muted-foreground shrink-0">·</span>
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-14 max-w-3xl space-y-6">
          <h2 className="heading-section">Melhor época, duração e antecedência</h2>
          <div className="space-y-4 text-editorial text-muted-foreground">
            <p><strong className="text-foreground">Melhor época:</strong> {destino.melhorEpoca}</p>
            <p><strong className="text-foreground">Duração ideal:</strong> {destino.duracao}</p>
            <p><strong className="text-foreground">Quando reservar:</strong> {destino.quandoComprar}</p>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="heading-section mb-6">Saídas com preço publicado</h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {destino.grupos.map((g) => (
              <li key={g.href}>
                <Link
                  to={g.href}
                  className="block h-full rounded-2xl border border-border/60 p-6 hover:border-gold transition-colors"
                >
                  <h3 className="heading-card mb-1">{g.title}</h3>
                  <p className="text-sm text-muted-foreground">{g.date}</p>
                  <p className="text-sm text-foreground mt-2">{g.price}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-14 max-w-3xl">
          <h2 className="heading-section mb-6">Perguntas frequentes sobre o custo</h2>
          <dl className="space-y-6">
            {destino.faq.map((f) => (
              <div key={f.q} className="border-b border-border/50 pb-6">
                <dt className="text-foreground font-medium mb-2">{f.q}</dt>
                <dd className="text-muted-foreground leading-relaxed">{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mb-14 max-w-3xl">
          <h2 className="heading-section mb-4">Continue navegando</h2>
          <ul className="flex flex-wrap gap-3 text-sm">
            {[...destino.relacionados, ...others.map((o) => ({ label: `Quanto custa ${o.nome}`, href: precoPath(o) }))].map(
              (r) => (
                <li key={r.href}>
                  <Link to={r.href} className="tag inline-flex items-center">
                    {r.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </section>

        <section className="rounded-lg border border-border p-8 text-center">
          <h2 className="heading-section text-foreground">
            Quer o valor exato para {destino.nome} nas suas datas?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Montamos o orçamento com hotéis, ritmo e experiências definidos com você — em grupo
            com coordenador desde o Brasil ou em roteiro privativo.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <WhatsAppButton
              variant="cta"
              params={{ type: "Destino", name: destino.nomeCurto }}
              label="Pedir orçamento no WhatsApp"
            />
            <Link to="/roteiro-sob-medida" className="btn-outline inline-flex items-center">
              Roteiro sob medida
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default QuantoCustaDestino;
