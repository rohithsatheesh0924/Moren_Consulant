import React, { useRef, useEffect, useState, useMemo, useId } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { FaRobot, FaBrain, FaLaptopCode, FaBolt, FaChartBar, FaCogs } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "../components/Container";
import AOS from "aos";
import { gsap } from "gsap";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import CurvedLoop from "../components/CurvedLoop";
import ElectricBorder from "../components/ElectricBorder";
import BounceCards from "../components/BounceCards";
import PrismaticBurst from "../components/PrismaticBurst";
import LogoLoop from "../components/LogoLoop";
import ScrollStack, { ScrollStackItem } from "../components/ScrollStack";
import Beams from "../components/Beams";
import Spline from '@splinetool/react-spline';



const PRODUCT_LINKS = [
  { name: "Chefzpartner", link: "/chefzpartner" },
  { name: "Advocatepro.ai", link: "/advocatepro" },
  { name: "SandhAi", link: "/sandhai" }
];

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true
    });
  }, []);
  // number counters
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.5 });
//service cards section 
  const gridItemVariant = {
  hidden: { opacity: 0, x: -48, scale: 0.97 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" }
  },
};


const icons = [
  <FaRobot size={32} />,
  <FaBrain size={32} />,
  <FaLaptopCode size={32} />,
  <FaBolt size={32} />,
  <FaChartBar size={32} />,
  <FaCogs size={32} />,
];
const services = [
  {
    title: "RPA Solutions",
    desc: "We develop solutions to automate repetitive tasks and manual processes – enhancing work efficiency, cost savings by interacting with websites, databases, business applications and people.",
  },
  {
    title: "AI & ML Solutions",
    desc: "Leverage data engineering innovations for semantic analysis, turn data into insights and efficiencies, visualization of information and integrated process for decision making.",
  },
  {
    title: "Customized Product Development",
    desc: "We connect to learn your business requirements and map it with appropriate technical solution to develop products and solutions.",
  },
  {
    title: "Process Re-Engineering Consultancy",
    desc: "Delivering quality products through technology led approaches to optimize client operations, compliance and growth.",
  },
  {
    title: "Mortgage Services",
    desc: "Delivering modern and cost-effective solutions and services to uplift your deliverables to your clients.",
  },
  {
    title: "Nationwide Title Searches",
    desc: "We have a Nationwide coverage through our Online and Vendor Network, our team of examiners have a thorough understanding.",
  }
];

  //hero section 

const heroContainer = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};


const buttonHover = {
  scale: 1.08,
  boxShadow: "0 0 18px 3px #ff1f3d88",
  rotateZ: 2,
  transition: { duration: 0.35 },
};

//your business 
const textFromCenter = {
  hidden: { opacity: 0, x: 60, scale: 0.97 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const imageFromCenter = {
  hidden: { opacity: 0, x: -60, scale: 0.97 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

//5 product
const processContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.3,
    },
  },
};

const cardVariant = (idx) => ({
  hidden: { opacity: 0, x: idx % 2 === 0 ? -48 : 48, scale: 0.97 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" }
  },
});

const processItem = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};
const steps = [
  {
    num: "01",
    title: "Business Audit & Gap Analysis",
    subtitle: "Understanding Your Business",
    desc: "A 360° strategic review of your business to identify operational gaps and market opportunities, ensuring focused transformation.",
  },
  {
    num: "02",
    title: "Growth Blueprint & Recommendations",
    subtitle: "Tailored Roadmap To Success",
    desc: "Actionable plans built with defined KPIs and milestones aligned with your enterprise goals.",
  },
  {
    num: "03",
    title: "Digital & Operational Enablement",
    subtitle: "Execution with Precision",
    desc: "Implementation of scalable technology and automation solutions to streamline enterprise functions for maximum impact.",
  },
  {
    num: "04",
    title: "Performance Tracking & Optimization",
    subtitle: "Continuous Improvement",
    desc: "Ongoing analysis and iterative iteration driving consistent ROI enhancement and business agility.",
  },
  {
    num: "05",
    title: "Partnership & Scalability Support",
    subtitle: "Sustainable Growth",
    desc: "Seamless collaboration for scaling operations, new market expansions and digital innovation partnership.",
  },
];

