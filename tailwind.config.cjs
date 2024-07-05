/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', "./node_modules/flowbite/**/*.js"],
	theme: {
		fontFamily: {
			sans: [ "Old English (LET) W02", "sans-serif"]
		},
		extend: {},

	},
	plugins: [
		require('tailwindcss-animated'),
		
	],
}
