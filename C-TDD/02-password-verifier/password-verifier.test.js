let verify = require("./password-verifier");

test("Password should have more than 8 characters", function () {
  // Arrange
  let input = "1234567";
  let expected = "Password rejected";
  // Act
  let output = verify(input);
  // Assert
  expect(output).toEqual(expected);
});

test("Password should not be null", function () {
  // Arrange
  let input = "";
  let expected = "Password rejected";
  // Act
  let output = verify(input);
  // Assert
  expect(output).toEqual(expected);
});

test("Password should have at least 1 uppercase letter", function () {
  // Arrange
  let input = "azertyuui";
  let expected = "Password rejected";
  // Act
  let output = verify(input);
  // Assert
  expect(output).toEqual(expected);
});

test("Password should have at least 1 number", function () {
  // Arrange
  let input = "aZertyuui";
  let expected = "Password rejected";
  // Act
  let output = verify(input);
  // Assert
  expect(output).toEqual(expected);
});
