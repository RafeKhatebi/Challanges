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

// Task 8: Menu-Based ATM System
let userChoice = 2; // Example user choice
let balance = 1000;
switch (userChoice) {
  case 1:
    console.log(`Your balance is: $${balance}`);
    break;
  case 2:
    let withdrawAmount = 200; // Example withdrawal amount
    if (withdrawAmount <= balance) {
      balance -= withdrawAmount;
      console.log(`You withdrew: $${withdrawAmount}. New balance: $${balance}`);
    } else {
      console.log("Insufficient funds.");
    }
    break;
  case 3:
    let depositAmount = 300; // Example deposit amount
    balance += depositAmount;
    console.log(`You deposited: $${depositAmount}. New balance: $${balance}`);
    break;
  case 4:
    console.log("Exiting the ATM system.");
    break;
  default:
    console.log("Invalid choice.");
}

// Task 9: Determine Season by Month
let month = 4;
let season;
switch (month) {
  case 12:
  case 1:
  case 2:
    season = "Winter";
    break;
  case 3:
  case 4:
  case 5:
    season = "Spring";
    break;
  case 6:
  case 7:
  case 8:
    season = "Summer";
    break;
  case 9:
  case 10:
  case 11:
    season = "Fall";
    break;
  default:
    season = "Unknown";
}

console.log(`The season is: ${season}`);
