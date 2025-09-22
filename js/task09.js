/* Hard
11.	Roman Numeral Converter
•	Take an integer (1-10) as input.
•	Use switch to print the corresponding Roman numeral.
12.	Zodiac Sign Finder
•	Take a birth month and day.
•	Use switch to determine the person's zodiac sign.
13.	Discount System Based on Membership
•	Input membership type ("Gold", "Silver", "Bronze").
•	Use switch to apply different discount rates on a purchase.
14.	Automated Toll Booth System
•	Take a vehicle type ("Car", "Truck", "Bike") as input.
•	Use switch to determine the toll fee.
15.	Music Playlist Controller
•	Take a command ("Play", "Pause", "Next", "Previous").
•	Use switch to perform the correct action.
*/
//11 Roman Numeral Converter
let number = 7;
let romanNumeral;
switch (number) {
  case 1:
    romanNumeral = "I";
  case 2:
    romanNumeral = "II";
    break;
  default:
    romanNumeral = "Invalid";
}
console.log(romanNumeral);

//12 Zodiac Sign Finder
let birthMonth = "January";
let birthDay = 15;
let zodiacSign;

switch (birthMonth) {
  case "January":
    zodiacSign = (birthDay <= 19) ? "Capricorn" : "Aquarius";
    break;
  case "February":
    zodiacSign = (birthDay <= 18) ? "Aquarius" : "Pisces";
    break;
  case "March":
    zodiacSign = (birthDay <= 20) ? "Pisces" : "Aries";
    break;
  case "April":
    zodiacSign = (birthDay <= 19) ? "Aries" : "Taurus";
    break;
  case "May":
    zodiacSign = (birthDay <= 20) ? "Taurus" : "Gemini";
    break;
  case "June":
    zodiacSign = (birthDay <= 20) ? "Gemini" : "Cancer";
    break;
  case "July":
    zodiacSign = (birthDay <= 22) ? "Cancer" : "Leo";
    break;
  case "August":
    zodiacSign = (birthDay <= 22) ? "Leo" : "Virgo";
    break;
  case "September":
    zodiacSign = (birthDay <= 22) ? "Virgo" : "Libra";
    break;
  case "October":
    zodiacSign = (birthDay <= 22) ? "Libra" : "Scorpio";
    break;
  case "November":
    zodiacSign = (birthDay <= 21) ? "Scorpio" : "Sagittarius";
    break;
  case "December":
    zodiacSign = (birthDay <= 21) ? "Sagittarius" : "Capricorn";
    break;
  default:
    zodiacSign = "Invalid";
}

console.log(zodiacSign);

//13 Discount System Based on Membership
let membershipType = "Gold";
let purchaseAmount = 200;
let discountRate;

switch (membershipType) {
  case "Gold":
    discountRate = 0.2;  // 20% discount
    break;
  case "Silver":
    discountRate = 0.1;  // 10% discount
    break;
  case "Bronze":
    discountRate = 0.05; // 5% discount
    break;
  default:
    discountRate = 0;
}

let finalPrice = purchaseAmount - (purchaseAmount * discountRate);
console.log(finalPrice);