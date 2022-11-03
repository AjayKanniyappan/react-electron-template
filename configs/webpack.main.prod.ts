/* eslint-disable import/no-extraneous-dependencies */
import webpack from 'webpack';
import path from 'path';

const Configuration: webpack.Configuration = {
  mode: 'production',
  devtool: 'source-map',
  target: 'electron-main',
  entry: path.resolve(__dirname, '../src/main/main.ts'),
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            // Remove this line to enable type checking in webpack builds
            transpileOnly: true,
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        ELECTRON_ENV: JSON.stringify(process.env.ELECTRON_ENV || 'production'),
      },
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  output: {
    path: path.join(__dirname, '../app/dist/main'),
    filename: '[name].js',
  },
};

export default Configuration;
