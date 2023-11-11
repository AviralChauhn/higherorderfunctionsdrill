const { inventory } = require("./data");
function lastcar(caratpos) {
  const carat = inventory.filter((carpos) => carpos.id == caratpos);
  return carat;
}
module.exports = { lastcar };
