
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


//exercise adresss

const address = {
    street: "Sukhumvit",
    city: "Bangkok",
    zipCode: 10110
};

function showAddress(address) {
    for (let key in address)
        console.log(key, address[key]);
}

showAddress(address)


//exercise two factory and constructor 

//factory
function showAddress2(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}

const showLondon = showAddress2("Kingston", "London", "W9090LLO");
console.log(showLondon)




//constructor 
function ShowFavs(favsFood, favsFruit, favsColor) {
    this.favsFood = favsFood;
    this.favsFruit = favsFruit;
    this.favsColor = favsColor;
}

const favsObject = new ShowFavs("Padthai", "Banana", "Red")
console.log(favsObject)
