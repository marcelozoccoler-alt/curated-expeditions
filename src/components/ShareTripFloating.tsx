import { Share2 } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useState } from "react";

/**
 * Botão flutuante de "compartilhar pelo WhatsApp" exibido nas páginas
 * de Grupos com Guia Brasileiro (/grupos/*) e nas leituras autorais
 * do Diário (/diario/:slug). Posicionado acima do botão flutuante
 * padrão de WhatsApp.
 */
export const ShareTripFloating = () => {
  const { pathname } = useLocation();
  const [copied, setCopied] = useState(false);

  const isGrupo = pathname.startsWith("/grupos/");
  const isDiarioPost =
    pathname.startsWith("/diario/") && pathname.replace("/diario/", "").length > 0;

  if (!isGrupo && !isDiarioPost) return null;


  const handleShare = async () => {
    const url =
      typeof window !== "undefined"
        ? window.location.href
        : `https://createtravel.tur.br${pathname}`;

    const pageTitle =
      typeof document !== "undefined" ? document.title : "Create Travel";
    const cleanTitle = pageTitle.split("|")[0].trim();

    const intro = isDiarioPost
      ? "Achei essa leitura incrível no Blog da Create Travel:"
      : "Olha que viagem incrível encontrei na Create Travel:";
    const message = `${intro}\n\n*${cleanTitle}*\n\n${url}`;


    // Share API nativa (mobile) — abre o seletor de apps com WhatsApp pré-selecionado
    if (navigator.share) {
      try {
        await navigator.share({
          title: cleanTitle,
          text: cleanTitle,
          url,
        });
        return;
      } catch {
        // usuário cancelou ou navegador não suportou — cai no fallback
      }
    }

    // Fallback desktop — abre o WhatsApp Web com a mensagem pronta
    const waUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");

    // Copia o link no clipboard como conveniência adicional
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      /* ignore */
    }
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      aria-label="Compartilhar este roteiro pelo WhatsApp"
      className="fixed right-6 bottom-24 z-40 flex items-center gap-2 rounded-full bg-navy text-white shadow-xl px-5 py-3 hover:bg-navy/90 transition-all hover:scale-105 border border-gold/30"
    >
      <Share2 size={18} />
      <span className="text-sm font-medium hidden sm:inline">
        {copied ? "Link copiado!" : "Compartilhar"}
      </span>
    </button>
  );
};

export default ShareTripFloating;
