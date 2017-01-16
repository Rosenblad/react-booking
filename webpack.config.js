const path = require('path')
const context = path.resolve(__dirname, 'src')

module.exports = {
	context,
	entry: './client/index.js',
	output: {
		filename: 'main.bundle.js',
		path: path.join(__dirname, 'public/assets/js'),
		publicPath: '/public/'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader?importLoader=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
					}
				],
			},
			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							plugins: [
								'transform-react-jsx',
								[
									'react-css-modules',
									{
										context
									}
								]
							]
						}
					}
				],
				exclude: /node_modules/,
			},
		]
	},
	devtool: 'cheap-module-source-map',
	stats: 'minimal',
}