import React, { useEffect, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { X, ExternalLink, CheckCircle2, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MobileAppShowcase from "./MobileAppShowcase";

const ProjectModalComponent = ({ project, isOpen, onClose }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!project || !mounted) return null;

  const isLiveSite = project.link && project.link !== "#";

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-9999 flex items-center justify-center p-4 sm:p-6 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md z-9998"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-5xl h-full max-h-[88vh] flex flex-col lg:flex-row rounded-[2.5rem] bg-card border border-border overflow-hidden shadow-2xl z-9999"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-5 right-5 z-10000 w-10 h-10 rounded-full bg-secondary text-foreground border border-border hover:scale-105 transition-all flex items-center justify-center shadow-md cursor-pointer"
            >
              <X size={18} />
            </button>

            {/* Left Column: live preview or project media */}
            <div className="w-full lg:w-[55%] h-[44%] lg:h-full border-b lg:border-b-0 lg:border-r border-border bg-secondary/30 p-3 sm:p-5 flex flex-col overflow-hidden">
              {isLiveSite ? (
                <>
                  <div className="w-full flex items-center justify-between gap-3 px-3 sm:px-4 py-2 rounded-t-lg bg-secondary border border-border border-b-0 text-xs font-mono text-muted-foreground">
                    <div
                      className="flex items-center gap-1.5 shrink-0"
                      aria-hidden="true"
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="min-w-0 flex-1 truncate bg-background px-3 py-1 rounded-md border border-border text-[11px] text-foreground text-center">
                      {project.link}
                    </span>
                    <Globe
                      size={14}
                      className="text-primary shrink-0"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="w-full flex-1 min-h-0 rounded-b-lg border border-border bg-background overflow-hidden shadow-inner">
                    <iframe
                      key={project.link}
                      src={project.link}
                      title={`${project.title} live website preview`}
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                      className="w-full h-full bg-white"
                    />
                  </div>
                </>
              ) : project.screenshots?.length ? (
                <MobileAppShowcase
                  title={project.title}
                  screenshots={project.screenshots}
                  className="mobile-showcase--modal h-full rounded-2xl"
                />
              ) : (
                <div className="w-full h-full rounded-lg border border-border bg-background overflow-hidden relative shadow-inner">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={
                        project.imageAlt || `${project.title} product interface`
                      }
                      fill
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover object-top"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center p-8 text-center bg-secondary">
                      <span className="text-lg font-extrabold text-foreground">
                        {project.subtitle}
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Right Column: Detailed Case Study */}
            <div className="w-full lg:w-[45%] h-[56%] lg:h-full flex flex-col overflow-y-auto p-6 sm:p-8 text-left no-scrollbar">
              <div className="space-y-6">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase bg-secondary text-primary border border-border mb-3">
                    {project.categoryLabel}
                  </span>
                  <h2
                    id="project-modal-title"
                    className="text-2xl sm:text-3xl font-black text-foreground tracking-tight mb-2"
                  >
                    {project.title}
                  </h2>
                  <p className="text-xs font-mono font-bold text-primary mb-4">
                    {project.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    ["Problem", project.problem],
                    ["Solution", project.solution],
                    ["My Contribution", project.contribution],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-primary mb-1.5">
                        {label}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                {project.metrics && project.metrics.length > 0 && (
                  <div>
                    <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-primary mb-3">
                      Product & Technical Highlights
                    </h3>
                    <div className="space-y-2.5">
                      {project.metrics.map((metric, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <CheckCircle2
                            size={16}
                            className="text-primary shrink-0 mt-0.5"
                          />
                          <span className="text-xs sm:text-sm font-medium text-foreground">
                            {metric}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Pills */}
                <div>
                  <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-primary mb-3">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech?.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-secondary text-foreground border border-border"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-auto pt-6 border-t border-border flex items-center gap-3">
                {isLiveSite && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-primary hover:opacity-90 text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-full transition-all shadow-sm"
                  >
                    <span>Open Live Site</span> <ExternalLink size={15} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
};

export const ProjectModal = React.memo(ProjectModalComponent);
