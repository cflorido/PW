import { Instagram } from "lucide-react";

const Header = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/logo.png" 
            alt="PW Industrial Logo" 
            className="h-10 w-auto"
          />
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('servicios')}
            className="text-white hover:text-yellow-400 transition font-medium text-sm"
          >
            Servicios
          </button>
          <button 
            onClick={() => scrollToSection('proceso')}
            className="text-white hover:text-yellow-400 transition font-medium text-sm"
          >
            Proceso
          </button>
          <button 
            onClick={() => scrollToSection('proyectos')}
            className="text-white hover:text-yellow-400 transition font-medium text-sm"
          >
            Proyectos
          </button>
          <button 
            onClick={() => scrollToSection('certificaciones')}
            className="text-white hover:text-yellow-400 transition font-medium text-sm"
          >
            Certificaciones
          </button>
          <button 
            onClick={() => scrollToSection('ubicacion')}
            className="text-white hover:text-yellow-400 transition font-medium text-sm"
          >
            Ubicación
          </button>
          <button 
            onClick={() => scrollToSection('faq')}
            className="text-white hover:text-yellow-400 transition font-medium text-sm"
          >
            FAQ
          </button>
        </nav>

        {/* Right side: Instagram + CTA */}
        <div className="hidden md:flex items-center gap-4">
          {/* Instagram */}
          <a 
            href="https://www.instagram.com/pwindustrial?igsh=NmllanVrazE5dW1w&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-400 transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>

        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

      </div>
    </header>
  );
};

export default Header;