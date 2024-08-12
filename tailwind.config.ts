import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "button-gradient":
          "linear-gradient(90deg, #004A77 0.03%, #014D7B 18.03%, #055987 36.04%, #0C6D9C 55.04%, #1589B8 74.05%, #21ACDD 93.06%, #27BCEE 100.06%)",
      },
    },
    colors: {
      ...colors,
      primary: {
        500: "#28BCEF",
        200: "#AEE6F9",
        700: "#004A77",
        800: "#053241",
        900: "#00253C",
      },
    },
  },
  plugins: [],
};
export default config;
