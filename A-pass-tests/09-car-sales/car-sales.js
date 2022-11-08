let carsSold = [
  { make: "Ford", model: "Fiesta", colour: "Red", price: 5999 },
  { make: "Land Rover", model: "Defender", colour: "Muddy", price: 12000 },
  { make: "Toyota", model: "Prius", colour: "Silver", price: 6500 },
  { make: "Honda", model: "Civic", colour: "Yellow", price: 8000 },
  { make: "Ford", model: "Fiesta", colour: "Red", price: 15000 },
  { make: "Land Rover", model: "Discovery", colour: "Blue", price: 9000 },
  { make: "Ford", model: "Fiesta", colour: "Green", price: 2000 },
];
function groupBy(carsSold) {
  return carsSold.reduce((result, car) => {
    // If an array already present for key, push it to the array. Else create an array and push the object
    (result[car.make] = result[car.make] || []).push(car.price);
    // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
    return result;
  }, {}); // empty object is the initial value for result object
}

function sales(carsSold) {
  let cars = groupBy(carsSold);
  for (const key in cars) {
    cars[key] = cars[key].reduce((num, sum) => {
      return sum + num;
    });
  }
  return cars;
}

console.log(sales(carsSold));
module.exports = sales;
