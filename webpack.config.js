module.exports = {
	entry: './scripts/entry.js',
	output: {
		path: './dist/scripts/',
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: ['babel-loader']
			},
			{
				test: require.resolve('turbolinks'),
				use: 'imports-loader?this=>window'
			}
		]
	}
};
