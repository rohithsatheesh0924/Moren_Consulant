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



export default function ApplicationServices() {
  return (
    <main className="font-montserrat bg-[#e5e7eb] w-full">
       <header className="relative w-full h-[400px] md:h-[690px] flex items-center bg-black overflow-hidden">
      {/* Background Image */}
      <img
        src="./download.jpeg" // <-- Your actual hero background image
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
            Application{" "}
            <span
              className="inline-block bg-[#e5462e] text-white rounded-full px-6 py-1.5 font-black align-middle"
              style={{
                fontSize: "1.45rem",
                letterSpacing: ".02em",
                boxShadow: "0 2px 12px 0 rgba(200,54,20,0.10)",
              }}
            >
              Services
            </span>
          </h1>
          <p className="text-white/90 text-sm md:text-base font-medium mt-1 leading-relaxed max-w-md">
            Powering efficiency and productivity through <span className="text-orange-200">innovation</span>,
            <span className="text-orange-200"> technology</span> and industry experience.
          </p>
        </motion.div>
<CurvedLoop
  marqueeText="Moren Consultant"
  speed={2}
  className="font-extrabold font-montserrat text-[3rem] sm:text-5xl md:text-6xl lg:text-7xl tracking-wide text-orange-700 drop-shadow-[0_4px_12px_rgba(0,0,0,0.10)]"
  curveAmount={0}
  direction="left"
  interactive={false}
/>

      </div>
    </header>

      {/* --- APPLICATION INTEGRATION --- */}
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
        src="https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?auto=format&fit=crop&w=600&q=80"
        alt="Application Modernization"
        className="w-full h-full object-cover object-center"
        style={{ minHeight: 400, maxHeight: 550 }}
      />
    </div>

    {/* Wider text column */}
    <div className="flex-1 flex flex-col justify-center px-8 md:px-14 py-10">
      <h2 className="text-4xl font-montserrat font-semibold text-black text-left mb-0 leading-tight">
        Application Integration and
      </h2>
      <h2 className="text-4xl font-montserrat font-extrabold text-[#e5462e] mb-3 -mt-2 text-left leading-tight">
        Modernization
      </h2>
      <p className="text-lg md:text-xl font-bold text-black mb-3 text-left">
        Transform Legacy Systems for a Digital-First World
      </p>
      <p className="text-gray-700 text-base md:text-lg mb-4 text-left">
        In today’s rapidly evolving digital landscape, businesses must adapt and modernize their applications to stay competitive. At Stellar Innovations, we help organizations integrate their legacy systems with modern, agile platforms, ensuring seamless digital transformation.
      </p>
      <ul className="text-black/80 text-base md:text-lg mb-1 space-y-2 text-left">
        <li>
          <span className="font-bold">90%</span> of organizations with legacy systems experience inefficiencies that hinder growth.
        </li>
        <li>
          <span className="font-bold">75%</span> of enterprises state that modernized applications improve operational efficiency. Our clients see up to <span className="font-bold">30%</span> cost savings through cloud-based application integration.
        </li>
      </ul>
    </div>
  </motion.div>
</section>

      {/* --- SERVICES INCLUDE GRID --- */}
    <section className="w-full py-16 bg-white">
  <div className="max-w-6xl mx-auto text-center">
    <h3 className="text-3xl md:text-4xl font-bold mb-12">
      Our <span className="text-[#e5462e]">Services</span> Include
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
          src="./soc.webp"
          alt="Cloud Service"
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
        {/* API Integration icon */}
        <div className="flex flex-col justify-center items-start px-6 py-8 rounded-2xl bg-gray-100 shadow text-left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-[#e5462e] mb-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a2 2 0 10-4 0v4a2 2 0 002 2h4" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19v-6m0 6H9m3 0h3" />
          </svg>
          <span className="font-extrabold text-lg text-black">API</span>
          <span className="text-gray-700 text-lg font-medium"> Integration</span>
        </div>
        {/* Cloud Migration icon */}
        <div className="flex flex-col justify-center items-start px-6 py-8 rounded-2xl bg-[#585656] shadow text-left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-[#e5462e] mb-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 010-8 4 4 0 014-4h1" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7v4m0 0v4m0-4h4m-4 0h-4" />
          </svg>
          <span className="font-extrabold text-lg text-white">Cloud</span>
          <span className="text-white text-lg font-medium"> Migration</span>
        </div>
        {/* Microservices Implementation icon */}
        <div className="flex flex-col justify-center items-start px-6 py-8 rounded-2xl bg-[#373535] shadow text-left col-span-2 md:col-span-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-[#e5462e] mb-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3-3 3 3m0 6l-3 3-3-3" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v16h16V4H4z" />
          </svg>
          <span className="font-extrabold text-lg text-white">Microservices</span>
          <span className="text-white text-lg font-medium"> Implementation</span>
        </div>
      </motion.div>
    </div>
  </div>
</section>


      {/* --- BENEFITS --- */}
     
<section className="w-full py-12 bg-white">
  <div className="max-w-6xl mx-auto">
    <h3 className="text-4xl font-montserrat font-semibold text-center mb-12">
      Application Services <span className="text-[#e5462e] font-extrabold">Benefits</span>
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
              <span className="font-extrabold text-lg mb-1 block">Reduced</span>
              <span className="text-white/95 block text-base text-center">operational costs by up to 40%</span>
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
              <span className="font-extrabold text-lg mb-1 block">Enhanced agility</span>
              <span className="text-white/95 block text-base text-center">with faster go-to-market times</span>
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
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60"
              alt="Improved scalability"
              className="object-cover w-full h-full rounded-2xl"
            />
          }
          secondContent={
            <div className="rounded-2xl bg-[#585656]/90 flex flex-col items-center justify-center px-4 pt-10 pb-6 min-h-[130px]">
              <span className="font-extrabold text-lg mb-1 block">Improved</span>
              <span className="text-white/95 block text-base text-center">scalability <br />and future-proofing</span>
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



      {/* --- APPLICATION MANAGEMENT --- */}
   <section className="w-full py-20 bg-white flex justify-center items-center relative overflow-hidden min-h-[600px]">
  {/* Background image and overlay */}
  <div className="absolute inset-0 w-full h-full z-0">
    <img
      src="./bg.png" // Replace with your background
      alt=""
      className="w-full h-full object-cover"
      style={{ filter: "brightness(0.6)" }}
    />
    {/* Optional: gradient overlay for contrast */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40" />
  </div>

  {/* Foreground Section (animated card) */}
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.25 }}
    className="relative z-10 flex flex-col md:flex-row items-stretch max-w-5xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden min-h-[400px]"
    style={{ minHeight: "420px" }}
  >
    {/* Animated Image */}
    <motion.div
      className="flex-shrink-0 flex items-center justify-center bg-gray-50"
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.1, ease: [0.42, 0, 0.58, 1] }}
    >
      <img
        src="./LLM.webp"
        alt="Application Management"
        className="w-[370px] h-full min-h-[340px] object-cover"
        style={{ borderRadius: "1.5rem 0 0 1.5rem" }}
      />
    </motion.div>
    {/* Animated Text content */}
    <motion.div
      className="w-full flex flex-col justify-center px-12 py-14"
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.1, ease: [0.42, 0, 0.58, 1] }}
    >
      <h2 className="text-4xl font-montserrat font-semibold text-black mb-3 text-left leading-tight">
        Application <span className="text-[#e5462e] font-extrabold">Management</span>
      </h2>
      <h3 className="text-lg md:text-xl font-extrabold text-gray-800 mb-3 text-left">
        Optimize, Monitor, and Enhance Your Applications
      </h3>
      <p className="text-gray-800 text-base md:text-lg mb-5 text-left font-medium leading-relaxed">
        Managing applications can be resource-intensive. Stellar Innovations offers end-to-end application management services to keep your systems running at peak performance while reducing downtime.
      </p>
      <ul className="text-gray-700 text-base md:text-lg space-y-2 text-left font-medium list-disc ml-6">
        <li>24/7 proactive monitoring to ensure zero downtime.</li>
        <li>Up to 50% reduction in maintenance costs.</li>
        <li>99.9% guaranteed uptime for critical business applications.</li>
      </ul>
    </motion.div>
  </motion.div>
