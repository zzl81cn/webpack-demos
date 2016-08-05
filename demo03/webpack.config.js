module.exports = {
  //entry: './main.jsx',
  entry: './primary.jsx',
  output: {
    //filename: 'bundle.js'
    filename: 'bundleOther.js'
  },
  module: {
    loaders:[
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react'
      }
    ]
  }
};
