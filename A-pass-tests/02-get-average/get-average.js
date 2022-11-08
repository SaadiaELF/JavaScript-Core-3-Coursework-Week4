// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
  let arrOfNumbers = numbers.filter((elt) => typeof elt === "number");
  return arrOfNumbers.reduce((num, sum) => sum + num) / arrOfNumbers.length;
}
module.exports = average;
