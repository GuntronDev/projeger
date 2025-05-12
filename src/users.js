class User{
    constructor(data){
        this.data = data;
    }
    ReadConfig(){
        console.log(this.data);
    }
}

class Admin extends User{
    constructor(data){
        super(data);
    }
    WriteConfig(newdata){
        this.data = newdata;
    }
}

export{User,Admin};