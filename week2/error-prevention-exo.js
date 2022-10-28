/*
Write a function that adds two numbers (a, b) with a try...catch block
If a is not a number, throw a new ReferenceError with the custom message "the first argument is not number"
Else if b is not a number, throw a new ReferencError with the custom message "the second argument is not a number"
Otherwise, console log a + b
*/


function addTwoNums (a, b) {
    try {
        if (typeof (a) != "number") {
            throw new ReferenceError("the first argument is not a number");
        } else if (typeof (b) != "number") {
            throw new ReferenceError("the second argument is not a number");
        } else {
            console.log(a + b);
        }
    } catch(err) {
        console.log("Error!", err);
    }
}

addTwoNums(2, "7");
console.log("It still works");

