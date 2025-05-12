const {dialog} = require("electron")
const fs = require("fs/promises");
//const {User, Admin} = require("../users.js");

async function SelectFile() {
    const { filePaths} = await dialog.showOpenDialog({
    properties: ["openFile"],
    filters: [{ name: "JSON Files", extensions: ["json"] }]
  });

  try{
    const stringFileContent = await fs.readFile(filePaths[0], "utf-8");
    const jsonFileContent = JSON.parse(stringFileContent);
    console.log(jsonFileContent);

    /*if(jsonFileContent.metadata.adminID == 123456798){
        const newAdmin = new Admin(jsonFileContent);
        newAdmin.ReadConfig();
    }
    else{
        const newUser = new User(jsonFileContent);
        newUser.ReadConfig();
    }*/

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