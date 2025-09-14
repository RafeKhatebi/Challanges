<?php
// <!-- Medium
// 6.	Check for Prime Number
// Write a program that takes a number as input and checks if it is prime.
// 7.	Factorial of a Number
// Implement a function that calculates the factorial of a number using a loop.
// 8.	Find Largest and Smallest in a List
// Given an array of numbers, find the largest and smallest numbers using a loop.
// 9.	Fibonacci Sequence
// Print the first N Fibonacci numbers using a loop.
// 10.	Palindrome Checker
// Write a program that checks if a given number is a palindrome (Example: 121 → True, 123 → False). -->
// 6) check for prime number
$number = 17;
function isPrime($number)
{
    if ($number <= 1) {
        return false;
    }
    //sqrt means ? 
    for ($i = 2; $i <= sqrt($number); $i++) {
        if ($number % $i == 0) {
            return false;
        }
    }
    return true;
}
//output:true
echo isPrime($number) ? "true" : "false";
echo "<br>";
// 7)factorial of a number
function factorial($number)
{
    $result = 1;
    for ($i = 1; $i <= $number; $i++) {
        $result *= $i;
    }
    return $result;
}
echo factorial($number);
// 8) Find largest and smallest in a list
$numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function findLargestAndSmallest($numbers)
{
    $largest = $numbers[0];
    $smallest = $numbers[0];
    for ($i = 0; $i < count($numbers); $i++) {
        if ($numbers[$i] > $largest) {
            $largest = $numbers[$i];
        }
        if ($numbers[$i] < $smallest) {
            $smallest = $numbers[$i];
        }
    }
    return [$largest, $smallest];
}
echo "<br>";
print_r(findLargestAndSmallest($numbers));
// 9) Fibonacci Sequence
function fibonacci($number)
{
    $fibonacci = [0, 1];
    for ($i = 2; $i < $number; $i++) {
        $fibonacci[$i] = $fibonacci[$i - 1] + $fibonacci[$i - 2];
    }
    return $fibonacci;
}