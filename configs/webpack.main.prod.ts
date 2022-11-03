/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import webpack from 'webpack';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const Configuration: webpack.Configuration = {
  mode: 'production',
  devtool: 'source-map',
  target: 'electron-main',
  entry: {
    main: path.join(__dirname, '../src/main/main.ts'),
    preload: path.join(__dirname, '../src/main/preload.ts'),
  },
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
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '../tsconfig.json'),
      }),
    ],
  },
  output: {
    path: path.join(__dirname, '../app/dist/main'),
    filename: '[name].js',
  },
};

export default Configuration;
