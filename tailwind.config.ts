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
<<<<<<< Updated upstream
        background: "#ece7d8",
        foreground: "#000",
        green: {
          light: "#a5c0aa",
          DEFAULT: "#84a882",
          dark: "#4a6a51",
        },
=======
        background: "#f5f2e8",
        foreground: "#f5f2e8",
>>>>>>> Stashed changes
      },
    },
  },
  plugins: [],
} satisfies Config;
