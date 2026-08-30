import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { GeoAnswerBlock } from "@/components/GeoAnswerBlock";
import { precoDestinos, precoPath } from "@/lib/precoDestinos";
import { CONTACT } from "@/lib/types";

const DOMAIN = CONTACT.domain.replace(/\/$/, "");
const PATH = "/quanto-custa";

const QuantoCusta = () => {
  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Quanto custa viajar — guias de preço por destino",
    itemListElement: precoDestinos.map((d, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: d.title,
      url: `${DOMAIN}${precoPath(d)}`,
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: `${DOMAIN}/` },
      { "@type": "ListItem", position: 2, name: "Quanto custa viajar", item: `${DOMAIN}${PATH}` },
    ],
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Quanto custa viajar: preços reais por destino"
        description="Guias de preço por destino com valores reais das saídas em grupo da Create Travel: o que está incluso, extras a prever, melhor época e quantos dias reservar."
        canonicalPath={PATH}
        keywords="quanto custa viajar, preço de viagem por destino, valor viagem em grupo, quanto custa safári, quanto custa cruzeiro pelo nilo"
        jsonLd={[itemListLd, breadcrumbLd]}
      />
      <Header />

      <main className="container-editorial pt-24 pb-24">
        <Breadcrumbs items={[{ label: "Quanto custa viajar" }]} />

        <header className="max-w-3xl space-y-4 mb-12">
          <p className="text-caption text-gold">Transparência de preço</p>
          <h1 className="heading-hero">Quanto custa viajar para os destinos que fazemos</h1>
          <p className="text-editorial text-muted-foreground">
            Reunimos, destino por destino, os valores reais das nossas saídas em grupo — com o que
            está incluído, o que prever de extras, a melhor época e quantos dias a viagem pede.
            Quando não há preço divulgado, dizemos “sob consulta”: nunca estimamos valores.
          </p>
        </header>

        <div className="max-w-3xl mb-14">
          <GeoAnswerBlock
            summary="A Create Travel divulga preços por pessoa em apartamento duplo referentes a saídas em grupo com data definida, com voos internacionais, hospedagem, visitas e coordenador desde o Brasil incluídos. Roteiros privativos sob medida são orçados caso a caso, conforme hotéis, datas e duração."
            bullets={[
              "Todo valor citado corresponde a uma saída real com data publicada no site.",
              "Roteiros privativos não têm preço de tabela: são orçados sob consulta.",
              "Cada guia informa também extras a prever, melhor época e duração ideal.",
            ]}
            facts={[
              { label: "Destinos com guia de preço", value: String(precoDestinos.length) },
              { label: "Base dos valores", value: "Por pessoa em apto duplo" },
              { label: "Atualização", value: "Revisada a cada nova saída publicada" },
            ]}
          />
        </div>

        <ul className="grid md:grid-cols-2 gap-4">
          {precoDestinos.map((d) => (
            <li key={d.slug}>
              <Link
                to={precoPath(d)}
                className="block h-full rounded-2xl border border-border/60 p-6 hover:border-gold transition-colors"
              >
                <h2 className="heading-card mb-2">Quanto custa viajar para {d.nome}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{d.faixas[0].value}</p>
                <p className="text-xs text-muted-foreground mt-1">{d.faixas[0].note}</p>
              </Link>
            </li>
          ))}
        </ul>

        <section className="mt-16 rounded-lg border border-border p-8 text-center">
          <h2 className="heading-section text-foreground">Quer o valor exato para as suas datas?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Um travel designer da Create Travel calcula o orçamento com hotéis, datas e ritmo
            definidos com você — atendimento humano, sem call center.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <WhatsAppButton
              variant="cta"
              params={{ type: "Geral", name: "Quanto custa viajar" }}
              label="Falar com um travel designer"
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

export default QuantoCusta;
