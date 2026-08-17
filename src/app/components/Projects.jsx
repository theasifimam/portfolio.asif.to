import React, { useRef, useState } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Globe,
  Smartphone,
  Cpu,
  Maximize2,
  Layers,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MobileAppShowcase from "./MobileAppShowcase";
import { ProjectModal } from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const projectRailRef = useRef(null);

  const scrollProjects = (direction) => {
    const rail = projectRailRef.current;
    if (!rail) return;

    const card = rail.querySelector("article");
    const gap = Number.parseFloat(window.getComputedStyle(rail).columnGap) || 0;
    const distance = card
      ? card.getBoundingClientRect().width + gap
      : rail.clientWidth;

    rail.scrollBy({ left: direction * distance, behavior: "smooth" });
  };

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Platforms", icon: <Globe size={14} /> },
    {
      id: "mobile",
      label: "Mobile Apps",
      icon: <Smartphone size={14} />,
    },
    { id: "enterprise", label: "Enterprise & Admin", icon: <Cpu size={14} /> },
  ];

  const projects = [
    {
      title: "asif.to",
      category: "web",
      categoryLabel: "Developer Education Platform",
      subtitle: "A modern coding tutorial and learning platform",
      description:
        "A self-built developer education platform featuring structured courses, programming tutorials, technical articles, and a search-engine-optimized learning experience.",
      image: "/assets/asif.to.png",
      imageAlt:
        "Asif.to coding tutorial and developer education platform interface",
      problem:
        "Create a structured learning platform where developers can learn modern web development technologies through organized courses, chapters, tutorials, and practical technical content.",
      solution:
        "Built a modern full-stack educational platform with structured courses and chapters covering JavaScript, React.js, Next.js, Node.js, MongoDB, HTML, and other web development technologies, with a focus on accessibility, content discoverability, and SEO.",
      contribution:
        "Designed, developed, and deployed the platform independently, including the frontend architecture, content structure, responsive UI, SEO implementation, course organization, and overall product experience.",
      tech: [
        "Next.js",
        "React.js",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "SEO Architecture",
        "Responsive Design",
      ],
      metrics: [
        "Structured courses and technical chapters",
        "SEO-focused content architecture for high discoverability",
        "Responsive and accessible learning experience",
        "Independently designed, developed, and maintained",
      ],
      link: "https://asif.to",
    },
    {
      title: "RajulEye.com",
      category: "web",
      categoryLabel: "Full-Stack E-Commerce",
      subtitle: "Production-ready eyewear shopping platform",
      description:
        "Independently built and deployed a production-ready full-stack eCommerce platform using Next.js, RTK Query, Express.js, MongoDB, and Mongoose on a DigitalOcean VPS.",
      image: "/rajuleye-preview.png",
      imageAlt: "RajulEye eyewear e-commerce website interface",
      problem:
        "Build a scalable, reliable eyewear platform handling catalog discovery, phone verification, and checkout while maintaining fast response times under heavy catalog volume.",
      solution:
        "Built a Next.js storefront backed by Express and MongoDB, with RTK Query data flows, Razorpay payment gateway, Twilio OTP phone verification, and token-based authentication.",
      contribution:
        "Handled the full-stack architecture, payment and OTP integrations, API optimization, and production deployment to a DigitalOcean VPS.",
      tech: [
        "Next.js",
        "RTK Query",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "Razorpay",
        "Twilio OTP",
        "DigitalOcean VPS",
      ],
      metrics: [
        "100,000+ records handled with 20% faster load times",
        "Secure Razorpay payments and Twilio OTP phone verification",
        "DigitalOcean VPS Linux deployment and infrastructure setup",
      ],
      link: "https://RajulEye.com",
    },
    {
      title: "Admin Dashboard",
      category: "enterprise",
      categoryLabel: "Operations & Admin",
      subtitle: "Scalable admin panel for business operations",
      description:
        "Developed a scalable admin panel (admin.rajuleye.com) for product, order, and business management with secure authentication, analytics-ready architecture, and real-time operational workflows.",
      image: "/assets/rajuleye-admin.png",
      imageAlt: "RajulEye administration dashboard interface",
      problem:
        "Give authorized operators one centralized place to manage products, inventory, customer orders, and sales data with high security.",
      solution:
        "Developed a React admin console connected to REST APIs, with protected access, catalog controls, stock reporting, analytics views, and order dispatch tracking.",
      contribution:
        "Built the application interface, administration workflows, authentication checks, and backend REST data integration.",
      tech: [
        "React.js",
        "Tailwind CSS",
        "Express.js",
        "MongoDB",
        "REST APIs",
        "JWT Auth",
      ],
      metrics: [
        "Role-based authentication and secure token handling",
        "Catalog, stock reporting, and inventory management",
        "Order, dispatch, and analytics operational workflows",
      ],
      link: "https://admin.rajuleye.com",
    },
    {
      title: "Mazlis App",
      category: "mobile",
      categoryLabel: "Mobile Social App",
      subtitle: "Cross-platform social media and messaging app",
      description:
        "Built a social media platform using Socket.io, RTK Query, and WebRTC with real-time messaging and interactive features.",
      image: "/assets/mazlis.jpg",
      imageAlt: "Mazlis mobile social application screens",
      screenshots: [
        {
          src: "/assets/mazlis.jpg",
          alt: "Mazlis mobile application home screen",
          label: "Home",
        },
        {
          src: "/assets/mazlis3.jpg",
          alt: "Mazlis mobile application social screen",
          label: "Social",
        },
        {
          src: "/assets/mazlis2.jpg",
          alt: "Mazlis mobile application messaging screen",
          label: "Messages",
        },
      ],
      problem:
        "Build a high-performance cross-platform mobile experience for social interaction and real-time communication across Android and iOS.",
      solution:
        "Developed the app with React Native and Expo, using Socket.io for instant messaging, WebRTC connections for voice/video features, and RTK Query for state caching.",
      contribution:
        "Implemented the mobile UI client, real-time communication flows, WebRTC connections, and centralized application state management.",
      tech: [
        "React Native",
        "Expo",
        "Socket.io",
        "RTK Query",
        "WebRTC",
        "Node.js",
      ],
      metrics: [
        "Socket.io real-time chat and communication channels",
        "WebRTC peer-to-peer audio and video integration",
        "RTK Query caching for offline-first performance",
      ],
    },
    {
      title: "HRMS System",
      category: "enterprise",
      categoryLabel: "Enterprise HRMS",
      subtitle: "Employee management and workflow automation",
      description:
        "Implemented authentication, Redux Toolkit, form validation, and REST APIs for employee management workflows.",
      problem:
        "Automate internal HR operations, employee records, attendance tracking, and leave management workflows in one centralized system.",
      solution:
        "Constructed a secure management system with Redux Toolkit for unified state, React Hook Form for validation, and RESTful API integrations.",
      contribution:
        "Implemented authentication, state management, interactive dashboards, and employee workflow modules.",
      tech: [
        "React.js",
        "Redux Toolkit",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST APIs",
      ],
      image: "/assets/hrms.png",
      metrics: [
        "Centralized state management with Redux Toolkit",
        "Strict form validation and JWT authentication",
        "Comprehensive employee lifecycle and leave workflows",
      ],
    },
    {
      title: "AI-Based Educational Platform",
      category: "web",
      categoryLabel: "EdTech & Testing",
      subtitle: "Online test platform with 99.8% uptime",
      description:
        "Developed an online test platform with 99.8% uptime and scalable API-driven architecture.",
      problem:
        "Deliver uninterrupted, high-concurrency online examinations with dynamic question delivery and automated evaluation.",
      solution:
        "Architected an API-driven frontend and backend system with robust error handling, caching, and state synchronization.",
      contribution:
        "Developed the interactive test interface, timer mechanisms, result calculations, and responsive student portal.",
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST APIs",
        "Tailwind CSS",
      ],
      image: "/assets/web-ui.png",
      metrics: [
        "99.8% platform uptime achieved in production",
        "Scalable API-driven architecture for rapid test delivery",
        "Real-time evaluation and performance analytics",
      ],
    },
    {
      title: "Dunches",
      category: "web",
      categoryLabel: "Web & E-Commerce",
      subtitle: "Online storefront for an organic snacks brand",
      description:
        "A responsive full-stack store with product discovery, flavor filtering, cart management, and order handling.",
      problem:
        "Present a snack catalog clearly and provide a mobile-friendly path from product discovery to cart and checkout.",
      solution:
        "Built the storefront and backend with Next.js, Node.js, Express, MongoDB, and Tailwind CSS, including flavor-based browsing and cart workflows.",
      contribution:
        "Handled the responsive shopping interface, product experience, backend order flow, and database integration.",
      tech: ["Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      image: "/assets/dunches.png",
      metrics: [
        "Flavor-based product discovery and filtering",
        "Responsive shopping cart management",
        "Backend order handling and data persistence",
      ],
      link: "https://dunches.mazlis.com",
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="py-8 sm:py-24 px-4 sm:px-8 md:px-12 max-w-6xl mx-auto"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center flex flex-col items-center"
      >
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary mb-2 block">
          // FEATURED PROJECTS & CODEBASES
        </span>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground mb-4">
          Production Systems,{" "}
          <span className="text-primary">Built End-to-End</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl text-base sm:text-lg leading-relaxed">
          Selected full-stack web applications, developer platforms, mobile
          apps, and enterprise dashboards. Click any project to inspect the
          architecture, problem, and technical solution.
        </p>
      </motion.div>

      {/* Category Filter Tabs */}
      <div className="flex overflow-x-auto pb-2 -mx-4 px-4 gap-2 md:flex-wrap md:justify-center md:mx-0 md:px-0 no-scrollbar mb-10">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 shrink-0 cursor-pointer ${
                isActive
                  ? "bg-primary text-white shadow-sm border border-primary"
                  : "bg-card text-muted-foreground hover:text-foreground hover:bg-secondary border border-border"
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      <div className="flex justify-end gap-2 mb-4">
        <button
          type="button"
          onClick={() => scrollProjects(-1)}
          title="Previous projects"
          aria-label="Scroll to previous project"
          className="w-11 h-11 rounded-full bg-card hover:bg-primary hover:text-white text-foreground border border-border transition-colors flex items-center justify-center cursor-pointer"
        >
          <ChevronLeft size={20} aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => scrollProjects(1)}
          title="Next projects"
          aria-label="Scroll to next project"
          className="w-11 h-11 rounded-full bg-card hover:bg-primary hover:text-white text-foreground border border-border transition-colors flex items-center justify-center cursor-pointer"
        >
          <ChevronRight size={20} aria-hidden="true" />
        </button>
      </div>

      {/* Horizontally scrollable project cards */}
      <motion.div
        ref={projectRailRef}
        layout
        className="flex gap-5 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 -mx-4 sm:-mx-8 sm:px-8 md:-mx-12 md:px-12 no-scrollbar rounded-3xl px-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <motion.article
              layout
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              className="w-[86vw] max-w-md sm:w-104 md:w-md shrink-0 snap-start bg-card group rounded-[2rem] sm:rounded-[2.5rem] border border-border overflow-hidden shadow-xs hover:border-primary transition-colors duration-300 flex flex-col"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className="w-full aspect-video bg-secondary/60 border-b border-border overflow-hidden relative text-left cursor-pointer"
                aria-label={`Open ${project.title} case study`}
              >
                {project.screenshots?.length ? (
                  <MobileAppShowcase
                    title={project.title}
                    screenshots={project.screenshots}
                    compact
                    interactive={false}
                    className="h-full"
                  />
                ) : project.image ? (
                  <Image
                    src={project.image}
                    alt={project.imageAlt || `${project.title} interface`}
                    fill
                    sizes="(max-width: 640px) 86vw, 28rem"
                    className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-secondary">
                    <Globe
                      size={34}
                      className="text-primary"
                      aria-hidden="true"
                    />
                  </div>
                )}
                <span className="absolute top-4 left-4 text-[10px] font-mono font-bold px-3 py-1.5 rounded-md bg-card/95 text-primary border border-border">
                  {project.categoryLabel}
                </span>
              </button>

              <div className="p-5 sm:px-7 sm:pt-6 sm:pb-5 flex-1">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="w-full text-left cursor-pointer"
                >
                  <h3 className="text-xl font-extrabold tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 text-sm font-semibold text-muted-foreground line-clamp-1">
                    {project.subtitle}
                  </p>
                </button>
              </div>

              <div className="px-5 pb-5 sm:px-7 sm:pb-7">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-3 rounded-full bg-secondary hover:bg-primary hover:text-white text-foreground font-bold text-xs border border-border transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Inspect Case Study</span>
                  <Maximize2 size={13} aria-hidden="true" />
                </button>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Interactive Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
