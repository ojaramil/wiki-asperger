import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://wiki.aspergerparaasperger.org',
  output: 'static',
  integrations: [sitemap()],
});
