import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://liberifatali.github.io',
  integrations: [mdx(), sitemap()],
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover'
  },
  vite: {
    plugins: [tailwindcss()]
  }
});