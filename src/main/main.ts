// eslint-disable-next-line import/no-extraneous-dependencies
import { app, BrowserWindow } from 'electron';
import path from 'path';
import { isDebug, getHtmlPath, getPreloadPath } from './utils';

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1100,
    height: 750,
    webPreferences: {
      devTools: isDebug,
      nodeIntegration: true,
      preload: getPreloadPath('preload.js'),
    },
  });

  mainWindow.loadURL(getHtmlPath('index.html'));

  if (isDebug) {
    mainWindow.webContents.openDevTools();
  }
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
