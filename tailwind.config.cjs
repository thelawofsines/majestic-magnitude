/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		colors: {
			'primary': '#d62726',
			'secondary': '#c84630',
			'light': '#f1f1f1',
			'dark': '#898989',
			'accent': '#d4a0a7',
			'green': '#13ce66',
			'yellow': '#ffc82c',
			'gray-dark': '#273444',
			'gray': '#8492a6',
			'gray-light': '#d3dce6',
		},

		fontFamily: {
			cairo: ['Readex'],
		},
		extend: {
			spacing: {
				'128': '32rem',
				'144': '36rem',
			},
			borderRadius: {
				'4xl': '2rem',
			},
			fontSize: {
				xs: '20px',
				md: '24px',
			}

		},
		plugins: [],
	}
}
