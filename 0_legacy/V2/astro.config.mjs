// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
    site: process.env.ASTRO_SITE || 'https://sreelekh.github.io',
    base: process.env.ASTRO_BASE || '/lekha-homepage',
    output: 'static',
    build: {
        assets: 'assets'
    },
    vite: {
        build: {
            rollupOptions: {
                output: {
                    assetFileNames: 'assets/[name].[hash][extname]'
                }
            }
        }
    }
});