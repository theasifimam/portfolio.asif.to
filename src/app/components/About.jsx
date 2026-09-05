import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Layout,
  Database,
  Cpu,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function About() {
  const bentoCards = [
    {
      title: "Frontend Architecture & Speed",
      icon: <Layout className="w-5 h-5 text-primary" />,
      description:
        "Building 50+ reusable components, code splitting, and frontend optimization that reduced page load times from 4.2s to 1.8s.",
      badge: "React.js + Next.js",
    },
    {
      title: "State Orchestration & Data Flow",
      icon: <Cpu className="w-5 h-5 text-primary" />,
      description:
        "Implementing Redux Toolkit across 8+ modules, reducing prop drilling by 85%, with RTK Query and Zustand for cached data flows.",
      badge: "Redux + Zustand",
    },
    {
      title: "Backend Services & REST APIs",
      icon: <Server className="w-5 h-5 text-primary" />,
      description:
        "Developing secure RESTful APIs, JWT authentication, Twilio OTP verification, Razorpay payments, and real-time Socket.io features.",
      badge: "Node.js + Express.js",
    },
    {
      title: "Database & Cloud Infrastructure",
      icon: <Database className="w-5 h-5 text-primary" />,
      description:
        "Optimizing MongoDB queries for 100,000+ records with 20% faster load times, deploying to DigitalOcean VPS, and CI/CD automation.",
      badge: "MongoDB + DigitalOcean",
    },
  ];

  return (
    <section
      id="about"
      className="py-8 sm:py-24 px-4 sm:px-8 md:px-12 max-w-6xl mx-auto"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-left"
      >
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary mb-2 block">
          // PROFESSIONAL SUMMARY & EXPERTISE
        </span>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground">
          Engineering for{" "}
          <span className="text-primary">Scalability & Performance</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Bio Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 bg-card p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] border border-border flex flex-col justify-between shadow-xs"
        >
          <div>
            <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6">
              <Zap size={22} />
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-4">
              Full-Stack Developer with 4 Years Experience
            </h3>

            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-5">
              Results-driven MERN Stack Developer building scalable, high-performance web applications using React.js, Next.js, Node.js, Express.js, and MongoDB.
            </p>

            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Strong expertise in frontend architecture, state management (Redux Toolkit, Zustand), REST API integration, authentication, and performance optimization. Proven ability to deliver production-ready solutions, improve application speed, and build reusable, maintainable codebases.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-border flex items-center justify-between text-xs font-mono font-bold text-muted-foreground">
            <span className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-primary" /> Production Tested
            </span>
            <span className="flex items-center gap-2">
              <Code2 size={16} className="text-primary" /> Clean Architecture
            </span>
          </div>
        </motion.div>

        {/* Bento Sub-Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {bentoCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-card p-5 sm:p-7 rounded-3xl border border-border hover:border-primary transition-all duration-300 shadow-xs flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-full bg-secondary border border-border group-hover:scale-105 transition-transform">
                    {card.icon}
                  </div>
                  <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-secondary text-primary border border-border">
                    {card.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {card.title}
                </h3>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
