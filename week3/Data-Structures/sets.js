/** Sets in JavaScript
 * A set is a collection of unique values
 * To build a new set, you can use the Set construct: new Set()
 * It can accept an array
 * We can use it quickly filter an array for unique members
 */

 const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
 const uniqueFruits = new Set(repetitiveFruits);
 console.log(uniqueFruits);