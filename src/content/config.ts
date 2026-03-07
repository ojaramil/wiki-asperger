import { defineCollection, z } from 'astro:content';

const wikiCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    cluster: z.string(),
    related: z.array(z.string()).optional(),
    keywords: z.array(z.string()).optional(),
    bloques: z.array(z.string()).optional(),
    schema_questions: z.array(z.object({
      question: z.string(),
      answer: z.string()
    })).optional()
  })
});

export const collections = {
  'wiki': wikiCollection,
};
