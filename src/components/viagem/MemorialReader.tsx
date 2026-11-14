import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Download, BookOpen, Expand, Landmark, Church, Castle, MoonStar, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { MEMORIAL_CHAPTERS, MEMORIAL_PDF } from "@/lib/viagens/memorialCapitais";
import { EDITORIAL_PAGES, type EditorialPhoto } from "@/lib/viagens/memorialEditorial";

export function MemorialReader() {
  const [current, setCurrent] = useState(1);
  const [enlarged, setEnlarged] = useState<EditorialPhoto | null>(null);
  const area = useRef<HTMLElement>(null);
  const page = EDITORIAL_PAGES[current - 1];
  const jump = (number: number, scroll = true) => {
    setCurrent(Math.max(1, Math.min(EDITORIAL_PAGES.length, Math.trunc(number))));
    if (scroll) area.current?.scrollIntoView({ block: "start", behavior: "instant" });
  };
  if (!page) return null;
  const portraits = current >= 181 && current <= 183;
  const text = page.paragraphs.filter(p => p.kind !== "credit");
  const credits = page.paragraphs.filter(p => p.kind === "credit");
  const navigation = <div className="flex items-center gap-3">
    <Button variant="ghost" size="icon" title="Página anterior" aria-label="Página anterior" disabled={current === 1} onClick={() => jump(current - 1)}><ArrowLeft className="h-5 w-5" /></Button>
    <label className="flex items-center gap-2 text-sm text-muted-foreground"><input aria-label="Ir para página" type="number" min={1} max={EDITORIAL_PAGES.length} value={current} onChange={e => { if (e.target.value) jump(Number(e.target.value), false); }} className="w-14 h-10 text-center border-b border-border bg-background text-foreground focus:outline-none focus:border-primary" /><span>/ {EDITORIAL_PAGES.length}</span></label>
    <Button variant="ghost" size="icon" title="Próxima página" aria-label="Próxima página" disabled={current === EDITORIAL_PAGES.length} onClick={() => jump(current + 1)}><ArrowRight className="h-5 w-5" /></Button>
  </div>;
  return <section ref={area} className="scroll-mt-24 bg-background border-t border-border" aria-label="Livro de viagem" onKeyDown={e => {
    if ((e.target as HTMLElement).matches("input,select")) return;
    if (e.key === "ArrowRight") jump(current + 1);
    if (e.key === "ArrowLeft") jump(current - 1);
  }}>
    <div className="container-editorial flex flex-wrap items-center justify-between gap-4 py-4 border-b border-border">
      <label className="flex items-center gap-2"><BookOpen className="h-4 w-4 text-gold" /><select aria-label="Capítulos do livro" value={MEMORIAL_CHAPTERS.slice().reverse().find(c => c.page <= current)?.page ?? 1} onChange={e => jump(Number(e.target.value))} className="bg-background text-foreground h-10 max-w-[220px] border-0 text-sm focus:outline-none">{MEMORIAL_CHAPTERS.map(c => <option key={c.page} value={c.page}>{c.name}</option>)}</select></label>
      <div className="flex items-center gap-3">{navigation}<Button asChild variant="ghost" size="icon" title="Baixar o livro em PDF"><a href={MEMORIAL_PDF} target="_blank" rel="noopener noreferrer" aria-label="Baixar o livro em PDF"><Download className="h-5 w-5" /></a></Button></div>
    </div>
    <article key={page.number} className="container-editorial py-10 sm:py-14">
      {current !== 1 && <header className="max-w-3xl mx-auto mb-8 sm:mb-10"><p className="text-sm text-gold mb-3">{page.eyebrow}</p><h2 className="font-serif text-3xl sm:text-4xl text-foreground leading-tight tracking-normal">{page.title}</h2></header>}
      {!portraits && text.length > 0 && <div className="max-w-3xl mx-auto space-y-6 mb-10 sm:mb-14">{text.map((paragraph, index) => paragraph.kind === "heading" ? <h3 key={index} className="font-serif text-2xl text-foreground leading-snug tracking-normal">{paragraph.text}</h3> : <p key={index} className="text-lg sm:text-xl text-foreground/90 leading-[1.85]">{paragraph.text}</p>)}</div>}
      {current === 4 && <div className="max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 py-8 border-y border-border mb-10">{[{name: "Budapeste", symbol: Landmark}, {name: "Viena", symbol: Church}, {name: "Praga", symbol: Castle}, {name: "Istambul", symbol: MoonStar}].map(({name, symbol: Symbol}) => <div key={name} className="text-center"><Symbol className="w-10 h-10 text-gold mx-auto mb-3" strokeWidth={1} /><p className="font-serif text-lg text-foreground">{name}</p></div>)}</div>}
      <div className={portraits ? "grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12" : "space-y-10 sm:space-y-14"}>
        {page.photos.map((photo, index) => <figure key={photo.src} className="max-w-3xl mx-auto w-full">
          <div className="relative group flex justify-center"><img src={photo.src} width={photo.width} height={photo.height} alt={portraits ? text[index]?.text : `${page.title} — fotografia ${index + 1}`} className="block max-w-full w-auto h-auto max-h-[620px] object-contain" loading={index === 0 ? "eager" : "lazy"} />
            <Button variant="secondary" size="icon" title="Ampliar fotografia" aria-label={`Ampliar fotografia ${index + 1}`} onClick={() => setEnlarged(photo)} className="absolute right-3 bottom-3 shadow-sm"><Expand className="h-4 w-4" /></Button>
          </div>
          {portraits && <figcaption className="font-serif text-xl mt-4 text-foreground">{text[index]?.text}</figcaption>}
          {photo.caption && <figcaption className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-4"><Waves className="h-4 w-4 text-emerald" />{photo.caption}</figcaption>}
        </figure>)}
      </div>
      {credits.length > 0 && <div className="max-w-3xl mx-auto mt-8 space-y-3">{credits.map((credit, index) => <p key={index} className="text-sm text-muted-foreground leading-relaxed break-words">{credit.text}</p>)}</div>}
      <nav aria-label="Navegação do livro" className="flex justify-between items-center border-t border-border pt-6 mt-12"><span className="text-sm text-muted-foreground">{current} / {EDITORIAL_PAGES.length}</span>{navigation}</nav>
    </article>
    <Dialog open={Boolean(enlarged)} onOpenChange={open => { if (!open) setEnlarged(null); }}><DialogContent className="w-[96vw] max-w-6xl max-h-[96dvh] overflow-auto p-8 bg-background flex justify-center" aria-describedby={undefined}><DialogTitle className="sr-only">{page.title}</DialogTitle>{enlarged && <img src={enlarged.src} width={enlarged.width} height={enlarged.height} alt={page.title} className="w-auto max-w-full max-h-[85dvh] object-contain" />}</DialogContent></Dialog>
  </section>;
}
