import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X, MessageCircle, Compass } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { generateWhatsAppLink } from "@/lib/types";
import { generateIncomingWhatsAppLink } from "@/lib/whatsappI18n";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { PortfolioExplorer } from "@/components/PortfolioExplorer";
import { useLang } from "@/hooks/useLang";
import logo from "@/assets/logo.jpg";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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

  // For PT keep existing nav; for foreign languages, point everything at
  // the Incoming landing page (the only fully translated page so far) and
  // keep PT links available as fallback to the rest of the site.
  const navItems =
    lang === "pt"
      ? [
          { label: t("nav.destinos"), href: "/destinos" },
          { label: t("nav.experiencias"), href: "/experiencias" },
          { label: "Brasil Vivo", href: "/brasil-vivo" },
          { label: "Brasil Aventura", href: "/brasil-aventura" },
          { label: "Embarque com a Create", href: "/embarque-com-a-create" },
          { label: "Crie seu grupo", href: "/crie-seu-grupo" },
          { label: "Diário", href: "/diario" },
          { label: t("nav.sobre"), href: "/sobre" },
          { label: t("nav.contato"), href: "/contato" },
        ]
      : [
          { label: t("nav.incoming"), href: `/${lang}/incoming` },
          { label: "Brasil Vivo", href: `/${lang}/brasil-vivo` },
          { label: "Brasil Aventura", href: `/${lang}/brasil-aventura` },
          { label: "Crie seu grupo", href: `/${lang}/crie-seu-grupo` },
          { label: t("nav.destinos"), href: "/brasil" },
          { label: t("nav.sobre"), href: "/sobre" },
        ];

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
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link
            to={lang === "pt" ? "/" : `/${lang}/incoming`}
            className="flex items-center gap-3"
            aria-label="Create Travel"
          >
            <img
              src={logo}
              alt="Create Travel — balão"
              className="h-20 md:h-24 w-auto object-contain transition-all"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-gold ${
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                } ${
                  location.pathname.startsWith(item.href) ? "text-gold" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Language */}
          <div className="hidden lg:flex items-center gap-5">
            {lang === "pt" && (
              <PortfolioExplorer
                trigger={
                  <button
                    type="button"
                    className={`text-sm font-medium flex items-center gap-1.5 transition-colors hover:text-gold ${
                      isScrolled ? "text-foreground" : "text-primary-foreground"
                    }`}
                    aria-label="Explorar portfólio completo"
                  >
                    <Compass size={16} />
                    <span>Explorar</span>
                  </button>
                }
              />
            )}
            <LanguageSwitcher variant={isScrolled ? "light" : "dark"} />
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent flex items-center gap-2"
            >
              <MessageCircle size={18} />
              <span>{ctaLabel}</span>
            </a>
          </div>

          {/* Mobile actions */}
          <div className="lg:hidden flex items-center gap-2">
            {lang === "pt" && (
              <PortfolioExplorer
                trigger={
                  <button
                    type="button"
                    className={`p-2 transition-colors ${
                      isScrolled ? "text-foreground" : "text-primary-foreground"
                    }`}
                    aria-label="Explorar portfólio"
                  >
                    <Compass size={22} />
                  </button>
                }
              />
            )}
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
              {navItems.map((item) => (
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
