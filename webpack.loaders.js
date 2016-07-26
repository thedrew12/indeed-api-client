module.exports = [
  {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    loaders: ['babel-loader'],
    query: {
      presets: ['es2015']
    }
  }
];
