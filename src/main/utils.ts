// eslint-disable-next-line import/no-extraneous-dependencies
import { app } from 'electron';
import path from 'path';
import { port } from '../../DevConfig.json';

const isDebug = process.env.ELECTRON_ENV === 'debug';

function getAssetsPath(fileName: string) {
  if (process.env.NODE_ENV === 'production' && app.isPackaged === true) {
    return path.resolve(process.resourcesPath, 'assets', fileName);
  }
  if (process.env.NODE_ENV === 'production' && app.isPackaged === false) {
    return path.resolve(__dirname, '../../../assets', fileName);
  }
  return path.resolve(__dirname, '../../assets', fileName);
}

function getHtmlPath(htmlFileName: string) {
  if (process.env.NODE_ENV === 'development') {
    const url = `http://localhost:${port}`;
    return url;
  }
  return `file://${path.resolve(__dirname, `../renderer/${htmlFileName}`)}`;
}

function getPreloadPath(Name: string) {
  if (process.env.NODE_ENV === 'development') {
    return path.resolve(__dirname, '../../app/dist/main', Name);
  }
  return path.resolve(__dirname, Name);
}

export { isDebug, getAssetsPath, getHtmlPath, getPreloadPath };
