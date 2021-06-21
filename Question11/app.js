const input = document.querySelector("#password");
const button = document.querySelector("#button");
const output = document.querySelector(".output");

button.addEventListener("click", ()=> {
    const inputValue = input.value;
    if(inputValue.length >=  10) {
        output.innerText = "SUCCESS";
    }
    else {
        output.innerText = "SUCCESS";
    }
})