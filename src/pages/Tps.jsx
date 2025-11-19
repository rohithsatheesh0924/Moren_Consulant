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

//key take away 
 const takeaways = [
    {
      img: "./bg.png",
      label: (
        <span className="text-[#e5462e] font-extrabold text-xl md:text-2xl">Training</span>
      )
    },
    {
      img: "./Screenshot-2025-11-19-121427.jpg",
      label: (
        <span>
          Dedicated Project Manager<br />
          for <span className="text-[#e5462e] font-extrabold">Client</span>
        </span>
      )
    },
    {
      img: "./Screenshot-2025-11-19-121427.jpg",
      label: (
        <span>
          Independent Quality <span className="text-[#e5462e] font-extrabold">Team</span>
        </span>
      )
    },
    {
      img: "./Screenshot-2025-11-19-121427.jpg",
      label: (
        <span>
          Faster Turnaround <span className="text-[#e5462e] font-extrabold">Time</span>
        </span>
      )
    }
  ];


///
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
const gridCards = [
  {
    highlight: true,
    bgType: "image",
    content: (
      <div className="h-full w-full flex flex-col justify-center items-start p-7 text-white font-montserrat rounded-3xl"
        style={{
          background: "url('./Screenshot-2025-11-19-120637.jpg') center center / cover",
          minHeight: 270
        }}>
        <span className="block mb-4 text-xl font-normal">We have a <span className="font-extrabold">Nationwide coverage</span> through our Online and Vendor Network, our team of examiners have a thorough understanding on <span className="font-extrabold">State Statues &amp; examining</span> guidelines to deliver best in class verified searches.</span>
      </div>
    )
  },
  {
    icon: true,
    highlight: false,
    title: "Equity",
    subtitle: "Reports"
  },
  {
    icon: true,
    highlight: true,
    title: "Current Owner",
    subtitle: "Searches"
  },
  {
    icon: true,
    highlight: false,
    title: "2 Owner",
    subtitle: "Searches"
  },
  {
    icon: true,
    highlight: false,
    title: "Full",
    subtitle: "Searches"
  },
  {
    icon: true,
    highlight: false,
    title: "Legal & Vesting",
    subtitle: ""
  },
  {
    icon: true,
    highlight: true,
    title: "Loan",
    subtitle: "Modification"
  }
];
const cardData = [
  // First (big) card with image background
  {
    type: "image",
    content: (
      <div className="flex flex-col h-full w-full p-7 justify-center items-start rounded-3xl bg-black/60"
        style={{
          backgroundImage: "url('./Screenshot-2025-11-19-120637.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: 280,
        }}>
        <div className="text-lg md:text-xl text-white font-montserrat font-normal text-left">
          We have a <span className="font-extrabold">Nationwide coverage</span> through our Online and Vendor Network, our team of examiners have a thorough understanding on <span className="font-extrabold">State Statues &amp; examining</span> guidelines to deliver best in class verified searches.
        </div>
      </div>
    )
  },
  // Service grid
  { type: "card", highlight: false, title: "Equity", subtitle: "Reports" },
  { type: "card", highlight: true, title: "Current Owner", subtitle: "Searches" },
  { type: "card", highlight: false, title: "2 Owner", subtitle: "Searches" },
  { type: "card", highlight: false, title: "Full", subtitle: "Searches" },
  { type: "card", highlight: false, title: "Legal & Vesting", subtitle: "" },
  { type: "card", highlight: true, title: "Loan", subtitle: "Modification" }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.13, ease: [0.42, 0, 0.58, 1] }
  })
};


