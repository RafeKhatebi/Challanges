// Medium
// 6.	Student Grade System
// •	Take a student's score (0-100).
// •	Use switch to assign a letter grade (A, B, C, D, F).

// 7.	Currency Converter
// •	Take a currency code ("USD", "EUR", "INR", "JPY").
// •	Use switch to print the conversion rate relative to a base currency (e.g., USD).

// 8.	Menu-Based ATM System
// •	Display a menu with options:
// •	1 → Check Balance
// •	2 → Withdraw Money
// •	3 → Deposit Money
// •	4 → Exit
// •	Use switch to perform the correct action based on the user’s choice.

// 9.	Determine Season by Month
// •	Take an integer (1-12) as input.
// •	Use switch to print the corresponding season:
// •	12, 1, 2 → Winter
// •	3, 4, 5 → Spring
// •	6, 7, 8 → Summer
// •	9, 10, 11 → Fall

// 10.	Rock, Paper, Scissors Game
// •	The user inputs "rock", "paper", or "scissors".
// •	The computer randomly selects one.
// •	Use switch to determine the winner.

// Task 6: Student Grade System
let score = 95; // Example score
let grade;
switch (true) {
  case score >= 90:
    grade = "A";
    break;
  case score >= 80:
    grade = "B";
    break;
  case score >= 70:
    grade = "C";
    break;
  case score >= 60:
    grade = "D";
    break;
  default:
    grade = "F";
}

console.log(`The student's grade is: ${grade}`);

//  Task 7: Currency Converter
let currencyCode = "EUR"; // Example currency code
let conversionRate;
switch (currencyCode) {
  case "USD":
    conversionRate = 1; // Base currency
    break;
  case "EUR":
    conversionRate = 0.85;
    break;
  case "INR":
    conversionRate = 74.5;
    break;
  case "JPY":
    conversionRate = 110;
    break;
  default:
    console.log("Invalid currency code.");
    conversionRate = null;
}

if (conversionRate !== null) {
  console.log(`The conversion rate for ${currencyCode} is: ${conversionRate}`);
}


