class User{
    constructor(data){
        this.data = data;
    }
    ReadConfig(){
        console.log(this.data);
    }
}

class Admin extends User{
    WriteConfig(){

    }
}

module.exports = {User, Admin};