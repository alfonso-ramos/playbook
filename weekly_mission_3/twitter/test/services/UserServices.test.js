const User = require("../../app/models/User")
const UserServices = require("../../app/services/UserServices")

describe("Test for UserService", () =>{
    // Requerimiento 1: Crear un nuevo usuario con lo ya definido en el sprint anterior, usando una nueva clase llamada `UserService`.
    // Criterios de aceptación:
    // 1. Esta clase deberá tener un método `create` que se pueda usar sin instanciar (static method), y que reciba solo los parámetros del `id`, `username` y `name`.
    // 2. El valor de `bio` deberá ser por default para todos los `user` creados.
    test("1. Create a new user using the UserService", () =>{
        const user = UserServices.create(1, "ponchoramos","Poncho")
        expect(user.username).toBe("ponchoramos")
        expect(user.name).toBe("Poncho")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })
    // Requerimiento 2: Agregar un nuevo método estático en `UserService` llamado `getInfo` que al recibir un objeto de la clase `User`, me regrese una lista con todos los valores de los atributos de dicho objeto.
    test("2. Get all user data in a list", () => {
        const user = UserServices.create(1, "ponchoramos","Poncho")
        const userInfoList = UserServices.getInfo(user)
        expect(userInfoList[0]).toBe(1)
        expect(userInfoList[1]).toBe("ponchoramos")
        expect(userInfoList[2]).toBe("Poncho")
        expect(userInfoList[3]).toBe("Sin bio")
    })
    // Requerimiento 3: Agregar un nuevo método estático en `UserService` llamado `updateUserUsername`, que reciba un objeto de la clase `User` y un nuevo string, que actualizará el valor de `username`.
    test("3. Update username", () =>{
        const user = UserServices.create(1, "ponchoramos", "Poncho")
        UserServices.updateUserUsername(user, "ponchor")
        expect(user.username).toBe("ponchor")
    })
    // Requerimiento 4: Agregar un nuevo método estático en `UserService` llamado `getAllUsernames`, que recibirá una lista de objetos de la clase `User`, y regresará la lista de todos los usernames de dichos objetos.

    test("4. Given a list of users give me the list of usernames", () => {
        const user1 = UserServices.create(1, "ponchoramos1", "Poncho")
        const user2 = UserServices.create(1, "ponchoramos2", "Poncho")
        const user3 = UserServices.create(1, "ponchoramos3", "Poncho")
        const usernames = UserServices.getAllUsernames([user1, user2, user3])
        expect(usernames).toContain("ponchoramos1")
        expect(usernames).toContain("ponchoramos2")
        expect(usernames).toContain("ponchoramos3")
    })
})