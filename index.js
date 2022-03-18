const {
  fetchMyIP,
  fetchCoordsByIP,
  fetchISSFlyOverTimes,
  nextISSTimesForMyLocation,
} = require("./iss");

const printPassTimes = (arrayObj) => {
  for (const index of arrayObj) {
    const day = new Date(0);
    day.setUTCSeconds(index.risetime);
    const time = index.duration;
    console.log(`Next pass at ${day} for ${time} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  printPassTimes(passTimes);
});

module.exports = { printPassTimes };
