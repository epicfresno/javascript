// Log out into the console a string that says "Hello World!"
// console.log("Hello World!");

// var myName = "James";
// var myAge = 45;
const myName ="James";
let myAge = 45;


// Log out into the console myName and myAge the es5 way
// console.log("Hello, " + myName + "! You are " + myAge + " years old.");

// Log  out into console myName and myAge the ES6 way
console.log(`Hello, ${myName}! You are ${myAge} years old`);


// Sample 1 below

// const TAX_RATE = 0.08;
//
// function calculateFinalPurchaseAmount(amt) {
// 	// calculate the new amount with the tax
// 	amt = amt + (amt * TAX_RATE);
//
// 	// return the new amount
// 	return amt;
// }
//
// var amount = 99.99;
//
// amount = calculateFinalPurchaseAmount( amount );
//
// console.log( amount.toFixed( 2 ) );		// "107.99"


// sample 2 below

// const SPENDING_THRESHOLD = 200;
// const TAX_RATE = 0.08;
// const PHONE_PRICE = 99.99;
// const ACCESSORY_PRICE = 9.99;
//
// var bankBalance = 199.91;
// var amount = 0;
//
// function calculateTax(amount) {
// 	return amount * TAX_RATE;
// }
//
// function formatAmount(amount){
//   return "$" + amount.toFixed(2);
// }
// // keep buying phones WHILE you still have money
// while (amount < bankBalance){
//   // buy a new phone
//   amount = amount + PHONE_PRICE;
//   // can we afford an accessory?
//   if (amount < SPENDING_THRESHOLD){
//     amount = amount + ACCESSORY_PRICE;
//   }
// }
// dont forget to pay the govt. too
// amount = amount + calculateTax( amount );
// console.log("Your purchase" + formatAmount( amount));
// // your purchase $334.76
// // can you actually affors this?
// if (amount > bankBalance) {
//   console.log("You can't affford this!");
// }

// END OF SAMPLE 2

// Day 7 CLASSWORK
let text= document.getElementById("para").textContent = "This is some other text.";
console.log(text);
