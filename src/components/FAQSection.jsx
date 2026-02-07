import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

const faqs = [
    {
      question: "¿Cuánto tiempo tarda un proyecto de herrería?",
      answer: "El tiempo de ejecución depende completamente de cada trabajo a realizar. Cada proyecto es único y requiere una evaluación personalizada. Después de revisar los detalles de tu proyecto, te proporcionaremos un cronograma específico con los tiempos estimados de fabricación e instalación."
    },
    {
      question: "¿Ofrecen garantía en sus trabajos?",
      answer: "Sí, todos nuestros trabajos cuentan con garantía de calidad en mano de obra y materiales. Nuestros más de 10 años de experiencia respaldan la durabilidad y calidad de cada proyecto que realizamos."
    },
    {
      question: "¿Qué materiales utilizan?",
      answer: "Trabajamos con acero al carbono, acero inoxidable y hierro negro según las necesidades de cada proyecto. Todos nuestros materiales son seleccionados específicamente para garantizar durabilidad y resistencia en cada aplicación."
    },
    {
      question: "¿Qué tipos de soldadura realizan?",
      answer: "Realizamos soldadura TIG, soldadura con electrodo revestido y soldadura MIG-MAG. Seleccionamos el tipo de soldadura más adecuado según el material, el tipo de proyecto y los requisitos específicos de cada trabajo."
    },
    {
      question: "¿Realizan trabajos fuera de Barcelona?",
      answer: "Sí, realizamos trabajos en Barcelona y alrededores, pero también trabajamos en toda Cataluña. Para proyectos en otras zonas de la comunidad, evaluamos cada caso para coordinar los detalles logísticos."
    },
    {
      question: "¿Cómo puedo solicitar un presupuesto?",
      answer: "Puedes solicitar un presupuesto de forma rápida y sencilla por WhatsApp al +34 613 29 86 77 o por correo electrónico a Infop8w@gmail.com. Envíanos los detalles de tu proyecto y te responderemos con la información que necesites."
    },
    {
      question: "¿Necesito permisos para instalar estructuras metálicas?",
      answer: "Los permisos y documentación técnica son gestionados por el aparejador o las empresas que nos contratan. Nosotros nos enfocamos en la fabricación e instalación profesional de las estructuras metálicas según los requerimientos del proyecto."
    },
    {
      question: "¿Hacen reformas y mantenimiento de estructuras existentes?",
      answer: "Sí, realizamos reformas estructurales, reparaciones y mantenimiento de estructuras metálicas existentes. Desde refuerzos hasta restauración completa, nuestro equipo puede extender la vida útil de tus instalaciones y adaptarlas a nuevas necesidades."
    },
    {
      question: "¿Qué certifica que son profesionales calificados?",
      answer: "Contamos con certificaciones oficiales de COOFERIN en soldadura industrial y de PREVENCIÓN PLUS en formación por oficios. Nuestro equipo está altamente capacitado y cumple con todos los estándares de seguridad y calidad del sector metalúrgico."
    }
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "34613298677";
    const message = "Hola, tengo algunas preguntas sobre sus servicios.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Patrón de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(0,0,0,.03) 50px, rgba(0,0,0,.03) 100px)'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400 rounded-full mb-6">
            <HelpCircle className="w-8 h-8 text-gray-900" />
          </div>
          <p className="text-xs md:text-sm font-bold tracking-widest mb-3 text-gray-600 uppercase">
            ¿Tienes Dudas?
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            PREGUNTAS FRECUENTES
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            Encuentra respuestas a las preguntas más comunes sobre nuestros servicios
          </p>
        </div>

        {/* Acordeón de preguntas */}
        <div className="space-y-4 max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-yellow-400 transition-colors"
            >
              {/* Pregunta */}
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
              >
                <h3 className="text-lg font-bold text-gray-900 pr-4 group-hover:text-yellow-600 transition-colors">
                  {faq.question}
                </h3>
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <ChevronDown className="w-5 h-5 text-gray-900" />
                </div>
              </button>

              {/* Respuesta */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6 pt-0">
                  <div className="border-t-2 border-gray-100 pt-4">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA final */}
        <div className="mt-16 bg-gray-900 p-8 md:p-12 rounded-lg text-center max-w-5xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Aún tienes preguntas?
          </h3>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            Nuestro equipo está listo para ayudarte. Contáctanos y resolveremos todas tus dudas sobre tu proyecto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleWhatsAppClick}
              className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition-colors uppercase tracking-wide"
            >
              Contactar Ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}