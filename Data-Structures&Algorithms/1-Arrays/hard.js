/* 
Hard Array Questions:
11.	How do you remove duplicates from an array efficiently?
12.	Write a function to find the missing number in an array of 1 to N.
13.	How do you check if two arrays are equal?
14.	Implement a function to find the subarray with the maximum sum (Kadane’s Algorithm). 
15.	Write a function to rearrange an array such that even numbers appear before odd numbers. 
*/
// 11. Function to remove duplicates from an array efficiently
// a:Define an array for checking
let arr = [1, 2, 2, 3, 4, 4, 5];
//Define a function to remove duplicates
function removeDuplicates(arr) {
  //Define an empty array to store unique elements
  let uniqueArr = [];
  //Loop through the array
  for (let i = 0; i < arr.length; i++) {
    //If the element is not in the unique array, add it
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  //Return the unique array
  return uniqueArr;
}
console.log("Array after removing duplicates:", removeDuplicates(arr));

