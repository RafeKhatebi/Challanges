<?php
// 7.	ATM Withdrawal
// •	A person wants to withdraw money from an ATM.
// •	If the withdrawal amount is a multiple of 10, allow withdrawal.
// •	If not, print an error message.
// •	If the account balance is less than the withdrawal amount, print "Insufficient Funds". 
$cash = 1000;
$withdraw = 100;
if ($withdraw % 10 == 0) {
    if ($withdraw > $cash) {
        echo "Insufficient Funds";
    } else {
        echo "Withdrawal successful";
    }
} else {
    echo "Withdrawal amount is not a multiple of 10";
}
