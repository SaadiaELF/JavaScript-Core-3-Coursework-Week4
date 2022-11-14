function convertToOldRoman(n) {
  let obj = { 1: "I", 5: "V", 10: "X", 50: "L", 100: "C", 500: "D", 1000: "M" };

  for (const key in obj) {
    if (n == key) {
      return obj[key];
    }
  }
}
module.exports = convertToOldRoman;
