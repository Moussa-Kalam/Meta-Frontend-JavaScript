/**Functional programming: Separating data from function
 * In FP, we use a lot of functions and variables
 * We keep data and functionality separate and pass data into functions only when we want something computed. 
*/

// Write a program that convert currency according to a given rate

var currencyOne = 100;
var currencyTwo = 0;
var exchangeRate = 1.2;

function convertCurrency(amount, rate) {
    return amount * rate;
}

currencyTwo = convertCurrency(currencyOne, exchangeRate);

console.log(currencyTwo);



/* Return values from functions
with the return keyword, I can have multiple function calls, returning data
and manipulating values, based on whatever challenge I have in front of me. 
*/

function doubleIt(num) {
    return num *2
}

function objectMaker(val) {
    return {
        prop: val
    }
}

// Create an object with a single prop key set to 20
objectMaker(20);

// Return the double of 15 as a string
console.log(doubleIt(15).toString());

// Let's call multiple functions to add a value to the property of our object
console.log(objectMaker(doubleIt(25)));



/** Recursive function
 * It's a function that call itself
 * Recursive is an alternative way to run repetitive code without the use of loops
 */

// Write a recursive function that counts from 5 to 1

let counter = 5;
function count() {
    console.log(counter);
    counter -= 1;
    if (counter === 0) return;
    count();
}

count();


/** Scope
 * Code outside the function is referred to as Global scope
 * The code inside of the function is called local scope or function scope
 */

var globalVar = "I'm in the global scope";

function scopeTest() {
    var localVar = "I'm scoped to the function";
    console.log(globalVar); // Can be accessed within the function
}


/** First-class functions
 * A function in JavaScript is just another values that we can:
 * pass to other functions
 * save in a variable
 * return from other functions
 */

 function addTwoNums(a, b) {
    console.log(a + b)
}

function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}
function specificNum() { return 42 };

// var useRandom = true;
var useRandom = false;

var getNumber;

if(useRandom) {
    getNumber = randomNum
} else {
    getNumber = specificNum
}

addTwoNums(getNumber(), getNumber())



/** Higher-order functions
 * A higher-order function is a function that has either one or both of the following characteristics:
 * it accepts other functions as arguments
 * it returns functions when invoked
 */

// Let's redefine the addTwoNums() function so that it is a higher-order function

function addTwoNums(getNumber1, getNumber2) {
    console.log(getNumber1() + getNumber2());
}

/*
addTwoNums(specificNum, specificNum); // returned number is 84
addTwoNums(specificNum, randomNum); // returned number is 42 + some random number
*/