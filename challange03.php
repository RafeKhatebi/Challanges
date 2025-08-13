<!DOCTYPE html>

<body>
    <form method="post">
        Enter a number :
        <input type="number" name="number">
        <br>
        <button name="check">Check</button>
    </form>
</body>

</html>
<?php
if (isset($_POST['check'])) {
    $number = $_POST['number'];
    // Check if the input is numeric
    if (!is_numeric($number)) {
        echo "Please enter a valid number.\n";
    } else {
        if ($number > 0) {
            echo "The number is positive.\n";
        } elseif ($number < 0) {
            echo "The number is negative.\n";
        } else {
            echo "The number is zero.\n";
        }
    }
}
?>