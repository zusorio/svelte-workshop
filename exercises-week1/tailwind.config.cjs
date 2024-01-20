/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['DM Sans Variable', ...require('tailwindcss/defaultTheme').fontFamily.sans],
				hand: ['Gaegu', ...require('tailwindcss/defaultTheme').fontFamily.sans]
			}
		}
	},

	plugins: [
		require('@tailwindcss/forms'),
	]
};

module.exports = config;
