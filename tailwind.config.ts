import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: "#000",
      primalGrey: "#BAC1CC",
      secondaryGrey: "#2b2c36",
      lightGreen: "#47C2E92E"
    },
  },
  plugins: [],
};
export default config;
