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

// const today = new Date();
// let day = today.getDate();
// let month = today.getMonth() + 1;
// let year = today.getFullYear();
// let hour = today.getHours();
// console.log(day, month, year, hour);
// console.log(`${month}/${day}/${year}/${hour}`)

// Day 2 - Math

// Gets random number between 0 and 1
// const rand = Math.random();
// console.log(rand);

// Gives us a random number, then multiply it by ten.
// Next add 1 so we cannot get 0. Finally round down the number.
// const rand = Math.floor((Math.random() * 10) + 1);
// console.log(rand);

// Create pop ups
// alert(rand);

// user clicks cancel or ok
// confirm(rand);

// Day 2 homework

// Accepts a users input then alerts the name.
// let firstName = prompt("Hello, please enter your first name here:");
//
// let lastName = prompt("Great, " + firstName + " please enter your LAST name here:");
// alert(lastName);
// console.log (`${firstName}/${lastName}`)
//
// let birthDay = prompt("Awesome, " + firstName + " " + lastName + " last question, WHEN were you born?:");
// alert("Great " + firstName + " is this correct? " + birthDay);

// Day 3 classwork
// === strict comparison
// == loose comparison
// ! means not
// !== strict comparison
// != loose not comparison
//  > greater than
//  < less than
//  >= greater than or equal
//  <= less than or equal

// example 1

// Day 3 Logical Operators
// double || equals or
// double && equals and

// const userInput =prompt("Please enter a number:");
// if (userInput == 1 || userInput == 5 || userInput == 15) {
//   console.log("I am here");
// } else {
//   console.log("In the else");
// }

// Day 3 else if statements

// const userInput =prompt("Please enter a number:");
// if (userInput > 5) {
//   console.log("Number is greater than five");
// } else if (userInput < 5) {
//   console.log("Number is less than five");
// } else if (userInput === '5') {
//   console.log("User entered a 5");
// } else if (userInput === "") {
//   console.log("User input is nothing");
// } else {
//   console.log("User did not enter a number");
// }

// Day 3 switch

// const today = new Date().getDay();
// console.log(today);
// switch (today) {
//   case 0:
//     console.log("Sunday");
//     break;
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
// }

// Day 3 math
// const addition = 1 + 1;
// const subtraction = 2 - 1;
// const multiplication = 2 * 2;
// const division = 10 / 2;
// const remainder = 11 % 3;
// console.log(division);

// Day 3 incrementing
// let myNum =1;
// myNum++;
// myNum = myNum + 3; WRONG way
// myNum += 3;
// myNum -= 10;
// myNum *= 5;
// myNum /= 4;
// console.log(myNum);

// Day 3 decrementing
// myNum--;

// Day3 homework
let firstName = prompt("Hello, please enter your first name here:");
let colorChoice = prompt("Great " + firstName + ", now please pick your favorite color out of the following: yellow, orange, blue, red, purple, white, grey, black, green.");
if (colorChoice === "yellow") {
  alert("Great " + firstName + " Did you know yellow is for cowards");
} else if (colorChoice === "orange") {
  alert("Great " + firstName + " Orange you happy to be alive");
} else if (colorChoice === "blue") {
  alert("Please " + firstName + " don't be blue");
} else if (colorChoice === "red") {
  alert("Ok " + firstName + " no need to get angry or is that the color of passion");
} else if (colorChoice === "purple") {
  alert("Ok " + firstName + " your new nickname is Barney");
} else if (colorChoice === "white") {
  alert("Wow " + firstName + " you are as pure as freshly fallen snow... eyeroll");
} else if (colorChoice === "grey") {
  alert("Well " + firstName + " I hope the clouds above you part and all is right in the world");
} else if (colorChoice === "black") {
  alert("Im curious " + firstName + " are you secretly a NINJA?");
} else if (colorChoice === "green") {
  alert("Now " + firstName + " that is the correct choice, thank you for playing!");
} else if (colorChoice === "") {
  alert( "I'm sad " + firstName + " that you did not enter an appropriate color");
  alert("ok " + firstName + " since you seem to be having a hard time...try one of the buttons");
} else {
  alert("ok " + firstName + " since you seem to be having a hard time...try one of the buttons");
}


function yellow1() {
  alert("Great " + firstName + " Did you know yellow is for cowards");
}
function orange1() {
  alert("Great " + firstName + " Orange you happy to be alive");
}
function blue1() {
  alert("Please " + firstName + " don't be blue");
}
function red1() {
  alert("Ok " + firstName + " no need to get angry or is that the color of passion");
}
function purple1() {
  alert("Ok " + firstName + " your new nickname is Barney");
}
function white1() {
  alert("Wow " + firstName + " you are as pure as freshly fallen snow... eyeroll");
}
function grey1() {
  alert("Well " + firstName + " I hope the clouds above you part and all is right in the world");
}
function black1() {
  alert("Im curious " + firstName + " are you secretly a NINJA?");
}
function green1() {
  alert("Now " + firstName + " that is the correct choice, thank you for playing!");
}


// alert("Great " + firstName + " is this correct? " + birthDay);
// function myFunction() {
//    var txt;
//    var person = prompt("Please enter your name:", "Harry Potter");
//    if (person == null || person == "") {
//       txt = "User cancelled the prompt.";
//    } else {
//        txt = "Hello " + person + "! How are you today?";
//    }
//  document.getElementById("demo").innerHTML = txt;
// }

// <button onclick="myFunction()">Orange</button>
// function myFunction() {
//     var txt;
//     var person = prompt("Please enter your name:", "Harry Potter");
//     if (person == null || person == "") {
//         txt = "User cancelled the prompt.";
//     } else {
//         txt = "Hello " + person + "! How are you today?";
//     }
//     document.getElementById("demo").innerHTML = txt;
// }
// <button onclick><p> yes</p>Turn on the light</button>

// <img id="myImage" src="pic_bulboff.gif" style="width:100px">
//
// <button onclick="document.getElementById('myImage').src='pic_bulboff.gif'">Turn off the light</button>
