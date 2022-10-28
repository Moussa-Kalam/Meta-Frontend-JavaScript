/* Iterate over an array */

// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
function logDairy() {
    for (item of dairy) {
        console.log(item);
    }
}

// Task 2
const animal = {
    canJump: true
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

// console.log(bird);
function birdCan() {
    for (let item of Object.keys(bird)) {
        console.log(item,": ", bird[item]);
    }
}


// Task 3
function animalCan() {
    for (let prop in bird) {
        console.log(prop,": ", bird[prop])
    }
}


logDairy();
birdCan();
animalCan();