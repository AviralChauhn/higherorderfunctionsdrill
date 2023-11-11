function age(inventory) {
  const years = inventory.map((year) => year.car_year);
  return years;
}
module.exports = { age };
