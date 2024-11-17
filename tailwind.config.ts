import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ece7d8",
        foreground: "#000",
        green: {
          light: "#a5c0aa",
          DEFAULT: "#84a882",
          dark: "#4a6a51",
        },
        warning: {
          red: "#FF9991",
          yellow: "#F8E68D",
          green: "#a5c0aa",
          orange: "#FFD57C",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
