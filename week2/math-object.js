/* 
    Number constants
Here are some of the built-in number constants that exist on the Math object: 

The PI number: Math.PI 

The Euler's constant: Math.E 

The natural logarithm of 2: Math.LN2


Rounding methods
These include: 

 Math.ceil() - rounds up to the closest integer 

 Math.floor() - rounds down to the closest integer 

 Math.round() - rounds up to the closest integer if the decimal is .5 or above; otherwise, rounds down to the closest integer 

 Math.trunc() - trims the decimal, leaving only the integer


Arithmetic and calculus methods
Here is a non-conclusive list of some common arithmetic and calculus methods that exist on the Math object: 

Math.pow(2,3) - calculates the number 2 to the power of 3, the result is 8 

Math.sqrt(16) - calculates the square root of 16, the result is 4 

Math.cbrt(8) - finds the cube root of 8, the result is 2 

Math.abs(-10) - returns the absolute value, the result is 10 

Logarithmic methods: Math.log(), Math.log2(), Math.log10() 

Return the minimum and maximum values of all the inputs: Math.min(9,8,7) returns 7, Math.max(9,8,7) returns 9.

 Trigonometric methods: Math.sin(), Math.cos(), Math.tan(), etc.
*/


// NUMBER CONSTANTS

// Display the PI number constant 
const item = Math.PI;
console.log(item);

// Display the Euler's constant
const item1 = Math.E;
console.log(item1);

// Display the natural logarithm of 2
const item2 = Math.LN2;
console.log(item2);



// ROUNDING METHODS

var num1 = 2.1;
var num2 = 2.5;

// Round up num1 to the closest integer
console.log(Math.ceil(num1));

// Round down num1 to the closest integer
console.log(Math.floor(num1));

// Round up to the closest integer
// if decimal is .5 or above, rounds up to the closest integer
// otherwise, round down to the closest integer
console.log(Math.round(num1));
console.log(Math.round(num2));

// Trim the decimal of num1 and num2 to get integers
console.log(Math.trunc(num1));
console.log(Math.trunc(num2));



// ARITHMETIC AND CALCULUS METHODS

// Output the number 5 to the power of 3
console.log(Math.pow(5, 3));

// Output the square root of 64
console.log(Math.sqrt(64));

// Find the cube of 27
console.log(Math.cbrt(27)); // 3 * 3 * 3 = 27

// Return the absolute value of -34
console.log(Math.abs(-34));

// Return the minimum value of given numbers
console.log(Math.min(12, 2, 89, 34, 56, 5));

// Return the maximum value of given numbers
console.log(Math.max(12, 2, 89, 34, 56, 5));


/*
Let's explore the Math.random()
This method generates a random decimal number between 0 and 1
Generate a decimal number between 0 and 0.99 
Save it to a variable
Log the variable to the console
*/

var decimal = Math.random();
console.log(decimal);

// Gererate a random number between 0 and 10
console.log(Math.random() * 10);








// Find more in the main description up.

