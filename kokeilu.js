var Weather = require('/usr/local/lib/node_modules/weather.js');

Weather.getCurrent("Kansas City", function(current) {
  console.log(
    ["currently:",current.temperature(),"and",current.conditions()].join(" ")
  );
});
 
Weather.getForecast("Kansas City", function(forecast) {
  console.log("forecast high: " + forecast.high());
  console.log("forecast low: " + forecast.low());
});
 
