const $path = require('path');
const postStylus = require('poststylus');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  entry: {
    //'polyfills': './src/polyfills.ts',
    //'vendors': './src/vendors.ts',
    'main': ['./src/index.jsx', './src/styles/_styles.styl']
  },
  devServer: {
    // hot: true,
    historyApiFallback: true,
  },
  // watch: true,
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.styl'],
    modules: [
      $path.resolve('./src'),
      $path.resolve('./node_modules'),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.s(a|c)ss$/, // .sass || .scss
        loader: ['style-loader','css-loader','sass-loader']
        //include: [$path.join(__dirname, 'src', 'styles')]
      },
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'stylus-loader',
            options: {
              use: [
                postStylus(['autoprefixer']),
              ],
              modules: true,
              localIdentName: "[name]_[local]_[hash:base64:5]",
              sourceMap: true,
              minimize: true
            },
          },
        ],
        exclude: /node_modules/,
      },
    ]
  },
  plugins: [htmlPlugin]
};
