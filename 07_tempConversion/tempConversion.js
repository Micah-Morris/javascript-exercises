const convertToCelsius = function(far) {
  let cel = (far - 32) * (5/9);
  let celTemp = Math.round(cel * 10) /10
  return celTemp
};

const convertToFahrenheit = function(cel) {
  let far = (cel) * (9/5) + 32;
  let farTemp = Math.round(far * 10) /10
  return farTemp
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
