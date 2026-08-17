"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

function normalizeScreenshot(screenshot, index, title) {
  if (typeof screenshot === "string") {
    return {
      src: screenshot,
      alt: `${title || "Mobile application"} screen ${index + 1}`,
      label: `Screen ${index + 1}`,
    };
  }

  return {
    src: screenshot.src,
    alt:
      screenshot.alt || `${title || "Mobile application"} screen ${index + 1}`,
    label: screenshot.label || `Screen ${index + 1}`,
    objectPosition: screenshot.objectPosition || "center",
  };
}

function Phone({ screenshot, position, isInteractive, onSelect, priority }) {
  const phone = (
    <div className="mobile-showcase__device-shell">
      <div className="mobile-showcase__screen">
        <Image
          src={screenshot.src}
          alt={screenshot.alt}
          fill
          priority={priority}
          sizes="(max-width: 639px) 66vw, (max-width: 1023px) 22vw, 240px"
          className="object-cover"
          style={{ objectPosition: screenshot.objectPosition }}
        />
        <span className="mobile-showcase__island" aria-hidden="true" />
        <span className="mobile-showcase__home-indicator" aria-hidden="true" />
      </div>
    </div>
  );

  if (!isInteractive || position === "center") {
    return (
      <div
        className={`mobile-showcase__phone mobile-showcase__phone--${position}`}
      >
        {phone}
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`mobile-showcase__phone mobile-showcase__phone--${position} mobile-showcase__phone-button`}
      aria-label={`Show ${screenshot.label} as the primary screen`}
    >
      {phone}
    </button>
  );
}

export default function MobileAppShowcase({
  screenshots = [],
  title = "Mobile application",
  accentColor,
  interactive = true,
  compact = false,
  className = "",
}) {
  const reduceMotion = useReducedMotion();
  const normalized = useMemo(
    () =>
      screenshots
        .filter((screenshot) =>
          typeof screenshot === "string" ? screenshot : screenshot?.src,
        )
        .map((screenshot, index) =>
          normalizeScreenshot(screenshot, index, title),
        ),
    [screenshots, title],
  );
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex((current) => Math.min(current, normalized.length - 1));
  }, [normalized.length]);

  if (normalized.length === 0) return null;

  const active = Math.max(0, activeIndex);
  const visible =
    normalized.length === 1
      ? [{ screenshot: normalized[active], index: active, position: "center" }]
      : normalized.length === 2
        ? [
            {
              screenshot: normalized[(active + 1) % normalized.length],
              index: (active + 1) % normalized.length,
              position: "left",
            },
            {
              screenshot: normalized[active],
              index: active,
              position: "center",
            },
          ]
        : [
            {
              screenshot:
                normalized[
                  (active - 1 + normalized.length) % normalized.length
                ],
              index: (active - 1 + normalized.length) % normalized.length,
              position: "left",
            },
            {
              screenshot: normalized[active],
              index: active,
              position: "center",
            },
            {
              screenshot: normalized[(active + 1) % normalized.length],
              index: (active + 1) % normalized.length,
              position: "right",
            },
          ];

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 16, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={`mobile-showcase ${compact ? "mobile-showcase--compact" : ""} ${className}`}
      style={accentColor ? { "--showcase-accent": accentColor } : undefined}
      role="group"
      aria-label={`${title} application screens`}
    >
      <div className="mobile-showcase__glow" aria-hidden="true" />
      <div className="mobile-showcase__stage">
        {visible.map(({ screenshot, index, position }) => (
          <Phone
            key={`${screenshot.src}-${position}`}
            screenshot={screenshot}
            position={position}
            priority={compact && position === "center"}
            isInteractive={interactive && normalized.length > 1 && !compact}
            onSelect={() => setActiveIndex(index)}
          />
        ))}
      </div>

      {!compact && normalized.length > 1 && (
        <div className="mobile-showcase__controls">
          {normalized.map((screenshot, index) => (
            <button
              key={`${screenshot.src}-control`}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="mobile-showcase__control"
              aria-label={`Show ${screenshot.label}`}
              aria-pressed={index === active}
            >
              <span
                className="mobile-showcase__control-dot"
                aria-hidden="true"
              />
              <span className="mobile-showcase__control-label">
                {screenshot.label}
              </span>
            </button>
          ))}
        </div>
      )}
    </motion.div>
  );
}
