<?php
// 	Write a function to check if a number is even or odd.
$num = 12;
function evenOdd($num)
{
    if ($num % 2 == 0) {
        echo "$num is even";
    } elseif ($num == 0) {
        echo "$num is zero";

    } else {
        echo "$num is odd";
    }

}
?>