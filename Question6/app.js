const heading = document.querySelector(".loading h1");
const button = document.querySelector(".button button");

button.addEventListener("click", ()=> {
    heading.style.visibility = "hidden";
});