// /** @type {import('tailwindcss').Config} */
// module.exports = {
// 	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
// 	theme: {
// 		extend: {},
// 	},
// 	plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
	tailwindConfig: './styles/tailwind.config.js',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		screens: {
			xs: '480px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
		},
		colors: {
			main: '#0aff9d',
			background:'#232323',
			text:'#ebecf3',
			dark:'#080808',
		},
		fontFamily: {
			// Headings
			sans: ['Albert Sans Variable', 'sans-serif'],
			// Base text
			monospace: ['Inconsolata', 'monospace'],
		},
		fontSize: {
			xs: '.75rem',
			sm: '.875rem',
			tiny: '.875rem',
			base: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'5xl': '3rem',
		},
		gridTemplateColumns: {
			"2": '0.5fr,3fr',
			"3": 'max-content, 1fr, 1fr'
		}
	},
};
