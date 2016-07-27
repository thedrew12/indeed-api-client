import webpack from 'webpack';
import path from 'path';

export default {
	debug: true, // show debug informormation
	devtool: 'cheap-module-eval-source-map',
	noInfo: false,
	entry: [
		'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
		'./src/index.js' // Your appʼs entry point
	],
	target: 'web', // bundle the code in a way the browser understands
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: './src'
	},
	plugins: [
		new webpack.NoErrorsPlugin()
	],
  module: {
    loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules/,
				include: path.join(__dirname, './src'),
				loader: 'babel'
			}
		]
  }
};
