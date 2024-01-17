/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['DM Sans Variable', ...require('tailwindcss/defaultTheme').fontFamily.sans]
			}
		}
	},

	plugins: []
};

module.exports = config;
