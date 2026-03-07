import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#090d11",
        panel: "#101823",
        panelAlt: "#0d141e",
        line: "#1f2d3f",
        text: "#e8f2ff",
        muted: "#9fb1c8",
        accent: "#2dd4bf",
        accentWarm: "#f59e0b",
      },
      boxShadow: {
        glow: "0 0 50px rgba(45, 212, 191, 0.25)",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(to right, rgba(31, 45, 63, 0.28) 1px, transparent 1px), linear-gradient(to bottom, rgba(31, 45, 63, 0.28) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
