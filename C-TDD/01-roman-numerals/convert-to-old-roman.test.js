let convertToOldRoman = require("./convert-to-old-roman");

// Arrange
[
  { input: 1, expected: "I" },
  { input: 5, expected: "V" },
  { input: 10, expected: "X" },
  { input: 50, expected: "L" },
  { input: 100, expected: "C" },
  { input: 500, expected: "D" },
  { input: 1000, expected: "M" },
  { input: 1678, expected: "MDCLXXVIII" },
].forEach(({ input, expected }) => {
  it(`returns ${expected} if passed ${input} as an argument`, () => {
    // Act
    let output = convertToOldRoman(input);
    // Assert
    expect(output).toBe(expected);
  });
});
