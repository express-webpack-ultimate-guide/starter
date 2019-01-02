const {expect} = require("chai");

describe("Sample tests", () => {
    it("passes the test", () => {
        expect(Math.floor(Math.PI)).to.equal(3);
    });
    it.skip("skips a failing test", () => {
        expect("Hi").to.equal("hello");
    });
});
