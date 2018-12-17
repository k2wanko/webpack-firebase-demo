const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /firebase-config\.json$/,
        loader: path.resolve('./firebase-config-loader')
      },
      {
        include: [path.resolve(__dirname, 'src')],
        loader: 'babel-loader',

        options: {
          plugins: ['syntax-dynamic-import'],

          presets: [
            [
              'env',
              {
                modules: false
              }
            ]
          ]
        },

        test: /\.js$/
      },
      {
        test: /\.css$/,

        use: [
          {
            loader: 'style-loader',

            options: {
              sourceMap: true
            }
          },
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  },

  entry: {
    app: path.resolve('./src/app.js')
  },

  output: {
    filename: '[name].js?[chunkhash]',
    path: path.resolve(__dirname, 'public')
  },

  mode: 'development'

  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       vendors: {
  //         priority: -10,
  //         test: /[\\/]node_modules[\\/]/
  //       }
  //     },

  //     chunks: 'async',
  //     minChunks: 1,
  //     minSize: 30000,
  //     name: true
  //   }
  // }
}
