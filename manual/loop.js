/* 
11.	Armstrong Number
A number is an Armstrong number if the sum of its digits raised to the power of the number of digits equals the number itself.
Example: 153 = (1³ + 5³ + 3³) = 153
Write a program that checks if a given number is an Armstrong number.
12.	Collatz Sequence (Hailstone Numbers)
•	Take a number n.
•	If n is even, divide it by 2.
•	If n is odd, multiply it by 3 and add 1.
•	Repeat this process until n = 1.
•	Count how many steps it takes to reach 1.
13.	Find GCD (Greatest Common Divisor)
•	Given two numbers, find their GCD using a loop.
14.	Pattern Printing - Pyramid
Write a program that prints this pattern for N = 5:
   *  
  ***  
 *****  
*******   
15. Number Guessing Game
- The program randomly selects a number between 1 and 100.
- The user must guess the number.
- The program gives hints like "Too High" or "Too Low".
- The loop continues until the user guesses correctly.
3. Functions – Practical Exercises
Easy
1.	Convert Celsius to Fahrenheit
Write a function celsiusToFahrenheit(celsius) that converts a temperature from Celsius to Fahrenheit using the formula:
F=(C×95)+32F = (C \times \frac{9}{5}) + 32F=(C×59)+32
2.	Find the Maximum of Three Numbers
Implement a function maxOfThree(a, b, c) that returns the largest of three numbers.
3.	Check Even or Odd
Create a function isEven(number) that returns true if the number is even and false otherwise.
4.	Count Vowels in a String
Write a function countVowels(str) that takes a string and returns the number of vowels in it.
5.	Reverse a String
Implement reverseString(str), which takes a string and returns it reversed.
Example: "hello" → "olleh"
*/

// 11.	Armstrong Number
//Algorithm
//1. Take an integer input num.
//2. Initialize a variable temp to store the value of num.
//3. Initialize a variable sum to 0 to store the sum of the digits raised to the power of the number of digits.
//4. Calculate the number of digits in num by converting it to a string and getting its length.
//5. Use a while loop to iterate as long as temp is greater than 0.
//   a. In each iteration, find the last digit (rem) of temp using the modulus operator (%).
//   b. Raise rem to the power of digits and add it to sum.
//   c. Remove the last digit from temp by performing integer division by 10.
//6. After the loop, compare sum with the original num.
//7. If they are equal, print that num is an Armstrong number; otherwise, print that it is not.
let num = 153;
let temp = num;
let sum = 0;
let digits = num.toString().length;
while (temp > 0) {
  let rem = temp % 10;
  sum += rem ** digits;
  temp = Math.floor(temp / 10);
}
if (sum === num) {
  console.log(num + " is an Armstrong number");
} else {
  console.log(num + " is not an Armstrong number");
}


// 12.	Collatz Sequence (Hailstone Numbers)
//Algorithm
//1. Take an integer input n.
//2. Initialize a variable steps to 0 to count the number of steps taken to reach 1.
//3. Use a while loop that continues as long as n is not equal to 1.
//   a. If n is even (n % 2 === 0), divide n by 2.
//   b. If n is odd, multiply n by 3 and add 1.
//   c. Increment the steps counter by 1 in each iteration.
//4. After the loop, print the number of steps taken to reach 1.
let n = 6;
let steps = 0;
while (n !== 1) {
  if (n % 2 === 0) {
    n /= 2;
  } else {
    n = n * 3 + 1;
  }
  steps++;
}
console.log("Steps to reach 1:", steps);


// 13.	Find GCD (Greatest Common Divisor)
//Algorithm
//1. Take two integer inputs a and b.
//2. Use a while loop that continues as long as b is not equal to 0.
//   a. Inside the loop, store the value of b in a temporary variable temp.
//   b. Update b to be the remainder of a divided by b (a % b).
//   c. Update a to be the value of temp.
//3. After the loop, a will contain the GCD of the original two numbers.
//4. Print the GCD.
let a = 48;
let b = 18;
while (b !== 0) {
  let temp = b;
  b = a % b;
  a = temp;
}
console.log("GCD is:", a);