</section>


      {/* --- APPROACH GRID --- */}
     <section className="w-full py-16 bg-white">
  <div className="max-w-6xl mx-auto text-center">
    <h3 className="text-3xl md:text-4xl font-bold mb-12">
      Our <span className="text-[#e5462e]">Approach</span>
    </h3>
    <div className="flex flex-col md:flex-row items-center justify-center gap-10">
      {/* Animated Image */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
        className="flex-shrink-0"
        style={{ height: 312 /* 3 * 96px + 2 * 12px (vertical gap) */ }}
      >
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
          alt="Our Approach"
          className="w-[320px] h-full rounded-2xl shadow-lg object-cover"
          style={{ minHeight: 312, maxHeight: 312 }}
        />
      </motion.div>
      {/* Animated Approach Grid */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
        className="flex flex-col gap-6 w-[340px]"
        style={{ minHeight: 312 }}
      >
        <div className="bg-gray-50 rounded-2xl shadow p-7 flex flex-col justify-center items-center font-extrabold text-gray-800 text-center text-lg">
          Continuous Monitoring <br />& Support
        </div>
        <div className="bg-[#232329] rounded-2xl shadow p-7 flex flex-col justify-center items-center font-extrabold text-gray-50 text-center text-lg">
          Performance <br /> Optimization
        </div>
        <div className="bg-[#e5462e] rounded-2xl shadow p-7 flex flex-col justify-center items-center font-extrabold text-white text-center text-lg">
          Data-Driven <br /> Insights
        </div>
      </motion.div>
    </div>
  </div>
</section>

      {/* --- CLIENT OUTCOMES --- */}
     <section className="w-full py-14 bg-white">
  <div className="max-w-6xl mx-auto">
    <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
      <span className="text-[#e5462e]">Client</span> Outcomes
    </h3>
    <motion.div
      className="flex flex-col md:flex-row gap-8 justify-center items-center"
      variants={parentVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        variants={cardVariants}
        className="flex flex-col w-[260px] rounded-2xl shadow-xl bg-gray-200 font-montserrat font-semibold text-gray-800 text-center px-8 py-10"
      >
        Reduced troubleshooting time by <span className="font-extrabold text-[#e5462e]">50%</span>
      </motion.div>
      <motion.div
        variants={cardVariants}
        className="flex flex-col w-[260px] rounded-2xl shadow-xl bg-gray-200 font-montserrat font-semibold text-gray-800 text-center px-8 py-10"
      >
        2x increase in <span className="font-extrabold text-[#e5462e]">application performance</span>
      </motion.div>
      <motion.div
        variants={cardVariants}
        className="flex flex-col w-[260px] rounded-2xl shadow-xl bg-gray-200 font-montserrat font-semibold text-gray-800 text-center px-8 py-10"
      >
        Improved user satisfaction by <span className="font-extrabold text-[#e5462e]">40%</span>
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
