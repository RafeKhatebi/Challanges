/*Medium
6.	Write a function to reverse an array without using the built-in reverse() method.
7.	How do you merge two sorted arrays into one sorted array?
8.	Implement a function that rotates an array k times to the right.
9.	Write a function to find the second largest number in an array.
10.	Implement a function that finds the intersection of two arrays. */
// Reverse array without using built-in reverse()

function reverseArray(arr) {
  const result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}

// Merge two sorted arrays
function mergeSortedArrays(arr1, arr2) {
  const merged = [];
  let i = 0,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }
  return merged;
}

// Rotate array k times to the right
function rotateArray(arr, k) {
  const n = arr.length;
 k = k % n; // Handle cases where k is greater than array length
  return arr.slice(n - k).concat(arr.slice(0, n - k));
}

// Find the second largest number in an array
function findSecondLargest(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;
  for (let num of arr) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num !== largest) {
      secondLargest = num;
    }
  }
  return secondLargest;
}

// Find the intersection of two arrays
function intersection(arr1, arr2) {
  const set1 = new Set(arr1);
  const result = [];
  for (let num of arr2) {
    if (set1.has(num)) {
      result.push(num);
      set1.delete(num);
    }
  }
  return result;
}
// Example usage:
let arr1 = [1, 3, 5, 7];
let arr2 = [2, 3, 5, 6];
console.log("Reversed Array:", reverseArray(arr1));
console.log("Merged Sorted Arrays:", mergeSortedArrays(arr1, arr2));
console.log("Rotated Array:", rotateArray(arr1, 2));
console.log("Second Largest Element:", findSecondLargest([3, 5, 7, 2, 8]));
console.log("Intersection of Arrays:", intersection(arr1, arr2));
// Example usage:
let arr = [3, 5, 7, 2, 8];
console.log("Reversed Array:", reverseArray(arr));
console.log("Merged Sorted Arrays:", mergeSortedArrays([1, 3, 5], [2, 4, 6]));
console.log("Rotated Array:", rotateArray(arr, 2));
console.log("Second Largest Element:", findSecondLargest([3, 5, 7, 2, 8]));
