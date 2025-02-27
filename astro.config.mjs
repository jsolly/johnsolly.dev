import { defineConfig } from "astro/config";
import { remarkExternalAnchor } from "./src/remarkplugins/remark-external-anchor.mjs";
import { remarkReadingTime } from "./src/remarkplugins/remark-reading-time.mjs";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site:
		process.env.NODE_ENV === "development"
			? "http://localhost:4321"
			: "https://www.johnsolly.dev",
	markdown: {
		remarkPlugins: [remarkExternalAnchor, remarkReadingTime],
	},
	integrations: [
		tailwind(),
		sitemap({
			customPages:
				process.env.NODE_ENV === "development"
					? ["http://localhost:4321/John-Solly-Resume.pdf"]
					: ["https://www.johnsolly.dev/John-Solly-Resume.pdf"],
		}),
	],
});
