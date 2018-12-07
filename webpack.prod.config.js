const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    header: './src/react/widgets/Header/index.js',
    footer: './src/react/widgets/Footer/index.js',
    renderComponents:  './src/renderComponents.js'
  },
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /.(woff|woff2|eot|ttf|otf)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: "fonts/[name].[ext]"
          }
        }]
      },
      {
        test: /.(png|jpg|jpeg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: "images/[name].[ext]"
          }
        }]
      }
    ]
  },
  devServer: {
    host: 'localhost',
    port: '3663',
    open: false,
    overlay: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.[hash].css"
    }),
    new webpack.DefinePlugin({}),
    new HtmlWebpackPlugin({
      title: 'Shakti',
      template: './src/index.html'
    }),
    new webpack.WatchIgnorePlugin([
      path.join(__dirname, 'node_modules')
    ]),
    new webpack.HashedModuleIdsPlugin(),
  ]
};
