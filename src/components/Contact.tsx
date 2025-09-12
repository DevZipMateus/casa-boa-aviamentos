import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(16) 98151-3366",
      link: "https://wa.me/5516981513366"
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "casaboaaviamentos@gmail.com",
      link: "mailto:casaboaaviamentos@gmail.com"
    },
    {
      icon: Instagram,
      title: "Instagram",
      content: "@casaboaaviamentos",
      link: "https://instagram.com/casaboaaviamentos"
    },
    {
      icon: Clock,
      title: "Horário de funcionamento",
      content: "Segunda a sexta: 7:30 às 12:00 e 13:30 às 17:30",
      link: null
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to WhatsApp with pre-filled message
    const message = "Olá! Gostaria de solicitar um orçamento para aviamentos.";
    window.open(`https://wa.me/5516981513366?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 px-4 bg-gradient-to-b from-white to-secondary/20">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Entre em contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para atender você com excelência e ajudar em seus projetos de costura e confecção
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="slide-in-up">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Fale conosco
            </h3>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex-shrink-0">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-1">
                      {info.title}
                    </h4>
                    {info.link ? (
                      <a 
                        href={info.link}
                        className="text-muted-foreground hover:text-primary transition-colors duration-300 leading-relaxed"
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-muted-foreground leading-relaxed">
                        {info.content}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Button 
                variant="hero"
                className="rounded-full py-3"
                onClick={() => window.open('https://wa.me/5516981513366', '_blank')}
              >
                <Phone className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
              <Button 
                variant="hero-outline"
                className="rounded-full py-3"
                onClick={() => window.open('https://instagram.com/casaboaaviamentos', '_blank')}
              >
                <Instagram className="h-4 w-4 mr-2" />
                Instagram
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="scale-in">
            <div className="service-card">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Solicite um orçamento
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nome completo
                    </label>
                    <Input 
                      id="name"
                      type="text" 
                      placeholder="Seu nome"
                      className="rounded-xl"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Telefone
                    </label>
                    <Input 
                      id="phone"
                      type="tel" 
                      placeholder="(00) 00000-0000"
                      className="rounded-xl"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    E-mail
                  </label>
                  <Input 
                    id="email"
                    type="email" 
                    placeholder="seu@email.com"
                    className="rounded-xl"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Assunto
                  </label>
                  <Input 
                    id="subject"
                    type="text" 
                    placeholder="Ex: Orçamento para aviamentos"
                    className="rounded-xl"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensagem
                  </label>
                  <Textarea 
                    id="message"
                    placeholder="Descreva quais aviamentos você precisa..."
                    rows={4}
                    className="rounded-xl resize-none"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  variant="hero"
                  className="w-full rounded-xl py-3 text-base"
                >
                  Enviar mensagem via WhatsApp
                </Button>
                
                <p className="text-sm text-muted-foreground text-center">
                  Sua mensagem será enviada via WhatsApp para agilizar o atendimento
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Company Info */}
        <div className="mt-16 text-center bg-gradient-to-r from-muted/50 to-secondary/50 rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-foreground mb-4">Casa Boa Aviamentos</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
            <p><strong>CNPJ:</strong> 57.916.610/0001-57</p>
            <p><strong>Site:</strong> www.casaboaaviamentos.com.br</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;