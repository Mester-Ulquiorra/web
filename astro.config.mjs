import { defineConfig } from 'astro/config';
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
    build: {
        inlineStylesheets: 'auto'
    },
    compressHTML: true,
    scopedStyleStrategy: 'class',
    site: "https://ucp.mester.info",
    output: "server",
    adapter: node({
        mode: "standalone"
    })
});
