import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    build: {
        inlineStylesheets: 'auto'
    },
    compressHTML: true,
    scopedStyleStrategy: 'class',
    site: "https://ucp.mester.info",
});
