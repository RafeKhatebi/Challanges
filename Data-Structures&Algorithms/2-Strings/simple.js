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