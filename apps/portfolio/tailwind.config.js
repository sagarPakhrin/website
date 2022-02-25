const { join } = require('path');
module.exports = {
  content: [
    join(__dirname, 'components/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, 'pages/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, '../../libs/**/*.{js,ts,jsx,tsx}'),
  ],
  darkMode: 'media',
  theme: {
    extend: {},
  },
  plugins: [],
};
