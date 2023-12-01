import { defineConfig, passthroughImageService } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://ucp.mester.info",
  output: "server",
  adapter: cloudflare({ mode: "directory" }),
  image: { service: passthroughImageService() }
});
