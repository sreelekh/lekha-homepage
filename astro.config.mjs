import { defineConfig } from 'astro/config';

export default defineConfig({
    site: 'https://YOUR_USERNAME.github.io',
    base: '/YOUR_REPO_NAME', // Only if not using username.github.io
    output: 'static'
});