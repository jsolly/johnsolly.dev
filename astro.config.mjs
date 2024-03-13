import { defineConfig } from "astro/config";
import { remarkExternalAnchor } from "./src/remarkplugins/remark-external-anchor.mjs";
import { remarkReadingTime } from "./src/remarkplugins/remark-reading-time.mjs";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://johnsolly.dev",
	markdown: {
		remarkPlugins: [remarkExternalAnchor, remarkReadingTime],
	},
	integrations: [
		tailwind(),
		sitemap({
			customPages: ["https://johnsolly.dev/John-Solly-Resume.pdf"],
		}),
	],
});
