const input = document.querySelector("#input");
const button = document.querySelector("#button");
const output = document.querySelector(".outputPara");
const api = "https://api.funtranslations.com/translate/minion.json?text="

button.addEventListener("click", ()=> {
    var inputValue = input.value;
    const finalcall = api + inputValue;

    fetch(finalcall)
    .then(response => response.json)
    .then(json => {
        var outputtext = json.contents.translated;
        output.innerText = outputtext;
    })
    .catch(json=> {
        errorMessage = json.error.message;
        console.log(errorMessage);
        // output.innerText = response.error.message;
        // output.innerText = json.error.code;
        // alert("Error: error occured");
    })
})