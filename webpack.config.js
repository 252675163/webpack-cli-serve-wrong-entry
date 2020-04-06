const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: {
    index: "./src/my-entry.js",
  },
  mode:"development",
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  plugins:[new HtmlWebpackPlugin()],
  devServer: {
    compress: true,
    port: 9000,
  },
};
