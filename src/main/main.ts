// eslint-disable-next-line import/no-extraneous-dependencies
import { app, BrowserWindow, ipcMain, Menu, shell } from 'electron';
import { autoUpdater } from 'electron-updater';
import Store from 'electron-store';
import { isDebug, getAssetsPath, getHtmlPath, getPreloadPath, installExtensions } from './utils';
import menu from './menu';
import './updater';

function createWindow() {
  const mainWindow = new BrowserWindow({
    icon: getAssetsPath('icon.ico'),
    width: 1100,
    height: 750,
    webPreferences: {
      devTools: isDebug,
      preload: getPreloadPath('preload.js'),
      // nodeIntegration: true, // NODE.JS WILL AVAILABLE IN RENDERER
    },
  });

  mainWindow.loadURL(getHtmlPath('index.html'));

  /* MENU BUILDER */
  Menu.setApplicationMenu(menu);

  /* AUTO UPDATER INVOKE */
  autoUpdater.checkForUpdatesAndNotify();

  /* DEBUG DEVTOOLS */
  if (isDebug) {
    mainWindow.webContents.openDevTools(); // ELECTRON DEVTOOLS
    installExtensions(); // REACT DEVTOOLS INSTALLER
  }

  /* URLs OPEN IN DEFAULT BROWSER */
  mainWindow.webContents.setWindowOpenHandler((data) => {
    shell.openExternal(data.url);
    return { action: 'deny' };
  });
}

/* IPC EVENTS EXAMPLE */
ipcMain.on('message', (event, arg) => {
  // eslint-disable-next-line no-console
  console.log(`IPC Example: ${arg}`);
  event.reply('reply', 'Ipc Example:  pong 🏓');
});

/** ELECTRON STORE EXAMPLE
 *  NOTE: LOCAL STORAGE FOR YOUR APPLICATION
 */
const store = new Store();
ipcMain.on('set', (_event, key, val) => {
  // eslint-disable-next-line no-console
  console.log(`Electron Store Example: key: ${key}, value: ${val}`);
  store.set(key, val);
});
ipcMain.on('get', (event, val) => {
  // eslint-disable-next-line no-param-reassign
  event.returnValue = store.get(val);
});

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
