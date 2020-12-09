const numbers = [3, 4];

//adding element in the end of an array
numbers.push(5, 6);

//beginning 
numbers.unshift(1, 2);

//middle 
numbers.splice(3, 0, 'hello', 'world')
console.log(numbers)

//finding element exist in an array 
const number2 = [1, 2, 3, 1, 4];

console.log(number2.indexOf(1, 2));
console.log(number2.lastIndexOf(1));