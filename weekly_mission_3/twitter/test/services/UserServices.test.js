const User = require("../../app/models/User")
const UserServices = require("../../app/services/UserServices")

describe("Test for UserService", () =>{
    test("1. Create a new user using the UserService", () =>{
        const user = UserServices.create(1, "ponchoramos","Poncho")
        expect(user.username).toBe("ponchoramos")
        expect(user.name).toBe("Poncho")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })
    test("2. Get all user data in a list", () => {
        const user = UserServices.create(1, "ponchoramos","Poncho")
        const userInfoList = UserServices.getInfo(user)
        expect(userInfoList[0]).toBe(1)
        expect(userInfoList[1]).toBe("ponchoramos")
        expect(userInfoList[2]).toBe("Poncho")
        expect(userInfoList[3]).toBe("Sin bio")
    })
    test("3. Update username", () =>{
        const user = UserServices.create(1, "ponchoramos", "Poncho")
        UserServices.updateUserUsername(user, "ponchor")
        expect(user.username).toBe("ponchor")
    })
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