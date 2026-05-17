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
    // For incoming page: PT redirects to home
    const target =
      cleanPath === "/incoming" && lang === "pt"
        ? "/"
        : localizePath(lang, cleanPath);
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
