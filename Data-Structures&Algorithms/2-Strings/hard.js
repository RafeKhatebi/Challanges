/*Hard
11.	Implement a function to find the longest palindrome substring in a string.
12.	Write a function to find all permutations of a given string.
13.	Implement a function to count the number of occurrences of each character in a string.
14.	How do you check if a string follows a given pattern (e.g., "abba" follows "dog cat cat dog")?
15.	Implement a function to convert a given sentence into its abbreviation ("I am learning JavaScript" → "I a l J"). */

// 11. Find the longest palindrome substring in a string
function longestPalindromeSubstring(str) {
  let start = 0,
    end = 0;

  // Helper function to expand around the center
  function expandAroundCenter(left, right) {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  }

  // Loop through each character
  for (let i = 0; i < str.length; i++) {
    const len1 = expandAroundCenter(i, i); // Odd-length palindrome
    const len2 = expandAroundCenter(i, i + 1); // Even-length palindrome
    const len = Math.max(len1, len2);

    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }

  return str.substring(start, end + 1);
}

// Example usage:
console.log(longestPalindromeSubstring("babad")); // "bab" or "aba"
console.log(longestPalindromeSubstring("cbbd")); // "bb"

// 12. Find all permutations of a given string
function getPermutations(str) {
  if (str.length === 0) return [""];

  let result = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const remaining = str.slice(0, i) + str.slice(i + 1);
    const perms = getPermutations(remaining);
    for (let perm of perms) {
      result.push(char + perm);
    }
  }
  return result;
}

// Example usage:
const str = "hjk";
const permutations = getPermutations(str);

console.log(permutations);
console.log("Total permutations:", permutations.length);
