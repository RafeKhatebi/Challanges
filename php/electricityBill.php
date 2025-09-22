<!-- 9.	Electricity Bill Calculator
•	Units Consumed:
•	Up to 100 units: $0.50 per unit
•	101 to 200 units: $0.75 per unit
•	201 to 500 units: $1.20 per unit
•	Above 500 units: $1.50 per unit
•	Write a program that calculates the total electricity bill. -->
<?php
$units = 150;
if ($units <= 100) {
    echo $bill = $units * 0.50;
} elseif ($units <= 200) {
    echo $bill = $units * 0.75;
} elseif ($units <= 500) {
    echo $bill = $units * 1.20;
} else {
    echo $bill = $units * 1.50;
}