export default function Title() {
  return (
    <main className="font-montserrat bg-[#e5e7eb] w-full">
      <header className="relative w-full h-[400px] md:h-[690px] flex items-center bg-black overflow-hidden">
      {/* Background Image */}
      <img
        src="./Screenshot-2025-11-19-115950.jpg" // Use your actual Title Production Services image
        alt="Title Production Services"
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
            Title{" "}
            <span
              className="inline-block bg-[#e5462e] text-white rounded-full px-6 py-2 font-black align-middle"
              style={{
                fontSize: "2rem",
                letterSpacing: ".02em",
                boxShadow: "0 2px 12px 0 rgba(200,54,20,0.10)",
              }}
            >
              Production
            </span>
            <br />
            Services
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-medium mt-2 leading-relaxed max-w-2xl text-left">
            Offering end to end title settlement services in the title insurance space.
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
        {/* Wider text column */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-14 py-10 bg-white text-center">
          <h2 className="text-4xl font-montserrat font-semibold text-black mb-2 leading-tight">
            Our Services for
          </h2>
          <h2 className="text-4xl font-montserrat font-extrabold text-[#e5462e] mb-5 leading-tight">
            Title Production
          </h2>
          <p className="text-gray-900 md:text-lg mb-4 font-medium leading-relaxed">
            Stellar Innovations provides a <span className="font-bold">full range of title production services</span> to agents, agencies, and title companies. Based on the requirements specific to the buying/selling/re-financing criteria, our experts ensure that the detailed reports are sourced from credible government records.
          </p>
          <p className="text-gray-900 md:text-lg mb-4 font-medium leading-relaxed">
            Having understood the objectives of title production, Stellar delivers the most <span className="font-bold">comprehensive title search</span> reports that include verified ownership data, voluntary/involuntary monetary liens, property encumbrances, tax records, and much more. To discuss your requirements and for a custom quote, contact us today.
          </p>
        </div>

        {/* Slightly slimmer image column */}
        <div className="md:w-5/12 w-full flex-shrink-0 flex items-stretch">
          <img
            src="./Screenshot-2025-11-19-120434.jpg" // Use your actual title production image here
            alt="Title Production"
            className="w-full h-full object-cover object-center"
            style={{ minHeight: 400, maxHeight: 550 }}
          />
        </div>
      </motion.div>
    </section>

      {/* --- SERVICES INCLUDE GRID --- */}
     <section className="w-full py-10 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl md:text-4xl font-montserrat font-semibold mb-3 mt-2">
          Service <span className="text-[#e5462e] font-extrabold">Components</span>
        </h3>
        <p className="md:text-lg text-gray-800 font-medium mt-5 mb-12 leading-relaxed">
          Stellar Innovations has a thorough understanding of title insurance market &amp; are well versed with its requirements.<br />
          Our team of 600+ certified examiners understand state statues and underwriting guidelines, thus delivering a<br />
          quality product. We offer nationwide coverage through our online coverage and ground network of field abstractors. Get your reports delivered in 8-12 hours (online)!!
        </p>
        {/* Tabs */}
        <div className="flex gap-4 mb-9 justify-center">
          <button className="text-white bg-[#e5462e] rounded-[2rem] px-10 py-5 text-lg font-medium focus:outline-none">
            Title Search & Examination
          </button>
          <button className="text-white/95 bg-[#a1a1a1] rounded-[2rem] px-10 py-5 text-lg font-medium cursor-not-allowed" disabled>
            Settlement Services
          </button>
          <button className="text-white/95 bg-[#a1a1a1] rounded-[2rem] px-10 py-5 text-lg font-medium cursor-not-allowed" disabled>
            Title Report Indexing & Data Extraction
          </button>
        </div>
        {/* Grid area */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 justify-center items-stretch mt-4">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            className="md:col-span-2 row-span-2 md:row-auto rounded-3xl shadow-xl min-h-[250px] flex"
            style={{ minHeight: 280, gridColumn: 'span 2' }}
          >
            {cardData[0].content}
          </motion.div>
          {cardData.slice(1).map((card, i) => (
            <motion.div
              key={i}
              custom={i+1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className={`flex flex-col justify-center items-center rounded-3xl shadow-xl min-h-[127px] px-6 py-8 text-center font-montserrat 
                ${card.highlight ? "bg-[#585656] text-white" : "bg-gray-100 text-black"}`}
            >
              <span className="inline-block mb-3 w-3 h-3 rounded bg-[#e5462e]"></span>
              <span className="font-extrabold text-lg">{card.title}</span>
              {" "}
              <span className="text-lg font-medium">{card.subtitle}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>


{/* --- DUE DILIGENCE --- */}
   <section className="w-full py-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-montserrat font-semibold text-center mb-2">
          Key Takeaways from Stellar’s
        </h2>
        <h3 className="text-3xl md:text-4xl font-montserrat font-extrabold text-[#e5462e] text-center mb-9">
          Title Production Services
        </h3>
        <div className="flex flex-col md:flex-row gap-4 md:gap-12 items-start">
          {/* Left Main Image */}
          <div className="flex-1">
            <img
              src="./c6.jpeg"
              alt="Key Takeaway Main"
              className="w-full rounded-3xl mb-4 md:mb-0 md:h-[410px] object-cover"
              style={{ minHeight: 260, maxHeight: 410 }}
            />
          </div>
          {/* Right Takeaways Grid */}
          <div className="flex-1 grid grid-cols-1 gap-8">
            {takeaways.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.12, ease: [0.42, 0, 0.58, 1] }}
                viewport={{ once: true, amount: 0.3 }}
                className="flex items-center gap-5"
              >
                <img
                  src={item.img}
                  alt={`Takeaway ${i + 1}`}
                  className="w-[100px] h-[100px] rounded-2xl object-cover shadow"
                  style={{ minWidth: 100, minHeight: 100 }}
                />
                <span className="text-black text-xl md:text-2xl font-semibold">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Bottom paragraph (second screenshot) */}
        <div className="max-w-3xl mx-auto mt-12 text-left md:text-center">
          <p className="text-lg md:text-xl font-montserrat font-medium text-gray-900 mb-2">
            From <span className="font-extrabold">title reports, title curative, examination</span> and <span className="font-extrabold">title policy preparation</span> are all part of Stellar's vast title production portfolio
          </p>
        </div>
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
