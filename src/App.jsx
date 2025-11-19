import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ApplicationServices from "./pages/ApplicationServices";
import Automation from "./pages/Automation";
import Bi from "./pages/Bi";
import Ep from "./pages/Ep";
import Se from "./pages/Se";
import Aiml from "./pages/Aiml";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      offset: 120,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <Router>
      <Navbar /> {/* Always at the top */}
      <div className="pt-16 w-full min-h-screen bg-black">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/application-services" element={<ApplicationServices />} />
          <Route path="/automation" element={<Automation />} />
          <Route path="/cognitive-service" element={<Aiml />} />
          <Route path="/data-bi" element={<Bi />} />
          <Route path="/enterprise-platforms" element={<Ep />} />
          <Route path="/software-engineering" element={<Se />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
      <Footer /> {/* Always at the bottom */}
    </Router>
  );
}

export default App;
