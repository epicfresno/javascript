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
// let firstName = prompt("Hello, please enter your first name here:");
// let colorChoice = prompt("Great " + firstName + ", now please pick your favorite color out of the following: yellow, orange, blue, red, purple, white, grey, black, green.");
// if (colorChoice === "yellow") {
//   alert("Great " + firstName + " Did you know yellow is for cowards");
// } else if (colorChoice === "orange") {
//   alert("Great " + firstName + " Orange you happy to be alive");
// } else if (colorChoice === "blue") {
//   alert("Please " + firstName + " don't be blue");
// } else if (colorChoice === "red") {
//   alert("Ok " + firstName + " no need to get angry or is that the color of passion");
// } else if (colorChoice === "purple") {
//   alert("Ok " + firstName + " your new nickname is Barney");
// } else if (colorChoice === "white") {
//   alert("Wow " + firstName + " you are as pure as freshly fallen snow... eyeroll");
// } else if (colorChoice === "grey") {
//   alert("Well " + firstName + " I hope the clouds above you part and all is right in the world");
// } else if (colorChoice === "black") {
//   alert("Im curious " + firstName + " are you secretly a NINJA?");
// } else if (colorChoice === "green") {
//   alert("Now " + firstName + " that is the correct choice, thank you for playing!");
// } else if (colorChoice === "") {
//   alert( "I'm sad " + firstName + " that you did not enter an appropriate color");
//   alert("ok " + firstName + " since you seem to be having a hard time...try one of the buttons");
// } else {
//   alert("ok " + firstName + " since you seem to be having a hard time...try one of the buttons");
// }
//
//
// function yellow1() {
//   alert("Great " + firstName + " Did you know yellow is for cowards");
// }
// function orange1() {
//   alert("Great " + firstName + " Orange you happy to be alive");
// }
// function blue1() {
//   alert("Please " + firstName + " don't be blue");
// }
// function red1() {
//   alert("Ok " + firstName + " no need to get angry or is that the color of passion");
// }
// function purple1() {
//   alert("Ok " + firstName + " your new nickname is Barney");
// }
// function white1() {
//   alert("Wow " + firstName + " you are as pure as freshly fallen snow... eyeroll");
// }
// function grey1() {
//   alert("Well " + firstName + " I hope the clouds above you part and all is right in the world");
// }
// function black1() {
//   alert("Im curious " + firstName + " are you secretly a NINJA?");
// }
// function green1() {
//   alert("Now " + firstName + " that is the correct choice, thank you for playing!");
// }


// Day 4 Arrays

// let myArray = ['Red', 'Blue', 'Green', 'Purple', 'Black', 'Gray', 'White'];
// let myArray =myArray[0];
// console.log(myArray[1])
// console.log(myArray.length);
// let about = ['Name', 'Age', 'Fact', true/false]
// let about = ['James', 45, 'love me some pizza', true];
// console.log(about);
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
// below checks if this is an array
// console.log(Array.isArray(nums));

// Adds new item to the end of the array
// nums.push(10);

// adds new item to the beginning of the array
// nums.unshift(0);

// removes last item from the end of the array
// nums.pop();

// removes the first item in the array
// nums.shift();

// cuts out section of an array
// nums.splice(1, 4);

// Makes a copy of the array then cuts the array
// let slice = myArray.slice(3)
// console.log(nums);
// console.log(slice);

// console.log(myArray.indexOf('Green'))
// let color = myArray.indexOf('Green');
// myArray.splice(color, 1);
// console.log(myArray);

// let lastIndex = myArray.lastIndexOf('Black');
// console.log(lastIndex);

// reverse the array
// console.log(myArray.reverse());

// sorts the array
// console.log(myArray.sort());

// DAY 4 - LOOPS

// let num =0;
// WHILE LOOP
// while (num < 10) {
//   num ++;
// }

// FOR LOOP  --IS THE MOST COMMON TYPE USED
// for (let i = 0; i < 10; i++){
//   console.log('I have ran', num);
// }
// console.log(num);

