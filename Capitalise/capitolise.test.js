const { firstLetter } = require("./capitolise.js");

describe("firstLetter", () => {
  test("should firstLetter the first letter of a single word", () => {
    const word = "eyaa semaje mkuu";
    const expected_word = "Eyaa Semaje Mkuu";
    const result = firstLetter(word);
    expect(result).toBe(expected_word);
  });

  test("firstLetter the first letter of each word", () => {
    const word = "eyaa semaje mkuu";
    const expected_word = "Eyaa Semaje Mkuu";
    const result = firstLetter(word);
    expect(result).toBe(expected_word);
  });

  test("return an empty string if the input is  empty", () => {
    const word = "";
    const expected_word = "";
    const result = firstLetter(word);
    expect(result).toBe(expected_word);
  });

  test("should handle leading and trailing spaces", () => {
    const word = "  eyaa semaje mkuu  ";
    const expected_word = "  Eyaa Semaje Mkuu  ";
    const result = firstLetter(word);
    expect(result).toBe(expected_word);
  });
});
