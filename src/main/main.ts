// eslint-disable-next-line import/no-extraneous-dependencies
import { app, BrowserWindow, Menu } from 'electron';
import getHtmlPath from './utils';

Menu.setApplicationMenu(null);

const isDebug = process.env.ELECTRON_ENV === 'debug'; // DEBUG

/* const getAssetPath = (icon: string) => {
  if (process.env.NODE_ENV === 'production' && app.isPackaged === true) {
    return path.join(process.resourcesPath, 'assets', icon);
  }
  if (process.env.NODE_ENV === 'production' && app.isPackaged === false) {
    return path.join(__dirname, '../../../assets', icon);
  }
  return path.join(__dirname, '../../assets', icon);
}; */

function createWindow() {
  const mainWindow = new BrowserWindow({
    // icon: getAssetPath('icon.ico'),
    width: 800,
    height: 600,
    webPreferences: {
      devTools: isDebug,
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  if (isDebug === true) {
    mainWindow.webContents.openDevTools();
  } // DEBUG BUILD

  mainWindow.loadURL(getHtmlPath('index.html'));
}

app.whenReady().then(() => {
  createWindow();
});
