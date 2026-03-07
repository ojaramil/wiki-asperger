const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, 'src', 'content', 'wiki');
if (!fs.existsSync(contentDir)) fs.mkdirSync(contentDir, { recursive: true });

const clusters = [
    {
        name: "Fundamentos del perfil Asperger",
        nodes: [
            { slug: "que-es-asperger", bloqs: ["F"], priority: true },
            { slug: "cerebro-asperger", bloqs: ["G", "F"], priority: true },
            { slug: "perfil-neurocognitivo-asperger", bloqs: ["G", "F"] },
            { slug: "asperger-vs-autismo", bloqs: ["F", "A"] },
            { slug: "identidad-asperger", bloqs: ["A", "B", "G", "F"], priority: true },
            { slug: "caracteristicas-asperger", bloqs: ["F"] },
            { slug: "asperger-adultos", bloqs: ["A", "F"] },
            { slug: "asperger-mujeres", bloqs: ["A", "F"] },
            { slug: "asperger-ninos", bloqs: ["F"] },
            { slug: "neurodiversidad-asperger", bloqs: ["A", "D", "F"] },
            { slug: "mitos-asperger", bloqs: ["A", "F"] },
            { slug: "fortalezas-asperger", bloqs: ["C", "D", "G", "F"], priority: true }
        ]
    },
    {
        name: "Comunicación Asperger",
        nodes: [
            { slug: "comunicacion-asperger", bloqs: ["B", "F"] },
            { slug: "literalidad-asperger", bloqs: ["G", "F"] },
            { slug: "sarcasmo-asperger", bloqs: ["F"] },
            { slug: "small-talk-asperger", bloqs: ["B", "F"] },
            { slug: "contacto-visual-asperger", bloqs: ["F"] },
            { slug: "sobreexplicacion-asperger", bloqs: ["F"] },
            { slug: "malentendidos-asperger", bloqs: ["B", "F"] },
            { slug: "comunicacion-directa-asperger", bloqs: ["F"] },
            { slug: "lenguaje-corporal-asperger", bloqs: ["F"] },
            { slug: "empatia-asperger", bloqs: ["G", "F"] },
            { slug: "monotropismo-asperger", bloqs: ["F"] },
            { slug: "conversacion-profunda-asperger", bloqs: ["B", "F"] },
            { slug: "pragmatica-social-asperger", bloqs: ["F"] }
        ]
    },
    {
        name: "Experiencia interna Asperger",
        nodes: [
            { slug: "burnout-asperger", bloqs: ["G", "B", "F"], priority: true },
            { slug: "masking-asperger", bloqs: ["G", "A", "F"], priority: true },
            { slug: "hiperfoco-asperger", bloqs: ["C", "G", "D", "F"], priority: true },
            { slug: "intereses-especiales-asperger", bloqs: ["B", "D", "F"] },
            { slug: "fatiga-social-asperger", bloqs: ["B", "F"], priority: true },
            { slug: "sobrecarga-sensorial-asperger", bloqs: ["E", "H", "F"] },
            { slug: "sensibilidad-sensorial-asperger", bloqs: ["E", "H", "F"] },
            { slug: "pensamiento-sistematico-asperger", bloqs: ["C", "F"] },
            { slug: "agotamiento-masking-asperger", bloqs: ["B", "F"] },
            { slug: "alexitimia-asperger", bloqs: ["G", "F"] },
            { slug: "autoconciencia-asperger", bloqs: ["A", "F"] },
            { slug: "stimming-asperger", bloqs: ["H", "F"] },
            { slug: "soledad-interior-asperger", bloqs: ["B", "F"] },
            { slug: "rigidez-cognitiva-asperger", bloqs: ["H", "F"] }
        ]
    },
    {
        name: "Vida social Asperger",
        nodes: [
            { slug: "hacer-amigos-asperger", bloqs: ["B", "F"] },
            { slug: "soledad-adultos-asperger", bloqs: ["B", "A", "F"] },
            { slug: "rechazo-social-asperger", bloqs: ["A", "F"] },
            { slug: "senales-sociales-asperger", bloqs: ["F"] },
            { slug: "comunidad-asperger", bloqs: ["A", "B", "D", "F"] },
            { slug: "pertenencia-asperger", bloqs: ["B", "A", "F"] },
            { slug: "ansiedad-social-asperger", bloqs: ["E", "B", "F"] },
            { slug: "dinamica-grupos-asperger", bloqs: ["B", "F"] },
            { slug: "amistad-asperger", bloqs: ["B", "A", "F"] }
        ]
    },
    {
        name: "Relaciones y pareja Asperger",
        nodes: [
            { slug: "parejas-asperger", bloqs: ["A", "F"] },
            { slug: "relaciones-romanticas-asperger", bloqs: ["A", "F"] },
            { slug: "comunicacion-pareja-asperger", bloqs: ["F"] },
            { slug: "intimidad-emocional-asperger", bloqs: ["F"] },
            { slug: "conflictos-pareja-asperger", bloqs: ["A", "F"] },
            { slug: "rupturas-asperger", bloqs: ["A", "F"] },
            { slug: "citas-asperger", bloqs: ["B", "F"] }
        ]
    },
    {
        name: "Trabajo y vida adulta Asperger",
        nodes: [
            { slug: "trabajo-asperger", bloqs: ["C", "D", "G", "F"], priority: true },
            { slug: "fortalezas-laborales-asperger", bloqs: ["C", "G", "F"] },
            { slug: "agotamiento-laboral-asperger", bloqs: ["C", "B", "F"] },
            { slug: "adaptaciones-laborales-asperger", bloqs: ["C", "F"] },
            { slug: "trabajos-ideales-asperger", bloqs: ["C", "D", "G", "F"] },
            { slug: "entornos-laborales-asperger", bloqs: ["C", "F"] },
            { slug: "rutinas-asperger", bloqs: ["H", "F"] },
            { slug: "cambios-imprevistos-asperger", bloqs: ["H", "F"] }
        ]
    },
    {
        name: "Diagnóstico Asperger",
        nodes: [
            { slug: "diagnostico-asperger", bloqs: ["A", "F"] },
            { slug: "diagnostico-tardio-asperger", bloqs: ["A", "G", "F"], priority: true },
            { slug: "autodescubrimiento-asperger", bloqs: ["A", "B", "F"] },
            { slug: "criterios-diagnosticos-asperger", bloqs: ["F"] },
            { slug: "evaluacion-psicologica-asperger", bloqs: ["F"] },
            { slug: "autodiagnostico-asperger", bloqs: ["A", "F"] },
            { slug: "vida-post-diagnostico-asperger", bloqs: ["A", "B", "F"] },
            { slug: "buscar-profesional-asperger", bloqs: ["A", "F"] }
        ]
    },
    {
        name: "Regulación emocional Asperger",
        nodes: [
            { slug: "regulacion-emocional-asperger", bloqs: ["E", "H", "F"] },
            { slug: "meltdown-asperger", bloqs: ["E", "H", "F"] },
            { slug: "shutdown-asperger", bloqs: ["E", "F"] },
            { slug: "emociones-asperger", bloqs: ["F"] },
            { slug: "recuperacion-burnout-asperger", bloqs: ["B", "H", "F"] },
            { slug: "bienestar-asperger", bloqs: ["B", "E", "H", "F"] },
            { slug: "estrategias-regulacion-asperger", bloqs: ["E", "H", "F"] },
            { slug: "espacios-seguros-asperger", bloqs: ["E", "B", "H", "F"] },
            { slug: "autocuidado-asperger", bloqs: ["E", "H", "F"] }
        ]
    }
];

