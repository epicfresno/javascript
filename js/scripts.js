// Log out into the console a string that says "Hello World!"
// console.log("Hello World!");

// var myName = "James";
// var myAge = 45;
const myName ="James";
let myAge = 45;


// Log out into the console myName and myAge the es5 way
// console.log("Hello, " + myName + "! You are " + myAge + " years old.");

// Log  out into console myName and myAge the ES6 way
console.log(`Hello, ${myName}! You are ${myAge} years old.`)

//Day 2 - Date (maybe create a contdown clock)
// const today = new Date();
// console.log(today);

const today = new Date();
let day = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();
let hour = today.getHours();
// console.log(day, month, year, hour);
console.log(`${month}/${day}/${year}`)

// Day 2 - Math

// Gets random number between 0 and 1
// const rand = Math.random();
// console.log(rand);

// Gives us a random number, then multiply it by ten.
// Next add 1 so we cannot get 0. Finally round down the number.
const rand = Math.floor((Math.random() * 10) + 1);
// console.log(rand);

// Create pop ups
// alert(rand);

// user clicks cancel or ok
// confirm(rand);

// Accepts a users input then alerts the name.
let name = prompt('Please enter your name:');
alert(name);
