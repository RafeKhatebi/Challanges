// 6.	Check if a Number is Prime
// Write a function isPrime(n) that returns true if n is a prime number and false otherwise.
function isPrime(num) {
  // check for number 1 and smaller than one
  if (num <= 1) return false;
  // check for 2 and 3 .
  if (num === 2 || num === 3) return true;
  // check for divisibility by 2 and 3 .
  if (num % 2 === 0 || num % 3 === 0) return false;
  // check for divisibility by numbers up to the square root of num
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}
console.log(isPrime(21));

//7.	Calculate Factorial Using Recursion
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}
console.log(factorial(43));
console.log(factorial(5));

// 8.	Find the GCD of Two Numbers
// Write a function gcd(a, b) that finds the Greatest Common Divisor (GCD) using the Euclidean algorithm.
function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}
console.log(gcd(12, 18));
//	Find the nth Fibonacci Number
// Implement fibonacci(n), which returns the nth Fibonacci number
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Check if a String is a Palindrome
// Write a function isPalindrome(str) that returns true if the given string is a palindrome.
// Example: "racecar" → true, "hello" → false
function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}
console.log(isPalindrome("racecar"));
