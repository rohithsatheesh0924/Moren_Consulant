// src/App.jsx
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css"; // Optional: for global styles

function App() {
  useEffect(() => {
    // Initialize AOS for scroll animations (customize duration/easing as desired)
    AOS.init({
      once: true,
      duration: 800,
      offset: 120,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <Router>
      {/* pt-16 offsets the fixed navbar */}
      <div className="pt-16 w-full min-h-screen bg-black">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add future routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
