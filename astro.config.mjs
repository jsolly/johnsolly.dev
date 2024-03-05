import { defineConfig } from "astro/config";
import { externalAnchorPlugin } from "./src/remarkplugins/external-anchor-plugin.mjs";
import { remarkReadingTime } from "./src/remarkplugins/remark-reading-time.mjs";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	site: "https://johnsolly.dev",
	markdown: {
		remarkPlugins: [externalAnchorPlugin, remarkReadingTime],
	},
	integrations: [tailwind()],
});
