import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import pt from "./locales/pt.json";
import en from "./locales/en.json";
import es from "./locales/es.json";
import it from "./locales/it.json";
import de from "./locales/de.json";
import fr from "./locales/fr.json";
import he from "./locales/he.json";

export const SUPPORTED_LANGS = ["pt", "en", "es", "it", "de", "fr", "he"] as const;
export type Lang = (typeof SUPPORTED_LANGS)[number];

export const LANG_LABELS: Record<Lang, string> = {
  pt: "Português",
  en: "English",
  es: "Español",
  it: "Italiano",
  de: "Deutsch",
  fr: "Français",
  he: "עברית",
};

export const LANG_FLAGS: Record<Lang, string> = {
  pt: "🇧🇷",
  en: "🇬🇧",
  es: "🇪🇸",
  it: "🇮🇹",
  de: "🇩🇪",
  fr: "🇫🇷",
  he: "🇮🇱",
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      pt: { translation: pt },
      en: { translation: en },
      es: { translation: es },
      it: { translation: it },
      de: { translation: de },
      fr: { translation: fr },
      he: { translation: he },
    },
    fallbackLng: "pt",
    supportedLngs: SUPPORTED_LANGS as unknown as string[],
    interpolation: { escapeValue: false },
    detection: {
      order: ["path", "localStorage", "navigator"],
      lookupFromPathIndex: 0,
      caches: ["localStorage"],
    },
  });

export default i18n;
