/*
1.	Write a function to check if a string is a palindrome.
2.	How do you count the number of vowels in a string?
3.	Write a function to reverse a string.
4.	How do you remove spaces from a given string?
5.	Write a function to capitalize the first letter of each word in a string. */

// 1. Check if a string is a palindrome
// A palindrome reads the same forwards and backwards. Ignore case and non-alphanumeric characters.
function isPalindrome(str) {
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversedStr = cleanedStr.split("").reverse().join("");
  return cleanedStr === reversedStr;
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("hello")); // false

// 2. Count the number of vowels in a string
function countVowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

console.log(countVowels("Hello World")); // 3
console.log(countVowels("xyz")); // 0

// 3. Reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello")); // "olleh"
console.log(reverseString("JavaScript")); // "tpircSavaJ"

// 4. Remove spaces from a given string
function removeSpaces(str) {
  return str.replace(/\s+/g, "");
}
console.log(removeSpaces("Hello World")); // "HelloWorld"
console.log(removeSpaces("  JavaScript  ")); // "JavaScript"

// 5. Capitalize the first letter of each word in a string
function capitalizeFirstLetters(str) {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}
