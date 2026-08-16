import { MessageCircle } from "lucide-react";
import { generateWhatsAppLink, WhatsAppParams } from "@/lib/types";
import { openWhatsAppUrl } from "@/components/WhatsAppLeadGate";

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

  // O botão flutuante abre direto; os demais passam pelo pré-briefing
  // interceptado globalmente pelo WhatsAppLeadGate.
  const handleFloatClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    openWhatsAppUrl(link);
  };

  if (variant === "float") {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        data-no-gate
        onClick={handleFloatClick}
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
      className={`btn-accent ${className}`}
    >
      <MessageCircle size={18} />
      <span>{label}</span>
    </a>
  );
};
