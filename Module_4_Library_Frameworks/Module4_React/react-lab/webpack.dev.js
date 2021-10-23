const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-source-map",
  output: {
    filename: "[name].js",
  },  
  module: {
    rules: [  
        {
            test: /\.scss$/,
            exclude: /node_modules/,
            use : [
                "style-loader",
                {
                    loader: "css-loader",
                },
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
            use : ["style-loader", "css-loader"],
        },
    ],
  },
  devServer: {
    port: 8080,
    stats: "errors-only",
  },
});