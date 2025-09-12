import { Heart, Phone, Mail, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-foreground to-primary text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/logo.png" 
                alt="Casa Boa Aviamentos - Logo" 
                className="h-12 w-auto filter brightness-0 invert"
              />
              <h3 className="text-2xl font-bold">Casa Boa Aviamentos</h3>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed max-w-md">
              Detalhes que transformam. Oferecemos qualidade, praticidade e preços acessíveis 
              em aviamentos para costura e confecção desde 2023.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/5516981513366"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a
                href="mailto:casaboaaviamentos@gmail.com"
                className="flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300"
                aria-label="E-mail"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/casaboaaviamentos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Navegação</h4>
            <ul className="space-y-3">
              {[
                { href: "#inicio", label: "Início" },
                { href: "#sobre", label: "Sobre" },
                { href: "#servicos", label: "Serviços" },
                { href: "#contato", label: "Contato" }
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="text-white/70 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <Phone className="h-4 w-4 mt-0.5 text-white/70 flex-shrink-0" />
                <span className="text-white/80">(16) 98151-3366</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-4 w-4 mt-0.5 text-white/70 flex-shrink-0" />
                <span className="text-white/80">casaboaaviamentos@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Instagram className="h-4 w-4 mt-0.5 text-white/70 flex-shrink-0" />
                <span className="text-white/80">@casaboaaviamentos</span>
              </li>
            </ul>
            
            <div className="mt-6 p-4 bg-white/10 rounded-lg">
              <h5 className="font-semibold mb-2 text-sm">Horário de funcionamento</h5>
              <p className="text-xs text-white/80 leading-relaxed">
                Segunda a sexta<br />
                7:30 às 12:00<br />
                13:30 às 17:30
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-white/70">
              <span>© {currentYear} Casa Boa Aviamentos. Todos os direitos reservados.</span>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-white/70">
              <span>Feito com</span>
              <Heart className="h-4 w-4 text-red-400" />
              <span>para nossos clientes</span>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-xs text-white/60">
              <strong>CNPJ:</strong> 57.916.610/0001-57 | 
              <strong> Site:</strong> www.casaboaaviamentos.com.br
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;