const { ipcMain } = require("electron");
const {SelectFile, SaveProject } = require("./fileHandler.cjs");

function SetupICP(){
    ipcMain.handle("SelectFile", SelectFile);
    ipcMain.handle("SaveProject", SaveProject)
}

module.exports = {SetupICP};