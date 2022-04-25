const UserServices = require("./../services/UserServices")

class UserView{
    static createUser(payload){
        if(payload == null){
            return{error: "payload no existe"}
        }else if((typeof payload.username !== "string" || payload.username == null) || (typeof payload.name !== "string" || typeof payload.name == null) || (typeof payload.id !== "number" || typeof payload.id == null)){
            return {error: "necesitan tener un valor valido"}
        }else{
            return UserServices.create(payload.id, payload.username, payload.name)
        }
    }
}

module.exports = UserView