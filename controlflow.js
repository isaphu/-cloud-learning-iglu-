
//if..else
//if wage is 100 - 1000: underpaid
//if wage is 1000-2000: ok
//if wage is 2000-5000: excellent paid
// otherwise: no need to consider

let wage = 2;
if (wage >= 0 && wage < 1000)
    console.log("must consider for increasing pay and benefits");
else if (wage >= 1000 && wage < 2000)
    console.log("must consider for increasign pay");
else if (wage >= 2000 && wage < 5000)
    console.log("employee has excellent benefit and pay, consider case by case");
else console.log("consider increasing upon feedback from manager");

//switch..and case

let employeePosition = "manager";

switch (employeePosition) {
    case "manager":
        console.log("Manager Level 02");
        break;
    case "officer":
        console.log("Officer Level 01");
        break;
    default:
        console.log("Unknown User");
}

let employeePosition2 = "officer";
let wage2 = 11000;
if ((employeePosition == "officer" && wage2 >= 100) || wage2 < 2500)
    console.log("This role need to be consider for wage increase");
else if ((employeePosition == "officer" && wage2 >= 2500) || wage2 < 5000)
    console.log("This role doesn't nedd to be consider for wage increase");
else if (employeePosition == "manager" && wage2 < 10000)
    console.log(
        "This role need to be promoted but doesn't need to consider for wage increase"
    );
else console.log("consider case by case");

// for loops
//for (initialExpression; condition and compare the value with initial; increamentExpression)

let favsColor = [
    "yello",
    "red",
    "brown",
    "blue",
    "green",
    "grey",
    "purple",
    "pink",
];
for (let i = 0; i < 2; i++) {
    console.log(favsColor[2], i);
}

for (let i = 5; i >= 1; i--) {
    if (i % 2 !== 0) console.log(i);
}

//while loops
let i = 0;
/* while(condition) {
    statement
    incrementExpression
} */

while (i <= 5) {
    if (i % 2 !== 0) console.log(i);
    i++;
}

// do...while loop (always execute the code one even if the condition is false)
let s = 2;
do {
    if (s % 2 !== 0) console.log(s);
    s++;
} while (s <= 5);

//for in loop it iterate over the porperties in an object
const personInfo = {
    name: "Mary",
    age: 26,
};

for (let key in personInfo) console.log(key, personInfo[key]);

const favsFurniture = ["sofa", "chair", "stool"];
for (let index in favsFurniture) console.log(index, favsFurniture[index]);

//for-of loop it iterate over an element or an item in an array
const colors = ["red", "green", "blue"];
for (let color of colors) console.log(color);

//break and continue
let q = 0;
while (q <= 5) {
    // if (q === 5) break;
    if (q % 2 === 0) {
        q++;
        continue;
    }
    console.log(q);
    q++;
}

//max of the two number exercise

function maxNumber(num1, num2) {
    console.log(num1 > num2 ? num1 : num2);
}
maxNumber(8, 2);

//landscape or not
console.log(photoDimension(800, 700));

function photoDimension(width, height) {
    return width > height;
}

//demerit point
function checkSpeed(speed) {
    const speedLimit = 71;
    const kilometerPerPoint = 5;

    if (speed < speedLimit + kilometerPerPoint) {
        console.log("Ok");
        return;
    }

    const point = Math.floor((speed - speedLimit) / kilometerPerPoint);
    if (point >= 12) console.log("Your license has been suspended");
    else console.log("Your point is: ", point);
}
checkSpeed(80);


//even or odd number
function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
        //   if (i % 2 == 0)
        //   console.log(i, " is an even number");
        //   else
        //   console.log(i, " is an odd number");
        //the below code is cleaner:
        const message = i % 2 == 0 ? "is an even number" : "is an odd number";
        console.log(i, message);
    }
}
showNumbers(5);

//grade

const array3 = [90, 90, 90, 90, 90, 90, 90, 70, 60, 70];

/* 
1-59: F
60-69: D
70-79: C
80-89: B
90-100: A
*/

function calculateGrade(marks) {
    const average = calculateAvg(marks)
    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';
}

function calculateAvg(array3) {
    let sum = 0
    for (let value of array3)
        sum += value;
    return sum / array3.length;
}

console.log(calculateGrade(array3))


//show star
function showStars(rows) {
    for (let row = 1; row <= rows; row++) {
        let pattern = '';
        for (let i = 0; i < row; i++)
            pattern += '*';
        console.log(pattern);
    }
}
showStars(3)

//prime number

//prime (whose factors are only 1 and itself) for example 12 = 1,2,3,4,6,12, can be divided evenly by its factors
//composite for example 11 = 1,11 or 13 = 1, 13

function showPrimes(limit) {
    for (let number = 2; number <= limit; number++)
        if (isPrime(number)) console.log(number);
}

function isPrime(number) {
    for (let factor = 2; factor < number; factor++)
        if (number % factor === 0)
            return false;
    return true;
}

showPrimes(10)