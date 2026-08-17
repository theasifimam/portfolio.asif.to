import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Moon, Sun, FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function Header({
  isDark,
  setIsDark,
  activeSection,
  handleScrollTo,
}) {
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-30 px-4 sm:px-8 py-4 transition-all duration-300">
      <div
        className={`max-w-6xl mx-auto rounded-full px-5 sm:px-7 py-3 flex items-center justify-between transition-all duration-300 border ${
          scrolled
            ? "bg-card/95 border-border shadow-xl backdrop-blur-md"
            : "bg-card/60 border-border/50 backdrop-blur-sm"
        }`}
      >
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleScrollTo(e, "#home")}
          className="group flex items-center gap-2.5 text-base sm:text-lg font-black text-foreground transition-opacity hover:opacity-85"
        >
          <div className="relative w-9 h-9 rounded-full overflow-hidden border border-border/80 shadow-sm shrink-0 bg-primary/10">
            <Image
              src="/asifimam.jpg"
              alt="Asif Imam"
              fill
              sizes="36px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-extrabold text-sm sm:text-base leading-none">
              Asif <span className="text-primary">Imam</span>
            </span>
            <span className="text-[10px] font-mono text-muted-foreground leading-tight hidden sm:block">
              Frontend / Full-Stack Developer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center gap-1"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`relative px-3 py-2 text-xs font-bold rounded-full transition-all duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-primary rounded-full z-0 shadow-sm"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Actions (Theme toggle & Resume / Contact CTA) */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle theme"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary hover:bg-muted border border-border text-foreground transition-colors cursor-pointer"
          >
            {isDark ? (
              <Sun size={17} className="text-amber-400" />
            ) : (
              <Moon size={17} className="text-primary" />
            )}
          </button>

          <a
            href="/assets/asif-imam-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold px-5 py-2.5 rounded-full bg-primary text-white hover:opacity-90 transition-opacity shadow-sm"
          >
            <FileText size={14} />
            <span>Resume</span>
          </a>
        </div>
      </div>
    </header>
  );
}
