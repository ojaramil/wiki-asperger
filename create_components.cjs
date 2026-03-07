const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const componentsDir = path.join(srcDir, 'components');
const layoutsDir = path.join(srcDir, 'layouts');

const headerContent = `---
---
<header>
  <a href="https://www.aspergerparaasperger.org" class="logo">
    Asperger para Asperger
  </a>
  <nav>
    <a href="https://wiki.aspergerparaasperger.org">Wiki</a>
    <a href="https://www.aspergerparaasperger.org/blog">Blog</a>
    <a href="https://comunidad.aspergerparaasperger.org/invitation?code=9J8594">Comunidad</a>
    <a href="https://www.aspergerparaasperger.org/grupo-club-social-y-educativo-virtual-asperger-para-asperger/">Club</a>
    <a href="https://www.aspergerparaasperger.org/plan-embajador-asperger-para-asperger/">Inclusión laboral</a>
  </nav>
</header>`;

const footerContent = `---
---
<footer>
  <div class="footer-ecosystem">
    <p>Parte del ecosistema Asperger para Asperger</p>
    <nav>
      <a href="https://www.aspergerparaasperger.org">Sitio principal</a>
      <a href="https://www.aspergerparaasperger.org/blog">Blog</a>
      <a href="https://comunidad.aspergerparaasperger.org/invitation?code=9J8594">
        Comunidad
      </a>
      <a href="https://www.aspergerparaasperger.org/grupo-club-social-y-educativo-virtual-asperger-para-asperger/">
        Club social y educativo
      </a>
      <a href="https://www.aspergerparaasperger.org/plan-embajador-asperger-para-asperger/">
        Plan inclusión laboral
      </a>
      <a href="https://www.autenticamentecapaces.work">Bolsa de empleo</a>
      <a href="https://revista.aspergerparaasperger.org">Revista</a>
      <a href="https://tienda.aspergerparaasperger.org">Tienda</a>
      <a href="https://signalradio.club">Radio Signal</a>
      <a href="https://escudoseguro.co">App Escudo Seguro</a>
    </nav>
  </div>
  <p class="footer-copy">
    © Asperger para Asperger —
    <a href="https://www.aspergerparaasperger.org">aspergerparaasperger.org</a>
  </p>
</footer>`;

const ecosystemContent = `---
interface Props {
  bloques: string[];
}
const { bloques } = Astro.props;

const bloquesContent = {
  A: \`## Conecta con la comunidad Asperger\\n\\nEn la [Comunidad Asperger para Asperger](https://comunidad.aspergerparaasperger.org/invitation?code=9J8594)\\nencontrarás personas con perfil Asperger que comparten experiencias reales\\nsobre identidad, diagnóstico y vida cotidiana. Un espacio donde el perfil\\nAsperger es comprendido desde adentro.\`,
  B: \`## Encuentra tu lugar — Club social y educativo\\n\\nEl [Club Social y Educativo Asperger para Asperger](https://www.aspergerparaasperger.org/grupo-club-social-y-educativo-virtual-asperger-para-asperger/)\\nes un programa de pertenencia donde puedes conectar con otras personas\\ncon perfil Asperger sin necesidad de enmascarar. Actividades, acompañamiento\\ny comunidad real.\`,
  C: \`## Inclusión laboral para el perfil Asperger\\n\\nEl ecosistema de inclusión laboral de Asperger para Asperger incluye\\nvarios recursos pensados específicamente para el perfil neurocognitivo Asperger:\\n\\n- 💼 [Bolsa de empleo Auténticamente Capaces](https://www.autenticamentecapaces.work)\\n  — ofertas de trabajo en empresas que valoran la neurodiversidad\\n- 🎓 [Plan Embajador](https://www.aspergerparaasperger.org/plan-embajador-asperger-para-asperger/)\\n  — programa de acompañamiento para inclusión laboral real\\n- 📻 [Radio Signal Club](https://signalradio.club)\\n  — proyecto de inclusión donde personas neurodiversas tienen voz\\n- 📖 [Revista Asperger para Asperger](https://revista.aspergerparaasperger.org)\\n  — artículos en profundidad sobre el perfil Asperger en el trabajo\\n- 🛒 [Tienda](https://tienda.aspergerparaasperger.org)\\n  — recursos y herramientas para el perfil Asperger\`,
  D: \`## Radio Signal — Voces del espectro\\n\\n[Signal Radio Club](https://signalradio.club) es un proyecto de inclusión\\ndonde personas neurodiversas tienen voz. Una radio hecha desde y para\\nla comunidad Asperger y neurodiversa.\`,
  E: \`## App Escudo Seguro\\n\\n[Escudo Seguro](https://escudoseguro.co) es una app de seguridad y\\nacompañamiento pensada para situaciones de vulnerabilidad. Útil para\\npersonas Asperger en situaciones de sobrecarga o emergencia.\`,
  F: \`## Desde la experiencia real\\n\\nEn el [blog de Asperger para Asperger](https://www.aspergerparaasperger.org/blog)\\nencontrarás artículos escritos desde la experiencia directa del perfil\\nAsperger — no desde el manual clínico.\`,
  G: \`## Profundiza en la Revista Asperger para Asperger\\n\\nLa [Revista Asperger para Asperger](https://revista.aspergerparaasperger.org)\\npublica artículos en profundidad sobre el perfil neurocognitivo Asperger\\ndesde la experiencia real — no desde el manual clínico.\`,
  H: \`## Recursos para el perfil Asperger\\n\\nEn la [Tienda Asperger para Asperger](https://tienda.aspergerparaasperger.org)\\nencontrarás recursos, herramientas y materiales pensados específicamente\\npara el perfil neurocognitivo Asperger.\`
};

import { marked } from 'marked';
---

<div class="ecosystem-blocks">
  {bloques && bloques.map(b => (
    <div class="ecosystem-block" set:html={marked.parse(bloquesContent[b] || '')} />
  ))}
</div>`;

