let addNumbers = require("./calculator");

test("returns 0 if the input is an empty string", function () {
  // Arrange
  let input = "";
  let expected = 0;
  // Act
  let output = addNumbers(input);
  // Assert
  expect(output).toEqual(expected);
});

test("returns the same number if the input is 1 number", function () {
  // Arrange
  let input = "1";
  let expected = 1;
  // Act
  let output = addNumbers(input);
  // Assert
  expect(output).toEqual(expected);
});

test("returns the sum if the input is 2 numbers or more", function () {
  // Arrange
  let input = "1,2,3";
  let expected = 6;
  // Act
  let output = addNumbers(input);
  // Assert
  expect(output).toEqual(expected);
});

test("should ignore big numbers", function () {
  // Arrange
  let input = "2,1001";
  let expected = 2;
  // Act
  let output = addNumbers(input);
  // Assert
  expect(output).toEqual(expected);
});

// test("should throw an error when it's a negative number", function () {
//   // Arrange
//   let input = "1,2,-1";
//   let expected = "negatives not allowed: -1";
//   // Act
//   let output = addNumbers(input);
//   // Assert
//   expect(output).toEqual(expected);
// });

test("should throw an error when it's a negative number", () => {
  // Arrange
  let input = "1,2,-1";
  let expected = "negatives not allowed: -1";
  // Act
  let output = addNumbers(input);
  // Assert
  expect(output).toThrow(expected);
});
