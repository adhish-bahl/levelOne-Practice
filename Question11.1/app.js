const input = document.querySelector("#input");
const button = document.querySelector("#button");

button.addEventListener("click", ()=> {
    const inputValue = input.value;
    input.style.backgroundColor = inputValue;

    
//     switch(inputValue) {
//         case "red": input.style.backgroundColor = inputValue;
//                     break;
//         case "yellow": input.style.backgroundColor = inputValue;
//                         break;
//         default: input.style.backgroundColor = "blue";
//                     break;
//     }



})