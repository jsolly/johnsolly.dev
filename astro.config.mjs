import { defineConfig } from "astro/config";
import { externalAnchorPlugin } from './src/remarkplugins/external-anchor-plugin.mjs';


export default defineConfig({
	markdown: {
	  remarkPlugins: [externalAnchorPlugin],
	},
  });