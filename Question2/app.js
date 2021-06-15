const input = document.querySelector("#input");
const output = document.querySelector("#output");
const increase = document.querySelector("#increase");
const decrease = document.querySelector("#decrease");


function bigger () {
    let inVal = input.value;
    output.innerHTML = inVal;
    output.style.fontSize = (currFontSize + 2) + "px";
    console.log(currFontSize);
    // output.style.backgroundColor = "red";
}

increase.addEventListener("click", bigger);
decrease.addEventListener("click", smaller);