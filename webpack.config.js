const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: './src/index.js',

  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.(pug|jade)$/, 
        use: 
        [ 
          { loader: 'apply-loader' },
          { loader: 'pug-loader?pretty' }
        ]
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin
    ({
      template: 'src/index.html',
      inject: 'body',
      xhtml: true,
      title: 'testing pug include'
    }),
  ]
};
