/** Looping over an object using built-in methods
 * The Object.key() method receives an object as its parameter and returned an array of string
 * where each string is a property key of the properties contained in the object passed in the method.
 * 
 * The Object.values() method returns an array of the property value of the properties contained in the object passed in the method
 * 
 * The Object.entries() method returns the 2-member arrays nested inside an array
 */

const car = {
    speed: 200,
    color: "red"
}

console.log(Object.keys(car)); // ['speed','color']

console.log(Object.values(car)); // [200,'red']

console.log(Object.entries(car)); // [ [ 'speed', 200 ], [ 'color', 'red' ] ]


/**
 * The for-of loop will iterate over the object's own properties only when using the Object.keys() method to return an array to loop over.
 * The for-of loop will not iterate over the object and its prototype properties. The for-in loop will do. 
 */

 var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for (key of Object.keys(clothingItem)) {
    console.log(key, ":", clothingItem[key]) 
}

/** Object.keys() will convert the object into an array
 * clothingItem[key] will output the value the selected key at every loop. 
 */