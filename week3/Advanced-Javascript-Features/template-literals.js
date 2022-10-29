/** ES6 introduced the use of backtick characters as delimiters
 * `Hello, World!`
 * It allows for variable interpolation
 * This syntax actually allows for expressoin evaluation
 * Template strings can span multiple lines
 */

let greet = "Hello";
let place = "World";

// Variable interpolation
console.log(`${greet} ${place} !`)

// Expression evaluation
console.log(`Radisson Blu is a ${1 + 1 + 1 + 1 + 1} stars hotel!`);

// Span multiple lines
console.log(`Hello,
World
!`);