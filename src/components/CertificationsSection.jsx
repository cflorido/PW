import { Award, Shield, CheckCircle } from "lucide-react";

export default function CertificationsSection() {
  return (
    <section className="relative py-12 md:py-16 bg-gray-900 overflow-hidden">
      {/* Patrón de fondo sutil */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,.03) 20px, rgba(255,255,255,.03) 40px)'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs md:text-sm font-bold tracking-widest mb-3 text-yellow-400 uppercase">
            Calidad Certificada
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            NUESTRAS CERTIFICACIONES
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base">
            Respaldados por instituciones reconocidas que garantizan la excelencia en cada proyecto
          </p>
        </div>

        {/* Grid de certificados */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Certificado 1 - COOFERIN */}
          <div className="group relative bg-gradient-to-br from-yellow-400 to-yellow-500 p-8 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
            {/* Efecto de brillo */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
            
            <div className="relative">
              <div className="flex items-start justify-between mb-6">
                <div className="bg-gray-900 p-4 rounded-lg">
                  <Award className="w-10 h-10 text-yellow-400" />
                </div>
                <Shield className="w-16 h-16 text-gray-900/20" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3 uppercase">
                Certificado de Ensayo
              </h3>
              <p className="text-gray-800 font-semibold mb-4 text-lg">
                Cualificación del Soldador
              </p>
              <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                Certificación oficial que avala nuestras capacidades técnicas en procesos de soldadura industrial, garantizando estándares de calidad internacional.
              </p>

              <div className="flex items-center gap-2 text-gray-900">
                <span className="text-sm font-bold uppercase tracking-wider">Otorgado por</span>
                <div className="h-px flex-1 bg-gray-900/30" />
              </div>
              <p className="text-xl font-bold text-gray-900 mt-2">COOFERIN</p>
            </div>
          </div>

          {/* Certificado 2 - PREVENCIÓN PLUS */}
          <div className="group relative bg-white border-4 border-yellow-400 p-8 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
            {/* Efecto de brillo */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
            
            <div className="relative">
              <div className="flex items-start justify-between mb-6">
                <div className="bg-yellow-400 p-4 rounded-lg">
                  <Award className="w-10 h-10 text-gray-900" />
                </div>
                <Shield className="w-16 h-16 text-yellow-400/20" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3 uppercase">
                Certificado de Formación
              </h3>
              <p className="text-gray-700 font-semibold mb-4 text-lg">
                Formación por Oficios
              </p>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="text-xs uppercase tracking-wider text-gray-600 font-bold mb-3">
                  Especialidades Certificadas:
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span>Instalaciones y Reparaciones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span>Montajes y Estructuras Metálicas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span>Cerrajería y Carpintería Metálica</span>
                  </li>
                </ul>
              </div>

              <div className="flex items-center gap-2 text-gray-900">
                <span className="text-sm font-bold uppercase tracking-wider">Otorgado por</span>
                <div className="h-px flex-1 bg-gray-900/30" />
              </div>
              <p className="text-xl font-bold text-gray-900 mt-2">PREVENCIÓN PLUS S.L.</p>
            </div>
          </div>
        </div>

        {/* Badge de confianza */}
        <div className="bg-yellow-400/10 border-2 border-yellow-400/30 rounded-lg p-6 text-center">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Shield className="w-8 h-8 text-yellow-400" />
            <p className="text-white text-sm md:text-base">
              <span className="font-bold text-yellow-400">Más de 10 años</span> de experiencia respaldada por certificaciones oficiales que garantizan la máxima calidad en cada proyecto
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}