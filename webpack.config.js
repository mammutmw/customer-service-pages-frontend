const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const EsiWebpackPlugin = require("esi-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const WebpackShellPlugin = require("webpack-shell-plugin");
const WebpackShellPluginNext = require("webpack-shell-plugin-next");
const webpack = require("webpack");
const dotenv = require("dotenv");

module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: path.resolve(__dirname, "build/"),
    filename: "bundle.js"
  },
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
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".scss", ".css", ".svg"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html")
    }),
    new CopyPlugin({
      patterns: [{ from: "public/assets", to: "public/assets", force: true }],
      options: {
        concurrency: 100
      }
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
