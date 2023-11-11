function getcarage(inventory, arr) {
  const oldercars = inventory.filter((year) => year.car_year < 2000);
  const count = oldercars.length;
  console.log(count);
  return oldercars;
}

module.exports = { getcarage };
