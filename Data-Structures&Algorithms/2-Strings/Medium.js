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

// 7. Check if two strings are anagrams
// anagram: a word or phrase formed by rearranging the letters of a different word or phrase
// Anagrams are words or phrases made by rearranging the letters of another
// Algorithm:
// 1. Define the function with two parameters
function areAnagrams(str1, str2) {
  // 2. Normalize both strings by removing non-alphanumeric characters, converting to lowercase, sorting the characters, and joining them back into a string
  const normalize = (str) =>
    str
      .replace(/[\W_]+/g, "")
      .toLowerCase()
      .split("")
      .sort()
      .join("");
  // 3. Compare the normalized strings and return true if they are equal, otherwise false
  return normalize(str1) === normalize(str2);
}
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world")); // false

// 8. Compress a string using character counts
// Algorithm:
// 1. Define the function
function compressString(str) {
  // 2. Initialize an empty result string and a count variable
  let result = "";
  let count = 1;
  // 3. Loop through the string, comparing each character to the next one
  for (let i = 0; i < str.length; i++) {
    // 4. If the current character is the same as the next one, increment the count
    if (str[i] === str[i + 1]) {
      count++;
    }
    // 5. If the current character is different from the next one, append the character and its count to the result string, then reset the count
    else {
      result += str[i] + count;
      count = 1;
    }
  }
  // 6. Append the last character and its count to the result string
  result += str[str.length - 1] + count;
  // 7. Return the compressed string if it's shorter than the original, otherwise return the original string
  return result.length < str.length ? result : str;
}
console.log(compressString("aabcccccaaa")); // "a2b1c5a3"
console.log(compressString("abcd")); // "abcd"
