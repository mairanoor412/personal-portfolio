import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '481px',
        md: '769px',
        lmd: "1000px",
        lg: '1300px',
        xl: '1440px'
      },
      colors: {
        primary: "#000000",
        secondary: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
export default config;
