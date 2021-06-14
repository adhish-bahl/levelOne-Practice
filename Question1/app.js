var numOne = document.querySelector("#firstnum");
var numTwo = document.querySelector("#secondnum");
var add = document.querySelector("#add");
var subtract = document.querySelector("#subract");
var multiply = document.querySelector("#multiply");
var divide = document.querySelector("#divide");
var output = document.querySelector("#output");

function sum() {
    var first = numOne.value;
    var two = numTwo.value;
    console.log(first, two);
    var result = first+two;
    output.innerText = result;
}
function minus() {
    output.innerText = first - two;
}
function into() {
    output.innerText = first * two;
}
function upon() {
    output.innerText = first / two;
}

add.addEventListener("click", sum);
subtract.addEventListener("click", minus);
multiply.addEventListener("click", into);
divide.addEventListener("click", upon);