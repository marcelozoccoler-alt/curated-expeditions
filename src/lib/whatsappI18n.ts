import { CONTACT } from "./types";
import type { Lang } from "@/i18n/config";

export interface IncomingWhatsAppParams {
  lang: Lang;
  destination?: string;
}

const TEMPLATES: Record<Lang, (name?: string) => string> = {
  pt: (name) =>
    `Olá, Create Travel! Quero criar um roteiro sob medida pelo Brasil${
      name ? ` — interesse: ${name}` : ""
    }.`,
  en: (name) =>
    `Hi Create Travel! I'd like to plan a tailor-made trip to Brazil${
      name ? ` — interested in: ${name}` : ""
    }. Could you send me a custom quote?`,
  es: (name) =>
    `¡Hola Create Travel! Me gustaría planear un viaje a medida por Brasil${
      name ? ` — interés: ${name}` : ""
    }. ¿Pueden enviarme un presupuesto personalizado?`,
  it: (name) =>
    `Ciao Create Travel! Vorrei organizzare un viaggio su misura in Brasile${
      name ? ` — interesse: ${name}` : ""
    }. Potete inviarmi un preventivo personalizzato?`,
  de: (name) =>
    `Hallo Create Travel! Ich möchte eine maßgeschneiderte Brasilien-Reise planen${
      name ? ` — Interesse: ${name}` : ""
    }. Können Sie mir ein individuelles Angebot zusenden?`,
  fr: (name) =>
    `Bonjour Create Travel ! J'aimerais organiser un voyage sur mesure au Brésil${
      name ? ` — intérêt : ${name}` : ""
    }. Pourriez-vous m'envoyer un devis personnalisé ?`,
  he: (name) =>
    `שלום Create Travel! אשמח לתכנן טיול אישי בברזיל${
      name ? ` — תחום עניין: ${name}` : ""
    }. תוכלו לשלוח לי הצעת מחיר מותאמת?`,
};

export const buildIncomingWhatsAppMessage = ({
  lang,
  destination,
}: IncomingWhatsAppParams): string => TEMPLATES[lang](destination);

export const generateIncomingWhatsAppLink = (
  params: IncomingWhatsAppParams,
): string =>
  `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
    buildIncomingWhatsAppMessage(params),
  )}`;
