const { app, BrowserWindow, ipcMain, globalShortcut } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });

    win.loadFile('index.html');
    // win.webContents.openDevTools();

    // Register keyboard shortcuts
    globalShortcut.register('Alt+Left', () => {
        win.webContents.goBack();
    });

    globalShortcut.register('Alt+Right', () => {
        win.webContents.goForward();
    });
}

// Handle navigation requests
ipcMain.on('navigate', (_event, direction) => {
    const win = BrowserWindow.getFocusedWindow();
    if (direction === 'back') {
        win.webContents.goBack();
    } else if (direction === 'forward') {
        win.webContents.goForward();
    }
});

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        globalShortcut.unregisterAll(); // Unregister shortcuts
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

const { net } = require('electron');

function checkInternetConnection() {
    return new Promise((resolve) => {
        const request = net.request('https://www.google.com');
        request.on('response', (response) => {
            resolve(response.statusCode === 200);
        });
        request.on('error', () => {
            resolve(false);
        });
        request.end();
    });
}

// Usage
checkInternetConnection().then((isOnline) => {
    console.log(isOnline ? 'Online' : 'Offline');
});

