import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import TrustedBy from "./Components/Trustedby/TrustedBy";
import Services from "./Components/Services/Services";
import OurWork from "./Components/OurWork/OurWork";
import Team from "./Components/Team/Team";
import ContactUs from "./Components/ContactUs/ContactUs";
import Footer from "./Components/Footer/Footer";
import ServiceDetails from "./Components/ServiceDetails/ServiceDetails";
import About from "./Components/About/About";
import SEO from "./Components/SEO/SEO";
import { Toaster } from "react-hot-toast";

function CustomCursor() {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  useEffect(() => {
    const media = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );

    const mouse = { x: 0, y: 0 };
    const position = { x: 0, y: 0 };

    let visible = false;
    let frameId = null;

    const setVisible = (nextVisible) => {
      visible = nextVisible;

      document.documentElement.classList.toggle(
        "custom-cursor-active",
        nextVisible
      );

      if (dotRef.current) {
        dotRef.current.style.opacity = nextVisible ? "1" : "0";
      }

      if (outlineRef.current) {
        outlineRef.current.style.opacity = nextVisible ? "1" : "0";
      }
    };

    const paint = () => {
      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate3d(${mouse.x - 4}px, ${mouse.y - 4}px, 0)`;
      }

      if (outlineRef.current) {
        outlineRef.current.style.transform =
          `translate3d(${position.x - 20}px, ${position.y - 20}px, 0)`;
      }
    };

    const animate = () => {
      frameId = null;
      if (!visible) return;

      position.x += (mouse.x - position.x) * 0.16;
      position.y += (mouse.y - position.y) * 0.16;

      paint();
      frameId = requestAnimationFrame(animate);
    };

    const hide = () => {
      setVisible(false);

      if (frameId !== null) {
        cancelAnimationFrame(frameId);
        frameId = null;
      }
    };

    const handlePointerMove = (event) => {
      const target = event.target;

      const overWebsite =
        target instanceof Element &&
        target.closest("[data-site-content]") &&
        !target.closest("iframe");

      if (
        !media.matches ||
        event.pointerType !== "mouse" ||
        !overWebsite
      ) {
        hide();
        return;
      }

      mouse.x = event.clientX;
      mouse.y = event.clientY;

      if (!visible) {
        position.x = mouse.x;
        position.y = mouse.y;
        paint();
        setVisible(true);
      }

      if (frameId === null) {
        frameId = requestAnimationFrame(animate);
      }
    };

    const handlePointerOut = (event) => {
      if (!event.relatedTarget) hide();
    };

    const handleVisibility = () => {
      if (document.hidden) hide();
    };

    document.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerout", handlePointerOut);
    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("blur", hide);
    media.addEventListener("change", hide);

    return () => {
      hide();
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerout", handlePointerOut);
      document.removeEventListener(
        "visibilitychange",
        handleVisibility
      );
      window.removeEventListener("blur", hide);
      media.removeEventListener("change", hide);
    };
  }, []);

  return createPortal(
    <>
      <div
        ref={outlineRef}
        aria-hidden="true"
        className="gp-cursor gp-cursor-ring"
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className="gp-cursor gp-cursor-dot"
      />
    </>,
    document.body
  );
}

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      theme === "dark"
    );
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    let timeoutId;
    let attempts = 0;

    if (!location.hash) {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
      return;
    }

    const sectionId = location.hash.slice(1);

    const scrollToSection = () => {
      const element = document.getElementById(sectionId);

      if (element) {
        const navbar = document.querySelector("[data-site-navbar]");
        const navbarHeight =
          navbar?.getBoundingClientRect().height || 90;

        const top =
          element.getBoundingClientRect().top +
          window.scrollY -
          navbarHeight;

        window.scrollTo({
          top: Math.max(0, top),
          behavior: "smooth",
        });
        return;
      }

      attempts += 1;

      if (attempts < 30) {
        timeoutId = window.setTimeout(scrollToSection, 100);
      }
    };

    timeoutId = window.setTimeout(scrollToSection, 100);

    return () => window.clearTimeout(timeoutId);
  }, [location.pathname, location.hash]);

  return (
    <>
      <div
        data-site-content
        className="relative min-h-screen bg-white dark:bg-black"
      >
        <SEO
          title="Growth Pilot"
          description="Social media growth, graphic designing, SEO optimization and digital advertising solutions for modern businesses."
          keywords="social media growth, graphic designing, SEO optimization, digital advertising, branding agency, digital marketing"
          image="https://growthpilotdigital.com/pre.jpeg"
          url="https://growthpilotdigital.com/"
        />

        <Toaster />

        <Navbar theme={theme} setTheme={setTheme} />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <TrustedBy />
                <Services />
                <OurWork />
                <Team />
                <ContactUs />
              </>
            }
          />

          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<OurWork />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
          <Route path="/:serviceId" element={<ServiceDetails />} />
        </Routes>

        <Footer theme={theme} />
      </div>

      <CustomCursor />
    </>
  );
}

export default App;