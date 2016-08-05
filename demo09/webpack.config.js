var webpack = require('webpack');

var devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

module.exports = {
  entry: './main.jsx',
  output: {
    filename: 'bundle.js'
  },
  plugins: [devFlagPlugin]
};
