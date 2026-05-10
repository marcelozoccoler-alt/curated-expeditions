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

  if (variant === "float") {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Fale conosco pelo WhatsApp"
      >
        <MessageCircle size={28} className="text-white" />
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
