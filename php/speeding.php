<!-- 6.	Speeding Ticket Calculator
•	Speed limit = 60 km/h.
•	If a driver goes above the speed limit, they get a fine.
•	If they are driving over 100 km/h, they get double the fine.
•	Implement a program that takes speed as input and determines the fine. -->
<?php
$speed = 70;
if ($speed <= 60) {
    echo "No fine";
} elseif ($speed > 60 && $speed <= 100) {
    echo "Fine is 100";
} elseif ($speed > 100) {
    echo "Fine is 200";
}
?>