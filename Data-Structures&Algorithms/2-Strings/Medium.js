/*Medium
6.	How can you find the first non-repeating character in a string?
7.	Write a function to check if two strings are anagrams.
8.	Implement a function to compress a string using character counts ("aabcccccaaa" → "a2b1c5a3").
9.	How do you check if one string is a rotation of another string?
10.	Write a function to check if a string contains only unique characters. */

// 6. Find the first non-repeating character in a string
// Return the first non-repeating character or null if all characters repeat
// Algorithm:
// 1. Define the function
function firstNonRepeatingChar(str) {
  // 2. Define an object to store character counts
  const charCount = {};
  // 3. Loop through the string to count occurrences of each character
  for (const char of str) {
    //increment the count for each character
    charCount[char] = (charCount[char] || 0) + 1;
  }
  // 4. Loop through the string again to find the first character with a count of 1
  for (const char of str) {
    // 5. Return the first non-repeating character
    if (charCount[char] === 1) {
      return char;
    }
  }
  // 6. If no non-repeating character is found, return null
  return null;
}
console.log(firstNonRepeatingChar("swiss")); // "w"
console.log(firstNonRepeatingChar("repeater")); // "r"
