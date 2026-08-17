import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Code2,
  FileText,
  Phone,
} from "lucide-react";

export default function HeroSection() {
  const name = "Asif Imam";

  const stats = [
    { label: "Years Experience", value: "3+" },
    { label: "Page Load Reduction", value: "57%" },
    { label: "Production Records", value: "100k+" },
    { label: "Core Stack", value: "MERN / Next.js" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[78vh] flex items-center pt-6 pb-12 px-4 sm:px-8 md:px-12 max-w-6xl mx-auto"
      aria-labelledby="hero-title"
    >
      <div className="flex flex-col items-center sm:items-start w-full text-center sm:text-left">
        {/* Developer Avatar & Status Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-8"
        >
          <div className="relative">
            <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-white text-lg font-black shadow-md border border-white/10">
              AI
            </div>
            <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-background"></span>
            </span>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="text-[10px] font-mono font-bold uppercase text-primary">
                // OPEN FOR ENGINEERING ROLES
              </span>
            </div>
            <h2 className="text-sm font-extrabold text-foreground mt-0.5">
              {name}
            </h2>
            <div className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold text-muted-foreground mt-1">
              <Code2 size={11} /> Frontend Developer / Full Stack Developer
            </div>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mb-6 w-full"
        >
          <h1
            id="hero-title"
            className="font-title text-[2.5rem] sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.04] text-foreground text-center sm:text-left"
          >
            Scalable. <span className="text-primary">Fast.</span> Production
            Ready.
          </h1>
        </motion.div>

        {/* Professional summary introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mb-10 mx-auto sm:mx-0"
        >
          <p className="text-base sm:text-xl font-medium leading-relaxed text-foreground text-center sm:text-left">
            Results-driven MERN Stack Developer with 3+ years of experience
            building scalable, high-performance web applications using React.js,
            Next.js, Node.js, Express.js, and MongoDB.
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-muted-foreground text-center sm:text-left mt-4">
            Strong expertise in frontend architecture, state management (Redux
            Toolkit, Zustand), REST API integration, and performance
            optimization with a proven track record of reducing page load times
            and delivering robust codebases.
          </p>
        </motion.div>

        {/* Actions & Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-14 w-full"
        >
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href="/assets/asif-imam-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 h-13 px-8 rounded-full bg-primary hover:opacity-90 text-white font-bold text-sm transition-all shadow-sm w-full sm:w-auto"
            >
              <FileText size={16} />
              <span>Download Resume</span>
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="#experience"
              className="inline-flex items-center justify-center h-13 px-8 rounded-full bg-card hover:bg-secondary text-foreground font-bold text-sm border border-border transition-all w-full sm:w-auto"
            >
              View Experience
            </a>
          </div>

          <div className="flex items-center justify-center gap-3 ml-0 sm:ml-2 mt-2 sm:mt-0">
            <a
              href="https://github.com/theasifimam"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-card hover:bg-secondary border border-border text-foreground hover:text-primary transition-all hover:scale-105"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/theasifimam"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-card hover:bg-secondary border border-border text-foreground hover:text-primary transition-all hover:scale-105"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://wa.me/919911471995"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-card hover:bg-emerald-500/10 hover:text-emerald-500 border border-border transition-all hover:scale-105"
              aria-label="WhatsApp Contact"
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="currentColor"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.392 9.806-9.8.001-2.605-1.01-5.057-2.85-6.895-1.839-1.837-4.29-2.846-6.899-2.847-5.41 0-9.81 4.397-9.813 9.8-.001 1.512.41 2.99 1.194 4.295l-.993 3.624 3.71-.973zm8.415-4.545c-.328-.164-1.94-.959-2.242-1.07-.301-.11-.522-.164-.74.163-.219.329-.85.842-1.041 1.07-.19.227-.383.254-.712.09-1.464-.734-2.42-1.301-3.32-2.855-.24-.411.24-.381.688-1.272.073-.146.037-.274-.018-.384-.055-.11-.522-1.258-.716-1.722-.19-.456-.381-.393-.522-.4h-.446c-.155 0-.406.059-.619.292-.213.232-.813.793-.813 1.933 0 1.14.83 2.242.946 2.4.115.158 1.632 2.49 3.955 3.493.553.239 1.002.381 1.345.49.555.176 1.06.151 1.46.091.446-.066 1.94-.792 2.212-1.52.274-.728.274-1.353.19-1.47-.083-.117-.308-.182-.637-.346z" />
              </svg>
            </a>
            <a
              href="mailto:asif@asif.to"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-card hover:bg-secondary border border-border text-foreground hover:text-primary transition-all hover:scale-105"
              aria-label="Send Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        {/* Quick Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-border"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="p-5 rounded-3xl bg-card border border-border flex flex-col justify-center shadow-xs transition-all duration-300 hover:border-primary/40"
            >
              <span className="text-2xl sm:text-3xl font-black text-foreground">
                {stat.value}
              </span>
              <span className="text-xs font-mono font-bold text-muted-foreground mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
