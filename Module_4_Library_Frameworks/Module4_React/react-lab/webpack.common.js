const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const path = require('path')
const basePath = __dirname;

module.exports = {
  context: path.join(basePath, 'src'),
  resolve: {
    extensions: [".js",".ts", ".tsx"],
    alias: {
      core: path.resolve(basePath, './src/core/'),
      scenes: path.resolve(basePath, './src/scenes/'),
      pods: path.resolve(basePath, './src/pods/'),
      layouts: path.resolve(basePath, './src/layouts/'),
      images: path.resolve(basePath, './src/images/'),
      common: path.resolve(basePath, './src/common/'),
      'common-app': path.resolve(basePath, './src/common-app/')
    }
  },
  entry: {
      app: ["./index.tsx"],
      appstyles: ['./css/styles.scss'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(basePath, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(png|jpg)$/,
        type: 'asset/resource',
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      scriptLoading:'blocking',
    }),
    new CleanWebpackPlugin(),
  ],
};