// FOR LOOP - SOLID EXAMPLE
// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }

// DO WHILE LOOP
// do {
//   num++;
//   console.log(num);
// } while (num < 10);

// Some other stuff below
// let myFavoriteMovies = [];
// let firstFavorite = ['Real', '1991'];
// let secondFavorite = ['Maybe', '2001'];
// let thirdFavorite = ['For sure not', '2010'];
// myFavoriteMovies.push(firstFavorite, secondFavorite, thirdFavorite);

// console.log(myFavoriteMovies[2][1]);

// let movieYears = [];
// movieYears.push(myFavoriteMovies[0][1], myFavoriteMovies[1][1], myFavoriteMovies[2][1]);
// for (let i = 0; i < myFavoriteMovies.length; i++) {
//   movieYears.push(myFavoriteMovies[i][1])
// }
// console.log(movieYears);

// Day4 homework
// let firstName = prompt("Hello, please enter your first name:");
// let myTodoArray = [];
// let myTodoOne = prompt("Great " + firstName + " please enter the first To Do item you really need to get done below:", "Run a marathon.");
// let timeTodoOne = prompt("How long do you think that will take To DO? (in days)", "1");
// let myTodoTwo = prompt("Awesome" + firstName + " please enter your second To Do item here:", "run around the world.");
// let timeTodoTwo = prompt("How long do you think that will take To DO? (in days)", "2");
// let myTodoThree = prompt("Sweet" + firstName + " please enter the third and final To Do item below:", "run to the moon");
// let timeTodoThree = prompt("How long do you think that will take To DO? (in days)" "3");

// let
// myTodoArray.push(myTodoOne, myTodoTwo, myTodoThree);
// console.log(myTodoArray);

// let todoOneArray = [ todo1, timeframe1];
// let todoTwoArray =
// todos.push(todoONeArray, todoTwoArray, todoThreeArray);



// for loop
// for (let i = 0; i < myTodoArray.length; i++) {
//   let timeframe = prompt(`How long should ${myTodoArray[i][0]} take? (please provide in days)`, "1");
//   let transformed = parseInt(timeframe);
//   if(!isNaN(transformed) {
//     todos[i].push(transformed);
//   } else {
//     todos[i].push(1);
//   };
  // isNan();    is not a number
//   console.log(myTodoArray[i]);
// }
// for (let timeTodo )

// while loop
// let n = 0;
// let max = 0;
// while (n < myTodoArray.length) {
//   if(max < myTodoArray[n][1]) {
//     max = myTodoArray[n][1];
//   }
//   n++;
// }

// do while LOOP
// let m = 0;
// do {
//   if(todos[m][1] === max) {
//     console.log(todos[m]);
//   } else {
//     todos[m].push("easy-peasy");
//     alert(todos[m]);
//   }
//   m++;
// } while (m < todos.length);

// alert easy peasy
// alert("Great " + firstName + " these To Do items will be easy peasy!" + );

//  DAy 4 homework
// Todo : Takehome day 4
// let todos = [];
// let todo1 = prompt("Hey there, what you doing?", "Eat Cheese.");
// let todo2 = prompt("Hey there, what you doing?", "Eat Cheese.");
// let todo3 = prompt("Hey there, what you doing?", "Eat Cheese.");
//
// let todoOneArray = [todo1];
// let todoTwoArray = [todo2];
// let todoThreeArray = [todo3];
//
// todos.push(todoOneArray, todoTwoArray, todoThreeArray);
//
// for(let i = 0; i < todos.length; i++) {
//   let timeframe = prompt(`How long should ${todos[i][0]} take? (Please provide in days)`, "1");
//   let transformed = parseInt(timeframe);
//   if(!isNaN(transformed) {
//     todos[i].push(transformed);
//  } else {
//    todos[i].push(1); //Edge Casing: catching potential errors for your user.
//  };
// }

