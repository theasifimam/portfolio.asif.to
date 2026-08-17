import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2, ChevronDown, ChevronUp, MapPin } from "lucide-react";

function ExperienceCard({ exp, index }) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative group"
    >
      {/* Solid Node Bullet */}
      <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-card border-2 border-primary group-hover:scale-125 group-hover:bg-primary transition-all duration-300 shadow-xs flex items-center justify-center">
        <span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:bg-white" />
      </div>

      {/* Extra Rounded Experience Card */}
      <div className="bg-card p-5 sm:p-9 rounded-3xl border border-border group-hover:border-primary transition-all duration-300 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-foreground group-hover:text-primary transition-colors">
              {exp.role}
            </h3>
            <span className="text-sm font-semibold text-muted-foreground flex items-center gap-2 mt-1">
              <Briefcase size={14} className="text-primary" />{" "}
              {exp.company}
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                • <MapPin size={11} /> {exp.location}
              </span>
            </span>
          </div>
          <div className="flex items-center gap-3 self-start sm:self-auto">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold px-3.5 py-1 rounded-full bg-secondary text-primary border border-border">
              <Calendar size={13} /> {exp.period}
            </span>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1.5 rounded-full bg-secondary hover:bg-primary hover:text-white border border-border text-foreground transition-all duration-200 cursor-pointer"
              aria-label={isExpanded ? "Collapse highlights" : "Expand highlights"}
            >
              {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              <ul className="space-y-2.5 my-5 pt-1">
                {exp.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-xs sm:text-sm text-muted-foreground leading-relaxed"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-primary shrink-0 mt-0.5"
                    />
                    <span className="text-foreground/90">{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-wrap gap-2 pt-4 border-t border-border mt-4">
          {exp.skills.map((skill, sIdx) => (
            <span
              key={sIdx}
              className="text-[11px] font-mono font-semibold px-3 py-1 rounded-full bg-secondary text-foreground border border-border"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const experiences = [
    {
      company: "Volans Infomatics Pvt. Ltd.",
      role: "Full Stack Developer",
      period: "Dec 2022 – Dec 2025",
      location: "Noida, India",
      highlights: [
        "Built 50+ reusable React components, improving development efficiency by 34%.",
        "Reduced page load time from 4.2s to 1.8s through frontend optimization and code splitting.",
        "Implemented Redux Toolkit across 8+ modules, reducing prop drilling by 85%.",
        "Resolved 100+ production issues using React DevTools, debugging, and performance profiling.",
        "Collaborated with backend teams for REST API integration and scalable feature development.",
      ],
      skills: [
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Redux Toolkit",
        "React DevTools",
        "REST APIs",
        "Tailwind CSS",
      ],
    },
    {
      company: "Softmind Infotech Pvt. Ltd.",
      role: "React.js Developer Intern",
      period: "Sep 2022 – Dec 2022",
      location: "Noida, India",
      highlights: [
        "Contributed to 5 React-based eCommerce and SaaS applications with 20+ responsive pages.",
        "Developed a Facebook web clone with responsive UI, reusable components, and dark mode support.",
      ],
      skills: ["React.js", "JavaScript (ES6+)", "eCommerce", "SaaS", "REST APIs", "Tailwind CSS"],
    },
  ];

  return (
    <section
      id="experience"
      className="py-8 sm:py-24 px-4 sm:px-8 md:px-12 max-w-5xl mx-auto"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14 text-left"
      >
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary mb-2 block">
          // CAREER TRAJECTORY & EXPERIENCE
        </span>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground">
          Professional <span className="text-primary">Engineering History</span>
        </h2>
      </motion.div>

      {/* Timeline Wrapper */}
      <div className="relative pl-6 sm:pl-10 border-l-2 border-border space-y-12">
        {experiences.map((exp, i) => (
          <ExperienceCard key={i} exp={exp} index={i} />
        ))}
      </div>
    </section>
  );
}
