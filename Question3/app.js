const input = document.querySelector("#input");
const H1 = document.querySelector("#h1");
const H2 = document.querySelector("#h2");
const H3 = document.querySelector("#h3");
const output = document.querySelector("#output");



H1.addEventListener("click", ()=> {
    console.log(input.val);
    output.outerHTML = '<h1 class="output" id="output">' + input.value + '</h1>';
});

H2.addEventListener("click", ()=> {
    console.log(input.val);
    output.outerHTML = '<h2 class="output" id="output">' + input.value + '</h2>';
});

H3.addEventListener("click", ()=> {
    console.log(input.val);
    output.outerHTML = '<h3 class="output" id="output">' + input.value + '</h3>';
});


// input.onchange
// input.addEventListener("change", () => {
//     var inputVal = input.value;
//     console.log(inputVal);
//     output.innerHTML = inputVal;
// });