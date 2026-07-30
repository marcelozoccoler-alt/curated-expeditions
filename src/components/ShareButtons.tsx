import { useState } from "react";
import { Linkedin, Facebook, Link2, Check, MessageCircle, Instagram } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface ShareButtonsProps {
  url: string;
  title: string;
  /** Optional short description used in WhatsApp copy. */
  summary?: string;
}

/**
 * Social share bar for editorial content. Uses share intent URLs so no
 * third-party JS is loaded — keeps LCP and privacy clean.
 */
export const ShareButtons = ({ url, title, summary }: ShareButtonsProps) => {
  const [copied, setCopied] = useState(false);
  const encUrl = encodeURIComponent(url);
  const encTitle = encodeURIComponent(title);
  const waText = encodeURIComponent(`${title}${summary ? ` — ${summary}` : ""} ${url}`);

  const items = [
    {
      label: "WhatsApp",
      href: `https://api.whatsapp.com/send?text=${waText}`,
      icon: MessageCircle,
    },
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encUrl}`,
      icon: Linkedin,
    },
    {
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encUrl}&quote=${encTitle}`,
      icon: Facebook,
    },
  ];
  void encTitle;

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

  const shareText = `${title}${summary ? ` — ${summary}` : ""}\n\n${url}`;

  const handleInstagram = async () => {
    // Instagram não aceita URL de share via web. No celular usamos o seletor
    // nativo (que lista o Instagram); no desktop copiamos e abrimos o site.
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, text: title, url });
        return;
      } catch {
        /* usuário cancelou — segue para o fallback */
      }
    }
    try {
      await navigator.clipboard.writeText(`${title} — ${url}`);
      toast({
        title: "Link copiado para o Instagram",
        description: "Cole no seu Story, DM ou bio.",
      });
    } catch {
      toast({
        title: "Copie o link",
        description: url,
      });
    }
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const target = isMobile ? "instagram://app" : "https://www.instagram.com/";
    window.open(target, "_blank", "noopener,noreferrer");
  };

  const handleWhatsAppStatus = async () => {
    // O WhatsApp não permite pré-preencher o Status por URL. No celular o
    // seletor nativo abre o WhatsApp com a opção "Status"; no desktop
    // copiamos o texto pronto para colar.
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, text: shareText });
        return;
      } catch {
        /* usuário cancelou — segue para o fallback */
      }
    }
    try {
      await navigator.clipboard.writeText(shareText);
      toast({
        title: "Texto copiado para o Status",
        description: "Abra o WhatsApp › Status › Texto e cole.",
      });
    } catch {
      toast({ title: "Copie o link", description: url });
    }
    window.open("https://web.whatsapp.com/", "_blank", "noopener,noreferrer");
  };


  return (
    <div className="flex items-center gap-3 flex-wrap">
      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
        Compartilhar
      </span>
      <div className="flex items-center gap-2">
        {items.map((s) => {
          const Icon = s.icon;
          return (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Compartilhar no ${s.label}`}
              className="w-9 h-9 rounded-full border border-border hover:border-gold hover:text-gold text-muted-foreground flex items-center justify-center transition-colors"
            >
              <Icon size={16} />
            </a>
          );
        })}
        <button
          onClick={handleInstagram}
          aria-label="Compartilhar no Instagram (copia o link)"
          title="Copia o link e abre o Instagram para você colar no Story, DM ou bio"
          className="w-9 h-9 rounded-full border border-border hover:border-gold hover:text-gold text-muted-foreground flex items-center justify-center transition-colors"
        >
          <Instagram size={16} />
        </button>
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
