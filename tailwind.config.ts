import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'preahvihear': ['var(--font-preahvihear)'],
      'chilanka': ['var(--font-chilanka)'],
      'klee-one': ['var(--font-klee-one)'],
      'inter': ['var(--font-inter)'],
      'titillium': ['var(--font-titillium)']
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
   themes: [
    "cupcake",
    "retro",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "pastel",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "lemonade",
    "night",
    "coffee",
    "dim",
    "nord",
    "sunset",
    ]
  }
};
export default config;
