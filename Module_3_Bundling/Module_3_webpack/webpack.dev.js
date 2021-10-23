const path = require("path");
const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].js",
  },
  module:{
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devtool: 'eval-source-map',
  devServer: {
    port: 9000,
  },
  plugins: [
    new Dotenv({
      path: 'src/env/dev.env',
    }),
  ]
});