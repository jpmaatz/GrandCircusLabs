const {
	tempConverter,
	checkIfPalindrome
} = require("./index")

describe("tempConverter", () => {
	it("converts 0C to be 32F", () => {
		expect(tempConverter(0, "C")).toEqual(32)
	})
	it("converts 100C to be 212F", () => {
		expect(tempConverter(100, "C")).toEqual(212)
	})
	it("converts 95F to be 35C", () => {
		expect(tempConverter(95, "F")).toEqual(35)
	})
	it("converts -40F to be -40C", () => {
		expect(tempConverter(-40, "F")).toEqual(-40)
	})
	it("converts -40C to be -40F", () => {
		expect(tempConverter(-40, "C")).toEqual(-40)
	})
	it("converts 100F to be ~37.778", () => {
		expect(tempConverter(100, "F")).toEqual(37 + 7 / 9)
	})
})

describe("checkIfPalindrome", () => {
	it("is true if given 'hannah'", () => {
		expect(checkIfPalindrome("hannah")).toEqual(true)
	})
	it("is true if given 'tacocat'", () => {
		expect(checkIfPalindrome("tacocat")).toEqual(true)
	})
	it("is true if given 'racecar'", () => {
		expect(checkIfPalindrome("racecar")).toEqual(true)
	})
	it("is true if given ''", () => {
		expect(checkIfPalindrome("")).toEqual(true)
	})
	it("is true if given 'a'", () => {
		expect(checkIfPalindrome("a")).toEqual(true)
	})
	it("is false if given 'andy'", () => {
		expect(checkIfPalindrome("andy")).toEqual(false)
	})
	it("is false if given 'bad'", () => {
		expect(checkIfPalindrome("bad")).toEqual(false)
	})
	it("is false if given 'abababcdbababa'", () => {
		expect(
			checkIfPalindrome("abababcdbababa")
		).toEqual(false)
	})
	it("is true even if given long str", () => {
		let longStr = ""
		for (let i = 0; i < 100000; i++) longStr += "e"
		expect(checkIfPalindrome(longStr)).toEqual(true)
	})
})