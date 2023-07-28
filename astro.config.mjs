import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: "auto"
  },
  compressHTML: true,
  scopedStyleStrategy: "class",
  site: "https://ucp.mester.info",
  output: "server",
  adapter: cloudflare(),
  experimental: {
    viewTransitions: true
  }
});
