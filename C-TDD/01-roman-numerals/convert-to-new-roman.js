function convertToNewRoman(n) {
  let arr = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];

  let result = "";

  arr.map(([key, value]) => {
    for (let i = 0; i <= n + 2; i++) {
      if (Math.floor(n / key) >= 1) {
        result += value;
        n -= key;
      }
    }
  });

  return result;
}
console.log(convertToNewRoman(944));
module.exports = convertToNewRoman;
