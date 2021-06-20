const button = document.querySelector("#button");
const input = document.querySelector("#input");
const output = document.querySelector(".outputPara");
const api = "https://api.funtranslations.com/translate/minion.json?text=";

button.addEventListener("click", ()=> {
    var inputValue = input.value;
    // const finalapi = api.concat(inputValue);
    const finalapi = api + inputValue;

    fetch(finalapi)
    .then(response => response.json())
    .then(json => {
        var outputtext = json.contents.translated;
        output.innerText = outputtext;
    })
    .catch(() => {
        alert("Error: error occured, try after few time.");
    })
    // console.log(finalapi);
});
