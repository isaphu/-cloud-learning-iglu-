
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