const {dialog} = require("electron")
const fs = require("fs").promises;

async function SelectFile() {
    return await dialog.showOpenDialog({properties: ["openFile"]});
}

// currently just saving date
// Implement saving project data
async function SaveProject() {
    const {filePath} = await dialog.showSaveDialog({
        title: "Projeger",
        defaultPath: "projeger-save.json",
        filters: [{name:"JSON Files", extensions: ["json"]}]
    });

    if(filePath){
        const data = {
            metadata: {
                //uniqueID for debuging
                //small scale solution -> unique id not promised
                //extremely unlikely to not create unique id
                uniqueID: Math.floor(Math.random() * 1000000000000000),
                currentTime: new Date().toISOString(),
                adminID: 0
            },
            contentData: {

            }
        };

        await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
    }
}

module.exports = {SelectFile, SaveProject};