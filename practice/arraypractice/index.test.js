const {addFunction} = require("./index")

describe("are adding function", () => {
    test("some function adds to array", () => {
        let array = []

        addFunction("testing tester", array)
        expect(array).toEqual(array["testing tester"])
    })
})