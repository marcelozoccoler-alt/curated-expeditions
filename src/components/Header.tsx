import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { generateWhatsAppLink } from "@/lib/types";
import logo from "@/assets/logo.jpg";

const navItems = [
  { label: "Destinos", href: "/destinos" },
  { label: "Experiências", href: "/experiencias" },
  { label: "Hospedagens", href: "/hospedagens" },
  { label: "Guias", href: "/guias" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const whatsappLink = generateWhatsAppLink({ type: "Geral" });

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-editorial">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" aria-label="Create Travel - Início">
            <img
              src={logo}
              alt="Create Travel"
              className={`h-12 w-12 rounded-full object-cover transition-all ${
                isScrolled ? "" : "ring-2 ring-primary-foreground/30"
              }`}
            />
            <span className={`text-xl font-serif font-semibold transition-colors ${
              isScrolled ? "text-foreground" : "text-primary-foreground"
            }`}>
              Create Travel
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-gold ${
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                } ${location.pathname.startsWith(item.href) ? "text-gold" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent flex items-center gap-2"
            >
              <MessageCircle size={18} />
              <span>Criar roteiro em parceria</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? "text-foreground" : "text-primary-foreground"
            }`}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
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
                <span>Criar roteiro em parceria</span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
