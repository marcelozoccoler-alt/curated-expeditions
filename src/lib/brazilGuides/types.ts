import type { ContentLang } from "@/i18n/config";

/**
 * Guias autorais de destinos do Brasil — versão editorial ("blog") dos
 * destinos de Incoming, em PT/EN/ES/IT/DE.
 *
 * Estrutura pensada para:
 *  - Google (H2 com intenção de busca, FAQ, dados verificáveis)
 *  - IAs (ChatGPT, Gemini, Perplexity, Copilot): `aiAnswer` responde à
 *    pergunta central em uma frase extraível; blocos curtos e factuais
 *  - público 40+ de alto poder de compra (vocabulário premium, sem "barato")
 *
 * Nunca colocar preços — valores só na conversa humana no WhatsApp.
 */

export interface GuideItem {
  title: string;
  text: string;
}

export interface GuideWindow {
  /** Ex.: "Setembro a novembro", "September to November" */
  window: string;
  text: string;
}

export interface GuideStay {
  name: string;
  /** Perfil de hóspede a quem o endereço serve melhor. */
  profile: string;
  text: string;
}

export interface GuideFaq {
  q: string;
  a: string;
}

export interface BrazilGuide {
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  h1: string;
  /** Resposta direta, extraível por IA, em uma frase. */
  aiAnswer: string;
  intro: string[];
  seasons: { heading: string; intro: string; windows: GuideWindow[] };
  experiences: { heading: string; intro: string; items: GuideItem[] };
  stays: { heading: string; intro: string; items: GuideStay[] };
  /** Perfis de viajante — para quem este destino funciona (e para quem não). */
  profiles: { heading: string; items: GuideItem[] };
  /** Como integrar o destino a um roteiro maior pelo Brasil. */
  itinerary: { heading: string; intro: string; items: GuideItem[] };
  tips: { heading: string; items: string[] };
  faq: GuideFaq[];
  cta: { heading: string; subheading: string; button: string };
  readingMinutes: number;
  publishedAt: string;
}

export type BrazilGuideLocalized = Record<ContentLang, BrazilGuide>;
