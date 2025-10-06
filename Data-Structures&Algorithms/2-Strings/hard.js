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
console.log("Expected permutations:", 3 * 2 * 1); // 3! = 6

// 13. Count the number of occurrences of each character in a string
function countCharacters(str) {
  const charCount = {};

  for (let char of str) {
    // Increment the count for each character
    charCount[char] = (charCount[char] || 0) + 1;
  }

  return charCount;
}
// Example usage:
console.log(countCharacters("hello world")); // { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }

// 14. Check if a string follows a given pattern
function followsPattern(str, pattern) {
  if (str.length !== pattern.length) return false;

  const map = {}; // pattern char -> string char
  const used = {}; // string char already mapped

  for (let i = 0; i < pattern.length; i++) {
    const pChar = pattern[i];
    const sChar = str[i];

    if (map[pChar]) {
      if (map[pChar] !== sChar) return false;
    } else {
      if (used[sChar]) return false;
      map[pChar] = sChar;
      used[sChar] = true;
    }
  }

  return true;
}

// Examples
console.log(followsPattern("redbluebluered", "abba")); // true
console.log(followsPattern("xyzx", "abba")); // false
console.log(followsPattern("dogcatcatdog", "abba")); // true


// 15. Convert a sentence into its abbreviation
function abbreviateSentence(sentence) {
  const words = sentence.split(" ");
  const abbreviations = words.map((word) => word[0].toUpperCase());
  return abbreviations.join("");
}
// Example usage:
console.log(abbreviateSentence("I am learning JavaScript"));
// "IALJ"
console.log(abbreviateSentence("As Soon As Possible"));
// "ASAP"