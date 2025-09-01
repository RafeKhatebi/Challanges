<?php
// 3.	Minimum of Two Numbers
// Write a program that takes two numbers as input and prints the smaller number.

// Take input from the user
echo "Enter the first number: ";
$num1 = trim(fgets(STDIN));
// stdin means 

echo "Enter the second number: ";
$num2 = trim(fgets(STDIN));

// Convert inputs to numbers
//floatval means 
$num1 = floatval($num1);
$num2 = floatval($num2);

// Find and print the smaller number
if ($num1 < $num2) {
    echo "The smaller number is: $num1\n";
} else {
    echo "The smaller number is: $num2\n";
}
?>