const UserServices = require("./../services/UserServices")

class UserView{
    constructor(error){
        this.error = error
    }
    static createUser(payload){
        if(payload == null) {
            return
        }
    }
}

module.exports = UserView