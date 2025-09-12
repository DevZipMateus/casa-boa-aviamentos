import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Award } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="hero-gradient pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Content */}
          <div className="fade-in">
            <div className="flex items-center space-x-2 mb-6">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Desde 2023
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Casa Boa Aviamentos
            </h1>
            
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Oferecemos qualidade, praticidade e preços acessíveis em aviamentos para costura e confecção, 
              criando uma ponte de confiança entre sua criatividade e os melhores materiais
            </h2>

            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              <strong className="text-primary font-semibold">"Detalhes que transformam"</strong> - 
              Nossa missão é atender costureiros, ateliês e confecções com excelência, 
              oferecendo confiança, agilidade e praticidade.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                onClick={() => scrollToSection("servicos")}
                variant="hero"
                className="rounded-full px-8 py-3 text-base"
              >
                Nossos serviços
              </Button>
              <Button
                onClick={() => scrollToSection("contato")}
                variant="hero-outline"
                className="rounded-full px-8 py-3 text-base"
              >
                Entrar em contato
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3 mx-auto">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">Atendimento humanizado</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3 mx-auto">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">Qualidade garantida</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3 mx-auto">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">Entrega rápida</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="scale-in lg:pl-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform rotate-3"></div>
              <img
                src={heroImage}
                alt="Casa Boa Aviamentos - Aviamentos para costura e confecção"
                className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;