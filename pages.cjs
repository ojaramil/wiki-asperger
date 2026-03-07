const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');

const slugAstro = `---
import { getCollection } from 'astro:content';
import WikiLayout from '../layouts/WikiLayout.astro';

export async function getStaticPaths() {
  const entradas = await getCollection('wiki');
  return entradas.map(entrada => ({
    params: { slug: entrada.slug },
    props: { entrada },
  }));
}

const { entrada } = Astro.props;
const { Content } = await entrada.render();
---

<WikiLayout 
  title={entrada.data.title}
  description={entrada.data.description}
  slug={entrada.slug}
  bloques={entrada.data.bloques}
  schema_questions={entrada.data.schema_questions}
>
  <Content />
</WikiLayout>
`;

const indexAstro = `---
import RootLayout from '../layouts/RootLayout.astro';
import EcosistemaLinks from '../components/EcosistemaLinks.astro';
import { getCollection } from 'astro:content';

const entradas = await getCollection('wiki');

const clusters = [
  "Fundamentos del perfil Asperger",
  "Comunicación Asperger",
  "Experiencia interna Asperger",
  "Vida social Asperger",
  "Relaciones y pareja Asperger",
  "Trabajo y vida adulta Asperger",
  "Diagnóstico Asperger",
  "Regulación emocional Asperger"
];

function getEntradasByCluster(clusterName: string) {
  return entradas.filter(e => e.data.cluster === clusterName);
}
---

<RootLayout 
  title="Base de conocimiento sobre el perfil Asperger en español" 
  description="El Asperger como identidad neurocognitiva — desde la experiencia real. Wiki, comunidad e inclusión completa."
>
  <h1>Base de conocimiento sobre el perfil Asperger en español</h1>
  <p class="bajada">El Asperger como identidad neurocognitiva — desde la experiencia real</p>

  <EcosistemaLinks bloques={["A", "B", "C", "D", "E", "F", "G", "H"]} />

  <div class="search-box">
    <input type="text" id="searchInput" placeholder="Buscar en la wiki..." />
  </div>

  <div class="wiki-clusters" id="clustersContainer">
    {clusters.map(cluster => (
      <div class="cluster-card" data-cluster={cluster}>
        <h2>{cluster}</h2>
        <ul>
          {getEntradasByCluster(cluster).map(entrada => (
            <li>
              <a href={\`/\${entrada.slug}\`} class="node-link">{entrada.data.title}</a>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>

  <script>
    const searchInput = document.getElementById('searchInput');
    const links = document.querySelectorAll('.node-link');

    if(searchInput) {
      searchInput.addEventListener('input', (e) => {
        const term = (e.target as HTMLInputElement).value.toLowerCase();
        links.forEach(link => {
          const text = (link.textContent || '').toLowerCase();
          const li = link.closest('li') as HTMLElement;
          if(text.includes(term)) {
            li.style.display = 'block';
          } else {
            li.style.display = 'none';
          }
        });
      });
    }
  </script>
</RootLayout>

<style>
  .bajada {
    font-size: 1.2rem;
    color: var(--secondary);
    margin-bottom: 2rem;
  }
  .search-box {
    margin: 2rem 0;
  }
  .search-box input {
    width: 100%;
    padding: 1rem;
    font-size: 1rem;
    border: 2px solid #ddd;
    border-radius: 8px;
    box-sizing: border-box;
  }
  .cluster-card {
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    padding: 1.5rem;
    margin-bottom: 2rem;
  }
  .cluster-card h2 {
    margin-top: 0;
    color: var(--primary);
    border-bottom: 2px solid var(--primary);
    padding-bottom: 0.5rem;
    font-size: 1.25rem;
  }
  .cluster-card ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }
  .cluster-card li a {
    display: block;
    padding: 0.5rem 0;
    text-decoration: none;
    font-weight: 500;
  }
  .cluster-card li a:hover {
    text-decoration: underline;
  }
</style>
`;

fs.writeFileSync(path.join(pagesDir, '[slug].astro'), slugAstro);
fs.writeFileSync(path.join(pagesDir, 'index.astro'), indexAstro);

console.log('Pages generated successfully.');
