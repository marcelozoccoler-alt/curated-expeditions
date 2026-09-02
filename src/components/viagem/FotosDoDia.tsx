import { Camera } from "lucide-react";
import { fotosDoBloco } from "@/lib/viagens/capitaisImperiais";

interface Props {
  cidadeSlug: string;
  blocoId: string;
  titulo: string;
}

/**
 * Faixa de fotos do dia. Enquanto não há imagens, mostra um espaço
 * reservado discreto — que também vira a página de foto no livro impresso.
 */
export const FotosDoDia = ({ cidadeSlug, blocoId, titulo }: Props) => {
  const fotos = fotosDoBloco(cidadeSlug, blocoId);

  if (fotos.length === 0) {
    return (
      <div
        data-photo-slot
        className="mt-8 rounded-2xl border border-dashed border-border bg-muted/30 px-6 py-10 text-center"
      >
        <Camera size={20} className="mx-auto text-gold mb-3" />
        <p className="text-sm text-muted-foreground max-w-md mx-auto">
          Espaço reservado para as fotos e vídeos de <span className="text-foreground/80">{titulo}</span>.
          As imagens entram aqui durante a viagem e seguem para o livro impresso.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {fotos.map((f, i) => (
        <figure key={i} className="overflow-hidden rounded-2xl border border-border bg-card">
          <img
            src={f.src}
            alt={f.alt}
            loading="lazy"
            className="w-full aspect-[4/3] object-cover"
          />
          {(f.caption || f.credit) && (
            <figcaption className="px-4 py-3 text-xs text-muted-foreground">
              {f.caption}
              {f.credit && <span className="block text-[11px] mt-1 opacity-70">Foto: {f.credit}</span>}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
};

export default FotosDoDia;
