import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/2349010036051"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Confianza Tech on WhatsApp"
      className="whatsapp-btn group"
    >
      <MessageCircle size={24} />
    </a>
  );
}
