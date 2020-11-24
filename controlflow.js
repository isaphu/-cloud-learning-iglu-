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

