function walk() {
    console.log('walk');
}

//another way to define a function called anonymous function expression
// let run = function () {
//     console.log('run')
// };

// let move = run;
// run();
// move();

//hoisting 
//function declaration 
walk();

function walk() {
    console.log('walk');
}

//hoisting is the process of moving function declaration to the top of the file 
//done automatically by javascript 

//function expression 
// run(); //this wont work 


// const run = function () {
//     console.log('run');
// }

//argument 
function sum(a, b) {
    return a + b
}
console.log(sum(1, 2))


//rest operator ... don't confuse with spread operator ... EXACTLY the same
function sum(...args) {
    console.log(args);
}

console.log(sum(1, 2, 3, 4, 6, 7, 8));


//getters and setter

//getter => access properties
//setter => change (mutate) them 

// const person = {
//     firstName: 'Mosh',
//     lastName: 'Hamedani',
//     get fullname() {
//         return `${person.firstName} ${person.lastName}`
//     },
//     set fullName(value) {
//         const parts = value.split(' ');
//         this.firstName = parts[0];
//         this.lastName = parts[1];
//     }
// };

// console.log(person)

//try and catch, basic error handling 
const person = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    set fullname(value) {
        if (typeof value !== 'string')
            throw new Error('value is not a string');

        const parts = value.split(' ');
        if (parts.length !== 2)
            throw new Error('Enter a first and last name')
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

try {
    person.fullName = null;
} catch (e) {
    alert(e);
}

console.log(person)

