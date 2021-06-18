const heading = document.querySelector("#heading");
const button = document.querySelector(".button button");

button.addEventListener("click", ()=> {
    heading.style.visibility = "hidden";
    // visiblity reserves the space for the element /
    
    // heading.style.display = "none";
    // display does not reserves the space for the element and while shifts all the other elements up!

    console.log("click");
});