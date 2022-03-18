const request = require("request-promise-native");

const fetchMyIp = () => {
  return request(`http://api.ipify.org?format=json`);
};

const fetchCoordsByIP = (body) => {
  const ip = JSON.parse(body).ip;
  return request(`http://ip-api.com/json/${ip}`);
};

const fetchISSFlyOverTimes = (coords) => {
  const { lat, lon } = JSON.parse(coords);
  return request(`https://iss-pass.herokuapp.com/json/?lat=${lat}&lon=${lon}`);
};

const nextISSTimesForMyLocation = () => {
  return fetchMyIp()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((body) => {
      const { response } = JSON.parse(body);
      return response;
    });
};

module.exports = { nextISSTimesForMyLocation };
