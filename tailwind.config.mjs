/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				accent: 'rgb(136, 58, 234)',
				'accent-light': 'rgb(224, 204, 250)',
				'accent-dark': 'rgb(49, 10, 101)',
				'accent-hover': 'rgb(115, 34, 220)',
			}
		},
	},
	plugins: [],
}
