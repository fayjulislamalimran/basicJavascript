// Basic Javascript Concept -- Fayjul Islam Al Imran

// JavaScript Variables
var studentName = "Fayjul Islam Al Imran";
console.log(studentName);

// JavaScript data types
// String.
// Number.
// Bigint.
// Boolean.
// Undefined.
// Null.
// Symbol.
// Object.

var mobilePrice = 10000;
console.log(typeof mobilePrice);

var bookName = "English";
console.log(typeof bookName);

// JavaScript parseFloat
// The JavaScript parseFloat() Function is used to accept the string and convert it into a floating-point number

var panPrice = 10.56;
var mousePrice = 200.23;
var allPrice = panPrice + mousePrice;
console.log(parseFloat(allPrice));

// JavaScript parseInt
// The parseInt function converts its first argument to a string, parses that string, then returns an integer or NaN

var shartPrice = "200";
console.log(parseInt(shartPrice));

// JavaScript if...else Statement

// if (condition) {
// } else if (condition) {
// } else if (condition) {
// } else {
// }

// JavaScript if...else Grade Statement

let result = 38;
if (result < 33 && result > 0) {
  console.log(" Letter Grade F");
} else if (result >= 33 && result <= 39) {
  console.log(" Letter Grade D");
} else if (result >= 40 && result <= 49) {
  console.log(" Letter Grade C");
} else if (result >= 50 && result <= 59) {
  console.log(" Letter Grade B");
} else if (result >= 60 && result <= 69) {
  console.log(" Letter Grade A-");
} else if (result >= 70 && result <= 79) {
  console.log(" Letter Grade A");
} else if (result >= 80 && result <= 100) {
  console.log(" Letter Grade A+");
} else {
  console.log("Give a result number");
}

// JavaScript Switch Statement
// switch(expression) {
//   case x:
//     // code block
//     break;
//   case y:
//     // code block
//     break;
//   default:
//     // code block
// }

let bossName = "Imran";

switch (bossName) {
  case "Imran":
    console.log("Wow Boss Imran");
    break;
  case "Joy":
    console.log("Wow Boss Joy");
    break;
  default:
    break;
}
