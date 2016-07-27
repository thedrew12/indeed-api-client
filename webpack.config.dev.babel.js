import webpack from 'webpack';
import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';

export default {
	entry: [
		'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
		'webpack/hot/only-dev-server',
		'./src/index' // Your appʼs entry point
	],
	devtool: process.env.WEBPACK_DEVTOOL || 'source-map',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'index.js'
	},
  module: {
    loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules/,
				include: path.join(__dirname, './src'),
				loader: 'babel-loader'
			}
		]
  },
	devServer: {
		contentBase: './dist',
			noInfo: true, //  --no-info option
			hot: true,
			inline: true
		},
	plugins: [
		new webpack.NoErrorsPlugin(),
		new CopyWebpackPlugin([{ from: './index.html' }])
	]
};
