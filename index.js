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
