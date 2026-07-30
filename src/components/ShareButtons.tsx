import { useState } from "react";
import { Linkedin, Facebook, Link2, Check, MessageCircle, Instagram, Clapperboard, CircleDashed } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface ShareButtonsProps {
  url: string;
  title: string;
  /** Optional short description used in WhatsApp and Instagram copy. */
  summary?: string;
  /** Optional image URL to include in Instagram copy text. */
  imageUrl?: string;
}

/**
 * Social share bar for editorial content. Uses share intent URLs so no
 * third-party JS is loaded — keeps LCP and privacy clean.
 */
export const ShareButtons = ({ url, title, summary, imageUrl }: ShareButtonsProps) => {
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
  const isMobile = () => /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const openInstagram = () => {
    const target = isMobile() ? "instagram://app" : "https://www.instagram.com/";
    window.open(target, "_blank", "noopener,noreferrer");
  };

  const generateInstagramPostText = () => {
    const parts = [title];
    if (summary) parts.push(summary);
    parts.push("");
    parts.push(`Link para ler completo: ${url}`);
    if (imageUrl) parts.push(`Imagem: ${imageUrl}`);
    return parts.join("\n\n");
  };

  const generateInstagramReelsText = () => {
    const parts = [title, ""];
    if (summary) parts.push(`${summary.slice(0, 100)}${summary.length > 100 ? "…" : ""}`);
    parts.push("");
    parts.push(`Link: ${url}`);
    parts.push("");
    parts.push("#CreateTravel #ViagemComAutoria #BlogDeViagem");
    return parts.join("\n");
  };

  const handleInstagramPost = async () => {
    // Instagram não expõe API web para criar feed posts. A melhor UX
    // possível é: copiar a legenda pronta e abrir o app/Instagram.com.
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, text: generateInstagramPostText(), url });
        return;
      } catch {
        /* usuário cancelou — segue para o fallback */
      }
    }
    try {
      await navigator.clipboard.writeText(generateInstagramPostText());
      toast({
        title: "Legenda copiada para Post do Instagram",
        description: "Abrindo o Instagram. Cole a legenda na criação de Post.",
      });
    } catch {
      toast({ title: "Copie o link", description: url });
    }
    openInstagram();
  };

  const handleInstagramReels = async () => {
    // Reels também não tem API de share via web. Copiamos texto curto e
    // abrimos o app (instagram://camera) para criar o Reel.
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, text: generateInstagramReelsText(), url });
        return;
      } catch {
        /* usuário cancelou — segue para o fallback */
      }
    }
    try {
      await navigator.clipboard.writeText(generateInstagramReelsText());
      toast({
        title: "Texto copiado para Reels",
        description: "Abrindo o Instagram para criar o Reel. Cole o texto.",
      });
    } catch {
      toast({ title: "Copie o link", description: url });
    }
    const target = isMobile() ? "instagram://camera" : "https://www.instagram.com/";
    window.open(target, "_blank", "noopener,noreferrer");
  };

  const handleWhatsAppStatus = async () => {
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
          onClick={handleInstagramPost}
          aria-label="Compartilhar como Post do Instagram"
          title="Criar um Post no Instagram: copia a legenda e abre o Instagram"
          className="h-9 px-3 rounded-full border border-border hover:border-gold hover:text-gold text-muted-foreground flex items-center gap-1.5 transition-colors"
        >
          <Instagram size={16} />
          <span className="text-xs font-medium">Post</span>
        </button>
        <button
          onClick={handleInstagramReels}
          aria-label="Compartilhar como Reels do Instagram"
          title="Criar um Reels no Instagram: copia o texto e abre a câmera do Instagram"
          className="h-9 px-3 rounded-full border border-border hover:border-gold hover:text-gold text-muted-foreground flex items-center gap-1.5 transition-colors"
        >
          <Clapperboard size={16} />
          <span className="text-xs font-medium">Reels</span>
        </button>
        <button
          onClick={handleWhatsAppStatus}
          aria-label="Compartilhar no Status do WhatsApp"
          title="Compartilhar no Status do WhatsApp"
          className="h-9 px-3 rounded-full border border-border hover:border-gold hover:text-gold text-muted-foreground flex items-center gap-1.5 transition-colors"
        >
          <CircleDashed size={16} />
          <span className="text-xs font-medium">Status</span>
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

