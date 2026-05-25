import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--color-background) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        line: "rgb(var(--color-line) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        accentSoft: "rgb(var(--color-accent-soft) / <alpha-value>)",
        deep: "rgb(var(--color-deep) / <alpha-value>)",
        deepSoft: "rgb(var(--color-deep-soft) / <alpha-value>)",
        pearl: "rgb(var(--color-pearl) / <alpha-value>)",
      },
      boxShadow: {
        soft: "0 18px 55px rgb(var(--color-deep) / 0.08)",
        lift: "0 24px 80px rgb(var(--color-deep) / 0.15)",
        gold: "0 18px 48px rgb(var(--color-accent) / 0.24)",
      },
      borderRadius: {
        site: "22px",
      },
    },
  },
  plugins: [],
};

export default config;
