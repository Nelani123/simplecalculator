const { add, multiply } = require("../src/simple_calculator_src");

describe("A simple calculator that adds numbers", function () {
  it("should be able to add two numbers", function () {
    expect(add(1, 2)).toEqual(3);
  });

  it("should be able to add two negative numbers", function () {
    expect(add(-1, -1)).toEqual(-2);
  });

  it("should be able to add more numbers", function () {
    expect(add(1, 2, 3, 4, 5)).toEqual(15);
  });
});

//multiply numbers
describe("A simple calculator that multiplies numbers ", function () {
  it("should be able to multiply two numbers", function () {
    expect(multiply(1, 3)).toEqual(3);
  });

  it("should be able to multiply positive and negative numbers", function () {
    expect(multiply(-1, 3)).toEqual(-3);
  });

  it("should be able to multiply more numbers", function () {
    expect(multiply(1, 2, 3, 4, 5)).toEqual(120);
  });
});
