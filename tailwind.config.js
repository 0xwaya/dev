/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter Variable"', "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#07080c",
        surface: "#0d0f16",
        raised: "#12151f",
        line: "rgba(255,255,255,0.08)",
        muted: "#8b93a7",
        soft: "#c4c9d6",
        accent: "#8b8cff",
        live: "#34d399",
        research: "#fbbf24",
      },
      boxShadow: {
        card: "0 1px 0 rgba(255,255,255,0.04) inset, 0 20px 50px -30px rgba(0,0,0,0.9)",
        glow: "0 0 0 1px rgba(139,140,255,0.35), 0 20px 60px -25px rgba(139,140,255,0.45)",
      },
    },
  },
  plugins: [],
};
