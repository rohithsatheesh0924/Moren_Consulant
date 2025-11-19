import React from "react";
import { motion } from "framer-motion";
import CurvedLoop from "../components/CurvedLoop";
import PixelTransition from '../components/PixelTransition';

const parentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.85, rotate: -5 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
    },
  },
};



export default function Ep() {
  return (
    <main className="font-montserrat bg-[#e5e7eb] w-full">
       <header className="relative w-full h-[400px] md:h-[690px] flex items-center bg-black overflow-hidden">
      {/* Background Image */}
      <img
        src="./LL.webp" // <-- Your actual hero background image
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ zIndex: 0 }}
      />
      {/* Glass Overlay with Animation */}
      <div className="flex flex-col items-start justify-center w-full h-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.42, 0, 0.58, 1] }}
          className="ml-10 max-w-xl bg-black/70 rounded-[40px] shadow-xl backdrop-blur p-8 border border-white/10"
          style={{
            borderRadius: "40px",
          }}
        >
          <h1 className="text-white font-extrabold mb-4 text-xl md:text-3xl tracking-wide leading-tight">
            Enterprise {" "}<br/>
            <span
              className="inline-block bg-[#e5462e] text-white rounded-full px-6 py-3 font-black align-middle"
              style={{
                fontSize: "1.45rem",
                letterSpacing: ".02em",
                boxShadow: "0 2px 12px 0 rgba(200,54,20,0.10)",
              }}
            >
             Platforms
            </span>
          </h1>
        </motion.div>
      </div>
    </header>

      {/* --- OUR SOLLUTION  --- */}
      <section className="w-full bg-white py-14 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.85, ease: [0.42, 0, 0.58, 1] }}
        className="flex flex-col md:flex-row items-stretch max-w-6xl w-full rounded-3xl bg-white shadow-2xl overflow-hidden"
        style={{ minHeight: 340 }}
      >
        {/* Slightly slimmer image column */}
        <div className="md:w-5/12 w-full flex-shrink-0 flex items-stretch">
          <img
            src="./Screenshot-2025-11-19-103405.jpg" // Use your actual Enterprise Platforms image
            alt="Enterprise Platforms"
            className="w-full h-full object-cover object-center"
            style={{ minHeight: 400, maxHeight: 550 }}
          />
        </div>
        
        {/* Wider text column */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-14 py-10">
          <h2 className="text-4xl font-montserrat font-semibold text-black text-left mb-0 leading-tight">
            Our Solutions for <br/><span className="text-[#e5462e] font-extrabold">Enterprise Platforms</span>
          </h2>
          <p className="text-lg md:text-xl font-bold text-black mb-3 mt-4 text-left">
            Empowering Businesses with Scalable Platforms
          </p>
          <p className="text-gray-700 text-base md:text-lg mb-4 text-left">
            Our expertise in ERP, CRM, and enterprise platforms helps streamline operations.
          </p>
          <ul className="text-black/80 text-base md:text-lg mb-1 space-y-2 text-left">
            <li>
              90% of organizations report improved efficiency after ERP implementation.
            </li>
            <li>
              Achieve up to 25% cost savings with optimized platforms.
            </li>
          </ul>
        </div>
      </motion.div>
    </section>
     


      {/* --- LET'S TALK CALLOUT --- */}
    <section className="w-full py-6 bg-white relative">
  <motion.div
    initial={{ opacity: 0, y: 48 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.9, ease: [0.42, 0, 0.58, 1] }}
    className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-xl relative flex items-center min-h-[180px] px-0"
    style={{ background: "transparent" }}
  >
    {/* Background Image Layer */}
    <div className="absolute inset-0 w-full h-full z-0">
      <img
        src="./amazon.webp"
        alt="Connect background"
        className="object-cover w-full h-full"
      />
      {/* Dark gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/10" />
    </div>
    {/* Foreground Content */}
    <div className="relative flex flex-1 flex-col md:flex-row items-center justify-between w-full px-8 py-6 z-10">
      {/* Text */}
      <div className="text-left flex-1">
        <span className="block text-3xl md:text-4xl font-bold text-white mb-2">
          <span className="text-[#e5462e]">Connect</span> <span className="font-light">with us,</span>
        </span>
        <div className="text-white text-lg font-medium mt-2 leading-tight">
          to Think <span className="font-normal">Innovate &amp; Execute</span>
          <br />
          your growth story
        </div>
      </div>
      {/* Button Card */}
      <div className="flex items-center justify-center md:justify-end">
        <a
          href="#contact"
          className="backdrop-blur-md bg-white/80 text-black font-semibold text-lg px-10 py-6 rounded-2xl shadow-2xl transition hover:bg-[#e5462e] hover:text-white"
          style={{
            minWidth: "135px",
            minHeight: "110px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Let&apos;s <br /> Talk
        </a>
      </div>
    </div>
  </motion.div>
</section>

    </main>
  );
}
