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
