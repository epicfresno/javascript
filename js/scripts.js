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



// Day 7 CLASSWORK

// ex.1
// let text= document.getElementById("para").textContent = "This is some other text.";
// console.log(text);

// ex.2
// let text= document.getElementById("para").innerHTML;
// console.log(text);

let content = document.getElementById("content");

// Creating a oaragraph this_p_tag
// let myPTag = document.createElement("p");
// myPTag.textContent = "This is a paragraph added from the JavaScript!";
// content.appendChild(myPTag);
// content.append(myPTag);

// Creating a button and adding a class.

// let myBtn = document.createElement("button");
// myBtn.className = "btn";
// myBtn.id = "someId";
// myBtn.textContent = "Click me MoFo!";

// myBtn.classList.remove("btn-primary");
// myBtn.classList.add("btn-primary");
// content.appendChild(myBtn);
// console.log(document.getElementById("someId").classList);

// Using setAtttribute
// let myImg = document.createElement("img");
// myImg.setAttribute("alt", "Add attribute from JS");
// myImg.setAttribute("src", "https://pbs.twimg.com/profile_images/584025370036314112/0maBx-gf_400x400.jpg");
// content.appendChild(myImg);
//
// console.log(myImg.getAttribute("src"));

// Generate a page using only JavaScript.
const script = document.querySelector("script");
const body = document.querySelector("body");

let newP = document.createElement("p");
let newH1 = document.createElement("h1");
let newFooter = document.createElement("footer");

let newHeader = document.createElement("header");
let newUl = document.createElement("ul");
let newDiv = document.createElement("div");

function createLi(classArray, linkText) {
  let newLink = document.createElement("li");
  let newA = document.createElement("a");
  newA.setAttribute("href", "#");
  newA.textContent = linkText;
  newLink.appendChild(newA);
  for (let i = 0; i < classArray.length; i++) {
    newLink.classList.add(classArray[i]);
  }
  newUl.appendChild(newLink);
}
createLi(["pull-left"], "Home");
createLi(["pull-right"], "Contact");
createLi(["pull-right"], "About");

newUl.classList.add("nav", "nav-pills");
newHeader.appendChild(newUl);
body.insertBefore(newHeader, script);

function createTextElement(elementType, text) {
  let newElement = document.createElement(elementType);
  newElement.textContent = text;
  return newElement;
}

newDiv.classList.add("text-center");

let h1 = createTextElement("h1", "Hello World!");
let p = createTextElement("p", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
newDiv.appendChild(h1);
newDiv.appendChild(p);
body.insertBefore(newDiv, script);

let newFooterLink = document.createElement("a");
newFooterLink.textContent = "Check me out.";
newFooterLink.setAttribute("href", "https://google.com/");
newFooterLink.setAttribute("target", "_blank");
newFooterLink.classList.add("text-center", "footer");
newFooter.appendChild(newFooterLink);
body.insertBefore(newFooter, script);

function fizzBuzz() {
  let list = document.createElement("ol");

  for (let i = 1; i <= 100; i++) {
    if(i % 15 == 0) {
      console.log("FizzBuzz");
      let res = document.createElement("li");
      res.textContent = "FizzBuzz";
      list.appendChild(res);
    } else if(i % 3 == 0) {
      console.log("Fizz");
      let res = document.createElement("li");
      res.textContent = "Fizz";
      list.appendChild(res);
    } else if(i % 5 == 0) {
      console.log("Buzz");
      let res = document.createElement("li");
      res.textContent = "Buzz";
      list.appendChild(res);
    } else {
      console.log(i);
      let res = document.createElement("li");
      res.textContent = i;
      list.appendChild(res);
    }
  }
}

fizzBuzz();

// function myFinc() {
//   let me = {
//     nickName: "OjosLocos",
//     nickName2: "VatosLocos",
//     id:1234,
//     fullNAme: function () {
//       return this.nickName + " " + this.nickName2;
//     }
//   }
// }
// console.log(this.myFunc);
// console.log("Global", this);
