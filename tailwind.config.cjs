const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {},
		fontFamily: {
			'sans': ['Figtree', 'sans-serif'],
		}
	},

	plugins: [require("daisyui"), require('@tailwindcss/aspect-ratio')],

	daisyui: {
		themes: [
			{
				esc: {
					"base-100": "#05025E",
					"base-200": "#040241",
					"primary": "#FF0087",
					"secondary": "#2EFD79",
					"base-content": "#FFFFFF",
					"neutral-content": "#FFFFFF",
					"background": "#02025e",
				},
			},
			"dark",
			"cupcake",
		],
	}
};

module.exports = config;
