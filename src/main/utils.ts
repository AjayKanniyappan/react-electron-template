import path from 'path';
import { port } from '../../DevConfig.json';

export default function getHtmlPath(htmlFileName: string) {
  if (process.env.NODE_ENV === 'development') {
    const url = `http://localhost:${port}`;
    return url;
  }
  return `file://${path.resolve(__dirname, `../renderer/${htmlFileName}`)}`;
}
