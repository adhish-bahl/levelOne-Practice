const input = document.querySelector("#input");
const increase = document.querySelector("#increase");
const decrease = document.querySelector("#decrease");

increase.addEventListener("click", () => {
    input.style.fontSize = "35px";
});


decrease.addEventListener("click", () => {
    input.style.fontSize = "10px";
});