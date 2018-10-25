import {
  calculate,
  initialOperators,
  secondOperators,
  operatorEnd,
  equals
} from "./calculate";

describe("calculate function", () => {
  it("should work for +", () => {
    expect(calculate("2", "+", "2")).toBe(4);
  });
  it("should work for -", () => {
    expect(calculate("2", "-", "2")).toBe(0);
  });
  it("should work for x", () => {
    expect(calculate("2", "x", "3")).toBe(6);
  });
  it("should work for /", () => {
    expect(calculate("2", "/", "2")).toBe(1);
  });
});

describe("initialOperators", () => {
  it("should find x", () => {
    expect(initialOperators(["2", "x", "2"])).toBe(1);
  });
  it("should find /", () => {
    expect(initialOperators(["2", "+", "2", "/", "2"])).toBe(3);
  });
  it("should find first x or /", () => {
    expect(
      initialOperators(["2", "-", "2", "+", "3", "x", "2", "/", "3"])
    ).toBe(5);
  });
});

describe("secondOperators", () => {
  it("should find +", () => {
    expect(secondOperators(["2", "+", "2"])).toBe(1);
  });
  it("should find -", () => {
    expect(secondOperators(["2", "x", "2", "-", "2"])).toBe(3);
  });
  it("should find first + or -", () => {
    expect(secondOperators(["2", "/", "2", "x", "3", "-", "2", "+", "3"])).toBe(
      5
    );
  });
});

describe("operatorEnd", () => {
  it("should tell if last index is -", () => {
    expect(operatorEnd(["2", "+", "2", "-"])).toBe(true);
  });
  it("should tell if last index is +", () => {
    expect(operatorEnd(["2", "+", "2", "+"])).toBe(true);
  });
  it("should tell if last index is x", () => {
    expect(operatorEnd(["2", "+", "2", "x"])).toBe(true);
  });
  it("should tell if last index is /", () => {
    expect(operatorEnd(["2", "+", "2", "/"])).toBe(true);
  });
  it("should tell if last index is num", () => {
    expect(operatorEnd(["2", "+", "2"])).toBe(false);
  });
});

describe("equals", () => {
  it("should work", () => {
    expect(equals(["2", "+", "4", "x", "2", "-", "6", "/", "2"])).toBe(7);
  });
  it("should work", () => {
    expect(equals(["3", "-", "5", "x", "3", "/", "2", "x"])).toBe(-4.5);
  });
  it("should work", () => {
    expect(equals(["2", "-", "10", "/", "5", "-", "4", "x", "5"])).toBe(-20);
  });
  it("should work", () => {
    expect(equals(["2", "x", "4", "+", "2", "-", "6", "/"])).toBe(4);
  });
});
