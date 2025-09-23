/* Bonus Challenge: Nested Loops
1.	Print Prime Numbers from 1 to 100
Use a loop inside another loop to check for prime numbers in a range.
2.	Pascal’s Triangle
Generate Pascal’s Triangle up to N rows.
3.	Matrix Multiplication
Given two matrices, multiply them using nested loops. */
/*
1. sudo code:  use a loop to print 1 to hundred inside that use an other loop to check if the number is prime or nor 
To check if the number is prime make a condition first if number is less than 2 it is not prime
then use a loop to check if the number is divisible by any number other than 1 and itself if it is then it is not prime
otherwise it is prime
*/
//1. Print Prime Numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
  let isPrime = true;
  if (i < 2) {
    isPrime = false;
  } else {
    //Math.sqrt(i) is used to optimize the loop by reducing the number of iterations needed to check for factors.
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
  }
//   if (isPrime) {
//     console.log(i);
//   }
}
/*
2. sudo code: use a loop to iterate through the number of rows and inside that use another loop to print the spaces and numbers
for each row the number of spaces is equal to the number of rows minus the current row number
*/
//2. Pascal’s Triangle
let numRows = 5;
for (let i = 0; i < numRows; i++) {
  let row = "";
  //numRows - i - 1 is used to center the triangle by adding spaces before the stars in each row.
  for (let j = 0; j < numRows - i - 1; j++) {
    // Add spaces for centering
    row += " ";
  }
  // Print stars
  for (let j = 0; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}
/*
3. sudo code: use a loop to iterate through the rows of the first matrix and inside that use another loop to iterate through the columns of the second matrix
inside that use another loop to iterate through the columns of the first matrix and rows of the second matrix to multiply the elements and add them to the result matrix

*/
//3. Matrix Multiplication
// let matrixA = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// let matrixB = [
//   [9, 8, 7],
//   [6, 5, 4],
//   [3, 2, 1],
// ];
// let result = [];
// for (let i = 0; i < matrixA.length; i++) {
//   result[i] = [];
//   for (let j = 0; j < matrixB[0].length; j++) {
//     result[i][j] = 0;
//     for (let k = 0; k < matrixA[0].length; k++) {
//       result[i][j] += matrixA[i][k] * matrixB[k][j];
//     }
//   }
// }
// console.log(result);
