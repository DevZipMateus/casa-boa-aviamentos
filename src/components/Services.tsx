import { Scissors, Palette, Package, Truck, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: "Aviamentos para costura",
      description: "Ampla variedade de linhas, botões, zíperes, elásticos e acessórios para todos os tipos de projetos de costura.",
      features: ["Linhas de qualidade", "Botões variados", "Zíperes resistentes", "Elásticos diversos"]
    },
    {
      icon: Palette,
      title: "Materiais para confecção",
      description: "Produtos especializados para confecções profissionais, atendendo pequenos ateliês e grandes empresas.",
      features: ["Materiais profissionais", "Qualidade garantida", "Variedade de cores", "Preços competitivos"]
    },
    {
      icon: Package,
      title: "Variedade de produtos",
      description: "Estoque diversificado com os melhores produtos do mercado para atender todas as suas necessidades.",
      features: ["Estoque variado", "Produtos selecionados", "Marcas confiáveis", "Sempre disponível"]
    },
    {
      icon: Truck,
      title: "Entrega rápida",
      description: "Compromisso com pontualidade e agilidade para que seus projetos não parem.",
      features: ["Entrega ágil", "Embalagem cuidadosa", "Rastreamento", "Pontualidade"]
    },
    {
      icon: Users,
      title: "Atendimento humanizado",
      description: "Nossa equipe está sempre pronta para ajudar com orientações e suporte personalizado.",
      features: ["Equipe especializada", "Orientação técnica", "Suporte personalizado", "Relacionamento próximo"]
    },
    {
      icon: Star,
      title: "Preços acessíveis",
      description: "Oferecemos qualidade com preços justos para tornar seus projetos mais econômicos.",
      features: ["Preços justos", "Ótimo custo-benefício", "Promoções especiais", "Planos para empresas"]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="servicos" className="py-20 px-4 bg-gradient-to-b from-secondary/30 to-white">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Nossos serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Oferecemos soluções completas em aviamentos para costura e confecção, 
            sempre com foco na qualidade e satisfação do cliente
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card group hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary to-accent rounded-3xl p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Pronto para transformar seus projetos?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar com os melhores aviamentos 
            e atendimento personalizado
          </p>
          <Button 
            onClick={scrollToContact}
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90 hover:text-primary/90 rounded-full px-8 py-3 text-lg font-semibold"
          >
            Solicitar orçamento
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;