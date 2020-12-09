const numbers = [3, 4];

//adding element in the end of an array
numbers.push(5, 6);

//beginning 
numbers.unshift(1, 2);

//middle 
numbers.splice(3, 0, 'hello', 'world')
console.log(numbers)

//finding element exist in an array (premitives) 
const number2 = [1, 2, 3, 1, 4];

console.log(number2.indexOf(1, 2));
console.log(number2.lastIndexOf(1));

//finding element exist in an array (reference)
const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
];

const course = courses.find(function (course) {
    return course.name === 'b';
});

console.log(course);

//remove an element in an array
const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//end
const lastNumber = numbers3.pop();
//beginning
const firstNumber = numbers3.shift()

//middle
numbers3.splice(2, 2)
console.log(firstNumber);
console.log(numbers3);

//empty an array
let numbers4 = [1, 2, 3, 4, 5];
let another = numbers4;

//solution 1
numbers4 = [];
//solution 2
numbers4.length = 0;
//solution 3
numbers4.splice(0, numbers4.length);
//solution 4
while (numbers4.length > 0)
    numbers4.pop();

console.log(numbers4)