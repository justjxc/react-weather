/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			keyframes: {
				drop: {
					'0%': {
						opacity: '0',
						bottom: '5px',
					},

					'1%': {
						opacity: '1',
					},

					'100%': {
						bottom: '-60px',
						opacity: '0',
					},
				},
			},

			animation: {
				'spin-slow': 'spin 3s linear infinite',
				drop: 'drop .4s linear infinite',
			},

			boxShadow: {
				card: '0 0 10px 2px rgba(0, 0, 0, 0.5)',
			},
		},
	},
	plugins: [],
};
