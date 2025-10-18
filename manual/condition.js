/* 
Easy
1.	Check Odd or Even
Write a program that takes a number as input and checks if it is odd or even.
2.	Grade Calculator
Given a student's score (0-100), determine their letter grade based on the following scale:
•	90-100: A
•	80-89: B
•	70-79: C
•	60-69: D
•	Below 60: F
3.	Minimum of Two Numbers
Write a program that takes two numbers as input and prints the smaller number.
4.	Leap Year Checker
A year is a leap year if it is divisible by 4 but not by 100, unless also divisible by 400. Write a program that determines if a given year is a leap year.
Medium
5.	Triangle Validity
Given three sides of a triangle, check if they form a valid triangle. The sum of any two sides must be greater than the third.
6.	Speeding Ticket Calculator
•	Speed limit = 60 km/h.
•	If a driver goes above the speed limit, they get a fine.
•	If they are driving over 100 km/h, they get double the fine.
•	Implement a program that takes speed as input and determines the fine.

7.	ATM Withdrawal
•	A person wants to withdraw money from an ATM.
•	If the withdrawal amount is a multiple of 10, allow withdrawal.
•	If not, print an error message.
•	If the account balance is less than the withdrawal amount, print "Insufficient Funds".
Hard
8.	Body Mass Index (BMI) Calculator
•	Given weight (kg) and height (m), calculate BMI using BMI = weight / (height * height).
•	Categorize it into:
•	Underweight: BMI < 18.5
•	Normal weight: 18.5 ≤ BMI < 25
•	Overweight: 25 ≤ BMI < 30
•	Obese: BMI ≥ 30
9.	Electricity Bill Calculator
•	Units Consumed:
•	Up to 100 units: $0.50 per unit
•	101 to 200 units: $0.75 per unit
•	201 to 500 units: $1.20 per unit
•	Above 500 units: $1.50 per unit
•	Write a program that calculates the total electricity bill.
10.	Password Strength Checker
•	A strong password must:
•	Be at least 8 characters long.
•	Contain at least one uppercase letter, one lowercase letter, and one number.
•	Write a program that checks if a given password is strong or weak. */

// 1.	Check Odd or Even
let number = 7;
if (number == 0) {
  console.log(number + " is Zero");
}
if (number % 2 === 0) {
  console.log(number + " is Even");
} else {
  console.log(number + " is Odd");
}

// 2.	Grade Calculator
let score = 85;
if (score >= 90 && score <= 100) {
  console.log("A");
} else if (score >= 80 && score <= 89) {
  console.log("B");
} else if (score >= 70 && score <= 79) {
  console.log("C");
} else if (score >= 60 && score <= 69) {
  console.log("D");
} else if (score >= 0 && score <= 59) {
  console.log("F");
} else {
  console.log("Invalid Score");
}

// 3.	Minimum of Two Numbers
let num1 = 10;
let num2 = 20;
if (num1 < num2) {
  console.log(num1 + " is the smaller number.");
} else if (num1 > num2) {
  console.log(num2 + " is the smaller number.");
} else {
  console.log("Both numbers are equal.");
}

// 4.	Leap Year Checker
let year = 2020;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(year + " is a leap year.");
} else {
  console.log(year + " is not a leap year.");
}

// 5.	Triangle Validity
//Algorithm to check triangle validity
let sideA = 5;
let sideB = 7;
let sideC = 10;
if (sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA) {
  console.log("Triangle is valid.");
} else {
  console.log("Triangle is not valid.");
}

// 6.	Speeding Ticket Calculator
let speed = 65;
if (speed <= 60) {
  console.log("No fine.");
} else {
  let fine = 100;
  if (speed > 100) {
    fine *= 2;
  }
  console.log("Fine: $" + fine);
}

// 7.	ATM Withdrawal
let withdrawalAmount = 50;
let accountBalance = 1000;

if (withdrawalAmount >= accountBalance) {
  log("Insufficient Funds");
} else if (withdrawalAmount % 10 !== 0) {
  console.log("Error: Amount must be a multiple of 10.");
} else {
  console.log("Withdrawal successful.");
}

// 8.	Body Mass Index (BMI) Calculator
let weight = 70;
let height = 1.75;
let bmi = weight / (height * height);
if (bmi < 18.5) {
  console.log("Underweight");
} else if (bmi >= 18.5 && bmi < 25) {
  console.log("Normal weight");
} else if (bmi >= 25 && bmi < 30) {
  console.log("Overweight");
} else {
  console.log("Obese");
}
