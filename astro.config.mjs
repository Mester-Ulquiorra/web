import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://ucp.mester.info",
  output: "server",
  adapter: cloudflare(),
  image: { service: { entrypoint: "astro/assets/services/noop" } },
  vite: {
    resolve: {
      alias: {
        "svgo": import.meta.env.PROD ? "svgo/dist/svgo.browser.js" : "svgo"
      }
    }
  }
});
