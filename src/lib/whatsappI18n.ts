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
  ja: (name) =>
    `Create Travel さん、こんにちは。ブラジルのオーダーメイド旅行を検討しています${
      name ? `（関心: ${name}）` : ""
    }。お見積りをお願いできますか？`,
  ko: (name) =>
    `Create Travel 안녕하세요. 브라질 맞춤 여행을 계획하고 있습니다${
      name ? ` (관심: ${name})` : ""
    }. 견적을 받아볼 수 있을까요?`,
  zh: (name) =>
    `Create Travel 你好！我想规划一次巴西定制旅行${
      name ? `（感兴趣：${name}）` : ""
    }。可以给我一份报价吗？`,
  ar: (name) =>
    `مرحبًا Create Travel! أرغب في تنظيم رحلة مصمّمة خصيصًا إلى البرازيل${
      name ? ` — الاهتمام: ${name}` : ""
    }. هل يمكنكم إرسال عرض سعر مخصص؟`,
  he: (name) =>
    `שלום Create Travel! אני מעוניין לתכנן טיול מותאם אישית לברזיל${
      name ? ` — תחום עניין: ${name}` : ""
    }. אפשר לקבל הצעת מחיר?`,
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
