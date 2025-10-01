import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: { 
    host: true,
    port: 8000,
    allowedHosts: ["site.langprotect.com"],
  },
  preview:{
    host: true,
    port: 8000,
    allowedHosts:["site.langprotect.com"] 
  },
  build: {
    outDir: "dist", 
    sourcemap: mode === "production",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
        },
      },
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
