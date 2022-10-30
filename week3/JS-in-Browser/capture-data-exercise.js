// The aim of this exercise is to access the content of an element
// Specifically to use a button click to replace text
// example.com  will be the web page for this assignement


// Get h1 into a variable
let h1 = document.querySelector("h1");
// Code an array
let arr = ["Example Domain", "First Click", "Second Click", "Third Click"];
// Write a click-handling functio
function handleClicks() {
    switch(h1.innerText) {
        case arr[0]:
            h1.innerText = arr[1];
            break;
        case arr[1]:
            h1.innerText = arr[2];
            break;
        case arr[2]:
            h1.innerText = arr[3];
            break;
        default:
            h1.innerText = arr[0];
            break;
    }
}
// Add an event listener
h1.addEventListener("click", handleClicks);