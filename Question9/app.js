const button = document.querySelector("#button");
const output = document.querySelector(".outputPara");
const api = "https://api.funtranslations.com/translate/minion.json?text=testing"
let errorCode;

button.addEventListener("click", ()=> {
    fetch(api)
    .then(response  => response.json())
    .then(json => {
        errorCode = json.error.code;
    })
    .catch(() => {
        switch(errorCode) {
            case "404": output.innerText("Page not found");
                        break;
            case "401": output.innerText("You are not loged in!");
                        break;
        }
    });
})