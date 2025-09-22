<!-- 8.	Body Mass Index (BMI) Calculator
•	Given weight (kg) and height (m), calculate BMI using BMI = weight / (height * height).
•	Categorize it into:
•	Underweight: BMI < 18.5
•	Normal weight: 18.5 ≤ BMI < 25
•	Overweight: 25 ≤ BMI < 30
•	Obese: BMI ≥ 30 -->
<?php
$weight = 50; //weight is in kg 
$height = 1.60; // height is in meter 
$bmi = $weight / ($height * $height); // calculated 
//Here is condition 
if ($bmi < 18.5) {
    echo "Underweight";
} elseif ($bmi >= 18.5 && $bmi < 25) {
    echo "Normal weight";
} elseif ($bmi >= 25 && $bmi < 30) {
    echo "Overweight";
} else {
    echo "Obese";
}
//end of lecture 
?>