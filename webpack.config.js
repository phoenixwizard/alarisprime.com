import path from 'path';

module.exports = {
	entry: path.join(__dirname, './scripts/entry.js'),
	output: {
		path: path.join(__dirname, './dist/scripts/'),
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
