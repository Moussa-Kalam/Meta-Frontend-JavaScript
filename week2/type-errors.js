/* ReferenceError
It gets thrown when, for example, one tries to use variables that 
haven't been declared anywhere 
*/

console.log(username); // Uncaught ReferenceError: username is not defined


/* SyntaxError
Any kind of invalid JavaScript will cause a SyntaxError
This error cannot be caught using the try-catch block
*/

var a "there's no assignment operator here";
// Uncaught SyntaxError: Unexpected string


/* TypeError
Thrown when, for example, trying to run a method on a non-supported data type
A simple example is attempting to run the pop() method on a string
*/

"hello".pop() // Uncaught TypeError: "hello".pop is not a function


/* RangeError
Thrown when we're giving a value to a function, but that value is out of the 
allowed range of acceptable input values
*/

// Example of converting an everyday Base 10 number (decimal number) to a Base 2 number(i.e binary number)
(10).toString(2);  // '1010'
(10).toString(8);  // 12

(10).toString(100); // Uncaught RangeError: toString() radix argument must be between 2 and 36