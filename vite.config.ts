import react from "@vitejs/plugin-react";
import { crx, defineManifest } from "@crxjs/vite-plugin";
import { defineConfig } from "vite";

const manifest = defineManifest({
  manifest_version: 3,
  name: "changes_name",
  version: "1.0.0",
  action: { default_popup: "index.html" },
  background: {
    service_worker: "src/background/bg.ts",
    type: "module",
  },
});

export default defineConfig({
  resolve: {},
  plugins: [react(), crx({ manifest })],
});
