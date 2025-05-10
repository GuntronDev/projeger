const { ipcMain } = require("electron");
const {SelectFile } = require("./fileHandler.cjs");

function SetupICP(){
    return ipcMain.handle("SelectFile", SelectFile);
}

module.exports = {SetupICP};