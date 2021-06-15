const input = document.querySelector("#input");
const increase = document.querySelector("#increase");
const decrease = document.querySelector("#decrease");

var x = 0;

function bigger () {
    let inVal = input.value;
    output.innerHTML = inVal;
    input.style.fontSize = "30px";
}

increase.addEventListener("click", bigger);
decrease.addEventListener("click", smaller);