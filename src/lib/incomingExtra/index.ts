import { jaPack } from "./ja";
import { koPack } from "./ko";
import { zhPack } from "./zh";
import { arPack } from "./ar";
import { hePack } from "./he";
import type { ExtraLang, IncomingExtraPack } from "./types";

export { INCOMING_EXTRA_LANGS } from "./types";
export type { ExtraLang, IncomingExtraPack } from "./types";

export const INCOMING_EXTRA: Record<ExtraLang, IncomingExtraPack> = {
  ja: jaPack,
  ko: koPack,
  zh: zhPack,
  ar: arPack,
  he: hePack,
};

const EXTRA_KEYS = Object.keys(INCOMING_EXTRA) as ExtraLang[];

export const isExtraLang = (lang: string): lang is ExtraLang =>
  (EXTRA_KEYS as readonly string[]).includes(lang);

/** `lang` do HTML e `og:locale` para os mercados adicionais. */
export const EXTRA_HTML_LANG: Record<ExtraLang, string> = {
  ja: "ja",
  ko: "ko",
  zh: "zh-Hans",
  ar: "ar",
  he: "he",
};

export const EXTRA_OG_LOCALE: Record<ExtraLang, string> = {
  ja: "ja_JP",
  ko: "ko_KR",
  zh: "zh_CN",
  ar: "ar_AE",
  he: "he_IL",
};

/** Nome e chamada do destino no idioma adicional (fallback nos parâmetros). */
export const extraDestText = (
  lang: string,
  slug: string,
  fallback: { name: string; blurb: string },
) => {
  if (!isExtraLang(lang)) return fallback;
  return INCOMING_EXTRA[lang].dest[slug] ?? fallback;
};
