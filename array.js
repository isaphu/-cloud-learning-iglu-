const numbers = [3, 4];

//adding element in the end of an array
numbers.push(5, 6);

//beginning 
numbers.unshift(1, 2);

//middle 
numbers.splice(3, 0, 'hello', 'world')
console.log(numbers)