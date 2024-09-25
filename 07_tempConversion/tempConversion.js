const convertToCelsius = function(faherenheit) {
  celsius=(faherenheit-32)*(5/9);
  return Math.round(celsius*10)/10;
};

const convertToFahrenheit = function(celsius) {
  faherenheit=(9/5)*celsius+32;
  return Math.round(faherenheit*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
