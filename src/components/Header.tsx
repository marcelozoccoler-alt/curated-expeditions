import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X, MessageCircle, Info, Mail, BookOpen, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { generateWhatsAppLink } from "@/lib/types";
import { generateIncomingWhatsAppLink } from "@/lib/whatsappI18n";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLang } from "@/hooks/useLang";
import logo from "@/assets/logo.jpg";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [brasilOpen, setBrasilOpen] = useState(false);
  const [gruposOpen, setGruposOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();
  const lang = useLang();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Primary horizontal nav (travel products)
  const primaryNavItems =
    lang === "pt"
      ? [
          { label: t("nav.destinos"), href: "/destinos" },
          { label: t("nav.experiencias"), href: "/experiencias" },
        ]
      : [
          { label: t("nav.incoming"), href: `/${lang}/incoming` },
          { label: "Crie seu grupo", href: `/${lang}/crie-seu-grupo` },
          { label: t("nav.destinos"), href: "/brasil" },
          { label: t("nav.sobre"), href: "/sobre" },
        ];

  // Secondary vertical nav — institutional pages, PT only
  const secondaryNavItems =
    lang === "pt"
      ? [
          { label: t("nav.sobre"), href: "/sobre", icon: Info },
          { label: "Diário", href: "/diario", icon: BookOpen },
          { label: t("nav.contato"), href: "/contato", icon: Mail },
        ]
      : [];

  const brasilSubItems =
    lang === "pt"
      ? [
          { label: "Brasil Vivo", href: "/brasil-vivo" },
          { label: "Brasil Aventura", href: "/brasil-aventura" },
        ]
      : [
          { label: "Brasil Vivo", href: `/${lang}/brasil-vivo` },
          { label: "Brasil Aventura", href: `/${lang}/brasil-aventura` },
        ];

  const gruposSubItems =
    lang === "pt"
      ? [
          { label: "Grupos com Guia", href: "/embarque-com-a-create" },
          { label: "Crie seu grupo", href: "/crie-seu-grupo" },
        ]
      : [];

  const allNavItems =
    lang === "pt"
      ? [
          ...primaryNavItems,
          ...brasilSubItems,
          ...gruposSubItems,
          ...secondaryNavItems.map((i) => ({ label: i.label, href: i.href })),
        ]
      : [...primaryNavItems, ...brasilSubItems];

  const whatsappLink =
    lang === "pt"
      ? generateWhatsAppLink({ type: "Geral" })
      : generateIncomingWhatsAppLink({ lang });

  const ctaLabel = t("cta.create_itinerary");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-editorial">
        <div className="flex items-center justify-between h-24 gap-4">
          {/* Left area: Logo + Secondary vertical nav */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to={lang === "pt" ? "/" : `/${lang}/incoming`}
              className="flex items-center"
              aria-label="Create Travel"
            >
              <img
                src={logo}
                alt="Create Travel — balão"
                className="h-20 md:h-24 w-auto object-contain transition-all"
              />
            </Link>

            {/* Secondary nav — PT only, desktop only */}
            {lang === "pt" && (
              <nav className="hidden lg:flex flex-col gap-1">
                {/* Sobre — first, full width */}
                <Link
                  to="/sobre"
                  className={`flex items-center gap-1.5 text-xs font-semibold tracking-wide transition-colors hover:text-gold ${
                    isScrolled
                      ? "text-foreground/80"
                      : "text-primary-foreground/90"
                  } ${
                    location.pathname.startsWith("/sobre") ? "text-gold" : ""
                  }`}
                >
                  <Info size={14} />
                  <span>{t("nav.sobre")}</span>
                </Link>
                {/* Diário + Contato — same row */}
                <div className="flex items-center gap-3">
                  <Link
                    to="/diario"
                    className={`flex items-center gap-1.5 text-xs font-semibold tracking-wide transition-colors hover:text-gold ${
                      isScrolled
                        ? "text-foreground/80"
                        : "text-primary-foreground/90"
                    } ${
                      location.pathname.startsWith("/diario") ? "text-gold" : ""
                    }`}
                  >
                    <BookOpen size={14} />
                    <span>Diário</span>
                  </Link>
                  <Link
                    to="/contato"
                    className={`flex items-center gap-1.5 text-xs font-semibold tracking-wide transition-colors hover:text-gold ${
                      isScrolled
                        ? "text-foreground/80"
                        : "text-primary-foreground/90"
                    } ${
                      location.pathname.startsWith("/contato") ? "text-gold" : ""
                    }`}
                  >
                    <Mail size={14} />
                    <span>{t("nav.contato")}</span>
                  </Link>
                </div>
              </nav>
            )}
          </div>

          {/* Desktop Primary Navigation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
            {primaryNavItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-gold whitespace-nowrap ${
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                } ${
                  location.pathname.startsWith(item.href) ? "text-gold" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Brasil dropdown */}
            {lang === "pt" && (
              <div
                className="relative"
                onMouseEnter={() => setBrasilOpen(true)}
                onMouseLeave={() => setBrasilOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-gold whitespace-nowrap ${
                    isScrolled ? "text-foreground" : "text-primary-foreground"
                  } ${
                    brasilSubItems.some((i) =>
                      location.pathname.startsWith(i.href)
                    )
                      ? "text-gold"
                      : ""
                  }`}
                >
                  <span>Brasil</span>
                  <ChevronDown size={14} />
                </button>
                <AnimatePresence>
                  {brasilOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-2 py-2 px-3 rounded-lg bg-background/95 backdrop-blur-md shadow-lg border border-border min-w-[10rem]"
                    >
                      {brasilSubItems.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          className={`block py-1.5 text-sm font-medium transition-colors hover:text-gold ${
                            location.pathname.startsWith(item.href)
                              ? "text-gold"
                              : "text-foreground"
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* Grupos dropdown */}
            {lang === "pt" && (
              <div
                className="relative"
                onMouseEnter={() => setGruposOpen(true)}
                onMouseLeave={() => setGruposOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-gold whitespace-nowrap ${
                    isScrolled ? "text-foreground" : "text-primary-foreground"
                  } ${
                    gruposSubItems.some((i) =>
                      location.pathname.startsWith(i.href)
                    )
                      ? "text-gold"
                      : ""
                  }`}
                >
                  <span>Grupos</span>
                  <ChevronDown size={14} />
                </button>
                <AnimatePresence>
                  {gruposOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-2 py-2 px-3 rounded-lg bg-background/95 backdrop-blur-md shadow-lg border border-border min-w-[10rem]"
                    >
                      {gruposSubItems.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          className={`block py-1.5 text-sm font-medium transition-colors hover:text-gold ${
                            location.pathname.startsWith(item.href)
                              ? "text-gold"
                              : "text-foreground"
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </nav>

          {/* CTA + Language */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <LanguageSwitcher variant={isScrolled ? "light" : "dark"} />
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent flex items-center gap-2 text-sm px-4 py-2.5"
            >
              <MessageCircle size={16} />
              <span>{ctaLabel}</span>
            </a>
          </div>

          {/* Mobile actions */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageSwitcher variant={isScrolled ? "light" : "dark"} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
              aria-label={
                isOpen ? t("nav.menu_close") : t("nav.menu_open")
              }
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border"
          >
            <nav className="container-editorial py-6 flex flex-col gap-4">
              {allNavItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-base font-medium py-2 transition-colors hover:text-gold ${
                    location.pathname.startsWith(item.href)
                      ? "text-gold"
                      : "text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent mt-4 justify-center"
              >
                <MessageCircle size={18} />
                <span>{ctaLabel}</span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
