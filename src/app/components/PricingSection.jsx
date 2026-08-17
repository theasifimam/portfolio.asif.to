"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe2,
  LayoutDashboard,
  Smartphone,
  Workflow,
} from "lucide-react";

const projectTypes = [
  {
    name: "Websites & Landing Pages",
    description:
      "Professional, responsive websites built around your offer, audience, and conversion goals.",
    estimate: "Custom estimate",
    icon: Globe2,
  },
  {
    name: "Custom Web Applications",
    description:
      "Dashboards, admin panels, e-commerce systems, and business applications tailored to your workflow.",
    estimate: "Scoped to requirements",
    icon: LayoutDashboard,
  },
  {
    name: "Mobile Applications",
    description:
      "Cross-platform Android and iOS products developed with React Native and Expo.",
    estimate: "Custom quote",
    icon: Smartphone,
  },
  {
    name: "SaaS & Complex Products",
    description:
      "Full-stack products involving authentication, payments, APIs, real-time features, and deployment.",
    estimate: "Let’s discuss the scope",
    icon: Workflow,
  },
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="py-12 sm:py-24 px-4 sm:px-8 md:px-12 max-w-6xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 max-w-3xl"
      >
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary mb-2 block">
          // FLEXIBLE PROJECT PRICING
        </span>
        <h2
          id="pricing-heading"
          className="text-3xl sm:text-5xl font-black tracking-tight text-foreground mb-4"
        >
          Pricing Based on <span className="text-primary">What You Need</span>
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
          Every product is different. Cost depends on scope, complexity,
          integrations, and timeline. Share your requirements and I’ll provide a
          clear estimate for the work involved.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {projectTypes.map(
          ({ name, description, estimate, icon: Icon }, index) => (
            <motion.article
              key={name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-card p-6 sm:p-8 rounded-[2rem] border border-border shadow-xs flex flex-col sm:flex-row gap-5"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0">
                <Icon size={21} aria-hidden="true" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-black text-foreground mb-2">
                  {name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {description}
                </p>
                <span className="inline-flex px-3 py-1.5 rounded-full bg-secondary border border-border text-xs font-mono font-bold text-primary">
                  {estimate}
                </span>
              </div>
            </motion.article>
          ),
        )}
      </div>

      <div className="mt-8 flex justify-center">
        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-primary text-white font-bold text-sm hover:opacity-90 transition-opacity shadow-sm"
        >
          Get a Custom Estimate
          <ArrowRight size={16} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
