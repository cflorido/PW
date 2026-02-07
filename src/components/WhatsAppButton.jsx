import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const phoneNumber = "34613298677"; // Formato internacional sin espacios ni símbolos

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("¡Hola! Me gustaría obtener más información sobre sus servicios.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <>
      {/* Botón flotante de WhatsApp */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-full right-0 mb-2 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg whitespace-nowrap animate-fade-in">
            <p className="text-sm font-semibold">¿Necesitas ayuda?</p>
            <p className="text-xs text-gray-300">Chatea con nosotros</p>
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-1 -right-1 bg-gray-700 rounded-full p-0.5 hover:bg-gray-600"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        )}

        {/* Botón principal */}
        <button
          onClick={handleWhatsAppClick}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="group relative bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 animate-bounce-slow"
          aria-label="Contactar por WhatsApp"
        >
          {/* Efecto de pulso */}
          <span className="absolute inset-0 rounded-full bg-green-400 opacity-75 animate-ping" />
          
          {/* Icono de WhatsApp */}
          <MessageCircle className="w-7 h-7 relative z-10" />
          
          {/* Badge de notificación */}
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            1
          </span>
        </button>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }

        .animate-ping {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        @keyframes ping {
          75%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}