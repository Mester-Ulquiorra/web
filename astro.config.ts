import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: "https://ucp.mester.info",
  output: "server",
  adapter: netlify()
});
