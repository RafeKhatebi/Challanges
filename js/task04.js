// 6.	Check if a Number is Prime
// Write a function isPrime(n) that returns true if n is a prime number and false otherwise.
function isPrime(num) {
  // check for number 1 and smaller than one
  if (num <= 1) return false;
  // check for 2 and 3
  if (num === 2 || num === 3) return true;
  // check for divisibility by 2 and 3
  if (num % 2 === 0 || num % 3 === 0) return false;
  // check for divisibility by numbers up to the square root of num
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}
console.log(isPrime(21));