function titleFromSlug(slug) {
    return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

function generateMarkdown(node, clusterName) {
    const title = titleFromSlug(node.slug);
    const keyword = title.toLowerCase();

    const relates = clusters.flatMap(c => c.nodes).filter(n => n.slug !== node.slug).sort(() => 0.5 - Math.random()).slice(0, 3).map(n => n.slug);
    const concept = title.replace(' Asperger', '').replace(' asperger', '').toLowerCase();
    const isPriority = node.priority;

    const content = `---
title: "${title}"
description: "Todo lo que necesitas saber sobre ${keyword}. Cómo se vive desde el perfil neurocognitivo Asperger en la vida real."
cluster: "${clusterName}"
related: [${relates.map(r => `"${r}"`).join(', ')}]
keywords: ["${keyword}", "${keyword} autismo", "perfil asperger ${keyword}"]
bloques: [${node.bloqs.map(b => `"${b}"`).join(', ')}]
schema_questions:
  - question: "¿Qué es ${concept} en el perfil Asperger?"
    answer: "Es una manifestación propia del perfil neurocognitivo Asperger, una forma válida y diferente de procesar la realidad en comparación con mentes neurotípicas."
  - question: "¿Es ${concept} algo que se puede curar?"
    answer: "No. ${concept} forma parte de la neurodivergencia, no es algo para curar ni corregir, sino para comprender y adaptar positivamente en el entorno."
  - question: "¿Cómo impacta esto en la vida social y laboral?"
    answer: "Puede generar diferencias en la comunicación o procesamiento, pero con comprensión y herramientas adecuadas, se alcanzan relaciones sólidas y desarrollo pleno."
---

## ¿Qué es ${concept} Asperger?
${concept} Asperger es una manifestación característica propia del perfil neurocognitivo Asperger. Se trata de una forma natural, única y válida de procesar la realidad, diferenciándose de lo que usualmente se espera de las mentes neurotípicas.

## Cómo funciona en el cerebro Asperger
El cerebro Asperger gestiona ${concept} a través de sus propias vías neuronales y cognitivas. Es vital recordar que **no se trata de un déficit** ni de un error de sistema. Más bien, es una estructura neurológica distinta que procesa la información sensorial y emocional de manera alternativa y muy válida.

## Cómo se siente desde adentro
Desde la experiencia vivida en la comunidad Asperger, sentir y experimentar ${concept} es algo ${isPriority ? 'profundamente complejo. Implica enfrentarnos a capas de comprensión que van mucho más allá de las descripciones frías del manual clínico.' : 'único para cada persona, pero con patrones muy compartidos en nuestra comunidad neurodivergente.'}

${isPriority ? 'Comprender esta realidad a fondo nos permite abrazar nuestra identidad, quitar las máscaras sociales y reconocernos genuinamente.' : ''}

## Ejemplo real
Imagina una situación cotidiana en un entorno de oficina o en una reunión social, donde la mayoría de las personas sobreentienden un contexto de manera automática. Al aplicar el perfil neurocognitivo Asperger, tú notas o experimentas ${concept} desde un ángulo altamente sistemático, analítico o literal. Es, sencillamente, una diferencia de enfoque enriquecedora, no un defecto o problema.

## Preguntas frecuentes

**¿Qué es ${concept} en el perfil Asperger?**
Es una manifestación propia del perfil neurocognitivo Asperger, una forma válida y diferente de procesar la realidad.

**¿Es ${concept} algo que se puede curar?**
No. Forma parte de la neurodivergencia, no es algo para curar ni corregir, sino para comprender y adaptar al entorno vital.

**¿Cómo impacta esto en la vida social y laboral?**
Puede marcar diferencias en el estilo de comunicación, pero con herramientas enfocadas y comprensión mutua se alcanzan dinámicas realmente enriquecedoras en cualquier ámbito.

## Relacionado con el perfil Asperger
${relates.map(r => `- [${titleFromSlug(r)}](/${r})`).join('\n')}
`;

    return content;
}

clusters.forEach(cluster => {
    cluster.nodes.forEach(node => {
        const md = generateMarkdown(node, cluster.name);
        fs.writeFileSync(path.join(contentDir, node.slug + '.md'), md);
    });
});

console.log('Markdown plain content generated successfully.');
