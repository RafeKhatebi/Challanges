/* JavaScript Fundamentals
1.	What is the difference between var, let, and const in JavaScript?
var is a data type that use in every single things like integer string everything in js and it used in vary basic and used for custom. ...  var is global and use every where and let is advanced of var and you use then if you want to change you can do that. but const is for something that never change and you use for something that specific and you do not want to change it in future .
const PI = 3.14159;  // Use const for constants
let count = 0;       // Use let if you plan to change it
var globalVar = "I'm available everywhere"; // Avoid var
2.	Write a function to check if a number is even or odd.

3.	Explain the difference between == and === in JavaScript.
4.	Write a program that takes user input and prints whether it is a positive, negative, or zero.
5.	What are JavaScript closures? Provide an example.
6.	Write a function that calculates the factorial of a given number.
7.	How does this keyword work in JavaScript? Provide an example.
8.	Explain the concept of hoisting in JavaScript.
9.	Write a function to find the sum of all numbers in an array.
10.	What are arrow functions in JavaScript, and how are they different from regular functions? */

// 2.	Write a function to check if a number is even or odd.
let num = 12;
if (num == 0) {
  console.log("The num is zero ");
}
if (num % 2 == 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// 3.	Explain the difference between == and === in JavaScript.
// == is jus for equality the amount and this for === datatype and equality of amount.
// For example:
let a = 5;
let b = "5";
console.log(a == b); // true, because values are equal
console.log(a === b); // false, because types are different

// 4.	Write a program that takes user input and prints whether it is a positive, negative, or zero.
let num2 = 2;

if (num2 == 0) {
  console.log("nume iz = 0");
} else if (num2 >= 1) {
  console.log("num is= +");
} else {
  console.log("num is = -");
}

// 5.	What are JavaScript closures? Provide an example.

// A closure is a function that remembers its outer variables and can access them.
function outerFunction() {
  let outerVariable = "I'm from outer scope!";
  function innerFunction() {
    console.log(outerVariable);
  }
  return innerFunction;
}

const closure = outerFunction();
closure(); // Output: I'm from outer scope!

// 6.	Write a function that calculates the factorial of a given number.
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120
console.log(factorial(3)); // Output: 6
