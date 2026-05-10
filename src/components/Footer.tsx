import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Instagram, Facebook } from "lucide-react";
import { CONTACT, CONTINENTS } from "@/lib/types";
import logo from "@/assets/logo.jpg";

export const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container-editorial py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Create Travel"
                className="h-12 w-12 rounded-full object-cover bg-white"
              />
              <span className="text-xl font-serif font-semibold">Create Travel</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Curadoria de viagens autênticas, exclusivas e com propósito. 
              Luxo discreto para experiências que transformam.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/createtravel.tur"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-gold transition-colors"
                aria-label="Instagram Create Travel"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/share/1J4E3VRW65/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-gold transition-colors"
                aria-label="Facebook Create Travel"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Destinos */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">
              Destinos
            </h4>
            <ul className="space-y-2">
              {CONTINENTS.map((continent) => (
                <li key={continent.id}>
                  <Link
                    to={`/destinos/${continent.id}`}
                    className="text-sm text-primary-foreground/70 hover:text-gold transition-colors"
                  >
                    {continent.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">
              Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/experiencias"
                  className="text-sm text-primary-foreground/70 hover:text-gold transition-colors"
                >
                  Experiências
                </Link>
              </li>
              <li>
                <Link
                  to="/hospedagens"
                  className="text-sm text-primary-foreground/70 hover:text-gold transition-colors"
                >
                  Hospedagens
                </Link>
              </li>
              <li>
                <Link
                  to="/guias"
                  className="text-sm text-primary-foreground/70 hover:text-gold transition-colors"
                >
                  Guias
                </Link>
              </li>
              <li>
                <Link
                  to="/grupos/marrocos-2026"
                  className="text-sm text-gold hover:text-gold-light transition-colors font-medium"
                >
                  Grupo Marrocos 2026
                </Link>
              <li>
                <Link
                  to="/criar-roteiro"
                  className="text-sm text-primary-foreground/70 hover:text-gold transition-colors"
                >
                  Criar Roteiro
                </Link>
              </li>
              <li>
                <Link
                  to="/sobre"
                  className="text-sm text-primary-foreground/70 hover:text-gold transition-colors"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  to="/contato"
                  className="text-sm text-primary-foreground/70 hover:text-gold transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">
              Contato
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-gold mt-0.5 flex-shrink-0" />
                <a
                  href={`https://wa.me/${CONTACT.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-foreground/70 hover:text-gold transition-colors"
                >
                  {CONTACT.whatsapp}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-gold mt-0.5 flex-shrink-0" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-sm text-primary-foreground/70 hover:text-gold transition-colors"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/70">
                  {CONTACT.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="divider my-12" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/60">
            © {new Date().getFullYear()} Create Travel. Todos os direitos reservados.
          </p>
          <p className="text-xs text-primary-foreground/60">
            CADASTUR: {CONTACT.cadastur}
          </p>
        </div>
      </div>
    </footer>
  );
};
