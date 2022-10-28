 
// let's do this using an example

// console.log(a + b);
// console.log("This line is never reached")

/* Those line of code above will throw an ReferenceError
   because a is not defined.
 However, you can actually throw error messages on purpose. 

 This is done by typing the keyword "throw" followed by the keyword "new"
 and then a specific error constructor (i.e. ReferenceError())
 e.g. throw new ReferenceError(); 
*/


/*
We can prevent errors from stopping our programs using the try catch syntax
The try catch JavaScript statement can keep a program running even when it encounters an error.
*/

try {
    console.log(a + b)   /* In this block, we place the code that we think will throw an error */
} catch(err) {  // This statement catches the error from the try block.
    console.log(err)
    console.log("There was an error");
    console.log("The error was saved in the error log")
}
console.log("My program does not stop"); // This message will be print despite the fact that an errow is thrown


/* Here is the complete syntax
try {

    throw new Error();

} catch(err) {
    console.log(err);

}

console.log("This line now runs");
*/