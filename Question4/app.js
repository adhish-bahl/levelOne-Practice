const input = document.querySelector("#input");
const red = document.querySelector("#red");
const green = document.querySelector("#green");
const blue = document.querySelector("#blue");

red.addEventListener("click", ()=> {
    input.style.color = "red";
});

green.addEventListener("click", ()=> {
    input.style.color = "green";
});

blue.addEventListener("click", ()=> {
    input.style.color = "blue";
});