function convertToOldRoman(n) {
  let arr = [
    [1000, "M"],
    [500, "D"],
    [100, "C"],
    [50, "L"],
    [10, "X"],
    [5, "V"],
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
module.exports = convertToOldRoman;