const notaClinicaContent = `---
---
<div class="nota-clinica">
  <p><em>Nota clínica: En el DSM-5, el perfil Asperger se clasifica dentro del
  Trastorno del Espectro Autista (TEA) nivel 1. Muchas personas con este
  perfil se identifican con el término Asperger como identidad neurocognitiva.</em></p>
</div>`;

const rootLayoutContent = `---
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import '../styles/global.css';

const { title, description } = Astro.props;
---
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{title} | Asperger para Asperger</title>
  <meta name="description" content={description} />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
</head>
<body>
  <Header />
  <main class="wiki-content">
    <slot />
  </main>
  <Footer />
</body>
</html>`;

const wikiLayoutContent = `---
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import NotaClinica from '../components/NotaClinica.astro';
import EcosistemaLinks from '../components/EcosistemaLinks.astro';
import '../styles/global.css';
import { marked } from 'marked';

const { title, description, slug, bloques, schema_questions } = Astro.props;

let faqSchema = '';
if (schema_questions && schema_questions.length > 0) {
  faqSchema = \`{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [\` + schema_questions.map((q: any) => \`
      {
        "@type": "Question",
        "name": "\${q.question.replace(/"/g, '\\\\"')}",
        "acceptedAnswer": { "@type": "Answer", "text": "\${q.answer.replace(/"/g, '\\\\"')}" }
      }\`).join(',') + \`
    ]
  }\`;
}

---
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{title} | Asperger para Asperger</title>
  <meta name="description" content={description} />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="canonical" href={\`https://wiki.aspergerparaasperger.org/\${slug}\`} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={\`https://wiki.aspergerparaasperger.org/\${slug}\`} />
  <meta property="og:type" content="article" />

  <script type="application/ld+json" set:html={\`
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "\${title}",
    "description": "\${description}",
    "url": "https://wiki.aspergerparaasperger.org/\${slug}",
    "publisher": {
      "@type": "Organization",
      "name": "Asperger para Asperger",
      "url": "https://www.aspergerparaasperger.org"
    }
  }
  \`} />
  
  {faqSchema && <script type="application/ld+json" set:html={faqSchema} />}
</head>
<body>
  <Header />
  <main class="wiki-content">
    <slot />
    
    <EcosistemaLinks bloques={bloques || []} />
    <hr/>
    <NotaClinica />
  </main>
  <Footer />
</body>
</html>`;

const globalCss = `
:root {
  --primary: #2B4E7A;
  --secondary: #4A8C9E;
  --bg: #F7FBFC;
  --text: #333333;
  --light: #ffffff;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  color: var(--text);
  background: var(--bg);
  margin: 0;
  padding: 0;
  line-height: 1.6;
}

header {
  background: var(--primary);
  color: var(--light);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

header a {
  color: var(--light);
  text-decoration: none;
  font-weight: 500;
  margin-left: 1rem;
}

header .logo {
  font-size: 1.25rem;
  font-weight: bold;
  margin-left: 0;
}

main.wiki-content {
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
  background: var(--light);
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  padding: 2rem 3rem;
}

footer {
  background: #222;
  color: #ccc;
  padding: 2rem;
  text-align: center;
}

footer a {
  color: var(--secondary);
  text-decoration: none;
  margin: 0 0.5rem;
}

.footer-ecosystem {
  margin-bottom: 1rem;
}

.nota-clinica {
  border-left: 4px solid var(--secondary);
  background: #f0f8ff;
  padding: 1rem;
  margin-top: 2rem;
  font-size: 0.9rem;
}

.ecosystem-block {
  margin: 2rem 0;
  padding: 1.5rem;
  border: 1px solid #e1e8ed;
  border-radius: 6px;
  background: #fafafa;
}

h1 { color: var(--primary); }
h2 { color: var(--secondary); margin-top: 2rem; }
a { color: var(--primary); }
ul { margin-bottom: 1rem; }
`;

fs.writeFileSync(path.join(componentsDir, 'Header.astro'), headerContent);
fs.writeFileSync(path.join(componentsDir, 'Footer.astro'), footerContent);
fs.writeFileSync(path.join(componentsDir, 'EcosistemaLinks.astro'), ecosystemContent);
fs.writeFileSync(path.join(componentsDir, 'NotaClinica.astro'), notaClinicaContent);
fs.writeFileSync(path.join(layoutsDir, 'WikiLayout.astro'), wikiLayoutContent);
fs.writeFileSync(path.join(layoutsDir, 'RootLayout.astro'), rootLayoutContent);

if (!fs.existsSync(path.join(srcDir, 'styles'))) fs.mkdirSync(path.join(srcDir, 'styles'));
fs.writeFileSync(path.join(srcDir, 'styles', 'global.css'), globalCss);
