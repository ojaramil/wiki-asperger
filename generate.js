const fs = require('fs');
const path = require('path');

const projectRoot = __dirname;
const srcDir = path.join(projectRoot, 'src');
const contentDir = path.join(srcDir, 'content', 'wiki');
const componentsDir = path.join(srcDir, 'components');
const layoutsDir = path.join(srcDir, 'layouts');
const pagesDir = path.join(srcDir, 'pages');
const publicDir = path.join(projectRoot, 'public');

[srcDir, contentDir, componentsDir, layoutsDir, pagesDir, publicDir].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

// Create basic config files
fs.writeFileSync(path.join(projectRoot, 'package.json'), JSON.stringify({
  "name": "wiki-asperger",
  "type": "module",
  "version": "0.0.1",
  "scripts": {
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro check && astro build",
    "preview": "astro preview",
    "astro": "astro"
  },
  "dependencies": {
    "astro": "^4.16.0"
  },
  "devDependencies": {
    "@astrojs/check": "^0.9.4",
    "typescript": "^5.6.3"
  }
}, null, 2));

fs.writeFileSync(path.join(projectRoot, 'astro.config.mjs'), `import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://wiki.aspergerparaasperger.org',
  output: 'static',
});
`);

fs.writeFileSync(path.join(projectRoot, 'vercel.json'), JSON.stringify({
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "astro"
}, null, 2));

fs.writeFileSync(path.join(projectRoot, 'tsconfig.json'), JSON.stringify({
  "extends": "astro/tsconfigs/strict"
}, null, 2));

fs.writeFileSync(path.join(projectRoot, 'DEPLOY.md'), `1. npm install
2. npm run build (verificar sin errores)
3. Crear repo GitHub: wiki-asperger
4. git init && git add . && git commit -m "init" && git push
5. vercel.com → Add New Project → importar repo
6. Vercel: Settings → Domains → wiki.aspergerparaasperger.org
7. DNS del hosting: agregar CNAME
   Nombre: wiki
   Valor:  cname.vercel-dns.com
8. Esperar propagación DNS (5-30 minutos)
`);

// Content collection config
fs.writeFileSync(path.join(srcDir, 'content', 'config.ts'), `import { defineCollection, z } from 'astro:content';

const wikiCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    cluster: z.string(),
    slug: z.string(),
    related: z.array(z.string()).optional(),
    keywords: z.array(z.string()).optional(),
    bloques: z.array(z.string()).optional()
  })
});

export const collections = {
  'wiki': wikiCollection,
};
`);

fs.writeFileSync(path.join(publicDir, 'favicon.svg'), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🧠</text></svg>`);

console.log('Project setup completed.');
