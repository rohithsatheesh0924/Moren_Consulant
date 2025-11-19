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
const benefitsList = [
  {
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=60",
    title: "New Origination",
    desc: "Reviews"
  },
  {
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=60",
    title: "Securatization",
    desc: "Reviews"
  },
  {
    img: "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=400&q=60",
    title: "Data Integrity & Completeness",
    desc: "Checks"
  },
  {
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60",
    title: "Performing / Re-performing",
    desc: "Asset Reviews (RPL)"
  },
  {
    img: "https://images.unsplash.com/photo-1485218127213-9d0445a69437?auto=format&fit=crop&w=400&q=60",
    title: "Non-Performing",
    desc: "Distressed Asset Reviews (NPL)"
  },
  {
    img: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=400&q=60",
    title: "Regulatory",
    desc: "Compliance Reviews"
  },
  {
    img: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?auto=format&fit=crop&w=400&q=60",
    title: "MSR Loan",
    desc: "Reviews"
  },
  
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.13,
      ease: [0.42, 0, 0.58, 1]
    }
  })
};

const cardVars = {
  hidden: { opacity: 0, y: 50 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.15,
      ease: [0.42, 0, 0.58, 1]
    }
  })
};

  const cards = [
    {
      icon: (
        // Replace with your SVG or icon
        <svg className="w-10 h-10 mb-2" stroke="currentColor" fill="none" viewBox="0 0 24 24">
          <path stroke="#e5462e" strokeWidth="2" strokeLinecap="round" d="M12 4v16m8-8H4" />
        </svg>
      ),
      title: "Processing",
      subtitle: "Support",
      number: "01"
    },
    {
      icon: (
        <svg className="w-10 h-10 mb-2" stroke="currentColor" fill="none" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="3" stroke="#e5462e" strokeWidth="2" />
          <path stroke="#e5462e" strokeWidth="2" d="M8 8h8M8 12h8" />
        </svg>
      ),
      title: "Underwriting",
      subtitle: "Support",
      number: "02"
    },
    {
      icon: (
        <svg className="w-10 h-10 mb-2" stroke="currentColor" fill="none" viewBox="0 0 24 24">
          <path stroke="#e5462e" strokeWidth="2" d="M5 7l5 5-5 5" />
          <rect x="12" y="7" width="7" height="10" rx="2" stroke="#e5462e" strokeWidth="2" />
        </svg>
      ),
      title: "Underwriting",
      subtitle: "Quality Control",
      number: "03"
    },
    {
      icon: (
        <svg className="w-10 h-10 mb-2" stroke="currentColor" fill="none" viewBox="0 0 24 24">
          <rect x="7" y="7" width="10" height="8" rx="2" stroke="#e5462e" strokeWidth="2" />
          <path stroke="#e5462e" strokeWidth="2" d="M12 3v4m0 14v-4" />
        </svg>
      ),
      title: "Closing &",
      subtitle: "Post Closing Services",
      number: "04"
    }
  ];


