import { useState } from 'react';
import './App.css';

const projects = [
  { id: 1, title: 'AI-Powered Dashboard', image: 'https://placehold.co/400x300/007bff/FFFFFF?text=AI+Dashboard' },
  { id: 2, title: 'Power Platform Automation', image: 'https://placehold.co/400x300/28a745/FFFFFF?text=Power+Platform' },
  { id: 3, title: 'React Web App', image: 'https://placehold.co/400x300/6f42c1/FFFFFF?text=React+App' },
];

const testimonials = [
  { id: 1, quote: 'Excelente profesional, entregó un sistema de automatización que superó nuestras expectativas.', author: 'Juan Pérez - CEO Tech Corp', avatar: ' https://placehold.co/64x64?text=JP' },
  { id: 2, quote: 'Su expertise en IA y testing automatizado fue clave para nuestro proyecto.', author: 'María Gómez - CTO InnovateAI', avatar: ' https://placehold.co/64x64?text=MG' },
];

const services = [
  { id: 1, icon: 'code', title: 'Desarrollo Web', description: 'Soluciones web modernas con React, HTML5 y CSS3' },
  { id: 2, icon: 'bolt', title: 'Automatización', description: 'Procesos eficientes con Power Platform y RPA' },
  { id: 3, icon: 'brain', title: 'IA Solutions', description: 'Implementación de modelos de IA y Machine Learning' },
  { id: 4, icon: 'check-circle', title: 'Testing Automático', description: 'Pruebas automatizadas para asegurar calidad' },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <div className="font-sans bg-gray-50">
      {/* Header */}
      <header className="fixed w-full bg-white bg-opacity-90 backdrop-blur-lg z-50">
        <nav className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="#home" className="text-xl font-bold text-blue-600">
                MiPortafolio
              </a>
            </div>
            <div className="hidden sm:flex sm:items-center space-x-8">
              <a href="#portfolio" className="hover:text-blue-600 transition duration-300">Portfolio</a>
              <a href="#about" className="hover:text-blue-600 transition duration-300">Sobre Mí</a>
              <a href="#services" className="hover:text-blue-600 transition duration-300">Servicios</a>
              <a href="#testimonials" className="hover:text-blue-600 transition duration-300">Testimonios</a>
              <a href="#contact" className="hover:text-blue-600 transition duration-300">Contacto</a>
            </div>
            <div className="sm:hidden flex items-center">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-gray-500 hover:text-blue-600 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
          {menuOpen && (
            <div className="sm:hidden flex flex-col space-y-4 py-4 bg-white">
              <a href="#portfolio" className="block px-4 py-2 hover:bg-blue-50">Portfolio</a>
              <a href="#about" className="block px-4 py-2 hover:bg-blue-50">Sobre Mí</a>
              <a href="#services" className="block px-4 py-2 hover:bg-blue-50">Servicios</a>
              <a href="#testimonials" className="block px-4 py-2 hover:bg-blue-50">Testimonios</a>
              <a href="#contact" className="block px-4 py-2 hover:bg-blue-50">Contacto</a>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-32 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <img
            src="/Miportafolio/img/2.png"
            alt="Tu nombre"
            className="w-48 h-48 rounded-full object-cover mx-auto mb-8"
          />
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Soy Julian Gomez,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400">
              Desarrollador Web & Especialista en Automatización
            </span>
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mb-8">
            Creador de soluciones innovadoras con Power Platform, IA y tecnologías web modernas
          </p>
          <a
            href="#contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition duration-300 shadow-md"
          >
            Contrátame
          </a>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Mis Proyectos</h2>
          <div className="grid grid-cols-1  lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <div
                key={project.id}
                className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2"
                  >
                    Ver proyecto
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Sobre Mí</h2>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1">
              <p className="text-gray-700 leading-relaxed mb-6">
                Soy un desarrollador web y especialista en automatización con más de 5 años de experiencia.
                Combino mi expertise en Power Platform, IA Builder de Microsoft y testing automatizado
                para crear soluciones innovadoras.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Además de mi rol como desarrollador, soy profesor universitario y tengo una maestría en
                Inteligencia Artificial. Me apasiona compartir conocimiento y crear sistemas que impulsen
                la eficiencia empresarial.
              </p>
            </div>
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <svg className="w-8 h-8 text-blue-600 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  <h4 className="font-semibold mb-2">Desarrollo Web</h4>
                  <p className="text-sm text-gray-600">React, JavaScript, HTML5, CSS3</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <svg className="w-8 h-8 text-blue-600 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 3h-4v4H5v4h4v4h2v-4h4V7h-4V3zM5 7h4v4H5V7z" />
                  </svg>
                  <h4 className="font-semibold mb-2">Power Platform</h4>
                  <p className="text-sm text-gray-600">Automatización de procesos empresariales</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <svg className="w-8 h-8 text-blue-600 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 1 0-8 0 4 4 0 0 0 8 0zm0 0v1.5a2.5 2.5 0 0 0 5 0V12a9 9 0 1 0-9 9m4.5-1.206a8.959 8.959 0 0 1-4.5 1.207" />
                  </svg>
                  <h4 className="font-semibold mb-2">IA Solutions</h4>
                  <p className="text-sm text-gray-600">Implementación de modelos de Machine Learning</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <svg className="w-8 h-8 text-blue-600 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17l-3-3 3-3m5 6h6M9 17l3-3m-3 3l3 3M5 7h14M5 7l3-3m-3 3l3 3" />
                  </svg>
                  <h4 className="font-semibold mb-2">Testing Automático</h4>
                  <p className="text-sm text-gray-600">Pruebas de software automatizadas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map(service => (
              <div
                key={service.id}
                className="p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                  {service.icon === 'code' && (
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  )}
                  {service.icon === 'bolt' && (
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 3h-4v4H5v4h4v4h2v-4h4V7h-4V3zM5 7h4v4H5V7z" />
                    </svg>
                  )}
                  {service.icon === 'brain' && (
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 1 0-8 0 4 4 0 0 0 8 0zm0 0v1.5a2.5 2.5 0 0 0 5 0V12a9 9 0 1 0-9 9m4.5-1.206a8.959 8.959 0 0 1-4.5 1.207" />
                    </svg>
                  )}
                  {service.icon === 'check-circle' && (
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17l-3-3 3-3m5 6h6M9 17l3-3m-3 3l3 3M5 7h14M5 7l3-3m-3 3l3 3" />
                    </svg>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Testimonios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map(testimonial => (
              <div
                key={testimonial.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">CEO Tech Corp</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Contacto</h2>
          <div className="flex flex-col md:flex-row gap-12">
            <form
              onSubmit={handleSubmit}
              className="flex-1 bg-gray-50 p-8 rounded-lg shadow-md"
            >
              {formSubmitted ? (
                <div className="text-center p-6">
                  <svg className="w-16 h-16 mx-auto text-green-500 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-lg font-semibold text-gray-800">¡Mensaje enviado!</p>
                  <p className="text-gray-600">Me pondré en contacto pronto.</p>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <label className="block text-gray-700 mb-2" htmlFor="name">Nombre</label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-700 mb-2" htmlFor="message">Mensaje</label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                  >
                    Enviar Mensaje
                  </button>
                </>
              )}
            </form>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Redes Sociales</h3>
              <div className="space-y-4">
                <a
                  href=" https://linkedin.com "
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-blue-600 hover:text-blue-800"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c0-2.365 2.365-2.765 4-2.765 1.25 0 2.25.235 2.25 2.765v6.835z" />
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="https://github.com "
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-blue-600 hover:text-blue-800"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.233 1.839 1.233 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.233-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
                <a
                  href="tel:+573123456789"
                  className="flex items-center gap-3 text-blue-600 hover:text-blue-800"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  +57 312 345 6789
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-8">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Julian Gomez. Todos los derechos reservados.</p>
          <div className="mt-4">
            <a href="#home" className="text-white hover:text-blue-300 mx-2">Inicio</a>
            <a href="#portfolio" className="text-white hover:text-blue-300 mx-2">Portfolio</a>
            <a href="#contact" className="text-white hover:text-blue-300 mx-2">Contacto</a>
          </div>
        </div>
      </footer>
    </div>
  );
}