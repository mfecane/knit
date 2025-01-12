/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,vue}'],
	theme: {
		extend: {},
	},
	plugins: [],
	theme: {
		extend: {
			colors: {
				gray: {
					600: 'rgb(66 70 74)',
					800: 'rgb(46 48 50)',
					900: 'rgb(28 29 31)',
				},
				slate: {
					600: 'rgb(80 86 95)',
				},
				lime: {
					600: 'rgb(218 218 107)',
					900: 'rgb(76 84 68)',
				},
			},
		},
	},
}
