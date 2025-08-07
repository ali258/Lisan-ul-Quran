const path = require('path');

module.exports = {
  entry: './index.web.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            compilerOptions: {
              jsx: 'react-jsx',
              esModuleInterop: true,
              allowSyntheticDefaultImports: true,
            },
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      'react-native$': 'react-native-web',
      'react-native-screens': 'react-native-web',
      'react-native-safe-area-context': 'react-native-web',
    },
    fallback: {
      'react-native': 'react-native-web',
    },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
      publicPath: '/',
    },
    compress: true,
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
}; 