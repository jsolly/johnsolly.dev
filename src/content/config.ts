// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
const projectsCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		metaimg: z
			.object({
				url: z.string(),
				alt: z.string(),
			})
			.optional(),
		snippet: z.string(),
		logos: z
			.array(
				z.object({
					url: z.string(),
					alt: z.string(),
				}),
			)
			.optional(),
	}),
});

export const collections = {
	projects: projectsCollection,
};
