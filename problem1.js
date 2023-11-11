const { inventory } = require("./data");
function car(inventory, carId) {
  const carat = inventory.filter((carpos) => carpos.id == carId);
  return carat;
}
module.exports = { car };
