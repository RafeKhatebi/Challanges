function isArmstrongNumber(num) {
  // Convert number to string to get digits easily
  //   We convert the number to a string to easily separate each digit.

  // Then split the string into an array of individual digit characters.

  // For example, if num = 153, digits becomes ['1', '5', '3'].
  const digits = num.toString().split("");
  // Count how many digits there are.

  // For 153, this is 3.
  const numDigits = digits.length;

  // Calculate the sum of each digit raised to the power of numDigits
  //   Use reduce to iterate through the digits.
  // For each digit, convert it to a number (Number(digit)).
  // Then raise it to the power numDigits (e.g.,).
  // Accumulate the sum.
  const sum = digits.reduce((acc, digit) => {
    return acc + Math.pow(Number(digit), numDigits);
  }, 0);

  // Check and return if sum equals the original number
  //   If the sum is exactly equal to the original number, then this number is an Armstrong number.
  // The function returns true or false.
  return sum === num;
}

// Example usage:153
let number = 12;
if (isArmstrongNumber(number)) {
  console.log(number + " is an Armstrong number.");
} else {
  console.log(number + " is not an Armstrong number.");
}
// Hailstone Numbers:
function hailstone(num) {
  let steps = 0;
  while (num !== 1) {
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = 3 * num + 1;
    }
    {
      steps++;
    }
  }
  return steps;
}

// Example usage:
const result = hailstone(number);
console.log(`Number of steps for ${number} to reach 1: ${result}`);
