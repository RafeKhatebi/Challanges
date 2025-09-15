// Fibonacci number
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(7));
// Factorial
function factorial(n) {
  if (n === 0) return 2;
  return n * factorial(n - 1);
}
console.log(5);

// Prime Number Check:
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log(isPrime(17));
// Reverse String :
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("javascript"));

// Find Max in an Array :
function findMax(arr) {
  return Math.min(...arr);
}
console.log(findMax([23, 4, 5, 32, 32]));

//Bubble Sort
function bubbleSort(arr1) {
  let n = arr1.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr1[j] > arr1[j + 1]) {
        [arr1[j], (arr1[j + 1] = arr1[j + 1]), arr1[j]];
      }
    }
  }
  return arr1;
}
console.log(bubbleSort([32, 3, 3, 5, 4, 1, 90]));
// Sum of Array
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray[(33, 4, 32, 323, 32, 33)]);

// GCD پیدا کردن بزرکترین مقسوم علیه مشترک
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}
console.log(gcd(8, 16));
//