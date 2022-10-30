/* Spread Operator / Rest Operator */

// Add the elements of an existing array into a new array
let certsToAdd = ["Algorithm and Data Structures", "Front End Libraries"];
let certifications = ["Responsive Web Design", ...certsToAdd, "Data Visualization", "APIs and Microservices", "Quality Assurance and Information Security"];
console.log(certifications);


// Pass elements of an array as arguments to a function
function addThreeNumbers(x, y, z) {
    console.log(x + y + z);
}
let args = [0, 1, 2];
addThreeNumbers(...args);


// Copy arrays
let arr = [1, 2, 3];
let arr2 = [...arr]; // Copy arr into arr2
arr2.push(4);
console.log(arr);
console.log(arr2);

 
// Concatenate arrays
let nums1 = [0, 1, 2, 3];
let nums2 = [4, 5, 6, 7];
nums1 = [...nums1, ...nums2]
console.log(nums1);


// REST: Condense multiple elements into an array
function multiply(multiplier, ...myArr) {
    return myArr.map(function(element) {  // For each element in myArr, execute the block of code
        return multiplier * element;
    });
}

let numbersMultiplied = multiply(2, 1, 2, 3);
console.log(numbersMultiplied);

/** Explanation
 * multiplier will be the first argument in my function call
 * ...myArray will be the other arguments in my function
 */