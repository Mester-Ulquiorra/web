import { defineConfig, passthroughImageService } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://ucp.mester.info",
  output: "server",
  adapter: cloudflare(),
  vite: {
    resolve: {
      alias: {
        "svgo": import.meta.env.PROD ? "svgo/dist/svgo.browser.js" : "svgo"
      }
    }
  }
  image: { service: passthroughImageService() }
});
