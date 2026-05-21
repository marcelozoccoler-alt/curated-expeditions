import { Helmet } from "react-helmet-async";
import { SUPPORTED_LANGS, type Lang } from "@/i18n/config";
import { localizePath } from "@/hooks/useLang";

const SITE_URL = "https://www.createtravel.tur.br";

const HREFLANG_MAP: Record<Lang, string> = {
  pt: "pt-BR",
  en: "en",
  es: "es",
  it: "it",
  de: "de",
  fr: "fr",
  he: "he",
};


interface Props {
  /** Path without language prefix, e.g. "/", "/sobre", "/destinos" */
  basePath: string;
}

export const HreflangTags = ({ basePath }: Props) => {
  return (
    <Helmet>
      {SUPPORTED_LANGS.map((lang) => {
        const href = `${SITE_URL}${localizePath(lang, basePath)}`;
        return (
          <link
            key={lang}
            rel="alternate"
            hrefLang={HREFLANG_MAP[lang]}
            href={href}
          />
        );
      })}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${SITE_URL}${basePath}`}
      />
    </Helmet>
  );
};
