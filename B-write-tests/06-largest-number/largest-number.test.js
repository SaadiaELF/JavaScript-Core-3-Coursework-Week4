let getLargestNumber = require("./largest-number");

test("returns largest number in array", function () {
  // Arrange
  let input = [3, 21, 88, 4, 36];
  let expected = 88;
  // Act
  let output = getLargestNumber(input);
  // Assert
  expect(output).toEqual(expected);
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
