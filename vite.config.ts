import { defineConfig } from "vite";
import { fresh } from "@fresh/plugin-vite";
import tailwind from "@tailwindcss/vite";

export default defineConfig({
  server: {
    port: 8000,
    strictPort: true, // fail instead of auto-changing ports
  },
  plugins: [fresh(), 
    tailwind(),
  ]
});
