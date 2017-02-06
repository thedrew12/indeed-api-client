import webpack from 'webpack';
import path from 'path';

export default {
	debug: true, // show debug informormation
	devtool: 'cheap-module-eval-source-map',
	noInfo: false,
	entry: [
		'./src/index.js' // Your appʼs entry point
	],
  target: 'web',
	output: {
		path: `${__dirname}/dist`,
    publicPath: '/',
		filename: 'index.js'
	},
	devServer: {
		contentBase: './src',
    stats: {
      colors: true,
      hash: false,
      version: false,
      timings: false,
      assets: false,
      chunks: false,
      modules: false,
      reasons: false,
      children: false,
      source: false,
      errors: true,
      errorDetails: true,
      warnings: true,
      publicPath: false
    }
	},
	plugins: [
		new webpack.NoErrorsPlugin()
	],
  module: {
    loaders: [
			{
				test: /\.js$/,
				include: path.join(__dirname, './src'),
				loader: 'babel'
			}
		]
  }
};
