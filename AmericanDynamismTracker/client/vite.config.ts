import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Vercel-compatible Vite configuration
export default defineConfig({
  plugins: [
    react()
    // Removed Replit-specific runtimeErrorOverlay and cartographer
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@shared": path.resolve(__dirname, "../shared"),
      "@assets": path.resolve(__dirname, "../attached_assets"),
    },
  },
  root: path.resolve(__dirname),
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});

