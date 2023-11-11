const { inventory } = require("../data");
const { lastcar } = require("../problem2");
const carlast = lastcar(inventory);
console.log(`Last car is ${carlast.car_make} ${carlast.car_model}`);
