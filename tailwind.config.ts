import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        '#4426D9': '#4426D9',
      },
      padding: {
        '8px': '8px',
        '12px': '12px',
        '16px': '16px',
        '32px': '32px',
      },
      width: {
        '343px': '343px',
        '700px': '700px',
      },
      height: {
        '208px': '208px',
        '192px': '192px',
      },
      borderWidth:{
        '1px': '1px',
      }
    },
  },
  plugins: [],
};
export default config;
