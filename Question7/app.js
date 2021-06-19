const button = document.querySelector("#button");
const input = document.querySelector("#input");
const output = document.querySelector("#output");
const api = "https://api.funtranslations.com/translate/minion.json?text=";

button.addEventListener("click", ()=> {
    var inputValue = input.value;
    api = api.concat(inputValue);
    console.log(api);
});
