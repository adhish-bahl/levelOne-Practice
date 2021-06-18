const heading = document.querySelector("#heading");
const button = document.querySelector(".button button");

button.addEventListener("click", ()=> {
    heading.style.display = "none";
    console.log("click");
});