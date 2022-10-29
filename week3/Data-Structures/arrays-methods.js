// Working with arrays in JavaScript

/** The forEach method
 * This method accepts a function that will work on each array item
 * That function first's parameter is the current array itself
 * The second (optional) parameter is the index
 */

const fruits = ["Kiwi", "mango", "apple", "pear"];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);

// Very often, the function that the forEach() method to use is passed in directly into the method call

const veggies = ["onion", "garlic", "potato"];
veggies.forEach(function(veggie, index) {
    console.log(`${index}. ${veggie}`);
});


/** The filter() method
 * It filters your arrays based on a specific test
 * It accepts a function that performs some work on each of the items in the array
 * Those array items that pass the test are returned*/ 

const nums = [0, 10, 20, 30, 40, 50];
nums.filter (function(num) {
    return num > 20;
});  // This will return [30, 40, 50]


/** The map method ()
 * It is used to map each array item over to another array's item
 * based on whatever work is performed inside the function that is passed-in to the map as a parameter
 * Let's use the nums variable to perform actions
 */
 nums.map(function(num) {
    return num / 5
 })

 nums.map(function(num) {
    return num / 10
 })