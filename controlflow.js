//if..else
//if wage is 100 - 1000: underpaid
//if wage is 1000-2000: ok
//if wage is 2000-5000: excellent paid 
// otherwise: no need to consider 

let wage = 2;
if (wage >= 0 && wage < 1000 ) 
    console.log("must consider for increasing pay and benefits");
else if (wage >=1000 && wage < 2000) 
    console.log("must consider for increasign pay");
else if (wage >=2000 && wage <5000) 
    console.log("employee has excellent benefit and pay, consider case by case"); 
else
    console.log("consider increasing upon feedback from manager"); 


//switch..and case

let employeePosition = 'manager';

switch (employeePosition) {
    case 'manager':
        console.log('Manager Level 02');
    break;
    case 'officer':
        console.log('Officer Level 01');
    break;
    default: 
        console.log('Unknown User');
}

let employeePosition2 = "officer";
let wage2 = 11000;
if (employeePosition == 'officer' && wage2 >= 100 || wage2 <2500)
    console.log('This role need to be consider for wage increase');
else if (employeePosition == 'officer' && wage2 >= 2500 || wage2 < 5000)
    console.log('This role doesn\'t nedd to be consider for wage increase');
else if (employeePosition == 'manager' && wage2 <10000)
    console.log('This role need to be promoted but doesn\'t need to consider for wage increase');
else 
    console.log('consider case by case')

// for loops 
//for (initialExpression; condition and compare the value with initial; increamentExpression)

let favsColor = ['yello', 'red', 'brown', 'blue','green','grey','purple','pink'];
for (let i = 0; i < 2; i++) {
    console.log(favsColor[2], i);
}

for (let i = 5; i >= 1; i--) {
    if(i % 2 !== 0)
    console.log(i);
}

//while loops 
let i = 0;
/* while(condition) {
    statement 
    incrementExpression
} */

while(i <= 5) {
    if (i % 2 !== 0) console.log(i);
    i++;
}

// do...while loop (always execute the code one even if the condition is false)
let s = 2
do {
    if (s % 2 !== 0) console.log(s);
    s++;
} while (s <= 5);


//for in loop
const personInfo = {
    name: 'Mary',
    age: 26
};

for(let key in personInfo)
    console.log(key, personInfo[key])

const favsFurniture = ['sofa','chair','stool'];
for (let index in favsFurniture)
    console.log(index, favsFurniture[index])