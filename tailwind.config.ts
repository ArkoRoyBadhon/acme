// import type { Config } from "tailwindcss";

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        textBlack: "#09090B",
        textBlack2: "#171717",
        lightGray: "#26262666",
        lightBlue: "#0068D6",
        lightViolet: "#7820BC",
        textGray: "#4B5563",
      },
    },
  },
  plugins: [],
};
export default config;
