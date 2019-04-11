var webpack = require('webpack');
const path = require("path");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: "./src/multiselect/multiselect.component.js",
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "index.js",
    libraryTarget: 'commonjs2'
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 7000,
    watchContentBase: true,
    progress: true
  },
  mode: "production",
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
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: false,
        parallel: true,
        uglifyOptions: {
          compress: true,
          ecma: 6,
          mangle: true
        }
      })
    ]
  },
  externals: {
    'react': 'commonjs react'
  }
};
