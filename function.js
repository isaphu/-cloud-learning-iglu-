function walk() {
    console.log('walk');
}

//another way to define a function called anonymous function expression
let run = function () {
    console.log('run')
};

let move = run;
run();
move();

//hoisting 
//function declaration 
walk();

function walk() {
    console.log('walk');
}

//hoisting is the process of moving function declaration to the top of the file 
//done automatically by javascript 

//function expression 
run(); //this wont work 


const run = function () {
    console.log('run');
}
