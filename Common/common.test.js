const maxChar = require("./comon.js");

describe("maxChar", () => {
  test("find most common number", () => {
    expect(maxChar(12344445)).toEqual("4");
  });
  test("find most common lattter", () => {
    expect(maxChar("maaaato")).toEqual("a");
  });
  test("works with capital latter", () => {
    expect(maxChar("mAAAAto")).toEqual("A");
  });
});
