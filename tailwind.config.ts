import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'c1':'#1A1A1A',
        'c2':'#667085',
        'c1-dark':'#C0C5D0',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '.5rem',
        sm: '.5rem',
        lg: '.5rem',
        xl: '.5rem',
        '2xl': '2rem',
      },
      screens: {
        sm: '900px',
        md: '1160px',
        lg: '1160px',
        xl: '1160px',
        '2xl': '1160px',
      }
    }
  },
  plugins: [],
  darkMode:'class'
};
export default config;
