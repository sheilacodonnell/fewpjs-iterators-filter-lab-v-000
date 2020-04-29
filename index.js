function findMatching(drivers, string) {
  return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase());
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(driver => driver === string)
}

function matchName(drivers, string) {
  return drivers.filter(driver => driver.name === string)
}