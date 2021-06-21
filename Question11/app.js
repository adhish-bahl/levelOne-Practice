const input = document.querySelector("#password");
const button = document.querySelector("#button");
const output = document.querySelector(".outputPara");

button.addEventListener("click", ()=> {
    // console.log("YOOYOYOYYO");
    const inputValue = input.value;
    if(inputValue.length >=  10) {
        output.innerText = "SUCCESS";
    }
    else {
        output.innerText = "FAIL!";
    }
})