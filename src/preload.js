const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('PROJEGER', {
  async openDialog() {
    return await ipcRenderer.invoke('open-dialog');
  }
});
