const {dialog} = require("electron")

async function SelectFile() {
    return await dialog.showOpenDialog({properties: ["openFile"]});
}

module.exports = {SelectFile};