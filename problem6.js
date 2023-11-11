function string(inventory) {
  const wantedcars = inventory.filter(
    (make) => make.car_make == "BMW" || make.car_make == "Audi"
  );

  console.log(JSON.stringify(wantedcars));
}
module.exports = { string };
