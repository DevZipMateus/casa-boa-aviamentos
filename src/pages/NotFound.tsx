import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-4">Página não encontrada</h2>
          <p className="text-muted-foreground mb-8">
            A página que você está procurando não existe ou foi movida.
          </p>
        </div>
        
        <div className="space-y-4">
          <Button 
            onClick={() => window.location.href = '/'}
            className="btn-hero rounded-full px-6 w-full"
          >
            Voltar ao início
          </Button>
          
          <Button 
            variant="outline"
            onClick={() => window.open('https://wa.me/5516981513366', '_blank')}
            className="btn-outline-hero rounded-full px-6 w-full"
          >
            Entrar em contato
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
