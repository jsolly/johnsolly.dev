// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
const projectsCollection = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			metaimg: image(),
			metaimgAlt: z.string(),
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
