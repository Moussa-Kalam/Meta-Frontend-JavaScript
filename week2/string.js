var greet = "Hello, ";
var place = "World";

// Length property. 
console.log(greet.length);

/*
 charAt(index) to read each individual character at specific index in a string
 starting from zero
*/
// Display the character at index 3 in the variable greet
console.log(greet.charAt(3));

// The() concat method joins two strings
console.log("Wo".concat("rl").concat("d"));
console.log(greet.concat(place));


// the indexOf returns the location of the first position that matches a character
console.log("ho-ho-ho".indexOf('h')); // 0
console.log("ho-ho-ho".indexOf('o')); // 1
console.log("ho-ho-ho".indexOf('-')); // 
/* The lastIndexOf finds the last match, 
otherwise it works the same as indexOf*/

// The split method chops us the string into and array of sub-strings
console.log("ho-ho-ho".split("-"));
console.log("I'love'JavaScript".split("'"));


/* 
There are also some methods to change the casing of strings
toUpperCase()
toLowerCase()
*/

console.log(greet.toUpperCase());
console.log("amzat".toUpperCase());
console.log(greet.toLowerCase());