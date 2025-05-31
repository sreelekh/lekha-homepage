// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import { template } from "./src/settings";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    site: 'https://sreelekh.github.io/lekha-homepage/',
    // base: '/REPOSITORY-NAME',  // Only if not using USERNAME.github.io
    // ... rest of config
    integrations: [
        mdx(),
        tailwind({
            applyBaseStyles: false,
        }),
    ],
    markdown: {
        shikiConfig: {
            theme: 'github-dark-dimmed',
            wrap: true,
        },
    },
});
