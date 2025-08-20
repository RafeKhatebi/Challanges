<?php
//What are arrow functions in php, and how are they different from regular functions?
//Arrow functions are a new feature in PHP 7.4 that provide a concise syntax for writing anonymous functions. They are similar to lambda functions in other languages, but with some differences. Arrow functions are also known as closures.

//Here's an example of an arrow function in PHP:

$add = fn($a, $b) => $a + $b;
echo "The sum of the numbers is : " . $add(1, 2);
echo "<br/>";
echo "The sum of the two numbers is : " . $add(1, 5);
//In this example, we define an arrow function that takes two parameters, $a and $b, and returns their sum. We then call the function and pass in the values 1 and 2, respectively. The output of this code will be:

//The sum of the numbers is3
//The sum of the two numbers is6

//Arrow functions are a concise way to write anonymous functions in PHP. They are similar to lambda functions in other languages, but with some differences. Arrow functions are also known as closures.

//Arrow functions are a new feature in PHP 7.4 that provide a concise syntax for writing anonymous functions. They are similar to lambda functions in other languages, but with some differences. Arrow functions are also known as closures.



