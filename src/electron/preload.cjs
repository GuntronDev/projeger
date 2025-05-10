const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("PROJEGER", {
  async SelectFile() {
    return await ipcRenderer.invoke("SelectFile");
  }
});
