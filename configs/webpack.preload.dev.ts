/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import webpack from 'webpack';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const Configuration: webpack.Configuration = {
  mode: 'development',
  devtool: 'inline-source-map',
  target: 'electron-preload',
  stats: 'errors-only',
  entry: path.join(__dirname, '../src/main/preload.ts'),
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            compilerOptions: {
              module: 'esnext',
            },
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      ELECTRON_ENV: JSON.stringify(process.env.ELECTRON_ENV || 'production'),
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    modules: [path.join(__dirname, '../src'), 'node_modules'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '../tsconfig.json'),
      }),
    ],
  },
  output: {
    path: path.join(__dirname, '../app/dist/main'),
    filename: 'preload.js',
  },
  watch: true,
};

export default Configuration;
