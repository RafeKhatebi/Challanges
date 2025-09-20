// . Switch-Case – Practical Exercises
// Easy
// 1.	Day of the Week
// •	Write a program that takes an integer (1-7) as input.
// •	Use switch to print the corresponding day of the week.
// •	1 → "Monday"
// •	2 → "Tuesday"
// •	...
// •	7 → "Sunday"

// 2.	Simple Calculator
// •	Take two numbers and an operator (+, -, *, /).
// •	Use switch to perform the correct operation and return the result.

// 3.	Traffic Light System
// •	Take a traffic light color ("red", "yellow", "green") as input.
// •	Use switch to print the corresponding action:
// •	"Red" → "Stop"
// •	"Yellow" → "Slow Down"
// •	"Green" → "Go"

// 4.	Month Name and Days
// •	Input a number (1-12) representing a month.
// •	Use switch to print the name of the month and how many days it has.

// 5.	Check for Vowel or Consonant
// •	Take a letter as input.
// •	Use switch to determine whether it is a vowel or a consonant.

// Day of the Week
function getDayOfWeek(day) {
  switch (day) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return "Invalid day";
  }
}
console.log(getDayOfWeek(1)); // Output: Monday
console.log(getDayOfWeek(5)); // Output: Friday

// Simple Calculator
function calculate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        return "Cannot divide by zero";
      }
      return num1 / num2;
    default:
      return "Invalid operator";
  }
}
console.log(calculate(5, 3, "+")); // Output: 8

// Traffic Light System
function trafficLight(color) {
  switch (color) {
    case "red":
      return "Stop";
    case "yellow":
      return "Slow Down";
    case "green":
      return "Go";
    default:
      return "Invalid color";
  }
}
console.log(trafficLight("red")); // Output: Stop

// Month Name and Days
function getMonthInfo(month) {
  switch (month) {
    case 1:
      return "January has 31 days";
    case 2:
      return "February has 28 or 29 days";
    case 3:
      return "March has 31 days";
    case 4:
      return "April has 30 days";
    case 5:
      return "May has 31 days";
    case 6:
      return "June has 30 days";
    case 7:
      return "July has 31 days";
    case 8:
      return "August has 31 days";
    case 9:
      return "September has 30 days";
    case 10:
      return "October has 31 days";
    case 11:
      return "November has 30 days";
    case 12:
      return "December has 31 days";
    default:
      return "Invalid month";
  }
}
console.log(getMonthInfo(2)); // Output: February has 28 or 29 days
