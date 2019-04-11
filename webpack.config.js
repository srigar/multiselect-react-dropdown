const path = require("path");

module.exports = {
  entry: "./src/multiselect/multiselect.component.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "index.js",
    libraryTarget: 'commonjs2'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components|build|dist)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      },
      { 
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
        loader: 'url-loader?limit=100000' 
      }
    ]
  },
  externals: {
    'react': 'commonjs react'
  }
};
