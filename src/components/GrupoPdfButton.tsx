import { FileDown } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useState } from "react";

/**
 * Botão flutuante "Baixar PDF" exibido nas páginas de Grupos
 * com Guia Brasileiro (/grupos/*). Utiliza a impressão nativa
 * do navegador (Salvar como PDF), respeitando o CSS de impressão
 * definido em src/index.css que oculta cabeçalho, rodapé e botões
 * flutuantes.
 */
export const GrupoPdfButton = () => {
  const { pathname } = useLocation();
  const [busy, setBusy] = useState(false);

  const isGrupo = pathname.startsWith("/grupos/") && pathname.length > "/grupos/".length;
  if (!isGrupo) return null;

  const handleClick = () => {
    setBusy(true);
    // pequeno atraso para permitir re-render antes do diálogo de impressão
    setTimeout(() => {
      try {
        window.print();
      } finally {
        setBusy(false);
      }
    }, 60);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Baixar roteiro em PDF"
      data-no-print
      className="fixed right-6 bottom-40 z-40 flex items-center gap-2 rounded-full bg-gold text-white shadow-xl px-5 py-3 hover:bg-gold/90 transition-all hover:scale-105 border border-navy/20 print:hidden"
    >
      <FileDown size={18} />
      <span className="text-sm font-medium hidden sm:inline">
        {busy ? "Preparando…" : "Baixar PDF"}
      </span>
    </button>
  );
};

export default GrupoPdfButton;
