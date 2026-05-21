import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import pt from "./locales/pt.json";
import en from "./locales/en.json";
import es from "./locales/es.json";
import it from "./locales/it.json";
import de from "./locales/de.json";

export const SUPPORTED_LANGS = ["pt", "en", "es", "it", "de"] as const;
export type Lang = (typeof SUPPORTED_LANGS)[number];

export const LANG_LABELS: Record<Lang, string> = {
  pt: "Português",
  en: "English",
  es: "Español",
  it: "Italiano",
  de: "Deutsch",
};

export const LANG_FLAGS: Record<Lang, string> = {
  pt: "🇧🇷",
  en: "🇬🇧",
  es: "🇪🇸",
  it: "🇮🇹",
  de: "🇩🇪",
};

/**
 * Extra UI-only language options shown in the LanguageSwitcher.
 * These do not have a full content translation yet and route the user
 * to the English Incoming page (best international fallback).
 */
export const UI_EXTRA_LANGS = [
  { id: "fr", label: "Français", flag: "🇫🇷", routeTo: "/en" },
  { id: "he", label: "עברית", flag: "🇮🇱", routeTo: "/en" },
] as const;

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
