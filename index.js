//this is my ten-thousands line JS code
console.log("My name is Isa");

//to declare a variable
let name = "Isa";
console.log(name);

/* naming things:
can't be a reserved keyword
meaningful label
can't start with number
can't contain space or hyphen
name or case-sensitive use camelCase */

let firstName = "Isa";
let lastName = "Phuyuthanon";
console.log(firstName + " " + lastName);

const interestRate = 0.3;
console.log(interestRate);

let person = {
  firstNameOne: "Isa",
  lastNameOne: "Phuyuthanon",
};

//dot notation
console.log(
  "My name is " +
    person.firstNameOne +
    " and my surename is " +
    person.lastNameOne
);

//bracket notation
person["firstNameOne"] = "Mary";
console.log(person.firstNameOne);

//JS object
let personInfo = {
  name: ["Isa", "Mary", "Johs"],
  age: [26, 30, 35],
};
console.log(
  "My name is " + personInfo.name[1] + " and I am " + personInfo.age[1]
);

//array
let selectedColors = ["yellow", "red", "blue"];
selectedColors[3] = "green";
selectedColors[4] = {
  name: "Harry Potter",
  person: "Ron Wesley",
  antagonist: "Hermione Granger",
};
console.log(selectedColors.length);

//function
function morningGreeting(companyName, employeeId) {
  console.log("Good Monring " + employeeId + " from " + companyName + " !");
}
morningGreeting("Iglu", 344321);
morningGreeting("Johnson & Johnson", 122190);
morningGreeting("Netflix", 9901909);

//calculating a value

function addingNumber(number) {
  return number + number;
}

console.log(addingNumber("5", 5));
console.log(addingNumber(5, 5));
console.log(typeof addingNumber("20", 20));
console.log(typeof addingNumber(5, 5));

//adding two array
let favsThing = [];
let favsColor = ["yellow", "red", "blue"];
let favsFood = ["burger", "steak", "padthai"];

const newObj = favsColor.concat(favsFood);
console.log(newObj);
console.log(typeof newObj);

function arrayConcat(favsThing) {
  return favsThing.concat();
}
console.log(arrayConcat(favsColor, favsFood));

const newArray = favsThing.concat(favsColor, favsFood);
console.log(newArray);

//ternary operation

let points = 50;
let typeOfCustomer = points > 100 ? "Gold" : "Silver";

console.log(typeOfCustomer);

//logical AND &&, OR ||, NOT !

let a = true;
let b = true;
let checkValue = a && b;
console.log(checkValue);

let gradeAStudent = false;
let assignmentRecieved = false;
let eligibleForAdvance = gradeAStudent || assignmentRecieved;
console.log("Eligible", eligibleForAdvance);

let notEligible = !eligibleForAdvance;
console.log("Application is not eligible", notEligible);

// logical non-boolean falsy or thruthy (undefined, null, 0, false, ' ', NaN)
// sets logical OR, for P v Q is true if and only if atleast one of P or Q is true
// let checkValue = false || true;
console.log(false || true);
console.log(false || "Isa");
console.log(false || 1);
console.log(true || true);

//if the user has specified for bedroom furniture use its furniture if not use furniture from kitchen
let bedRoomFurniture = undefined;
let kitchenRoomFurniture = "table";
let checkFurniture = bedRoomFurniture || kitchenRoomFurniture;
console.log(checkFurniture);
 

 //bitwise OR 
console.log(1 | 2) 
/* because 
1 = 00000001 and 
2 = 00000010 the result is 
3 = 00000011 */

//useing bitwise operator to let user read,write and exeute
// 00000100
// 00000010
// 00000111
const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = writePermission | executePermission;

let message = (myPermission & readPermission) ? 'Yes' : 'No'
console.log(message);