//client
const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};
const scrollAnimationStyle = `
  @keyframes scroll-left {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  .scroll-loop {
    display: flex;
    width: calc(200px * 8); /* Adjust this: image width + margin * number of images * 2 */
    animation: scroll-left 20s linear infinite;
  }

  .scroll-loop img {
    height: 96px; /* h-24 = 6rem = 96px */
    margin: 0 16px; /* mx-4 = 1rem (16px) */
    border-radius: 0.5rem; /* rounded-lg */
    box-shadow: 0 4px 6px rgba(0,0,0,0.1); /* shadow-lg */
  }

  /* Hide native scrollbar just in case */
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;
//products section
const PRODUCT_LINKS = [
  { name: "Product One", link: "/one", img: "./demo1.webp" },
  { name: "Product Two", link: "/two", img: "./demo2.webp" },
  { name: "Product One", link: "/one", img: "./demo3.webp" },
  { name: "Product Two", link: "/two", img: "./iso.webp" },
  { name: "Product Two", link: "/two", img: "./p2.jpeg" },
  // ...
];
//client logos
const clientLogos = [
  { src: "/c1.png", alt: "Client 1", href: "" },
  { src: "/c2.png", alt: "Client 2", href: "" },
  { src: "/c3.png", alt: "Client 3", href: "" },
  { src: "/c4.png", alt: "Client 4", href: "" },
  { src: "/c5.jpeg", alt: "Client 5", href: "" },
  { src: "/c6.jpeg", alt: "Client 6", href: "" },
  { src: "/c7.jpeg", alt: "Client 7", href: "" },
  { src: "/c8.png", alt: "Client 8", href: "" },
];



  return (
    <div className="bg-[#e5e7eb] min-h-screen flex flex-col text-white font-sans">
      <Navbar />

      {/* Hero */}
<section className="relative w-full pt-32 pb-28 bg-gradient-to-br from-[#10121b] via-black to-[#24131c] flex flex-col items-center justify-center text-center px-4 md:px-0 overflow-hidden min-h-[600px]">

  {/* PrismaticBurst animated background */}
  <div className="absolute inset-0 w-full h-full z-0 select-none pointer-events-none">
    <PrismaticBurst
      intensity={2}
      speed={0.45}
      animationType="rotate3d"
      colors={["#fff0f0", "#ffe5ec", "#e6cfff", "#a6e4ff", "#ffeed6", "#ffe5db", "#fff"]}
      rayCount={16}
      mixBlendMode="lighten"
      distort={0.8}
      paused={false}
    />
  </div>

  {/* Foreground content */}
  <Container className="max-w-4xl text-center relative z-10 px-4 sm:px-6">
    <motion.div variants={heroContainer} initial="hidden" animate="visible">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 sm:mb-8 text-white leading-tight tracking-wide drop-shadow-[0_2px_18px_rgba(255,127,0,0.15)]">
        Your <span className="text-orange-500">Enterprise Growth Partner</span> in the Age of AI
      </h1>

      <div className="mb-6 max-w-lg mx-auto">
        <span className="relative inline-block">
          <span className="text-base sm:text-lg text-gray-300 font-semibold leading-relaxed">
            Smart. Strategic. Scalable. We empower enterprises with AI-driven solutions that drive innovation, optimize operations, and unlock new growth opportunities.
          </span>
          <span className="absolute left-0 -bottom-1 h-0.5 bg-orange-600 w-full" />
        </span>
      </div>

      <p className="text-base sm:text-lg text-gray-400 mb-12 max-w-md mx-auto">
        Partnering with you to deliver tailored strategies that accelerate transformation, improve efficiency, and generate measurable business impact at scale.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
        <a
          href="#services"
          className="bg-orange-500 w-full sm:w-1/2 px-6 py-4 rounded-full text-white font-semibold shadow-md text-center transition-colors duration-300 hover:bg-orange-700 cursor-pointer"
        >
          Discover
        </a>
        <a
          href="#contact"
          className="border border-gray-600 w-full sm:w-1/2 px-6 py-4 rounded-full text-white font-semibold text-center transition-colors duration-300 hover:bg-gray-800 cursor-pointer"
        >
          Contact Us
        </a>
      </div>
    </motion.div>
  </Container>
</section>




    {/* Brand Re-Engineering - Clean & Professional */}
    <section className="flex-col w-full py-10 bg-white font-montserrat flex items-center">
  <Container>
    <div className="flex flex-col md:flex-row items-center mx-auto gap-12 max-w-7xl w-full">
      
      {/* Text Side */}
      <motion.div
  className="flex-1"
  variants={textFromCenter}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.4 }}
>
  <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-black">
    <span>Your Business. </span>
    <span className="text-orange-600 block">Re-engineered for the Future.</span>
  </h2>
  <p className="text-xl leading-relaxed font-medium text-gray-900 mb-6 max-w-lg">
    We build resilient, data-powered growth systems tailored for enterprise scale and agility. Our expertise in AI, automation, and branding empowers you to lead digital transformation, optimize operations, and penetrate new markets.
  </p>
  <p className="text-lg text-orange-700 font-normal leading-relaxed max-w-lg">
    Collaborate with <span className="font-semibold text-black">Moren Consultancies</span> to harness technology and strategic insight that drive performance, unlock innovation, and foster sustainable advantage.
  </p>
  <div className="flex gap-6 mt-8">
    <a
      href="#services"
      className="bg-orange-600 hover:bg-orange-700 rounded-full px-8 py-3 text-white font-bold shadow-md text-lg transition hover:text-white"
    >
      Explore Services
    </a>
    <a
      href="#contact"
      className="bg-orange-50 hover:bg-orange-100 rounded-full px-8 py-3 text-orange-700 font-semibold shadow-md text-lg transition"
    >
      Let’s Talk
    </a>
  </div>
</motion.div>


      {/* Image Side */}
    <motion.div
  className="flex-1 flex items-center justify-center w-full max-w-md md:max-w-xl lg:max-w-2xl"
  style={{
    aspectRatio: 1,
    width: '100%',
    maxWidth: 520,
    minWidth: 320,
    height: 'auto'
  }}
  variants={imageFromCenter}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.4 }}
>
  <Spline 
    scene="https://prod.spline.design/QYJ0ZKLvUde7ZAxj/scene.splinecode"
    style={{
      width: '100%',
      height: '100%',
      minWidth: 300,
      maxWidth: 520,
      aspectRatio: 1,  // Ensures square canvas for full content display
      display: 'block'
    }}
  />
</motion.div>
    </div>
  </Container>

  <CurvedLoop
  marqueeText="Moren Consultant"
  speed={2}
  className="font-extrabold font-montserrat text-[3rem] sm:text-5xl md:text-6xl lg:text-7xl tracking-wide text-orange-700 drop-shadow-[0_4px_12px_rgba(0,0,0,0.10)]"
  curveAmount={0}
  direction="left"
  interactive={false}
/>

</section>



       {/* Services Grid */}
<section className="w-full py-24 bg-gray-100 text-black font-montserrat">
  <Container>
    <div className="mb-10 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 tracking-tight">
        Solution-Oriented <span className="text-orange-600">Service Portfolio</span>
      </h2>
      <p className="max-w-2xl mx-auto text-lg text-gray-700 font-medium">
        As a modern-day ITES company, technology adoption and integration have been the core essence of Stellar’s Title and Mortgage services.
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
      {services.map((cardData, idx) => {
        const isOrange = idx % 2 === 1;
        return (
          <motion.div
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.97 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 0.8,
                  ease: [0.42, 0, 0.58, 1], // ease in-out cubic bezier
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{
              scale: 1.08,
              boxShadow: isOrange
                ? "0 25px 60px rgba(255,127,0,0.25)"
                : "0 25px 60px rgba(38,38,38,0.15)",
              y: -5,
              transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
            }}
            whileTap={{ scale: 0.95, y: 0, transition: { duration: 0.15 } }}
            className={`relative rounded-2xl flex flex-col justify-between min-h-[320px] shadow-lg
              ${isOrange ? "bg-orange-600 text-white" : "bg-white text-gray-900"} 
              transition-all duration-250 p-8`}
          >
            <div>
              <h3 className={`font-bold text-2xl mb-5 leading-tight ${isOrange ? "text-white" : "text-black"}`}>
                {cardData.title}
              </h3>
              <p className={`mb-7 text-base leading-relaxed ${isOrange ? "text-white/90" : "text-gray-800"}`}>
                {cardData.desc}
              </p>
            </div>
            <div className="flex items-end justify-end">
              <span className={`mt-3 ${isOrange ? "text-white/70" : "text-gray-500"}`}>
                {icons[idx % icons.length]}
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  </Container>
</section>

   {/* Process Timeline */}
<section className="w-full py-28 bg-[#f3f4f5] text-black">
  <Container>
    <h2 className="text-4xl font-bold mb-14 text-center max-w-4xl mx-auto text-orange-600">
      Our Comprehensive Process
    </h2>
    <motion.div
      className="grid md:grid-cols-5 gap-14 text-center md:text-left"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.18,
            delayChildren: 0.2,
            when: "beforeChildren"
          }
        }
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {steps.map((step, idx) => (
        <motion.div
          key={idx}
          variants={{
            hidden: { opacity: 0, y: 40, scale: 0.98 },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 0.7,
                ease: [0.42, 0, 0.58, 1]
              }
            }
          }}
          className="flex flex-col items-center md:items-start max-w-xs mx-auto md:mx-0"
        >
          <div className="text-5xl font-extrabold text-orange-600 mb-3">{step.num}</div>
          <div className="font-semibold mb-3 text-xl text-black">{step.title}</div>
          <div className="text-sm text-gray-700 mb-4">{step.subtitle}</div>
          <div className="text-lg text-gray-600">{step.desc}</div>
        </motion.div>
      ))}
    </motion.div>
  </Container>
</section>




      {/* Metrics / Impact Facts */}
     <section className="w-full py-28 bg-[#f3f4f5] text-orange-600">
  <Container>
    <div className="grid md:grid-cols-3 gap-16 text-center max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
        viewport={{ once: true, amount: 0.6 }}
        ref={ref1}
      >
        <div className="text-7xl font-extrabold mb-3">
          {inView1 ? <CountUp end={100} duration={3} /> : 0}+
        </div>
        <div className="text-lg font-semibold text-black">Digital Ecosystems Delivered</div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1], delay: 0.15 }}
        viewport={{ once: true, amount: 0.6 }}
        ref={ref2}
      >
        <div className="text-7xl font-extrabold mb-3">
          {inView2 ? <CountUp end={3} duration={3} /> : 0}x
        </div>
        <div className="text-lg font-semibold text-black">Operational Efficiency Gains</div>
        <div className="text-sm mt-1 text-orange-700">via Automation</div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1], delay: 0.3 }}
        viewport={{ once: true, amount: 0.6 }}
        ref={ref3}
      >
        <div className="text-7xl font-extrabold mb-3">
          {inView3 ? <CountUp end={40} duration={3} /> : 0}%
        </div>
        <div className="text-lg font-semibold text-black">Average Cost Optimization</div>
      </motion.div>
    </div>
  </Container>
</section>


   {/* Products Section */}
<section
  className="relative w-full min-h-screen py-24 bg-[#f3f4f5] text-black border-t border-[#f3f4f5] overflow-hidden"
>
  {/* Beams Background */}
  <div className="absolute inset-0 w-full h-full min-h-screen z-0 pointer-events-none">
    <Beams
      beamWidth={2}
      beamHeight={15}
      beamNumber={12}
      lightColor="#FF9800"
      speed={2}
      noiseIntensity={1.75}
      scale={0.2}
      rotation={0}
    />
  </div>

  {/* Foreground Content */}
  <div className="relative z-10">
    <Container>
      <h2 className="text-3xl font-bold mb-12 text-center max-w-4xl mx-auto text-white drop-shadow-lg">
        Our Products
      </h2>
      <div className="flex flex-col items-center gap-10">
        {/* BounceCards block */}
        <BounceCards
          images={PRODUCT_LINKS.map(p => p.img)}
          containerWidth={450}
          containerHeight={400}
          animationDelay={0.5}
          animationStagger={0.08}
          enableHover={true}
        />
        {/* Product Names and Links Below Animation */}
        <div className="flex flex-wrap gap-6 justify-center mt-6 max-w-3xl mx-auto">
          {PRODUCT_LINKS.map((product, idx) => (
            <a
              key={idx}
              href={product.link}
              className="min-w-[180px] p-4 rounded-lg bg-gradient-to-br from-gray-50 to-orange-50 text-orange-600 font-bold border border-orange-200 shadow hover:bg-orange-100 hover:text-orange-800 transition text-center"
            >
              {product.name}
            </a>
          ))}
        </div>
      </div>
    </Container>
  </div>
</section>


      {/* Clients and Contact */}
      <section className="w-full py-24 bg-[#f3f4f5] text-black">
      <Container>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          className="text-3xl md:text-4xl font-extrabold mb-12 text-orange-600 text-center max-w-4xl mx-auto"
        >
          Our Valued Clients
        </motion.h2>

        {/* Logo carousel */}
        <div className="py-8">
          <LogoLoop
            logos={clientLogos}
            speed={100}
            direction="left"
            logoHeight={72}
            gap={56}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#f3f4f5"
            ariaLabel="Client logos"
          />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          transition={{ delay: 0.2 }}
          className="text-center mt-16 max-w-md mx-auto"
        >
          <h3 className="text-xl font-bold mb-4 text-orange-600">Get in Touch Today</h3>
          <p className="mb-8 text-gray-700">
            Ready to innovate, scale, and empower your enterprise with intelligent technology and strategy? Contact us to start your transformation journey.
          </p>
          <a
            href="#contact"
            className="px-12 py-5 rounded-full bg-orange-600 text-white font-bold shadow-lg hover:bg-orange-700 transition"
          >
            Contact Us
          </a>
        </motion.div>
      </Container>
    </section>

      <Footer />
    </div>
  );
}
