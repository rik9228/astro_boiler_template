const autoprefixer = require("autoprefixer");

const config = {
	plugins: [
		require("postcss-sort-media-queries")({
			sort: "mobile-first", // default value
		}),
		autoprefixer(),
	],
};

module.exports = config;
