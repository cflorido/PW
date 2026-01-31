import { useState } from "react";
import { X, Send, Paperclip, Mail, User, Phone, MessageSquare } from "lucide-react";
import ServicesSection from "./ServicesSection";
import LocationSection from "./LocationSection";
import CertificationsSection from "./CertificationsSection";
import ProcessSection from "./ProcessSection";
import PortfolioSection from "./PortfolioSection";
import FAQSection from "./FAQSection";
import Footer from "./Footer";

export default function LandingPage() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [selectedImages, setSelectedImages] = useState([]);
  const [isSending, setIsSending] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = "34613298677";
    const message = "Hola, me gustaría solicitar una consulta para mi proyecto.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleOpenForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setSelectedImages([]);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageSelect = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + selectedImages.length > 5) {
      alert("Máximo 5 imágenes permitidas");
      return;
    }
    setSelectedImages([...selectedImages, ...files]);
  };

  const removeImage = (index) => {
    setSelectedImages(selectedImages.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    // Crear FormData para enviar con imágenes
    const emailData = new FormData();
    emailData.append('to', 'Infop8w@gmail.com');
    emailData.append('subject', `Nueva Consulta de ${formData.name}`);
    emailData.append('body', `
Nombre: ${formData.name}
Email: ${formData.email}
${formData.phone ? `Teléfono: ${formData.phone}` : ''}

Mensaje:
${formData.message}
    `);

    selectedImages.forEach((image, index) => {
      emailData.append(`image${index}`, image);
    });

    // Aquí simularemos el envío - en producción usarías un servicio como EmailJS o tu backend
    setTimeout(() => {
      // Crear mailto con la información
      const subject = encodeURIComponent(`Nueva Consulta de ${formData.name}`);
      const body = encodeURIComponent(`
Nombre: ${formData.name}
Email: ${formData.email}
${formData.phone ? `Teléfono: ${formData.phone}` : ''}

Mensaje:
${formData.message}

Nota: Las imágenes adjuntas deben enviarse manualmente.
      `);
      
      window.location.href = `mailto:Infop8w@gmail.com?subject=${subject}&body=${body}`;
      
      setIsSending(false);
      alert("Se abrirá tu cliente de correo. Por favor, adjunta manualmente las imágenes si las hay.");
      handleCloseForm();
    }, 1000);
  };

  return (
    <div className="w-full overflow-hidden">
      {/* HERO */}
      <section className="relative h-screen bg-gray-900">
        {/* VIDEO – solo desktop */}
        <video
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
          src="/videointro.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Fondo fallback para móvil */}
        <div className="absolute inset-0 bg-gray-900 md:hidden" />

        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Diagonal amarilla con baja opacidad */}
        <div className="absolute right-0 top-0 h-full w-[35%] bg-yellow-400 opacity-25 clip-diagonal hidden md:block" />

        {/* Contenido */}
        <div className="relative z-10 h-full flex items-center">
          <div className="pl-10 md:pl-20 max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Construimos el Proyecto <br /> que Imaginas
            </h1>

            <p className="text-gray-200 mb-8">
              Más de 10 años transformando acero en estructuras sólidas y confiables. 
              Soluciones profesionales de herrería y carpintería metálica para tu proyecto.
            </p>

            <div className="flex gap-4">
              <button 
                onClick={handleOpenForm}
                className="bg-yellow-400 text-black px-6 py-3 font-semibold hover:bg-yellow-300 transition"
              >
                Solicitar Consulta
              </button>
              
              <button 
                onClick={handleWhatsAppClick}
                className="bg-transparent border-2 border-yellow-400 text-yellow-400 px-6 py-3 font-semibold hover:bg-yellow-400 hover:text-black transition"
              >
                WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FORMULARIO LATERAL */}
      {showForm && (
        <>
          {/* Overlay de fondo */}
          <div 
            className="fixed inset-0 bg-black/50 z-40 transition-opacity"
            onClick={handleCloseForm}
          />
          
          {/* Panel del formulario */}
          <div className="fixed top-0 right-0 h-full w-full md:w-[500px] bg-white shadow-2xl z-50 transform transition-transform overflow-y-auto">
            <div className="p-8">
              {/* Header */}
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Solicitar Consulta</h2>
                  <p className="text-gray-600 text-sm mt-1">Cuéntanos sobre tu proyecto</p>
                </div>
                <button 
                  onClick={handleCloseForm}
                  className="text-gray-400 hover:text-gray-600 transition"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Formulario */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nombre */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-400 focus:outline-none transition"
                    placeholder="Tu nombre"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-400 focus:outline-none transition"
                    placeholder="tu@email.com"
                  />
                </div>

                {/* Teléfono (Opcional) */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Teléfono <span className="text-gray-400 text-xs font-normal">(Opcional)</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-400 focus:outline-none transition"
                    placeholder="+34 600 000 000"
                  />
                </div>

                {/* Mensaje */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <MessageSquare className="w-4 h-4 inline mr-2" />
                    Describe tu Proyecto
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-400 focus:outline-none transition resize-none"
                    placeholder="Cuéntanos qué necesitas..."
                  />
                </div>

                {/* Adjuntar Imágenes */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Paperclip className="w-4 h-4 inline mr-2" />
                    Adjuntar Imágenes <span className="text-gray-400 text-xs font-normal">(Opcional)</span>
                  </label>
                  
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-yellow-400 transition cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleImageSelect}
                      className="hidden"
                      id="image-upload"
                    />
                    <label htmlFor="image-upload" className="cursor-pointer">
                      <Paperclip className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                      <p className="text-sm text-gray-600">
                        Haz clic para seleccionar imágenes
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        Máximo 5 imágenes
                      </p>
                    </label>
                  </div>

                  {/* Preview de imágenes */}
                  {selectedImages.length > 0 && (
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      {selectedImages.map((image, index) => (
                        <div key={index} className="relative group">
                          <img
                            src={URL.createObjectURL(image)}
                            alt={`Preview ${index + 1}`}
                            className="w-full h-24 object-cover rounded-lg"
                          />
                          <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Botón de envío */}
                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full bg-yellow-400 text-black font-bold py-4 rounded-lg hover:bg-yellow-300 transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSending ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar Consulta
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Te responderemos en menos de 24 horas
                </p>
              </form>
            </div>
          </div>
        </>
      )}
      
      <div id="servicios">
        <ServicesSection />
      </div>
      
      <div id="proceso">
        <ProcessSection />
      </div>
      
      <div id="proyectos">
        <PortfolioSection />
      </div>
      
      <div id="certificaciones">
        <CertificationsSection />
      </div>
      
      <div id="ubicacion">
        <LocationSection />
      </div>
      
      <div id="faq">
        <FAQSection />
      </div>
      
      <Footer />
    </div>
  );
}