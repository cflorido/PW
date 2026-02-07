export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "HERRERÍA",
      description: "Fabricación de puertas, ventanas, rejas, barandales y estructuras ornamentales con acabados de calidad.",
      image: "/x1.jpeg"
    },
    {
      id: 2,
      title: "ESTRUCTURAS METÁLICAS",
      description: "Diseño y construcción de estructuras metálicas para edificios, naves industriales y proyectos comerciales.",
      image: "/x2.jpeg"
    },
    {
      id: 3,
      title: "CARPINTERÍA METÁLICA",
      description: "Fabricamos elementos metálicos personalizados con precisión para proyectos industriales y comerciales.",
      image: "/x3.jpeg"
    },
    {
      id: 4,
      title: "TUBERÍA INDUSTRIAL",
      description: "Instalación y mantenimiento de sistemas de tubería para aplicaciones industriales con altos estándares de calidad.",
      image: "/x4.jpeg"
    }
  ];

  return (
    // Contenedor externo con fondo que ocupa todo el ancho
    <section className="relative w-full py-16 md:py-24 overflow-hidden bg-yellow-400 lg:bg-gradient-to-b lg:from-yellow-400 lg:from-60% lg:to-white lg:to-60%">
      {/* Contenedor interno con márgenes para el contenido */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs md:text-sm font-bold tracking-widest mb-3 text-gray-800 uppercase">
            Lo que ofrecemos
          </p>
          <h2 className="text-2xl md:text-4xl font-bold leading-tight text-gray-900">
            PROCESAMOS ACERO CON<br />
            MÁS DE 10 años DE EXPERIENCIA
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-gray-200">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="bg-transparent py-6">
                <h3 className="text-base font-bold mb-3 tracking-wide text-gray-900 uppercase">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-800 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}