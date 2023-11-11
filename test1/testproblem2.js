const { lastcar } = require("../problem2");
const carlast = lastcar(50);
console.log(`Last car is ${carlast[0].car_make} ${carlast[0].car_model}`);
