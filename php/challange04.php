<?php
// 	What are php closures? Provide an example.
// Closures are anonymous functions that can be stored in variables and passed around. They are useful for creating functions on the fly and for passing functions as arguments to other functions.

// Here is an example of a closure that adds two numbers:
function outer()
{
    $count = 0;
    $inner = function () use (&$count) {
        $count++;
        echo "Count" . "$count";
    };
    return $inner;

}
$counter = outer();
$counter();
$counter();
$counter();







?>