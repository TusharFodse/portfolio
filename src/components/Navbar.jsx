import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#certificate", label: "Certificates" },
    { href: "#contact", label: "Current Work" }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-4 bg-white/95 backdrop-blur-lg shadow-lg"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 text-2xl font-extrabold tracking-wide"
          >
            <Code2 className="h-8 w-8 text-blue-600" />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Tushar
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-lg font-semibold text-slate-700 hover:text-blue-600 transition-all duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

            {/* CTA Button */}
            <a
              href="#contact"
              className="ml-6 px-6 py-2.5 text-white bg-blue-600 rounded-xl shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
            >
              Work with me
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 rounded-xl text-slate-700 hover:bg-slate-100 transition"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-7 w-7" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-[500px] opacity-100 py-6"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col gap-4 pt-6">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-semibold text-slate-700 hover:text-blue-600 px-4 py-3 rounded-lg hover:bg-blue-50 transition"
              >
                {item.label}
              </a>
            ))}

            {/* Mobile CTA */}
            <a
              href="#contact"
              className="mx-4 mt-4 text-center px-6 py-3 text-white bg-blue-600 rounded-xl shadow-md"
            >
              Work with me
            </a> 
          </div>
        </div>
      </div>
    </nav>
  );
};