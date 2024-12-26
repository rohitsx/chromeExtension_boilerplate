import react from "@vitejs/plugin-react";
import path from "path"
import { crx, defineManifest } from "@crxjs/vite-plugin";
import { defineConfig } from "vite";

const manifest = defineManifest({
  "manifest_version": 3,
  "name": "changes_name",
  "version": "1.0.0",
  "action": { "default_popup": "index.html" },
});

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/shared"),
      "@popup": path.resolve(__dirname, "./src/popup"),
      "@background": path.resolve(__dirname, "./src/background"),
      "@content": path.resolve(__dirname, "./src/content"),
    },
  },
  plugins: [
    react(),
    crx({ manifest }),
  ],
});
