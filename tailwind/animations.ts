import { easings } from "./easings.ts";

export const extendedAnimations = {
  keyframes: {
    bounce: {
      "0%, 100%": { transform: "translateY(-25%)" },
      "50%": { transform: "translateY(0)" },
    },
    "bounce-low": {
      "0%, 100%": {
        transform: "translateY(-10%)",
        animationTimingFunction: easings.in,
      },
      "50%": {
        transform: "translateY(0)",
        animationTimingFunction: easings.out,
      },
    },
    "bounce-high": {
      "0%, 100%": { transform: "translateY(-50%)" },
      "50%": { transform: "translateY(0)" },
    },
    "bounce-once": {
      "0%": {
        transform: "translateY(0)",
      },
      "30%": {
        transform: "translateY(-15%)",
        animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)", // montée rapide
      },
      "60%": {
        transform: "translateY(0)",
        animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)", // descente souple
      },
      "80%": {
        transform: "translateY(-5%)",
        animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)", // petit rebond
      },
      "100%": {
        transform: "translateY(0)",
        animationTimingFunction: "ease-out", // retour doux et fluide
      },
    },
    "fade-in": {
      "0%": { opacity: "0", transform: "translateY(-0.25rem)" },
      "100%": { opacity: "1", transform: "translateY(0)" },
    },
  },
  animation: {
    bounce: "bounce 1s infinite",
    "bounce-low": "bounce-low 2s",
    "bounce-high": "bounce-high 1s infinite",
    "bounce-slow": "bounce 3s infinite",
    "bounce-once": "bounce-once 1.2s forwards",
    "fade-in": "fade-in 1.2s ease-out",
  },
};

export const extendedTransitions = {
  5000: "5000ms",
};