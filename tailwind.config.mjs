/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				accent: "rgb(136, 58, 234)",
				"accent-dark": "rgb(148, 100, 191)",
				"accemt-darker": "rgb(136, 58, 234)",
				"accent-light": "rgb(232, 196, 249)",
				"accent-hover": "rgb(115, 34, 220)",
				"custom-gray": "rgb(191, 193, 201)",
				"custom-offwhite": "rgb(196, 196, 196)",
				"custom-dark": "rgb(6, 9, 19)",
				"custom-dark-overlay": "rgb(13, 15, 20)",
				"accent-dark-overlay-lvl-2": "rgb(39, 40, 51)",
				"subtle-dark-overlay-lvl-2": "rgb(23, 25, 30)",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
