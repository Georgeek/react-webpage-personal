module.exports = {
	entry: './src/index.jsx',

	output: {
		filename: 'bundle.js',
		path: './public',
	},
	devServer: {
		inline: true,
		contentBase: './public',
		port: 3000
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: ['react-hot-loader','babel-loader']
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
