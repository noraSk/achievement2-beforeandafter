const greet = function(name, age, hobby) {
    console.log('Hello, my name is ${name}, I am ${age} years old and I like ${hobby} on my free time.');
}

const name = 'Leonora';
let age = 19;
const hobby = 'drawing';

greet(name, age, hobby);

// change

let text = 'Hello, my name is ${name}, I am ${age} years old and I like ${hobby} on my free time.';
let result = text.replace(/Hello/gi, 'Hi');

console.log(greet);