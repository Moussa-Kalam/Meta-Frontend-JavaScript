// Null represents intentional absence of object value
 var letters = "abc"

// let's check for the letter "a" in the string
console.log(letters.match(/a/)); // Returns an array with several pieces of information

// let's check the letter "d"
console.log(letters.match(/d/)); // Null appears instead of an array to indicate the absence of an object


/* Undefined
Hold only one value
Displays when a variable is declared without assignment
It acts like a placeholder for the value that a JavaScript engine knows to exist even though it is not specified 
*/

var place;
console.log(place); // undefined

var food = {
    ingredient: "onion"
}

console.log(food.Ingredient); // Notice the capital I in the property called => undefined will be output


/*Empty string*/

var name1 = "";
var name2 = '';

