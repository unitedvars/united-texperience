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
      transitionProperty: {
        width: "width",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-sunrise":
          "radial-gradient(theme(colors.sky.600), transparent 70%)",
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
