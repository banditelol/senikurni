module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				body: ['Metropolis'],
				serif: ['Basley']
			},
			colors: {
				primary: '#16B198',
				secondary: '#D4F9E1',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
