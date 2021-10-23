const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = merge(common, {
  mode: "production",
  stats: "verbose",
  output: {
    filename: "js/[name].[chunkhash].js",
    assetModuleFilename: "images/[hash][ext][query]",
  },
  module: {
      rules: [
        {
            test: /\.scss$/,
            exclude: /node_modules/,
            use : [
                MiniCssExtractPlugin.loader, 
                "css-loader",
                {
                    loader: "sass-loader",
                    options: {
                    implementation: require("sass")
                    }
                }
            ]
          },
          {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
          },
      ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].[chunkhash].css",
      chunkFilename: "[id].[chunkhash].css",
    }),
  ],
});