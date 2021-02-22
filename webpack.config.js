const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const EsiWebpackPlugin = require("esi-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const WebpackShellPlugin = require("webpack-shell-plugin");
const WebpackShellPluginNext = require("webpack-shell-plugin-next");
const webpack = require("webpack");
const dotenv = require("dotenv");

/*

    new CopyPlugin({
      patterns: [{ from: "public/assets", to: "public/assets", force: true }],
      options: {
        concurrency: 100
      }
    }),
 
 */

module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: path.resolve(__dirname, "build/"),
    publicPath: '/',
    filename: "bundle.js"
  },
  //Fixes ERR_UNKNOWN_URL_SCHEME
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, "build/"),
    hot: true,
    port: 4000,
    open: false,
    writeToDisk: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".scss", ".css"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html")
    }),

    new EsiWebpackPlugin({
      onError(src, err) {
        console.error(`Error when resolving ${src}: ${err}`);
      },
      processOptions: {
        headers: {}
      }
    }),

    new webpack.ProvidePlugin({
      process: "process/browser"
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(dotenv.config().parsed) // it will automatically pick up key values from .env file
    })
  ]
};
