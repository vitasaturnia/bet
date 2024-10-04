module.exports = {
	globDirectory: 'src/',
	globPatterns: [
		'**/*.{js,css,json,png,jpg,svg}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};