// let n = 0;
// let max = 0;
// while(n < todos.length) {
//   if(max < todos[n][1]) {
//     max = todos[n][1];
//   }
//   n++;
// };
//
// let m = 0;
// do {
//   if(todos[m][1] === max) {
//     console.log(todos[m]);
//   } else {
//     todos[m].push("easy-peasy");
//     alert(todos[m]);
//   }
//   m++;
// } while(m < todos.length);
//
//
// console.log(parseInt("hello world"));
// isNaN(); //How you evaluate if somehting is NOT a number.
//
 // Day 5 extra notes from Reiyker

 //HOISTING
// var name; //Declare
// name = "Maurice"; //define
//
// //FUNCTIONS
//
// //Anonymous FUNCTIONS
// // function(name, age) {
// //   return `My name is ${name} and I am ${age} years old`;
// // }; //Function DEFINITION
// let todos = [];
// //Named Functions
// function getTodos(question) {
//   todos.push(prompt(question));
// };//fucntion DEFINITION
//
// // getTodos("Whats the first thing you want to do?"); //Function call site;
//
// // nameThatBand("Coldplay");
//
// function nameThatBand(bandName) { //Function DECLARATION
//   let name = "The Best";
//   return alert(`${bandName} is overrated`);
// };
//
// let sayHello = function() { //function EXPRESSION
//   alert("Hello");
// };
// // sayHello();
//
// let incrementor = 0;
// let sayGoodbye = function() { //RECURSIVE function
//   if(incrementor > 5){
//     alert("Hello");
//     incrementor++;
//     sayGoodbye();
//   } else {
//     return;
//   }
// }
// // sayGoodbye();
//
// //"FAT" Arrow FUNCTIONS
// // () => (); //POINTLESS but basic form
// //
// // () => { //Arrow funciton that takes 0 args and performs data manipulation
// //   incrementor++;
// //   if(incrementor < 5) {
// //     sayGoodbye();
// //   }
// // };
// //
// // pasta => { //takes 1 argument (can have parentheses or not) and alerts a string
// //   alert(`My favorite pasta is ${pasta}!`);
// // };
// //
// // pasta => (pasta.toUpperCase());
// //
// // (car, house) => {
// //   //call an API to save this data...
// //   return `The returned info is ${data}`;
// // };
//
//
//
//
// //TRY IT OUT
//
// /**
// Write a Function that...
// Accepts 1 argument (age of the dog in years).
// Returns the age of the dog using the conversion rate of 1 year to 7 "dog" years.
// Alerts the answer.
// Make sure you're checking for edge-cases!
// */
//
// function calculateDogYears(age) {
//   let parsed = parseInt(age);
//   if(!isNaN(parsed)) {
//     return parsed * 7;
//   } else {
//     let newAnswer = prompt("Come on! I said a NUMBER of years!", "1");
//     calculateDogYears(newAnswer);
//   }
// };
//
// // let dogAge = prompt("How old is your dog?", "10");
// // alert(calculateDogYears(dogAge));`
//
//
//
// parseInt();
//
// "Ryeker".toUpperCase();
//

//

// Day 5 in class

// HOISTING

// console.log(name);
// var name = "Maurice"

// Anonymous FUNCTIONS
// function(name, age) {
//   return `My name is ${name} and I am ${age} years old`;
//
// }; // Function DEFINITION
// let todos= [];
// named FUNCTIONS
// function getTodos(question) {
//   todos.push(prompt(question));
// }; // function DEFINTITION

// getTodos("whats the first thing you want to do?"); // function call sites;

// nameThatBand("Coldplay");
//
// function nameThatBand(bandName);
//
// {}
//
// let incrementor = 0;
// let sayGoodbye = function() { //RECURSIVE Function
  // if(incrementor > 5){
  //   alert("Hello");
  //   incrementor++;
  //   sayGoodbye();
  // } else {
  //   return
  // }


  //  "FAT" Arrow FUNCTIONS

  // () => (); // Pointless but basic form

  // () => { //Arrow function that takes 0 args and performs data manipulation
