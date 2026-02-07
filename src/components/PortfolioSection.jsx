import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function PortfolioSection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array con las imágenes de la carpeta /projects
  const projects = [
    { id: 1, image: "/projects/project1.jpeg", title: "Proyecto 1" },
    { id: 2, image: "/projects/project2.jpeg", title: "Proyecto 2" },
    { id: 3, image: "/projects/project3.jpeg", title: "Proyecto 3" },
    { id: 4, image: "/projects/project4.jpeg", title: "Proyecto 4" },
    { id: 5, image: "/projects/project5.jpeg", title: "Proyecto 5" },
    { id: 6, image: "/projects/project6.jpeg", title: "Proyecto 6" },
    { id: 7, image: "/projects/project7.jpeg", title: "Proyecto 7" },
    { id: 8, image: "/projects/project8.jpeg", title: "Proyecto 8" },
    { id: 9, image: "/projects/project9.jpeg", title: "Proyecto 9" },
    { id: 10, image: "/projects/project10.jpeg", title: "Proyecto 10" }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(projects.length / 4));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(projects.length / 4)) % Math.ceil(projects.length / 4));
  };

  const openLightbox = (project) => {
    setSelectedImage(project);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const currentIndex = projects.findIndex(p => p.id === selectedImage.id);
    const newIndex = direction === "next" 
      ? (currentIndex + 1) % projects.length
      : (currentIndex - 1 + projects.length) % projects.length;
    setSelectedImage(projects[newIndex]);
  };

  return (
    <section className="relative py-16 md:py-24 bg-gray-900 overflow-hidden">
      {/* Patrón de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,.03) 20px, rgba(255,255,255,.03) 40px)'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs md:text-sm font-bold tracking-widest mb-3 text-yellow-400 uppercase">
            Nuestro Trabajo
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            PROYECTOS REALIZADOS
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base">
            Más de 100 proyectos completados con éxito en 10 años de experiencia
          </p>
        </div>

        {/* Carrusel Desktop (4 imágenes) */}
        <div className="hidden md:block relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(projects.length / 4) }).map((_, slideIndex) => (
                <div key={slideIndex} className="min-w-full flex gap-6">
                  {projects.slice(slideIndex * 4, slideIndex * 4 + 4).map((project) => (
                    <div
                      key={project.id}
                      onClick={() => openLightbox(project)}
                      className="w-1/4 group relative overflow-hidden rounded-lg cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                      <div className="relative h-80 bg-gray-800 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => {
                            e.target.src = "https://placehold.co/400x500/1f2937/facc15?text=MEXAN";
                          }}
                        />
                        
                        {/* Overlay hover */}
                        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="text-center text-white">
                            <p className="text-sm uppercase tracking-wider">Ver Proyecto</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Botones de navegación */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-yellow-400 text-gray-900 p-3 rounded-full hover:bg-yellow-300 transition-all shadow-lg z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-yellow-400 text-gray-900 p-3 rounded-full hover:bg-yellow-300 transition-all shadow-lg z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicadores */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(projects.length / 4) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  currentSlide === index ? "w-8 bg-yellow-400" : "w-2 bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Carrusel Mobile (1 imagen) */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-4"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {projects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => openLightbox(project)}
                  className="min-w-full group relative overflow-hidden rounded-lg cursor-pointer shadow-lg"
                >
                  <div className="relative h-96 bg-gray-800 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = "https://placehold.co/400x500/1f2937/facc15?text=MEXAN";
                      }}
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                      <p className="p-6 text-white text-sm uppercase tracking-wider">
                        Toca para ampliar
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botones de navegación mobile */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-yellow-400 text-gray-900 p-2 rounded-full hover:bg-yellow-300 transition-all shadow-lg"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-yellow-400 text-gray-900 p-2 rounded-full hover:bg-yellow-300 transition-all shadow-lg"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Indicadores mobile */}
          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  currentSlide === index ? "w-8 bg-yellow-400" : "w-2 bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 md:p-8">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-yellow-400 transition-colors z-50"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={() => navigateImage("prev")}
            className="absolute left-2 md:left-4 text-white hover:text-yellow-400 transition-colors z-50"
          >
            <ChevronLeft className="w-8 h-8 md:w-12 md:h-12" />
          </button>

          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain"
            />
          </div>

          <button
            onClick={() => navigateImage("next")}
            className="absolute right-2 md:right-4 text-white hover:text-yellow-400 transition-colors z-50"
          >
            <ChevronRight className="w-8 h-8 md:w-12 md:h-12" />
          </button>
        </div>
      )}
    </section>
  );
}