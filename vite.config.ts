import { defineConfig } from "vite";
import { fresh } from "@fresh/plugin-vite";
import tailwindcss from "tailwindcss";

export default defineConfig({
  server: {
    port: 8000,
    strictPort: true, // fail instead of auto-changing ports
  },
  plugins: [fresh()],
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
      ],
    },
  },
});