//     incrementor++;
//     if(incrementor < 5) {
//       sayGoodbye();
//     }
//   };
//
// pasta => { // takes 1 argument (can have parantheses or not) and alerts a string
//   alert(`My favorite pasta is ${pasta}`);
// };
//
// pasta => (pasta.toUpperCase()); // makes everything toUpperCase

// (car, house) => {
  //call an API to save this data
//   return `The returned info is ${data}`;
// }

// other stuff day 5

// function calculateDogYears(age) {
//   let parsed = parseInt(age);
//   if(!isNan(parseInt(age))) {
//     return age * 7;
//   } else {
//     let newAnswer = prompt("Come on! I said a Number of years!", "1");
//     calculateDogYears(newAnswer);
//   }
// };
//
// let dogAge = prompt("How old is your dog?", "10");
// alert(calculateDogYears(dogAge));

// Day 5 Take Home mine

// let userNumber = prompt("What number would you like to square?")
// console.log(userNumber);
//
//
// function numberSquared() {
//   var a = Math.pow(userNumber, userNumber);
// }
// console.log(numberSquared);

// Review of DAY 5 homework
// problem #1

// let answer = powerOfTwo(parseInt(prompt("what do you want to square, '2'")));
//
// function powerOfTwo(number) {
//   if(!isNaN(number)) {
//     return number * number;
//   } else {
//     alert("NaN");
//     let answer = powerOfTwo(parseInt(prompt("what do you want to square, '2'")));
//
//   }
// };
// alert(answer);

// problem 2

// function parseString(string) {
//   let parsedLetter = string.charAt(0).toUpperCase();
//   let stringArr = string.split('');
//   stringArr.splice(0, 1, parsedLetter);// replaces the first letter with the new uppercased parsedLetter
//   string = stringArr.join('');
//   if(string.charAt(string.length - 1) !== '.') string = string + '.';
//   return string;
// }
//
// let answer = parseString(prompt("Type something in.", ))

// problem 3

// function reversHalves(string {
//   let halfIndex = Math.ceil(string.length / 2);
//   let firstHalf = string.substring(0, halfIndex);
//   letSecondHalf = string.substring(halfIndex, string.length);
//   alert(`${secondhalf}${firstHalf}`);`
// }

// let pTags = document. getElementsByTagName("p");//returns an array
// console.log(pTags);
//
// let specialPTag =
// document.getElementsByClassName("my-special-p-tag");//returns an array
// console.log(specialPtag);
//
// let thisPTag = document.getElementById("this_p_tag");//returns 1 Dom node
// console.log(thisPTag[0]);
//
// let H1Tags = document.querySelectorAll("h1");
// let queryPTags = documnet.querySelectorAll(".my-special-p-tag");
// let idPtags = document.querySelctorAll("#this_p_tag");
// document.querySelector(".text-danger");
//
// queryMyDOm("getElementsByTAgName", "h1");
// function queryMyDOM(method, element) {
//   let result;
//   switch(method) {
//     case "getElementsByTagName";
//     result = document.GetElementsByTagName(element);
//     break;
//     case "querySelector";
//     result = document.querySelector(element);
//     break;
//     default;
//     result = "Sorry, that's not valid.";
//   }
//   console.log(result);
// };

// EVENT LISTENERS

let redDiv= document.querySelector(".red-background");

redDiv.addEventListener(
  "mouseover",
  e => {
    redDiv.style.backgroundColor = "#0000FF";
    redDiv.addEventListener("mouseLeave", e => {
      redDiv.style.backgroundColor = "#E40007";
      console.log(e);
    });
  }
);

let input = document.querySelector("#my_input");

input.addEventListener("keydown", e => {
  console.log(e.target.value);
})

// let bodyTag = document.querySelectorAll("body");
// console.log(bodyTag);
// }
