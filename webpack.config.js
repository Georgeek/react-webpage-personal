module.exports = {
	entry: './src/index.jsx',

	output: {
		filename: 'bundle.js',
		path: './public',
	},

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: ['babel-loader']
			},
			{
				test: /\.styl$/,
				loaders: ['style', 'css' ,'stylus']
			}
		]
	},

	devtool: 'eval-source-map',

	resolve: {
		extensions: ['', '.js', '.jsx']
	}
};
