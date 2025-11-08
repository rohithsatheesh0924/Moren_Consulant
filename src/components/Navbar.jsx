import React from "react";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 w-full z-50 bg-black border-b border-gray-800">
    <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-4 md:px-8">
      {/* Logo + Brand */}
      <a href="/" className="flex items-center">
        <img
          src="/logo.png"
          alt="Company Logo"
          className="h-8 w-auto mr-3"
        />
        <span className="text-white text-xl font-black tracking-wide">
          Moren<span className="text-orange-500">Consultancies</span>
        </span>
      </a>
      {/* Desktop Nav Links */}
      <div className="hidden md:flex space-x-6 items-center">
        <a href="#services" className="text-white text-base font-medium hover:text-orange-500 transition">Services</a>
        <a href="#industries" className="text-white text-base font-medium hover:text-orange-500 transition">Industries</a>
        <a href="#products" className="text-white text-base font-medium hover:text-orange-500 transition">Products</a>
        <a href="#portfolio" className="text-white text-base font-medium hover:text-orange-500 transition">Portfolio</a>
        <a href="#about" className="text-white text-base font-medium hover:text-orange-500 transition">About</a>
      </div>
      {/* Right: CTA and Hamburger */}
      <div className="flex items-center space-x-2">
        <a
          href="#contact"
          className="hidden md:inline-block px-5 py-2 rounded-full bg-orange-600 text-white font-bold shadow hover:bg-orange-700 transition"
        >
          Contact
        </a>
        <button className="md:hidden text-white p-2" aria-label="Open menu">
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" viewBox="0 0 24 24">
            <line x1="4" y1="8" x2="20" y2="8" />
            <line x1="4" y1="16" x2="20" y2="16" />
          </svg>
        </button>
      </div>
    </div>
  </nav>
);

export default Navbar;
