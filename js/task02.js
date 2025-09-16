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
const number = 157;
if (isArmstrongNumber(number)) {
  console.log(number + " is an Armstrong number.");
} else {
  console.log(number + " is not an Armstrong number.");
}
