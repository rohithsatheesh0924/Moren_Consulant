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
    title: "Latest",
    desc: "Assessments"
  },
  {
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=60",
    title: "Detailed",
    desc: "Tax Summary"
  },
  {
    img: "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=400&q=60",
    title: "Information on Exemptions & Taxing",
    desc: "Municipalities"
  },
  {
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60",
    title: "Delinquent",
    desc: "Tax Reporting"
  },
  {
    img: "https://images.unsplash.com/photo-1485218127213-9d0445a69437?auto=format&fit=crop&w=400&q=60",
    title: "Tax Lien ",
    desc: "& Redemption Details"
  },
  {
    img: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=400&q=60",
    title: "Breakdown",
    desc: "of Taxing Jurisdiction Levy"
  },
  {
    img: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?auto=format&fit=crop&w=400&q=60",
    title: "Estimates With",
    desc: "Exemption Removal"
  },
   {
    img: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?auto=format&fit=crop&w=400&q=60",
    title: "Association Dues Summary",
    desc: "(HOA if Any)"
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

  
const takeaways = [
  {
    img: "./Screenshot-2025-11-19-124655.jpg",
    text: (
      <span>
        National <span className="text-[#e5462e] font-extrabold">Footprint</span>
      </span>
    ),
  },
  {
    img: "./Screenshot-2025-11-19-124655.jpg",
    text: (
      <span>
        Seamless <span className="text-[#e5462e] font-extrabold">Integration</span>
      </span>
    ),
  },
  {
    img: "./Screenshot-2025-11-19-124655.jpg",
    text: (
      <span>
        Customized <span className="text-[#e5462e] font-extrabold">Tax Certs</span>
      </span>
    ),
  },
  {
    img: "./Screenshot-2025-11-19-124655.jpg",
    text: (
      <span>
        <span className="text-[#e5462e] font-extrabold">Faster</span> Delivery
      </span>
    ),
  },
  {
    img: "./Screenshot-2025-11-19-124655.jpg",
    text: (
      <span>
        <span className="text-[#e5462e] font-extrabold">Precision</span> First
      </span>
    ),
  }
];


export default function Tax() {
  return (
    <main className="font-montserrat bg-[#e5e7eb] w-full">
      <header className="relative w-full h-[400px] md:h-[690px] flex items-center bg-black overflow-hidden">
      {/* Background Image */}
      <img
        src="./Screenshot-2025-11-19-122931.jpg" // Use your actual Tax Servicing image
        alt="Tax Servicing"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ zIndex: 0 }}
      />
      {/* Right-aligned Glass Overlay with Animation */}
      <div className="flex flex-col items-end justify-center w-full h-full relative z-10">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.42, 0, 0.58, 1] }}
          className="mr-10 max-w-2xl bg-black/50 rounded-[40px] shadow-xl backdrop-blur-xl p-12 border border-white/10"
          style={{
            borderRadius: "40px",
          }}
        >
          <h1 className="text-white font-extrabold mb-5 text-3xl md:text-5xl tracking-wide leading-tight text-right">
            Tax{" "}
            <span
              className="inline-block bg-[#e5462e] text-white rounded-full px-6 py-2 font-black align-middle"
              style={{
                fontSize: "2rem",
                letterSpacing: ".02em",
                boxShadow: "0 2px 12px 0 rgba(200,54,20,0.10)",
              }}
            >
              Servicing
            </span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-medium mt-2 leading-relaxed max-w-2xl text-right">
            Comprehensive Integrated Tax Solutions with rapid turn times of 4hrs or less for Title &amp; Settlement.
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
        {/* Left image column */}
        <div className="md:w-5/12 w-full flex-shrink-0 flex items-stretch">
          <img
            src="./Screenshot-2025-11-19-123140.jpg"
            alt="Real Estate Tax Solutions"
            className="w-full h-full object-cover object-center"
            style={{ minHeight: 400, maxHeight: 550 }}
          />
        </div>

        {/* Right text column */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-14 py-10 bg-white text-center">
          <h2 className="text-4xl font-montserrat font-semibold text-black mb-2 leading-tight">
            Our Services for
          </h2>
          <h2 className="text-4xl font-montserrat font-extrabold text-[#e5462e] mb-5 leading-tight">
            Real Estate Tax Solutions
          </h2>
          <p className="text-gray-900 md:text-lg mb-4 font-medium leading-relaxed">
            In line to our vision as a technology led <span className="font-bold">services company</span>, we have developed <span className="font-bold">FastTaxCert</span>, an industry revolution which generates <span className="font-bold">customizable automated tax certs</span> with precision and sizeable to cater solutions for real estate lenders, originators, servicers, and investors.
          </p>
          <p className="text-gray-900 md:text-lg mb-4 font-medium leading-relaxed">
            With over 2000+ Automated Counties, Nationwide Coverage &amp; Abstractor walk in footprints we are happy to serve over <span className="font-bold">7,000 tax certs requests a day</span> across numerous integrated client platforms and domains seamlessly.
          </p>
          <p className="text-gray-900 md:text-lg mb-4 font-medium leading-relaxed">
            Stellar BPM offerings to customers servicing Top 5 <span className="font-bold">Underwriters</span>, Top 10 <span className="font-bold">Lenders</span> &amp; several <span className="font-bold">Insurance intermediaries</span> from Primary and Secondary markets.
          </p>
        </div>
      </motion.div>
    </section>

      {/* --- BENEFITS --- */}
  <section className="w-full py-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-4xl font-montserrat font-semibold text-center mb-12">
          Real Estate Tax Solutions <span className="text-[#e5462e] font-extrabold">Components</span>
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

 {/* --- Key Takeawayss--- */}
  <section className="w-full py-14 bg-white flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.23 }}
        transition={{ duration: 0.92, ease: [0.42, 0, 0.58, 1] }}
        className="max-w-6xl w-full flex flex-col"
      >
        <h2 className="text-3xl md:text-4xl font-montserrat font-semibold text-center mb-2">
          Key Takeaways from Stellar’s
        </h2>
        <h3 className="text-3xl md:text-4xl font-montserrat font-extrabold text-[#e5462e] text-center mb-9">
          Real Estate Tax solutions
        </h3>
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left: main visual */}
          <div className="flex-none md:w-[45%]">
            <img
              src="./LLM.webp"
              alt="Tax Main"
              className="rounded-3xl w-full max-w-[480px] h-auto object-cover"
              style={{minHeight:320,maxHeight:420}}
            />
          </div>
          {/* Right: full-width vertical stack of six takeaways */}
          <div className="flex-1 flex flex-col justify-center gap-8">
            {takeaways.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{ duration: 0.8, delay: i*0.12, ease: [0.42, 0, 0.58, 1] }}
                className="flex items-center gap-6 w-full"
              >
                <img
                  src={item.img}
                  alt=""
                  className="w-[95px] h-[95px] rounded-2xl object-cover shadow"
                  style={{minWidth:95, minHeight:95}}
                />
                <span className="text-black text-xl md:text-2xl font-semibold">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
          {/* Bottom summary text */}
        <div className="mt-7 md:mt-10 ms-1 md:ms-40 md:me-1 text-black text-lg font-montserrat max-w-3xl text-left">
          Automated Tax Certs run thru Quality Check by <span className="font-bold">Internal certified examiners</span> with <span className="font-bold">decade of domain expertise</span> &amp; thorough understanding of all statutory tax requirements to limit your exposure to potential claims.
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
