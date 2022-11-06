/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import chalk from 'chalk';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import { spawn } from 'child_process';
import { port } from '../DevConfig.json';
import 'webpack-dev-server';

const Configuration: webpack.Configuration = {
  mode: 'development',
  devtool: 'inline-source-map',
  target: ['web', 'electron-renderer'],
  stats: 'errors-only',
  entry: path.join(__dirname, '../src/renderer/index.tsx'),
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
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 1,
            },
          },
          'sass-loader',
        ],
        include: /\.module\.s?(c|a)ss$/,
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /\.module\.s?(c|a)ss$/,
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      /* SVG LOADER */
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              prettier: false,
              svgo: false,
              svgoConfig: {
                plugins: [{ removeViewBox: false }],
              },
              titleProp: true,
              ref: true,
            },
          },
          'file-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '../src/renderer/index.html'),
      minify: {
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeComments: true,
      },
      isBrowser: false,
    }),
    new ReactRefreshWebpackPlugin(),
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
    path: path.join(__dirname, '../app/dist/renderer'),
    filename: '[name].js',
  },
  devServer: {
    port,
    compress: true,
    hot: true,
    static: {
      publicPath: '/',
    },
    headers: { 'Access-Control-Allow-Origin': '*' },
    historyApiFallback: {
      verbose: true,
    },
    client: {
      logging: 'error',
    },
    setupMiddlewares(middlewares) {
      // eslint-disable-next-line no-console
      console.log(`${chalk.whiteBright.bold('✨ Start')} ${chalk.green.bold('Hacking...👨‍💻')}`); // Electron is running...
      let args = ['run', 'start:main'];
      if (process.env.MAIN_ARGS) {
        args = args.concat(['--', ...process.env.MAIN_ARGS.matchAll(/"[^"]+"|[^\s"]+/g)].flat());
      }
      spawn('npm', args, {
        shell: true,
        stdio: 'inherit',
      })
        .on('close', (code: number) => {
          process.exit(code);
        })
        // eslint-disable-next-line no-console
        .on('error', (spawnError) => console.error(spawnError));
      return middlewares;
    },
  },
};

export default Configuration;
