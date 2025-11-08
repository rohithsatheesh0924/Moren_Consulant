import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["services", "industries", "products", "portfolio", "about"];

  return (
    <>
      <nav
        className={`fixed top-4 left-4 right-4 z-50 mx-auto max-w-7xl transition-all duration-300 ${
          scrolled ? "top-2" : "top-4"
        }`}
      >
        <div
          className={`relative backdrop-blur-xl bg-gradient-to-r from-black/90 via-gray-900/90 to-black/90 border rounded-full shadow-2xl transition-all duration-300 ${
            scrolled ? "border-orange-500/30 shadow-orange-500/20" : "border-gray-800"
          }`}
        >
          {/* Animated gradient border effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500/0 via-orange-500/20 to-orange-500/0 opacity-0 hover:opacity-100 transition-opacity duration-500" />

          <div className="relative flex items-center justify-between h-20 px-6 md:px-10">
            {/* Logo + Brand */}
            <a href="/" className="flex items-center group z-10">
              <div className="relative">
                <div className="absolute inset-0 bg-orange-500 blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                <img
                  src="/logo.png"
                  alt="Company Logo"
                  className="relative h-8 w-auto mr-3 transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-white text-xl font-black tracking-wide">
                Moren<span className="text-orange-500 group-hover:text-orange-400 transition-colors">Consultancies</span>
              </span>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex space-x-1 items-center">
              {navItems.map((item, idx) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="relative px-4 py-2 text-white text-sm font-medium group overflow-hidden rounded-full"
                  style={{
                    animation: `fadeInDown 0.5s ease-out ${idx * 0.1}s both`
                  }}
                >
                  <span className="relative z-10 group-hover:text-orange-400 transition-colors duration-300">
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </span>
                  <div className="absolute inset-0 bg-orange-500/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full" />
                </a>
              ))}
            </div>

            {/* Right: CTA and Hamburger */}
            <div className="flex items-center space-x-3 z-10">
              <a
                href="#contact"
                className="hidden md:inline-block px-6 py-3 rounded-full bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold shadow-lg hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300"
              >
                Contact
              </a>
              
              {/* Hamburger Menu */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-white p-2 hover:bg-gray-800/50 rounded-full transition-colors duration-300"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-5 flex flex-col justify-between">
                  <span
                    className={`block h-0.5 bg-white transition-all duration-300 ${
                      isOpen ? "rotate-45 translate-y-2" : ""
                    }`}
                  />
                  <span
                    className={`block h-0.5 bg-white transition-all duration-300 ${
                      isOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`block h-0.5 bg-white transition-all duration-300 ${
                      isOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        
        {/* Menu Panel */}
        <div
          className={`absolute top-24 left-4 right-4 bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-orange-500/30 rounded-3xl shadow-2xl shadow-orange-500/20 overflow-hidden transition-all duration-500 ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
          }`}
        >
          <div className="p-6 space-y-2">
            {navItems.map((item, idx) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setIsOpen(false)}
                className="block px-6 py-4 text-white text-lg font-medium hover:bg-orange-500/10 rounded-2xl transition-all duration-300 hover:translate-x-2"
                style={{
                  animation: isOpen ? `slideInRight 0.4s ease-out ${idx * 0.1}s both` : "none"
                }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block mt-4 px-6 py-4 text-center rounded-2xl bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold shadow-lg hover:shadow-orange-500/50 transition-all duration-300"
              style={{
                animation: isOpen ? `slideInRight 0.4s ease-out 0.5s both` : "none"
              }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;