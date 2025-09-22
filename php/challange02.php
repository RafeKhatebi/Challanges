<?php
// 	Explain the difference between == and === in Php.
$num1 = 22;
$num2 = "22";
if ($num1 == $num2) {
    echo "Both are equal";
} elseif ($num1 === $num2) {
    echo "Both are equal and same type";
} else {
    echo "Both are not equal";
}
?>