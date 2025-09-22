<?php
// Write a function to find the sum of all numbers in an array.

// Define an array of numbers
$numbers = array(1, 2, 3, 4, 5);
// Initialize a variable to store the sum
$sum = 0;
// loop for checking each index an add it to the first one 
foreach ($numbers as $number) {
    $sum += $number;}
// The answer 
echo "The sum of the numbers is: " . $sum;


?>