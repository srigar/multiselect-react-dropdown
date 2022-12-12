const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: "./src/multiselect/multiselect.component.js",
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "index.js",
    libraryTarget: 'commonjs2'
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 7000,
    //watchContentBase: true,
    //progress: true
  },
  mode: "production",
  devtool: 'source-map',
  plugins: [new MiniCssExtractPlugin({
    filename: 'styles.css',
  })],
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
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      // { 
      //   test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
      //   loader: 'url-loader?limit=100000' 
      // }
    ]
  },
  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
       //`...`,
      new CssMinimizerPlugin(),      
      new TerserPlugin()
    ],
  },
  externals: {
    'react': 'commonjs react'
  }
};
