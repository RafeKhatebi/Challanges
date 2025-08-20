<!-- Check the number is even or odd -->
<?php
if (isset($_GET['number'])) {
    $number = $_GET['number'];

    if (!is_numeric($number)) {
        echo "Please enter a valid number<br>";
    } else if ($number % 2 == 0) {
        echo "The number is even<br>";
    } else {
        echo "The number is odd<br>";
    }
}
?>
<form action="#" method="get">
    <label for="number">Enter a number:</label>
    <input type="number" name="number" id="number">
    <input type="submit" value="Submit">
</form>