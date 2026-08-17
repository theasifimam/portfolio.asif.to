"use client";
import React from "react";
import { Home, Briefcase, Layers, MessageSquare } from "lucide-react";

export default function MobileTabBar({ activeSection, handleScrollTo }) {
  const tabs = [
    { name: "Home", href: "#home", icon: Home },
    { name: "Exp", href: "#experience", icon: Briefcase },
    { name: "Projects", href: "#projects", icon: Layers },
    { name: "Contact", href: "#contact", icon: MessageSquare },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-card/85 backdrop-blur-lg border-t border-border/80 px-4 py-2 pb-safe shadow-lg transition-all duration-300">
      <div className="flex items-center justify-around max-w-md mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeSection === tab.href.substring(1);
          return (
            <a
              key={tab.name}
              href={tab.href}
              onClick={(e) => handleScrollTo(e, tab.href)}
              className="flex flex-col items-center gap-1 py-1 px-2.5 rounded-2xl transition-all duration-300 cursor-pointer text-center relative"
            >
              <div
                className={`p-1.5 rounded-xl transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-white scale-110 shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon size={18} />
              </div>
              <span
                className={`text-[9px] font-bold tracking-wide transition-colors ${
                  isActive ? "text-primary font-black" : "text-muted-foreground"
                }`}
              >
                {tab.name}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
