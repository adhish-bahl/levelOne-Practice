const input = document.querySelector("#id");
const button = document.querySelector("#button");
const output = document.querySelector("#outputPara");
const api = "https://api.funtranslations.com/translate/minion.json?text="

button.addEventListener("click", ()=> {
    var inputValue = input.value;
    const finalcall = api + inputValue;
    fetch(finalcall)
    .then(response => response.json)
    .then(json => {
        output.innerText = json.error.message;
    })
})