import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGS, type Lang } from "@/i18n/config";

export const getLangFromPath = (pathname: string): Lang => {
  const seg = pathname.split("/").filter(Boolean)[0];
  if (seg && (SUPPORTED_LANGS as readonly string[]).includes(seg)) {
    return seg as Lang;
  }
  return "pt";
};

/**
 * Strips the language prefix from a pathname.
 * /en/destinos/foo → /destinos/foo
 * /destinos/foo    → /destinos/foo
 */
export const stripLangPrefix = (pathname: string): string => {
  const lang = getLangFromPath(pathname);
  if (lang === "pt") return pathname;
  return pathname.replace(new RegExp(`^/${lang}`), "") || "/";
};

/**
 * Builds a localized path. For Portuguese (default), no prefix.
 */
export const localizePath = (lang: Lang, path: string): string => {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (lang === "pt") return clean;
  return `/${lang}${clean === "/" ? "" : clean}`;
};

export const useLang = (): Lang => {
  const { pathname } = useLocation();
  const lang = getLangFromPath(pathname);
  const { i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
    document.documentElement.lang =
      lang === "pt" ? "pt-BR" : lang === "en" ? "en" : lang;
    document.documentElement.dir = lang === "he" ? "rtl" : "ltr";
  }, [lang, i18n]);

  return lang;
};

/**
 * Hook returning a function that prefixes paths with the current language.
 */
export const useLocalizedPath = () => {
  const lang = useLang();
  return (path: string) => localizePath(lang, path);
};
