<!-- 10.	Password Strength Checker
•	A strong password must:
•	Be at least 8 characters long.
•	Contain at least one uppercase letter, one lowercase letter, and one number.
•	Write a program that checks if a given password is strong or weak. -->
<?php
$password = "Abc12345";
if (
    strlen($password) >= 8
    && preg_match('/[A-Z]/', $password)
    && preg_match('/[a-z]/', $password)
    && preg_match('/[0-9]/', $password)
) {
    echo "Strong";
} else {
    echo "Weak";
}
?>