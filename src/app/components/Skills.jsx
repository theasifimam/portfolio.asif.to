"use client";

import { motion } from "framer-motion";
import { CloudCog, Code2, Database, Server, Cpu, Wrench } from "lucide-react";

const stackGroups = [
  {
    title: "Core Frontend",
    description:
      "Modern component-driven architectures, responsive design, and cross-platform apps.",
    icon: Code2,
    technologies: [
      "React.js",
      "Next.js",
      "React Native",
      "JavaScript (ES6+)",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    title: "State Management & Caching",
    description:
      "Centralized state orchestration, normalized caching, and prop drilling elimination.",
    icon: Cpu,
    technologies: [
      "Redux",
      "Redux Toolkit",
      "RTK Query",
      "Zustand",
      "Context API",
    ],
  },
  {
    title: "Backend & APIs",
    description:
      "Scalable servers, RESTful endpoints, token authentication, and real-time events.",
    icon: Server,
    technologies: [
      "Node.js",
      "Express.js",
      "REST API Development",
      "JWT Authentication",
      "Socket.io",
      "WebRTC",
    ],
  },
  {
    title: "Databases & Modeling",
    description:
      "Data modeling, indexing, aggregation pipelines, and high-concurrency queries.",
    icon: Database,
    technologies: ["MongoDB", "Mongoose", "Database Indexing", "Data Modeling"],
  },
  {
    title: "Integrations & Services",
    description:
      "Third-party APIs, transaction processors, messaging protocols, and mailers.",
    icon: CloudCog,
    technologies: [
      "Razorpay Gateway",
      "Twilio OTP",
      "Mailing Services (SMTP)",
      "RESTful Webhooks",
    ],
  },
  {
    title: "Tools & DevOps Platforms",
    description:
      "Version control, server hosting, containerization, debugging, and agile workflows.",
    icon: Wrench,
    technologies: [
      "Git & GitHub",
      "DigitalOcean VPS",
      "CI/CD Pipelines",
      "Postman",
      "Linux",
      "npm",
      "React DevTools",
      "Agile/Scrum",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-12 sm:py-24 px-4 sm:px-8 md:px-12 max-w-6xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 max-w-3xl"
      >
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary mb-2 block">
          // TECHNICAL SKILLS
        </span>
        <h2
          id="skills-heading"
          className="text-3xl sm:text-5xl font-black tracking-tight text-foreground mb-4"
        >
          Core & Secondary <span className="text-primary">Technical Skills</span>
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
          Comprehensive full-stack toolset utilized across 3+ years of professional development for production web and mobile products.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5">
        {stackGroups.map(
          ({ title, description, icon: Icon, technologies }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              className={`bg-card p-6 rounded-[2rem] border border-border shadow-xs hover:border-primary transition-colors ${
                index < 2 ? "lg:col-span-3" : "lg:col-span-3"
              }`}
            >
              <div className="w-11 h-11 rounded-full bg-primary/10 border border-primary/20 text-primary flex items-center justify-center mb-5">
                <Icon size={20} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-black text-foreground mb-2">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {description}
              </p>
              <div className="flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="px-3 py-1.5 rounded-full bg-secondary border border-border text-xs font-mono font-bold text-foreground hover:border-primary/50 transition-colors"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </motion.article>
          ),
        )}
      </div>
    </section>
  );
}
