<!-- Loops – Practical Exercises
Easy
1.	Print Numbers from 1 to 100
Write a for loop that prints numbers from 1 to 100.
2.	Sum of First N Natural Numbers
Write a program that takes N as input and calculates the sum of the first N natural numbers.
3.	Multiplication Table
Ask the user for a number and print its multiplication table up to 10.
4.	Reverse a Number
Given an integer, reverse its digits. (Example: 1234 → 4321)
5.	Count Digits in a Number
Take a number as input and count how many digits it has. -->
<?php
// 1) Print Numbers from 1 to 100 
for ($i = 0; $i < 100; $i++) {
    echo $i + 1 . " ";
}
echo "<br>";
// 2) Sum of First N Natural Numbers
$n = 10;
$sum = 0;
for ($i = 1; $i <= $n; $i++) {
    $sum += $i;
}
echo "<br>";
// 3) Multiplication Table
$number = 5;
for ($i = 1; $i <= 10; $i++) {
    $number * $i;
}
echo "<br>";
// 4) Reverse a Number
$number = 1234;
$rev = 0;
while ($number > 0) {
    $rem = $number % 10;
    $rev = $rev * 10 + $rem;
    $number = (int) ($number / 10);
}
echo $rev;
echo "<br>";
// 5) Count Digits in a Number
$number = 1234;
$count = 0;
while ($number > 0) {
    $number = (int) ($number / 10);
    $count++;
}
echo $count;

