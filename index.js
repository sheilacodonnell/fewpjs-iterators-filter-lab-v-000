function findMatching(drivers, string) {
  return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase());
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(driver => driver === string)
}