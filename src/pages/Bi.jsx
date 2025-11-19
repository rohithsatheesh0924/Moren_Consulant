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



export default function Bi() {
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
            Data & {" "}<br/>
            <span
              className="inline-block bg-[#e5462e] text-white rounded-full px-6 py-3 font-black align-middle"
              style={{
                fontSize: "1.45rem",
                letterSpacing: ".02em",
                boxShadow: "0 2px 12px 0 rgba(200,54,20,0.10)",
              }}
            >
             Business Intelligence 
            </span>
            (BI)
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
            src="./Screenshot-2025-11-19-101509.jpg" // Use your actual Data BI image
            alt="Data & Business Intelligence"
            className="w-full h-full object-cover object-center"
            style={{ minHeight: 400, maxHeight: 550 }}
          />
        </div>

        {/* Wider text column */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-14 py-10">
          <h2 className="text-4xl font-montserrat font-semibold text-black text-left mb-0 leading-tight">
            Our Solutions for <span className="text-[#e5462e] font-extrabold">Data & Business Intelligence</span> (BI)
          </h2>
          <p className="text-lg md:text-xl font-bold text-black mb-3 mt-4 text-left">
            Turn Data into Actionable Insights
          </p>
          <p className="text-gray-700 text-base md:text-lg mb-4 text-left">
            Transform raw data into meaningful insights with our Data & BI services.
          </p>
          <ul className="text-black/80 text-base md:text-lg mb-1 space-y-2 text-left">
            <li>
              70% of data initiatives fail without proper analytics strategies.
            </li>
            <li>
              Our clients achieve up to <span className="font-bold">20% increased revenue</span> with BI solutions.
            </li>
          </ul>
        </div>
      </motion.div>
    </section>

      {/* --- SERVICES OFFER--- */}
      <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-12">
          <span className="text-[#e5462e]">Services</span> Offered
        </h3>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Animated Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
            className="flex-shrink-0"
          >
            <img
              src="./image.jpg" // use your actual image file path
              alt="Services Offered"
              className="w-[370px] h-[330px] rounded-2xl shadow-lg object-cover"
            />
          </motion.div>
          {/* Animated Services Grid */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
            className="grid grid-cols-2 grid-rows-2 gap-8 w-[410px]"
          >
            {/* Data Warehousing */}
            <div className="flex flex-col justify-center items-start px-6 py-8 rounded-2xl bg-gray-100 shadow text-left">
              <span className="inline-block mb-3 w-3 h-3 rounded bg-[#e5462e]"></span>
              <span className="font-extrabold text-lg text-black">Data</span>
              <span className="text-black text-lg font-bold"> Warehousing</span>
            </div>
            {/* Data Visualization */}
            <div className="flex flex-col justify-center items-start px-6 py-8 rounded-2xl bg-[#585656] shadow text-left">
              <span className="inline-block mb-3 w-3 h-3 rounded bg-[#e5462e]"></span>
              <span className="font-extrabold text-lg text-white">Data</span>
              <span className="text-white text-lg font-bold"> Visualization</span>
            </div>
            {/* Advanced Analytics */}
            <div className="flex flex-col justify-center items-start px-6 py-8 rounded-2xl bg-[#373535] shadow text-left col-span-2 md:col-span-1">
              <span className="inline-block mb-3 w-3 h-3 rounded bg-[#e5462e]"></span>
              <span className="font-extrabold text-lg text-white">Advanced</span>
              <span className="text-white text-lg font-medium"> Analytics</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

      {/* --- BENEFITS --- */}
     
<section className="w-full py-12 bg-white">
  <div className="max-w-6xl mx-auto">
    <h3 className="text-4xl font-montserrat font-semibold text-center mb-12">
      Benifits <span className="text-[#e5462e] font-extrabold">Impacts</span>
    </h3>
    <motion.div
      className="flex flex-col md:flex-row gap-8 justify-center items-start"
      variants={parentVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div variants={cardVariants} className="flex flex-col w-[260px] rounded-2xl shadow-xl bg-[#585656] text-white font-montserrat font-medium overflow-visible">
        <PixelTransition
          firstContent={
            <img
              src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=60"
              alt="Reduced costs"
              className="object-cover w-full h-full rounded-2xl"
            />
          }
          secondContent={
            <div className="rounded-2xl bg-[#585656]/90 flex flex-col items-center justify-center px-4 pt-10 pb-6 min-h-[130px]">
              <span className="font-extrabold text-lg mb-1 block">Increased
efficiency</span>
              <span className="text-white/95 block text-base text-center">by
30%
</span>
            </div>
          }
          gridSize={12}
          animationStepDuration={0.5}
          style={{ height: 180, width: '100%', marginBottom: -10, borderRadius: "1rem" }}
          pixelColor="#e5462e"
        />
      </motion.div>
      <motion.div variants={cardVariants} className="flex flex-col w-[260px] rounded-2xl shadow-xl bg-[#585656] text-white font-montserrat font-medium overflow-visible">
        <PixelTransition
          firstContent={
            <img
              src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=60"
              alt="Enhanced agility"
              className="object-cover w-full h-full rounded-2xl"
            />
          }
          secondContent={
            <div className="rounded-2xl bg-[#585656]/90 flex flex-col items-center justify-center px-4 pt-10 pb-6 min-h-[130px]">
              <span className="font-extrabold text-lg mb-1 block">Enhanced
reporting
</span>
              <span className="text-white/95 block text-base text-center">capabilities by
40%</span>
            </div>
          }
          gridSize={12}
          animationStepDuration={0.5}
          style={{ height: 180, width: '100%', marginBottom: -10, borderRadius: "1rem" }}
          pixelColor="#e5462e"
        />
      </motion.div>
    </motion.div>
  </div>
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
