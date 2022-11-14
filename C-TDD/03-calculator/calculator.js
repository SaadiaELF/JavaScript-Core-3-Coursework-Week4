function add(numbers) {
  let sum = 0;
  if (numbers.length >= 1) {
    numbers = numbers
      .split(",")
      .map((num) => parseInt(num))
      .filter((num) => num < 1000);
    let negative = numbers.find((num) => num < 0);
    if (negative) {
      throw `negatives not allowed: ${negative}`;
    } else {
      sum = numbers.reduce((total, num) => {
        return (total += num);
      });
    }
  }

  return sum;
}

module.exports = add;
