import { type Config } from "tailwindcss";
import { extendedColors } from "./tailwind/colors.ts";
import {
  extendedAnimations,
  extendedTransitions,
} from "./tailwind/animations.ts";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: extendedColors,
      keyframes: {
        ...extendedAnimations.keyframes,
      },
      animation: {
        ...extendedAnimations.animation,
      },
      transitionDuration: extendedTransitions,
    },
  },
} satisfies Config;
