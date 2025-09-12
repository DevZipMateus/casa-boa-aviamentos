import { CheckCircle, Users, Clock, Shield } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Ética",
      description: "Transparência e honestidade em todas as nossas relações comerciais"
    },
    {
      icon: CheckCircle,
      title: "Qualidade",
      description: "Produtos selecionados com rigor para garantir excelência"
    },
    {
      icon: Users,
      title: "Proximidade",
      description: "Atendimento humanizado e relacionamento próximo aos clientes"
    },
    {
      icon: Clock,
      title: "Compromisso",
      description: "Pontualidade na entrega e confiabilidade em cada serviço"
    }
  ];

  return (
    <section id="sobre" className="py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Sobre a Casa Boa Aviamentos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Uma história construída com dedicação, qualidade e proximidade aos nossos clientes
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="slide-in-up">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-2 inline-block mb-6">
              <div className="bg-white rounded-xl p-4">
                <h3 className="text-2xl font-bold text-primary mb-4">Nossa história</h3>
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              A Casa Boa Aviamentos nasceu em <strong className="text-primary">2023</strong>, com o propósito 
              de oferecer qualidade, praticidade e preços acessíveis em aviamentos para costura e confecção.
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Desde o início, a ideia foi criar uma empresa próxima dos clientes, unindo variedade de produtos 
              a um atendimento humanizado e confiável.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Mesmo sendo recente, a Casa Boa Aviamentos já conquistou espaço por sua dedicação em atender 
              tanto pequenos ateliês quanto grandes confecções, sempre prezando pela entrega rápida e pelo 
              cuidado em cada detalhe.
            </p>

            <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-6 text-white">
              <h4 className="text-xl font-semibold mb-3">Nossa essência</h4>
              <p className="text-white/90 leading-relaxed">
                A marca carrega no nome a essência do que representa: <strong>"Casa"</strong>, 
                um lugar de confiança, e <strong>"Boa"</strong>, sinônimo de qualidade e segurança.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="scale-in">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center lg:text-left">
              Nossos valores
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="service-card text-center hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mb-4 mx-auto">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Mission, Vision */}
            <div className="mt-12 space-y-6">
              <div className="bg-secondary/30 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-primary mb-3">Missão</h4>
                <p className="text-foreground leading-relaxed">
                  Atender costureiros, ateliês e confecções com excelência, oferecendo confiança, 
                  agilidade e praticidade.
                </p>
              </div>
              <div className="bg-accent/20 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-accent-foreground mb-3">Visão</h4>
                <p className="text-foreground leading-relaxed">
                  Ser referência regional em fornecimento de aviamentos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;