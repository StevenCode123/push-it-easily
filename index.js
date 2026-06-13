let btnOne = document.getElementById("buttonOne");
let btnTwo = document.getElementById("buttonTwo");
let btnThree = document.getElementById("buttonThree")
let btnFour = document.getElementById("buttonThree");
let btnFive = document.getElementById("buttonThree");
let btnSix = document.getElementById("buttonThree");
let btnSeven = document.getElementById("buttonThree");
let btnEight = document.getElementById("buttonThree");
let btnNine = document.getElementById("buttonThree");
let btnZero = document.getElementById("buttonThree");

let multiply = document.getElementById("multiply")
let divide = document.getElementById("divide")
let addition = document.getElementById("addition")
let subtraction = document.getElementById("subtraction")

let replacerEl = document.getElementById("rplcr-el")

divide.addEventListener("click", function() {
    replacerEl.innerHTML += "/"
})

btnOne.addEventListener("click", function() {
    replacerEl.innerHTML += "1"
    console.log("this is the number one")
})

btnTwo.addEventListener("click", function() {
    replacerEl.innerHTML += "2"
    console.log("this is the number two")
})

btnThree.addEventListener("click", function () {
  replacerEl.innerHTML += "3";
  console.log("this is the number two");
});

btnFour.addEventListener("click", function () {
  replacerEl.innerHTML += "4";
  console.log("this is the number two");
});

btnFive.addEventListener("click", function () {
  replacerEl.innerHTML += "5";
  console.log("this is the number two");
});

btnSix.addEventListener("click", function () {
  replacerEl.innerHTML += "6";
  console.log("this is the number two");
});

btnSeven.addEventListener("click", function () {
  replacerEl.innerHTML += "7";
  console.log("this is the number two");
});

btnEight.addEventListener("click", function () {
  replacerEl.innerHTML += "8";
  console.log("this is the number two");
});

btnNine.addEventListener("click", function () {
  replacerEl.innerHTML += "9";
  console.log("this is the number two");
});

btnZero.addEventListener("click", function () {
  replacerEl.innerHTML += "0";
  console.log("this is the number two");
});

btnAddition.addEventListener("click", function() {
  replacerEl.innerHTML += "+"
})





