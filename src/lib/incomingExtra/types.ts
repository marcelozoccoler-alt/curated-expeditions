import type { IncomingCopy } from "@/lib/incomingCopy";

/**
 * Idiomas adicionais do Incoming (mercados de origem asiáticos e do
 * Oriente Médio). Estes idiomas têm a landing de Incoming totalmente
 * traduzida; o conteúdo editorial profundo (guias e páginas de destino)
 * permanece em inglês por ora.
 */
export const INCOMING_EXTRA_LANGS = ["ja", "ko", "zh", "ar", "he"] as const;
export type ExtraLang = (typeof INCOMING_EXTRA_LANGS)[number];

export interface ExtraDestText {
  name: string;
  blurb: string;
}

export interface IncomingExtraPack {
  copy: IncomingCopy;
  /** slug do destino → nome e chamada no idioma */
  dest: Record<string, ExtraDestText>;
}
