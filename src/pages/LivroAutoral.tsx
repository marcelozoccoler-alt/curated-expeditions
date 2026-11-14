import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MemorialReader } from "@/components/viagem/MemorialReader";
import { MEMORIAL_PAGES, MEMORIAL_PDF } from "@/lib/viagens/memorialCapitais";
import { CONTACT } from "@/lib/types";

export default function LivroAutoral() {
  const description = "O mundo que ficou em nós: o livro autoral da Create Travel, com 188 páginas de fotografias, histórias e memórias da viagem por Budapeste, Viena, Praga e Istambul em outubro de 2026.";
  return <div className="min-h-screen bg-background">
    <SEO title="O mundo que ficou em nós — Livro Autoral Create Travel" description={description} canonicalPath="/livro-autoral" keywords="livro autoral de viagem, viagem em grupo exclusivo, Budapeste Viena Praga Istambul, Create Travel" jsonLd={[{
      "@context": "https://schema.org", "@type": "Book", name: "O mundo que ficou em nós", description, inLanguage: "pt-BR", numberOfPages: MEMORIAL_PAGES.length, author: { "@type": "Organization", name: "Create Travel" }, url: `${CONTACT.domain.replace(/\/$/, "")}/livro-autoral`, image: MEMORIAL_PAGES[0]?.src, encoding: { "@type": "MediaObject", contentUrl: MEMORIAL_PDF, encodingFormat: "application/pdf" }, about: ["Budapeste", "Viena", "Praga", "Istambul"].map(name => ({ "@type": "Place", name }))
    }]} />
    <Header />
    <main className="pt-24 sm:pt-28">
      <div className="container-editorial pb-6 sm:pb-8">
        <Breadcrumbs items={[{ label: "Livro Autoral Create Travel" }]} />
        <p className="text-caption text-gold mt-5 mb-2">Livro Autoral Create Travel · Volume I</p>
        <h1 className="font-serif text-3xl sm:text-5xl text-foreground leading-tight">O mundo que ficou em nós</h1>
        <p className="mt-3 text-muted-foreground">Budapeste · Viena · Praga · Istambul <span className="hidden sm:inline">—</span> <span className="block sm:inline">Outubro de 2026 · 188 páginas</span></p>
        <p className="mt-3 max-w-3xl text-foreground/80 leading-relaxed">Onze viajantes, quatro cidades e uma história compartilhada — do primeiro brinde às lembranças que atravessaram o caminho de volta.</p>
      </div>
      <MemorialReader />
      <section className="container-editorial py-12 sm:py-16">
        <h2 className="font-serif text-2xl sm:text-3xl text-foreground">A próxima história pode ser a sua</h2>
        <p className="max-w-2xl mt-3 text-muted-foreground leading-relaxed">Viagens autorais, encontros que permanecem e o cuidado da Create Travel em cada capítulo.</p>
        <WhatsAppButton variant="cta" label="Conversar sobre minha viagem" params={{ type: "Geral", name: "Livro Autoral — O mundo que ficou em nós" }} className="mt-5" />
      </section>
    </main>
    <Footer />
  </div>;
}
