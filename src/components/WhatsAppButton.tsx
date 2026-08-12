import { MessageCircle } from "lucide-react";
import { generateWhatsAppLink, WhatsAppParams } from "@/lib/types";

interface WhatsAppButtonProps {
  params?: WhatsAppParams;
  variant?: "float" | "inline" | "cta";
  label?: string;
  className?: string;
}

export const WhatsAppButton = ({
  params = { type: "Geral" },
  variant = "inline",
  label = "Criar roteiro sob medida",
  className = "",
}: WhatsAppButtonProps) => {
  const link = generateWhatsAppLink(params);

  // Alguns ambientes (preview em iframe, in-app browsers do Instagram/Facebook)
  // bloqueiam target="_blank". Aqui garantimos a abertura da conversa em qualquer caso.
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const opened = window.open(link, "_blank", "noopener,noreferrer");
    if (!opened) {
      try {
        window.top!.location.href = link;
      } catch {
        window.location.href = link;
      }
    }
  };

  if (variant === "float") {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="whatsapp-float"
        aria-label="Fale conosco pelo WhatsApp"
      >
        <MessageCircle size={26} />
      </a>
    );
  }

  if (variant === "cta") {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={`btn-whatsapp ${className}`}
      >
        <MessageCircle size={20} />
        <span>{label}</span>
      </a>
    );
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`btn-accent ${className}`}
    >
      <MessageCircle size={18} />
      <span>{label}</span>
    </a>
  );
};
