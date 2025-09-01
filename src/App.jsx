import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import TrustedBy from "./Components/TrustedBy";
import Services from "./Components/Services";
import OurWork from "./Components/OurWork";
import Teams from "./Components/Teams";
import ContactUs from "./Components/ContactUs";
import { Toaster } from "react-hot-toast";
import Footer from "./Components/Footer";

function App() {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  // Ref for custom cursor position tracking

  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.1;
      position.current.y += (mouse.current.y - position.current.y) * 0.1;

      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0)`;
        outlineRef.current.style.transform = `translate3d(${position.current.x}px, ${position.current.y}px, 0)`;
      }
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  return (
    <div className="dark:bg-black relative">
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <Services />
      <OurWork />
      <Teams />
      <ContactUs />
      <Footer theme={theme} />

      {/* Custom Curson Ring */}

      {/* Outline */}
      <div
        ref={outlineRef}
        className="fixed top-0 left-0 h-10 w-10 rounded-full border border-primary pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2" style={{transform: 'transform 0.1s ease-out'}}
      ></div>

      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 h-3 w-3 rounded-full bg-primary pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      ></div>
    </div>
  );
}

export default App;
