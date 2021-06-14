var numOne = document.querySelector("#firstnum");
var numTwo = document.querySelector("#secondnum");
var add = document.querySelector("#add");
var subtract = document.querySelector("#subtract");
var multiply = document.querySelector("#multiply");
var divide = document.querySelector("#divide");
var output = document.querySelector("#output");

function sum() {
    var first = numOne.value;
    var two = numTwo.value;
    output.innerText = parseInt(first) + parseInt(two);
}
function minus() {
    var first = numOne.value;
    var two = numTwo.value;
    console.log(first);
    output.innerText = parseInt(first) - parseInt(two);
}
function into() {
    var first = numOne.value;
    var two = numTwo.value;
    output.innerText = parseInt(first) * parseInt(two);
}
function upon() {
    var first = numOne.value;
    var two = numTwo.value;
    output.innerText = parseInt(first) / parseInt(two);
}

add.addEventListener("click", sum);
subtract.addEventListener("click", minus);
multiply.addEventListener("click", into);
divide.addEventListener("click", upon);