import { z, defineCollection } from "astro:content";
const projectsCollection = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			metaimg: image(),
			metaimgAlt: z.string(),
			metaimgWidth: z.number(),
			metaimgHeight: z.number(),
			snippet: z.string(),
			logos: z
				.array(
					z.object({
						url: image(),
						alt: z.string(),
					}),
				)
				.optional(),
		}),
});

export const collections = {
	projects: projectsCollection,
};
