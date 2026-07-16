import { useState } from "react";
import { Linkedin, Facebook, Link2, Check, MessageCircle } from "lucide-react";
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
