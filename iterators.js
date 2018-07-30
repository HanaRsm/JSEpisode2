/*************************************
 * logger(array)
 *
 * - Accepts an array
 * - Logs every element of the array
 ************************************/
const logger = function(array) {
  array.forEach(array => console.log(array));
};

/*************************************
 * toCelsius(temperatures)
 *
 * - Accepts an array of temperatures
 *   in degrees Fahrenheit
 * - Returns an array of temperatures
 *   in degrees Celsius
 *
 * The conversion is:
 *   C = (F - 32) * (5/9)
 ************************************/
const toCelsius = function(temperatures) {
  return temperatures.map(temperature => (temperature - 32) * (5 / 9));
};

/**************************************
 * hottestDays(temperatures, threshold)
 *
 * - Accepts an array of temperatures
 * - Accepts a threshold temperature
 * - Returns an array of temperatures
 *   that exceed the threshold
 ***************************************/
const hottestDays = function(temperatures, threshold) {
  return temperatures.filter(temperature => temperature > threshold);
};

/******************************************
 * logHottestDays(temperatures, threshold)
 *
 * - Accepts an array of temperatures
 *   IN DEGREES FAHRENHEINT
 * - Accepts a threshold temperature
 *   IN DEGREES FAHRENHEINT
 * - Logs temperatures that exceed the
 *   threshold to the console
 *   IN DEGREES CELSIUS
 *
 * hint: you can combine
 *       all previous functions
 *******************************************/
const logHottestDays = function(temperatures, threshold) {
  let hotdays = hottestDays(temperatures, threshold);
  let hotDaysCelsius = toCelsius(hotdays);
  logger(hotDaysCelsius);
};

export { logger, toCelsius, hottestDays, logHottestDays };
