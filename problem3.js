function sortname(inventory) {
  const carname = inventory.sort((a, b) =>
    a.car_model.localeCompare(b.car_model)
  );
  const carnames = inventory.map((modelname) =>
    console.log(modelname.car_model)
  );
  return carnames;
}
module.exports = { sortname };
