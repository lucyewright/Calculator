const calculate = require("./index.js").calculate;

describe("calculate function", () => {
  it("should work", () => {
    expect(calculate("2", "+", "2")).toBe(4);
  });
});
