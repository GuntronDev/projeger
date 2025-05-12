const {dialog} = require("electron")
const fs = require("fs/promises");
const {User, Admin} = require("../users.js");

async function SelectFile() {
    const { filePaths} = await dialog.showOpenDialog({
    properties: ["openFile"],
    filters: [{ name: "JSON Files", extensions: ["json"] }]
  });

  try{
    const stringFileContent = await fs.readFile(filePaths[0], "utf-8");
    const jsonFileContent = JSON.parse(stringFileContent);

    if(jsonFileContent.metadata.adminID == 123){
        const newAdmin = new Admin(jsonFileContent);
        //test of admin
        newAdmin.ReadConfig();
        newAdmin.WriteConfig(
            `{
  "metadata": {
    "uniqueID": 713473212848351,
    "currentTime": "2025-05-12T22:49:04.423Z",
    "adminID": 0
  },
  "contentData": {}
}`);
        newAdmin.ReadConfig();
    }
    else{
        const newUser = new User(jsonFileContent);
        newUser.ReadConfig();
    }

  }
  catch(err){
    console.log("ERROR in selecting file:", err);
  }

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
        //JSON content
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