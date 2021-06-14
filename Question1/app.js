const numOne = document.querySelector("#firstnum");
const numTwo = document.querySelector("#secondnum");
const add = document.querySelector("#add");
const subtract = document.querySelector("#subract");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
const output = document.querySelector("#output");


const first = numOne.value;
const two = numTwo.value;

console.log(first, two);

function sum() {
    output.innerText = first + two;
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