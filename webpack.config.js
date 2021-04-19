const path = require('path');
const PATH_TO_PUBLIC = path.resolve(__dirname, 'public');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: PATH_TO_PUBLIC,
  },
  devServer: {
    contentBase: PATH_TO_PUBLIC,
    open: true,
    port: 1337,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
          }
        ]
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.css'],
  },
  devtool: 'source-map',
};
