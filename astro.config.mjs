import { defineConfig } from 'astro/config';
import node from "@astrojs/node";
import swup from "@swup/astro";

// https://astro.build/config
export default defineConfig({
    build: {
        inlineStylesheets: 'auto'
    },
    compressHTML: true,
    integrations: [swup({
        theme: "fade",
        containers: ["#swup"],
        preload: true,
        progress: true,
        smoothScrolling: true,
        updateHead: true,
    })],
    scopedStyleStrategy: 'class',
    site: "https://ucp.mester.info",
    output: "server",
    adapter: node({
        mode: "standalone"
    })
});
