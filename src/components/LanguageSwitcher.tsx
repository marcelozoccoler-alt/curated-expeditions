import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Globe, Check } from "lucide-react";
import { SUPPORTED_LANGS, LANG_LABELS, LANG_FLAGS, type Lang } from "@/i18n/config";
import { useLang, stripLangPrefix, localizePath } from "@/hooks/useLang";
import { useTranslation } from "react-i18next";

interface Props {
  variant?: "light" | "dark";
}

export const LanguageSwitcher = ({ variant = "dark" }: Props) => {
  const [open, setOpen] = useState(false);
  const current = useLang();
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const handleSelect = (lang: Lang) => {
    const cleanPath = stripLangPrefix(location.pathname);

    // Only the Incoming landing is fully translated to non-PT languages.
    // For any non-PT choice, always send the user to that language's landing
    // to avoid 404s on pages that don't have a localized route (e.g. /sobre).
    // For PT, return to the equivalent PT path (or home if coming from /incoming).
    let target: string;
    if (lang === "pt") {
      target = cleanPath === "/incoming" ? "/" : cleanPath;
    } else {
      target = `/${lang}`;
    }

    navigate(target);
    setOpen(false);
  };

  const textColor = variant === "light" ? "text-foreground" : "text-primary-foreground";

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-gold ${textColor}`}
        aria-label={t("language.switch")}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <Globe size={16} />
        <span className="hidden sm:inline">{LANG_FLAGS[current]}</span>
        <span className="uppercase">{current}</span>
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <ul
            role="listbox"
            className="absolute right-0 mt-2 w-44 bg-background border border-border rounded-md shadow-lg z-50 overflow-hidden"
          >
            {SUPPORTED_LANGS.map((lang) => (
              <li key={lang}>
                <button
                  role="option"
                  aria-selected={lang === current}
                  onClick={() => handleSelect(lang)}
                  className={`w-full flex items-center justify-between gap-2 px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors ${
                    lang === current ? "bg-muted/50" : ""
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span>{LANG_FLAGS[lang]}</span>
                    <span>{LANG_LABELS[lang]}</span>
                  </span>
                  {lang === current && <Check size={14} className="text-gold" />}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
