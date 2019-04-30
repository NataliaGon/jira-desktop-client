import { app, BrowserWindow, ipcMain } from 'electron';
import installExtension, { REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS  } from 'electron-devtools-installer';
import { enableLiveReload } from 'electron-compile';


const apiProvider = require('./domain/data-providers/')
const storeElectron = require('./data/')


const userData = new storeElectron.userStore({ name: 'User Main' })
const boardsStore = new  storeElectron.boardsStore({ name: 'Boards Main' })
const issuesData = new storeElectron.issuesStore({ name: 'Issues Main' })


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
    await installExtension(REDUX_DEVTOOLS);
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
const user = userData.getUser().users[0];


function handleDataBoards(data: any, user:any) {
  mainWindow.send('boards', data);
  const isUser = userData.getUser().users[0];
  boardsStore.addProjects(data);
  if (!isUser){
    userData.addUser(user);
  }
}
function renderUser(data: any) {
  mainWindow.send('user', data);
}
function renderIssues(data: any, boardName:string) {
  const issuesData= new storeElectron.issuesStore({ name:`issues-${boardName}`});
  issuesData.addIssues(data)
  const issues = issuesData.getIssues();
  mainWindow.send('issues', issues);
  
}
function showResalts(data){
  mainWindow.send('searchResults', data);
}

ipcMain.on('getIssues', (event: any, boardId:number, boardName:string) => {
  apiProvider.getIssues(user.name, user.password, renderIssues, boardId, boardName);
})


ipcMain.on('jira', (event: any, user: any) => {
  apiProvider.getBoard(user.name, user.password, handleDataBoards);
  apiProvider.getUserProfile(user.name, user.password, renderUser);
})


ipcMain.on('check-user', () => {
  if (user) {
    mainWindow.send('login', true);
    apiProvider.getBoard(user.name, user.password, handleDataBoards);
    apiProvider.getUserProfile(user.name, user.password, renderUser);
  }
})

ipcMain.on('search', (event: any, search: string)=>{
 let option ={}
  option.number=20;
  option.jql=search;
  apiProvider.search(user.name, user.password, option, showResalts);
})