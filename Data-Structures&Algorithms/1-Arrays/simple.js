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

// 2. Function to find the sum of all elements in an array
function sumOfElements(arr) {
  //reduce method to sum all elements in the array
  if (arr.length === 0) return 0;
  return arr.reduce((sum, num) => sum + num, 0);
}

// 3. Check if an array contains a specific element
function containsElement(arr, element) {
  return arr.includes(element);
}

// 4. Function to count the occurrences of a specific element in an array
function countOccurrences(arr, element) {
  return arr.filter((item) => item === element).length;
}

// 5. Function to find the smallest number in an array
function findSmallestElement(arr) {
  if (arr.length === 0) return null;
  return Math.min(...arr);
}
// Example usage:
console.log("Largest Element:", findLargestElement(arr));
console.log("Sum of Elements:", sumOfElements(arr));
console.log("Contains 5:", containsElement(arr, 5));
console.log("Occurrences of 2:", countOccurrences(arr, 2));
console.log("Smallest Element:", findSmallestElement(arr));
