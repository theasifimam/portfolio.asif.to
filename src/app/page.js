"use client";
import React, { useState, useEffect, useCallback } from "react";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import About from "./components/About";
import HeroSection from "./components/HeroOptions/HeroSection";
import Experience from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import MobileTabBar from "./components/MobileTabBar";
import {
  ProcessSection,
  ProjectCta,
  WhyWorkWithMe,
} from "./components/ClientSections";

export default function Portfolio() {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  useEffect(() => {
    const sections = [
      "home",
      "about",
      "experience",
      "projects",
      "skills",
      "education",
      "contact",
    ];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250; // offset for active section highlighting

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection((prev) => (prev !== section ? section : prev));
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = useCallback((e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans transition-colors duration-300 relative selection:bg-indigo-500/30">
      <Header
        isDark={isDark}
        setIsDark={setIsDark}
        activeSection={activeSection}
        handleScrollTo={handleScrollTo}
      />

      <main className="relative z-10 space-y-10 sm:space-y-20 lg:space-y-24 pt-24 pb-28 md:pb-16">
        <HeroSection />
        <About />
        <Experience />
        <Projects />
        <WhyWorkWithMe />
        <Skills />
        <EducationSection />
        <ProcessSection />
        <ProjectCta />
        <Contact />
      </main>

      <Footer isDark={isDark} />
      <MobileTabBar
        activeSection={activeSection}
        handleScrollTo={handleScrollTo}
      />
    </div>
  );
}
