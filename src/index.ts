import { app, BrowserWindow, ipcMain } from 'electron';
import installExtension, { REACT_DEVELOPER_TOOLS } from 'electron-devtools-installer';
import { enableLiveReload } from 'electron-compile';
const getBoard = require('./domain/data-providers/board-api');
const getUserProfile = require('./domain/data-providers/user-api');
const getUserProject = require('./domain/data-providers/project-api');
const dataLocal = require('./domain/data-providers/local.js');
const ProjectsStore = require('./data/projects-store.js')
const UserStore = require('./data/user-store.js')


const projectsData = new ProjectsStore({ name: 'Projects Main' });
const userData = new UserStore({ name: 'User Main' })
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow: Electron.BrowserWindow | null = null;

const isDevMode = process.execPath.match(/[\\/]electron/);

if (isDevMode) {
  enableLiveReload({ strategy: 'react-hmr' });
}

const createWindow = async () => {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 1000,
  });

  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/index.html`);

  // Open the DevTools.
  if (isDevMode) {
    await installExtension(REACT_DEVELOPER_TOOLS);
    mainWindow.webContents.openDevTools();
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });


};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {

  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

function rend(data: any, user) {
  mainWindow.send('boards', data);
  const isUser = userData.getUser().users[0];
  if (!isUser){
    userData.addUser(user);
  }
}
function renderUser(data: any) {
  mainWindow.send('user', data);
}
function renderProject(data: any) {
  mainWindow.send('projects', data);
  console.log(data);

}
ipcMain.on('jira', (event: any, user: any) => {
  getBoard(user.name, user.password, rend);
  getUserProfile(user.name, user.password, renderUser);
  getUserProject(user.name, user.password, renderProject);
})

ipcMain.on('check-user', () => {
  const user = userData.getUser().users[0];
  if (user) {
    mainWindow.send('login', true);
    getBoard(user.name, user.password, rend);
    getUserProfile(user.name, user.password, renderUser);
    getUserProject(user.name, user.password, renderProject);
  }
})
