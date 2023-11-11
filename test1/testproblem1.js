const { inventory } = require("../data");
const { car } = require("../problem1");

const cardetails = car(inventory, 33);
console.log(
  `Car 33 is a ${cardetails[0].car_year} ${cardetails[0].car_make} ${cardetails[0].car_model}`
);
