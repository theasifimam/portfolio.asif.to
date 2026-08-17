import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Cpu,
  FileText,
  Layers,
  Rocket,
  ShieldCheck,
  Users,
} from "lucide-react";

const engineeringValues = [
  [
    "Frontend Excellence & Architecture",
    "Deep expertise in React.js, Next.js, component architecture, state management (Redux Toolkit, Zustand), and performance profiling.",
    Code2,
  ],
  [
    "Full-Stack & API Integration",
    "Proficient in Node.js, Express.js, REST APIs, JWT authentication, MongoDB schema design, and third-party integrations.",
    Cpu,
  ],
  [
    "Production Reliability & Speed",
    "Track record of reducing page load times from 4.2s to 1.8s and building resilient systems handling 100,000+ records.",
    ShieldCheck,
  ],
  [
    "Team Collaboration & Agile Culture",
    "Experience working in Agile/Scrum environments, collaborating across backend and product teams, and code reviews.",
    Users,
  ],
];

const engineeringProcess = [
  [
    "01",
    "Requirements & Architecture",
    "Break down product requirements, establish data schemas, and design reusable component structures.",
  ],
  [
    "02",
    "Core Development",
    "Implement clean, modular code with React/Next.js, state management, and optimized REST API endpoints.",
  ],
  [
    "03",
    "Performance Profiling",
    "Audit bundle size, eliminate unnecessary re-renders, implement code splitting, and optimize query latency.",
  ],
  [
    "04",
    "Testing & Quality Check",
    "Validate edge cases, cross-browser compatibility, responsive viewports, and accessibility standards.",
  ],
  [
    "05",
    "CI/CD & Production Deployment",
    "Deploy through automated pipelines to cloud servers (VPS/Vercel) with active monitoring and zero downtime.",
  ],
  [
    "06",
    "Maintenance & Iteration",
    "Maintain high uptime, resolve production issues promptly using debugging tools, and iterate on features.",
  ],
];

function Heading({ eyebrow, title, accent, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-10 sm:mb-12 max-w-2xl"
    >
      <span className="text-xs font-mono font-bold uppercase text-primary mb-2 block">
        {eyebrow}
      </span>
      <h2 className="text-3xl sm:text-5xl font-black text-foreground leading-tight">
        {title} <span className="text-primary">{accent}</span>
      </h2>
      <p className="text-muted-foreground text-sm sm:text-lg leading-relaxed mt-4">
        {description}
      </p>
    </motion.div>
  );
}

export function WhyWorkWithMe() {
  return (
    <section
      className="py-8 sm:py-20 border-y border-border bg-card/35"
    >
      <div className="px-4 sm:px-8 md:px-12 max-w-6xl mx-auto">
        <Heading
          eyebrow="// WHAT I BRING TO YOUR TEAM"
          title="Engineering strengths &"
          accent="production mindset"
          description="A dedicated engineer focused on high-quality code, team collaboration, and measurable business impact."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
          {engineeringValues.map(([title, description, Icon], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="flex gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0">
                <Icon size={19} aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-foreground mb-1.5">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section
      id="process"
      className="py-8 sm:py-20 px-4 sm:px-8 md:px-12 max-w-6xl mx-auto"
    >
      <Heading
        eyebrow="// ENGINEERING WORKFLOW"
        title="Disciplined execution from"
        accent="concept to deployment"
        description="Structured engineering standards for delivering robust, scalable, and maintainable software."
      />
      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-3xl overflow-hidden shadow-xs">
        {engineeringProcess.map(([number, title, description], index) => (
          <motion.li
            key={number}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
            className="p-6 sm:p-7 min-h-48 bg-card/45 border-b sm:border-r border-border/60 last:border-b-0"
          >
            <span className="text-xs font-mono font-black text-primary">
              {number}
            </span>
            <h3 className="text-xl font-extrabold text-foreground mt-6 mb-3">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}

export function ProjectCta() {
  return (
    <section
      className="py-8 sm:py-20 px-4 sm:px-8 md:px-12 max-w-6xl mx-auto"
      aria-labelledby="project-cta-title"
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-foreground text-background rounded-[2rem] sm:rounded-[2.5rem] p-7 sm:p-12 md:p-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8"
      >
        <div className="max-w-2xl">
          <span className="text-xs font-mono font-bold uppercase text-primary block mb-3">
            // HIRING FOR YOUR TEAM?
          </span>
          <h2
            id="project-cta-title"
            className="text-3xl sm:text-5xl font-black leading-tight"
          >
            Ready to add a high-impact developer to your engineering team?
          </h2>
          <p className="text-background/70 text-sm sm:text-lg leading-relaxed mt-4">
            I am available for full-time Frontend Developer and Full-Stack MERN Engineer roles. Let's schedule an introductory call.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 shrink-0">
          <a
            href="/assets/asif-imam-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-primary text-white font-bold text-sm hover:opacity-90 transition-opacity"
          >
            <FileText size={16} />
            <span>Download Resume</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full border border-background/25 text-background font-bold text-sm hover:bg-background/10 transition-colors"
          >
            <span>Get in touch</span>
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
