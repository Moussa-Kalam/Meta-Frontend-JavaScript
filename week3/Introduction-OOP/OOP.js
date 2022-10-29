/** Object Oriented Programming
 * Allows you to write modular code
 * Makes your code more flexible
 * Makes your code reusable
 */


// Create an object from a class
class Animal {}

let myDog = new Animal();
console.log(Animal);


/** Inheritance
 * To setup the inheritance relation between classes in JavaScript, use the extends keyword
 * Example: 
 * Create a base class of "Animal"
 * Create another class, a sub-class inheriting from "Animal", with the namee "Bird"
 * Create another class, inheriting from "Bird", and this class is "Eagle"
*/

// class Animal{}
/*class Bird extends Animal {}
  class Eagle extends Bird {} */


/** Encapsulation
 * Making a code implementation hidden from other users
 * I don't have to worry about what it does in the background, or even how it does it
 * All I want is to use it, since I know it's available to me. 
 */


/** Abstraction
 * It is about abstracting the concept of what you're trying to do,
 * rather than dealing with a specific manifestation of that concept
 */


/** Polymorphism
 * Something that can take on many shapes
 * Let's explore this using an example
 */


const bicycle = {
    bell: function() {
        return "Ring, ring! Watch out please!"
    }
}

const door = {
    bell: function() {
        return "Ring, ring! Come here, please!"
    }
}

/** Notice that the exact same name of the method can have the exact opposite intent, based on what object it is used for.
 * Access the bell() method on the each object: bicycle and door
*/
bicycle.bell(); 
door.bell(); 

// Now let's add another function declaration to make this code truly polymorphic
// It accept a thing parameter which can be an object (bicycle or door)
function ringTheBell(thing) {
    console.log(thing.bell())
}

// Invoke the ringTheBell() function and pass it the bicycle object
ringTheBell(bicycle); // "Ring, ring! Watch out please!"

// Invoke the ringTheBell() function and pass it the door object
ringTheBell(door); // "Ring, ring! Come here, please!"


/** Here is an example of polymorphism using classes in JavaScript*/

class Bird {
    useWings() {
        console.log("Flying!")
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings()
        console.log("Barely flapping!")
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!")
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"




// create your classes here
class EducationCenter {
    university() {
        console.log("Top Notch University")
    }
}

class Alu extends EducationCenter {
    university() {
        super.university() /* super keyword is used to specify what property gets inherited
                            from the super-class in the sub-class*/
        console.log("African Leadership University");
    }
}

class Cma extends EducationCenter {
    university() {
        super.university()
        console.log("Canergie Mellon Africa");
    }
}

class Pui extends EducationCenter {
    university() {
        console.log("Panafrican University Institute")
    }
    }


let rwandaUniv1 = new Alu();
let rwandaUniv2 = new Cma();
let beninUniv3 = new Pui();

rwandaUniv1.university();
rwandaUniv2.university();
beninUniv3.university();

