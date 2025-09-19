// Hard
// 11.	Generate Pascal’s Triangle
// Implement pascalTriangle(rows), which prints Pascal’s Triangle up to rows rows.
// 12.	Binary Search Algorithm
// Write a function binarySearch(arr, target) that performs a binary search on a sorted array.
// 13.	Convert Decimal to Binary
// Implement decimalToBinary(n), which converts a decimal number to its binary equivalent.
// 14.	Sorting an Array Using Bubble Sort
// Write a function bubbleSort(arr) that sorts an array using the Bubble Sort algorithm.
// 15.	Find Unique Elements in an Array
// Create findUnique(arr), which returns an array with only the unique elements from the input array.
// Example: [1, 2, 2, 3, 4, 4, 5] → [1, 3, 5]


// 11. Generate Pascal's Triangle
function pascalTriangle(rows) {
    let triangle = [];
    for (let i = 0; i < rows; i++) {
        triangle[i] = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                triangle[i][j] = 1;
            } else {
                triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
            }
        }
    }
    return triangle;
}

// 12. Binary Search Algorithm
// function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;
//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);
//         if (arr[mid] === target) {
//             return mid;
//         } else if (arr[mid] < target) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }
//     return -1;
// }

// 13. Convert Decimal to Binary
// function decimalToBinary(n) {
//     let binary = '';
//     while (n > 0) {
//         binary = (n % 2) + binary;
//         n = Math.floor(n / 2);
//     }
//     return binary;
// }

// 14. Sorting an Array Using Bubble Sort
// function bubbleSort(arr) {
//     let len = arr.length;
//     for (let i = 0; i < len; i++) {
//         for (let j = 0; j < len - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// 15. Find Unique Elements in an Array
function findUnique(arr) {
    let unique = [];
    for (let i = 0; i < arr.length; i++) {
        if (unique.indexOf(arr[i]) === -1) {
            unique.push(arr[i]);
        }
    }
    return unique;
}


