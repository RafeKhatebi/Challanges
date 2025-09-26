/*Simple
1.	Write a function to find the largest element in an array.
2.	Write a function to find the sum of all elements in an array.
3.	How do you check if an array contains a specific element?
4.	Write a function to count the occurrences of a specific element in an array.
5.	Implement a function to find the smallest number in an array. */

// 1. Function to find the largest element in an array
let arr = [3, 5, 7, 2, 8];
function findLargestElement(arr) {
  if (arr.length === 0) return null; // Handle empty array
  return Math.max(...arr);
}
