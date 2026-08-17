import { useState } from "react";
import { Link2, Check, MessageCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface ShareButtonsProps {
  url: string;
  title: string;
  summary?: string;
  label?: string;
  variant?: "full" | "copy-only";
}

/**
 * Barra de compartilhamento simplificada: WhatsApp e/ou copiar link.
 */
export const ShareButtons = ({ url, title, summary, label = "Compartilhar", variant = "full" }: ShareButtonsProps) => {
  const [copied, setCopied] = useState(false);
  const waText = encodeURIComponent(`${title}${summary ? ` — ${summary}` : ""} ${url}`);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast({ title: "Link copiado", description: "Cole onde quiser compartilhar." });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast({ title: "Não foi possível copiar", variant: "destructive" });
    }
  };

  return (
    <div className="flex items-center gap-3 flex-wrap">
      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
        {label}
      </span>

      <div className="flex items-center gap-2">
        {variant === "full" && (
          <a
            href={`https://api.whatsapp.com/send?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartilhar no WhatsApp"
            className="h-9 px-3 rounded-full border border-border hover:border-gold hover:text-gold text-muted-foreground flex items-center gap-1.5 transition-colors"
          >
            <MessageCircle size={16} />
            <span className="text-xs font-medium">WhatsApp</span>
          </a>
        )}

        <button
          onClick={handleCopy}
          aria-label="Copiar link"
          className="w-9 h-9 rounded-full border border-border hover:border-gold hover:text-gold text-muted-foreground flex items-center justify-center transition-colors"
        >
          {copied ? <Check size={16} className="text-gold" /> : <Link2 size={16} />}
        </button>
      </div>
    </div>
  );
};
