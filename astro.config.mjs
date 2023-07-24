import { defineConfig } from 'astro/config';
import deno from "@astrojs/deno";

// https://astro.build/config
export default defineConfig({
    build: {
        inlineStylesheets: 'auto'
    },
    compressHTML: true,
    scopedStyleStrategy: 'class',
    site: "https://ucp.mester.info",
    output: "server",
    adapter: deno({
        port: 8081,
    })
});
