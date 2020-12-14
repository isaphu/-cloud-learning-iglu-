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


//combine an array and slice an array
const first = [1, 2, 3, 4];
const seconds = [5, 6, 7, 8];

const combineArray = first.concat(seconds);
console.log(combineArray)

const slice = combineArray.slice(2, 4)
console.log(slice);

//the spread operator

//like saying first.concat(second);
const combined2 = [...first, ...seconds];

combined2.slice();
const copy = [...combined2];


//iterating an array 
for (let second of seconds)
    console.log(second);

seconds.forEach(function (seconds) {
    console.log(seconds);
})

//or use the arrow function:
seconds.forEach(seconds => console.log(seconds))

//join an array
const joined = first.join(':');
console.log(joined);

//split and join 
const text = 'This is my first text';
const parts = text.split(' ');
console.log(parts);
const parts2 = parts.join('-');
console.log(parts2);

//sorting 
const numberInArray = [2, 3, 1];
numberInArray.sort();
console.log(numberInArray);

numberInArray.reverse();
console.log(numberInArray);

const courseInfos = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'JavaScript' },
    { id: 3, name: 'Django' },
    { id: 4, name: 'AWS' },
    { id: 5, name: 'TypeScript' },
    { id: 6, name: 'C#' },
];

courseInfos.sort(function (a, b) {

    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
});


console.log(courseInfos);

//testing an element of array using every and some

const number11 = [1, 2, 3, 4, 5, 6, 7, -1];

//.every check every element
//.some check if atleast one meet the criteria

const allPositive = number11.every(function (value) {
    return value >= 0;
});
console.log(allPositive);

//filtering 
const filtered = number11.filter(n => n >= 0);
console.log(filtered);

//mapping
const item = filtered.map(n => '<li>' + n + '</li>');
console.log(item)


//reducing and array
const numbers5 = [1, -1, 2, 3, 9, 0, 8];
const sum = numbers5.reduce(
    (accumulator, currentValue) => accumulator + currentValue
);
console.log(sum);

//exercise 1 
const arrayRange = arrayFromRange(1, -4)

function arrayFromRange(min, max) {
    const output = [];
    for (let i = min; i <= max; i++)
        output.push(i);
    return output;
}

console.log(arrayRange)

//exercise 2 include method

const numberInArray2 = [1, 2, 3, 4];
console.log(numberInArray2.includes(1));

function includes(array, searchElement) {
    for (let element of array)
        if (element === searchElement)
            return true;
    return false;
}
console.log(includes(numberInArray2, 1))

//except

const output = except(numberInArray2, [1]);

function except(array, excluded) {
    const output = [];
    for (let element of array)
        if (!excluded.includes(element))
            output.push(element);
    return output;
}

console.log(output)