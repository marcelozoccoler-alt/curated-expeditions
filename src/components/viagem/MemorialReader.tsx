import { forwardRef, useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import type { PageFlip } from "page-flip";
import { ArrowLeft, ArrowRight, Download, Expand, Minimize, BookOpen, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MEMORIAL_CHAPTERS, MEMORIAL_PAGES, MEMORIAL_PDF, type MemorialPage } from "@/lib/viagens/memorialCapitais";

const Page = forwardRef<HTMLDivElement, { page: MemorialPage; active: number }>(function Page({ page, active }, ref) {
  const [failed, setFailed] = useState(false);
  const load = Math.abs(page.number - active) < 5 || page.number === 1;
  return <div ref={ref} className="bg-card overflow-hidden" data-density={page.number === 1 || page.number === MEMORIAL_PAGES.length ? "hard" : "soft"}>
    {load ? failed ? <div className="h-full flex flex-col items-center justify-center gap-4 p-8"><p className="text-muted-foreground">Não foi possível carregar esta página.</p><Button variant="outline" onClick={() => setFailed(false)}>Tentar novamente</Button></div> : <img src={page.src} alt={`Página ${page.number}: ${page.title}`} className="w-full h-full object-contain" draggable={false} onError={() => setFailed(true)} /> : <div className="h-full flex items-center justify-center text-muted-foreground"><Loader2 className="h-5 w-5 animate-spin" /></div>}
  </div>;
});

export function MemorialReader() {
  const book = useRef<{ pageFlip: () => PageFlip } | null>(null);
  const area = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(1);
  const [full, setFull] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 410, height: 580 });
  const [motion, setMotion] = useState(false);
  useEffect(() => {
    const resize = () => {
      const available = Math.min(window.innerWidth - 32, 1100);
      const w = Math.floor(Math.min(available < 640 ? available : available / 2, (window.innerHeight - 200) / 1.414, 520));
      setDimensions({ width: Math.max(180, w), height: Math.max(255, Math.round(w * 1.414)) });
    };
    resize(); setMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    window.addEventListener("resize", resize);
    const changed = () => setFull(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", changed);
    return () => { window.removeEventListener("resize", resize); document.removeEventListener("fullscreenchange", changed); };
  }, []);
  const jump = (number: number) => {
    const n = Math.max(1, Math.min(MEMORIAL_PAGES.length, number));
    book.current?.pageFlip().turnToPage(n - 1); setCurrent(n);
  };
  const fullscreen = async () => {
    if (document.fullscreenElement) await document.exitFullscreen();
    else await area.current?.requestFullscreen();
  };
  return <div ref={area} className="bg-muted/60 py-5 sm:py-8" onKeyDown={e => {
    if ((e.target as HTMLElement).matches("input,select")) return;
    if (e.key === "ArrowRight") book.current?.pageFlip().flipNext();
    if (e.key === "ArrowLeft") book.current?.pageFlip().flipPrev();
  }}>
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex flex-wrap justify-between items-center gap-3 mb-5">
        <label className="flex items-center gap-2 text-sm text-foreground"><BookOpen className="h-4 w-4 text-gold" /><span className="sr-only">Capítulos</span><select aria-label="Capítulos do livro" value={MEMORIAL_CHAPTERS.slice().reverse().find(c => c.page <= current)?.page ?? 1} onChange={e => jump(Number(e.target.value))} className="bg-background border border-border rounded-md h-10 px-3 max-w-[220px]">{MEMORIAL_CHAPTERS.map(c => <option value={c.page} key={c.page}>{c.name}</option>)}</select></label>
        <div className="flex gap-2"><Button asChild variant="outline" size="icon" title="Baixar o livro em PDF"><a href={MEMORIAL_PDF} target="_blank" rel="noopener noreferrer" aria-label="Baixar o livro em PDF"><Download /></a></Button><Button variant="outline" size="icon" title={full ? "Sair da tela cheia" : "Tela cheia"} aria-label={full ? "Sair da tela cheia" : "Tela cheia"} onClick={() => void fullscreen()}>{full ? <Minimize /> : <Expand />}</Button></div>
      </div>
      <div className="flex justify-center overflow-hidden" aria-label="Livro de viagem folheável" tabIndex={0}>
        <HTMLFlipBook ref={book} key={`${dimensions.width}-${dimensions.height}`} width={dimensions.width} height={dimensions.height} size="fixed" minWidth={180} maxWidth={520} minHeight={255} maxHeight={736} startPage={current - 1} drawShadow={!motion} flippingTime={motion ? 1 : 650} usePortrait startZIndex={0} autoSize maxShadowOpacity={0.16} showCover mobileScrollSupport clickEventForward useMouseEvents swipeDistance={35} showPageCorners={!motion} disableFlipByClick={false} className="mx-auto" style={{}} onFlip={(event: { data: number }) => setCurrent(event.data + 1)}>
          {MEMORIAL_PAGES.map(page => <Page key={page.number} page={page} active={current} />)}
        </HTMLFlipBook>
      </div>
      <div className="flex justify-center items-center gap-4 mt-5">
        <Button variant="outline" size="icon" aria-label="Página anterior" title="Página anterior" disabled={current === 1} onClick={() => book.current?.pageFlip().flipPrev()}><ArrowLeft /></Button>
        <label className="flex items-center gap-2 text-sm"><span className="sr-only">Página</span><input aria-label="Ir para página" type="number" min={1} max={MEMORIAL_PAGES.length} value={current} onChange={e => { if (e.target.value) jump(Number(e.target.value)); }} className="w-16 h-10 text-center rounded-md border border-border bg-background text-foreground" /><span className="text-muted-foreground">/ {MEMORIAL_PAGES.length}</span></label>
        <Button variant="outline" size="icon" aria-label="Próxima página" title="Próxima página" disabled={current >= MEMORIAL_PAGES.length} onClick={() => book.current?.pageFlip().flipNext()}><ArrowRight /></Button>
      </div>
      <details className="max-w-3xl mx-auto mt-6 border-t border-border pt-4"><summary className="text-sm text-muted-foreground cursor-pointer">Texto da página {current}</summary><article className="mt-4 text-foreground leading-relaxed whitespace-pre-line">{MEMORIAL_PAGES[current - 1]?.text}</article></details>
    </div>
  </div>;
}