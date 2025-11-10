import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeNestedDropdown, setActiveNestedDropdown] = useState(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false); // Close mobile menu on route change
    setActiveDropdown(null);
    setActiveNestedDropdown(null);
    setActiveMobileDropdown(null);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      name: "services",
      dropdown: [
        {
          name: "Technology",
          subItems: [
            { label: "Application Service", to: "/application-services" },
            { label: "Automation", to: "/automation" },
            { label: "Cognitive Service (AI/ML)", to: "/cognitive-service" },
            { label: "Data & Business Intelligence (BI)", to: "/data-bi" },
            { label: "Enterprise Platforms", to: "/enterprise-platforms" },
            { label: "Software Engineering", to: "/software-engineering" }
          ]
        },
        { name: "Business Process Management", subItems: [] }
      ]
    },
    { name: "industries", dropdown: [] },
    { name: "products", dropdown: [] },
    { name: "portfolio", dropdown: [] },
    { name: "about", dropdown: [] }
  ];

  const handleMouseEnter = (itemName) => setActiveDropdown(itemName);
  const handleMouseLeave = () => {
    setActiveDropdown(null);
    setActiveNestedDropdown(null);
  };
  const handleNestedMouseEnter = (itemName) => setActiveNestedDropdown(itemName);

  return (
    <>
      <nav className={`fixed top-4 left-4 right-4 z-50 mx-auto max-w-7xl transition-all duration-300 ${scrolled ? "top-2" : "top-4"}`}>
        <div className={`relative backdrop-blur-xl bg-gradient-to-r from-black/90 via-gray-900/85 to-black/90 border rounded-full shadow-2xl transition-all duration-300 ${scrolled ? "border-orange-500/40 shadow-orange-500/20" : "border-gray-800"}`}>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500/0 via-orange-500/20 to-orange-500/0 opacity-0 hover:opacity-90 transition-opacity duration-500 pointer-events-none" />
          <div className="relative flex items-center justify-between h-20 px-6 md:px-10">
            {/* Brand */}
            <Link to="/" className="flex items-center group z-10">
              <div className="relative">
                <div className="absolute inset-0 bg-orange-500 blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                <img src="/logo.png" alt="Logo" className="relative h-8 w-auto mr-3 transform group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="text-white text-xl font-black tracking-wide select-none">
                Moren<span className="text-orange-500 group-hover:text-orange-400 transition">Consultancies</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-1 items-center">
              {navItems.map((item, idx) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={item.dropdown.length === 0 ? `/${item.name}` : "#"}
                    className="relative px-5 py-2 text-white text-[15px] font-medium rounded-full flex items-center hover:text-orange-400 transition-colors overflow-hidden"
                    style={{
                      animation: `fadeInDown 0.5s ease-out ${idx * 0.08}s both`
                    }}
                  >
                    <span className="relative z-10">{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</span>
                    {item.dropdown.length > 0 && (
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                    <div className="absolute inset-0 bg-orange-500/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full" />
                  </Link>

                  {/* Dropdown */}
                  {item.dropdown.length > 0 && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-72 bg-gradient-to-br from-slate-950 via-gray-900 to-black border border-orange-500/20 rounded-2xl shadow-xl shadow-orange-500/20 overflow-visible z-50">
                      <div className="p-2">
                        {item.dropdown.map((dropItem, dropIdx) => (
                          <div key={dropItem.name}
                            className="relative group/nested"
                            onMouseEnter={() => handleNestedMouseEnter(dropItem.name)}>
                            {dropItem.subItems.length === 0 ? (
                              <Link
                                to={`/${dropItem.name.toLowerCase().replace(/\s+/g, '-')}`}
                                className="block px-4 py-3 text-white text-sm font-medium hover:bg-orange-500/10 rounded-xl transition duration-200 hover:translate-x-1"
                                style={{ animation: `slideInRight 0.28s cubic-bezier(0.42, 0, 0.58, 1) both` }}
                              >
                                <span>{dropItem.name}</span>
                              </Link>
                            ) : (
                              <>
                                <button
                                  type="button"
                                  className="block px-4 py-3 text-white text-sm font-medium hover:bg-orange-500/10 rounded-xl transition duration-200 hover:translate-x-1 flex items-center justify-between w-full text-left"
                                >
                                  <span>{dropItem.name}</span>
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </button>
                                {/* Nested Dropdown */}
                                {activeNestedDropdown === dropItem.name && (
                                  <div className="absolute left-full top-0 ml-2 w-72 bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-orange-500/20 rounded-2xl shadow-lg shadow-orange-500/20 overflow-hidden z-50"
                                    onMouseEnter={() => handleNestedMouseEnter(dropItem.name)}
                                  >
                                    <div className="p-2">
                                      {dropItem.subItems.map((subItem, subIdx) => (
                                        <Link
                                          key={subItem.label}
                                          to={subItem.to}
                                          className="block px-4 py-3 text-white text-sm hover:bg-orange-500/10 rounded-xl transition duration-200 hover:translate-x-1"
                                        >
                                          {subItem.label}
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Contact & Mobile Hamburger */}
            <div className="flex items-center space-x-3 z-10">
              <Link
                to="/contact"
                className="hidden md:inline-block px-6 py-3 rounded-full bg-gradient-to-r from-orange-600 to-orange-500 text-white font-extrabold shadow-lg hover:shadow-orange-500/30 hover:scale-105 transition-all duration-300"
              >
                Contact
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-white p-2 hover:bg-gray-800/50 rounded-full transition duration-300"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-5 flex flex-col justify-between">
                  <span className={`block h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
                  <span className={`block h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
                  <span className={`block h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Custom animations */}
      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-10px);}
          to   { opacity: 1; transform: translateY(0);}
        }  
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(-20px);}
          to   { opacity: 1; transform: translateX(0);}
        }
      `}</style>
    </>
  );
};

export default Navbar;
