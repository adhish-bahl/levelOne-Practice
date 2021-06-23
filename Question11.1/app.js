const input = document.querySelector("#input");
const button = document.querySelector("#button");

button.addEventListener("click", ()=> {
    switch(input.value) {
        case "red": input.style.backgroundcolor = "red";
                    break;
        case "yellow": input.style.backgroundcolor = "yellow";
                        break;
        default: input.style.backgroundcolor = "blue";
                    break;
    }
})