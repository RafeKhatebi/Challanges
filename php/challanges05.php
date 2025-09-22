<!DOCTYPE html>
<html>

<body>
    <form method="post">
        Enter a number:
        <input type="number" name="number" required>
        <br>
        <button type="submit" name="check">Check the factorial</button>
    </form>
</body>

</html>
<?php
if (isset($_POST['check'])) {
    $number = $_POST['number'];

    if (!is_numeric($number) || $number < 0) {
        echo "<p>Please enter a valid non-negative number.</p>";
    } else {
        $factorial = 1;
        for ($i = 1; $i <= $number; $i++) {
            $factorial *= $i;
        }
        echo "<p>Factorial of $number is: $factorial</p>";
    }
}
?>