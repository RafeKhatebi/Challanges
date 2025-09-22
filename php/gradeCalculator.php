<?php
// Grade Calculator Function
function gradeCalculator($score)
{
    if ($score >= 90 && $score <= 100) {
        return "A";
    } elseif ($score >= 80 && $score <= 89) {
        return "B";
    } elseif ($score >= 70 && $score <= 79) {
        return "C";
    } elseif ($score >= 60 && $score <= 69) {
        return "D";
    } elseif ($score < 60) {
        return "F";
    } else {
        return "Invalid Score";
    }
}

// Check if the form is submitted
if (isset($_GET['score'])) {
    $score = $_GET['score'];
    if (is_numeric($score)) {
        $grade = gradeCalculator($score);
        echo "Score: $score => Grade: $grade";
    } else {
        echo "Please enter a valid number.";
    }
}
?>

<form action="#" method="get">
    <label for="score">Enter a score:</label>
    <input type="number" name="score" id="score" min="0" max="100">
    <input type="submit" value="Submit">
</form>

<?php
// .	Minimum of Two Numbers
// Write a program that takes two numbers as input and prints the smaller number.// 
function minOfTwoNumbers($num1, $num2)
{
    if ($num1 < $num2) {
        return $num1;
    } else {
        return $num2;
    }
}

echo minOfTwoNumbers(23, 32);











?>