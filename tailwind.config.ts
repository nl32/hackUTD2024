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
        green: "#84a882",
        green: {
          light: "#a5c0aa",
          DEFAULT: "#84a882",
          dark: "#4a6a51",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
