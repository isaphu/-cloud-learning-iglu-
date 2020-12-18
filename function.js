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

