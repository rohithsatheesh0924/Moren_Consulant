import React from "react";
import { motion } from "framer-motion";
import CurvedLoop from "../components/CurvedLoop";
import PixelTransition from '../components/PixelTransition';

const parentVariants = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } } };
  const cardVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };




export default function Automation() {
  return (
    <main className="font-montserrat bg-[#e5e7eb] w-full">
      <header className="relative w-full h-[400px] md:h-[690px] flex items-center bg-black overflow-hidden">
      {/* Background Image */}
      <img
        src="./demo1.webp" // Your actual hero background image
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
        >
          <h1 className="text-white font-extrabold mb-4 text-xl md:text-3xl tracking-wide leading-tight">
            <span
              className="inline-block bg-[#e5462e] text-white rounded-full px-6 py-1.5 font-black align-middle"
              style={{
                fontSize: "1.45rem",
                letterSpacing: ".02em",
                boxShadow: "0 2px 12px 0 rgba(200,54,20,0.10)",
              }}
            >
              Automation
            </span>
          </h1>
          <p className="text-white/90 text-sm md:text-base font-medium mt-1 leading-relaxed max-w-md">
            Powering efficiency and productivity through <span className="text-orange-200">innovation</span>,<span className="text-orange-200"> technology</span> and industry experience.
          </p>
        </motion.div>
      </div>
    </header>

     {/* ROBOTIC PROCESS AUTOMATION*/}
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
            src="./demo3.webp" // Your actual RPA hero image
            alt="Robotic Process Automation"
            className="w-full h-full object-cover object-center"
            style={{ minHeight: 400, maxHeight: 550 }}
          />
        </div>
        {/* Wider text column */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-14 py-10">
          <h2 className="text-4xl font-montserrat font-semibold text-black text-left mb-0 leading-tight">
            Robotic Process Automation
          </h2>
          <h2 className="text-4xl font-montserrat font-extrabold text-[#e5462e] mb-3 -mt-2 text-left leading-tight">
            ( RPA )
          </h2>
          <p className="text-lg md:text-xl font-bold text-black mb-3 text-left">
            Automate Routine Processes to Enhance Efficiency
          </p>
          <p className="text-gray-700 text-base md:text-lg mb-4 text-left">
            RPA is transforming businesses by automating repetitive, rule-based tasks, freeing up employees for strategic work.
          </p>
          <ul className="text-black/80 text-base md:text-lg mb-1 space-y-2 text-left">
            <li>
              <span className="font-bold">80%</span> of business processes can be automated using RPA.
            </li>
            <li>
              <span className="font-bold">30-50%</span> cost reduction through RPA implementation.
            </li>
          </ul>
        </div>
      </motion.div>
    </section>

     {/*KEY CAPABILITIES GRID */}
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-12">
          <span className="text-[#e5462e]">Key</span> Capabilities
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
              src="./c8.png" // Use your actual capabilities image
              alt="RPA Capabilities"
              className="w-[370px] h-[330px] rounded-2xl shadow-lg object-cover"
            />
          </motion.div>
          {/* Animated Capabilities Grid */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
            className="grid grid-cols-2 grid-rows-2 gap-8 w-[410px]"
          >
            {/* Data Entry Automation */}
            <div className="flex flex-col justify-center items-start px-6 py-8 rounded-2xl bg-gray-100 shadow text-left">
              <span className="inline-block mb-3 w-3 h-3 rounded bg-[#e5462e]"></span>
              <span className="font-extrabold text-lg text-black">Data Entry</span>
              <span className="text-gray-700 text-lg font-medium">Automation</span>
            </div>
            {/* Invoice Processing */}
            <div className="flex flex-col justify-center items-start px-6 py-8 rounded-2xl bg-[#585656] shadow text-left">
              <span className="inline-block mb-3 w-3 h-3 rounded bg-[#e5462e]"></span>
              <span className="text-white text-lg font-medium">Invoice</span>
              <span className="font-extrabold text-lg text-white">Processing</span>
            </div>
            {/* Customer Support Bots */}
            <div className="flex flex-col justify-center items-start px-6 py-8 rounded-2xl bg-[#373535] shadow text-left col-span-2 md:col-span-1">
              <span className="inline-block mb-3 w-3 h-3 rounded bg-[#e5462e]"></span>
              <span className="text-white text-lg font-medium">Customer Support</span>
              <span className="font-extrabold text-lg text-white">Bots</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>


      {/*--- RPA BENEFITS ---*/}
    <section className="w-full py-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-4xl font-montserrat font-semibold text-center mb-12">
          RPA <span className="text-[#e5462e] font-extrabold">benefits</span>
        </h3>
        <motion.div
          className="flex flex-col md:flex-row gap-8 justify-center items-start"
          variants={parentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Benefit 1: 80% process reduction */}
          <motion.div variants={cardVariants} className="flex flex-col w-[260px] rounded-2xl shadow-xl bg-[#585656] text-white font-montserrat font-medium overflow-visible">
            <PixelTransition
              firstContent={
                <img
                  src="./c7.jpeg" // Use your actual benefit image
                  alt="Process cycle time reduction"
                  className="object-cover w-full h-full rounded-2xl"
                />
              }
              secondContent={
                <div className="rounded-2xl bg-[#585656]/90 flex flex-col items-center justify-center px-4 pt-10 pb-6 min-h-[130px]">
                  <span className="font-extrabold text-lg mb-1 block">Up to <span className="font-bold">80% reduction</span></span>
                  <span className="text-white/95 block text-base text-center">in process cycle times</span>
                </div>
              }
              gridSize={12}
              animationStepDuration={0.5}
              style={{ height: 180, width: '100%', marginBottom: -10, borderRadius: "1rem" }}
              pixelColor="#e5462e"
            />
          </motion.div>

          {/* Benefit 2: Enhanced compliance */}
          <motion.div variants={cardVariants} className="flex flex-col w-[260px] rounded-2xl shadow-xl bg-[#585656] text-white font-montserrat font-medium overflow-visible">
            <PixelTransition
              firstContent={
                <img
                  src="./c1.png" // Use your actual compliance image
                  alt="Enhanced compliance"
                  className="object-cover w-full h-full rounded-2xl"
                />
              }
              secondContent={
                <div className="rounded-2xl bg-[#585656]/90 flex flex-col items-center justify-center px-4 pt-10 pb-6 min-h-[130px]">
                  <span className="font-extrabold text-lg mb-1 block">Enhanced <span className="font-bold">compliance</span></span>
                </div>
              }
              gridSize={12}
              animationStepDuration={0.5}
              style={{ height: 180, width: '100%', marginBottom: -10, borderRadius: "1rem" }}
              pixelColor="#e5462e"
            />
          </motion.div>

          {/* Benefit 3: Fast ROI */}
          <motion.div variants={cardVariants} className="flex flex-col w-[260px] rounded-2xl shadow-xl bg-[#585656] text-white font-montserrat font-medium overflow-visible">
            <PixelTransition
              firstContent={
                <img
                  src="./c7.jpeg" // Use your actual ROI image
                  alt="ROI improvement"
                  className="object-cover w-full h-full rounded-2xl"
                />
              }
              secondContent={
                <div className="rounded-2xl bg-[#585656]/90 flex flex-col items-center justify-center px-4 pt-10 pb-6 min-h-[130px]">
                  <span className="font-extrabold text-lg mb-1 block"><span className="font-bold">ROI</span> within</span>
                  <span className="text-white/95 block text-base text-center">6–12 months</span>
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


{/* --- NEXTGEN AI AUTOMATION ---*/}
    <section className="w-full py-20 bg-white flex justify-center items-center relative overflow-hidden min-h-[600px]">
      {/* Background image and overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="./bg.png" // Replace with your abstract background
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.6)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40" />
      </div>
      {/* Foreground Card */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="relative z-10 flex flex-col md:flex-row items-stretch max-w-5xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden min-h-[400px]"
        style={{ minHeight: "420px" }}
      >
        {/* Left Image */}
        <motion.div
          className="flex-shrink-0 flex items-center justify-center bg-gray-50"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease: [0.42, 0, 0.58, 1] }}
        >
          <img
            src="./c8.png" // Use your actual AI automation image
            alt="AI Automation"
            className="w-[370px] h-full min-h-[340px] object-cover"
            style={{ borderRadius: "1.5rem 0 0 1.5rem" }}
          />
        </motion.div>
        {/* Text Content */}
        <motion.div
          className="w-full flex flex-col justify-center px-12 py-14"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease: [0.42, 0, 0.58, 1] }}
        >
          <h2 className="text-4xl font-montserrat font-semibold text-black mb-3 text-left leading-tight">
            <span className="text-[#e5462e] font-extrabold">NextGen AI-Based</span> Automation Services
          </h2>
          <h3 className="text-lg md:text-xl font-extrabold text-gray-800 mb-3 text-left">
            AI-Powered Automation for Intelligent Decision Making
          </h3>
          <p className="text-gray-800 text-base md:text-lg mb-5 text-left font-medium leading-relaxed">
            Unlock the power of AI to automate complex decision-making processes.
          </p>
          <ul className="text-gray-700 text-base md:text-lg space-y-2 text-left font-medium list-disc ml-6">
            <li>73% of organizations report improved decision-making with AI automation.</li>
            <li>AI adoption results in up to 25% revenue growth for leading firms.</li>
          </ul>
        </motion.div>
      </motion.div>
    </section>

{/*--- AI AUTOMATION SERVICES GRID ---*/}
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-12">
          Our <span className="text-[#e5462e]">AI Automation</span> Services
        </h3>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Animated Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
            className="flex-shrink-0"
            style={{ height: 312 }}
          >
            <img
              src="./c5.jpeg" // Use your actual AI services image
              alt="AI Automation Services"
              className="w-[320px] h-full rounded-2xl shadow-lg object-cover"
              style={{ minHeight: 312, maxHeight: 312 }}
            />
          </motion.div>
          {/* Animated Services Grid */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
            className="grid grid-cols-2 grid-rows-2 gap-6 w-[340px]"
            style={{ minHeight: 312 }}
          >
            <div className="bg-gray-50 rounded-2xl shadow p-7 flex flex-col justify-center items-start text-gray-800 text-left text-lg font-medium">
              <span className="inline-block mb-2 w-3 h-3 rounded bg-[#e5462e]"></span>
              <span className="font-extrabold">Predictive</span> Analytics
            </div>
            <div className="bg-[#585656] rounded-2xl shadow p-7 flex flex-col justify-center items-start text-white text-left text-lg font-medium">
              <span className="inline-block mb-2 w-3 h-3 rounded bg-[#e5462e]"></span>
              <span>Process</span> <span className="font-extrabold">Optimization</span>
            </div>
            <div className="bg-[#373535] rounded-2xl shadow p-7 flex flex-col justify-center items-start text-white text-left text-lg font-medium col-span-2 md:col-span-1">
              <span className="inline-block mb-2 w-3 h-3 rounded bg-[#e5462e]"></span>
              <span>Intelligent Document</span> <span className="font-extrabold">Processing</span>
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
        Reduction in
operational costs <span className="font-extrabold text-[#e5462e]">by 35%</span>
      </motion.div>
      <motion.div
        variants={cardVariants}
        className="flex flex-col w-[260px] rounded-2xl shadow-xl bg-gray-200 font-montserrat font-semibold text-gray-800 text-center px-8 py-10"
      >
        Improved customer satisfaction by <span className="font-extrabold text-[#e5462e]">20%</span>
      </motion.div>
      <motion.div
        variants={cardVariants}
        className="flex flex-col w-[260px] rounded-2xl shadow-xl bg-gray-200 font-montserrat font-semibold text-gray-800 text-center px-8 py-10"
      >
        Faster<br/> time-to-market by <span className="font-extrabold text-[#e5462e]">50%</span>
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
