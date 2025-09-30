import { defineCollection, z } from 'astro:content';

const restaurantsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    city: z.string(),
    state: z.string(),
    address: z.string().optional(),
    zip: z.string().optional(),
    website: z.string().url(),
    categories: z.array(z.string()),
    allergens: z.array(z.string()),
    videos: z.array(z.object({
      name: z.string(),
      url: z.string().url(),
    })).optional().default([]),
    draft: z.boolean().optional().default(false),
    isNationalChain: z.boolean().optional().default(false),
    region: z.enum([
      'northeast',
      'southeast',
      'midwest',
      'southwest',
      'west',
      'northwest',
      'national'
    ]).optional(),
  }),
});

export const collections = {
  restaurants: restaurantsCollection,
};