import { ArrowDown, ExternalLink, Download, Github, Linkedin, Mail } from 'lucide-react';
import tushar from '../assets/Tushar_clean.jpg';
import resume from '../assets/Tushar Resume (Job).pdf';

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center px-4 py-20 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      
      {/* Professional Soft Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50 -z-10"></div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_2fr] gap-12 md:gap-16 items-center w-full">
        
        {/* Image Section */}
        <div className="order-2 md:order-1 flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full blur-2xl opacity-15"></div>
            <img
              src={tushar}
              alt="Tushar Fodse - AI/ML Developer"
              className="w-48 h-48 sm:w-80 sm:h-80 bg-white rounded-full object-contain border-4 border-white shadow-2xl relative z-10 hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="order-1 md:order-2 text-center md:text-left">
          
          {/* Pre-headline */}
          <p className="text-lg font-medium text-blue-700 mb-2">
            Hello, I'm
          </p>
          
          {/* Name */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-800 mb-4">
            Tushar{" "}
            <span className="bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
              Fodse
            </span>
          </h1>

          {/* Tagline */}
          <div className="h-12 mb-4">
            <h2 className="text-xl sm:text-2xl text-gray-600 font-medium typewriter">
              AI & Machine Learning Developer
            </h2>
          </div>

          {/* Description */}
          <div className="text-gray-600 mb-8 space-y-4">
            <p className="text-lg leading-relaxed">
              I'm an IT student at Datta Meghe College of Engineering, passionately exploring the intersection of{" "}
              <span className="font-semibold text-blue-700">
                Artificial Intelligence
              </span>{" "}
              and{" "}
              <span className="font-semibold text-indigo-700">
                Full-Stack Development
              </span>.
            </p>
            <p className="text-lg leading-relaxed">
              I build intelligent, scalable applications using Python, TensorFlow, and modern web technologies.
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            style={{ cursor: "pointer" }}
          >
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Download size={20} />
              View Resume
              <ExternalLink
                size={16}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </a>

            <a
              href="#about"
              className="group border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-700 font-medium py-3 px-8 rounded-full transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-md"
            >
              Explore My Journey
              <ArrowDown size={16} className="group-hover:animate-bounce" />
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-6 mt-8 pt-6 border-t border-gray-200">
            {[
              { name: "GitHub", href: "https://github.com/TusharFodse", icon: <Github size={24} /> },
              { name: "LinkedIn", href: "https://www.linkedin.com/in/tushar-fodse-093963329/", icon: <Linkedin size={24} /> },
              { name: "Email", href: "mailto:fodse.tushar.it035@gmail.com", icon: <Mail size={24} /> }
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-indigo-700 transition-colors duration-300 text-lg flex items-center gap-2 group"
              >
                <span className="text-xl">{social.icon}</span>
                <span className="hidden sm:inline opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {social.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown size={24} className="text-slate-400" />
      </div>
    </section>
  );
};
