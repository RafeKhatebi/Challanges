// 1.	Convert Celsius to Fahrenheit
// Write a function celsiusToFahrenheit(celsius) that converts a temperature from Celsius to Fahrenheit using the formula:
// F=(C×95)+32F = (C \times \frac{9}{5}) + 32F=(C×59)+32

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

console.log(celsiusToFahrenheit(0)); // Output: 32
console.log(celsiusToFahrenheit(100)); // Output: 212
// 2. Convert Fahrenheit to Celsius
// Write a function fahrenheitToCelsius(fahrenheit) that converts a temperature from Fahrenheit to Celsius using the formula:
// C=(F−32)×59C = (F - 32) \times \frac{5}{9}C=(F−32)×5/9

function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
console.log(fahrenheitToCelsius(32)); // Output: 0
console.log(fahrenheitToCelsius(212)); // Output: 100
// 3.	Find the Largest Number
// Write a function findLargest(a, b, c) that returns the largest of the three numbers.
// Use Math.max().
// function findLargest(a, b, c) {
//   return Math.max(a, b, c);
// }
console.log(findLargest(1, 2, 3));

// 4.	Find the Smallest Number
// Write a function findSmallest(a, b, c) that returns the smallest of the three numbers.
// Use Math.min().
// function findSmallest(a, b, c) {
//   return Math.min(a, b, c);
// }
console.log(findSmallest(1, 2, 3));

// 5.	Convert Hours and Minutes to Seconds
// Write a function toSeconds(hours, minutes) that converts hours and minutes to seconds.
// function toSeconds(hours, minutes) {
//   return (hours * 60 + minutes) * 60;
// }
