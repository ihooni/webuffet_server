const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: "node",
  externals: [nodeExternals()],
  entry: {
    'webuffet.server': ['babel-polyfill', './src/app.ts']
  },
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    path: __dirname + '/build',
    filename: '[name].built.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      Configs: __dirname + '/src/configs',
      Database: __dirname + '/src/database',
      Routes: __dirname + '/src/routes',

      Auth: __dirname + '/src/app/auth',
      DB: __dirname + '/src/app/db',
      Middleware: __dirname + '/src/app/middleware',
      Provider: __dirname + '/src/app/provider'
    }
  },
  module: {
    rules: [
      {
        test: [/\.js$/],
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env'
              ]
            }
          }
        ]
      },
      {
        test: [/\.tsx?$/],
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          },
          'ts-loader'
        ]
      },
    ]
  }
}
