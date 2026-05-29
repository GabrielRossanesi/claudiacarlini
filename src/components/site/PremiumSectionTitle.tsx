import React from "react";

type PremiumSectionTitleProps = {
  kicker?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  intensity?: "default" | "subtle";
  className?: string;
  titleAs?: "h1" | "h2" | "h3";
};

export function PremiumSectionTitle({
  kicker,
  title,
  description,
  align = "left",
  theme = "light",
  intensity = "default",
  className = "",
  titleAs = "h2",
}: PremiumSectionTitleProps) {
  const isDark = theme === "dark";
  const isSubtle = intensity === "subtle";
  const alignClass = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";
  
  // Custom Tag for Title (semantic HTML, single h1 per page)
  const TitleTag = titleAs;

  // Class selection based on theme and intensity
  let titleShadowClass = "";
  if (isSubtle) {
    titleShadowClass = isDark ? "text-pearl/90" : "text-ink";
  } else {
    titleShadowClass = isDark
      ? "text-pearl animate-premium-glow premium-title-shadow-dark"
      : "text-ink animate-premium-glow premium-title-shadow-light";
  }

  return (
    <div className={`flex flex-col gap-2 pb-2 ${alignClass} ${className}`}>
      {/* Optional kicker / subtítulo */}
      {kicker && (
        <span
          className={`eyebrow tracking-[0.18em] text-[10px] md:text-xs font-bold uppercase transition duration-300 ${
            isDark ? "text-accentSoft/85" : "text-accent"
          }`}
          style={{
            textShadow: isSubtle
              ? "none"
              : isDark
              ? "0 0 10px rgba(194, 169, 118, 0.2)"
              : "0 0 6px rgba(194, 169, 118, 0.1)",
          }}
        >
          {kicker}
        </span>
      )}

      {/* Main Title with premium glow and relative backdrop */}
      <div className="relative inline-block">
        {/* Soft backdrop glow (only for dark/default intensity to keep it clean and elegant) */}
        {!isSubtle && isDark && <div className="premium-title-backdrop-glow" />}
        {!isSubtle && !isDark && (
          <div
            className="absolute inset-[-20px_-30px] z-[-1] pointer-events-none opacity-25"
            style={{
              background: "radial-gradient(circle, rgba(194, 169, 118, 0.06), transparent 70%)",
              filter: "blur(16px)",
            }}
          />
        )}

        <TitleTag
          className={`display-font font-normal leading-[1.25] transition duration-300 ${titleShadowClass} ${
            titleAs === "h1" 
              ? "text-5xl sm:text-6xl lg:text-7xl leading-[0.95]" 
              : titleAs === "h2"
              ? "text-3xl md:text-5xl"
              : "text-2xl md:text-3.5xl"
          }`}
          style={
            isSubtle
              ? {
                  textShadow: isDark
                    ? "0 0 8px rgba(194, 169, 118, 0.08)"
                    : "0 0 4px rgba(194, 169, 118, 0.05)",
                }
              : undefined
          }
        >
          {title}
        </TitleTag>
      </div>

      {/* Decorative gradient line */}
      <div
        className={`h-[2px] w-14 bg-gradient-to-r from-accent to-transparent rounded-full mt-2.5 transition duration-300 ${
          align === "center" ? "mx-auto" : ""
        }`}
        style={{
          boxShadow: isSubtle
            ? "none"
            : isDark
            ? "0 0 10px rgba(194, 169, 118, 0.3)"
            : "0 0 6px rgba(194, 169, 118, 0.15)",
          opacity: isSubtle ? 0.65 : 1,
        }}
      />

      {/* Optional description */}
      {description && (
        <p
          className={`mt-2.5 text-sm md:text-base leading-relaxed max-w-2xl transition duration-300 ${
            isDark ? "text-pearl/70" : "text-muted"
          } ${align === "center" ? "text-center" : "text-left"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
