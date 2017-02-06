import webpack from 'webpack';
import path from 'path';

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production')
};

export default {
	debug: true, // show debug informormation
	devtool: 'source-map',
	noInfo: false,
  entry: [
    './src/index.js' // Your appʼs entry point
  ],
  target: 'web',
	output: {
		path: `${__dirname}/dist`,
		publicPath: '/',
		filename: 'index.js',
    library: 'IndeedApiClient',
		libraryTarget: 'umd'
	},
  resolve: {
    extensions: ['', '.js']
  },
	devServer: {
		contentBase: './dist'
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.DefinePlugin(GLOBALS),
		new webpack.optimize.DedupePlugin()
	],
  module: {
    loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				include: path.join(__dirname, './src'),
				loader: 'babel-loader'
			}
		]
  }
};
