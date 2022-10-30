// To capture user input, use the built-in prompt() method

// let answer = prompt("What is your name?");

// Type-in user-provided input on the screen as an <h1> HTML element

/*
if (typeof(answer) === "string") {
    let h1 = document.createElement("h1");
    h1.innerText = answer;
    document.body.innerText = "";
    document.body.appendChild(h1);
}
*/


/** Capture user input and process it

Code a script which will take an input from an HTML form
Display the text that a user types in on the screen */


var h1 = document.createElement("h1");
h1.innerText = "Type into the input to make this text change"

// Add an input element and set its HTML type attribute to text
var input = document.createElement("input");
input.setAttribute("type", "text");

document.body.innerText = ""; 
document.body.appendChild(h1); // Add the h1 to the DOM
document.body.appendChild(input); // Add the input to the DOM

// Set up an event listener (change event) that will fire after you've typed into the input and pressed ENTER
input.addEventListener("change", function() {
    h1.innerText = input.value // update the text content of h1 with the value gotten from the input field
})