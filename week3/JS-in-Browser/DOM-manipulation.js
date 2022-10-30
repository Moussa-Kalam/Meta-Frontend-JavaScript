// DOM Manipulation
// The DOM allows you to change properties of objects on a webpage

// Create a h2 element
const h2 = document.createElement('h2')

// Add some text to the h2 element
h2.innerText = 'This is an h2 heading'

// Add some an id and a class HTML attribute
h2.setAttribute('id', 'subheading')
h2.setAttribute('class', 'secondary')

// Add my h2 to the DOM
document.body.appendChild(h2) 

