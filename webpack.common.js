const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin')
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default
const ImageminMozjpeg = require('imagemin-mozjpeg')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [{
      test: /\.html$/i,
      use: ['html-loader?esModule=false']
    },
    {
      test: /\.styles.scss$/,
      exclude: /node_modules/,
      use: ['sass-to-string', 'sass-loader?sourceMap=true']
    },
    {
      test: /\.(scss)$/,
      include: /styles/,
      exclude: [/\.styles.scss$/, /node_modules/],
      use: ['style-loader', 'css-loader?esModule=false', 'sass-loader?sourceMap=true']
    },
    {
      test: /\.(ttf|eot|woff|woff2)|(svg|png|jpg|gif)$/,
      use: {
        loader: 'file-loader',
        options: {
          // name: '[name].[ext]',
          // outputPath: (url, resourcePath, context) => {
          //   return resourcePath.split('\\').slice(7).join('/')
          // },
          esModule: false
        }
      }
    }
    ]
  },
  resolve: {

    alias: {
      assets: path.resolve(__dirname, 'src/public')
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery'
    }),
    new WebpackPwaManifest({
      filename: 'manifest.json',
      name: 'EateryApp',
      short_name: 'EateryApp',
      description: 'Find a near and favorite restaurant',
      theme_color: '#607d8b9c',
      background_color: '#607d8b9c',
      display: 'standalone',
      inject: true,
      fingerprints: false,
      ios: true,
      start_url: '/index.html',
      icons: [{
        src: path.resolve('src/public/icons/app-icon.png'),
        destination: path.join('icons'),
        sizes: [96, 128, 192, 256, 384, 512],
        ios: true
      }]
    }),
    new HtmlWebpackPlugin({
      favicon: path.resolve(__dirname, 'src/public/icons/app-icon.svg'),
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [{
        from: path.resolve(__dirname, 'src/public/'),
        to: path.resolve(__dirname, 'dist/'),
        globOptions: {
          ignore: [
            '**/images/hero-image_2.jpg',
            '**/fonts/**'
          ]
        }
      }]
    }),
    new ServiceWorkerWebpackPlugin({
      entry: path.resolve(__dirname, 'src/scripts/sw.js')
    }),
    new ImageminWebpackPlugin({
      plugins: [
        ImageminMozjpeg({
          quality: 50,
          progressive: true
        })
      ]
    }),
    new BundleAnalyzerPlugin()
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      maxSize: 70000,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: '~',
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    },
    minimizer: [new UglifyJsPlugin({
      cache: true,
      parallel: true
    })]
  }
}
