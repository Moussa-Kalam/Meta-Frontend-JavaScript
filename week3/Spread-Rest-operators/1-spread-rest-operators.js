/** Using Spread and Rest
 */

// Join arrays
const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] // concatenate
console.log(fruitsAndBerries); // outputs a single array

// Join objects
const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = {...flying, ...car}
console.log(flyingCar) // {wings: 2, wheels: 4}


// Add new members to arrays without using the push() method
// Using the spread operator 

let veggies = ["onion", "parsley"];
veggies = [...veggies, "carrot", "beetroot"];
console.log(veggies);


// Convert a string to an array using the spread operator
const word = "gratitude";
const arrayOfChars = [...word];
console.log(arrayOfChars); 


// Copy an object into a separate one, using the spread operator
const device1 = {
    type: "laptop", 
    brand: "Dell",
    priceDollars: 1200
}

const device2 = {...device1};
device1.brand = "Lenovo";

console.log(device1);
console.log(device2);

// Copy an array into a separate array, also using the spread operator
const fruits1 = ["apples", "pears", "pineapple"];
const fruits2 = [...fruits1];
fruits1.pop();
console.log(fruits1, "not", fruits2);

const meal = ["soup", "steak", "ice cream"]
let [starter] = meal;
console.log(starter);