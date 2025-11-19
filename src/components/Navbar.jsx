import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";

// --- Configuration Data (Kept the same) ---
const navItems = [
  {
    name: "services",
    to: "/services", 
    dropdown: [
      {
        name: "Technology",
        subItems: [
          { label: "Application Service", to: "/application-services" },
          { label: "Automation", to: "/automation" },
          { label: "Aiml", to: "/cognitive-service" },
          { label: "Data & Business Intelligence (BI)", to: "/data-bi" },
          { label: "Enterprise Platforms", to: "/enterprise-platforms" },
          { label: "Software Engineering", to: "/software-engineering" }
        ]
      },
      {
        name: "Business Process Management",
        subItems: [
          { label: "Mortgage Services", to: "/business-process-management/mortgage-services" },
          { label: "Title Production Services", to: "/business-process-management/title-production-services" },
          { label: "Tax Servicing", to: "/business-process-management/tax-servicing" },
          { label: "Life of Loan Tax Servicing", to: "/business-process-management/life-of-loan-tax-servicing" },
          { label: "Appraisal Services", to: "/business-process-management/appraisal-services" }
        ]
      }
    ]
  },
  { name: "industries", to: "/industries", dropdown: [] },
  { name: "products", to: "/products", dropdown: [] },
  { name: "portfolio", to: "/portfolio", dropdown: [] },
  { name: "about", to: "/about", dropdown: [] }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeNestedDropdown, setActiveNestedDropdown] = useState(null);
  const location = useLocation();
  const dropdownRef = useRef(null);

  // Close dropdown on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setActiveNestedDropdown(null);
  }, [location]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
        setActiveNestedDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = useCallback((itemName) => {
    setActiveDropdown(prev => (prev === itemName ? null : itemName));
    setActiveNestedDropdown(null); // Reset nested when main toggles
  }, []);

  const toggleNestedDropdown = useCallback((itemName) => {
    setActiveNestedDropdown(prev => (prev === itemName ? null : itemName));
  }, []);

  return (
    <>
      <nav className={`fixed top-4 left-4 right-4 z-50 mx-auto max-w-7xl transition-all duration-300 ${scrolled ? "top-2" : "top-4"}`} ref={dropdownRef}>
        <div className={`relative backdrop-blur-xl bg-gradient-to-r from-black/90 via-gray-900/85 to-black/90 border rounded-full shadow-2xl transition-all duration-300 ${scrolled ? "border-orange-500/40 shadow-orange-500/20" : "border-gray-800"}`}>
          {/* This hover effect provides the subtle glow behind the nav bar, keeping it for cool design */}
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
                >
                  {item.dropdown.length === 0 ? (
                    <Link
                      to={`/${item.name}`}
                      className="relative px-5 py-2 text-white text-[15px] font-medium rounded-full flex items-center hover:text-orange-400 transition-colors overflow-hidden group"
                      style={{ animation: `fadeInDown 0.5s ease-out ${idx * 0.08}s both` }}
                    >
                      <span className="relative z-10">{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</span>
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={() => toggleDropdown(item.name)}
                      className={`relative px-5 py-2 text-white bg-slate-900 text-[15px] font-medium rounded-full flex items-center hover:text-orange-400 transition-colors overflow-hidden focus:outline-none group
                        ${activeDropdown === item.name ? 'text-orange-400' : ''}
                      `}
                      style={{ animation: `fadeInDown 0.5s ease-out ${idx * 0.08}s both` }}
                    >
                      <span className="relative z-10">{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</span>
                      <svg
                        className={`w-4 h-4 ml-1 transition-transform duration-300 ${activeDropdown === item.name ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}

                  {/* Dropdown for Services */}
                  {item.name === "services" && activeDropdown === "services" && (
                    // Main Dropdown Container (Dark Background, Orange Border)
                    <div className="absolute top-full left-0 mt-2 w-72 text-white bg-slate-900 border border-orange-500/30 rounded-2xl shadow-xl shadow-black/50 overflow-visible z-50 animate-fadeIn">
                      <div className="p-2">
                        {item.dropdown.map((dropItem) => (
                          // Main Dropdown Item (Technology, Business Process Management)
                          <div key={dropItem.name} className="relative group/nested">
                            {dropItem.subItems.length === 0 ? (
                              <Link
                                to={`/${dropItem.name.toLowerCase().replace(/\s+/g, '-')}`}
                                // **Standardized Dropdown Link Style**
                                className="block px-4 py-3  bg-slate-900 text-sm font-medium hover:bg-orange-600/20 hover:text-white rounded-xl transition duration-200 hover:translate-x-1"
                                onClick={() => setActiveDropdown(null)}
                                style={{ animation: `slideInRight 0.28s cubic-bezier(0.42, 0, 0.58, 1) both` }}
                              >
                                <span>{dropItem.name}</span>
                              </Link>
                            ) : (
                              <>
                                <button
                                  type="button"
                                  onClick={() => toggleNestedDropdown(dropItem.name)}
                                  // **Standardized Dropdown Button Style**
                                  className="block px-4 py-3  bg-slate-900 text-sm font-medium hover:bg-orange-600/20 hover:text-white rounded-xl transition duration-200 hover:translate-x-1 flex items-center justify-between w-full text-left"
                                >
                                  <span>{dropItem.name}</span>
                                  <svg
                                    className={`w-4 h-4 text-orange-400 transition-transform duration-300 ${activeNestedDropdown === dropItem.name ? "rotate-90" : ""}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </button>

                                {/* Nested Dropdown */}
                                {activeNestedDropdown === dropItem.name && (
                                  // Nested Dropdown Container (Slightly Darker Background)
                                  <div className="absolute left-full top-0 ml-2 w-72 bg-slate-800 border border-orange-500/30 rounded-2xl shadow-lg shadow-black/50 overflow-hidden z-50 animate-fadeInLeft">
                                    <div className="p-2">
                                      {dropItem.subItems.map((subItem) => (
                                        <Link
                                          key={subItem.label}
                                          to={subItem.to}
                                          // **Standardized Nested Link Style**
                                          className="block px-4 py-3 text-gray-200 text-sm hover:bg-orange-600/20 hover:text-white rounded-xl transition duration-200 hover:translate-x-1"
                                          onClick={() => {
                                            setActiveDropdown(null);
                                            setActiveNestedDropdown(null);
                                          }}
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
                  <span className={`block h-0.5  transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
                  <span className={`block h-0.5  transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
                  <span className={`block h-0.5  transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </div>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu (Simplified/Drawer) */}
        {isOpen && (
             <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-slate-900 border border-gray-800 rounded-lg shadow-xl p-4">
                {navItems.map((item) => (
                    <div key={item.name} className="py-2 border-b border-gray-700 last:border-b-0">
                        {item.dropdown.length === 0 ? (
                            <Link to={`/${item.name}`} className="block text-white hover:text-orange-400" onClick={() => setIsOpen(false)}>
                                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                            </Link>
                        ) : (
                            // Simple mobile dropdown for demonstration
                            <div>
                                <button 
                                  className="w-full text-left text-orange hover:text-orange-400 flex justify-between items-center" 
                                  onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                                >
                                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                                    <svg className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                </button>
                                {activeDropdown === item.name && (
                                    <div className="ml-4 mt-2 space-y-1">
                                        {item.dropdown.map((dropItem) => (
                                            <div key={dropItem.name} className="border-l border-orange-500/50 pl-2">
                                                <h4 className="text-orange-400 text-sm mt-1">{dropItem.name}</h4>
                                                {dropItem.subItems.map((subItem) => (
                                                    <Link key={subItem.label} to={subItem.to} className="block text-gray-400 text-xs hover:text-orange-400 py-1" onClick={() => setIsOpen(false)}>{subItem.label}</Link>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        )}
      </nav>

      {/* Custom animations */}
      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-10px);}
          to   { opacity: 1; transform: translateY(0);}
        }  
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(-20px);}
          to   { opacity: 1; transform: translateX(0);}
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(16px);}
          to   { opacity: 1; transform: translateY(0);}
        }
        .animate-fadeIn { animation: fadeIn 0.38s cubic-bezier(0.45,0.07,0.52,1) both;}
        @keyframes fadeInLeft {
            from { opacity: 0; transform: translateX(10px);}
            to   { opacity: 1; transform: translateX(0);}
        }
        .animate-fadeInLeft { animation: fadeInLeft 0.2s ease-out both;}
      `}</style>
    </>
  );
};

export default Navbar;