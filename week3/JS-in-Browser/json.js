/** JavaScript Object Notation
 * primitive values: strings, numbers, booleans, null
 * complex values: objects, and arrays (no functions!)
 * objects have double-quoted strings for all keys
 * properties are comma-delimited both in JSON objects and in JSON arrays
 * strings properties must be surrounded in double-quotes
 * number properties are represented using the regular JS number syntax
 * boolean properties are represented using the regular JS boolean syntax
 * null as a property is the same as in regular JS
 */

// Examples of stringified JSON object'
'{"color":"red"}'
'{"color":"red", "nestedObject": { "color": "blue" } }'

// Examples of JSON string encoding array
'["one", "two", "three"]'
'[{"color": "blue"}, {"color": "red"}]'


/* Convert a JSON string to a JavaScript object */
const jsonStr = '{"greeting":"hello"}';
const aPlainObj = JSON.parse(jsonStr);

console.log(jsonStr);
aPlainObj.greeting = "hi";
console.log(aPlainObj);


/* Convert a regular object to a JSON string */
const data = {
    firstName: "Moussa",
    lastName: "AMZAT",
    greeting: "Hello",
}

console.log(JSON.stringify(data));


function scopeTest() {
    var y = 44;

    console.log(x);
}

var x = 33;
scopeTest();
