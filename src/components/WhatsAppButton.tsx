import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open('https://wa.me/5516981513366', '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleClick}
      className="whatsapp-float group"
      aria-label="Entrar em contato via WhatsApp"
    >
      <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
    </button>
  );
};

export default WhatsAppButton;