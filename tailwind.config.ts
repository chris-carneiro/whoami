import { type Config } from "tailwindcss";
import { extendedColors } from "./tailwind/colors.ts";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: extendedColors
    },
  },
} satisfies Config;
