const MissionCommander = require("../app/missionCommander")

describe("Unit Test for Mission Commander Class",() => {
    test('1. Create a Mission Commader Object', () => {
        const myMissioonCommander = new MissionCommander("Woopa")
        expect(myMissioonCommander.name).toBe("Woopa")
    });
})