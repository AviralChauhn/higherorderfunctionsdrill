function lastcar(inventory) {
  const carat = inventory.reduce((acc, curr) => {
    return curr;
  });
  return carat;
}
module.exports = { lastcar };
