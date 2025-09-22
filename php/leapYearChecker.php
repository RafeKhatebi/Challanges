<?php
// 4.	Leap Year Checker
// A year is a leap year if it is divisible by 4 but not by 100, unless also divisible by 400. Write a program that determines if a given year is a leap year.
// برنامه بررسی سال کبیسه

// دریافت ورودی از کاربر

echo "لطفاً یک سال وارد کنید: ";

$year = trim(fgets(STDIN));
if (!is_numeric($year)) {
    echo "لطفاً یک عدد وارد کنید.\n";
    exit;
}
if ($year < 0) {
    echo "لطفاً یک عدد مثبت وارد کنید.\n";
    exit;
}
if ($year > 9999) {
    echo "لطفاً یک عدد کمتر از 9999 وارد کنید.\n";
    exit;
}
$year = intval($year);

// بررسی سال کبیسه
if (($year % 4 == 0 && $year % 100 != 0) || ($year % 400 == 0)) {
    echo "$year یک سال کبیسه است.\n";
} else {
    echo "$year یک سال کبیسه نیست.\n";
}
