
//object-oriented programming (oop): is basically a style of programming where we see a program as a 
//collection of object that talk to each other to perfomr some functionality 

const circle = {
    radius: 1, //porperties
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function () {  //function 
        console.log('draw')
    }
};

circle.draw(); //method

//factory function it produces object

function createCircle(radius) {
    return {
        radius, //porperties
        draw() {
            console.log('factory function produces object')

        }
    };
}

const circle1 = createCircle(1);
console.log(circle1)
circle1.draw();



//constructor, use pascal notation for example OneTwoThreeFour
//the THIS keyword refer to the object that execute this piece of code
const myCircle = createCircle(1);

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('this is constructor function');
    }
}

//the NEW operator first create an empty object
//then it will set THIS to point to object (const x = {}) 
//finally it will return an object from the Circle function    
const circle2 = new Circle(1);
const x = {};


const now = new Date();
const now2 = new Date