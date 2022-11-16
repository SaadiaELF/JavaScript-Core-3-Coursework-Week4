let convertToNewRoman = require("./convert-to-new-roman");

// Arrange
[
  { input: 1, expected: "I" },
  { input: 4, expected: "IV" },
  { input: 5, expected: "V" },
  { input: 9, expected: "IX" },
  { input: 10, expected: "X" },
  { input: 40, expected: "XL" },
  { input: 50, expected: "L" },
  { input: 100, expected: "C" },
  { input: 400, expected: "CD" },
  { input: 500, expected: "D" },
  { input: 900, expected: "CM" },
  { input: 1000, expected: "M" },
  { input: 944, expected: "CMXLIV" },
].forEach(({ input, expected }) => {
  it(`returns ${expected} if passed ${input} as an argument`, () => {
    // Act
    let output = convertToNewRoman(input);
    // Assert
    expect(output).toBe(expected);
  });
});
