const input = document.querySelector("#input");
const output = document.querySelector("#output");
const increase = document.querySelector("#increase");
const decrease = document.querySelector("#decrease");

var x = 0;

function bigger () {
    let inVal = input.value;
    output.innerHTML = inVal;

    // var fontSizee = parseInt($("#output").css("font-size"));
    // output.style.backgroundColor = "red";
    // fontSizee = 1 + "rem + " + (x*2) + "px";
    // console.log(fontSizee);
    // x = x + 1;

    input.style.fontSize = "30px";
    // input.style.backgroundColor = "red";
}

increase.addEventListener("click", bigger);
decrease.addEventListener("click", smaller);