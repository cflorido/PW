import { ClipboardList, Ruler, Wrench, CheckCircle2 } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      icon: ClipboardList,
      title: "CONSULTA INICIAL",
      description: "Escuchamos tus necesidades y evaluamos el proyecto en detalle. Visitamos el sitio si es necesario.",
      color: "bg-yellow-400",
      textColor: "text-gray-900"
    },
    {
      number: "02",
      icon: Ruler,
      title: "DISEÑO Y MEDICIÓN",
      description: "Creamos diseños precisos y tomamos medidas exactas. Presentamos propuesta y presupuesto detallado.",
      color: "bg-gray-900",
      textColor: "text-yellow-400"
    },
    {
      number: "03",
      icon: Wrench,
      title: "FABRICACIÓN",
      description: "Procesamos el acero en nuestro taller con maquinaria especializada y control de calidad constante.",
      color: "bg-yellow-400",
      textColor: "text-gray-900"
    },
    {
      number: "04",
      icon: CheckCircle2,
      title: "INSTALACIÓN Y ENTREGA",
      description: "Instalamos el proyecto en tiempo y forma. Verificamos cada detalle hasta tu total satisfacción.",
      color: "bg-gray-900",
      textColor: "text-yellow-400"
    }
  ];

  return (
    <section className="relative pt-0 pb-16 md:pt-0 md:pb-24 bg-white overflow-hidden">
      {/* Patrón de fondo sutil */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(0,0,0,.03) 50px, rgba(0,0,0,.03) 100px)'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-0">
          <p className="text-xs md:text-sm font-bold tracking-widest mb-0 text-gray-600 uppercase">
            Cómo Trabajamos
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-0">
            NUESTRO PROCESO
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            Un método probado que garantiza resultados excepcionales en cada proyecto
          </p>
        </div>

        {/* Timeline Desktop */}
        <div className="hidden md:block relative">
          {/* Línea conectora */}
          <div className="absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-gray-900 to-yellow-400" />
          
          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Círculo en la línea */}
                  <div className="absolute top-32 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-yellow-400 rounded-full border-4 border-white shadow-lg z-10" />
                  
                  {/* Card */}
                  <div className={`${step.color} p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 mt-40`}>
                    <div className="flex flex-col items-center text-center">
                      <div className={`mb-4 ${step.textColor}`}>
                        <Icon className="w-12 h-12" />
                      </div>
                      
                      <span className={`text-5xl font-bold mb-4 opacity-30 ${step.textColor}`}>
                        {step.number}
                      </span>
                      
                      <h3 className={`text-lg font-bold mb-3 ${step.textColor} uppercase tracking-wide`}>
                        {step.title}
                      </h3>
                      
                      <p className={`text-sm leading-relaxed ${step.number === "01" || step.number === "03" ? "text-gray-800" : "text-gray-300"}`}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline Mobile */}
        <div className="md:hidden space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative flex gap-6">
                {/* Línea vertical */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-1 bg-gradient-to-b from-yellow-400 to-gray-900" />
                )}
                
                {/* Número circular */}
                <div className="relative z-10 flex-shrink-0">
                  <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center shadow-lg`}>
                    <span className={`text-lg font-bold ${step.textColor}`}>
                      {step.number}
                    </span>
                  </div>
                </div>
                
                {/* Card */}
                <div className={`flex-1 ${step.color} p-6 rounded-lg shadow-lg`}>
                  <div className={`mb-3 ${step.textColor}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className={`text-base font-bold mb-2 ${step.textColor} uppercase tracking-wide`}>
                    {step.title}
                  </h3>
                  
                  <p className={`text-sm leading-relaxed ${step.number === "01" || step.number === "03" ? "text-gray-800" : "text-gray-300"}`}>
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}