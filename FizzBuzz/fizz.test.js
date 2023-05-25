const fizzBuzz = require("./fizz.js");

test("should log fizz when input is divisible by 5", () => {
  const consoleSpy = jest.spyOn(console, "log");
  fizzBuzz(10);
  expect(consoleSpy).toHaveBeenCalledWith("buzz");
  consoleSpy.mockRestore();
});

test("should log fizzbuzz when input is divisible by 3 and 5", () => {
  const consoleSpy = jest.spyOn(console, "log");
  fizzBuzz(15);
  expect(consoleSpy).toHaveBeenCalledWith("fizzbuzz");
  consoleSpy.mockRestore();
});

test("should log buzz when input is divisible by 3", () => {
  const consoleSpy = jest.spyOn(console, "log");
  fizzBuzz(9);
  expect(consoleSpy).toHaveBeenCalledWith("fizz");
  consoleSpy.mockRestore();
});
