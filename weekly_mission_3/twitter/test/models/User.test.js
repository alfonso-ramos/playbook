const User = require("../../app/models/User")

describe("Unit tests for User class", () => {

    test("Create an User object", () =>{
        const user = new User(1, "ponchoramos", "Poncho", "Bio")
        expect(user.id).toBe(1)
        expect(user.username).toBe("ponchoramos")
        expect(user.name).toBe("Poncho")
        expect(user.bio).toBe("Bio")
        expect(user.dataCreated).not.toBeUndefined
        expect(user.lastUpdate).not.toBeUndefined()
    }),
    test("Add getters", () =>{
        const user = new User(1, "ponchoramos", "Poncho", "Bio")
        expect(user.getUsername).toBe("ponchoramos")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    }),
    test("Add setters", () => {
        const user = new User(1, "ponchoramos", "Poncho", "Bio")
        user.setUsername = "Ramos" 
        expect(user.username).toBe("Ramos")

        user.setBio = "New Bio"
        expect(user.bio).toBe("New Bio")
    } )
})