import { cpus } from 'os'

import { Configuration } from 'webpack'

// TODO https://github.com/TypeStrong/fork-ts-checker-webpack-plugin/pull/556
// import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'

/* eslint-disable @typescript-eslint/no-var-requires */
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
/* eslint-enable @typescript-eslint/no-var-requires */

const tsLoaderWorkers = cpus().length > 3 ? cpus().length - 2 : 1

type DevServer = {
  [key: string]: any // eslint-disable-line @typescript-eslint/no-explicit-any
}

const config: Configuration & DevServer = {
  devtool: 'source-map',
  entry: {
    app: `${__dirname}/src/App.tsx`,
  },
  output: {
    filename: '[name].js',
    path: `${__dirname}/dist`,
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: {
      rewrites: [{ from: /^\/*/, to: '/index.html' }],
    },
    host: '0.0.0.0',
    port: 8080,
    hot: true,
    liveReload: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'cache-loader',
          },
          {
            loader: 'ts-loader',
            options: {
              happyPackMode: true, // IMPORTANT! use happyPackMode mode to speed-up compilation and reduce errors reported to webpack
              // transpileOnly: true, TODO
            },
          },
          {
            // run compilation threaded
            loader: 'thread-loader',
            options: {
              // there should be 1 cpu for the fork-ts-checker-webpack-plugin
              workers: tsLoaderWorkers,
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'less-loader',
            // import the antd theme, webpack build show .bezierEasingMixin error ?
            // https://github.com/ant-design/ant-design/issues/7927
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
    ],
  },
  performance: { hints: false },
  optimization: {
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },
  plugins: [
    // TODO
    // new ForkTsCheckerWebpackPlugin({
    //   async: true,
    // }),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
}

export default config
