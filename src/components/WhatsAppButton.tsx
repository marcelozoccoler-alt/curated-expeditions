import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { generateWhatsAppLink, WhatsAppParams } from "@/lib/types";
import { WhatsAppLeadGate, openWhatsApp } from "@/components/WhatsAppLeadGate";
import { buildWhatsAppMessage } from "@/lib/types";

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
  const [gateOpen, setGateOpen] = useState(false);

  // Alguns ambientes (preview em iframe, in-app browsers do Instagram/Facebook)
  // bloqueiam target="_blank". Aqui garantimos a abertura da conversa em qualquer caso.
  const openDirect = () => openWhatsApp(buildWhatsAppMessage(params));

  if (variant === "float") {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => {
          e.preventDefault();
          openDirect();
        }}
        className="whatsapp-float"
        aria-label="Fale conosco pelo WhatsApp"
      >
        <MessageCircle size={26} />
      </a>
    );
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setGateOpen(true);
  };

  const gate = (
    <WhatsAppLeadGate
      open={gateOpen}
      onOpenChange={setGateOpen}
      params={params}
      onSkip={openDirect}
    />
  );

  if (variant === "cta") {
    return (
      <>
        <a href={link} onClick={handleClick} className={`btn-whatsapp ${className}`}>
          <MessageCircle size={20} />
          <span>{label}</span>
        </a>
        {gate}
      </>
    );
  }

  return (
    <>
      <a href={link} onClick={handleClick} className={`btn-accent ${className}`}>
        <MessageCircle size={18} />
        <span>{label}</span>
      </a>
      {gate}
    </>
  );
};
