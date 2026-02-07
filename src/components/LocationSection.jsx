import { MapPin, Phone, Clock, Mail } from "lucide-react";

export default function LocationSection() {
  return (
    <section className="relative py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs md:text-sm font-bold tracking-widest mb-3 text-gray-600 uppercase">
            Visítanos
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            NUESTRA UBICACIÓN
          </h2>
        </div>

        {/* Mapa grande */}
        <div className="w-full h-[400px] md:h-[500px] bg-gray-200 overflow-hidden shadow-lg mb-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.7537847748267!2d2.2089!3d41.4521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4bc0c0c0c0c0d%3A0x0!2sCarrer%20Canig%C3%B3%2C%206%2C%20Santa%20Coloma%20de%20Gramenet%2C%20Barcelona!5e0!3m2!1ses!2ses!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación MEXAN"
          ></iframe>
        </div>

        {/* Información de contacto - Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Dirección - Card grande */}
          <div className="bg-yellow-400 p-8 flex items-center gap-6">
            <div className="bg-gray-900 p-4 rounded-lg flex-shrink-0">
              <MapPin className="w-10 h-10 text-yellow-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 uppercase">
                Nuestra Dirección
              </h3>
              <p className="text-gray-800 text-base leading-relaxed">
                Calle Canigó 6, Santa Coloma de Gramenet, Barcelona, España
              </p>
            </div>
          </div>

          {/* Horario - Card */}
          <div className="bg-gray-900 p-6 flex flex-col justify-between">
            <div>
              <Clock className="w-8 h-8 text-yellow-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-4 uppercase">
                Horario de Atención
              </h3>
              <div className="space-y-3 text-gray-300 text-sm">
                <div className="flex justify-between items-center">
                  <span>Lunes - Viernes</span>
                  <span className="font-bold text-white">8:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Sábados</span>
                  <span className="font-bold text-white">9:00 - 14:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Domingos</span>
                  <span className="font-bold text-white">Cerrado</span>
                </div>
              </div>
            </div>
          </div>

          {/* Teléfono y Correo - Ocupan todo el ancho */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Teléfono */}
            <div className="bg-gray-100 p-6 border-2 border-gray-200 hover:border-yellow-400 transition-colors flex items-center gap-6">
              <div className="bg-yellow-400 p-4 rounded-lg flex-shrink-0">
                <Phone className="w-8 h-8 text-gray-900" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 uppercase">
                  Teléfono de Contacto
                </h3>
                <a href="tel:+34613298677" className="text-gray-700 hover:text-yellow-600 transition-colors text-lg font-semibold">
                  +34 613 29 86 77
                </a>
              </div>
            </div>

            {/* Correo Electrónico */}
            <div className="bg-gray-100 p-6 border-2 border-gray-200 hover:border-yellow-400 transition-colors flex items-center gap-6">
              <div className="bg-yellow-400 p-4 rounded-lg flex-shrink-0">
                <Mail className="w-8 h-8 text-gray-900" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 uppercase">
                  Correo Electrónico
                </h3>
                <a href="mailto:Infop8w@gmail.com" className="text-gray-700 hover:text-yellow-600 transition-colors text-lg font-semibold break-all">
                  Infop8w@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}