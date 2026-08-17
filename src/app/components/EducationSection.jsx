import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Award, Languages, BookOpen, Calendar, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";

export default function EducationSection() {
  const [eduExpanded, setEduExpanded] = useState(true);
  const [certsExpanded, setCertsExpanded] = useState(true);

  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Ganga Institute of Technology and Management, MDU Rohtak",
      period: "2018 – 2022",
      grade: "Percentage: 69.57%",
      details: "Comprehensive coursework in computer science fundamentals, data structures & algorithms, database management systems, software engineering principles, and full-stack development methodologies.",
    },
  ];

  const certifications = [
    {
      title: "React – The Complete Guide",
      issuer: "Udemy",
      desc: "Deep-dive covering React hooks, state orchestration, routing, concurrent features, component architecture, and modern best practices.",
    },
    {
      title: "JavaScript Certificate",
      issuer: "SoloLearn",
      period: "2022",
      desc: "Advanced JavaScript runtime mechanics, asynchronous programming patterns, ES6+ features, closures, and DOM manipulation APIs.",
    },
  ];

  const languages = ["English (Fluent)", "Hindi (Native)"];

  return (
    <section id="education" className="py-8 sm:py-24 px-4 sm:px-8 md:px-12 max-w-6xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14 text-left"
      >
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary mb-2 block">
          // ACADEMICS & CREDENTIALS
        </span>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground">
          Education & <span className="text-primary">Certifications</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Education Card - Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 flex flex-col gap-6"
        >
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="bg-card p-5 sm:p-9 rounded-[2rem] sm:rounded-[2.5rem] border border-border hover:border-primary transition-all duration-300 shadow-xs flex flex-col justify-between group h-full"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <GraduationCap size={22} />
                  </div>
                  <button
                    onClick={() => setEduExpanded(!eduExpanded)}
                    className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-white border border-border text-foreground transition-all duration-200 cursor-pointer"
                    aria-label={eduExpanded ? "Collapse education details" : "Expand education details"}
                  >
                    {eduExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-foreground group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-semibold text-muted-foreground mt-1">
                      {edu.institution}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold px-3.5 py-1 rounded-full bg-secondary text-primary border border-border self-start sm:self-auto shrink-0">
                    <Calendar size={13} /> {edu.period}
                  </span>
                </div>

                <AnimatePresence initial={false}>
                  {eduExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6 pt-2">
                        {edu.details}
                      </p>
                      
                      <div className="pt-4 border-t border-border flex items-center gap-2 mb-2">
                        <CheckCircle2 size={16} className="text-primary shrink-0" />
                        <span className="text-xs font-mono font-bold text-foreground">
                          Academic Score: {edu.grade}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Right Column: Certifications & Additional Info */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Certifications Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card p-5 sm:p-9 rounded-[2rem] sm:rounded-[2.5rem] border border-border hover:border-primary transition-all duration-300 shadow-xs flex flex-col justify-between group"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Award size={22} />
                </div>
                <button
                  onClick={() => setCertsExpanded(!certsExpanded)}
                  className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-white border border-border text-foreground transition-all duration-200 cursor-pointer"
                  aria-label={certsExpanded ? "Collapse certifications details" : "Expand certifications details"}
                >
                  {certsExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
              </div>

              <h3 className="text-xl font-extrabold text-foreground mb-4">
                Professional Certifications
              </h3>

              <AnimatePresence initial={false}>
                {certsExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                    className="space-y-5 pt-2"
                  >
                    {certifications.map((cert, idx) => (
                      <div key={idx} className="relative pl-4 border-l-2 border-border/80 hover:border-primary transition-colors">
                        <h4 className="text-sm sm:text-base font-bold text-foreground">
                          {cert.title}
                        </h4>
                        <span className="text-xs font-mono text-primary font-bold">
                          {cert.issuer} {cert.period ? `(${cert.period})` : ""}
                        </span>
                        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                          {cert.desc}
                        </p>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Languages & Extras Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card p-5 sm:p-8 rounded-[2rem] border border-border hover:border-primary transition-all duration-300 shadow-xs flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shrink-0">
                  <Languages size={18} />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-foreground">
                    Languages Spoken
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-1.5">
                    {languages.map((lang, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-secondary text-foreground border border-border"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shrink-0">
                  <BookOpen size={18} />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-foreground">
                    Technical Writing
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                    Published 10+ technical articles on React.js and Next.js topics.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
