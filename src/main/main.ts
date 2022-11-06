// eslint-disable-next-line import/no-extraneous-dependencies
import { app, BrowserWindow, ipcMain, shell } from 'electron';
// eslint-disable-next-line import/no-extraneous-dependencies
import installExtension, {
  REACT_DEVELOPER_TOOLS,
  REDUX_DEVTOOLS,
} from 'electron-devtools-installer';
import { isDebug, /* getAssetsPath, */ getHtmlPath, getPreloadPath } from './utils';

// Menu.setApplicationMenu(null);

function createWindow() {
  const mainWindow = new BrowserWindow({
    // icon: getAssetsPath('icon.ico'),
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
    const extensions = [REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS];
    extensions.forEach((Name) => {
      installExtension(Name)
        // eslint-disable-next-line no-console
        .then((name) => console.log(`Added Extension: ${name}`))
        // eslint-disable-next-line no-console
        .catch((err) => console.log('An error occurred: ', err));
    });
  } // DEBUG DEVTOOLS

  /* URLs OPEN IN BROWSER */
  mainWindow.webContents.setWindowOpenHandler((data) => {
    shell.openExternal(data.url);
    return { action: 'deny' };
  });
}

/* IPC EVENTS */
ipcMain.on('message', (event, arg) => {
  // eslint-disable-next-line no-console
  console.log(`IPC Example: ${arg}`);
  event.reply('reply', 'Ipc Example pong');
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
