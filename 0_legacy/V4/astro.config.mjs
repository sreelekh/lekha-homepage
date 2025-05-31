import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://sreelekh.github.io', // Replace with your GitHub username
    base: '/homepage', // Replace with your repository name
    integrations: [
        tailwind(),
        mdx(),
        sitemap()
    ],
    output: 'static'
});