export default function MortageServices() {
  return (
    <main className="font-montserrat bg-[#e5e7eb] w-full">
      <header className="relative w-full h-[400px] md:h-[690px] flex items-center bg-black overflow-hidden">
      {/* Background Image */}
      <img
        src="./image.jpg" // Use your actual mortgage background image
        alt="Mortgage Hero"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ zIndex: 0 }}
      />
      {/* Glass Overlay with Animation */}
      <div className="flex flex-col items-start justify-center w-full h-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.42, 0, 0.58, 1] }}
          className="ml-10 max-w-2xl bg-black/50 rounded-[40px] shadow-xl backdrop-blur-xl p-12 border border-white/10"
          style={{
            borderRadius: "40px",
          }}
        >
          <h1 className="text-white font-extrabold mb-5 text-3xl md:text-5xl tracking-wide leading-tight">
            Mortgage{" "}
            <span
              className="inline-block bg-[#e5462e] text-white rounded-full px-6 py-2 font-black align-middle"
              style={{
                fontSize: "2rem",
                letterSpacing: ".02em",
                boxShadow: "0 2px 12px 0 rgba(200,54,20,0.10)",
              }}
            >
              Services
            </span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-medium mt-2 leading-relaxed max-w-2xl">
            Stellar Innovations is a forward-thinking technology and financial services company that specializes in providing cutting-edge solutions for the mortgage industry. One of the critical services offered by Stellar Innovations is Mortgage Support Services spanning across Originations, Underwriting QC, & Due Diligence. Stellar innovations have been vetted as an acceptable third-party review firm by all major rating agencies.
          </p>
        </motion.div>
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
            src="./image.jpg" // Use your actual mortgage sector image
            alt="Mortgage Sector"
            className="w-full h-full object-cover object-center"
            style={{ minHeight: 400, maxHeight: 550 }}
          />
        </div>

        {/* Wider text column */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-14 py-10">
          <h2 className="text-4xl font-montserrat font-semibold text-black text-left mb-0 leading-tight">
            Our services for
            <span className="text-[#e5462e] font-extrabold block mt-1">Mortgage Sector</span>
          </h2>
          <p className="text-gray-900 text-base md:text-lg mt-6 mb-4 text-left font-medium leading-relaxed">
            Our origination support services are led by <span className="font-bold">industry veterans</span> with deep domain expertise. We can seamlessly adapt to your existing workflow helping you reduce your <span className="font-bold">average cycle time, cost per loan</span>, and improve your pull through rate.
          </p>
          <p className="text-gray-900 text-base md:text-lg mb-4 text-left font-medium leading-relaxed">
            We have ability to handle all product types including COVN, FHA, VA, USDA, Non-QM, DSCR, HELOC & Reverse Mortgage.<br />
            We operate across multiple channels including <span className="font-bold">Consumer Direct, Retail, Wholesale, Correspondent & Capital Market</span>.
          </p>
        </div>
      </motion.div>
    </section>

      {/* --- SERVICES INCLUDE GRID --- */}
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl md:text-4xl font-montserrat font-semibold mb-10">
          Mortgage Origination Support <span className="text-[#e5462e] font-extrabold">Services</span>
        </h3>
        <div className="flex flex-col md:flex-row justify-center items-center gap-7 md:gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.number}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={cardVars}
              className="flex flex-col items-center justify-between bg-[#bcbcbc] rounded-3xl px-8 pt-10 pb-6 shadow-xl min-h-[340px] w-full md:w-[270px] relative"
            >
              <div>
                {card.icon}
                <div className="mb-3 mt-2 text-lg md:text-xl text-gray-900 font-montserrat text-center font-medium leading-snug">
                  {card.title} <br />
                  <span className="font-extrabold text-black text-2xl">{card.subtitle}</span>
                </div>
              </div>
              <span className="absolute bottom-5 left-8 text-[4rem] text-gray-200 font-extrabold font-montserrat opacity-80 pointer-events-none select-none">
                {card.number}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>


{/* --- DUE DILIGENCE --- */}
  <section className="w-full bg-white py-14 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.33 }}
        transition={{ duration: 0.85, ease: [0.42, 0, 0.58, 1] }}
        className="flex flex-col md:flex-row-reverse items-stretch max-w-6xl w-full rounded-3xl bg-white shadow-2xl overflow-hidden"
        style={{ minHeight: 340 }}
      >
        {/* Image column (on right) */}
        <div className="md:w-5/12 w-full flex-shrink-0 flex items-stretch">
          <img
            src="./Screenshot-2025-11-19-113703.jpg"
            alt="Due Diligence"
            className="w-full h-full object-cover object-center"
            style={{ minHeight: 400, maxHeight: 550 }}
          />
        </div>

        {/* Text column (on left), all text uses md:text-lg mb-4 */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-14 py-10 bg-white">
          <h2 className="text-4xl font-montserrat font-extrabold text-[#e5462e] text-left mb-5 leading-tight">
            Due Diligence
          </h2>
          <p className="text-black md:text-lg mb-4 font-bold text-left">
            <span className="font-extrabold">Mortgage due diligence</span> is of paramount importance in the mortgage industry as it involves a comprehensive review and analysis of mortgage loan documents and data. Our process ensures the <span className="font-extrabold">accuracy, compliance, and quality of mortgage loans,</span> reducing the risk for lenders, servicers, and investors. It helps identify potential issues, such as fraud, misrepresentations, or errors in loan documentation, which can have significant financial and legal consequences. Stellar Innovations' expertise in mortgage due diligence helps <span className="font-extrabold">streamline operations, improve loan quality, and mitigate risks</span> in the complex world of mortgage lending.
          </p>
        </div>
      </motion.div>
    </section>

      {/* --- BENEFITS --- */}
  <section className="w-full py-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-4xl font-montserrat font-semibold text-center mb-12">
          Due Diligence <span className="text-[#e5462e] font-extrabold">Services</span>
        </h3>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {benefitsList.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col w-[260px] rounded-2xl shadow-xl bg-[#585656] text-white font-montserrat font-medium overflow-visible"
              style={{ minWidth: 210 }}
            >
              <PixelTransition
                firstContent={
                  <img
                    src={item.img}
                    alt={item.title}
                    className="object-cover w-full h-full rounded-2xl"
                  />
                }
                secondContent={
                  <div className="rounded-2xl bg-[#585656]/90 flex flex-col items-center justify-center px-4 pt-10 pb-6 min-h-[130px]">
                    <span className="font-extrabold text-lg mb-1 block">{item.title}</span>
                    <span className="text-white/95 block text-base text-center">{item.desc}</span>
                  </div>
                }
                gridSize={12}
                animationStepDuration={0.5}
                style={{ height: 180, width: '100%', marginBottom: -10, borderRadius: "1rem" }}
                pixelColor="#e5462e"
              />
            </motion.div>
          ))}
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
