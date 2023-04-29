const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {},
		fontFamily: {
			'sans': ['Roboto', 'sans-serif'],
		}
	},

	plugins: [require("daisyui"), require('@tailwindcss/aspect-ratio')]
};

module.exports = config;
