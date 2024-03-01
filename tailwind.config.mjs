/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				accent: "rgb(136, 58, 234)",
				"muted-accent": "rgb(176, 128, 234)",
				"accent-hover": "rgb(115, 34, 220)",
				"custom-gray": "rgb(161, 161, 170)",
				"custom-offwhite": "rgb(216, 216, 216)",
				"custom-dark": "rgb(19, 21, 26)",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
