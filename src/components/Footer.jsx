import { MapPin, Phone, Mail, Clock, Instagram, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gray-900 text-white">
      {/* Sección principal del footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Columna 1: Sobre nosotros */}
          <div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-6 uppercase tracking-wide">
              PW Industrial
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Más de 10 años transformando acero en soluciones de calidad. Especializados en herrería, estructuras metálicas y carpintería industrial.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/pwindustrial?igsh=NmllanVrazE5dW1w&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 text-gray-900 p-3 rounded-full hover:bg-yellow-300 transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Columna 2: Servicios */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wide">
              Servicios
            </h4>
            <ul className="space-y-3">
              <li className="text-gray-400 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                Herrería
              </li>
              <li className="text-gray-400 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                Estructuras Metálicas
              </li>
              <li className="text-gray-400 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                Carpintería Metálica
              </li>
              <li className="text-gray-400 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                Tubería Industrial
              </li>
              <li className="text-gray-400 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                Mantenimiento
              </li>
            </ul>
          </div>

          {/* Columna 3: Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wide">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('servicios')}
                  className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                  Servicios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('proyectos')}
                  className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                  Proyectos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('certificaciones')}
                  className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                  Certificaciones
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('faq')}
                  className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                  Preguntas Frecuentes
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('ubicacion')}
                  className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                  Ubicación
                </button>
              </li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wide">
              Contacto
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm leading-relaxed">
                  Calle Canigó 6<br />
                  Santa Coloma de Gramenet<br />
                  Barcelona, España
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <a href="tel:+34613298677" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  +34 613 29 86 77
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <a href="mailto:Infop8w@gmail.com" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm break-all">
                  Infop8w@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm leading-relaxed">
                  Lun - Vie: 8:00 - 18:00<br />
                  Sábados: 9:00 - 14:00
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Línea divisoria */}
      <div className="border-t border-gray-800" />

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} PW Industrial. Todos los derechos reservados.
          </p>
        </div>
      </div>

      {/* Botón volver arriba */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-6 right-6 bg-yellow-400 text-gray-900 p-3 rounded-full hover:bg-yellow-300 transition-all hover:scale-110 shadow-lg"
        aria-label="Volver arriba"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* Patrón decorativo */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400" />
    </footer>
  );
}