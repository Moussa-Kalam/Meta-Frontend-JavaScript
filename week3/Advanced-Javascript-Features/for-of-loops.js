/** A for loop can work on iterable dtate type. 
 * It cannot work on an object directly since an object is not iterable
 */

 const car = {
    speed: 100,
    color: "blue"
}

// for(prop of car) {
//     console.log(prop)  // Uncaught TypeError: car is not iterable
// }

// Contrary to objects, arrays are iterable
// Let's iterate through an array to output its content
const colors = ["red", "orange", "yellow"];
for (let color of colors) {
    console.log(color);
}