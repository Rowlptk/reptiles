// // variables
// // var, let, const

// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// // Init Var
// var greeting;
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);

// // Naming Conventions vars
// // letters, numbers, _, $
// // cannot start with number 

// // Multi word vars
// var firstName = 'John'; // camel case
// var first_name = 'Sara'; // Underscore
// var FirstName = 'Tom'; // Pascal case
// var firstname;

// // LET
// let name;
// name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// CONST
// const name = 'John';
// console.log(name);
// Can not reassign
// name = 'Sara';
// Have to assign a value
// const greeting;

const person = {
    name: 'John',
    age: 30
}

person.name = 'Sara';
person.age = 32;

console.log(person);

const numbers = [1,2,3,4,5];
numbers.push(6);

console.log(numbers);