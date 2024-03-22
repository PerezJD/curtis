const path = require('path');
const webpackConfig = require('./webpack.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  ...webpackConfig,
  entry: './src/local/index.tsx',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dev/'),
    publicPath: '/',
  },
  mode: 'development',
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/local/index.html'),
      filename: './index.html'
    })
  ],
  devServer: {
    host: '0.0.0.0',
    port: 8000,
    historyApiFallback: {
      rewrites: [
        {
          from: /(.*?)\.html/,
          to: `/`
        }
      ],
    },
    client: {
      progress: true,
      overlay: {
        errors: true,
        warnings:false
      }
    }
  }
};
